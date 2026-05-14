'use client';

import Link from 'next/link';
import { useState } from 'react';

const competitorPills = [
  { name: 'Brevo vs Mailchimp', slug: 'brevo-vs-mailchimp' },
  { name: 'Brevo vs HubSpot', slug: 'brevo-vs-hubspot' },
  { name: 'Brevo vs Klaviyo', slug: 'brevo-vs-klaviyo' },
  { name: 'Brevo vs ConvertKit', slug: 'brevo-vs-convertkit' },
  { name: 'Brevo vs AWeber', slug: 'brevo-vs-aweber' },
  { name: 'Brevo vs MailerLite', slug: 'brevo-vs-mailerlite' },
];

const brevoGuides = [
  { name: 'Setup', slug: 'brevo-account-setup-inbox-ready' },
  { name: 'Automation', slug: 'brevo-marketing-automation' },
  { name: 'Deliverability', slug: 'brevo-deliverability-2026' },
  { name: 'Integrations', slug: 'brevo-wordpress-plugin' },
  { name: 'Templates', slug: 'brevo-welcome-email-series' },
  { name: 'Analytics', slug: 'brevo-ab-testing-guide' },
];

const vsLinks = [
  { name: 'Mailchimp', slug: 'brevo-vs-mailchimp' },
  { name: 'HubSpot', slug: 'brevo-vs-hubspot' },
  { name: 'Klaviyo', slug: 'brevo-vs-klaviyo' },
  { name: 'ConvertKit', slug: 'brevo-vs-convertkit' },
  { name: 'AWeber', slug: 'brevo-vs-aweber' },
  { name: 'MailerLite', slug: 'brevo-vs-mailerlite' },
];

const topicLinks = [
  { name: 'Brevo Setup & Getting Started', href: '/category/brevo-setup/' },
  { name: 'Brevo Automation & Campaigns', href: '/category/brevo-automation/' },
  { name: 'Brevo Deliverability', href: '/category/brevo-deliverability/' },
  { name: 'Brevo Integrations', href: '/category/brevo-integrations/' },
  { name: 'Brevo vs Competitors', href: '/category/brevo-vs-competitors/' },
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
    <footer style={{ background: '#0A0A0A', borderTop: '1px solid #1E1E1E', marginTop: 80 }}>
      <div className="container" style={{ paddingTop: 56, paddingBottom: 24 }}>

        {/* Competitor pills strip */}
        <div style={{ textAlign: 'center', padding: '20px 0', borderTop: '1px solid #1E1E1E', borderBottom: '1px solid #1E1E1E', marginBottom: 40 }}>
          <div style={{ fontSize: 11, color: '#888', letterSpacing: '1px', marginBottom: 14, fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
            BREVO VS THE REST
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            {competitorPills.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}/`}
                onMouseEnter={() => setHover(p.slug)} onMouseLeave={() => setHover(null)}
                style={{ fontSize: 12, padding: '6px 14px', border: '1px solid rgba(139,92,246,0.3)', color: hover === p.slug ? '#fff' : '#ddd', borderRadius: 16, background: hover === p.slug ? 'rgba(139,92,246,0.15)' : 'transparent', transition: 'all 0.2s' }}>
                {p.name}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: 12, padding: '28px 24px', textAlign: 'center', marginBottom: 48 }}>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 14 }}>
            Ready to start with <span style={{ color: '#8B5CF6' }}>Brevo</span>?
          </h3>
          <a href="https://www.brevo.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Create Free Account →
          </a>
        </div>

        {/* 5-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr', gap: 28, paddingBottom: 32, borderBottom: '1px solid #1E1E1E' }} className="footer-grid">

          {/* Brand + Social */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 22, height: 22, background: '#8B5CF6', borderRadius: 5 }} />
              <span style={{ fontSize: 16, fontWeight: 700, color: '#fff', fontFamily: 'Poppins, sans-serif' }}>inboxbase</span>
            </div>
            <p style={{ fontSize: 13, color: '#888', lineHeight: 1.7, maxWidth: 240, marginBottom: 20 }}>
              The independent Brevo education hub. Real guides on email marketing, automation, and deliverability.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 8 }}>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: 8, border: '1px solid #2a2a2a', color: '#888', background: '#111', transition: 'all 0.2s', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.5)'; e.currentTarget.style.background = 'rgba(139,92,246,0.15)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.background = '#111'; }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: 8, border: '1px solid #2a2a2a', color: '#888', background: '#111', transition: 'all 0.2s', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.5)'; e.currentTarget.style.background = 'rgba(139,92,246,0.15)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.background = '#111'; }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: 8, border: '1px solid #2a2a2a', color: '#888', background: '#111', transition: 'all 0.2s', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.5)'; e.currentTarget.style.background = 'rgba(139,92,246,0.15)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.background = '#111'; }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Topics */}
          <div>
            <div style={{ fontSize: 11, color: '#888', letterSpacing: '1px', marginBottom: 14, fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>TOPICS</div>
            {topicLinks.map((t) => (
              <Link key={t.href} href={t.href} style={{ display: 'block', fontSize: 13, color: '#bbb', padding: '5px 0' }}>{t.name}</Link>
            ))}
          </div>

          {/* Brevo Guides */}
          <div>
            <div style={{ fontSize: 11, color: '#888', letterSpacing: '1px', marginBottom: 14, fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>BREVO GUIDES</div>
            {brevoGuides.map((g) => (
              <Link key={g.slug} href={`/blog/${g.slug}/`} style={{ display: 'block', fontSize: 13, color: '#bbb', padding: '5px 0' }}>{g.name}</Link>
            ))}
          </div>

          {/* Brevo vs Tools */}
          <div>
            <div style={{ fontSize: 11, color: '#888', letterSpacing: '1px', marginBottom: 14, fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>BREVO VS TOOLS</div>
            {vsLinks.map((v) => (
              <Link key={v.slug} href={`/blog/${v.slug}/`} style={{ display: 'block', fontSize: 13, color: '#bbb', padding: '5px 0' }}>{v.name}</Link>
            ))}
          </div>

          {/* Site */}
          <div>
            <div style={{ fontSize: 11, color: '#888', letterSpacing: '1px', marginBottom: 14, fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>SITE</div>
            {siteLinks.map((s) => (
              <Link key={s.href} href={s.href} style={{ display: 'block', fontSize: 13, color: '#bbb', padding: '5px 0' }}>{s.name}</Link>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 0 8px', fontSize: 12, color: '#666', flexWrap: 'wrap', gap: 12 }}>
          <span>© {new Date().getFullYear()} inboxbase · inboxbase.online</span>
          <span>Not affiliated with Brevo. Independent education resource.</span>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          :global(.footer-grid) { grid-template-columns: 1fr 1fr 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 768px) {
          :global(.footer-grid) { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 480px) {
          :global(.footer-grid) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
