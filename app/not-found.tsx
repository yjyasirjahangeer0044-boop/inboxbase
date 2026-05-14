import Link from 'next/link';

export default function NotFound() {
  return (
    <section style={{ padding: '120px 0', textAlign: 'center' }}>
      <div className="container">
        <div
          style={{
            fontSize: 100,
            fontWeight: 800,
            color: '#8B5CF6',
            lineHeight: 1,
            marginBottom: 20,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          404
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 14 }}>
          This page is missing from our <span style={{ color: '#8B5CF6' }}>Brevo</span> hub
        </h1>
        <p style={{ color: '#a0a0a0', fontSize: 16, marginBottom: 32 }}>
          The page you're looking for doesn't exist. Try browsing our guides instead.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
