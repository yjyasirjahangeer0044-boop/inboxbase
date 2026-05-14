import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and conditions governing your use of iboxbase, the independent Brevo education hub.',
  alternates: { canonical: '/terms-and-conditions/' },
};

export default function TermsPage() {
  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <h1 style={{ fontSize: 40, fontWeight: 800, color: '#fff', marginBottom: 24 }}>
          Terms & Conditions
        </h1>
        <div className="prose">
          <p>
            These Terms govern your use of inboxbase.online. By accessing or using the site, you agree
            to these Terms. If you do not agree, please do not use the site.
          </p>
          <h2>Use of content</h2>
          <p>
            All written guides, comparisons, and analysis on this site are protected by copyright. You
            may read, share via direct links, and quote short excerpts with attribution. You may not
            republish entire articles or substantial portions without written permission.
          </p>
          <h2>Educational purpose</h2>
          <p>
            Content on iboxbase is for educational and informational purposes only. We are not a
            substitute for official Brevo support, legal advice, or professional consulting. Always
            verify product features and pricing on the official Brevo website before making decisions.
          </p>
          <h2>Third-party services</h2>
          <p>
            This site links to and discusses third-party services including Brevo, Mailchimp, HubSpot,
            Klaviyo, and others. We are not affiliated with these companies (except through the
            disclosed affiliate relationships) and are not responsible for their products, services,
            policies, or practices.
          </p>
          <h2>Disclaimer of warranties</h2>
          <p>
            The site is provided "as is" without warranties of any kind. We do not guarantee accuracy,
            completeness, or timeliness of information. Email marketing results vary widely; nothing on
            this site guarantees any particular outcome.
          </p>
          <h2>Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, iboxbase and its operators are not liable for any
            indirect, incidental, consequential, or punitive damages arising from your use of this site
            or reliance on its content.
          </p>
          <h2>Changes</h2>
          <p>
            We may update these Terms. The updated version applies to all use after publication. Your
            continued use constitutes acceptance.
          </p>
          <h2>Contact</h2>
          <p>
            Questions: <a href="mailto:support@inboxbase.online">support@inboxbase.online</a>
          </p>
        </div>
      </div>
    </section>
  );
}
