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

      // Enviar la respuesta al cliente (puedes usar res.json() si usas Express)
      return { data: miembrosElemento }; // Envía los datos obtenidos como respuesta
    } catch (error) {
      // Manejar errores
      return { error: 'Hubo un error al obtener los datos.' };
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
