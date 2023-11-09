import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolProyecto } from './rolProyecto.entity';
import { RolProyectoController } from './rolProyecto.controller';
import { RolProyectoService } from './rolProyecto.service';

@Module({
  imports: [TypeOrmModule.forFeature([RolProyecto])],
  controllers: [RolProyectoController],
  providers: [RolProyectoService],
})
export class RolProyectoModule {}
