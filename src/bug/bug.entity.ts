import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { User } from 'src/user/user.entity';
import { Comment } from 'src/comment/comment.entity';

@Entity({ name: 'Bugs' })
export class Bug {
  @PrimaryGeneratedColumn({ name: 'BugID' })
  bugID: number;

  @Column({ name: 'Title', length: 200 })
  title: string;

  @Column('nvarchar', { name: 'Description', nullable: true })
  description: string;

  @Column({ name: 'Priority', length: 50, nullable: true })
  priority: string;

  @Column({ name: 'Status', length: 50, nullable: true })
  status: string;

  @Column({ name: 'Category', length: 100, nullable: true })
  category: string;

  @Column({ name: 'Project', length: 100, nullable: true })
  project: string;

  @ManyToOne(() => User, user => user.bugsOpened, { nullable: false })
  @JoinColumn({ name: 'OpenedBy' })       // <-- explicit join column name
  openedBy: User;

  @ManyToOne(() => User, user => user.bugsAssigned, { nullable: true })
  @JoinColumn({ name: 'AssignedTo' })
  assignedTo: User;

  @CreateDateColumn({ name: 'CreatedAt' })
  createdAt: Date;

  @Column({ name: 'DueDate', type: 'date', nullable: true })
  dueDate: Date;

  @OneToMany(() => Comment, comment => comment.bug)
  comments: Comment[];
}
