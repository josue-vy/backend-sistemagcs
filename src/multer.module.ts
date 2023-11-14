import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads', // Puedes ajustar la ruta según tu preferencia
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const originalname = file.originalname;
          const extension =
            originalname.split('.')[originalname.split('.').length - 1];
          callback(
            null,
            originalname.split('.')[0] + '-' + uniqueSuffix + '.' + extension,
          );
        },
      }),
    }),
  ],
  exports: [MulterModule],
})
export class MyMulterModule {}
