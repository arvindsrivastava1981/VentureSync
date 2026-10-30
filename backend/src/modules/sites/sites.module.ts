import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from '../entities/site.entity';
import { SiteController } from '../controllers/site.controller';
import { SiteService } from '../services/site.service';

@Module({
  imports: [TypeOrmModule.forFeature([Site])],
  controllers: [SiteController],
  providers: [SiteService],
  exports: [SiteService],
})
export class SitesModule {}