import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from './proyecto.entity';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { Metodologia } from 'src/metodologia/metodologia.entity';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';

@Injectable()
export class ProyectoService {
  constructor(
    @InjectRepository(Proyecto)
    private proyectoRepository: Repository<Proyecto>,
    @InjectRepository(Metodologia)
    private metodologiaRepository: Repository<Metodologia>,
  ) {}

  async createProyecto(body: CreateProyectoDto) {
    const proyecto = new Proyecto();
    proyecto.codigoProyecto = body.codigoProyecto;
    proyecto.nombreProyecto = body.nombreProyecto;
    proyecto.fechaInicio = body.fechaInicio;
    proyecto.fechaFinal = body.fechaFinal;
    proyecto.estado = body.estado;

    const newProyecto = await this.proyectoRepository.save(proyecto);

    const metodologia = new Metodologia();
    metodologia.nombreMetodologia = body.metodologia;
    metodologia.proyecto = newProyecto;

    return this.metodologiaRepository.save(metodologia);
  }

  async getProyecto() {
    return this.proyectoRepository.find({ relations: ['metodologia'] });
  }

  deleteProyecto(id: number) {
    return this.proyectoRepository.delete({ id });
  }

  updateProyecto(id: number, proyecto: UpdateProyectoDto) {
    return this.proyectoRepository.update({ id }, proyecto);
  }
}
