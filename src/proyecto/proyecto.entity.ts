import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'proyecto' })
export class Proyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigoProyecto: string;

  @Column()
  nombre: string;

  @Column()
  fechaInicio: string;

  @Column()
  fechaFinal: string;

  @Column()
  estado: string;
}
