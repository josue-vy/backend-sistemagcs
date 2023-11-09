import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metodologia } from './metodologia.entity';
import { MetodologiaController } from './metodologia.controller';
import { MetodologiaService } from './metodologia.service';

@Module({
  imports: [TypeOrmModule.forFeature([Metodologia])],
  controllers: [MetodologiaController],
  providers: [MetodologiaService],
})
export class MetodologiaModule {}
