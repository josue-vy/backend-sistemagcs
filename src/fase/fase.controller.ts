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
import { FaseService } from './fase.service';
import { Fase } from './fase.entity';
import { FaseDto } from './dto/create-fase.dto';

@Controller('fase')
export class FaseController {
  constructor(private elementoService: FaseService) {}

  @Get()
  getProyecto(): Promise<Fase[]> {
    return this.elementoService.getProyecto();
  }
  @Post()
  createProyecto(@Body() newUser: FaseDto): Promise<Fase> {
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
