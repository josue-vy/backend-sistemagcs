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
import { ElementoService } from './elementoConfiguracion.service';
import { ElementoConfiDto } from './dto/create-elementoConfiguracion.dto';

@Controller('elementoc')
export class ElementoController {
  constructor(private elementoService: ElementoService) {}

  @Get()
  getElemento() {
    return this.elementoService.getElemento();
  }
  @Post()
  createElemento(@Body() body: ElementoConfiDto) {
    return this.elementoService.createElemento(body);
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
