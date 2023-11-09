import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MiembroElemento } from './miembroElemento.entity';
import { MiembroEleDto } from './dto/create-miembroElemento.dto';

@Injectable()
export class MiembroElemService {
  constructor(
    @InjectRepository(MiembroElemento)
    private elementoConfiRepository: Repository<MiembroElemento>,
  ) {}

  createProyecto(user: MiembroEleDto) {
    const newTipoUser = this.elementoConfiRepository.create(user);
    return this.elementoConfiRepository.save(newTipoUser);
  }

  getProyecto() {
    return this.elementoConfiRepository.find();
  }

  deleteProyecto(id: number) {
    return this.elementoConfiRepository.delete({ id });
  }

  updateProyecto(id: number, user: MiembroEleDto) {
    return this.elementoConfiRepository.update({ id }, user);
  }
}
