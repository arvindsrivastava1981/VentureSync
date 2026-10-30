import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Firm {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ unique: true, length: 200 })
  name!: string;

  @Column({ length: 15, unique: true })
  gstin!: string;

  @Column({ default: new Date() })
  created_at!: Date;
}