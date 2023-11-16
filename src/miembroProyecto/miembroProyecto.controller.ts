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

  @Post()
  async createMiembroPro(@Body() body: MiembroProDto) {
    const createdMiembroPro =
      await this.miembroProService.createMiembroPro(body);

    // Construir un objeto de respuesta con detalles del miembro creado
    const response = {
      id: createdMiembroPro.id,
      nombre: body.nombre,
      rol: body.rol,
      proyecto: body.proyecto,
      // Puedes agregar más propiedades si es necesario
    };

    return response;
  }
  @Delete(':id')
  deleteProyecto(@Param('id', ParseIntPipe) id: number) {
    return this.miembroProService.deleteProyecto(id);
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
