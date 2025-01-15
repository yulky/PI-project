// db.js
import mongoose from 'mongoose';

class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance;
        }
        Database.instance = this;
        this.connection = null;
    }

    async connect(uri) {
        if (!this.connection) {
            try {
                this.connection = await mongoose.connect(uri, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                });
                console.log('Connected to MongoDB');
            } catch (error) {
                console.error('Error connecting to MongoDB:', error.message);
                throw error;
            }
        }
        return this.connection;
    }
}

export default new Database();
