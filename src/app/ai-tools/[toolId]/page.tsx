import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';
import { Code, BarChart4, Image as ImageIcon, Mic, Languages, Heart, FileText, MessageSquare, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const aiTools = [
  {
    id: 'code-generator',
    title: 'AI Code Generator',
    description: 'Generate code snippets in multiple programming languages',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    longDescription: 'Our AI Code Generator helps developers quickly generate code snippets in various programming languages. Simply describe what you want to achieve in plain English, and our AI will generate the corresponding code for you. Perfect for learning new languages, speeding up development, or solving complex problems.',
    features: [
      'Generate code in 20+ programming languages',
      'Support for frameworks like React, Vue, and Angular',
      'Code explanation and documentation',
      'Error detection and suggestions'
    ],
    category: 'Development'
  },
  {
    id: 'data-analyzer',
    title: 'Data Analyzer',
    description: 'Advanced data analysis and visualization',
    icon: BarChart4,
    color: 'from-purple-500 to-pink-500',
    longDescription: 'Transform raw data into meaningful insights with our powerful Data Analyzer. Upload your datasets and let our AI identify patterns, trends, and correlations. Create beautiful visualizations and export reports with just a few clicks.',
    features: [
      'Import data from CSV, Excel, and JSON',
      'Automatic data cleaning and preprocessing',
      'Interactive visualizations',
      'Predictive analytics'
    ],
    category: 'Analytics'
  },
  {
    id: 'image-recognition',
    title: 'Image Recognition',
    description: 'AI-powered image analysis and tagging',
    icon: ImageIcon,
    color: 'from-green-500 to-emerald-500',
    longDescription: 'Our Image Recognition tool uses advanced computer vision to analyze and tag images. Identify objects, people, text, and more in your images. Perfect for content moderation, accessibility, and organizing large image libraries.',
    features: [
      'Object and face detection',
      'Text recognition (OCR)',
      'Custom model training',
      'Bulk processing'
    ],
    category: 'Computer Vision'
  },
  {
    id: 'speech-to-text',
    title: 'Speech to Text',
    description: 'Convert speech to accurate text in real-time',
    icon: Mic,
    color: 'from-red-500 to-orange-500',
    longDescription: 'Convert spoken words into written text with high accuracy. Our Speech to Text tool supports multiple languages and dialects, with options for real-time transcription and speaker diarization. Ideal for transcribing meetings, interviews, and voice notes.',
    features: [
      'Real-time transcription',
      'Multi-language support',
      'Speaker identification',
      'Custom vocabulary'
    ],
    category: 'Audio Processing'
  },
  {
    id: 'language-translator',
    title: 'Language Translator',
    description: 'Translate text between 100+ languages',
    icon: Languages,
    color: 'from-indigo-500 to-blue-500',
    longDescription: 'Break language barriers with our advanced translation tool. Translate text, documents, and even websites between 100+ languages while preserving formatting and context. Perfect for global businesses and content creators.',
    features: [
      '100+ languages supported',
      'Document translation',
      'Website localization',
      'Translation memory'
    ],
    category: 'NLP'
  },
  {
    id: 'sentiment-analyzer',
    title: 'Sentiment Analysis',
    description: 'Analyze emotions and opinions in text',
    icon: Heart,
    color: 'from-rose-500 to-pink-500',
    longDescription: 'Understand customer sentiment and opinions with our Sentiment Analysis tool. Analyze product reviews, social media posts, and customer feedback to gain valuable insights into public perception.',
    features: [
      'Emotion detection',
      'Aspect-based analysis',
      'Multi-language support',
      'Custom sentiment models'
    ],
    category: 'NLP'
  },
  {
    id: 'document-analyzer',
    title: 'Document Analysis',
    description: 'Extract insights from documents and PDFs',
    icon: FileText,
    color: 'from-amber-500 to-yellow-500',
    longDescription: 'Process and analyze documents at scale with our Document Analysis tool. Extract key information, summarize content, and classify documents automatically. Ideal for legal, financial, and research applications.',
    features: [
      'Text extraction from PDFs and images',
      'Entity recognition',
      'Document summarization',
      'Custom extraction rules'
    ],
    category: 'Document Processing'
  },
  {
    id: 'chatbot-builder',
    title: 'Chatbot Builder',
    description: 'Create AI-powered chatbots without coding',
    icon: MessageSquare,
    color: 'from-teal-500 to-cyan-500',
    longDescription: 'Build intelligent chatbots for your website or application with our no-code Chatbot Builder. Train your bot with custom knowledge and integrate it with your existing systems in minutes.',
    features: [
      'Drag-and-drop interface',
      'Multi-channel deployment',
      'Natural language understanding',
      'Analytics dashboard'
    ],
    category: 'Conversational AI'
  },
];

type Props = {
  params: { toolId: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const tool = aiTools.find(t => t.id === params.toolId);
  
  if (!tool) {
    return {
      title: 'Tool Not Found | AI Nexus',
    };
  }

  const description = tool.longDescription || tool.description;
  const fullDescription = `Discover ${tool.title} on AI Nexus. ${description} Explore features, user reviews, and alternatives for this AI tool. Part of our collection of 35,000+ AI tools.`;

  return {
    title: `${tool.title} | AI Nexus - AI Tools Directory`,
    description: fullDescription,
    keywords: [
      tool.title,
      `${tool.title} AI`,
      `${tool.title} tool`,
      'AI tools',
      tool.category,
      'artificial intelligence',
      'machine learning'
    ],
    openGraph: {
      title: `${tool.title} | AI Nexus - AI Tools Directory`,
      description: fullDescription,
      url: `https://toolify-theta.vercel.app/ai-tools/${tool.id}`,
      siteName: 'AI Nexus',
      images: [
        {
          url: `https://toolify-theta.vercel.app/images/tools/${tool.id}.jpg`,
          width: 1200,
          height: 630,
          alt: `${tool.title} - AI Tool on AI Nexus`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.title} | AI Nexus - AI Tools Directory`,
      description: fullDescription,
      images: [`https://toolify-theta.vercel.app/images/tools/${tool.id}.jpg`],
    },
    alternates: {
      canonical: `https://toolify-theta.vercel.app/ai-tools/${tool.id}`,
    },
  };
}

export default function ToolPage({ params }: Props) {
  const tool = aiTools.find(t => t.id === params.toolId);

  if (!tool) {
    notFound();
  }

  const Icon = tool.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/ai-tools" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all tools
          </Link>
          
          <div className="flex items-start space-x-4 mb-6">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${tool.color} shadow-lg`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">{tool.title}</h1>
              <p className="text-lg text-gray-300 mt-1">{tool.description}</p>
              <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                {tool.category}
              </span>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">About this tool</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              {tool.longDescription}
            </p>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
              <ul className="space-y-2">
                {tool.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800">
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                Try {tool.title} Now
              </button>
              
              <p className="mt-3 text-center text-sm text-gray-400">
                No credit card required • Free trial available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
