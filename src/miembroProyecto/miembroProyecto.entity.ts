import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'miembroProyecto' })
export class MiembroProyecto {
  @PrimaryGeneratedColumn()
  id: number;
}
