import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fase } from './fase.entity';
import { CreateFaseDto } from './dto/create-fase.dto';
import { Metodologia } from 'src/metodologia/metodologia.entity';
import { UpdateFaseDto } from './dto/update-fase.dto';

@Injectable()
export class FaseService {
  constructor(
    @InjectRepository(Fase)
    private faseRepository: Repository<Fase>,
    @InjectRepository(Metodologia)
    private metodologiaRepository: Repository<Metodologia>,
  ) {}

  async createFase(body: CreateFaseDto) {
    const fase = new Fase();
    fase.nombreFase = body.nombreFase;

    const newFase = await this.faseRepository.save(fase);

    const metodologia = new Metodologia();
    metodologia.nombreMetodologia = body.metodologia;
    metodologia.fase = newFase;

    return this.metodologiaRepository.save(metodologia);
  }

  getFase() {
    return this.faseRepository.find({ relations: ['metodologia'] });
  }

  deleteFase(id: number) {
    return this.faseRepository.delete({ id });
  }

  updateFase(id: number, user: UpdateFaseDto) {
    return this.faseRepository.update({ id }, user);
  }
}
