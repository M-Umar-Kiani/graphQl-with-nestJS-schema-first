import { Resolver, Query } from '@nestjs/graphql';
import { Book } from './book.schema';
import { Book as BookModel } from '../graphql';

@Resolver((of) => Book)
export class BookResolver {
  @Query((returns) => [Book], { name: 'books' })
  getAllBooks() {
    let arr: BookModel[] = [
      { id: 1, title: 'C++', price: 500 },
      { id: 2, title: 'Java', price: 900 },
      { id: 3, title: 'C#', price: 1500 },
    ];

    // return book
    return arr;
  }
}
