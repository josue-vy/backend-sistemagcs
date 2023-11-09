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
import { MiembroProyecto } from './miembroProyecto.entity';
import { MiembroProDto } from './dto/create-miembroProyecto.dto';

@Controller('miembroelem')
export class MiembroProController {
  constructor(private elementoService: MiembroProService) {}

  @Get()
  getProyecto(): Promise<MiembroProyecto[]> {
    return this.elementoService.getProyecto();
  }
  @Post()
  createProyecto(@Body() newUser: MiembroProDto): Promise<MiembroProyecto> {
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
