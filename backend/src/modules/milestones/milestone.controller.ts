import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { MilestoneService } from './milestone.service';
import { Milestone } from '../entities/milestone.entity';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';

@Controller('milestones')
export class MilestoneController {
  constructor(private readonly milestoneService: MilestoneService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'manager')
  @Get()
  async findAll(): Promise<Milestone[]> {
    return this.milestoneService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'manager')
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Milestone | null> {
    return this.milestoneService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'manager')
  @Post()
  async create(@Body() dto: { plot_id: number; stage: string; percentage: number; amount_inr?: number }): Promise<Milestone> {
    return this.milestoneService.create(dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'manager')
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: any): Promise<Milestone | null> {
    return this.milestoneService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.milestoneService.remove(id);
  }
}