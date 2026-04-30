import { IsOptional, IsString, IsIn, IsObject, IsNumber } from 'class-validator';

export class UpdateBookingDto {
  @IsOptional()
  @IsString()
  scheduledDate?: string;

  @IsOptional()
  @IsIn(['pending', 'confirmed', 'in_progress', 'completed', 'cancelled'])
  status?: string;

  @IsOptional()
  @IsObject()
  details?: {
    carModel?: string;
    carYear?: string;
    licensePlate?: string;
    services?: string[];
    notes?: string;
  };

  @IsOptional()
  @IsNumber()
  totalPrice?: number;
}
