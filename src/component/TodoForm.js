import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const TodoForm = () => {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            task,
        };

        dispatch(addTodo(newTodo));
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="What needs to be done?"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
            />

            <button type="submit">Add Task</button>
        </form>
    );
};

export default TodoForm;
