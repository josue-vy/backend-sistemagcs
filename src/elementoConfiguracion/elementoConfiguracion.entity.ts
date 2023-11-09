import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'elementoConfiguracion' })
export class ElementoConfiguracion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigoElemento: string;

  @Column()
  nombreElemento: string;

  @Column()
  nomenclatura: string;
}
