import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'iboxbase privacy policy — how we collect, use, and protect your data when you visit our Brevo education hub.',
  alternates: { canonical: '/privacy-policy/' },
};

export default function PrivacyPage() {
  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <h1 style={{ fontSize: 40, fontWeight: 800, color: '#fff', marginBottom: 24 }}>
          Privacy Policy
        </h1>
        <div className="prose">
          <p>
            This Privacy Policy explains how iboxbase ("we", "us", or "our") collects, uses, and protects
            information when you visit inboxbase.online. By using this site, you agree to the practices
            described below.
          </p>
          <h2>Information we collect</h2>
          <p>
            We collect minimal data: anonymized analytics about pages viewed, browser type, device,
            referring URL, and approximate location (country-level). We do not collect names, email
            addresses, or payment information through this site, as we do not run forms or accept payments.
          </p>
          <h2>Cookies</h2>
          <p>
            We use first-party cookies for analytics and to remember your cookie consent preference. You
            can decline cookies via the banner on first visit. Third-party services we use (such as
            Google Analytics) may set their own cookies. Read our{' '}
            <a href="/cookies-policy/">cookies policy</a> for details.
          </p>
          <h2>How we use information</h2>
          <ul>
            <li>To understand which guides are useful and improve our content</li>
            <li>To detect technical issues and maintain site performance</li>
            <li>To comply with legal obligations where applicable</li>
          </ul>
          <h2>Third-party links</h2>
          <p>
            This site contains links to third-party websites including Brevo and competitor platforms.
            We are not responsible for the privacy practices of these sites. Please review their
            privacy policies before providing any information.
          </p>
          <h2>Your rights</h2>
          <p>
            Depending on your jurisdiction (GDPR, CCPA, and similar laws), you may have rights to
            access, correct, or delete personal data we hold about you. To exercise these rights,
            email <a href="mailto:support@inboxbase.online">support@inboxbase.online</a>.
          </p>
          <h2>Changes</h2>
          <p>
            We may update this policy occasionally. Material changes will be reflected with an updated
            effective date. Continued use of the site after changes constitutes acceptance.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href="mailto:support@inboxbase.online">support@inboxbase.online</a>
          </p>
        </div>
      </div>
    </section>
  );
}
