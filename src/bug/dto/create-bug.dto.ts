import { IsString, IsOptional, IsEnum, IsDateString, IsInt } from 'class-validator';

export class CreateBugDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  priority?: string;

  @IsString()
  @IsOptional()
  status?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsString()
  @IsOptional()
  project?: string;

  @IsInt()
  openedBy: number;

  @IsInt()
  @IsOptional()
  assignedTo?: number;

  @IsDateString()
  @IsOptional()
  dueDate?: string;
}