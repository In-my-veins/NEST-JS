import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksService } from './books/books.service';
import { Books } from './books/books';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, BooksService, Books],
})
export class AppModule {}
