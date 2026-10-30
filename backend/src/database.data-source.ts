import { DataSource } from 'typeorm';
import { User } from './modules/auth/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_N4iD0zOCbfKo@ep-rough-mouse-b5bgq0in-pooler.c-7.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  synchronize: false,
  logging: true,
  entities: [User],
});