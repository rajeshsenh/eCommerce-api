import express, { Application } from 'express';

const app: Application = express();

// middleware
app.use(express.json());

// routers
app.use('/api/v1', () => {});

export default app;
