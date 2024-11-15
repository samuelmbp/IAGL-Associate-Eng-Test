const todoService = (repository) => {
    return {
        getTodos: async () => {
            return await repository.getTodos();
        },
        addTodo: async (newTodo) => {
            return await repository.addTodo(newTodo);
        },
    };
};

module.exports = todoService;
