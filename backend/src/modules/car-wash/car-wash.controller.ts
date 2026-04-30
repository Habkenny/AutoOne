import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CarWashService } from './car-wash.service';
import { CreateCarWashDto } from './dto/create-car-wash.dto';
import { UpdateCarWashDto } from './dto/update-car-wash.dto';

@Controller('car-wash')
export class CarWashController {
  constructor(private carWashService: CarWashService) {}

  @Get()
  async findAll(
    @Query('skip') skip: number = 0,
    @Query('take') take: number = 10,
  ) {
    return this.carWashService.findAll(skip, take);
  }

  @Get('nearby')
  async findNearby(
    @Query('lat') lat: number,
    @Query('lng') lng: number,
    @Query('radius') radius: number = 10,
  ) {
    return this.carWashService.findNearby(lat, lng, radius);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.carWashService.findById(id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createCarWashDto: CreateCarWashDto) {
    return this.carWashService.create(createCarWashDto);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(
    @Param('id') id: string,
    @Body() updateCarWashDto: UpdateCarWashDto,
  ) {
    return this.carWashService.update(id, updateCarWashDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async delete(@Param('id') id: string) {
    await this.carWashService.delete(id);
    return { message: 'Car wash deleted successfully' };
  }
}
