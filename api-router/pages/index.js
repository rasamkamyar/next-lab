import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState([]);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/todos");
      const data = await res.json();
      setTodos(data);
    }
    fetchData();
  }, []);

  const clickHandler = async () => {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ newTodo }),
      headers: { "content-type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
  };

  const deleteHandler = async () => {
    const res = await fetch("/api/todos", {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    setTodos(data.data);
  };

  const replaceHandler = async () => {
    const res = await fetch("/api/todos", {
      method: "PUT",
      body: JSON.stringify([
        {
          id: 8,
          title: "TODO H",
        },
        {
          id: 9,
          title: "TODO W",
        },
      ]),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    setTodos(data.data);
  };

  const editHandler = async () => {
    const res = await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ title }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setTodos(data);
  };

  return (
    <>
      <h1>API CALL</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={clickHandler}>CREATE TODO</button>
      <button onClick={deleteHandler}>DELETE ALL</button>
      <button onClick={replaceHandler}>REPLACE ALL</button>

      <div>
        <input
          placeholder="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={editHandler}> EDIT TODOS</button>
      </div>
    </>
  );
}
