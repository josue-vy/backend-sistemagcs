import { Metodologia } from 'src/metodologia/metodologia.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'proyecto' })
export class Proyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigoProyecto: string;

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
}
