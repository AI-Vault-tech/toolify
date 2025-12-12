import { Metadata } from 'next';
import Link from 'next/link';
import { Code, BarChart4, Image as ImageIcon, Mic, Languages, Heart, FileText, MessageSquare, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Tools Directory | AI Nexus - 35,000+ AI Tools',
  description: "Discover the world's largest AI tools directory with 35,000+ cutting-edge artificial intelligence tools, platforms, and resources. Find the perfect AI solution for your needs.",
  keywords: [
    'AI tools',
    'artificial intelligence tools',
    'machine learning tools',
    'AI platforms',
    'AI software',
    'best AI tools',
    'AI tools directory',
    'AI resources'
  ],
  openGraph: {
    title: 'AI Tools Directory | AI Nexus - 35,000+ AI Tools',
    description: "Discover the world's largest AI tools directory with 35,000+ cutting-edge artificial intelligence tools, platforms, and resources. Find the perfect AI solution for your needs.",
    url: 'https://toolify-theta.vercel.app/ai-tools',
    siteName: 'AI Nexus',
    images: [
      {
        url: 'https://toolify-theta.vercel.app/images/ai-tools-og.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Tools Directory - 35,000+ AI Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools Directory | AI Nexus - 35,000+ AI Tools',
    description: "Discover the world's largest AI tools directory with 35,000+ cutting-edge artificial intelligence tools, platforms, and resources.",
    images: ['https://toolify-theta.vercel.app/images/ai-tools-og.jpg'],
  },
  alternates: {
    canonical: 'https://toolify-theta.vercel.app/ai-tools',
  },
};

const aiTools = [
  {
    id: 'code-generator',
    title: 'AI Code Generator',
    description: 'Generate code snippets in multiple programming languages',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    stats: '1.2k uses today',
    category: 'Development'
  },
  {
    id: 'data-analyzer',
    title: 'Data Analyzer',
    description: 'Advanced data analysis and visualization',
    icon: BarChart4,
    color: 'from-purple-500 to-pink-500',
    stats: '850 uses today',
    category: 'Analytics'
  },
  {
    id: 'image-recognition',
    title: 'Image Recognition',
    description: 'AI-powered image analysis and tagging',
    icon: ImageIcon,
    color: 'from-green-500 to-emerald-500',
    stats: '2.1k uses today',
    category: 'Computer Vision'
  },
  {
    id: 'speech-to-text',
    title: 'Speech to Text',
    description: 'Convert speech to accurate text in real-time',
    icon: Mic,
    color: 'from-red-500 to-orange-500',
    stats: '1.5k uses today',
    category: 'Audio Processing'
  },
  {
    id: 'language-translator',
    title: 'Language Translator',
    description: 'Translate text between 100+ languages',
    icon: Languages,
    color: 'from-indigo-500 to-blue-500',
    stats: '3.4k uses today',
    category: 'NLP'
  },
  {
    id: 'sentiment-analyzer',
    title: 'Sentiment Analysis',
    description: 'Analyze emotions and opinions in text',
    icon: Heart,
    color: 'from-rose-500 to-pink-500',
    stats: '980 uses today',
    category: 'NLP'
  },
  {
    id: 'document-analyzer',
    title: 'Document Analysis',
    description: 'Extract insights from documents and PDFs',
    icon: FileText,
    color: 'from-amber-500 to-yellow-500',
    stats: '1.7k uses today',
    category: 'Document Processing'
  },
  {
    id: 'chatbot-builder',
    title: 'Chatbot Builder',
    description: 'Create AI-powered chatbots without coding',
    icon: MessageSquare,
    color: 'from-teal-500 to-cyan-500',
    stats: '2.3k uses today',
    category: 'Conversational AI'
  },
];

export default function AIToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">AI Tools Directory - 35,000+ AI Tools</h1>
          <p className="text-xl text-gray-300">Discover the world's largest collection of cutting-edge artificial intelligence tools, platforms, and resources to enhance your workflow and boost productivity.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {aiTools.map((tool) => (
            <Link 
              key={tool.id}
              href={`/ai-tools/${tool.id}`}
              className="group block bg-gradient-to-br from-gray-900/90 to-gray-950/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4`}>
                <tool.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{tool.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{tool.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-1 bg-gray-800/50 text-gray-300 rounded-full">{tool.category}</span>
                <span className="text-xs text-gray-500">{tool.stats}</span>
              </div>
              <div className="mt-4 flex items-center text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                Try now <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
