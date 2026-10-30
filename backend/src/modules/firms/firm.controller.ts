import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { FirmService } from './firm.service';
import { Firm } from '../entities/firm.entity';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';

@Controller('firms')
export class FirmController {
  constructor(private readonly firmService: FirmService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get()
  async findAll(): Promise<Firm[]> {
    return this.firmService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Firm | null> {
    return this.firmService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post()
  async create(@Body() dto: { name: string; gstin: string }): Promise<Firm> {
    return this.firmService.create(dto.name, dto.gstin);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: { name: string; gstin: string }): Promise<Firm | null> {
    return this.firmService.update(id, dto.name, dto.gstin);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.firmService.remove(id);
  }
}