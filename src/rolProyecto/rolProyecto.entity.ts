import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'rolProyecto' })
export class RolProyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreRolProyecto: string;
}
