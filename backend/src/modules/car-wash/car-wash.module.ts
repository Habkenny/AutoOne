import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarWash } from './car-wash.entity';
import { CarWashService } from './car-wash.service';
import { CarWashController } from './car-wash.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CarWash])],
  controllers: [CarWashController],
  providers: [CarWashService],
  exports: [CarWashService],
})
export class CarWashModule {}
