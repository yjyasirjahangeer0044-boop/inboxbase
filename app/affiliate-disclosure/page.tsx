import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description:
    'Full affiliate disclosure for iboxbase, the independent Brevo education hub. Transparency about how we earn commissions.',
  alternates: { canonical: '/affiliate-disclosure/' },
};

export default function AffiliateDisclosurePage() {
  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <h1 style={{ fontSize: 40, fontWeight: 800, color: '#fff', marginBottom: 24 }}>
          Affiliate Disclosure
        </h1>
        <div className="prose">
          <p>
            This page complies with the U.S. Federal Trade Commission (FTC) endorsement guidelines, the
            UK's Advertising Standards Authority (ASA) rules, and equivalent regulations in other
            jurisdictions. We believe in radical transparency about how this site is funded.
          </p>
          <h2>The short version</h2>
          <p>
            <strong>We earn commissions when you sign up for Brevo through links on this site.</strong>{' '}
            These commissions cost you nothing extra. They fund the time we spend testing features,
            writing guides, and maintaining the site.
          </p>
          <h2>Which links are affiliate links</h2>
          <p>
            Any link on iboxbase that points to <code>brevo.com</code> or <code>get.brevo.com</code> may
            be an affiliate link. This includes:
          </p>
          <ul>
            <li>Buttons labeled "Try Brevo Free", "Start Free Account", or similar</li>
            <li>The "Try Brevo Free →" button in the site header</li>
            <li>In-article CTAs and sidebar boxes promoting Brevo</li>
            <li>Pricing table buttons linking to Brevo plans</li>
          </ul>
          <h2>How affiliate links affect our content</h2>
          <p>
            They don't change what we write. Our guides recommend specific Brevo features, workflows,
            and best practices based on what we believe genuinely helps readers. If we found Brevo
            unsuitable for a use case, we'd say so — and our competitor comparison articles make our
            honest views clear. The commission structure is fixed regardless of which Brevo plan you
            choose, so we have no incentive to push a higher tier.
          </p>
          <h2>Brevo is the only paid promotion on this site</h2>
          <p>
            We do not run display ads, sponsored posts, paid placements, or affiliate programs for any
            other email marketing tool. Mentions of Mailchimp, HubSpot, Klaviyo, ConvertKit, AWeber,
            MailerLite, and other competitors in our comparison articles are non-monetized — we link to
            their official sites for context only.
          </p>
          <h2>Why we focus on Brevo</h2>
          <p>
            Brevo offers one of the strongest free plans in the industry (300 emails/day, unlimited
            contacts) and one of the most affordable paid plans (Starter from $9/month). For most
            small businesses and creators, Brevo represents genuine value — which is why we built an
            entire education hub around it.
          </p>
          <h2>Your choice</h2>
          <p>
            You're never obligated to use our affiliate links. You can visit{' '}
            <a href="https://www.brevo.com" target="_blank" rel="noopener noreferrer">brevo.com</a>{' '}
            directly any time. Either way, the pricing and features you receive are identical.
          </p>
          <h2>Questions</h2>
          <p>
            Reach out anytime: <a href="mailto:support@inboxbase.online">support@inboxbase.online</a>
          </p>
        </div>
      </div>
    </section>
  );
}
