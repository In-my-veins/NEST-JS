import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {

  private users = [
    { id: 1, name: "Asifiwe", class: "S4" },
    { id: 2, name: "Nshuti", class: "S6" },
    { id: 3, name: "Ben", class: "A1" }
  ];

  private books = [
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "Deep Work", author: "Cal Newport" },
    { id: 3, title: "Clean Code", author: "Robert Martin" }
  ];

  getUsers() {
    return this.users;
  }

  getBooks() {
    return this.books;
  }

  updateUser(id: number, body: any) {
    const user = this.users.find(u => u.id === id);

    if (!user) return { message: "User not found" };

    user.name = body.name;
    user.class = body.class;

    return { message: "User updated", user };
  }

  updateBook(id: number, body: any) {
    const book = this.books.find(b => b.id === id);

    if (!book) return { message: "Book not found" };

    book.title = body.title;
    book.author = body.author;

    return { message: "Book updated", book };
  }

  deleteBook(id: number) {
    this.books = this.books.filter(b => b.id !== id);

    return {
      message: "Book deleted",
      books: this.books
    };
  }
}
