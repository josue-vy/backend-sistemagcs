import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './proyecto.entity';
import { ProyectoService } from './proyecto.service';
import { ProyectoController } from './proyecto.controller';
import { Metodologia } from 'src/metodologia/metodologia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Proyecto, Metodologia])],
  controllers: [ProyectoController],
  providers: [ProyectoService],
})
export class ProyectoModule {}
