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
import { CreateFaseDto } from './dto/create-fase.dto';

@Controller('fase')
export class FaseController {
  constructor(private faseService: FaseService) {}

  @Get()
  getFase() {
    return this.faseService.getFase();
  }
  @Post()
  createFase(@Body() body: CreateFaseDto) {
    return this.faseService.createFase(body);
  }
  @Delete(':id')
  deleteProyecto(@Param('id', ParseIntPipe) id: number) {
    return this.faseService.deleteFase(id);
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
