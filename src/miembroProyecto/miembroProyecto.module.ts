import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MiembroProyecto } from './miembroProyecto.entity';
import { MiembroProController } from './miembroProyecto.controller';
import { MiembroProService } from './miembroProyecto.service';
import { Usuarios } from 'src/usuarios/usuario.entity';
import { RolProyecto } from 'src/rolProyecto/rolProyecto.entity';
import { Proyecto } from 'src/proyecto/proyecto.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MiembroProyecto,
      Usuarios,
      RolProyecto,
      Proyecto,
    ]),
  ],
  controllers: [MiembroProController],
  providers: [MiembroProService],
})
export class MiembroProModule {}
