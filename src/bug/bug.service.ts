import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bug } from './bug.entity';
import { CreateBugDto, UpdateBugDto } from './dto/index';

@Injectable()
export class BugService {
  constructor(
    @InjectRepository(Bug)
    private bugRepo: Repository<Bug>,
  ) {}

async create(dto: CreateBugDto) {
  const bug = this.bugRepo.create({
    ...dto,
    openedBy: { userID: dto.openedBy },
    assignedTo: dto.assignedTo ? { userID: dto.assignedTo } : undefined,
  });
  return this.bugRepo.save(bug);
}

  findAll() {
    return this.bugRepo.find({ relations: ['openedBy', 'assignedTo', 'comments'] });
  }

  findOne(id: number) {
    return this.bugRepo.findOne({ where: { bugID: id }, relations: ['openedBy', 'assignedTo', 'comments'] });
  }

async update(id: number, dto: UpdateBugDto) {
  const updateData: any = { ...dto };

  if (dto.openedBy !== undefined) {
    updateData.openedBy = { userID: dto.openedBy };
  }

  if (dto.assignedTo !== undefined) {
    updateData.assignedTo = { userID: dto.assignedTo };
  }

  await this.bugRepo.update(id, updateData);
  return this.findOne(id);
}

  remove(id: number) {
    return this.bugRepo.delete(id);
  }
}