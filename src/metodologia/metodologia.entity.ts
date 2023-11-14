import { Fase } from 'src/fase/fase.entity';
import { Proyecto } from 'src/proyecto/proyecto.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity({ name: 'metodologia' })
export class Metodologia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreMetodologia: string;

  @OneToOne(() => Proyecto, (proyecto) => proyecto.metodologia)
  proyecto: Proyecto;

  @OneToOne(() => Fase, (fase) => fase.metodologia)
  fase: Fase;
}
