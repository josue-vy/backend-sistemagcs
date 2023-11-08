import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'tipousuarios' })
export class TipoUsuarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreTipoUsuario: string;
}
