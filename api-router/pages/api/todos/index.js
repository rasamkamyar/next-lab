import { todos } from "@/data/todos";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(todos);
  } else if (req.method === "POST") {
    const { newTodo } = req.body;
    const newTodoItem = {
      id: todos.length + 1,
      todo: newTodo,
    };
    res.status(201).json({
      message: "success",
      data: newTodoItem,
    });
  } else if (req.method === "DELETE") {
    res.status(200).json({
      message: "delete data",
      data: [],
    });
  } else if (req.method === "PUT") {
    res.status(200).json({
      message: "replace all",
      data: req.body,
    });
  }
}
