import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'metodologia' })
export class Metodologia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreMetodologia: string;
}
