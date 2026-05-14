import Link from 'next/link';
import type { Article } from '@/lib/articles';

export default function ArticleCard({
  article,
  index,
}: {
  article: Article;
  index?: number;
}) {
  const num = index !== undefined ? String(index + 1).padStart(2, '0') : null;

  return (
    <Link href={`/blog/${article.slug}/`} className="card card-hover" style={{ display: 'block', padding: 24 }}>
      {num && (
        <div
          style={{
            fontSize: 36,
            fontWeight: 800,
            color: '#8B5CF6',
            lineHeight: 1,
            marginBottom: 12,
            letterSpacing: '-1px',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          {num}
        </div>
      )}
      <div
        style={{
          fontSize: 11,
          color: '#8B5CF6',
          letterSpacing: '0.8px',
          marginBottom: 8,
          fontWeight: 500,
        }}
      >
        {article.category.toUpperCase()}
      </div>
      <h3
        style={{
          fontSize: 17,
          fontWeight: 600,
          color: '#fff',
          marginBottom: 10,
          lineHeight: 1.3,
        }}
      >
        {article.title}
      </h3>
      <p
        style={{
          fontSize: 13,
          color: '#999',
          lineHeight: 1.6,
          marginBottom: 14,
        }}
      >
        {article.description}
      </p>
      <div
        style={{
          fontSize: 13,
          color: '#8B5CF6',
          fontWeight: 500,
        }}
      >
        Read guide → <span style={{ color: '#666', marginLeft: 8 }}>{article.readTime}</span>
      </div>
    </Link>
  );
}
