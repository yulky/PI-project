class CommandInvoker {
    constructor() {
        this.commands = [];
    }

    addCommand(command) {
        this.commands.push(command);
    }

    async executeCommands() {
        for (let command of this.commands) {
            await command.execute();
        }
    }
}

export default CommandInvoker;
