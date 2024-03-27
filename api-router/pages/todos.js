import { todos } from "@/data/todos";

export default function Todos({ data }) {
  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}> {todo.title} </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  return {
    props: { data: todos },
  };
}
