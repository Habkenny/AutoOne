# AutoOne MVP - Quick Start Guide

## 🚀 Project Overview

**AutoOne** is a multi-language (Arabic, English, German) digital platform for car services in the Middle East, featuring:
- Workshop bookings with AI cost estimation
- Car wash services (stationary & mobile)
- Car rental (peer-to-peer & commercial)
- International car imports
- Real-time booking management
- Secure payments (Stripe)
- Multi-language UI with RTL support

---

## 📁 Project Structure

```
AutoOne/
├── backend/              # NestJS API
│   ├── src/
│   │   ├── modules/      # Feature modules
│   │   └── database/     # Entities & migrations
│   ├── Dockerfile
│   ├── package.json
│   └── .env.example
├── frontend-web/         # Next.js Web App
│   ├── app/              # Pages & layouts
│   ├── components/       # React components
│   ├── lib/              # Utils & i18n
│   ├── package.json
│   └── .env.example
├── mobile-app/           # Flutter App
│   ├── lib/
│   ├── assets/
│   └── pubspec.yaml
├── shared/               # TypeScript types
│   ├── types.ts
│   └── package.json
├── docker-compose.yml    # Local dev stack
├── package.json          # Root monorepo
└── README.md
```

---

## ⚡ Quick Start (5 minutes)

### Option 1: Docker (Recommended)

```bash
# 1. Navigate to project
cd c:\Users\habke\Desktop\Cousera\Auto

# 2. Install dependencies
npm install

# 3. Setup environment files
cd backend && cp .env.example .env && cd ..
cd frontend-web && cp .env.example .env.local && cd ..

# 4. Start all services
docker-compose up -d

# 5. Check status
docker-compose ps

# 6. Access services
# Frontend: http://localhost:3000
# Backend: http://localhost:3001
# API Docs: http://localhost:3001/api
```

### Option 2: Local Development

```bash
# Terminal 1: Backend
cd backend
npm install
cp .env.example .env
npm run start:dev
# Runs on http://localhost:3001

# Terminal 2: Frontend
cd frontend-web
npm install
cp .env.example .env.local
npm run dev
# Runs on http://localhost:3000

# Terminal 3: Database (if local)
# Ensure PostgreSQL and Redis are running
# Or use Docker just for DB:
docker-compose up postgres redis
```

---

## 🔐 Environment Setup

### Backend (.env)
```env
NODE_ENV=development
PORT=3001
DB_HOST=postgres
DB_PORT=5432
DB_USER=autoone_user
DB_PASSWORD=autoone_pass_dev
DB_NAME=autoone_db
JWT_SECRET=your_secret_key_change_in_production
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_PUBLISHABLE_KEY=pk_test_xxx
REDIS_URL=redis://redis:6379
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_STRIPE_KEY=pk_test_xxx
```

---

## 🎯 Features Implemented (Phase 1 MVP)

### ✅ Authentication
- Register/Login with email & password
- JWT token management
- Multi-language onboarding
- Role-based access (user, partner, admin)

### ✅ Workshops Module
- List all workshops with pagination
- Find nearby workshops (geolocation)
- Workshop details with ratings & reviews
- Create/edit workshops (partner)
- Real-time rating updates

### ✅ Car Wash Module
- Browse car wash services
- Filter by type (stationary/mobile)
- Nearby service search
- Booking with time slots

### ✅ Bookings Module
- Create bookings with details
- Track booking status
- User booking history
- Cancel bookings with reasons

### ✅ Payments
- Stripe payment intent creation
- Secure payment confirmation
- Refund processing
- Payment status tracking

### ✅ Frontend
- Responsive design (mobile-first)
- Multi-language (Arabic, English, German)
- RTL support for Arabic
- Real-time search
- Interactive maps (placeholder)

### ✅ Infrastructure
- Docker containerization
- Nginx reverse proxy
- PostgreSQL database
- Redis caching
- Database migrations

---

## 🔗 API Endpoints

### Authentication
```
POST   /auth/register          # Create account
POST   /auth/login             # Login user
```

### Workshops
```
GET    /workshops              # List all
GET    /workshops/nearby       # Find nearby
GET    /workshops/:id          # Get details
POST   /workshops              # Create
PUT    /workshops/:id          # Update
DELETE /workshops/:id          # Delete
```

### Car Wash
```
GET    /car-wash               # List all
GET    /car-wash/nearby        # Find nearby
GET    /car-wash/:id           # Get details
POST   /car-wash               # Create
PUT    /car-wash/:id           # Update
DELETE /car-wash/:id           # Delete
```

### Bookings
```
GET    /bookings               # List all
GET    /bookings/user/:userId  # User bookings
GET    /bookings/:id           # Get details
POST   /bookings               # Create booking
PUT    /bookings/:id           # Update
POST   /bookings/:id/cancel    # Cancel
DELETE /bookings/:id           # Delete
```

### Payments
```
POST   /payments/create-intent          # Create payment
GET    /payments/confirm/:intentId      # Confirm
POST   /payments/refund/:intentId       # Refund
```

---

## 🧪 Testing

```bash
# Backend tests
cd backend
npm run test
npm run test:cov

# Frontend linting
cd frontend-web
npm run lint

# Build check
npm run build
```

---

## 📱 Mobile App (Flutter)

```bash
cd mobile-app

# Install dependencies
flutter pub get

# Run on Chrome (web)
flutter run -d chrome

# Run on device
flutter run

# Build APK
flutter build apk

# Build iOS
flutter build ios
```

---

## 🚀 Deployment Checklist

- [ ] Update production environment variables
- [ ] Configure database backups
- [ ] Setup CI/CD pipeline (GitHub Actions)
- [ ] Configure SSL/TLS certificates
- [ ] Setup monitoring & logging
- [ ] Configure payment webhooks
- [ ] Test all payment flows
- [ ] Set up error tracking (Sentry)
- [ ] Configure email notifications
- [ ] Setup analytics

---

## 📊 Database Initialization

```bash
cd backend

# Generate migration
npm run typeorm migration:generate -- -n InitialMigration

# Run migrations
npm run typeorm migration:run

# Revert last migration
npm run typeorm migration:revert
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3001
lsof -i :3001
kill -9 <PID>

# Or use different port
PORT=3002 npm run start:dev
```

### Database Connection Failed
```bash
# Check Docker container status
docker-compose ps

# View logs
docker-compose logs postgres

# Restart services
docker-compose restart postgres redis
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Next.js Build Error
```bash
# Clear cache and rebuild
cd frontend-web
rm -rf .next
npm run build
```

---

## 📚 Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Frontend** | Next.js | 14.0+ |
| **Web UI** | React + Tailwind | 18.2+ |
| **Mobile** | Flutter | 3.0+ |
| **Backend** | NestJS | 10.2+ |
| **Database** | PostgreSQL | 15+ |
| **Cache** | Redis | 7+ |
| **Payments** | Stripe | API v2023-10-16 |
| **Auth** | JWT + Passport | - |
| **Container** | Docker | Latest |

---

## 🎓 Learning Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [Next.js 14 Guide](https://nextjs.org/docs)
- [Flutter Getting Started](https://flutter.dev/docs/get-started)
- [PostgreSQL Docs](https://www.postgresql.org/docs)
- [Stripe Integration Guide](https://stripe.com/docs/integration)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## 📞 Support & Contact

For questions or issues:
1. Check the SETUP.md file for detailed setup instructions
2. Review the README.md in each module
3. Check error logs: `docker-compose logs service-name`
4. Consult the API documentation

---

## ✨ Next Phase Features

- **Admin Dashboard** - User & service management
- **AI Chatbot** - Multi-language support
- **Real-time Chat** - Socket.io integration
- **Analytics** - User behavior tracking
- **Push Notifications** - Booking updates
- **Advanced Search** - Filters & sorting
- **Review System** - Ratings & comments
- **Referral Program** - User incentives

---

## 📄 License

MIT License - Open source for educational purposes

---

**Created:** 2024  
**Version:** 1.0.0 (MVP)  
**Status:** Ready for Phase 1 Development
