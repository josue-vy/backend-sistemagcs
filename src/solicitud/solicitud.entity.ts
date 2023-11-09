import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'solicitud' })
export class Solicitud {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  requerimiento: string;

  @Column()
  descripcion: string;
}
