import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plot } from '../entities/plot.entity';
import { PlotController } from '../controllers/plot.controller';
import { PlotService } from '../services/plot.service';

@Module({
  imports: [TypeOrmModule.forFeature([Plot])],
  controllers: [PlotController],
  providers: [PlotService],
  exports: [PlotService],
})
export class PlotsModule {}