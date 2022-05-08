import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) { }

  create(createBookDto: Prisma.BooksUncheckedCreateInput) {
    return this.prisma.books.create({
      data: createBookDto
    });
  }

  findAll() {
    return this.prisma.books.findMany({
      include: {
        author: true
      }
    });
  }

  findOne(BooksWhereUniqueInput: Prisma.BooksWhereUniqueInput) {
    return this.prisma.books.findUnique({ where: BooksWhereUniqueInput });
  }

  update(where: Prisma.BooksWhereUniqueInput, data: Prisma.BooksUpdateInput) {
    return this.prisma.books.update({
      data,
      where
    });
  }

  remove(where: Prisma.BooksWhereUniqueInput) {
    return this.prisma.books.delete({
      where
    })
  }
}
