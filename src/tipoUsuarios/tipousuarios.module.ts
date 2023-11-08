import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersTipoService } from './tipousuarios.service';
import { UsersTipoController } from './tipousuarios.controller';
import { TipoUsuarios } from './tipousuarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoUsuarios])],
  controllers: [UsersTipoController],
  providers: [UsersTipoService],
})
export class TipoUsersModule {}
