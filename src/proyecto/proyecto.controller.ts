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
import { ProyectoService } from './proyecto.service';
import { Proyecto } from './proyecto.entity';
import { ProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';

@Controller('proyecto')
export class ProyectoController {
  constructor(private proyectoService: ProyectoService) {}

  @Get()
  getProyecto(): Promise<Proyecto[]> {
    return this.proyectoService.getProyecto();
  }
  @Post()
  createProyecto(@Body() newUser: ProyectoDto): Promise<Proyecto> {
    return this.proyectoService.createProyecto(newUser);
  }
  @Delete(':id')
  deleteProyecto(@Param('id', ParseIntPipe) id: number) {
    return this.proyectoService.deleteProyecto(id);
  }
  @Patch(':id')
  updateProyecto(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    user: UpdateProyectoDto,
  ) {
    return this.proyectoService.updateProyecto(id, user);
  }
}
