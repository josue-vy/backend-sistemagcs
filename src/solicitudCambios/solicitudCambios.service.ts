import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SolicitudCambio } from './solicitudCambios.entity';
import { CreateSolicitudCambioDto } from './dto/create-solicitudCambios.dto';

@Injectable()
export class SolicitudCambiosService {
  constructor(
    @InjectRepository(SolicitudCambio)
    private solicitudCambioRepository: Repository<SolicitudCambio>,
  ) {}

  async createTipoUserWithFile(
    newSolicitud: CreateSolicitudCambioDto,
    file: Express.Multer.File,
  ): Promise<SolicitudCambio> {
    const url = file ? `/uploads/${file.filename}` : null;

    // Crear una nueva instancia de SolicitudCambio con la información recibida
    const nuevaSolicitud = this.solicitudCambioRepository.create({
      ...newSolicitud,
      url,
    });

    // Guardar la nueva instancia en la base de datos
    return this.solicitudCambioRepository.save(nuevaSolicitud);
  }

  getTipoUsers() {
    return this.solicitudCambioRepository.find();
  }

  deleteTipoUser(id: number) {
    return this.solicitudCambioRepository.delete({ id });
  }

  updateTipoUser(id: number, user: CreateSolicitudCambioDto) {
    return this.solicitudCambioRepository.update({ id }, user);
  }
}
