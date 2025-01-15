class EventEmitter {
    constructor() {
        this.events = {};
    }

    // Подписаться на событие
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    // Отписаться от события
    off(event, listener) {
        if (!this.events[event]) return;
        this.events[event] = this.events[event].filter((l) => l !== listener);
    }

    // Вызвать событие
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach((listener) => listener(data));
        }
    }
}

export default new EventEmitter();