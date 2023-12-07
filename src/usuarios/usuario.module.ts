import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './usuario.service';
import { Usuarios } from './usuario.entity';
import { UsersController } from './usuario.controller';
import { TipoUsuarios } from 'src/tipoUsuarios/tipousuarios.entity';
import { MiembroProyecto } from 'src/miembroProyecto/miembroProyecto.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuarios, TipoUsuarios, MiembroProyecto]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
