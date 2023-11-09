import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MiembroProyecto } from './miembroProyecto.entity';
import { MiembroProDto } from './dto/create-miembroProyecto.dto';

@Injectable()
export class MiembroProService {
  constructor(
    @InjectRepository(MiembroProyecto)
    private elementoConfiRepository: Repository<MiembroProyecto>,
  ) {}

  createProyecto(user: MiembroProDto) {
    const newTipoUser = this.elementoConfiRepository.create(user);
    return this.elementoConfiRepository.save(newTipoUser);
  }

  getProyecto() {
    return this.elementoConfiRepository.find();
  }

  deleteProyecto(id: number) {
    return this.elementoConfiRepository.delete({ id });
  }

  updateProyecto(id: number, user: MiembroProDto) {
    return this.elementoConfiRepository.update({ id }, user);
  }
}
