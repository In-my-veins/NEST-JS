import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
  postUser(@Body()  createUserDto:CreateUserDto){
    return this.usersService.postUser(createUserDto)
  }

  @Patch(':id')
  updateUser(@Param('id',ParseIntPipe) id: number,@Body() body: UpdateUserDto){
       return this.usersService.updateUser(id,body)
  }

  @Delete(':id')
   deleteUser(@Param('id',ParseIntPipe) id:number){
    return this.usersService.deleteUser(id)
   }

}