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
    const { usuarios, elementoConfiguracion, url, fechaInicio, fechaFin } =
      user;

    // Buscar ElementoConfiguracion por nombre o ID (nomenclaturaElemento es el campo correcto)
    const elementoConf = await this.elementoConfiguracionRepository.findOne({
      where: { nomenclaturaElemento: elementoConfiguracion },
    });

    // Buscar MiembroProyecto por usuarios (si es una lista de usuarios, debes decidir cómo manejarlo)
    const miembroProyecto = await this.miembroProyectoRepository.findOne({
      where: { usuario: { nombre: usuarios[0] } }, // Modifica esto dependiendo de cómo se relacionen los usuarios y el MiembroProyecto
    });

    // Crear el nuevo MiembroElemento con las referencias a ElementoConfiguracion y MiembroProyecto
    const newMiembroElemento = new MiembroElemento();
    newMiembroElemento.url = url;
    newMiembroElemento.fechaInicio = fechaInicio;
    newMiembroElemento.fechaFin = fechaFin;
    newMiembroElemento.elementoConfiguracion = elementoConf;
    newMiembroElemento.miembroProyecto = miembroProyecto;

    // Guardar el nuevo MiembroElemento en la base de datos
    return this.miembroElementoRepository.save(newMiembroElemento);
  }

  async getPMiembroElemento(): Promise<any[]> {
    const miembrosElemento = await this.miembroElementoRepository
      .createQueryBuilder('miembroElemento')
      .leftJoin('miembroElemento.miembroProyecto', 'miembroProyecto')
      .leftJoin('miembroProyecto.usuario', 'usuario')
      .leftJoin(
        'miembroElemento.elementoConfiguracion',
        'elementoConfiguracion',
      )
      .select([
        'miembroElemento.id AS id',
        'miembroElemento.url AS url',
        'miembroElemento.fechaInicio AS fechaInicio',
        'miembroElemento.fechaFin AS fechaFin',
        'usuario.id AS usuarioId',
        'usuario.nombre AS nombreUsuario',
        'elementoConfiguracion.nomenclaturaElemento AS nomenclaturaElemento',
      ])
      .getRawMany();

    return miembrosElemento;
  }
}
