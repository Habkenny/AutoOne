import { IsString, IsNumber, IsIn, IsObject, IsOptional } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  workshopId?: string;

  @IsOptional()
  @IsString()
  carWashId?: string;

  @IsIn(['workshop', 'car_wash', 'rental', 'import'])
  serviceType: string;

  @IsString()
  scheduledDate: string;

  @IsObject()
  details: {
    carModel?: string;
    carYear?: string;
    licensePlate?: string;
    services?: string[];
    notes?: string;
  };

  @IsNumber()
  totalPrice: number;
}
