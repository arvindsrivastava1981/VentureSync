import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Index } from 'typeorm';
import { Firm } from '../entities/firm.entity';
import { Site } from '../entities/site.entity';

@Entity()
export class Plot {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column()
  site_id!: number;

  @Column()
  plot_number!: number;

  @Column()
  area_sqft!: number;

  @Column({ length: 10, check: `"facing" IN ('East','North','West')" })
  facing!: string;

  @Column({ length: 20, default: 'Available' })
  status!: string;

  @Column('int', { default: 1250 })
  base_rate_per_sqft!: number;

  @Column('int', { default: 0 })
  plc_percent!: number;

  @Column('int', { default: 75 })
  edc_per_sqft!: number;

  @Column({ default: new Date() })
  created_at!: Date;

  @ManyToOne(() => Site, (site) => site.plots)
  site!: Site;
}