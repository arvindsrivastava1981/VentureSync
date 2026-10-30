import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Site } from '../entities/site.entity';

@Injectable()
export class SiteService {
  constructor(@InjectRepository(Site) private siteRepository: Repository<Site>) {}

  async findAll(): Promise<Site[]> {
    return this.siteRepository.find();
  }

  async findOne(id: number): Promise<Site | null> {
    return this.siteRepository.findOne({ where: { id } });
  }

  async findByFirm(firmId: number): Promise<Site[]> {
    return this.siteRepository.find({ where: { firm_id: firmId } });
  }

  async create(firmId: number, name: string, reraId?: string, khasraNumbers?: string[], usps?: string[]): Promise<Site> {
    const site = this.siteRepository.create({ firm_id: firmId, name, rera_id: reraId, khasra_numbers: khasraNumbers || [], usps: usps || [] });
    return this.siteRepository.save(site);
  }

  async update(id: number, name: string, reraId?: string, khasraNumbers?: string[], usps?: string[]): Promise<Site | null> {
    await this.siteRepository.update(id, { name, rera_id: reraId, khasra_numbers: khasraNumbers, usps });
    return this.siteRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.siteRepository.delete(id);
  }
}