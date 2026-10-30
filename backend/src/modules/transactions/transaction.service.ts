import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from '../entities/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(@InjectRepository(Transaction) private transactionRepository: Repository<Transaction>) {}

  async findAll(): Promise<Transaction[]> {
    return this.transactionRepository.find({ relations: ['plot', 'firm'] });
  }

  async findOne(id: number): Promise<Transaction | null> {
    return this.transactionRepository.findOne({ where: { id }, relations: ['plot', 'firm'] });
  }

  async findByPlot(plotId: number): Promise<Transaction[]> {
    return this.transactionRepository.find({ where: { plot_id: plotId }, relations: ['plot', 'firm'] });
  }

  async create(dto: { plot_id: number; firm_id: number; client_name: string; payment_mode: string; amount_inr: number; clearance_status?: string }): Promise<Transaction> {
    const transaction = this.transactionRepository.create({
      plot_id: dto.plot_id,
      firm_id: dto.firm_id,
      client_name: dto.client_name,
      payment_mode: dto.payment_mode,
      amount_inr: dto.amount_inr,
      clearance_status: dto.clearance_status || 'Pending',
    });
    return this.transactionRepository.save(transaction);
  }

  async update(id: number, dto: any): Promise<Transaction | null> {
    await this.transactionRepository.update(id, dto);
    return this.transactionRepository.findOne({ where: { id }, relations: ['plot', 'firm'] });
  }

  async remove(id: number): Promise<void> {
    await this.transactionRepository.delete(id);
  }
}