import express from 'express'
import mongoose from 'mongoose'
import router from './routes/router.js';
import dotenv from 'dotenv';
import dbWrapper from './utils/DatabaseWrapper.js';
dotenv.config();  // Загрузка переменных окружения из .env файла

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

import ServerConfig from './utils/ServerConfig.js'

// Базовая конфигурация
const defaultConfig = new ServerConfig({ host: 'localhost', port: 8080, secure: false });
defaultConfig.showConfig();

// Создаем прототипы с изменениями
const secureConfig = defaultConfig.clone();
secureConfig.secure = true;
secureConfig.port = 8443;
secureConfig.showConfig();

const customConfig = defaultConfig.clone();
customConfig.host = 'customhost.com';
customConfig.showConfig();


const app = express()

app.use(express.json()) // регестрируем парсер json
app.use('/api', router)

async function startApp() {
    try {
        // MongoDB connection
        await dbWrapper.connect(MONGO_URL)  // Убираем useNewUrlParser и useUnifiedTopology
        console.log('Connected to MongoDB');
        
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
    } catch (e) {
        console.log('Error connecting to MongoDB:', e);
    }
}

startApp();