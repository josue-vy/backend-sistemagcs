import { Fase } from 'src/fase/fase.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'elementoConfiguracion' })
export class ElementoConfiguracion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomenclaturaElemento: string;

  @Column()
  nombreElemento: string;

  @OneToOne(() => Fase)
  @JoinColumn({ referencedColumnName: 'id', name: 'faseId' })
  fase: Fase;
}
