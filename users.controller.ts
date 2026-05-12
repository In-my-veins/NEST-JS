import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post ,Query,ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('users')
export class UsersController{
   constructor(private readonly usersService: UsersService){}


  @Get()
  getUserRole(@Query('role') role?: string){
    return this.usersService.getUserRole(role);
  }

  @Get(':id')
  getUserId(@Param('id',ParseIntPipe) id:number){
    return this.usersService.getUserId(id)
  }

 @Post()
  postUser(@Body(ValidationPipe)  createUserDto:CreateUserDto){
    return this.usersService.postUser(createUserDto)
  }

  @Patch(':id')
  updateUser(@Param('id',ParseIntPipe) id: number,@Body(ValidationPipe) body: UpdateUserDto){
       return this.usersService.updateUser(id,body)
  }

  @Delete(':id')
   deleteUser(@Param('id',ParseIntPipe) id:number){
    return this.usersService.deleteUser(id)
   }

}