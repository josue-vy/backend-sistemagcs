import {
  Controller,
  Post,
  Get,
  UploadedFile,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SolicitudCambiosService } from './solicitudCambios.service';
import { diskStorage } from 'multer';
import { CreateSolicitudCambioDto } from './dto/create-solicitudCambios.dto';
import { SolicitudCambio } from './solicitudCambios.entity';

@Controller('solicitudC')
export class SolicitudCambioController {
  constructor(private solicitudCambioService: SolicitudCambiosService) {}

  @Get()
  getTipoUsers() {
    return this.solicitudCambioService.getTipoUsers();
  }
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, file.fieldname + '-' + uniqueSuffix);
        },
      }),
    }),
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() newUser: CreateSolicitudCambioDto,
  ): Promise<SolicitudCambio> {
    // Llama a la función del servicio para crear un nuevo tipo de usuario con el archivo
    return this.solicitudCambioService.createTipoUserWithFile(newUser, file);
  }
}
// @Patch(':id')
// updateTipoUser(
//   @Param('id', ParseIntPipe) id: number,
//   @Body()
//   user: UpdateTipoUserDto,
// ) {
//   return this.usersTipoService.updateTipoUser(id, user);
// }
