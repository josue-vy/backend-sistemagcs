import { Metodologia } from 'src/metodologia/metodologia.entity';
import { MiembroProyecto } from 'src/miembroProyecto/miembroProyecto.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'proyecto' })
export class Proyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreProyecto: string;

  @Column()
  fechaInicio: string;

  @Column()
  fechaFinal: string;

  @Column()
  estado: string;

  @OneToOne(() => Metodologia)
  @JoinColumn({ referencedColumnName: 'id', name: 'metodologiaId' })
  metodologia: Metodologia;

  @OneToMany(
    () => MiembroProyecto,
    (miembroProyecto) => miembroProyecto.proyecto,
  )
  miembrosProyecto: MiembroProyecto[];
}
