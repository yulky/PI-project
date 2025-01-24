import express from 'express';
import mongoose from 'mongoose';
import categoryRoutes from './src/routes/categoryRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5003;
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.use(express.json());

// Подключение к MongoDB
mongoose.connect(MONGO_URL)
    .then(() => console.log('Connected to MongoDB (Category Service)'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Регистрация маршрутов
app.use('/api/category', categoryRoutes);

app.listen(PORT, () => {
    console.log(`CATEGORY SERVICE STARTED ON PORT ${PORT}`);
});