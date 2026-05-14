import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookies Policy',
  description:
    'Cookies policy for iboxbase. How and why we use cookies on this Brevo education hub.',
  alternates: { canonical: '/cookies-policy/' },
};

export default function CookiesPage() {
  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <h1 style={{ fontSize: 40, fontWeight: 800, color: '#fff', marginBottom: 24 }}>
          Cookies Policy
        </h1>
        <div className="prose">
          <p>
            This Cookies Policy explains what cookies are, how iboxbase uses them, and your choices
            regarding them.
          </p>
          <h2>What are cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help the
            site remember preferences and understand how visitors use it.
          </p>
          <h2>Types of cookies we use</h2>
          <ul>
            <li>
              <strong>Strictly necessary:</strong> Required for basic site function — including
              remembering your cookie consent choice itself (stored in localStorage).
            </li>
            <li>
              <strong>Analytics:</strong> Anonymized usage data so we can understand which guides are
              helpful and improve content. We do not link this to individual identities.
            </li>
            <li>
              <strong>Affiliate tracking:</strong> When you click a Brevo link from our site, Brevo
              may set a cookie to attribute your eventual signup to us so we earn commission. This
              cookie is set by Brevo, not by us.
            </li>
          </ul>
          <h2>Cookies we do NOT use</h2>
          <ul>
            <li>Cross-site advertising cookies</li>
            <li>Social media tracking pixels</li>
            <li>Retargeting cookies</li>
          </ul>
          <h2>Managing cookies</h2>
          <p>
            You can decline non-essential cookies via the banner shown on your first visit. You can also
            block or delete cookies through your browser settings — most browsers let you control
            cookies through the privacy or security menu.
          </p>
          <h2>Changes</h2>
          <p>
            We may update this Cookies Policy from time to time. Please check back occasionally for
            updates.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about cookies: <a href="mailto:support@inboxbase.online">support@inboxbase.online</a>
          </p>
        </div>
      </div>
    </section>
  );
}
