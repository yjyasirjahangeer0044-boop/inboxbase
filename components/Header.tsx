'use client';

import Link from 'next/link';
import { useState } from 'react';

const navCategories = [
  { name: 'Brevo Setup & Getting Started', slug: 'brevo-setup' },
  { name: 'Brevo Automation & Campaigns', slug: 'brevo-automation' },
  { name: 'Brevo Deliverability', slug: 'brevo-deliverability' },
  { name: 'Brevo Integrations', slug: 'brevo-integrations' },
  { name: 'Brevo vs Competitors', slug: 'brevo-vs-competitors' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [topicsOpen, setTopicsOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(10, 10, 10, 0.78)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid #1E1E1E',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          height: 68,
          gap: 28,
        }}
      >
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              background: '#8B5CF6',
              borderRadius: 6,
            }}
          />
          <span
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 18,
              color: '#fff',
            }}
          >
            iboxbase
          </span>
        </Link>

        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            flex: 1,
          }}
          className="desktop-nav"
        >
          <Link
            href="/blog/"
            style={{ fontSize: 14, color: '#ddd', fontWeight: 500 }}
          >
            All Guides
          </Link>

          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setTopicsOpen(true)}
            onMouseLeave={() => setTopicsOpen(false)}
          >
            <button
              style={{
                fontSize: 14,
                color: '#ddd',
                fontWeight: 500,
                padding: 0,
              }}
            >
              Topics ▾
            </button>
            {topicsOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  marginTop: 8,
                  background: '#111',
                  border: '1px solid #1E1E1E',
                  borderRadius: 8,
                  padding: 8,
                  minWidth: 280,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                }}
              >
                {navCategories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/category/${c.slug}/`}
                    style={{
                      display: 'block',
                      padding: '10px 12px',
                      fontSize: 13,
                      color: '#ccc',
                      borderRadius: 6,
                    }}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about/"
            style={{ fontSize: 14, color: '#ddd', fontWeight: 500 }}
          >
            About
          </Link>
          <Link
            href="/contact/"
            style={{ fontSize: 14, color: '#ddd', fontWeight: 500 }}
          >
            Contact
          </Link>
        </nav>

        <a
          href="https://www.brevo.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#8B5CF6',
            color: '#fff',
            padding: '9px 16px',
            borderRadius: 7,
            fontSize: 13,
            fontWeight: 600,
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
          }}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileOpen && (
        <div
          style={{
            background: '#0A0A0A',
            borderTop: '1px solid #1E1E1E',
            padding: '16px 24px',
          }}
        >
          <Link
            href="/blog/"
            style={{
              display: 'block',
              padding: '10px 0',
              color: '#ddd',
              fontSize: 15,
            }}
          >
            All Guides
          </Link>
          {navCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}/`}
              style={{
                display: 'block',
                padding: '10px 0',
                color: '#bbb',
                fontSize: 14,
                paddingLeft: 12,
              }}
            >
              {c.name}
            </Link>
          ))}
          <Link
            href="/about/"
            style={{
              display: 'block',
              padding: '10px 0',
              color: '#ddd',
              fontSize: 15,
            }}
          >
            About
          </Link>
          <Link
            href="/contact/"
            style={{
              display: 'block',
              padding: '10px 0',
              color: '#ddd',
              fontSize: 15,
            }}
          >
            Contact
          </Link>
          <a
            href="https://www.brevo.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: 12,
              background: '#8B5CF6',
              color: '#fff',
              padding: '10px 18px',
              borderRadius: 7,
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Try Brevo Free →
          </a>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          :global(.desktop-nav),
          :global(.desktop-cta) {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
