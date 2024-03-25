import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/todos");
      const data = await res.json();
      // console.log(data);
      setTodos(data);
    }
    fetchData();
  }, []);
  return (
    <>
      <h1>API CALL</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.todo}>{todo.todo}</li>
        ))}
      </ul>
    </>
  );
}
