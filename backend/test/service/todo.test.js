

describe('TODO Service', () => {
  it('should be able to get todos from repository', async () => {
    const expected = {
      todos: [
        {
          task: "This is a task to be done"
        }
      ]
    };
    const todoRepository = {
      getTodos: async () => Promise.resolve(expected)
    };

    const todoService = require('../../src/service/todo')(todoRepository);
    const actual = await todoService.getTodos();
    expect(actual).toEqual(expected);
  });

  it("should be able to add a todo to repository", async () => {
    const newTodo = { task: "This is a todo to be done" };
    const todoRepository = {
        addTodo: jest.fn().mockResolvedValue({ todos: [newTodo] }),
    };

    const todoService = require("../../src/service/todo")(todoRepository);
    const result = await todoService.addTodo(newTodo);
    expect(result.todos).toContainEqual(newTodo);
    expect(todoRepository.addTodo).toHaveBeenCalledWith(newTodo);
  });
});