import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Workshop } from '../workshops/workshop.entity';
import { CarWash } from '../car-wash/car-wash.entity';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  userId: string;

  @Column({ nullable: true })
  workshopId: string;

  @Column({ nullable: true })
  carWashId: string;

  @Column({
    type: 'enum',
    enum: ['workshop', 'car_wash', 'rental', 'import'],
    default: 'workshop',
  })
  serviceType: string;

  @Column({
    type: 'enum',
    enum: ['pending', 'confirmed', 'in_progress', 'completed', 'cancelled'],
    default: 'pending',
  })
  status: string;

  @Column({ type: 'timestamp' })
  scheduledDate: Date;

  @Column({ nullable: true })
  completedDate: Date;

  @Column({ type: 'jsonb', nullable: true })
  details: {
    carModel?: string;
    carYear?: string;
    licensePlate?: string;
    services?: string[];
    notes?: string;
  };

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalPrice: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  commission: number;

  @Column({
    type: 'enum',
    enum: ['pending', 'paid', 'refunded'],
    default: 'pending',
  })
  paymentStatus: string;

  @Column({ nullable: true })
  paymentIntentId: string;

  @Column({ type: 'text', nullable: true })
  cancellationReason: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.bookings)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Workshop, (workshop) => workshop.bookings, {
    nullable: true,
  })
  @JoinColumn({ name: 'workshopId' })
  workshop: Workshop;

  @ManyToOne(() => CarWash, (carWash) => carWash.bookings, { nullable: true })
  @JoinColumn({ name: 'carWashId' })
  carWash: CarWash;
}
