import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bug } from './bug/bug.entity';
import { User } from './user/user.entity';
import { Comment } from './comment/comment.entity';
import { BugModule } from './bug/bug.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'udemy',
      password: 'cdcbgt',
      database: 'bugs',
      entities: [Bug, User, Comment],
      synchronize: true, // use false in production
      options: {
        encrypt: false, // required for some SQL Server configs
      },
    }),
    BugModule,
    UserModule,
    CommentModule,
    
  ],
  controllers: [AppController], // ✅ This must be present
  providers: [AppService],

})
export class AppModule {}
