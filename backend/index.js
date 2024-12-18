import express from 'express'
import mongoose from 'mongoose'
import router from './routes/router.js';
import dotenv from 'dotenv';
import createMultipleObjects from './functions/CreateObjects.js';
import Booking from './models/Booking.js';
dotenv.config();  // Загрузка переменных окружения из .env файла

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URI;

const app = express()

app.use(express.json()) // регестрируем парсер json
app.use('/api', router)



createMultipleObjects({
    objects:[
        {
        showId: '6762a78d2fe1b63f0fa65202',
        userID: '6762a546f64e318f67d7c752',
    },
    {
        showId: '6762a78d2fe1b63f0fa65203',
        userID: '6762a546f64e318f67d7c751',
    }
],
model: Booking
}
)


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

// import Category from './models/Category.js';

// createMultipleObjects({
//     objects: [
//         {
//             name: "Стендап",
//             description: "Выступление комиков",
//         }
//     ],
//     model: Category
// });


startApp();