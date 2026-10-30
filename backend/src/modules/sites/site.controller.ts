import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { SiteService } from './site.service';
import { Site } from '../entities/site.entity';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';

@Controller('sites')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'manager')
  @Get()
  async findAll(): Promise<Site[]> {
    return this.siteService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'manager')
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Site | null> {
    return this.siteService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'manager')
  @Post()
  async create(@Body() dto: { firm_id: number; name: string; rera_id?: string; khasra_numbers?: string[]; usps?: string[] }): Promise<Site> {
    return this.siteService.create(dto.firm_id, dto.name, dto.rera_id, dto.khasra_numbers, dto.usps);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'manager')
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: { name: string; rera_id?: string; khasra_numbers?: string[]; usps?: string[] }): Promise<Site | null> {
    return this.siteService.update(id, dto.name, dto.rera_id, dto.khasra_numbers, dto.usps);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.siteService.remove(id);
  }
}