class Command {
    execute() {
        throw new Error('Метод execute должен быть переопределен');
    }
}

export default Command;
