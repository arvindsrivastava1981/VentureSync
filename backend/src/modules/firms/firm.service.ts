import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Firm } from '../entities/firm.entity';

@Injectable()
export class FirmService {
  constructor(@InjectRepository(Firm) private firmRepository: Repository<Firm>) {}

  async findAll(): Promise<Firm[]> {
    return this.firmRepository.find();
  }

  async findOne(id: number): Promise<Firm | null> {
    return this.firmRepository.findOne({ where: { id } });
  }

  async findByGstin(gstin: string): Promise<Firm | null> {
    return this.firmRepository.findOne({ where: { gstin } });
  }

  async create(name: string, gstin: string): Promise<Firm> {
    const firm = this.firmRepository.create({ name, gstin });
    return this.firmRepository.save(firm);
  }

  async update(id: number, name: string, gstin: string): Promise<Firm | null> {
    await this.firmRepository.update(id, { name, gstin });
    return this.firmRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.firmRepository.delete(id);
  }
}