import Link from 'next/link';
import { getAllArticles, categories } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import CompetitorOrbit from '@/components/CompetitorOrbit';

export default function HomePage() {
  const featuredArticles = getAllArticles().slice(0, 4);

  return (
    <>
      {/* SECTION 1 — HERO C (Bold stat asymmetric) */}
      <section style={{ padding: '80px 0 60px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr',
              gap: 48,
              alignItems: 'center',
            }}
            className="hero-grid"
          >
            <div>
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
                  marginBottom: 24,
                }}
              >
                BREVO EDUCATION HUB
              </span>
              <h1
                style={{
                  fontSize: 56,
                  fontWeight: 800,
                  lineHeight: 1.1,
                  marginBottom: 20,
                  color: '#fff',
                  letterSpacing: '-1.5px',
                }}
                className="hero-h1"
              >
                Everything you need to master <span style={{ color: '#8B5CF6' }}>Brevo</span> — free, forever
              </h1>
              <p
                style={{
                  fontSize: 18,
                  color: '#a0a0a0',
                  lineHeight: 1.65,
                  marginBottom: 32,
                  maxWidth: 520,
                }}
              >
                22 in-depth guides on email marketing, automation, deliverability, and
                integrations. No affiliate spin. Just what actually works.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/blog/" className="btn-primary">
                  Explore Guides
                </Link>
                <a
                  href="https://www.brevo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Try Brevo Free →
                </a>
              </div>
            </div>

            <div style={{ textAlign: 'center', padding: 16 }}>
              <div
                style={{
                  fontSize: 140,
                  fontWeight: 800,
                  color: '#8B5CF6',
                  lineHeight: 0.9,
                  letterSpacing: '-6px',
                  fontFamily: 'Poppins, sans-serif',
                }}
                className="hero-stat"
              >
                99%
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: '#aaa',
                  marginTop: 12,
                  letterSpacing: '1.5px',
                  fontWeight: 500,
                }}
              >
                INBOX DELIVERABILITY
              </div>
              <div
                style={{
                  height: 1,
                  background: '#1E1E1E',
                  margin: '24px 32px',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  fontSize: 11,
                  color: '#888',
                }}
              >
                <div>
                  <span style={{ color: '#8B5CF6', fontWeight: 800, fontSize: 22 }}>8B+</span>
                  <br />
                  emails/mo
                </div>
                <div>
                  <span style={{ color: '#8B5CF6', fontWeight: 800, fontSize: 22 }}>500K</span>
                  <br />
                  brands
                </div>
                <div>
                  <span style={{ color: '#8B5CF6', fontWeight: 800, fontSize: 22 }}>180+</span>
                  <br />
                  countries
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TRUST BAR */}
      <section style={{ padding: '32px 0', borderTop: '1px solid #1E1E1E', borderBottom: '1px solid #1E1E1E' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              gap: 28,
              flexWrap: 'wrap',
              justifyContent: 'center',
              fontSize: 13,
              color: '#bbb',
            }}
          >
            {[
              '100% Opt-In Education',
              'No Purchased Lists',
              'No Spam Tactics',
              'Brevo Best Practices',
              'Free to Read',
            ].map((t) => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: '#8B5CF6', fontWeight: 700 }}>✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — BREVO BY THE NUMBERS */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
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
              BY THE NUMBERS
            </span>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#fff' }}>
              <span style={{ color: '#8B5CF6' }}>Brevo</span> by the numbers
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 16,
            }}
            className="stats-grid"
          >
            {[
              { stat: '500K+', label: 'Businesses' },
              { stat: '180+', label: 'Countries' },
              { stat: '8B+', label: 'Emails Monthly' },
              { stat: '99%', label: 'Inbox Deliverability' },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: 'rgba(139,92,246,0.06)',
                  border: '1px solid rgba(139,92,246,0.18)',
                  borderRadius: 12,
                  padding: '32px 20px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 48,
                    fontWeight: 800,
                    color: '#8B5CF6',
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: 1,
                    marginBottom: 10,
                  }}
                >
                  {s.stat}
                </div>
                <div style={{ fontSize: 13, color: '#aaa', letterSpacing: '0.5px' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT YOU'LL LEARN */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#fff', marginBottom: 14 }}>
              What you'll learn about <span style={{ color: '#8B5CF6' }}>Brevo</span>
            </h2>
            <p style={{ color: '#a0a0a0', fontSize: 16 }}>
              Six pillars of email marketing, taught from first principles.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 16,
            }}
            className="learn-grid"
          >
            {[
              { t: 'Brevo Setup Mastery', d: 'Account creation, domain verification, and inbox-ready sending in under 15 minutes.' },
              { t: 'Brevo Automation Flows', d: 'Welcome series, cart recovery, and drip campaigns that convert on autopilot.' },
              { t: 'Brevo Deliverability', d: 'DKIM, SPF, DMARC, and the warm-up strategies that hit the primary inbox.' },
              { t: 'Brevo A/B Testing', d: 'Test subject lines, content, and send times with statistical confidence.' },
              { t: 'Brevo Integrations', d: 'Connect to Shopify, WordPress, WooCommerce, and 5000+ tools via Zapier.' },
              { t: 'Brevo vs Alternatives', d: 'Honest head-to-head comparisons against Mailchimp, HubSpot, and Klaviyo.' },
            ].map((c) => (
              <div key={c.t} className="card" style={{ padding: 24 }}>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#8B5CF6',
                    marginBottom: 10,
                  }}
                >
                  {c.t}
                </h3>
                <p style={{ fontSize: 14, color: '#aaa', lineHeight: 1.65 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — ENTERPRISE HUB */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
              alignItems: 'center',
            }}
            className="enterprise-grid"
          >
            <div>
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
                  marginBottom: 20,
                }}
              >
                BREVO ENTERPRISE
              </span>
              <h2 style={{ fontSize: 38, fontWeight: 800, color: '#fff', marginBottom: 20, lineHeight: 1.15 }}>
                The complete <span style={{ color: '#8B5CF6' }}>Brevo</span> command center for growing teams
              </h2>
              <ul style={{ listStyle: 'none', marginBottom: 28 }}>
                {[
                  'Unified marketing, sales, CRM, and loyalty on one platform',
                  'Multi-channel sending across email, SMS, WhatsApp, and chat',
                  'Enterprise-grade security with SSO, SAML, and dedicated IP',
                ].map((b) => (
                  <li key={b} style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'flex-start' }}>
                    <span style={{ color: '#8B5CF6', fontWeight: 700, fontSize: 16 }}>✓</span>
                    <span style={{ color: '#ccc', fontSize: 15, lineHeight: 1.55 }}>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://www.brevo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Explore Brevo Enterprise →
              </a>
            </div>

            <div style={{ position: 'relative', minHeight: 360 }}>
              <svg
                viewBox="0 0 400 360"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
              >
                <line x1="200" y1="180" x2="80" y2="60" stroke="rgba(139,92,246,0.25)" strokeDasharray="3 4" />
                <line x1="200" y1="180" x2="320" y2="60" stroke="rgba(139,92,246,0.25)" strokeDasharray="3 4" />
                <line x1="200" y1="180" x2="80" y2="300" stroke="rgba(139,92,246,0.25)" strokeDasharray="3 4" />
                <line x1="200" y1="180" x2="320" y2="300" stroke="rgba(139,92,246,0.25)" strokeDasharray="3 4" />
              </svg>

              <a
                href="https://www.brevo.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 110,
                  height: 110,
                  borderRadius: '50%',
                  background: '#8B5CF6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: 18,
                  zIndex: 2,
                  boxShadow: '0 0 30px rgba(139,92,246,0.4)',
                }}
              >
                BREVO
              </a>

              {[
                { t: 'Sales Features', items: ['Pipeline mgmt', 'Deal tracking', 'Forecasting'], top: 0, left: 0 },
                { t: 'Customer Insights', items: ['AI analytics', 'Segmentation', 'Behavior tracking'], top: 0, right: 0 },
                { t: 'Commerce Tools', items: ['Cart recovery', 'Product feeds', 'Loyalty'], bottom: 0, left: 0 },
                { t: 'Marketing Features', items: ['Automation', 'A/B testing', 'Email + SMS'], bottom: 0, right: 0 },
              ].map((c) => (
                <div
                  key={c.t}
                  style={{
                    position: 'absolute',
                    width: 150,
                    background: '#111',
                    border: '1px solid rgba(139,92,246,0.25)',
                    borderRadius: 8,
                    padding: 12,
                    zIndex: 2,
                    ...c,
                  }}
                >
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#8B5CF6', marginBottom: 6 }}>
                    {c.t}
                  </div>
                  <ul style={{ listStyle: 'none', fontSize: 10.5, color: '#aaa' }}>
                    {c.items.map((i) => (
                      <li key={i} style={{ padding: '2px 0' }}>• {i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CATEGORIES */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#fff', marginBottom: 14 }}>
              Explore <span style={{ color: '#8B5CF6' }}>Brevo</span> by topic
            </h2>
            <p style={{ color: '#a0a0a0', fontSize: 16 }}>
              Five pillars covering everything from setup to scaling.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 16,
            }}
            className="category-grid"
          >
            {categories.map((c, i) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}/`}
                className="card"
                style={{ display: 'block', padding: 28 }}
              >
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: '#8B5CF6',
                    lineHeight: 1,
                    marginBottom: 14,
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 10 }}>
                  {c.name}
                </h3>
                <p style={{ fontSize: 13, color: '#999', lineHeight: 1.6, marginBottom: 14 }}>
                  {c.description}
                </p>
                <span style={{ fontSize: 13, color: '#8B5CF6', fontWeight: 500 }}>
                  Read guides →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — FEATURED ARTICLES */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 36,
            }}
          >
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#fff' }}>
              Featured <span style={{ color: '#8B5CF6' }}>Brevo</span> guides
            </h2>
            <Link href="/blog/" style={{ color: '#8B5CF6', fontSize: 14, fontWeight: 500 }}>
              View all →
            </Link>
          </div>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}
            className="featured-grid"
          >
            {featuredArticles.map((a, i) => (
              <ArticleCard key={a.slug} article={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — BREVO PRICING */}
      <section style={{ padding: '80px 0', background: '#0a0a0a' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
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
              OFFICIAL 2026 PRICING
            </span>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#fff' }}>
              <span style={{ color: '#8B5CF6' }}>Brevo</span> plans for every stage
            </h2>
          </div>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}
            className="pricing-grid"
          >
            {[
              {
                name: 'Free',
                price: '$0',
                period: 'forever',
                features: ['300 emails/day', '100K contacts', 'Drag & drop editor', 'Templates & CRM', 'Basic automation'],
                cta: 'Start Free',
                popular: false,
              },
              {
                name: 'Starter',
                price: '$9',
                period: '/mo · 5K emails',
                features: ['No daily limit', 'Up to 100K emails', 'Email + SMS', 'Basic analytics', 'Email support'],
                cta: 'Try Free →',
                popular: false,
              },
              {
                name: 'Standard',
                price: '$18',
                period: '/mo · 5K emails',
                features: ['Marketing automation', 'A/B testing', 'Landing pages', 'Advanced reports', 'Send-time optimizer'],
                cta: 'Try Free →',
                popular: true,
              },
              {
                name: 'Professional',
                price: '$499',
                period: '/mo · 150K emails',
                features: ['All Standard +', 'WhatsApp & push', 'AI segmentation', 'Phone support', '10 users included'],
                cta: 'Try Free →',
                popular: false,
              },
            ].map((p) => (
              <div
                key={p.name}
                style={{
                  background: '#111',
                  border: p.popular ? '2px solid #8B5CF6' : '1px solid #1E1E1E',
                  borderRadius: 12,
                  padding: 24,
                  position: 'relative',
                }}
              >
                {p.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: 10,
                      padding: '4px 12px',
                      background: '#8B5CF6',
                      color: '#fff',
                      borderRadius: 12,
                      fontWeight: 600,
                      letterSpacing: '0.5px',
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <div
                  style={{
                    fontSize: 14,
                    color: p.popular ? '#8B5CF6' : '#aaa',
                    fontWeight: 500,
                    marginBottom: 6,
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 800,
                    color: '#fff',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {p.price}
                </div>
                <div style={{ fontSize: 12, color: '#777', marginBottom: 16 }}>{p.period}</div>
                <ul style={{ listStyle: 'none', fontSize: 13, color: '#ccc', marginBottom: 20 }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ padding: '5px 0' }}>
                      <span style={{ color: '#8B5CF6', marginRight: 6 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.brevo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '10px 14px',
                    background: p.popular ? '#8B5CF6' : 'transparent',
                    border: p.popular ? 'none' : '1px solid #333',
                    color: '#fff',
                    borderRadius: 6,
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <a
              href="https://www.brevo.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 14, color: '#8B5CF6', fontWeight: 500 }}
            >
              View full pricing on brevo.com →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 9 — HOW IT WORKS */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#fff', marginBottom: 14 }}>
              How <span style={{ color: '#8B5CF6' }}>Brevo</span> mastery works here
            </h2>
            <p style={{ color: '#a0a0a0', fontSize: 16 }}>Three steps. No fluff. Real results.</p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 32,
            }}
            className="steps-grid"
          >
            {[
              { n: '01', t: 'Pick a topic', d: 'Browse 22 in-depth guides covering setup, automation, deliverability, and integrations.' },
              { n: '02', t: 'Read & apply', d: 'Each guide is built around real workflows you can copy into your Brevo account today.' },
              { n: '03', t: 'See results', d: 'Better inbox placement, higher open rates, and automations that drive revenue on autopilot.' },
            ].map((s) => (
              <div key={s.n} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    background: 'rgba(139,92,246,0.12)',
                    border: '1px solid rgba(139,92,246,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: '#8B5CF6',
                    fontSize: 22,
                    fontWeight: 800,
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {s.n}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 10 }}>
                  {s.t}
                </h3>
                <p style={{ fontSize: 14, color: '#aaa', lineHeight: 1.65, maxWidth: 280, margin: '0 auto' }}>
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — COMPETITOR ORBIT */}
      <CompetitorOrbit />

      {/* SECTION 11 — INTEGRATIONS */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#fff', marginBottom: 14 }}>
              <span style={{ color: '#8B5CF6' }}>Brevo</span> integrations that matter
            </h2>
            <p style={{ color: '#a0a0a0', fontSize: 16 }}>
              Connect Brevo to your stack in minutes — with real tutorials and video guides.
            </p>
          </div>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}
            className="integration-grid"
          >
            {[
              { t: 'WordPress', d: 'Newsletter forms, SMTP, and push notifications inside your WP dashboard.', slug: 'brevo-wordpress-plugin' },
              { t: 'WooCommerce', d: 'Real-time order sync, abandoned cart automation, and revenue tracking.', slug: 'brevo-woocommerce-integration' },
              { t: 'Shopify', d: 'PushOwl-powered sync for products, customers, and post-purchase flows.', slug: 'brevo-shopify-integration' },
              { t: 'API & Zapier', d: 'Connect Brevo to 5000+ apps with no-code Zapier triggers and the Brevo API.', slug: 'brevo-api-zapier' },
            ].map((c) => (
              <Link key={c.t} href={`/blog/${c.slug}/`} className="card" style={{ display: 'block', padding: 22 }}>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#fff',
                    marginBottom: 10,
                  }}
                >
                  Brevo + {c.t}
                </h3>
                <p style={{ fontSize: 13, color: '#999', lineHeight: 1.6, marginBottom: 14 }}>
                  {c.d}
                </p>
                <span style={{ fontSize: 13, color: '#8B5CF6', fontWeight: 500 }}>
                  Read guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — FINAL CTA */}
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 44, fontWeight: 800, color: '#fff', marginBottom: 18, lineHeight: 1.15 }}>
            Start your <span style={{ color: '#8B5CF6' }}>Brevo</span> journey today
          </h2>
          <p
            style={{
              fontSize: 17,
              color: '#a0a0a0',
              marginBottom: 32,
              maxWidth: 540,
              margin: '0 auto 32px',
              lineHeight: 1.65,
            }}
          >
            Free forever plan. No credit card. 300 emails/day. Unlimited contacts.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://www.brevo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Create Free Brevo Account →
            </a>
            <Link href="/blog/" className="btn-ghost">
              Browse All Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile responsive overrides */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid, .enterprise-grid { grid-template-columns: 1fr !important; }
          .hero-h1 { font-size: 40px !important; }
          .hero-stat { font-size: 96px !important; }
          .stats-grid, .featured-grid, .pricing-grid, .integration-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .learn-grid, .category-grid, .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .stats-grid, .featured-grid, .pricing-grid, .integration-grid,
          .learn-grid, .category-grid, .steps-grid { grid-template-columns: 1fr !important; }
          .hero-h1 { font-size: 32px !important; }
          .hero-stat { font-size: 80px !important; }
        }
      `}</style>
    </>
  );
}
