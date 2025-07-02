import express from 'express';
const app = express();
// const connectDatabase = require('./config/database');
import dotenv from 'dotenv';
const PORT = process.env.PORT || 3099;

// UncaughtException Error
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});

// connectDatabase();

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
});
