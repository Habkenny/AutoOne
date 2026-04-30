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
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Controller('bookings')
@UseGuards(AuthGuard('jwt'))
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}

  @Get()
  async findAll(
    @Query('skip') skip: number = 0,
    @Query('take') take: number = 10,
  ) {
    return this.bookingsService.findAll(skip, take);
  }

  @Get('user/:userId')
  async findByUserId(@Param('userId') userId: string) {
    return this.bookingsService.findByUserId(userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.bookingsService.findById(id);
  }

  @Post()
  async create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingsService.create(createBookingDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBookingDto: UpdateBookingDto,
  ) {
    return this.bookingsService.update(id, updateBookingDto);
  }

  @Post(':id/cancel')
  async cancel(
    @Param('id') id: string,
    @Body() body: { reason: string },
  ) {
    return this.bookingsService.cancel(id, body.reason);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.bookingsService.delete(id);
    return { message: 'Booking deleted successfully' };
  }
}
