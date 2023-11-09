import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MiembroProyecto } from './miembroProyecto.entity';
import { MiembroProController } from './miembroProyecto.controller';
import { MiembroProService } from './miembroProyecto.service';

@Module({
  imports: [TypeOrmModule.forFeature([MiembroProyecto])],
  controllers: [MiembroProController],
  providers: [MiembroProService],
})
export class MiembroProModule {}
