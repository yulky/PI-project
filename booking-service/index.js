import express from 'express';
import mongoose from 'mongoose';
import bookingRoutes from './src/routes/bookingRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5002;
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.use(express.json());

// Подключение к MongoDB
mongoose.connect(MONGO_URL)
    .then(() => console.log('Connected to MongoDB (Booking Service)'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Регистрация маршрутов
app.use('/api/booking', bookingRoutes);

app.listen(PORT, () => {
    console.log(`BOOKING SERVICE STARTED ON PORT ${PORT}`);
});