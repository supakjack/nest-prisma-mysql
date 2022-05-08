import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) { }

  create(createAuthorDto: Prisma.AuthorsCreateInput) {
    return this.prisma.authors.create({
      data: createAuthorDto
    })
  }

  findAll() {
    return this.prisma.authors.findMany();
  }


  findOne(AuthorsWhereUniqueInput: Prisma.AuthorsWhereUniqueInput) {
    return this.prisma.books.findUnique({ where: AuthorsWhereUniqueInput });
  }

  update(where: Prisma.AuthorsWhereUniqueInput, data: Prisma.AuthorsUpdateInput) {
    return this.prisma.authors.update({
      data,
      where
    });
  }

  remove(where: Prisma.AuthorsWhereUniqueInput) {
    return this.prisma.authors.delete({
      where
    })
  }
}
