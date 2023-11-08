import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './usuario.service';
import { Usuarios } from './usuario.entity';
import { UsersController } from './usuario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Usuarios])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
