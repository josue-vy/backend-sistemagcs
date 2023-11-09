import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'miembroElemento' })
export class MiembroElemento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  fechaInicio: string;

  @Column()
  fechaFin: string;
}
