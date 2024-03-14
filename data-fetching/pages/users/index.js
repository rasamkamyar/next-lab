import Link from "next/link";

function users({ data }) {
  return (
    <>
      <h1>users</h1>
      <ul>
        {data.map((user) => {
          return (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
