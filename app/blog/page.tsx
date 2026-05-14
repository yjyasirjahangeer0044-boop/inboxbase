import type { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import { getAllArticles, categories } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'All Brevo Guides — 22 In-Depth Tutorials',
  description:
    'Browse all 22 Brevo guides covering setup, automation, deliverability, integrations, and competitor comparisons. Updated for 2026.',
  alternates: { canonical: '/blog/' },
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container">
        <div style={{ marginBottom: 48 }}>
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
            ALL GUIDES
          </span>
          <h1 style={{ fontSize: 44, fontWeight: 800, color: '#fff', marginBottom: 14 }}>
            Every <span style={{ color: '#8B5CF6' }}>Brevo</span> guide in one place
          </h1>
          <p style={{ fontSize: 17, color: '#a0a0a0', maxWidth: 640, lineHeight: 1.65 }}>
            22 in-depth tutorials covering setup, automation, deliverability, integrations,
            and head-to-head competitor comparisons.
          </p>
        </div>

        {categories.map((cat) => {
          const catArticles = articles.filter((a) => a.categorySlug === cat.slug);
          if (catArticles.length === 0) return null;
          return (
            <div key={cat.slug} style={{ marginBottom: 56 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 24,
                  paddingBottom: 14,
                  borderBottom: '1px solid #1E1E1E',
                }}
              >
                <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>{cat.name}</h2>
                <a
                  href={`/category/${cat.slug}/`}
                  style={{ fontSize: 13, color: '#8B5CF6', fontWeight: 500 }}
                >
                  View category →
                </a>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: 16,
                }}
              >
                {catArticles.map((a, i) => (
                  <ArticleCard key={a.slug} article={a} index={i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
