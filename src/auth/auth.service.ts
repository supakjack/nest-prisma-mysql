import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BcryptService } from 'src/bcrypt/bcrypt.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
    constructor(private bcrypt: BcryptService, private prisma: PrismaService) { }
    
    async login(loginUserDto: LoginUserDto) {

        const user = loginUserDto.email ? await this.prisma.users.findUnique({
            where: { email: loginUserDto.email }
        }) : false
        const checkLogin = user && loginUserDto.password && await this.bcrypt.compare(loginUserDto.password, user.password)
        return checkLogin ? user : new HttpException('Not Found Email Or Password', HttpStatus.NOT_FOUND);
    }
}
