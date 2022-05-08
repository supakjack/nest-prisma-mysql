import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: Prisma.UsersUncheckedCreateInput) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Prisma.UsersWhereUniqueInput) {
    return this.usersService.findOne({id: +id});
  }

  @Patch(':id')
  update(@Param('id') id: Prisma.UsersWhereUniqueInput, @Body() updateUserDto: Prisma.UsersUpdateInput) {
    return this.usersService.update({id: +id}, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Prisma.UsersWhereUniqueInput) {
    return this.usersService.remove({id: +id});
  }
}
