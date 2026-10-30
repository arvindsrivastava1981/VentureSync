import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Plot } from '../entities/plot.entity';
import { Firm } from '../entities/firm.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @ManyToOne(() => Plot, (plot) => plot.transactions)
  plot!: Plot;

  @ManyToOne(() => Firm, (firm) => firm.transactions)
  firm!: Firm;

  @Column()
  client_name!: string;

  @Column({ length: 20 })
  payment_mode!: string;

  @Column({ length: 20, default: 'Pending' })
  clearance_status!: string;

  @Column('int')
  amount_inr!: number;

  @Column({ default: new Date() })
  transaction_date!: Date;

  @Column({ default: new Date() })
  created_at!: Date;
}