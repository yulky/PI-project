// ServerConfig.js
class ServerConfig {
    constructor({ host, port, secure }) {
        this.host = host || 'localhost';
        this.port = port || 3000;
        this.secure = secure || false;
    }

    // Метод для клонирования объекта
    clone() {
        return new ServerConfig({ ...this });
    }

    // Метод для отображения конфигурации
    showConfig() {
        console.log(`Host: ${this.host}, Port: ${this.port}, Secure: ${this.secure}`);
    }
}

export default ServerConfig;
