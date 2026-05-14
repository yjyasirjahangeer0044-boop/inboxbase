'use client';

import { useState } from 'react';

const competitors = [
  { name: 'Mailchimp', url: 'https://mailchimp.com', x: 250, y: 50, w: 70 },
  { name: 'HubSpot', url: 'https://hubspot.com', x: 366, y: 76, w: 60 },
  { name: 'Klaviyo', url: 'https://klaviyo.com', x: 427, y: 141, w: 60 },
  { name: 'ActiveCampaign', url: 'https://activecampaign.com', x: 406, y: 215, w: 110 },
  { name: 'GetResponse', url: 'https://getresponse.com', x: 312, y: 263, w: 90 },
  { name: 'ConvertKit', url: 'https://kit.com', x: 188, y: 263, w: 80 },
  { name: 'AWeber', url: 'https://aweber.com', x: 94, y: 215, w: 60 },
  { name: 'MailerLite', url: 'https://mailerlite.com', x: 73, y: 141, w: 78 },
  { name: 'Constant Contact', url: 'https://constantcontact.com', x: 134, y: 76, w: 110 },
];

export default function CompetitorOrbit() {
  const [hoveredPill, setHoveredPill] = useState<string | null>(null);
  const [hoveredCenter, setHoveredCenter] = useState(false);

  return (
    <section style={{ padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <span
          style={{
            fontSize: 280,
            fontWeight: 900,
            color: 'rgba(139,92,246,0.04)',
            letterSpacing: '-10px',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          BREVO
        </span>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span
            style={{
              display: 'inline-block',
              padding: '6px 14px',
              background: 'rgba(139,92,246,0.16)',
              color: '#8B5CF6',
              fontSize: 12,
              fontWeight: 500,
              borderRadius: 16,
              letterSpacing: '1px',
              marginBottom: 16,
            }}
          >
            BREVO VS THE WORLD
          </span>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: '#fff',
            }}
          >
            How <span style={{ color: '#8B5CF6' }}>Brevo</span> beats 9 alternatives
          </h2>
        </div>

        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          <svg viewBox="0 0 500 320" style={{ width: '100%', height: 'auto' }}>
            <ellipse
              cx="250"
              cy="160"
              rx="180"
              ry="110"
              fill="none"
              stroke="rgba(139,92,246,0.35)"
              strokeWidth="1"
              strokeDasharray="4 5"
            />
            <ellipse
              cx="250"
              cy="160"
              rx="100"
              ry="58"
              fill="none"
              stroke="rgba(139,92,246,0.2)"
              strokeWidth="1"
              strokeDasharray="3 4"
            />
            <a href="https://www.brevo.com" target="_blank" rel="noopener noreferrer">
              <circle
                cx="250"
                cy="160"
                r="50"
                fill="#8B5CF6"
                style={{
                  cursor: 'pointer',
                  filter: hoveredCenter
                    ? 'drop-shadow(0 0 20px rgba(139,92,246,0.6))'
                    : 'none',
                  transition: 'filter 0.2s',
                }}
                onMouseEnter={() => setHoveredCenter(true)}
                onMouseLeave={() => setHoveredCenter(false)}
              />
              <text
                x="250"
                y="158"
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="700"
                fontFamily="Poppins, sans-serif"
                style={{ pointerEvents: 'none' }}
              >
                BREVO
              </text>
              <text
                x="250"
                y="174"
                textAnchor="middle"
                fill="rgba(255,255,255,0.75)"
                fontSize="9"
                fontFamily="Inter, sans-serif"
                style={{ pointerEvents: 'none' }}
              >
                brevo.com ↗
              </text>
            </a>

            {competitors.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredPill(c.name)}
                onMouseLeave={() => setHoveredPill(null)}
              >
                <rect
                  x={c.x - c.w / 2}
                  y={c.y - 12}
                  width={c.w}
                  height="24"
                  rx="12"
                  fill="#111"
                  stroke={
                    hoveredPill === c.name
                      ? '#8B5CF6'
                      : 'rgba(139,92,246,0.3)'
                  }
                  strokeWidth={hoveredPill === c.name ? '1.5' : '1'}
                  style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                />
                <text
                  x={c.x}
                  y={c.y + 4}
                  textAnchor="middle"
                  fill={hoveredPill === c.name ? '#fff' : '#ccc'}
                  fontSize="11"
                  fontFamily="Inter, sans-serif"
                  fontWeight="500"
                  style={{ pointerEvents: 'none', transition: 'fill 0.2s' }}
                >
                  {c.name}
                </text>
              </a>
            ))}
          </svg>
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="/category/brevo-vs-competitors/" className="btn-primary">
            Read All Comparison Guides →
          </a>
        </div>
      </div>
    </section>
  );
}
