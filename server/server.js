import express from 'express';
const app = express();
// const connectDatabase = require('./config/database');
import dotenv from 'dotenv';
import productRoutes from './routes/product.routes.js';

const PORT = process.env.PORT || 3099;

dotenv.config();

// UncaughtException Error
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});

// connectDatabase();
// Routes
app.use("/api/products", productRoutes);

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
});
