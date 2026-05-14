import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact inboxbase',
  description:
    'Get in touch with the inboxbase team for guide suggestions, corrections, or partnership inquiries about Brevo content.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: 720 }}>
        <h1 style={{ fontSize: 44, fontWeight: 800, color: '#fff', marginBottom: 24 }}>
          Contact us
        </h1>
        <div className="prose">
          <p>
            Have a question about a Brevo guide? Found an error? Want to suggest a topic? We read every
            message and reply to most within 48 hours.
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:support@inboxbase.online">support@inboxbase.online</a>
          </p>
          <h2>What to include</h2>
          <ul>
            <li>The specific guide or page you're writing about (link helps)</li>
            <li>What you tried and what happened</li>
            <li>Any screenshots if it's a deliverability or setup issue</li>
          </ul>
          <h2>What we don't do</h2>
          <p>
            We're not Brevo support. For account-specific issues — billing, sending limits, support
            tickets — please contact{' '}
            <a href="https://www.brevo.com" target="_blank" rel="noopener noreferrer">
              Brevo directly
            </a>
            . They respond fast and know your account.
          </p>
          <div
            style={{
              marginTop: 32,
              padding: '24px',
              background: 'rgba(139,92,246,0.08)',
              border: '1px solid rgba(139,92,246,0.3)',
              borderRadius: 10,
            }}
          >
            <a
              href="mailto:support@inboxbase.online"
              style={{
                display: 'inline-block',
                background: '#8B5CF6',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Email support@inboxbase.online →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
