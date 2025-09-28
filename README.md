# Ayman API

A TypeScript-based Express.js API server.

## Prerequisites

- Node.js (v16 or later)
- npm (v8 or later)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Ayman306/aymanuddin-api.git
   cd aymanuddin-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp env.template .env
   # Edit .env file with your configuration
   ```

## Available Scripts

- `npm run dev` - Start the development server with hot-reload
- `npm run build` - Build the TypeScript application
- `npm start` - Start the production server
- `npm test` - Run tests (coming soon)

## Project Structure

```
src/
  ├── app.ts          # Main application entry point
  ├── routes/         # API routes
  ├── controllers/    # Request handlers
  ├── services/      # Business logic
  ├── models/        # Data models
  └── middlewares/   # Custom middleware
```

## Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. The server will be available at `http://localhost:3000`

## Building for Production

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## License

ISC
