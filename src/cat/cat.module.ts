import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';

@Module({
  controllers: [CatController],
  providers: [CatService],
  imports: [TypeOrmModule.forFeature([Cat])]
})
export class CatModule {}
