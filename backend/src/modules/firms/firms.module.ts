import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Firm } from '../entities/firm.entity';
import { FirmController } from '../controllers/firm.controller';
import { FirmService } from '../services/firm.service';

@Module({
  imports: [TypeOrmModule.forFeature([Firm])],
  controllers: [FirmController],
  providers: [FirmService],
  exports: [FirmService],
})
export class FirmsModule {}