import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Milestone } from '../entities/milestone.entity';
import { MilestoneController } from '../controllers/milestone.controller';
import { MilestoneService } from '../services/milestone.service';

@Module({
  imports: [TypeOrmModule.forFeature([Milestone])],
  controllers: [MilestoneController],
  providers: [MilestoneService],
  exports: [MilestoneService],
})
export class MilestonesModule {}