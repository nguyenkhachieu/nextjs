import Link from 'next/link';
const Home: React.FC = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="admin">
        <a className="active">Go to admin page</a>
      </Link>
    </div>
  )
}

export default Home;
