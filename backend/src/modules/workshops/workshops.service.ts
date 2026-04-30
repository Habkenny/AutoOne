import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workshop } from './workshop.entity';
import { CreateWorkshopDto } from './dto/create-workshop.dto';
import { UpdateWorkshopDto } from './dto/update-workshop.dto';

@Injectable()
export class WorkshopsService {
  constructor(
    @InjectRepository(Workshop)
    private workshopsRepository: Repository<Workshop>,
  ) {}

  async create(createWorkshopDto: CreateWorkshopDto): Promise<Workshop> {
    const workshop = this.workshopsRepository.create(createWorkshopDto);
    return this.workshopsRepository.save(workshop);
  }

  async findAll(skip: number = 0, take: number = 10) {
    return this.workshopsRepository.find({
      skip,
      take,
      where: { isActive: true },
    });
  }

  async findById(id: string): Promise<Workshop> {
    const workshop = await this.workshopsRepository.findOne({ where: { id } });
    if (!workshop) {
      throw new NotFoundException('Workshop not found');
    }
    return workshop;
  }

  async findNearby(
    lat: number,
    lng: number,
    radiusKm: number = 10,
  ): Promise<Workshop[]> {
    const query = `
      SELECT *, 
      (6371 * acos(cos(radians($1)) * cos(radians((address->>'coordinates')::jsonb->>'lat')) * 
      sin(radians($2) - radians(((address->>'coordinates')::jsonb->>'lng'::numeric)) + 
      sin(radians($1)) * sin(radians(((address->>'coordinates')::jsonb->>'lat')::numeric)))) as distance
      FROM workshops
      WHERE isActive = true
      HAVING distance < $3
      ORDER BY distance
    `;
    return this.workshopsRepository.query(query, [lat, lng, radiusKm]);
  }

  async update(
    id: string,
    updateWorkshopDto: UpdateWorkshopDto,
  ): Promise<Workshop> {
    await this.workshopsRepository.update(id, updateWorkshopDto);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    const result = await this.workshopsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Workshop not found');
    }
  }
}
