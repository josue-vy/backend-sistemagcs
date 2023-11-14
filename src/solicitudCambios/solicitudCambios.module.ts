import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitudCambio } from './solicitudCambios.entity';
import { SolicitudCambioController } from './solicitudCambios.controller';
import { SolicitudCambiosService } from './solicitudCambios.service';

@Module({
  imports: [TypeOrmModule.forFeature([SolicitudCambio])],
  controllers: [SolicitudCambioController],
  providers: [SolicitudCambiosService],
})
export class SolicitudCambioModule {}
