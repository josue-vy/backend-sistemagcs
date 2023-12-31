import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuarios } from './usuario.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login.user.dto';
import { TipoUsuarios } from 'src/tipoUsuarios/tipousuarios.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Usuarios) private userRepository: Repository<Usuarios>,
    @InjectRepository(TipoUsuarios)
    private userTipoRepository: Repository<TipoUsuarios>,
  ) {}

  async createUser(body: CreateUserDto) {
    const user = new Usuarios();
    user.nombre = body.nombre;
    user.apellido = body.apellido;
    user.correo = body.correo;
    user.contrasena = body.contrasena;

    const newUser = await this.userRepository.save(user);

    const userTipo = new TipoUsuarios();
    userTipo.nombreTipoUsuario = body.tipoUsuario; // Asegúrate de que la propiedad sea la correcta
    userTipo.usuario = newUser;

    return this.userTipoRepository.save(userTipo);
  }

  async getUsers() {
    return this.userRepository.find({ relations: ['tipoUsuario'] });
  }

  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }

  updateUser(id: number, user: UpdateUserDto) {
    return this.userRepository.update({ id }, user);
  }

  async loginUser(loginUser: LoginUserDto) {
    const { correo, contrasena } = loginUser;
    const usuario = await this.userRepository.findOne({ where: { correo } });

    if (!usuario) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    if (usuario.contrasena !== contrasena) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    return usuario;
  }
}
