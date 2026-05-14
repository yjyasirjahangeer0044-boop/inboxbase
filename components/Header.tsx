'use client';

import Link from 'next/link';
import { useState } from 'react';

const navCategories = [
  { name: 'Brevo Setup', slug: 'brevo-setup' },
  { name: 'Brevo Automation', slug: 'brevo-automation' },
  { name: 'Brevo Deliverability', slug: 'brevo-deliverability' },
  { name: 'Brevo Integrations', slug: 'brevo-integrations' },
  { name: 'Brevo Compare', slug: 'brevo-vs-competitors' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(10, 10, 10, 0.92)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid #1E1E1E',
      }}
    >
      {/* Top row */}
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 60,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{ display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <div
            style={{
              width: 26,
              height: 26,
              background: '#8B5CF6',
              borderRadius: 6,
            }}
          />
          <span
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 17,
              color: '#fff',
            }}
          >
            inboxbase
          </span>
        </Link>

        {/* Right: desktop CTA + mobile toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href="https://www.brevo.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#8B5CF6',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: 7,
              fontSize: 13,
              fontWeight: 600,
              textDecoration: 'none',
            }}
            className="desktop-cta"
          >
            Try Brevo Free →
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              width: 32,
              height: 32,
              color: '#fff',
              fontSize: 20,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Category bar — desktop only */}
      <div
        className="category-bar"
        style={{
          borderTop: '1px solid #1E1E1E',
          background: 'rgba(10,10,10,0.6)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            height: 40,
            overflowX: 'auto',
          }}
        >
          <Link
            href="/blog/"
            style={{
              fontSize: 12,
              color: '#aaa',
              fontWeight: 500,
              padding: '0 16px 0 0',
              borderRight: '1px solid #2a2a2a',
              marginRight: 16,
              whiteSpace: 'nowrap',
              letterSpacing: '0.5px',
            }}
          >
            All Guides
          </Link>
          {navCategories.map((c, i) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}/`}
              style={{
                fontSize: 12,
                color: '#aaa',
                fontWeight: 500,
                padding: '0 16px',
                borderRight: i < navCategories.length - 1 ? '1px solid #2a2a2a' : 'none',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s',
              }}
              className="cat-link"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: '#0A0A0A',
            borderTop: '1px solid #1E1E1E',
            padding: '16px 24px',
          }}
        >
          <Link href="/blog/" style={{ display: 'block', padding: '10px 0', color: '#ddd', fontSize: 15 }}>
            All Guides
          </Link>
          {navCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}/`}
              style={{ display: 'block', padding: '10px 0', color: '#bbb', fontSize: 14, paddingLeft: 12 }}
            >
              {c.name}
            </Link>
          ))}
          <Link href="/about/" style={{ display: 'block', padding: '10px 0', color: '#ddd', fontSize: 15 }}>About</Link>
          <Link href="/contact/" style={{ display: 'block', padding: '10px 0', color: '#ddd', fontSize: 15 }}>Contact</Link>
          <a
            href="https://www.brevo.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', marginTop: 12, background: '#8B5CF6', color: '#fff', padding: '10px 18px', borderRadius: 7, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}
          >
            Try Brevo Free →
          </a>
        </div>
      )}

      <style jsx>{`
        .cat-link:hover { color: #fff !important; }
        @media (max-width: 768px) {
          :global(.desktop-cta) { display: none !important; }
          :global(.category-bar) { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
