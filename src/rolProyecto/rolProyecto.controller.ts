import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  ParseIntPipe,
  //   Patch,
} from '@nestjs/common';
import { RolProyectoService } from './rolProyecto.service';
import { RolProyecto } from './rolProyecto.entity';
import { RolProyectoDto } from './dto/create-rolProyecto.dto';

@Controller('proyectorol')
export class RolProyectoController {
  constructor(private proyectoService: RolProyectoService) {}

  @Get()
  getProyecto(): Promise<RolProyecto[]> {
    return this.proyectoService.getProyecto();
  }
  @Post()
  createProyecto(@Body() newUser: RolProyectoDto): Promise<RolProyecto> {
    return this.proyectoService.createProyecto(newUser);
  }
  @Delete(':id')
  deleteProyecto(@Param('id', ParseIntPipe) id: number) {
    return this.proyectoService.deleteProyecto(id);
  }
  //   @Patch(':id')
  //   updateProyecto(
  //     @Param('id', ParseIntPipe) id: number,
  //     @Body()
  //     user: UpdateProyectoDto,
  //   ) {
  //     return this.proyectoService.updateProyecto(id, user);
  //   }
}
