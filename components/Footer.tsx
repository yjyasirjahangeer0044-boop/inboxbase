'use client';

import Link from 'next/link';
import { useState } from 'react';

const competitorPills = [
  { name: 'Brevo vs Mailchimp', slug: 'brevo-vs-mailchimp' },
  { name: 'Brevo vs HubSpot', slug: 'brevo-vs-hubspot' },
  { name: 'Brevo vs Klaviyo', slug: 'brevo-vs-klaviyo' },
  { name: 'Brevo vs ConvertKit', slug: 'brevo-vs-convertkit' },
  { name: 'Brevo vs AWeber', slug: 'brevo-vs-aweber' },
];

const brevoGuides = [
  { name: 'Brevo Setup', slug: 'brevo-account-setup-inbox-ready' },
  { name: 'Brevo Automation', slug: 'brevo-marketing-automation' },
  { name: 'Brevo Deliverability', slug: 'brevo-deliverability-2026' },
  { name: 'Brevo Templates', slug: 'brevo-welcome-email-series' },
  { name: 'Brevo Analytics', slug: 'brevo-ab-testing-guide' },
];

const vsLinks = [
  { name: 'Brevo Vs Mailchimp', slug: 'brevo-vs-mailchimp' },
  { name: 'Brevo Vs HubSpot', slug: 'brevo-vs-hubspot' },
  { name: 'Brevo Vs Klaviyo', slug: 'brevo-vs-klaviyo' },
  { name: 'Brevo Vs ConvertKit', slug: 'brevo-vs-convertkit' },
  { name: 'Brevo Vs AWeber', slug: 'brevo-vs-aweber' },
  { name: 'Brevo Vs MailerLite', slug: 'brevo-vs-mailerlite' },
];

const siteLinks = [
  { name: 'About', href: '/about/' },
  { name: 'Contact', href: '/contact/' },
  { name: 'Privacy Policy', href: '/privacy-policy/' },
  { name: 'Terms & Conditions', href: '/terms-and-conditions/' },
  { name: 'Affiliate Disclosure', href: '/affiliate-disclosure/' },
  { name: 'Cookies Policy', href: '/cookies-policy/' },
  { name: 'Disclaimer', href: '/disclaimer/' },
];

export default function Footer() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <footer
      style={{
        background: '#0A0A0A',
        borderTop: '1px solid #1E1E1E',
        marginTop: 80,
      }}
    >
      <div className="container" style={{ paddingTop: 56, paddingBottom: 24 }}>
        <div
          style={{
            textAlign: 'center',
            padding: '20px 0',
            borderTop: '1px solid #1E1E1E',
            borderBottom: '1px solid #1E1E1E',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: '#888',
              letterSpacing: '1px',
              marginBottom: 14,
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
            }}
          >
            BREVO VS THE REST
          </div>
          <div
            style={{
              display: 'flex',
              gap: 10,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {competitorPills.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}/`}
                onMouseEnter={() => setHover(p.slug)}
                onMouseLeave={() => setHover(null)}
                style={{
                  fontSize: 12,
                  padding: '6px 14px',
                  border: '1px solid rgba(139,92,246,0.3)',
                  color: hover === p.slug ? '#fff' : '#ddd',
                  borderRadius: 16,
                  background: hover === p.slug ? 'rgba(139,92,246,0.15)' : 'transparent',
                  transition: 'all 0.2s',
                }}
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>

        <div
          style={{
            background: 'rgba(139,92,246,0.08)',
            border: '1px solid rgba(139,92,246,0.3)',
            borderRadius: 12,
            padding: '28px 24px',
            textAlign: 'center',
            marginBottom: 48,
          }}
        >
          <h3
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: '#fff',
              marginBottom: 14,
            }}
          >
            Ready to start with <span style={{ color: '#8B5CF6' }}>Brevo</span>?
          </h3>
          <a
            href="https://www.brevo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Create Free Account →
          </a>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
            gap: 32,
            paddingBottom: 32,
            borderBottom: '1px solid #1E1E1E',
          }}
          className="footer-grid"
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 22, height: 22, background: '#8B5CF6', borderRadius: 5 }} />
              <span style={{ fontSize: 16, fontWeight: 700, color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
                iboxbase
              </span>
            </div>
            <p style={{ fontSize: 13, color: '#888', lineHeight: 1.7, maxWidth: 280 }}>
              The independent Brevo education hub. Real guides on email marketing,
              automation, and deliverability — no fluff, just results.
            </p>
          </div>

          <div>
            <div
              style={{
                fontSize: 11,
                color: '#888',
                letterSpacing: '1px',
                marginBottom: 14,
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
              }}
            >
              BREVO GUIDES
            </div>
            {brevoGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/blog/${g.slug}/`}
                style={{
                  display: 'block',
                  fontSize: 13,
                  color: '#bbb',
                  padding: '5px 0',
                }}
              >
                {g.name}
              </Link>
            ))}
          </div>

          <div>
            <div
              style={{
                fontSize: 11,
                color: '#888',
                letterSpacing: '1px',
                marginBottom: 14,
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
              }}
            >
              BREVO VS TOOLS
            </div>
            {vsLinks.map((v) => (
              <Link
                key={v.slug}
                href={`/blog/${v.slug}/`}
                style={{
                  display: 'block',
                  fontSize: 13,
                  color: '#bbb',
                  padding: '5px 0',
                }}
              >
                {v.name}
              </Link>
            ))}
          </div>

          <div>
            <div
              style={{
                fontSize: 11,
                color: '#888',
                letterSpacing: '1px',
                marginBottom: 14,
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
              }}
            >
              SITE
            </div>
            {siteLinks.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                style={{
                  display: 'block',
                  fontSize: 13,
                  color: '#bbb',
                  padding: '5px 0',
                }}
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        <div
          style={{
            textAlign: 'center',
            padding: '24px 0 8px',
            fontSize: 12,
            color: '#666',
          }}
        >
          © {new Date().getFullYear()} iboxbase · inboxbase.online
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          :global(.footer-grid) {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 480px) {
          :global(.footer-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
