import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolProyecto } from './rolProyecto.entity';
import { RolProyectoDto } from './dto/create-rolProyecto.dto';

@Injectable()
export class RolProyectoService {
  constructor(
    @InjectRepository(RolProyecto)
    private proyectoRepository: Repository<RolProyecto>,
  ) {}

  createProyecto(user: RolProyectoDto) {
    const newTipoUser = this.proyectoRepository.create(user);
    return this.proyectoRepository.save(newTipoUser);
  }

  getProyecto() {
    return this.proyectoRepository.find();
  }

  deleteProyecto(id: number) {
    return this.proyectoRepository.delete({ id });
  }

  updateProyecto(id: number, user: RolProyectoDto) {
    return this.proyectoRepository.update({ id }, user);
  }
}
