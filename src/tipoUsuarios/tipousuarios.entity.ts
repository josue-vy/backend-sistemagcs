import { Usuarios } from 'src/usuarios/usuario.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity({ name: 'tipousuarios' })
export class TipoUsuarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreTipoUsuario: string;

  @OneToOne(() => Usuarios, (usuario) => usuario.name)
  usuario: Usuarios;
}
