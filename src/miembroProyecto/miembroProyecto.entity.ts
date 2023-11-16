import { Proyecto } from 'src/proyecto/proyecto.entity';
import { RolProyecto } from 'src/rolProyecto/rolProyecto.entity';
import { Usuarios } from 'src/usuarios/usuario.entity';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'miembroProyecto' })
export class MiembroProyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Usuarios)
  @JoinColumn({ referencedColumnName: 'id', name: 'usuarioId' })
  usuario: Usuarios;

  @OneToOne(() => RolProyecto)
  @JoinColumn({ referencedColumnName: 'id', name: 'rolProyectoId' })
  rol: RolProyecto;

  @OneToOne(() => Proyecto)
  @JoinColumn({ referencedColumnName: 'id', name: 'proyectoId' })
  proyecto: Proyecto;
}
