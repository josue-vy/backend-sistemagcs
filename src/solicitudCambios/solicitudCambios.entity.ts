import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'solicitudCambio' })
export class SolicitudCambio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  @Column()
  objetivo: string;

  @Column()
  urlCompartido: string;

  @Column()
  url: string;

  @Column()
  descripcion: string;
}
