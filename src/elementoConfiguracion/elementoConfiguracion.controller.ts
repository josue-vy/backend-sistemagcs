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
import { ElementoConfiguracion } from './elementoConfiguracion.entity';
import { ElementoConfiDto } from './dto/create-elementoConfiguracion.dto';

@Controller('elementoc')
export class ElementoController {
  constructor(private elementoService: ElementoService) {}

  @Get()
  getProyecto(): Promise<ElementoConfiguracion[]> {
    return this.elementoService.getProyecto();
  }
  @Post()
  createProyecto(
    @Body() newUser: ElementoConfiDto,
  ): Promise<ElementoConfiguracion> {
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
