import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Transaction } from '../entities/transaction.entity';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'accounts')
  @Get()
  async findAll(): Promise<Transaction[]> {
    return this.transactionService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'accounts')
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Transaction | null> {
    return this.transactionService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'accounts')
  @Post()
  async create(@Body() dto: { plot_id: number; firm_id: number; client_name: string; payment_mode: string; amount_inr: number; clearance_status?: string }): Promise<Transaction> {
    return this.transactionService.create(dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'accounts')
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: any): Promise<Transaction | null> {
    return this.transactionService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.transactionService.remove(id);
  }
}