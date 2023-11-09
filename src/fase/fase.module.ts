import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fase } from './fase.entity';
import { FaseController } from './fase.controller';
import { FaseService } from './fase.service';

@Module({
  imports: [TypeOrmModule.forFeature([Fase])],
  controllers: [FaseController],
  providers: [FaseService],
})
export class FaseModule {}
