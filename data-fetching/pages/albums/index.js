export default function Albums({ albums }) {
  return (
    <>
      <h1>ALBUMS</h1>
      <ul>
        {albums.map((album) => {
          return <li key={album.id}>{album.title}</li>;
        })}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3001/albums");
  const data = await res.json();

  return {
    props: {
      albums: data,
    },
  };
}
