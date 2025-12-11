import { Calendar, Clock, MapPin, ArrowUpRight, Bell, Megaphone, Newspaper } from 'lucide-react';
import Link from 'next/link';

type UpdateItem = {
  id: string;
  title: string;
  excerpt: string;
  type: 'news' | 'update' | 'event';
  date: string;
  time?: string;
  location?: string;
  isNew?: boolean;
};

const updatesData: UpdateItem[] = [
  {
    id: '1',
    title: 'AI Nexus Launches New Model Optimization Suite',
    excerpt: 'Introducing our latest suite of tools designed to optimize AI model performance and reduce inference costs by up to 40%.',
    type: 'update',
    date: '2025-02-15',
    isNew: true
  },
  {
    id: '2',
    title: 'Upcoming Webinar: The Future of Generative AI',
    excerpt: 'Join our experts as they discuss the latest advancements in generative AI and its applications across industries.',
    type: 'event',
    date: '2025-03-10',
    time: '2:00 PM EST',
    location: 'Online',
    isNew: true
  },
  {
    id: '3',
    title: 'AI Ethics Report 2025 Released',
    excerpt: 'Our annual report on AI ethics highlights key challenges and recommendations for responsible AI development.',
    type: 'news',
    date: '2025-02-05'
  },
  {
    id: '4',
    title: 'AI Nexus Partners with Leading Research Institutions',
    excerpt: 'We\'re excited to announce new partnerships with top universities to advance AI research and development.',
    type: 'news',
    date: '2025-01-28'
  },
  {
    id: '5',
    title: 'Developer Conference: Building the Next Generation of AI',
    excerpt: 'Save the date for our annual developer conference featuring workshops, keynotes, and networking opportunities.',
    type: 'event',
    date: '2025-05-15',
    location: 'San Francisco, CA',
    isNew: true
  },
  {
    id: '6',
    title: 'New Feature Release: Enhanced Model Monitoring',
    excerpt: 'Our latest update includes advanced model monitoring capabilities to help you track performance in real-time.',
    type: 'update',
    date: '2025-01-20'
  },
  {
    id: '7',
    title: 'AI in Healthcare: Case Study Published',
    excerpt: 'Read how our AI solutions are transforming patient care in partnership with leading healthcare providers.',
    type: 'news',
    date: '2025-01-10'
  },
  {
    id: '8',
    title: 'Community Hackathon: AI for Social Good',
    excerpt: 'Join us for a weekend of building AI solutions to address pressing social and environmental challenges.',
    type: 'event',
    date: '2025-04-22',
    location: 'Global (Virtual)',
    isNew: true
  },
  // New entries added below
  {
    id: '9',
    title: 'Breakthrough in Natural Language Processing Achieved',
    excerpt: 'Our research team has developed a new NLP model that achieves human-level performance on complex reasoning tasks, marking a significant milestone in AI development.',
    type: 'news',
    date: '2025-06-05',
    isNew: true
  },
  {
    id: '10',
    title: 'AI Safety Summit 2025 Registration Now Open',
    excerpt: 'Join industry leaders, researchers, and policymakers at the premier event focused on ensuring the safe and beneficial development of artificial intelligence.',
    type: 'event',
    date: '2025-07-20',
    time: '9:00 AM - 5:00 PM EST',
    location: 'Washington D.C.',
    isNew: true
  },
  {
    id: '11',
    title: 'Major Update to AI Governance Framework',
    excerpt: 'Version 3.0 of our AI governance framework now includes enhanced transparency requirements and expanded ethical guidelines for enterprise deployments.',
    type: 'update',
    date: '2025-05-30'
  },
  {
    id: '12',
    title: 'Collaboration with UNESCO on AI Education Initiative',
    excerpt: 'We\'re proud to partner with UNESCO to develop global AI literacy programs aimed at bridging the digital divide and promoting inclusive AI education.',
    type: 'news',
    date: '2025-04-15'
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'news':
      return <Newspaper className="w-5 h-5 text-blue-400" />;
    case 'update':
      return <Bell className="w-5 h-5 text-purple-400" />;
    case 'event':
      return <Megaphone className="w-5 h-5 text-green-400" />;
    default:
      return <Newspaper className="w-5 h-5 text-gray-400" />;
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'news':
      return 'News';
    case 'update':
      return 'Product Update';
    case 'event':
      return 'Event';
    default:
      return type;
  }
};

export default function UpdatesPage() {
  // Group updates by month
  const groupedUpdates = updatesData.reduce((acc, update) => {
    const date = new Date(update.date);
    const monthYear = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(update);
    return acc;
  }, {} as Record<string, UpdateItem[]>);

  // Format date as "Month Day, Year"
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
            AI News & Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest news, product updates, and upcoming events
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 transition-colors">
            All
          </button>
          <button className="px-6 py-2 rounded-full bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
            News
          </button>
          <button className="px-6 py-2 rounded-full bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
            Updates
          </button>
          <button className="px-6 py-2 rounded-full bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
            Events
          </button>
        </div>

        {/* Updates Timeline */}
        <div className="max-w-4xl mx-auto">
          {Object.entries(groupedUpdates).map(([monthYear, updates]) => (
            <div key={monthYear} className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center md:text-left">{monthYear}</h2>
              <div className="space-y-8">
                {updates.map((update) => (
                  <div 
                    key={update.id}
                    className="relative pl-8 md:pl-12 pb-8 border-l-2 border-gray-800 group"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border-4 border-gray-900 -translate-x-[9px] group-hover:scale-125 transition-transform"></div>
                    
                    {/* Update card */}
                    <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-gray-800/50">
                            {getTypeIcon(update.type)}
                          </div>
                          <span className="text-sm font-medium text-gray-400">
                            {getTypeLabel(update.type)}
                          </span>
                        </div>
                        {update.isNew && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-900/30 text-green-400 border border-green-500/20">
                            New
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                        {update.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-4">{update.excerpt}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(update.date)}</span>
                        </div>
                        
                        {update.time && (
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{update.time}</span>
                          </div>
                        )}
                        
                        {update.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{update.location}</span>
                          </div>
                        )}
                        
                        <Link 
                          href={`#`}
                          className="ml-auto flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <span>Read more</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 md:p-12 text-center mt-24">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Bell className="w-4 h-4" />
            <span>Never miss an update</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest news, product updates, and event invitations delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-gray-800 text-white px-6 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:opacity-90 text-white font-medium px-6 py-3 rounded-xl transition-opacity">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
