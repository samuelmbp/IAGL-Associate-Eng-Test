const express = require("express");
const cors = require("cors");
const repository = require("./repository/todo");
const todoService = require("./service/todo")(repository);

const server = () => {
    const server = express();
    server.use(express.json());
    server.use(cors());

    server.get("/api/todo", async (req, res) => {
        res.json(await todoService.getTodos());
    });

    server.post("/api/todo", async (req, res) => {
        const newTodo = req.body;

        if (!newTodo || !newTodo.task) {
            return res.status(400).json({ error: "Task is required" });
        }

        await todoService.addTodo(newTodo);
        res.json(await todoService.getTodos());
    });

    return server;
};
module.exports = server;
