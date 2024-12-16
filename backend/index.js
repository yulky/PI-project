import express from 'express'
import mongoose from 'mongoose'
import postRouter from './routes/postRouter.js';
import dotenv from 'dotenv';

dotenv.config();  // Загрузка переменных окружения из .env файла

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URI;

const app = express()

app.use(express.json()) // регестрируем парсер json
app.use('/api', postRouter)

async function startApp() {
    try {
        // MongoDB connection
        await mongoose.connect(MONGO_URL)  // Убираем useNewUrlParser и useUnifiedTopology
        console.log('Connected to MongoDB');
        
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
    } catch (e) {
        console.log('Error connecting to MongoDB:', e);
    }
}

startApp();