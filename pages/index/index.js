import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>This is just a test...</h1>
      <p>
        Click{' '}
        <Link prefetch href="/quotes">
          <a>here</a>
        </Link>{' '}
        to see quotes
      </p>
    </div>
  );
}

export default Home;
