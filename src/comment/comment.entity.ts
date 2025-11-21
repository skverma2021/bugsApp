import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Bug } from 'src/bug/bug.entity';
import { User } from 'src/user/user.entity';

@Entity({ name: 'Comments' })
export class Comment {
  @PrimaryGeneratedColumn({ name: 'CommentID' })
  commentID: number;

  @ManyToOne(() => Bug, bug => bug.comments, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'BugID' })
  bug: Bug;

  @ManyToOne(() => User, user => user.comments, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'UserID' })
  user: User;

  @Column('nvarchar', { name: 'CommentText' })
  commentText: string;

  @CreateDateColumn({ name: 'CreatedAt' })
  createdAt: Date;
}
