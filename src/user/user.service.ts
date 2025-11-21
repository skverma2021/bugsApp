import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  create(dto: CreateUserDto) {
    const user = this.userRepo.create(dto);
    return this.userRepo.save(user);
  }

  findAll() {
    return this.userRepo.find({ relations: ['bugsOpened', 'bugsAssigned', 'comments'] });
  }

  findOne(id: number) {
    return this.userRepo.findOne({ where: { userID: id }, relations: ['bugsOpened', 'bugsAssigned', 'comments'] });
  }

  async update(id: number, dto: UpdateUserDto) {
    await this.userRepo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
