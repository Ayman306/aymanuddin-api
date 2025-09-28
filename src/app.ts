import express from 'express';
import dotenv from 'dotenv';
import { apiRoute } from './routes';
import AppInit from './middlewares/app-init';
import Server from './server';
import { scheduler } from './utils/scheduler';
// Load environment variables from .env file
dotenv.config();

// Create Express application
const app: express.Application = express();
const PORT = process.env.PORT || 3000;

//Middleware
new AppInit(app);

// Routes
app.use('/api', apiRoute.router);

//  route check and handle routes exceptions
new Server(app);

// Scheduler
scheduler.init();


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;