import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepo: Repository<Comment>,
  ) {}

  async create(dto: CreateCommentDto) {
    const comment =  this.commentRepo.create({
      ...dto,
      bug:{bugID:dto.bugID},
      user:{userID:dto.userID}
    });
    return this.commentRepo.save(comment);
  }

  // async create(dto: CreateBugDto) {
  //   const bug = this.bugRepo.create({
  //     ...dto,
  //     openedBy: { userID: dto.openedBy },
  //     assignedTo: dto.assignedTo ? { userID: dto.assignedTo } : undefined,
  //   });
  //   return this.bugRepo.save(bug);
  // }

  findAll() {
    return this.commentRepo.find({ relations: ['bug', 'user'] });
  }

  findByBug(bugID: number) {
    return this.commentRepo.find({ where: { bug: { bugID } }, relations: ['user'] });
  }

  remove(id: number) {
    return this.commentRepo.delete(id);
  }
}

