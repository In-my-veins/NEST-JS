import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController{
   constructor(private readonly usersService: UsersService){}
 
   @Get()
  getUsers(){
    return this.usersService.getUser();
  }

  @Get(':id')
  getUserId(@Param('id',ParseIntPipe) id:number){
    return this.usersService.getUserId(id)
  }

 @Post()
  postUser(@Body() body: any){
    return this.usersService.postUser(body)
  }

  @Patch(':id')
  updateUser(@Param('id',ParseIntPipe) id: number,@Body() body: any){
       return this.usersService.updateUser(id,body)
  }

  @Delete(':id')
   deleteUser(@Param('id',ParseIntPipe) id:number){
    return this.usersService.deleteUser(id)
   }

}






















