import EventEmitter from './EventEmitter.js';

EventEmitter.on('showCreated', (show) => {
    console.log(`Новое шоу создано: ${show.name}`);
});

EventEmitter.on('showDeleted', (id) => {
    console.log(`Шоу с id ${id} было удалено.`);
});