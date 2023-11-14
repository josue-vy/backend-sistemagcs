import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fase } from './fase.entity';
import { FaseController } from './fase.controller';
import { FaseService } from './fase.service';
import { Metodologia } from 'src/metodologia/metodologia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fase, Metodologia])],
  controllers: [FaseController],
  providers: [FaseService],
})
export class FaseModule {}
