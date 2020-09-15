import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function AdminUser() {
  const router = useRouter();
  const handleOnclick = () => {
    router.push('/login');
  }

  return (
    <div>
      <Head>
        <title>User Detail</title>
      </Head>
      <h1>Admin User page {router.query.id}</h1>
      <Link href="/login"><a className="active">Go to homepage by tag</a></Link>
      <button onClick={handleOnclick}>Go to homepage</button>
    </div>
  )
}