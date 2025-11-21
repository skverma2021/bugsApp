import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bug } from './bug.entity';
import { BugService } from './bug.service';
import { BugController } from './bug.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Bug])],
  providers: [BugService],
  controllers: [BugController],
  exports: [BugService], // optional, if other modules need it
})
export class BugModule {}
