# Development Setup Guide

## Prerequisites
- Node.js 18+ 
- npm or yarn
- Docker & Docker Compose
- Flutter 3.0+ (for mobile development)
- PostgreSQL client tools (optional)

## Quick Start

### 1. Clone and Install Dependencies

```bash
# Install root dependencies
npm install

# Install backend dependencies
npm install -w backend

# Install frontend dependencies
npm install -w frontend-web

# Install shared types
npm install -w shared
```

### 2. Setup Environment Variables

```bash
# Backend
cd backend
cp .env.example .env

# Frontend
cd ../frontend-web
cp .env.example .env.local
```

### 3. Start Development Environment

#### Option A: Docker Setup (Recommended)

```bash
# Start all services (PostgreSQL, Redis, Backend, Nginx)
docker-compose up -d

# Check logs
docker-compose logs -f backend
```

#### Option B: Local Setup

```bash
# Terminal 1: Start PostgreSQL and Redis
# Make sure you have PostgreSQL and Redis running locally

# Terminal 2: Start Backend
cd backend
npm run start:dev

# Terminal 3: Start Frontend
cd frontend-web
npm run dev

# Frontend will be available at http://localhost:3000
# Backend will be available at http://localhost:3001
```

### 4. Database Migrations

```bash
cd backend
npm run typeorm migration:generate -- -n InitialMigration
npm run typeorm migration:run
```

### 5. Mobile Development

```bash
cd mobile-app
flutter pub get
flutter run -d chrome  # For web development
flutter run           # For iOS/Android
```

## Available Scripts

### Root Level
```bash
npm run dev              # Start all dev servers
npm run build           # Build all packages
npm run test            # Run all tests
npm run lint            # Lint all packages
npm run docker:up       # Start Docker containers
npm run docker:down     # Stop Docker containers
```

### Backend
```bash
npm run dev:backend          # Start development server with watch
npm run build               # Build for production
npm run start:debug         # Debug mode
npm run lint                # ESLint check
npm run test                # Run Jest tests
npm run typeorm migration:generate -- -n MigrationName
npm run typeorm migration:run
```

### Frontend
```bash
npm run dev:web         # Start Next.js dev server
npm run build          # Build for production
npm run start          # Start production server
npm run lint           # ESLint check
npm run export         # Static export
```

## API Documentation

### Authentication Endpoints
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `POST /auth/refresh` - Refresh JWT token

### Workshops
- `GET /workshops` - List all workshops
- `GET /workshops/nearby?lat=X&lng=Y&radius=10` - Find nearby workshops
- `GET /workshops/:id` - Get workshop details
- `POST /workshops` - Create workshop (auth required)
- `PUT /workshops/:id` - Update workshop (auth required)
- `DELETE /workshops/:id` - Delete workshop (auth required)

### Car Wash
- `GET /car-wash` - List all car wash services
- `GET /car-wash/nearby?lat=X&lng=Y&radius=10` - Find nearby car wash
- `GET /car-wash/:id` - Get car wash details
- `POST /car-wash` - Create car wash (auth required)
- `PUT /car-wash/:id` - Update car wash (auth required)
- `DELETE /car-wash/:id` - Delete car wash (auth required)

### Bookings
- `GET /bookings` - List all bookings
- `GET /bookings/user/:userId` - Get user's bookings
- `GET /bookings/:id` - Get booking details
- `POST /bookings` - Create booking (auth required)
- `PUT /bookings/:id` - Update booking (auth required)
- `POST /bookings/:id/cancel` - Cancel booking (auth required)
- `DELETE /bookings/:id` - Delete booking (auth required)

### Payments
- `POST /payments/create-intent` - Create Stripe payment intent
- `GET /payments/confirm/:paymentIntentId` - Confirm payment
- `POST /payments/refund/:paymentIntentId` - Refund payment

## Database Schema

### Users Table
- id (UUID)
- email (unique)
- password (hashed)
- firstName, lastName
- phone
- language (en/ar/de)
- role (user/partner/admin)
- profilePicture (JSON)
- address (JSON)
- emailVerified, phoneVerified
- isActive
- timestamps

### Workshops Table
- id (UUID)
- name
- description
- address (JSON with coordinates)
- phone, email
- services (array)
- workingHours (JSON)
- rating, reviewCount
- images (JSON array)
- isActive
- partnerId (foreign key)
- timestamps

### CarWashes Table
- Similar structure to Workshops
- serviceType (stationary/mobile/both)
- packages (array)

### Bookings Table
- id (UUID)
- userId (foreign key)
- workshopId/carWashId (foreign keys)
- serviceType (workshop/car_wash/rental/import)
- status (pending/confirmed/in_progress/completed/cancelled)
- scheduledDate
- details (JSON)
- totalPrice, commission
- paymentStatus, paymentIntentId
- cancellationReason
- timestamps

## Troubleshooting

### Docker Issues
```bash
# Clean up and restart
docker-compose down -v
docker-compose up --build

# Check if ports are available
lsof -i :3001  # Backend
lsof -i :5432  # PostgreSQL
lsof -i :6379  # Redis
```

### Database Connection Issues
```bash
# Check database connection string
echo $DATABASE_URL

# Test connection
psql postgres://user:pass@localhost:5432/autoone_db
```

### Build Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Clear caches
npm cache clean --force
```

## Deployment Preparation

1. Update environment variables for production
2. Build Docker images: `docker build -t autoone-backend:latest ./backend`
3. Push to registry
4. Deploy using orchestration tool (Kubernetes, Docker Compose, AWS ECS, etc.)

## Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Flutter Documentation](https://flutter.dev/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs)
- [Stripe API Reference](https://stripe.com/docs/api)

## Support

For issues or questions, please contact the development team or create an issue in the repository.
