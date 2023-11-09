import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MiembroElemento } from './miembroElemento.entity';
import { MiembroElemController } from './miembroElemento.controller';
import { MiembroElemService } from './miembroElemento.service';

@Module({
  imports: [TypeOrmModule.forFeature([MiembroElemento])],
  controllers: [MiembroElemController],
  providers: [MiembroElemService],
})
export class MiembroElemModule {}
