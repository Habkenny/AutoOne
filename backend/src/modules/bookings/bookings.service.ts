import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private bookingsRepository: Repository<Booking>,
  ) {}

  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    const booking = this.bookingsRepository.create(createBookingDto);
    return this.bookingsRepository.save(booking);
  }

  async findAll(skip: number = 0, take: number = 10) {
    return this.bookingsRepository.find({
      skip,
      take,
      relations: ['user', 'workshop', 'carWash'],
    });
  }

  async findById(id: string): Promise<Booking> {
    const booking = await this.bookingsRepository.findOne({
      where: { id },
      relations: ['user', 'workshop', 'carWash'],
    });
    if (!booking) {
      throw new NotFoundException('Booking not found');
    }
    return booking;
  }

  async findByUserId(userId: string) {
    return this.bookingsRepository.find({
      where: { userId },
      relations: ['workshop', 'carWash'],
      order: { createdAt: 'DESC' },
    });
  }

  async update(
    id: string,
    updateBookingDto: UpdateBookingDto,
  ): Promise<Booking> {
    await this.bookingsRepository.update(id, updateBookingDto);
    return this.findById(id);
  }

  async cancel(id: string, reason: string): Promise<Booking> {
    await this.bookingsRepository.update(id, {
      status: 'cancelled',
      cancellationReason: reason,
    });
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    const result = await this.bookingsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Booking not found');
    }
  }
}
