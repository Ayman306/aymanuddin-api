import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
class AppInit {
    constructor(app: express.Application) {
        this.init(app)
    }
    init(app: express.Application) {
        dotenv.config();
        const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';


        // Middleware
        app.disable('x-powered-by');
        app.use(helmet());
        app.use(
            cors({
                origin: CORS_ORIGIN === '*' ? true : CORS_ORIGIN.split(',').map((s) => s.trim()),
                credentials: true,
                methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
                allowedHeaders: ['Content-Type', 'Authorization']
            })
        );
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));


    }
}

export default AppInit;
