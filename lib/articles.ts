import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  readTime: string;
  content: string;
  html: string;
}

export const categories = [
  {
    name: 'Brevo Setup & Getting Started',
    slug: 'brevo-setup',
    description:
      'Account setup, domain authentication, and inbox-ready basics for new Brevo users.',
  },
  {
    name: 'Brevo Automation & Campaigns',
    slug: 'brevo-automation',
    description:
      'Workflows, welcome series, abandoned cart, and A/B testing strategies that convert.',
  },
  {
    name: 'Brevo Deliverability',
    slug: 'brevo-deliverability',
    description:
      'DKIM, SPF, DMARC, IP warming, and the tactics that land emails in the primary inbox.',
  },
  {
    name: 'Brevo Integrations',
    slug: 'brevo-integrations',
    description:
      'Connect Brevo with WordPress, WooCommerce, Shopify, and 5000+ tools via API and Zapier.',
  },
  {
    name: 'Brevo vs Competitors',
    slug: 'brevo-vs-competitors',
    description:
      'Side-by-side comparisons of Brevo against Mailchimp, HubSpot, Klaviyo, and other top tools.',
  },
];

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export function getAllSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) return [];
  return fs
    .readdirSync(articlesDirectory)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getArticleBySlug(slug: string): Article | null {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const rawHtml = marked.parse(content, { async: false }) as string;
  // Remove first <h1>...</h1> from content since page.tsx renders the title separately
  const html = rawHtml.replace(/^<h1[^>]*>.*?<\/h1>\s*/i, '');
  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    category: data.category || '',
    categorySlug: data.categorySlug || '',
    readTime: data.readTime || '7 min read',
    content,
    html,
  };
}

export function getAllArticles(): Article[] {
  const slugs = getAllSlugs();
  return slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => a !== null);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return getAllArticles().filter((a) => a.categorySlug === categorySlug);
}
