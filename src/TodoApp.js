import React from "react";
import TodoList from "./component/TodoList";
import "./styles.css";
import TodoForm from "./component/TodoForm";

export default function TodoApp() {
    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <TodoForm />
            <TodoList />
        </div>
    );
}
