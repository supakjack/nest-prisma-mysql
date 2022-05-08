import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { BcryptService } from 'src/bcrypt/bcrypt.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, BcryptService]
})
export class UsersModule {}
