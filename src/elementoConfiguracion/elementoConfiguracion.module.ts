import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ElementoConfiguracion } from './elementoConfiguracion.entity';
import { ElementoController } from './elementoConfiguracion.controller';
import { ElementoService } from './elementoConfiguracion.service';

@Module({
  imports: [TypeOrmModule.forFeature([ElementoConfiguracion])],
  controllers: [ElementoController],
  providers: [ElementoService],
})
export class ElementoConfiModule {}
