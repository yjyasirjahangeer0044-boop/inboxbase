import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleCard from '@/components/ArticleCard';
import { categories, getArticlesByCategory } from '@/lib/articles';

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return { title: 'Not found' };
  return {
    title: `${cat.name} — Brevo Guides`,
    description: cat.description,
    alternates: { canonical: `/category/${slug}/` },
    openGraph: {
      type: 'website',
      title: cat.name,
      description: cat.description,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return notFound();
  const articles = getArticlesByCategory(slug);

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
            CATEGORY · {articles.length} GUIDES
          </span>
          <h1 style={{ fontSize: 44, fontWeight: 800, color: '#fff', marginBottom: 14 }}>
            {cat.name}
          </h1>
          <p style={{ fontSize: 17, color: '#a0a0a0', maxWidth: 640, lineHeight: 1.65 }}>
            {cat.description}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {articles.map((a, i) => (
            <ArticleCard key={a.slug} article={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
