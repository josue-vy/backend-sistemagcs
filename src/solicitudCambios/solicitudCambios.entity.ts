import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'solicitudCambio' })
export class SolicitudCambio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: string;

  @Column()
  objetivo: string;

  @Column()
  descripcion: string;

  @Column()
  respuesta: string;
}
