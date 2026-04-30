# AutoOne Project Structure

## Backend (NestJS)
- `/backend` - Node.js backend API with NestJS framework
  - `/src`
    - `/modules` - Feature modules (auth, users, workshops, car-wash, bookings, payments, admin, partner, chat)
    - `/database` - Database entities and migrations
  - `package.json` - Backend dependencies
  - `Dockerfile` - Backend containerization
  - `tsconfig.json` - TypeScript configuration
  - `.env.example` - Environment variables template

## Frontend Web (Next.js)
- `/frontend-web` - React/Next.js web application
  - `/app` - Next.js pages and layouts
  - `/components` - Reusable React components
  - `/lib` - Utilities and services (API client, i18n)
  - `/styles` - Global CSS and styling
  - `/public` - Static assets
  - `package.json` - Web dependencies
  - `tailwind.config.js` - Tailwind CSS configuration
  - `next.config.js` - Next.js configuration
  - `.env.example` - Environment variables template

## Mobile App (Flutter)
- `/mobile-app` - Flutter mobile application (iOS/Android)
  - `/lib` - Dart source code
    - `/features` - Feature modules
    - `/core` - Core utilities and services
  - `/assets` - Images, translations, icons
  - `pubspec.yaml` - Flutter dependencies

## Shared Types
- `/shared` - TypeScript types and interfaces used across backend and frontend
  - `types.ts` - Common type definitions
  - `package.json` - Shared package configuration

## Infrastructure & Configuration
- `docker-compose.yml` - Docker compose for local development (PostgreSQL, Redis, Backend, Nginx)
- `nginx.conf` - Nginx reverse proxy configuration
- `package.json` - Root monorepo workspace configuration
- `.gitignore` - Git ignore configuration

## Environment Setup

### Backend
```bash
cd backend
npm install
cp .env.example .env
# Update .env with your configuration
npm run start:dev
```

### Frontend Web
```bash
cd frontend-web
npm install
cp .env.example .env.local
# Update .env.local with your API URL
npm run dev
```

### Mobile
```bash
cd mobile-app
flutter pub get
flutter run
```

### Docker Setup
```bash
docker-compose up
```

## Key Features Implemented

### Authentication
- JWT-based authentication
- Email/password registration and login
- Multi-language support (Arabic, English, German)

### Core Modules
- **Workshops**: List, search, nearby workshops
- **Car Wash**: Book mobile or stationary car wash services
- **Bookings**: Manage user bookings with status tracking
- **Payments**: Stripe integration for payments
- **Admin & Partner**: Dashboard foundation (scaffolding)
- **Chat**: Real-time chat support (scaffolding)

### Frontend Features
- Responsive design with Tailwind CSS
- Multi-language support with i18n
- RTL support for Arabic
- API integration layer
- Component-based architecture

### Tech Stack
- Backend: NestJS, PostgreSQL, Redis, Stripe
- Frontend: Next.js, React, Tailwind CSS, TypeScript
- Mobile: Flutter, Riverpod, Easy Localization
- Infrastructure: Docker, Nginx, PostgreSQL

## Next Steps

1. **Complete Admin Dashboard** - Add user/service management interfaces
2. **Implement Chat Module** - Real-time messaging with Socket.io
3. **Finalize Payments** - Complete Stripe integration UI
4. **Mobile App Development** - Complete Flutter UI and features
5. **Testing** - Unit tests, integration tests, E2E tests
6. **Deployment** - Setup CI/CD pipelines, cloud hosting
7. **Analytics** - Add user behavior tracking and analytics

## Contributing
Follow the established patterns in each module for consistency.

## License
MIT
