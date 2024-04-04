import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  async function postHandler() {
    const res = await fetch("/api/data", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
  }

  return (
    <>
      <h1>database</h1>
      <input
        placeholder="Enter a Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={postHandler}>POST A NAME</button>
    </>
  );
}
