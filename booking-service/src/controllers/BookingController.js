import BookingService from '../services/BookingService.js';

class BookingController {
    async create (req, res) {
        try {
            const booking = await BookingService.create(req.body)
            res.status(200).json(booking);
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: 'Error creating booking', error: e.message });
        }
    }
    async delete(req, res) {
        try {
            const booking = await BookingService.delete(req.params.id);
            return res.json(booking);
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new BookingController();