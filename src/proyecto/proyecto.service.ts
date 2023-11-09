import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from './proyecto.entity';
import { ProyectoDto } from './dto/create-proyecto.dto';

@Injectable()
export class ProyectoService {
  constructor(
    @InjectRepository(Proyecto)
    private proyectoRepository: Repository<Proyecto>,
  ) {}

  createProyecto(user: ProyectoDto) {
    const newTipoUser = this.proyectoRepository.create(user);
    return this.proyectoRepository.save(newTipoUser);
  }

  getProyecto() {
    return this.proyectoRepository.find();
  }

  deleteProyecto(id: number) {
    return this.proyectoRepository.delete({ id });
  }

  updateProyecto(id: number, user: ProyectoDto) {
    return this.proyectoRepository.update({ id }, user);
  }
}
