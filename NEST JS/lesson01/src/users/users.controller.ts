import { Controller, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('books')
  getBooks() {
    return this.usersService.getBooks();
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() body: any) {
    return this.usersService.updateUser(Number(id), body);
  }

  @Put('books/:id')
  updateBook(@Param('id') id: string, @Body() body: any) {
    return this.usersService.updateBook(Number(id), body);
  }

  @Delete('books/:id')
  deleteBook(@Param('id') id: string) {
    return this.usersService.deleteBook(Number(id));
  }
}

