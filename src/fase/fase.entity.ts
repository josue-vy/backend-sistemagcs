import { Metodologia } from 'src/metodologia/metodologia.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'fase' })
export class Fase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreFase: string;

  @OneToOne(() => Metodologia)
  @JoinColumn({ referencedColumnName: 'id', name: 'metodologiaId' })
  metodologia: Metodologia;
}
