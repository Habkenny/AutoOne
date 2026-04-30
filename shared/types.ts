export enum UserRole {
  USER = 'user',
  PARTNER = 'partner',
  ADMIN = 'admin',
}

export enum Language {
  EN = 'en',
  AR = 'ar',
  DE = 'de',
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: UserRole;
  language: Language;
  emailVerified: boolean;
  phoneVerified: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  language: Language;
  token: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  language?: Language;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  coordinates: Coordinates;
}

export interface Workshop {
  id: string;
  name: string;
  description?: string;
  address: Address;
  phone?: string;
  email?: string;
  services: string[];
  rating: number;
  reviewCount: number;
  isActive: boolean;
  partnerId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CarWash {
  id: string;
  name: string;
  description?: string;
  address: Address;
  phone?: string;
  email?: string;
  serviceType: 'stationary' | 'mobile' | 'both';
  packages: string[];
  rating: number;
  reviewCount: number;
  isActive: boolean;
  partnerId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export enum PaymentStatus {
  PENDING = 'pending',
  PAID = 'paid',
  REFUNDED = 'refunded',
}

export interface BookingDetails {
  carModel?: string;
  carYear?: string;
  licensePlate?: string;
  services?: string[];
  notes?: string;
}

export interface Booking {
  id: string;
  userId: string;
  workshopId?: string;
  carWashId?: string;
  serviceType: 'workshop' | 'car_wash' | 'rental' | 'import';
  status: BookingStatus;
  scheduledDate: Date;
  completedDate?: Date;
  details: BookingDetails;
  totalPrice: number;
  commission: number;
  paymentStatus: PaymentStatus;
  paymentIntentId?: string;
  cancellationReason?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateBookingRequest {
  userId: string;
  workshopId?: string;
  carWashId?: string;
  serviceType: 'workshop' | 'car_wash' | 'rental' | 'import';
  scheduledDate: string;
  details: BookingDetails;
  totalPrice: number;
}

export interface PaymentIntent {
  clientSecret: string;
  paymentIntentId: string;
}

export interface PaymentConfirmation {
  status: string;
  amount: number;
  currency: string;
  metadata: any;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  skip: number;
  take: number;
}
