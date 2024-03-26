import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState([]);
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
  return (
    <>
      <h1>API CALL</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={clickHandler}>CREATE TODO</button>
    </>
  );
}
