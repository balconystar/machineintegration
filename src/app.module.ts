import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Cat } from './cat/entities/cat.entity';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [AuthModule,UserModule, BookmarkModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [User,Cat],
      migrations: [Cat],
      synchronize: true,
    }),
    CatModule
  ],
 
})
export class AppModule {

  
}
