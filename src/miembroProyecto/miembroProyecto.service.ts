import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MiembroProyecto } from './miembroProyecto.entity';
import { MiembroProDto } from './dto/create-miembroProyecto.dto';
import { Usuarios } from 'src/usuarios/usuario.entity';
import { RolProyecto } from 'src/rolProyecto/rolProyecto.entity';
import { Proyecto } from 'src/proyecto/proyecto.entity';

@Injectable()
export class MiembroProService {
  constructor(
    @InjectRepository(MiembroProyecto)
    private miembroProRepository: Repository<MiembroProyecto>,
    @InjectRepository(Usuarios) private usuarioRepository: Repository<Usuarios>,
    @InjectRepository(RolProyecto)
    private rolProyectoRepository: Repository<RolProyecto>,
    @InjectRepository(Proyecto)
    private proyectoRepository: Repository<Proyecto>,
  ) {}

  async createMiembroPro(body: MiembroProDto) {
    const { usuarios, rol, proyecto } = body;

    const miembrosProyecto: MiembroProyecto[] = [];

    for (const usuarioNombre of usuarios) {
      const miembroPro = new MiembroProyecto();

      const usuario = await this.usuarioRepository.findOne({
        where: { nombre: usuarioNombre },
      });

      const rolProyecto = await this.rolProyectoRepository.findOne({
        where: { nombreRolProyecto: rol },
      });

      const proyectoEntity = await this.proyectoRepository.findOne({
        where: { nombreProyecto: proyecto },
      });

      if (!usuario || !rolProyecto || !proyectoEntity) {
        throw new Error('No se encontraron todas las relaciones necesarias.');
      }

      miembroPro.usuario = usuario;
      miembroPro.rol = rolProyecto;
      miembroPro.proyecto = proyectoEntity;

      miembrosProyecto.push(miembroPro);
    }

    const createdMiembros =
      await this.miembroProRepository.save(miembrosProyecto);

    return createdMiembros;
  }

  async getMiembroPro() {
    return this.miembroProRepository.find({
      relations: ['usuario', 'rol', 'proyecto'],
    });
  }

  deleteProyecto(id: number) {
    return this.miembroProRepository.delete({ id });
  }
  async getMiembroProDataWithRelatedEntities() {
    return this.miembroProRepository
      .createQueryBuilder('miembroProyecto')
      .leftJoinAndSelect('miembroProyecto.usuario', 'usuario')
      .leftJoinAndSelect('miembroProyecto.rol', 'rol')
      .leftJoinAndSelect('miembroProyecto.proyecto', 'proyecto')
      .getMany()
      .then((miembrosProyecto) => {
        return miembrosProyecto.map((miembroPro) => ({
          nombreUsuario: miembroPro.usuario?.nombre || 'Usuario no encontrado',
          nombreRol: miembroPro.rol?.nombreRolProyecto || 'Rol no encontrado',
          nombreProyecto:
            miembroPro.proyecto?.nombreProyecto || 'Proyecto no encontrado',
        }));
      });
  }
}
