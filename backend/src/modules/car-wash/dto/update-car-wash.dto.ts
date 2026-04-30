import { IsOptional, IsString, IsArray, IsObject, IsIn } from 'class-validator';

export class UpdateCarWashDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsObject()
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    coordinates: { lat: number; lng: number };
  };

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsIn(['stationary', 'mobile', 'both'])
  serviceType?: string;

  @IsOptional()
  @IsArray()
  packages?: string[];
}
