import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ unique: true, length: 50 })
  username!: string;

  @Column({ length: 255 })
  password_hash!: string;

  @Column({ length: 20, default: 'buyer' })
  role!: string;

  @Column({ length: 100 })
  name!: string;

  @Column({ default: new Date() })
  created_at!: Date;
}