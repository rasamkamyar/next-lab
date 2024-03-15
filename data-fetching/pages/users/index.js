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
  console.log("regeneration");
  const res = await fetch("http://localhost:3001/users");
  const data = await res.json();

  return {
    props: {
      data,
      revalidate: 5, // seconds
    },
  };
}
