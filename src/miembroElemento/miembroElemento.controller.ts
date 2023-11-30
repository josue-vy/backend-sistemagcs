import {
  Controller,
  Post,
  Body,
  Get,

  //   Patch,
} from '@nestjs/common';
import { MiembroElemService } from './miembroElemento.service';

import { MiembroEleDto } from './dto/create-miembroElemento.dto';

@Controller('miembroelem')
export class MiembroElemController {
  constructor(private miembroElementoService: MiembroElemService) {}
  @Get()
  async getPMiembroElemento() {
    try {
      const miembrosElemento =
        await this.miembroElementoService.getPMiembroElemento();
      return { data: miembrosElemento };
    } catch (error) {
      console.error('Error al obtener los datos:', error); // Imprimir el mensaje completo del error en la consola
      return {
        error: 'Hubo un error al obtener los datos. Detalles en el servidor.',
      };
    }
  }

  @Post()
  async createMiembroElemento(@Body() miembroEleDto: MiembroEleDto) {
    try {
      const createdMiembroElemento =
        await this.miembroElementoService.createMiembroElemento(miembroEleDto);
      return {
        createdMiembroElemento,
        message: 'Miembro del elemento creado correctamente.',
      };
    } catch (error) {
      return { error: 'Error al crear el miembro del elemento.' };
    }
  }
}
