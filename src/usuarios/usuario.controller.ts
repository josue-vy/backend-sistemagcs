import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './usuario.service';
import { Usuarios } from './usuario.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login.user.dto';

@Controller('usuarios')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): Promise<Usuarios[]> {
    return this.usersService.getUsers();
  }
  @Post()
  createUser(@Body() newUser: CreateUserDto): Promise<Usuarios> {
    return this.usersService.createUser(newUser);
  }
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    user: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, user);
  }
  @Post('login')
  login(@Body() loginUser: LoginUserDto): Promise<Usuarios> {
    return this.usersService.loginUser(loginUser);
  }
}
// @Controller('tipousuarios')
// export class UserTipoController {
//   constructor(private usersService: UsersService) {}
//   @Post(':id/tipouser')
//   createTipoUser(
//     @Param('id', ParseIntPipe) id: number,
//     @Body() tipoUsuarios: CreateTipoUserDto,
//   ) {
//     this.usersService.createTipoUser(id, tipoUsuarios);
//   }
