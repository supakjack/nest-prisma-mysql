import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: Prisma.BooksUncheckedCreateInput) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Prisma.BooksWhereUniqueInput) {
    return this.booksService.findOne({id: +id});
  }

  @Patch(':id')
  update(@Param('id') id: Prisma.BooksWhereUniqueInput, @Body() updateBookDto: Prisma.BooksUpdateInput) {
    return this.booksService.update({id: +id}, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Prisma.BooksWhereUniqueInput) {
    return this.booksService.remove({id: +id});
  }
}
