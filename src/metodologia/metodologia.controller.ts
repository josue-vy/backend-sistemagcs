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
import { MetodologiaService } from './metodologia.service';
import { Metodologia } from './metodologia.entity';
import { MetodologiaDto } from './dto/create-metodologia.dto';

@Controller('fase')
export class MetodologiaController {
  constructor(private elementoService: MetodologiaService) {}

  @Get()
  getProyecto(): Promise<Metodologia[]> {
    return this.elementoService.getProyecto();
  }
  @Post()
  createProyecto(@Body() newUser: MetodologiaDto): Promise<Metodologia> {
    return this.elementoService.createProyecto(newUser);
  }
  @Delete(':id')
  deleteProyecto(@Param('id', ParseIntPipe) id: number) {
    return this.elementoService.deleteProyecto(id);
  }
  //   @Patch(':id')
  //   updateProyecto(
  //     @Param('id', ParseIntPipe) id: number,
  //     @Body()
  //     user: UpdateProyectoDto,
  //   ) {
  //     return this.elementoService.updateProyecto(id, user);
  //   }
}
