import { IsString, IsOptional, IsArray, IsObject, IsIn } from 'class-validator';

export class CreateCarWashDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsObject()
  address: {
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
