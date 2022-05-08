import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  create(@Body() createAuthorDto: Prisma.AuthorsUncheckedCreateInput) {
    return this.authorsService.create(createAuthorDto);
  }

  @Get()
  findAll() {
    return this.authorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Prisma.AuthorsWhereUniqueInput) {
    return this.authorsService.findOne({id: +id});
  }

  @Patch(':id')
  update(@Param('id') id: Prisma.AuthorsWhereUniqueInput, @Body() updateAuthorDto: Prisma.AuthorsUpdateInput) {
    return this.authorsService.update({id: +id}, updateAuthorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Prisma.AuthorsWhereUniqueInput) {
    return this.authorsService.remove({id: +id});
  }
}
