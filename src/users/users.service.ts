import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { BcryptService } from 'src/bcrypt/bcrypt.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService, private bcrypt: BcryptService) { }
  async create(createUserDto: Prisma.UsersUncheckedCreateInput) {
    createUserDto.password = await this.bcrypt.hash(createUserDto.password)
    return this.prisma.users.create({
      data: createUserDto
    });
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  findOne(where: Prisma.UsersWhereUniqueInput) {
    return this.prisma.users.findUnique({
      where,
      include: {
        authors: true
      }
    });
  }

  async update(where: Prisma.UsersWhereUniqueInput, data: Prisma.UsersUpdateInput) {
    if (data.password) {
      data.password = await this.bcrypt.hash(data.password.toString())
    }
    return this.prisma.users.update({
      data,
      where
    });
  }

  remove(where: Prisma.UsersWhereUniqueInput) {
    return this.prisma.users.delete({
      where
    })
  }
}

