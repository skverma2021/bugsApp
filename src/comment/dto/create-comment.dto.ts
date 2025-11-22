import { IsString, IsInt } from 'class-validator';

export class CreateCommentDto {
  @IsInt()
  bugID: number;

  @IsInt()
  userID: number;

  @IsString()
  commentText: string;
}
