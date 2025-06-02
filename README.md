# Dahab Tablet Project

Dahab Tablet Project by Quantum Bytes 4 Tech (https://qb4.tech)

A modern Next.js application for gold price dashboard with real-time Firebase integration, Arabic RTL support, and customizable themes.

## 🚀 Quick Start

### Local Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 🐳 Docker Deployment

For containerized deployment with Docker:

```bash
# Development environment
./docker.sh dev

# Production environment
./docker.sh prod
```

For detailed Docker setup instructions, see [DOCKER.md](./DOCKER.md).

## Features

- 📊 Real-time gold price dashboard
- 🔥 Firebase integration for live data
- 🎨 Customizable themes and layouts
- 🌐 Arabic RTL support with multiple fonts
- 📱 Responsive tablet-optimized design
- ⚡ Next.js 15 with Turbopack for fast development
- 🐳 Full Docker support for easy deployment

## Tech Stack

- **Framework:** Next.js 15.3.3
- **Language:** TypeScript
- **Package Manager:** pnpm
- **Styling:** Tailwind CSS
- **Database:** Firebase Firestore
- **UI Components:** Radix UI
- **State Management:** Zustand
- **Fonts:** Cairo, Amiri, Tajawal, Almarai, Rubik (Arabic support)

## Environment Setup

1. Copy the environment example file:
   ```bash
   cp .env.example .env
   ```

2. Configure your Firebase credentials in `.env`:
   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
   ```

## Project Structure

```
├── app/                    # Next.js app directory
├── components/            # React components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── stores/                # Zustand stores
├── types/                 # TypeScript type definitions
├── public/                # Static assets
├── Dockerfile             # Production Docker configuration
├── Dockerfile.dev         # Development Docker configuration
├── docker-compose.yml     # Docker Compose configuration
└── docker.sh             # Docker management script
```

## Development

This project uses:
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **pnpm** as package manager
- **Firebase** for real-time data
- **Arabic RTL** layout support

## Deployment Options

### Local Development
```bash
pnpm dev
```

### Docker Development
```bash
./docker.sh dev
```

### Docker Production
```bash
./docker.sh prod
```

### Build for Production
```bash
pnpm build
pnpm start
```

## Contributing

This project is developed by Quantum Bytes 4 Tech. For more information, visit https://qb4.tech

## License

© 2025 Quantum Bytes 4 Tech. All rights reserved.
