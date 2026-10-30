import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { PlotService } from './plot.service';
import { Plot } from '../entities/plot.entity';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';

@Controller('plots')
export class PlotController {
  constructor(private readonly plotService: PlotService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'manager')
  @Get()
  async findAll(): Promise<Plot[]> {
    return this.plotService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'manager')
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Plot | null> {
    return this.plotService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'manager')
  @Post()
  async create(@Body() dto: { site_id: number; plot_number: number; area_sqft: number; facing: string; status: string; base_rate_per_sqft?: number; plc_percent?: number; edc_per_sqft?: number }): Promise<Plot> {
    return this.plotService.create(dto.site_id, dto.plot_number, dto.area_sqft, dto.facing, dto.status, dto.base_rate_per_sqft, dto.plc_percent, dto.edc_per_sqft);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'manager')
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: any): Promise<Plot | null> {
    return this.plotService.update(id, dto.plot_number, dto.area_sqft, dto.facing, dto.status, dto.base_rate_per_sqft, dto.plc_percent, dto.edc_per_sqft);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.plotService.remove(id);
  }
}