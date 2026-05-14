import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getAllSlugs,
  getArticleBySlug,
  getAllArticles,
  categories,
} from '@/lib/articles';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Not found' };
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.description,
      url: `https://inboxbase.online/blog/${slug}/`,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return notFound();

  const allArticles = getAllArticles();
  const related = allArticles
    .filter((a) => a.slug !== article.slug && a.categorySlug === article.categorySlug)
    .slice(0, 4);
  if (related.length < 4) {
    const fillers = allArticles
      .filter((a) => a.slug !== article.slug && a.categorySlug !== article.categorySlug)
      .slice(0, 4 - related.length);
    related.push(...fillers);
  }

  return (
    <section style={{ padding: '40px 0 80px' }}>
      <div className="container">
        <div className="article-layout">
          <article style={{ minWidth: 0 }}>
            <div style={{ marginBottom: 20 }}>
              <Link
                href={`/category/${article.categorySlug}/`}
                style={{
                  fontSize: 12,
                  color: '#8B5CF6',
                  letterSpacing: '0.8px',
                  fontWeight: 500,
                }}
              >
                {article.category.toUpperCase()}
              </Link>
              <span
                style={{
                  marginLeft: 12,
                  fontSize: 12,
                  color: '#666',
                }}
              >
                · {article.readTime}
              </span>
            </div>
            <h1
              style={{
                fontSize: 40,
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: 18,
                color: '#fff',
                letterSpacing: '-0.5px',
              }}
            >
              {article.title}
            </h1>
            <p
              style={{
                fontSize: 18,
                color: '#a0a0a0',
                lineHeight: 1.65,
                marginBottom: 32,
                paddingBottom: 24,
                borderBottom: '1px solid #1E1E1E',
              }}
            >
              {article.description}
            </p>

            <div className="prose" dangerouslySetInnerHTML={{ __html: article.html }} />

            <div
              style={{
                marginTop: 48,
                padding: '24px 28px',
                background: 'rgba(139,92,246,0.08)',
                border: '1px solid rgba(139,92,246,0.3)',
                borderRadius: 12,
                textAlign: 'center',
              }}
            >
              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 10 }}>
                Ready to try <span style={{ color: '#8B5CF6' }}>Brevo</span>?
              </h3>
              <p style={{ color: '#bbb', fontSize: 14, marginBottom: 18 }}>
                Free forever plan. 300 emails/day. No credit card.
              </p>
              <a
                href="https://www.brevo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Create Free Brevo Account →
              </a>
            </div>
          </article>

          <aside className="article-sidebar">
            <div
              style={{
                background: '#8B5CF6',
                borderRadius: 12,
                padding: 20,
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.8)',
                  letterSpacing: '0.8px',
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                SPONSORED · TOOL
              </div>
              <h4 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
                Try Brevo Free
              </h4>
              <p
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.85)',
                  marginBottom: 14,
                  lineHeight: 1.5,
                }}
              >
                300 emails/day · No credit card required
              </p>
              <a
                href="https://www.brevo.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '10px',
                  background: '#fff',
                  color: '#8B5CF6',
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                Start Free →
              </a>
            </div>

            <Link
              href={`/category/${article.categorySlug}/`}
              style={{
                display: 'block',
                padding: '12px 16px',
                background: '#111',
                border: '1px solid rgba(139,92,246,0.25)',
                borderRadius: 8,
                fontSize: 12,
                color: '#8B5CF6',
                fontWeight: 500,
                marginBottom: 18,
                letterSpacing: '0.5px',
              }}
            >
              {article.category.toUpperCase()} →
            </Link>

            <div
              style={{
                background: '#111',
                border: '1px solid #1E1E1E',
                borderRadius: 8,
                padding: 18,
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  color: '#888',
                  letterSpacing: '1px',
                  marginBottom: 12,
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                }}
              >
                MORE GUIDES
              </div>
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}/`}
                  style={{
                    display: 'block',
                    fontSize: 13,
                    color: '#ddd',
                    padding: '8px 0',
                    borderBottom: '1px solid #1E1E1E',
                    lineHeight: 1.4,
                  }}
                >
                  {r.title}
                </Link>
              ))}
            </div>

            <div
              style={{
                background: '#111',
                border: '1px solid #1E1E1E',
                borderRadius: 8,
                padding: 18,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  color: '#888',
                  letterSpacing: '1px',
                  marginBottom: 12,
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                }}
              >
                ALL TOPICS
              </div>
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/category/${c.slug}/`}
                  style={{
                    display: 'block',
                    fontSize: 13,
                    color: c.slug === article.categorySlug ? '#8B5CF6' : '#bbb',
                    fontWeight: c.slug === article.categorySlug ? 600 : 400,
                    padding: '6px 0',
                  }}
                >
                  {c.slug === article.categorySlug ? '→ ' : ''}{c.name}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
