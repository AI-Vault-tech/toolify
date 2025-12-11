import { notFound } from 'next/navigation';
import { researchData, ResearchItem } from '../researchData';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Add type for the params
type PageProps = {
  params: {
    slug: string;
  };
};

export default function ResearchArticle({ params }: PageProps) {
  const article: ResearchItem | undefined = researchData.find((item: ResearchItem) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const CategoryIcon = ({ category }: { category: string }) => {
    switch (category) {
      case 'whitepaper':
        return <span className="text-blue-400">📄</span>;
      case 'report':
        return <span className="text-purple-400">📊</span>;
      case 'case-study':
        return <span className="text-green-400">🔍</span>;
      default:
        return <span>📄</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link 
          href="/research-news/research" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Research
        </Link>

        <article className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50">
          {article.imageUrl && (
            <div className="h-64 md:h-80 w-full overflow-hidden">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  article.category === 'whitepaper' ? 'bg-blue-500/20 text-blue-300' :
                  article.category === 'report' ? 'bg-purple-500/20 text-purple-300' :
                  'bg-green-500/20 text-green-300'
                }`}>
                  <CategoryIcon category={article.category} />
                  <span className="ml-1.5">
                    {article.category === 'case-study' ? 'Case Study' : 
                     article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                  </span>
                </span>
                <span className="mx-3 text-gray-500">•</span>
                <span className="text-sm text-gray-400">{formatDate(article.date)}</span>
                <span className="mx-3 text-gray-500">•</span>
                <span className="text-sm text-gray-400">{article.readTime} read</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
            
            <div className="flex items-center mb-8">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold mr-3">
                {article.authorInitials}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{article.author}</p>
                <p className="text-xs text-gray-400">{article.authorRole}</p>
              </div>
            </div>

            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag: string, index: number) => (
                  <span 
                    key={index} 
                    className="inline-block px-3 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}
