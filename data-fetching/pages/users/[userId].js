import { useRouter } from "next/router";

function UserDetail({ data }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>fall back page</h2>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.email}</h2>
    </div>
  );
}

export default UserDetail;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const dataUsers = data.slice(0, 4);
  const paths = dataUsers.map((user) => ({
    params: {
      userId: user.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  console.log("regeneration details");
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await res.json();

  if (!data.name) {
    return {
      // notFound: true,
      redirect: { destination: "/" }, //for rdirecting
    };
  }

  return {
    props: {
      data,
      revalidate: 10, // seconds
    },
  };
}
