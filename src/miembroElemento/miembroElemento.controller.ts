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
import { MiembroElemService } from './miembroElemento.service';
import { MiembroElemento } from './miembroElemento.entity';
import { MiembroEleDto } from './dto/create-miembroElemento.dto';

@Controller('miembroelem')
export class MiembroElemController {
  constructor(private elementoService: MiembroElemService) {}

  @Get()
  getProyecto(): Promise<MiembroElemento[]> {
    return this.elementoService.getProyecto();
  }
  @Post()
  createProyecto(@Body() newUser: MiembroEleDto): Promise<MiembroElemento> {
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
