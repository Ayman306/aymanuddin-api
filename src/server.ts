import express, { Request, Response, NextFunction } from 'express';
import prisma from './config/prisma';

class Server {
    constructor(app: express.Application) {
        this.init(app)
    }
    init(app: express.Application) {

        // Basic route
        app.get('/', (req: Request, res: Response) => {
            res.send(`Welcome to Ayman's API`);
        });

        // Health check endpoint
        app.get('/health', (req: Request, res: Response) => {
            res.status(200).json({ status: 'ok', message: 'Server is running' });
        });


        // DB health check
        app.get('/db/health', async (req: Request, res: Response) => {
            try {
                await prisma.$queryRaw`SELECT 1`;
                res.status(200).json({ status: 'ok' });
            } catch (err) {
                res.status(500).json({ status: 'error', error: (err as Error).message });
            }
        });

        // 404 handler
        app.use((req: Request, res: Response) => {
            res.status(404).json({ error: 'Not Found' });
        });

        // Error handling middleware
        app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            console.error(err.stack);
            res.status(500).json({ error: 'Something went wrong!' });
        });
    }
}

export default Server;