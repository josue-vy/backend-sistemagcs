import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fase } from './fase.entity';
import { FaseDto } from './dto/create-fase.dto';

@Injectable()
export class FaseService {
  constructor(
    @InjectRepository(Fase)
    private elementoConfiRepository: Repository<Fase>,
  ) {}

  createProyecto(user: FaseDto) {
    const newTipoUser = this.elementoConfiRepository.create(user);
    return this.elementoConfiRepository.save(newTipoUser);
  }

  getProyecto() {
    return this.elementoConfiRepository.find();
  }

  deleteProyecto(id: number) {
    return this.elementoConfiRepository.delete({ id });
  }

  updateProyecto(id: number, user: FaseDto) {
    return this.elementoConfiRepository.update({ id }, user);
  }
}
