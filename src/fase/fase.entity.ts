import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'fase' })
export class Fase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreFase: string;
}
