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
import { TipoUsuarios } from './tipousuarios.entity';
import { CreateTipoUserDto } from './dto/create-tipousuarios.dto';
import { UpdateTipoUserDto } from './dto/update-tipousuarios.dto';
import { UsersTipoService } from './tipousuarios.service';

@Controller('tipousuarios')
export class UsersTipoController {
  constructor(private usersTipoService: UsersTipoService) {}

  @Get()
  getTipoUsers(): Promise<TipoUsuarios[]> {
    return this.usersTipoService.getTipoUsers();
  }
  @Post()
  createTipoUser(@Body() newUser: CreateTipoUserDto): Promise<TipoUsuarios> {
    return this.usersTipoService.createTipoUser(newUser);
  }
  @Delete(':id')
  deleteTipoUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersTipoService.deleteTipoUser(id);
  }
  @Patch(':id')
  updateTipoUser(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    user: UpdateTipoUserDto,
  ) {
    return this.usersTipoService.updateTipoUser(id, user);
  }
}
