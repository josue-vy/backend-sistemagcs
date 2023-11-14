import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { UsersModule } from './usuarios/usuario.module';
import { TipoUsersModule } from './tipoUsuarios/tipousuarios.module';
import { ProyectoModule } from './proyecto/proyecto.module';
import { ElementoConfiModule } from './elementoConfiguracion/elementoConfiguracion.module';
import { FaseModule } from './fase/fase.module';
import { MetodologiaModule } from './metodologia/metodologia.module';
import { MiembroElemModule } from './miembroElemento/miembroElemento.module';
import { MiembroProModule } from './miembroProyecto/miembroProyecto.module';
import { RolProyectoModule } from './rolProyecto/rolProyecto.module';
import { SolicitudCambioModule } from './solicitudCambios/solicitudCambios.module';
import { MyMulterModule } from './multer.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    TipoUsersModule,
    ProyectoModule,
    ElementoConfiModule,
    FaseModule,
    MetodologiaModule,
    MiembroElemModule,
    MiembroProModule,
    RolProyectoModule,
    SolicitudCambioModule,
    MyMulterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
