import BookingService from '../services/BookingService.js';
import CreateBookingCommand from './CreateBookingCommand.js';
import DeleteBookingCommand from './DeleteBookingCommand.js';
import CommandInvoker from './CommandInvoker.js';

const bookingData = {
    userId: 'user123',
    showId: 'show456',
    tickets: 1
};

// Создаем команды
const createBookingCommand = new CreateBookingCommand(BookingService, bookingData);
const deleteBookingCommand = new DeleteBookingCommand(BookingService, 'bookingId123');

// Создаем инвокер и добавляем команды
const invoker = new CommandInvoker();
invoker.addCommand(createBookingCommand);
invoker.addCommand(deleteBookingCommand);

// Выполняем команды
invoker.executeCommands();
