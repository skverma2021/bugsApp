import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { BugService } from './bug.service';
import { CreateBugDto, UpdateBugDto } from './dto';

@Controller('bugs')
export class BugController {
  constructor(private readonly bugService: BugService) {}

  @Post()
  create(@Body() dto: CreateBugDto) {
    return this.bugService.create(dto);
  }

  @Get()
  findAll() {
    return this.bugService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bugService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBugDto) {
    return this.bugService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bugService.remove(+id);
  }
}
