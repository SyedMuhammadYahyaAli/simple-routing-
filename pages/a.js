import Link from 'next/link';

export default function PageA() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>It's A!</h1>
      <Link href="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}
