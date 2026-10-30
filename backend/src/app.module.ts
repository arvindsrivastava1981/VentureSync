import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './database.data-source';
import { AuthModule } from './modules/auth/auth.module';
import { FirmsModule } from './modules/firms/firms.module';
import { User } from './modules/auth/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          type: 'postgres',
          host: process.env.DB_HOST || 'localhost',
          port: parseInt(process.env.DB_PORT || '5432', 10),
          username: process.env.DB_USERNAME || 'postgres',
          password: process.env.DB_PASSWORD || 'password',
          database: process.env.DB_NAME || 'venturesync',
          entities: [User],
          synchronize: process.env.NODE_ENV !== 'production',
          logging: true,
        };
      },
    }),
    AuthModule,
    FirmsModule,
  ],
  controllers: [],
  providers: [AppDataSource],
})
export class AppModule {}