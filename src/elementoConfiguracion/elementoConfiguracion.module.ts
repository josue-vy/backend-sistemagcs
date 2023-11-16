import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ElementoConfiguracion } from './elementoConfiguracion.entity';
import { ElementoController } from './elementoConfiguracion.controller';
import { ElementoService } from './elementoConfiguracion.service';
import { Fase } from 'src/fase/fase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ElementoConfiguracion, Fase])],
  controllers: [ElementoController],
  providers: [ElementoService],
})
export class ElementoConfiModule {}
