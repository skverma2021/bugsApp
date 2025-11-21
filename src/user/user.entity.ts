import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Bug } from 'src/bug/bug.entity';
import { Comment } from 'src/comment/comment.entity';

@Entity({ name: 'Users' })                 // <-- map to existing table
export class User {
  @PrimaryGeneratedColumn({ name: 'UserID' }) // <-- match column name
  userID: number;

  @Column({ name: 'Username', length: 100, unique: true })
  username: string;

  @Column({ name: 'Email', length: 255, unique: true })
  email: string;

  @Column({ name: 'FullName', length: 150, nullable: true })
  fullName: string;

  @Column({ name: 'PasswordHash', length: 255, nullable: true })
  passwordHash: string;

  @CreateDateColumn({ name: 'CreatedAt' })
  createdAt: Date;

  @OneToMany(() => Bug, bug => bug.openedBy)
  bugsOpened: Bug[];

  @OneToMany(() => Bug, bug => bug.assignedTo)
  bugsAssigned: Bug[];

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];
}
