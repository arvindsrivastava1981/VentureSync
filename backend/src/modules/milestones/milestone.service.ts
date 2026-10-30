import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Milestone } from '../entities/milestone.entity';

@Injectable()
export class MilestoneService {
  constructor(@InjectRepository(Milestone) private milestoneRepository: Repository<Milestone>) {}

  async findAll(): Promise<Milestone[]> {
    return this.milestoneRepository.find();
  }

  async findByPlot(plotId: number): Promise<Milestone[]> {
    return this.milestoneRepository.find({ where: { plot_id: plotId } });
  }

  async findOne(id: number): Promise<Milestone | null> {
    return this.milestoneRepository.findOne({ where: { id } });
  }

  async create(dto: { plot_id: number; stage: string; percentage: number; amount_inr?: number }): Promise<Milestone> {
    const milestone = this.milestoneRepository.create({ plot_id: dto.plot_id, stage: dto.stage, percentage: dto.percentage, amount_inr: dto.amount_inr ?? 0 });
    return this.milestoneRepository.save(milestone);
  }

  async update(id: number, dto: any): Promise<Milestone | null> {
    await this.milestoneRepository.update(id, dto);
    return this.milestoneRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.milestoneRepository.delete(id);
  }
}