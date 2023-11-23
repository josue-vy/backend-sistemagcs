import { Proyecto } from 'src/proyecto/proyecto.entity';
import { RolProyecto } from 'src/rolProyecto/rolProyecto.entity';
import { Usuarios } from 'src/usuarios/usuario.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'miembroProyecto' })
export class MiembroProyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuarios, (usuario) => usuario.miembrosProyecto)
  usuario: Usuarios;

  @ManyToOne(() => RolProyecto, (rolProyecto) => rolProyecto.miembrosProyecto)
  rol: RolProyecto;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.miembrosProyecto)
  proyecto: Proyecto;
}
