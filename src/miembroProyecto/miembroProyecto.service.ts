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
    // Crear instancias de entidades
    const miembroPro = new MiembroProyecto();
    const usuario = new Usuarios();
    const rolProyecto = new RolProyecto();
    const proyecto = new Proyecto();

    // Establecer relaciones
    usuario.nombre = body.nombre;
    usuario.miembroProyectoUsuario = miembroPro;

    rolProyecto.nombreRolProyecto = body.rol;
    rolProyecto.miembroProyectoRol = miembroPro;

    proyecto.nombreProyecto = body.proyecto;
    proyecto.miembroProyectoProyecto = miembroPro;

    // Guardar las entidades en una transacción para mantener la integridad
    const createdMiembro = await this.miembroProRepository.save(miembroPro);
    await Promise.all([
      this.usuarioRepository.save(usuario),
      this.rolProyectoRepository.save(rolProyecto),
      this.proyectoRepository.save(proyecto),
    ]);

    return createdMiembro;
  }

  async getMiembroPro() {
    return this.miembroProRepository.find({
      relations: ['usuario', 'rol', 'proyecto'],
    });
  }

  deleteProyecto(id: number) {
    return this.miembroProRepository.delete({ id });
  }

  // updateProyecto(id: number, user: MiembroProDto) {
  //   return this.miembroProRepository.update({ id }, user);
  // }
}
