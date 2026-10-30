import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plot } from '../entities/plot.entity';

@Injectable()
export class PlotService {
  constructor(@InjectRepository(Plot) private plotRepository: Repository<Plot>) {}

  async findAll(): Promise<Plot[]> {
    return this.plotRepository.find({ relations: ['site'] });
  }

  async findOne(id: number): Promise<Plot | null> {
    return this.plotRepository.findOne({ where: { id }, relations: ['site'] });
  }

  async findBySite(siteId: number): Promise<Plot[]> {
    return this.plotRepository.find({ where: { site_id: siteId } });
  }

  async create(siteId: number, plotNumber: number, areaSqft: number, facing: string, status: string, baseRatePerSqft?: number, plcPercent?: number, edcPerSqft?: number): Promise<Plot> {
    const plot = this.plotRepository.create({ site_id: siteId, plot_number: plotNumber, area_sqft: areaSqft, facing, status, base_rate_per_sqft: baseRatePerSqft ?? 1250, plc_percent: plcPercent ?? 0, edc_per_sqft: edcPerSqft ?? 75 });
    return this.plotRepository.save(plot);
  }

  async update(id: number, plotNumber?: number, areaSqft?: number, facing?: string, status?: string, baseRatePerSqft?: number, plcPercent?: number, edcPerSqft?: number): Promise<Plot | null> {
    await this.plotRepository.update(id, { plot_number: plotNumber, area_sqft, facing, status, base_rate_per_sqft, plc_percent: plcPercent, edc_per_sqft });
    return this.plotRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.plotRepository.delete(id);
  }
}