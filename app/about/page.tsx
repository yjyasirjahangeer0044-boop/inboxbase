import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About iboxbase — The Independent Brevo Education Hub',
  description:
    'Learn about iboxbase, an independent education hub dedicated to teaching Brevo email marketing the right way — no fluff, just results.',
  alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <h1 style={{ fontSize: 44, fontWeight: 800, color: '#fff', marginBottom: 24 }}>
          About <span style={{ color: '#8B5CF6' }}>iboxbase</span>
        </h1>
        <div className="prose">
          <p>
            iboxbase is an independent education hub dedicated to mastering one tool extremely well: Brevo.
            We exist because most Brevo content online is either thin reviews stuffed with affiliate links,
            or surface-level tutorials that stop right when the real questions begin. We built this hub to
            fix that.
          </p>
          <h2>What we publish</h2>
          <p>
            Every guide on this site is written to answer a specific question Brevo users actually ask —
            from the basics of setting up DKIM and SPF, to building automation workflows that recover
            abandoned carts, to honest head-to-head comparisons against Mailchimp, HubSpot, and Klaviyo.
            We cover Brevo's free plan, paid tiers, integrations, and deliverability tactics.
          </p>
          <h2>How we work</h2>
          <p>
            We test features inside live Brevo accounts. We read the documentation cover-to-cover. We talk
            to people running real campaigns. And then we write the guide we wish we'd had when we started.
            No churned-out AI fluff. No filler paragraphs. Just the answer you came looking for.
          </p>
          <h2>Why Brevo</h2>
          <p>
            Brevo offers one of the most generous free plans in email marketing — 300 emails per day and
            unlimited contacts — and its paid plans start at just $9 per month. Combined with native
            automation, SMS, WhatsApp, and CRM features, Brevo is uniquely positioned for small teams
            and growing businesses who want a serious tool without serious pricing.
          </p>
          <h2>Affiliate disclosure</h2>
          <p>
            We may earn a commission when you sign up for Brevo through links on this site, at no extra
            cost to you. This funds the time we spend testing and writing. Our editorial process is not
            influenced by these commissions — we recommend what we'd use ourselves. Read our full{' '}
            <a href="/affiliate-disclosure/">affiliate disclosure</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
