
const repository = require('../../src/repository/todo');

describe('TODO repository', () => {
  it('should return the todo list', async () => {
    const expected = {
      todos: [{
        "task": "This is a todo example"
      }]
    };
    const actual = await repository.getTodos();
    expect(actual).toEqual(expected);
  });

  it("should add a todo", async () => {
    const newTodo = { task: "This is a todo to be done" };
    repository.addTodo = jest.fn().mockResolvedValue({ todos: [newTodo] });

    const result = await repository.addTodo(newTodo);
    expect(result.todos).toContainEqual(newTodo);
    expect(repository.addTodo).toHaveBeenCalledWith(newTodo);
  });
});