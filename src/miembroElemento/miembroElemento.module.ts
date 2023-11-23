import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MiembroElemento } from './miembroElemento.entity';
import { MiembroElemController } from './miembroElemento.controller';
import { MiembroElemService } from './miembroElemento.service';
import { ElementoConfiguracion } from 'src/elementoConfiguracion/elementoConfiguracion.entity';
import { MiembroProyecto } from 'src/miembroProyecto/miembroProyecto.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MiembroElemento,
      ElementoConfiguracion,
      MiembroProyecto,
    ]),
  ],
  controllers: [MiembroElemController],
  providers: [MiembroElemService],
})
export class MiembroElemModule {}
