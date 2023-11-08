import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipoUserDto } from './dto/create-tipousuarios.dto';
import { TipoUsuarios } from './tipousuarios.entity';
import { UpdateTipoUserDto } from './dto/update-tipousuarios.dto';

@Injectable()
export class UsersTipoService {
  constructor(
    @InjectRepository(TipoUsuarios)
    private userTipoRepository: Repository<TipoUsuarios>,
  ) {}

  createTipoUser(user: CreateTipoUserDto) {
    const newTipoUser = this.userTipoRepository.create(user);
    return this.userTipoRepository.save(newTipoUser);
  }

  getTipoUsers() {
    return this.userTipoRepository.find();
  }

  deleteTipoUser(id: number) {
    return this.userTipoRepository.delete({ id });
  }

  updateTipoUser(id: number, user: UpdateTipoUserDto) {
    return this.userTipoRepository.update({ id }, user);
  }
}
