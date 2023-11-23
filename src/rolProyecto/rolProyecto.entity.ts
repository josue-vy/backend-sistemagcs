import { MiembroProyecto } from 'src/miembroProyecto/miembroProyecto.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'rolProyecto' })
export class RolProyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreRolProyecto: string;

  @OneToMany(() => MiembroProyecto, (miembroProyecto) => miembroProyecto.rol)
  miembrosProyecto: MiembroProyecto[];
}
