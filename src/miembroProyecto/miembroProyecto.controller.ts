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
import { MiembroProService } from './miembroProyecto.service';
import { MiembroProDto } from './dto/create-miembroProyecto.dto';

@Controller('miembropro')
export class MiembroProController {
  constructor(private miembroProService: MiembroProService) {}

  @Get()
  getMiembroPro() {
    return this.miembroProService.getMiembroPro();
  }
  @Get('data')
  async getMiembroProDataWithRelatedEntities() {
    const miembrosProyecto =
      await this.miembroProService.getMiembroProDataWithRelatedEntities();
    return miembrosProyecto;
  }

  @Post()
  async createMiembroPro(@Body() body: MiembroProDto) {
    try {
      const createdMiembros =
        await this.miembroProService.createMiembroPro(body);
      return {
        createdMiembros,
        message: 'Miembros del proyecto creados correctamente.',
      };
    } catch (error) {
      return { error: 'Error al crear miembros del proyecto.' };
    }
  }

  @Delete(':id')
  deleteProyecto(@Param('id', ParseIntPipe) id: number) {
    return this.miembroProService.deleteProyecto(id);
  }
}
