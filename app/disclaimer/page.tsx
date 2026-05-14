import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description:
    'iboxbase disclaimer — important notices about the educational content on this Brevo hub.',
  alternates: { canonical: '/disclaimer/' },
};

export default function DisclaimerPage() {
  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <h1 style={{ fontSize: 40, fontWeight: 800, color: '#fff', marginBottom: 24 }}>
          Disclaimer
        </h1>
        <div className="prose">
          <h2>Educational content only</h2>
          <p>
            The information on iboxbase is provided for general educational purposes only. It does not
            constitute professional advice — legal, financial, technical, or otherwise. Before acting on
            anything you read here, verify it against current Brevo documentation and your specific
            business needs.
          </p>
          <h2>Accuracy</h2>
          <p>
            We work hard to keep guides accurate and current, but features, pricing, and policies of
            Brevo and competing platforms change frequently. We cannot guarantee that every detail
            reflects the current state of every product. Always confirm pricing and features on the
            official Brevo website before purchasing.
          </p>
          <h2>Results vary</h2>
          <p>
            Email marketing performance depends on countless factors — your list quality, sender
            reputation, content, industry, and timing. Statistics mentioned in our guides (open rates,
            click rates, recovery rates, etc.) reflect averages or specific case studies. Your results
            will be different.
          </p>
          <h2>Affiliate relationships</h2>
          <p>
            iboxbase participates in the Brevo affiliate program. Links to Brevo on this site may pay us
            a commission if you sign up — at no extra cost to you. See our full{' '}
            <a href="/affiliate-disclosure/">affiliate disclosure</a> for details.
          </p>
          <h2>Third-party trademarks</h2>
          <p>
            Brevo, Mailchimp, HubSpot, Klaviyo, ConvertKit, AWeber, MailerLite, ActiveCampaign,
            GetResponse, Constant Contact, Shopify, WordPress, WooCommerce, and other product names
            mentioned are trademarks of their respective owners. Use of these names is purely for
            descriptive and comparison purposes.
          </p>
          <h2>External links</h2>
          <p>
            We link to external websites for additional context. We do not control these sites and are
            not responsible for their content, accuracy, or security.
          </p>
          <h2>Contact</h2>
          <p>
            Spot an inaccuracy? Email us: <a href="mailto:support@inboxbase.online">support@inboxbase.online</a>
          </p>
        </div>
      </div>
    </section>
  );
}
