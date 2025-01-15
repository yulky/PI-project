import express from 'express'
import mongoose from 'mongoose'
import router from './routes/router.js';
import dotenv from 'dotenv';
import Database from './utils/db.js';

dotenv.config();  // Загрузка переменных окружения из .env файла

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

const app = express()

app.use(express.json()) // регестрируем парсер json
app.use('/api', router)

async function startApp() {
    try {
        // MongoDB connection
        await Database.connect(MONGO_URL)  // Убираем useNewUrlParser и useUnifiedTopology
        console.log('Connected to MongoDB');
        
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
    } catch (e) {
        console.log('Error connecting to MongoDB:', e);
    }
}

import './utils/eventHandler.js';
import showService from './services/ShowService.js';

(async () => {
    // await showService.create({
    //   title: 'Test Show',
    //   date: '2025-04-02T19:00:00.000+00:00',
    //   time: "19:00",
    //   description: "Описание",
    //   categoryId: "6762a64f03d6b9d2f687e55d",
    //   availableTickets: 150,
    //   price: 500,
    // });
    // await showService.deleteById('6787b45177b6f275c6d8a446');
})();

startApp();