import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Button Navigation Example</h1>
      <Link href="/a">
        <button>A</button>
      </Link>
      <Link href="/b">
        <button>B</button>
      </Link>
    </div>
  );
}
