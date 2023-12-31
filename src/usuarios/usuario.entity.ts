import { MiembroProyecto } from 'src/miembroProyecto/miembroProyecto.entity';
import { TipoUsuarios } from 'src/tipoUsuarios/tipousuarios.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'usuarios' })
export class Usuarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  correo: string;

  @Column()
  contrasena: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fechaCreacion: Date;

  @OneToOne(() => TipoUsuarios)
  @JoinColumn({ referencedColumnName: 'id', name: 'tipoUsuarioId' })
  tipoUsuario: TipoUsuarios;

  @OneToMany(
    () => MiembroProyecto,
    (miembroProyecto) => miembroProyecto.usuario,
  )
  miembrosProyecto: MiembroProyecto[];
}
