import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ElementoConfiguracion } from './elementoConfiguracion.entity';
import { ElementoConfiDto } from './dto/create-elementoConfiguracion.dto';
import { Fase } from 'src/fase/fase.entity';
import { UpdateElementoConfiDto } from './dto/update-elementoConfiguracion.dto';

@Injectable()
export class ElementoService {
  constructor(
    @InjectRepository(ElementoConfiguracion)
    private elementoConfiRepository: Repository<ElementoConfiguracion>,
    @InjectRepository(Fase) private faseRepository: Repository<Fase>,
  ) {}

  async createElemento(body: ElementoConfiDto) {
    const elementoConfi = new ElementoConfiguracion();
    elementoConfi.nomenclaturaElemento = body.nomenclaturaElemento;
    elementoConfi.nombreElemento = body.nombreElemento;

    const newElemento = await this.elementoConfiRepository.save(elementoConfi);

    const fase = new Fase();
    fase.nombreFase = body.fase;
    fase.elementoConfiguracion = newElemento;

    return this.faseRepository.save(fase);
  }

  async getElemento() {
    return this.elementoConfiRepository.find({ relations: ['fase'] });
  }

  deleteProyecto(id: number) {
    return this.elementoConfiRepository.delete({ id });
  }

  updateProyecto(id: number, user: UpdateElementoConfiDto) {
    return this.elementoConfiRepository.update({ id }, user);
  }
}
