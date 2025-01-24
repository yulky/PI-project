import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

const SHOW_SERVICE_URL = 'http://localhost:5001/api/show';
const BOOKING_SERVICE_URL = 'http://localhost:5002/api/booking';
const CATEGORY_SERVICE_URL = 'http://localhost:5003/api/category';

// Маршрутизация запросов к сервису шоу
app.use('/api/show', async (req, res) => {
    try {
        const response = await axios({
            method: req.method,
            url: `${SHOW_SERVICE_URL}${req.url}`,
            data: req.body,
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || { error: 'Internal Server Error' });
    }
});

// Маршрутизация запросов к сервису бронирований
app.use('/api/booking', async (req, res) => {
    try {
        const response = await axios({
            method: req.method,
            url: `${BOOKING_SERVICE_URL}${req.url}`,
            data: req.body,
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || { error: 'Internal Server Error' });
    }
});

// Маршрутизация запросов к сервису категорий
app.use('/api/category', async (req, res) => {
    try {
        const response = await axios({
            method: req.method,
            url: `${CATEGORY_SERVICE_URL}${req.url}`,
            data: req.body,
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || { error: 'Internal Server Error' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`API GATEWAY STARTED ON PORT ${PORT}`);
});