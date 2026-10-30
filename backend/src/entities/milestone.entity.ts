import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Plot } from '../entities/plot.entity';

@Entity()
export class Milestone {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @ManyToOne(() => Plot, (plot) => plot.milestones)
  plot!: Plot;

  @Column()
  stage!: string;

  @Column('int')
  percentage!: number;

  @Column('int', { default: 0 })
  amount_inr!: number;

  @Column({ length: 20, default: 'pending' })
  status!: string;

  @Column({ default: new Date() })
  created_at!: Date;
}