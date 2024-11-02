import Link from 'next/link';

export default function PageB() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>It's B!</h1>
      <Link href="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}
