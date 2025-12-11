'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Grid, 
  Brain, 
  Globe, 
  Network, 
  BarChart3, 
  Sparkles, 
  Crown,
  ChevronRight,
  Star,
  Clock,
  Users,
  TrendingUp,
  Zap,
  Shield,
  Award,
  Wrench,
  Settings,
  Cpu,
  Database,
  Filter,
  Search,
  Download,
  Share2,
  Heart,
  Calendar,
  Tag,
  Layers,
  Target,
  Lightbulb,
  CheckCircle,
  AlertCircle,
  XCircle,
  Info,
  Plus,
  Minus,
  RefreshCw,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  TrendingDown,
  PieChart,
  Activity,
  Compass,
  Flag,
  MapPin,
  Hash,
  DollarSign,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Code,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  Tablet,
  Archive,
  Folder,
  FileText,
  Image,
  Video,
  Music,
  Link as LinkIcon,
  ExternalLink,
  Copy,
  Save,
  Trash2,
  Edit3,
  Printer,
  Mail,
  Bell,
  Wifi,
  Bluetooth,
  Battery,
  Volume2,
  Mic,
  Camera,
  Aperture,
  Film,
  Tv,
  Radio,
  Watch,
  Headphones,
  Speaker,
  Disc,
  Airplay,
  Cast,
  Youtube,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Slack,
  Dribbble,
  Figma,
  Chrome,
  Apple,
  Pocket,
  Navigation,
  Map,
  Globe2,
  Phone,
  Mailbox,
  Send,
  Inbox,
  ArchiveIcon,
  Bookmark,
  Book,
  Clipboard,
  ClipboardCheck,
  ClipboardList,
  CalendarDays,
  ClockIcon,
  AlarmClock,
  Timer,
  Hourglass,
  Sunrise,
  Sunset,
  Moon,
  Sun,
  CloudSun,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  Thermometer,
  Wind,
  Waves,
  Umbrella,
  EyeIcon,
  EyeOffIcon,
  HeartIcon,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  MessageSquare,
  HashIcon,
  AtSign,
  Paperclip,
  Scissors,
  Package,
  ShoppingCart,
  CreditCard,
  Banknote,
  Wallet,
  Gift,
  Gem,
  Trophy,
  Medal,
  Badge,
  AwardIcon,
  Ticket,
  TrophyIcon,
  TargetIcon,
  ZapIcon,
  Flame,
  Magnet,
  DiscIcon,
  DiscAlbum,
  MusicIcon,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  SquareIcon,
  CircleIcon,
  TriangleIcon,
  HexagonIcon,
  OctagonIcon,
  PentagonIcon,
  User,
  Building,
  Percent,
  HelpCircle,
  Puzzle
} from 'lucide-react';
import NextLink from 'next/link';

// Mock playbook data - in a real app this would come from your data source
const premiumPlaybooks = [
  {
    id: '1',
    title: 'AI-Powered Customer Service Excellence',
    category: 'Customer Service',
    rating: 4.9,
    duration: '8 hours',
    level: 'Intermediate',
    learners: '12.5K',
    description: 'Transform your customer service with cutting-edge AI technologies.',
    certification: true,
    interactive: true,
    videoHours: 6.5,
    exercises: 24,
    quizzes: 8,
    type: 'playbook',
    releaseDate: '2023-05-15',
    tags: ['AI', 'Customer Service', 'Automation', 'Chatbots', 'Support'],
    prerequisites: ['Basic Computer Skills', 'Communication Fundamentals'],
    outcomes: ['Implement AI chatbots', 'Reduce response time by 60%', 'Improve customer satisfaction', 'Handle 1000+ queries daily'],
    author: 'Dr. Sarah Johnson',
    institution: 'MIT Sloan School',
    language: 'English',
    subtitleLanguages: ['Spanish', 'French', 'German'],
    lastUpdated: '2023-11-20',
    version: '2.1',
    difficultyScore: 7.2,
    engagementScore: 8.9,
    completionRate: 92,
    avgTimeToComplete: '7.5 hours',
    resources: 42,
    caseStudies: 8,
    templates: 12,
    checklists: 15,
    bestPracticeGuides: 7
  },
  {
    id: '2',
    title: 'Strategic Data Analysis for Business Leaders',
    category: 'Data Science',
    rating: 4.8,
    duration: '12 hours',
    level: 'Advanced',
    learners: '8.7K',
    description: 'Master data-driven decision making with advanced analytics.',
    certification: true,
    interactive: true,
    videoHours: 9.2,
    exercises: 32,
    quizzes: 12,
    type: 'playbook',
    releaseDate: '2023-07-22',
    tags: ['Data Science', 'Analytics', 'Business Intelligence', 'Machine Learning', 'Statistics'],
    prerequisites: ['Statistics Fundamentals', 'Excel Proficiency', 'Basic Python'],
    outcomes: ['Build predictive models', 'Create data visualizations', 'Make strategic decisions', 'Identify market trends'],
    author: 'Prof. Michael Chen',
    institution: 'Stanford Graduate School',
    language: 'English',
    subtitleLanguages: ['Chinese', 'Japanese', 'Korean'],
    lastUpdated: '2023-10-15',
    version: '3.0',
    difficultyScore: 8.5,
    engagementScore: 8.7,
    completionRate: 85,
    avgTimeToComplete: '11.2 hours',
    resources: 56,
    caseStudies: 12,
    templates: 8,
    checklists: 18,
    bestPracticeGuides: 10
  },
  {
    id: '3',
    title: 'Digital Marketing Automation Mastery',
    category: 'Marketing',
    rating: 4.7,
    duration: '10 hours',
    level: 'Intermediate',
    learners: '15.2K',
    description: 'Automate your marketing workflows for maximum efficiency.',
    certification: true,
    interactive: false,
    videoHours: 7.8,
    exercises: 18,
    quizzes: 6,
    type: 'playbook',
    releaseDate: '2023-03-10',
    tags: ['Marketing', 'Automation', 'SEO', 'Email Campaigns', 'Social Media'],
    prerequisites: ['Marketing Basics', 'CRM Fundamentals'],
    outcomes: ['Create automation workflows', 'Optimize conversion rates', 'Generate qualified leads', 'Increase ROI by 40%'],
    author: 'Alex Rodriguez',
    institution: 'HubSpot Academy',
    language: 'English',
    subtitleLanguages: ['Portuguese', 'Italian', 'Dutch'],
    lastUpdated: '2023-09-30',
    version: '1.8',
    difficultyScore: 6.8,
    engagementScore: 7.9,
    completionRate: 88,
    avgTimeToComplete: '9.1 hours',
    resources: 38,
    caseStudies: 6,
    templates: 22,
    checklists: 12,
    bestPracticeGuides: 5
  },
  {
    id: '4',
    title: 'Cybersecurity Framework Implementation',
    category: 'Security',
    rating: 4.9,
    duration: '15 hours',
    level: 'Expert',
    learners: '6.3K',
    description: 'Implement enterprise-grade security frameworks.',
    certification: true,
    interactive: true,
    videoHours: 11.5,
    exercises: 28,
    quizzes: 10,
    type: 'playbook',
    releaseDate: '2023-09-05',
    tags: ['Security', 'Compliance', 'Risk Management', 'Encryption', 'Firewalls'],
    prerequisites: ['IT Fundamentals', 'Networking Basics', 'Security Principles'],
    outcomes: ['Deploy security protocols', 'Conduct risk assessments', 'Ensure compliance', 'Prevent 99% of breaches'],
    author: 'Dr. Emily Watson',
    institution: 'Carnegie Mellon University',
    language: 'English',
    subtitleLanguages: ['Russian', 'Arabic', 'Hindi'],
    lastUpdated: '2023-12-01',
    version: '4.2',
    difficultyScore: 9.1,
    engagementScore: 9.3,
    completionRate: 78,
    avgTimeToComplete: '14.3 hours',
    resources: 64,
    caseStudies: 15,
    templates: 9,
    checklists: 22,
    bestPracticeGuides: 14
  }
];

// Mock tools data
const premiumTools = [
  {
    id: 't1',
    title: 'NeuralNet Studio Pro',
    category: 'AI Development',
    rating: 4.8,
    pricing: 'Enterprise',
    users: '120K',
    description: 'Advanced neural network design and training platform.',
    integration: true,
    api: true,
    cloud: true,
    features: 24,
    support: '24/7',
    type: 'tool',
    releaseDate: '2022-11-18',
    tags: ['AI', 'Machine Learning', 'Development', 'Deep Learning', 'Neural Networks'],
    platforms: ['Web', 'Desktop'],
    useCases: ['Model Training', 'Research', 'Prototyping', 'Production Deployment'],
    developer: 'NeuroTech Inc.',
    license: 'Proprietary',
    systemRequirements: '8GB RAM, CUDA-compatible GPU',
    documentation: 'Comprehensive',
    communitySupport: true,
    tutorials: 32,
    sampleProjects: 18,
    plugins: 15,
    extensions: 9,
    customizability: 'High',
    scalability: 'Enterprise',
    security: 'Military-grade encryption',
    compliance: ['GDPR', 'HIPAA', 'SOC 2'],
    deploymentOptions: ['Cloud', 'On-premise', 'Hybrid'],
    version: '3.7.2',
    lastUpdated: '2023-11-10',
    avgRating: 4.8,
    reviewCount: 2450,
    uptime: '99.95%',
    responseTime: '< 15ms'
  },
  {
    id: 't2',
    title: 'DataFlow Analytics',
    category: 'Business Intelligence',
    rating: 4.6,
    pricing: 'Freemium',
    users: '85K',
    description: 'Real-time business intelligence and data visualization.',
    integration: true,
    api: true,
    cloud: true,
    features: 18,
    support: 'Business Hours',
    type: 'tool',
    releaseDate: '2023-01-30',
    tags: ['Analytics', 'Visualization', 'BI', 'Dashboard', 'Reporting'],
    platforms: ['Web', 'Mobile'],
    useCases: ['Dashboard Creation', 'Reporting', 'KPI Tracking', 'Data Discovery'],
    developer: 'Insightful Solutions',
    license: 'Open Source',
    systemRequirements: 'Modern browser, 4GB RAM',
    documentation: 'Extensive',
    communitySupport: true,
    tutorials: 28,
    sampleProjects: 12,
    plugins: 22,
    extensions: 14,
    customizability: 'Medium',
    scalability: 'Mid-market',
    security: 'SSL/TLS encryption',
    compliance: ['GDPR'],
    deploymentOptions: ['Cloud', 'Self-hosted'],
    version: '2.4.1',
    lastUpdated: '2023-10-22',
    avgRating: 4.6,
    reviewCount: 1875,
    uptime: '99.8%',
    responseTime: '< 50ms'
  },
  {
    id: 't3',
    title: 'AutoScript Generator',
    category: 'Automation',
    rating: 4.7,
    pricing: '$49/month',
    users: '42K',
    description: 'AI-powered script generation for complex workflows.',
    integration: false,
    api: true,
    cloud: false,
    features: 15,
    support: 'Email',
    type: 'tool',
    releaseDate: '2023-04-12',
    tags: ['Automation', 'Scripting', 'Productivity', 'Workflow', 'Code Generation'],
    platforms: ['Desktop'],
    useCases: ['Workflow Automation', 'Task Scheduling', 'System Integration', 'DevOps'],
    developer: 'ScriptGen Technologies',
    license: 'Proprietary',
    systemRequirements: 'Windows 10+, 8GB RAM',
    documentation: 'Good',
    communitySupport: false,
    tutorials: 16,
    sampleProjects: 8,
    plugins: 5,
    extensions: 3,
    customizability: 'Low',
    scalability: 'Individual/SMB',
    security: 'Local storage only',
    compliance: [],
    deploymentOptions: ['Desktop'],
    version: '1.9.3',
    lastUpdated: '2023-09-15',
    avgRating: 4.7,
    reviewCount: 980,
    uptime: 'N/A',
    responseTime: 'N/A'
  },
  {
    id: 't4',
    title: 'VisionAI Toolkit',
    category: 'Computer Vision',
    rating: 4.9,
    pricing: 'Custom',
    users: '28K',
    description: 'Comprehensive computer vision model training suite.',
    integration: true,
    api: true,
    cloud: true,
    features: 32,
    support: '24/7',
    type: 'tool',
    releaseDate: '2023-08-20',
    tags: ['Computer Vision', 'AI', 'Image Processing', 'Object Detection', 'ML'],
    platforms: ['Web', 'Desktop', 'Cloud'],
    useCases: ['Object Detection', 'Image Recognition', 'Video Analysis', 'Quality Control'],
    developer: 'VisionTech Labs',
    license: 'Commercial',
    systemRequirements: '16GB RAM, NVIDIA RTX GPU',
    documentation: 'Excellent',
    communitySupport: true,
    tutorials: 42,
    sampleProjects: 25,
    plugins: 18,
    extensions: 12,
    customizability: 'Very High',
    scalability: 'Enterprise',
    security: 'End-to-end encryption',
    compliance: ['GDPR', 'CCPA', 'ISO 27001'],
    deploymentOptions: ['Cloud', 'On-premise', 'Edge'],
    version: '5.1.0',
    lastUpdated: '2023-12-05',
    avgRating: 4.9,
    reviewCount: 1560,
    uptime: '99.99%',
    responseTime: '< 5ms'
  }
];

// Combined items for selection
const allItems = [...premiumPlaybooks, ...premiumTools];

// Search and Filter Component
const SearchAndFilter = ({ 
  searchTerm, 
  setSearchTerm, 
  itemTypeFilter, 
  setItemTypeFilter,
  categoryFilter,
  setCategoryFilter,
  sortBy,
  setSortBy,
  allItems
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  itemTypeFilter: string;
  setItemTypeFilter: (filter: string) => void;
  categoryFilter: string;
  setCategoryFilter: (filter: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  allItems: any[];
}) => {
  // Get unique categories
  const categories = Array.from(new Set(allItems.map(item => item.category)));
  
  return (
    <div className="bg-gray-800/50 rounded-2xl p-6 mb-8 border border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search playbooks and tools..."
              className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div>
          <select
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={itemTypeFilter}
            onChange={(e) => setItemTypeFilter(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="playbook">Playbooks Only</option>
            <option value="tool">Tools Only</option>
          </select>
        </div>
        
        <div>
          <select
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <div>
          <select
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="rating">Sort by Rating</option>
            <option value="title">Sort by Title</option>
            <option value="releaseDate">Sort by Release Date</option>
            <option value="popularity">Sort by Popularity</option>
          </select>
        </div>
      </div>
    </div>
  );
};

// Premium Item Selector Component
const PremiumItemSelector = ({ 
  allItems, 
  selectedItems, 
  toggleItemSelection,
  searchTerm,
  setSearchTerm,
  itemTypeFilter,
  setItemTypeFilter,
  categoryFilter,
  setCategoryFilter,
  sortBy,
  setSortBy
}: {
  allItems: any[];
  selectedItems: any[];
  toggleItemSelection: (item: any) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  itemTypeFilter: string;
  setItemTypeFilter: (filter: string) => void;
  categoryFilter: string;
  setCategoryFilter: (filter: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}) => {
  // Filter items based on search and filters
  let filteredItems = allItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = itemTypeFilter === 'all' || item.type === itemTypeFilter;
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    
    return matchesSearch && matchesType && matchesCategory;
  });
  
  // Sort items
  filteredItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'releaseDate') {
      return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
    } else if (sortBy === 'popularity') {
      if (a.type === 'playbook' && b.type === 'playbook') {
        return parseInt(b.learners) - parseInt(a.learners);
      } else if (a.type === 'tool' && b.type === 'tool') {
        return parseInt(b.users.replace('K', '')) - parseInt(a.users.replace('K', ''));
      } else if (a.type === 'playbook') {
        return parseInt(b.users.replace('K', '')) - parseInt(a.learners);
      } else {
        return parseInt(b.learners) - parseInt(a.users.replace('K', ''));
      }
    }
    return 0;
  });
  
  return (
    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Wrench className="w-6 h-6 text-cyan-400" />
          Select Items to Compare (Playbooks & Tools)
        </h2>
        <div className="text-gray-400">
          {selectedItems.length}/2 items selected
        </div>
      </div>
      
      <p className="text-gray-400 mb-8">
        Choose exactly 2 items (playbooks or tools) to unlock advanced comparison features and premium insights.
      </p>
      
      <SearchAndFilter 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        itemTypeFilter={itemTypeFilter}
        setItemTypeFilter={setItemTypeFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        allItems={allItems}
      />
      
      {filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-block p-4 rounded-full bg-gray-700/50 mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No items found</h3>
          <p className="text-gray-400">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const isSelected = selectedItems.some(i => i.id === item.id);
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`relative rounded-2xl p-6 cursor-pointer transition-all ${
                  isSelected 
                    ? 'bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/20' 
                    : 'bg-gray-800/50 border border-gray-700 hover:border-cyan-500/30'
                }`}
                onClick={() => toggleItemSelection(item)}
              >
                {isSelected && (
                  <div className="absolute -top-3 -right-3 bg-cyan-500 rounded-full p-2">
                    <Star className="w-5 h-5 text-white" fill="currentColor" />
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    {item.type === 'playbook' ? (
                      <BookOpen className="w-5 h-5 text-amber-400" />
                    ) : (
                      <Settings className="w-5 h-5 text-purple-400" />
                    )}
                    <h3 className="font-bold text-white text-lg">{item.title}</h3>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-500/20 text-amber-400 px-2 py-1 rounded-lg">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold">{item.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1 rounded-md">
                    {item.category}
                  </span>
                  <span className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1 rounded-md">
                    {item.type === 'playbook' ? 'Playbook' : 'Tool'}
                  </span>
                  {item.type === 'playbook' && item.certification && (
                    <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-md flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      Certified
                    </span>
                  )}
                  {item.type === 'tool' && item.integration && (
                    <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded-md">
                      Integration
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between text-sm text-gray-400">
                  {item.type === 'playbook' ? (
                    <>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {item.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {item.learners}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-1">
                        <Database className="w-4 h-4" />
                        {item.pricing}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {item.users}
                      </div>
                    </>
                  )}
                </div>
                
                <div className="mt-4 flex flex-wrap gap-1">
                  {item.tags.slice(0, 3).map((tag: string, index: number) => (
                    <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// Premium Comparison Matrix Component
const PremiumComparisonMatrix = ({ items }: { items: any[] }) => {
  // Determine features based on item types
  const features = items.every(item => item.type === 'playbook') 
    ? [
        { name: 'Video Hours', key: 'videoHours', icon: Clock },
        { name: 'Interactive Content', key: 'interactive', icon: Zap },
        { name: 'Exercises', key: 'exercises', icon: FileText },
        { name: 'Quizzes', key: 'quizzes', icon: ClipboardList },
        { name: 'Certification', key: 'certification', icon: Award },
        { name: 'Level', key: 'level', icon: TrendingUp },
        { name: 'Duration', key: 'duration', icon: ClockIcon },
        { name: 'Prerequisites', key: 'prerequisites', icon: Book },
        { name: 'Learning Outcomes', key: 'outcomes', icon: Target },
        { name: 'Author', key: 'author', icon: User },
        { name: 'Institution', key: 'institution', icon: Building },
        { name: 'Language', key: 'language', icon: Globe },
        { name: 'Completion Rate', key: 'completionRate', icon: Percent },
        { name: 'Resources', key: 'resources', icon: Archive },
        { name: 'Case Studies', key: 'caseStudies', icon: FileText }
      ]
    : items.every(item => item.type === 'tool')
    ? [
        { name: 'API Access', key: 'api', icon: Code },
        { name: 'Cloud Support', key: 'cloud', icon: Cloud },
        { name: 'Integration', key: 'integration', icon: GitBranch },
        { name: 'Features Count', key: 'features', icon: Hash },
        { name: 'Support', key: 'support', icon: HelpCircle },
        { name: 'Pricing', key: 'pricing', icon: DollarSign },
        { name: 'Users', key: 'users', icon: Users },
        { name: 'Platforms', key: 'platforms', icon: Monitor },
        { name: 'Use Cases', key: 'useCases', icon: Target },
        { name: 'Developer', key: 'developer', icon: User },
        { name: 'License', key: 'license', icon: FileText },
        { name: 'Documentation', key: 'documentation', icon: Book },
        { name: 'Tutorials', key: 'tutorials', icon: Play },
        { name: 'Plugins', key: 'plugins', icon: Puzzle },
        { name: 'Security', key: 'security', icon: Shield }
      ]
    : [
        { name: 'Rating', key: 'rating', icon: Star },
        { name: 'Category', key: 'category', icon: Tag },
        { name: 'Type', key: 'type', icon: Layers },
        { name: 'Release Date', key: 'releaseDate', icon: Calendar },
        { name: 'Tags', key: 'tags', icon: HashIcon },
        { name: 'Description', key: 'description', icon: FileText }
      ];

  return (
    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Grid className="w-6 h-6 text-cyan-400" />
          Detailed Comparison Matrix
        </h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-colors">
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left pb-4 text-gray-400 font-normal">Features</th>
              {items.map((item) => (
                <th key={item.id} className="pb-4 px-4 min-w-[250px]">
                  <div className="flex flex-col items-center">
                    <div className="font-bold text-white truncate w-full text-center">{item.title}</div>
                    <div className="flex items-center gap-1 text-cyan-400 text-sm mt-1">
                      {item.type === 'playbook' ? (
                        <BookOpen className="w-4 h-4" />
                      ) : (
                        <Settings className="w-4 h-4" />
                      )}
                      {item.category}
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={feature.key} className={index % 2 === 0 ? 'bg-gray-800/20' : ''}>
                <td className="py-4 pr-4 font-medium text-gray-300 flex items-center gap-2">
                  <feature.icon className="w-4 h-4 text-cyan-400" />
                  {feature.name}
                </td>
                {items.map((item) => (
                  <td key={`${item.id}-${feature.key}`} className="py-4 px-4 text-center">
                    {typeof item[feature.key] === 'boolean' ? (
                      item[feature.key] ? (
                        <div className="inline-flex items-center gap-1 text-green-400">
                          <CheckCircle className="w-5 h-5" />
                          Yes
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1 text-red-400">
                          <XCircle className="w-5 h-5" />
                          No
                        </div>
                      )
                    ) : Array.isArray(item[feature.key]) ? (
                      <div className="text-left">
                        <ul className="space-y-1">
                          {item[feature.key].slice(0, 3).map((val: string, idx: number) => (
                            <li key={idx} className="text-white text-sm flex items-start gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                              <span>{val}</span>
                            </li>
                          ))}
                          {item[feature.key].length > 3 && (
                            <li className="text-gray-400 text-sm">+{item[feature.key].length - 3} more</li>
                          )}
                        </ul>
                      </div>
                    ) : typeof item[feature.key] === 'string' && item[feature.key].length > 30 ? (
                      <div className="text-white font-medium text-sm" title={item[feature.key]}>
                        {item[feature.key].substring(0, 30)}...
                      </div>
                    ) : (
                      <span className="text-white font-medium">{item[feature.key]}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Holographic Item Orb Component
const HolographicItemOrb = ({ 
  item, 
  isSelected, 
  onSelect, 
  position 
}: {
  item: any;
  isSelected: boolean;
  onSelect: () => void;
  position: { x: number; y: number; z: number };
}) => {
  return (
    <motion.div
      className={`absolute rounded-full flex items-center justify-center cursor-pointer ${
        isSelected ? 'ring-4 ring-cyan-400/50' : ''
      }`}
      style={{
        left: `${50 + position.x}%`,
        top: `${50 + position.y}%`,
        width: '160px',
        height: '160px',
        background: isSelected 
          ? item.type === 'playbook'
            ? 'radial-gradient(circle, rgba(6,182,212,0.8) 0%, rgba(29,78,216,0.6) 100%)'
            : 'radial-gradient(circle, rgba(139,92,246,0.8) 0%, rgba(124,58,237,0.6) 100%)'
          : 'radial-gradient(circle, rgba(55,65,81,0.8) 0%, rgba(31,41,55,0.6) 100%)',
        boxShadow: isSelected 
          ? item.type === 'playbook'
            ? '0 0 30px rgba(6,182,212,0.5)'
            : '0 0 30px rgba(139,92,246,0.5)'
          : '0 0 15px rgba(55,65,81,0.3)',
        transform: `translate(-50%, -50%) translateZ(${position.z}px)`
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onSelect}
    >
      <div className="text-center p-3">
        <div className="font-bold text-white text-sm truncate">
          {item.title.split(' ').slice(0, 3).join(' ')}
        </div>
        <div className="text-cyan-300 text-xs mt-1 flex items-center justify-center gap-1">
          {item.type === 'playbook' ? (
            <BookOpen className="w-3 h-3" />
          ) : (
            <Settings className="w-3 h-3" />
          )}
          {item.rating} ★
        </div>
        <div className="text-gray-300 text-xs mt-1 truncate">
          {item.category}
        </div>
        <div className="text-gray-400 text-xs mt-1">
          {item.type === 'playbook' ? item.level : item.pricing}
        </div>
      </div>
    </motion.div>
  );
};

// Neural Engine Visualization Component
const HolographicVisualization = ({ items }: { items: any[] }) => {
  // Calculate angles for positioning
  const angles = items.map((_, index) => (360 / items.length) * index);
  
  return (
    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Brain className="w-6 h-6 text-cyan-400" />
          Holographic Comparison Visualization
        </h2>
        <div className="text-gray-400 text-sm">
          Interactive 3D visualization of selected items
        </div>
      </div>
      
      <div className="relative h-96 overflow-hidden rounded-2xl bg-gray-900/50 border border-gray-700 flex items-center justify-center">
        <div className="relative w-64 h-64 rounded-full border-2 border-cyan-500/30 flex items-center justify-center">
          {items.map((item, index) => {
            const angle = angles[index];
            const radius = 120;
            const x = radius * Math.cos((angle - 90) * Math.PI / 180);
            const y = radius * Math.sin((angle - 90) * Math.PI / 180);
            
            return (
              <HolographicItemOrb 
                key={item.id}
                item={item}
                isSelected={true}
                onSelect={() => {}}
                position={{ x, y, z: 0 }}
              />
            );
          })}
          
          <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-pulse"></div>
          <div className="absolute inset-4 rounded-full bg-gray-800/50 flex items-center justify-center">
            <Network className="w-8 h-8 text-cyan-400" />
          </div>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex justify-center gap-8">
            {items.map((item, index) => (
              <div key={item.id} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${item.type === 'playbook' ? 'bg-amber-500' : 'bg-purple-500'}`}></div>
                <span className="text-gray-300 text-sm">{item.title.split(' ').slice(0, 2).join(' ')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// AI Recommendation Engine Component
const AIRecommendationEngine = ({ items }: { items: any[] }) => {
  // Simple recommendation logic based on highest rated
  const topRated = items.length > 0 ? [...items].sort((a, b) => b.rating - a.rating)[0] : null;
  
  // Recommendation based on type mix
  const hasPlaybooks = items.some(i => i.type === 'playbook');
  const hasTools = items.some(i => i.type === 'tool');
  const mixedRecommendation = hasPlaybooks && hasTools 
    ? "You've selected a perfect mix of learning resources and practical tools!"
    : hasPlaybooks 
    ? "Consider adding complementary tools to enhance your learning experience."
    : "Consider adding relevant playbooks to deepen your understanding.";

  return (
    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-cyan-400" />
        AI-Powered Recommendations
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {topRated && (
          <motion.div 
            className="bg-gradient-to-br from-amber-900/30 to-amber-800/20 rounded-2xl p-6 border border-amber-500/30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-amber-400 fill-current" />
              <h3 className="font-bold text-white">Top Rated Selection</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Based on community ratings, this {topRated.type} offers exceptional value.
            </p>
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="font-bold text-white flex items-center gap-2">
                {topRated.type === 'playbook' ? (
                  <BookOpen className="w-5 h-5 text-amber-400" />
                ) : (
                  <Settings className="w-5 h-5 text-purple-400" />
                )}
                {topRated.title}
              </div>
              <div className="text-amber-400 text-sm mt-1">{topRated.rating} ★ Rating</div>
              <NextLink href={`/${topRated.type}s/${topRated.id}`} className="inline-flex items-center gap-1 text-cyan-400 mt-3 text-sm hover:underline">
                View Details <ChevronRight className="w-4 h-4" />
              </NextLink>
            </div>
          </motion.div>
        )}
        
        <motion.div 
          className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-2xl p-6 border border-purple-500/30"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-purple-400" />
            <h3 className="font-bold text-white">AI Insight</h3>
          </div>
          <p className="text-gray-300 mb-4">
            {mixedRecommendation}
          </p>
          <div className="bg-gray-800/50 rounded-xl p-4">
            <div className="font-bold text-white mb-2">Next Steps:</div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                Explore related {hasPlaybooks ? 'tools' : 'playbooks'}
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                Check for integration possibilities
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                Review user feedback and case studies
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
      
      {/* Additional Recommendations */}
      {items.length > 0 && (
        <div className="mt-8 bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
          <h3 className="font-bold text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-cyan-400" />
            Personalized Recommendations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-700/50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="font-medium text-white">Based on your selection</span>
              </div>
              <p className="text-gray-300 text-sm">
                {items[0]?.category} resources with high ratings
              </p>
            </div>
            <div className="bg-gray-700/50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-green-400" />
                <span className="font-medium text-white">Recently updated</span>
              </div>
              <p className="text-gray-300 text-sm">
                New releases in {items[0]?.type === 'playbook' ? 'learning' : 'tool'} category
              </p>
            </div>
            <div className="bg-gray-700/50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Tag className="w-4 h-4 text-blue-400" />
                <span className="font-medium text-white">Popular tags</span>
              </div>
              <p className="text-gray-300 text-sm">
                Resources tagged with "{items[0]?.tags[0]}"
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Similar Items */}
      <div className="mt-8 bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
        <h3 className="font-bold text-white mb-4 flex items-center gap-2">
          <Compass className="w-5 h-5 text-cyan-400" />
          Similar Items You Might Like
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {allItems
            .filter(item => !items.some(selected => selected.id === item.id))
            .slice(0, 4)
            .map(item => (
              <div key={item.id} className="bg-gray-700/50 rounded-xl p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  {item.type === 'playbook' ? (
                    <BookOpen className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Settings className="w-4 h-4 text-purple-400" />
                  )}
                </div>
                <div className="font-bold text-white text-sm truncate">
                  {item.title.split(' ').slice(0, 3).join(' ')}
                </div>
                <div className="text-cyan-300 text-xs mt-1 flex items-center justify-center gap-1">
                  <Star className="w-3 h-3" />
                  {item.rating} ★
                </div>
                <div className="text-gray-300 text-xs mt-1 truncate">
                  {item.category}
                </div>
                <div className="text-gray-400 text-xs mt-1">
                  {item.type === 'playbook' ? (item as any)?.level || 'N/A' : (item as any)?.pricing || 'N/A'}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const ComparePage = () => {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [itemTypeFilter, setItemTypeFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const toggleItemSelection = (item: any) => {
    if (selectedItems.some(i => i.id === item.id)) {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    } else if (selectedItems.length < 2) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium Comparison Hub
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compare AI playbooks and tools side-by-side to make informed decisions for your projects
          </p>
        </div>

        <PremiumItemSelector 
          allItems={allItems}
          selectedItems={selectedItems}
          toggleItemSelection={toggleItemSelection}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          itemTypeFilter={itemTypeFilter}
          setItemTypeFilter={setItemTypeFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {selectedItems.length === 2 && (
          <>
            <div className="my-12">
              <PremiumComparisonMatrix items={selectedItems} />
            </div>
            
            <div className="my-12">
              <HolographicVisualization items={selectedItems} />
            </div>
            
            <div className="my-12">
              <AIRecommendationEngine items={selectedItems} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ComparePage;