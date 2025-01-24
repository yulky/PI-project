import express from 'express';
import mongoose from 'mongoose';
import showRoutes from './src/routes/showRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5001;
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.use(express.json());

// Подключение к MongoDB
mongoose.connect(MONGO_URL)
    .then(() => console.log('Connected to MongoDB (Show Service)'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Регистрация маршрутов
app.use('/api/show', showRoutes);

app.listen(PORT, () => {
    console.log(`SHOW SERVICE STARTED ON PORT ${PORT}`);
});