import { ElementoConfiguracion } from 'src/elementoConfiguracion/elementoConfiguracion.entity';
import { MiembroProyecto } from 'src/miembroProyecto/miembroProyecto.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
} from 'typeorm';

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

  @ManyToMany(
    () => ElementoConfiguracion,
    (elementoConfiguracion) => elementoConfiguracion.elementos,
  )
  elementos: ElementoConfiguracion[];

  @ManyToOne(
    () => MiembroProyecto,
    (miembroProyecto) => miembroProyecto.elementos,
  )
  miembroProyecto: MiembroProyecto;
}
