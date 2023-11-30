import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MiembroElemento } from './miembroElemento.entity';
import { MiembroEleDto } from './dto/create-miembroElemento.dto';
import { ElementoConfiguracion } from 'src/elementoConfiguracion/elementoConfiguracion.entity';
import { MiembroProyecto } from 'src/miembroProyecto/miembroProyecto.entity';

@Injectable()
export class MiembroElemService {
  constructor(
    @InjectRepository(MiembroElemento)
    private miembroElementoRepository: Repository<MiembroElemento>,
    @InjectRepository(ElementoConfiguracion)
    private elementoConfiguracionRepository: Repository<ElementoConfiguracion>,
    @InjectRepository(MiembroProyecto)
    private miembroProyectoRepository: Repository<MiembroProyecto>,
  ) {}

  async createMiembroElemento(user: MiembroEleDto) {
    const { usuarios, elementosConfiguracion, url, fechaInicio, fechaFin } =
      user;

    // Obtener los ElementoConfiguracion por nombres o IDs
    const elementosConf = await this.elementoConfiguracionRepository.find({
      where: elementosConfiguracion.map((nombre) => ({
        nomenclaturaElemento: nombre,
      })),
    });

    const miembroProyecto = await this.miembroProyectoRepository.findOne({
      where: { usuario: { nombre: usuarios[0] } }, // Modificar según la relación entre usuarios y MiembroProyecto
    });

    // Crear el nuevo MiembroElemento con las referencias a ElementoConfiguracion y MiembroProyecto
    const newMiembroElemento = new MiembroElemento();
    newMiembroElemento.url = url;
    newMiembroElemento.fechaInicio = fechaInicio;
    newMiembroElemento.fechaFin = fechaFin;
    newMiembroElemento.elementos = elementosConf;
    newMiembroElemento.miembroProyecto = miembroProyecto;

    // Guardar el nuevo MiembroElemento en la base de datos
    return this.miembroElementoRepository.save(newMiembroElemento);
  }

  async getPMiembroElemento(): Promise<any[]> {
    const miembrosElemento = await this.miembroElementoRepository
      .createQueryBuilder('miembroElemento')
      .leftJoin('miembroElemento.miembroProyecto', 'miembroProyecto')
      .leftJoin('miembroProyecto.usuario', 'usuario')
      .leftJoinAndSelect('miembroElemento.elementos', 'elementos')
      .select([
        'miembroElemento.id AS id',
        'miembroElemento.url AS url',
        'miembroElemento.fechaInicio AS fechaInicio',
        'miembroElemento.fechaFin AS fechaFin',
        'usuario.id AS usuarioId',
        'usuario.nombre AS nombreUsuario',
        'elementos.nomenclaturaElemento AS nomenclaturaElemento',
      ])
      .getRawMany();

    return miembrosElemento;
  }
}
