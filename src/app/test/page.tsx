import { getArticles } from '@/lib/neural/articles';

export default async function TestPage() {
  const articles = await getArticles();
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Test Page - Article List</h1>
      <div className="grid gap-6">
        {articles.map((article) => (
          <div key={article.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-gray-400 mb-2">Slug: {article.slug}</p>
            <div className="flex gap-4">
              <a 
                href={`/blog/${article.slug}`}
                className="text-blue-400 hover:underline"
              >
                View Article
              </a>
              <a 
                href={`/api/test/article/${article.slug}`}
                className="text-green-400 hover:underline"
              >
                Test API
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
