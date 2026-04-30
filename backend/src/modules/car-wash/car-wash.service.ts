import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarWash } from './car-wash.entity';
import { CreateCarWashDto } from './dto/create-car-wash.dto';
import { UpdateCarWashDto } from './dto/update-car-wash.dto';

@Injectable()
export class CarWashService {
  constructor(
    @InjectRepository(CarWash)
    private carWashRepository: Repository<CarWash>,
  ) {}

  async create(createCarWashDto: CreateCarWashDto): Promise<CarWash> {
    const carWash = this.carWashRepository.create(createCarWashDto);
    return this.carWashRepository.save(carWash);
  }

  async findAll(skip: number = 0, take: number = 10) {
    return this.carWashRepository.find({
      skip,
      take,
      where: { isActive: true },
    });
  }

  async findById(id: string): Promise<CarWash> {
    const carWash = await this.carWashRepository.findOne({ where: { id } });
    if (!carWash) {
      throw new NotFoundException('Car wash not found');
    }
    return carWash;
  }

  async findNearby(
    lat: number,
    lng: number,
    radiusKm: number = 10,
  ): Promise<CarWash[]> {
    const query = `
      SELECT *, 
      (6371 * acos(cos(radians($1)) * cos(radians((address->>'coordinates')::jsonb->>'lat')) * 
      sin(radians($2) - radians(((address->>'coordinates')::jsonb->>'lng'::numeric)) + 
      sin(radians($1)) * sin(radians(((address->>'coordinates')::jsonb->>'lat')::numeric)))) as distance
      FROM car_washes
      WHERE isActive = true
      HAVING distance < $3
      ORDER BY distance
    `;
    return this.carWashRepository.query(query, [lat, lng, radiusKm]);
  }

  async update(
    id: string,
    updateCarWashDto: UpdateCarWashDto,
  ): Promise<CarWash> {
    await this.carWashRepository.update(id, updateCarWashDto);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    const result = await this.carWashRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Car wash not found');
    }
  }
}
