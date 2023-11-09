import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Metodologia } from './metodologia.entity';
import { MetodologiaDto } from './dto/create-metodologia.dto';

@Injectable()
export class MetodologiaService {
  constructor(
    @InjectRepository(Metodologia)
    private elementoConfiRepository: Repository<Metodologia>,
  ) {}

  createProyecto(user: MetodologiaDto) {
    const newTipoUser = this.elementoConfiRepository.create(user);
    return this.elementoConfiRepository.save(newTipoUser);
  }

  getProyecto() {
    return this.elementoConfiRepository.find();
  }

  deleteProyecto(id: number) {
    return this.elementoConfiRepository.delete({ id });
  }

  updateProyecto(id: number, user: MetodologiaDto) {
    return this.elementoConfiRepository.update({ id }, user);
  }
}
