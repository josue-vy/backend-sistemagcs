import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ElementoConfiguracion } from './elementoConfiguracion.entity';
import { ElementoConfiDto } from './dto/create-elementoConfiguracion.dto';

@Injectable()
export class ElementoService {
  constructor(
    @InjectRepository(ElementoConfiguracion)
    private elementoConfiRepository: Repository<ElementoConfiguracion>,
  ) {}

  createProyecto(user: ElementoConfiDto) {
    const newTipoUser = this.elementoConfiRepository.create(user);
    return this.elementoConfiRepository.save(newTipoUser);
  }

  getProyecto() {
    return this.elementoConfiRepository.find();
  }

  deleteProyecto(id: number) {
    return this.elementoConfiRepository.delete({ id });
  }

  updateProyecto(id: number, user: ElementoConfiDto) {
    return this.elementoConfiRepository.update({ id }, user);
  }
}
