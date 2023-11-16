import { MiembroProyecto } from 'src/miembroProyecto/miembroProyecto.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity({ name: 'rolProyecto' })
export class RolProyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreRolProyecto: string;

  @OneToOne(() => MiembroProyecto, (miembroProyecto) => miembroProyecto.rol)
  miembroProyectoRol: MiembroProyecto;
}
