import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Site {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column()
  firm_id!: number;

  @Column()
  name!: string;

  @Column({ length: 50, nullable: true })
  rera_id!: string | null;

  @Column('text', { isArray: true, default: '[]' })
  khasra_numbers!: string[];

  @Column('text', { isArray: true, default: '[]' })
  usps!: string[];

  @Column({ default: new Date() })
  created_at!: Date;
}