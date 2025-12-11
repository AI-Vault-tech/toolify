'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Boxes, 
  BookOpen, 
  Users, 
  BarChart2, 
  ArrowRight, 
  Search, 
  PlusCircle,
  Zap,
  TrendingUp,
  Star,
  Clock,
  FileText,
  LayoutDashboard,
  Bookmark,
  Settings,
  LogOut,
  ChevronDown,
  Bell,
  User,
  BrainCircuit,
  Network,
  Activity,
  Sparkles,
  Brain,
  Globe,
  BarChart3,
  Lightbulb,
  Zap as ZapIcon,
  BrainCog,
  ChevronUp,
  ChevronRight,
  BarChart4,
  Cpu,
  Database,
  Server,
  HardDrive,
  Activity as ActivityIcon,
  RefreshCw,
  Mic,
  Target,
  Code,
  Image,
  Languages,
  Heart,
  MessageSquare,
  Workflow,
  Video,
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react';
import { useToast } from '@/components/ui/toaster';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import AIChatbot from '@/components/ui/ai-assistant';
import { ParticlesBackground } from '@/components/ui/particles-bg';

// Dynamic import for 3D neural network (client-side only)
const NeuralNetwork = dynamic(
  () => import('@/components/ui/neural-network').then((mod) => mod.NeuralNetwork),
  { ssr: false }
);

// Simple chart component for demonstration
const LineChart = ({ data, color = 'blue' }: { data: number[], color?: string }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  
  return (
    <div className="h-12 w-full flex items-end">
      {data.map((value, i) => {
        const height = ((value - min) / range) * 100;
        return (
          <div 
            key={i}
            className={`flex-1 mx-0.5 rounded-t-sm bg-gradient-to-t from-${color}-500 to-${color}-300`}
            style={{ height: `${Math.max(10, height)}%` }}
          />
        );
      })}
    </div>
  );
};

// Performance Metric Card
const MetricCard = ({ title, value, change, icon: Icon, color }: { 
  title: string; 
  value: string; 
  change: string; 
  icon: any;
  color: string;
}) => {
  const isPositive = change.startsWith('+');
  
  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-2xl text-white`}>
          <Icon className="w-6 h-6" />
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${isPositive ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
          {change}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
      <p className="text-sm text-gray-400">{title}</p>
    </div>
  );
};

const stats = [
  { 
    id: 'ai-tools',
    title: 'AI Tools Network',
    value: '1,234',
    change: '+12%',
    description: 'Active nodes in the neural network',
    icon: BrainCircuit,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'users',
    title: 'Conscious Users',
    value: '8,542',
    change: '+24%',
    description: 'Connected minds in the collective',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'research',
    title: 'Knowledge Base',
    value: '5,678',
    change: '+8%',
    description: 'Research papers indexed',
    icon: BookOpen,
    color: 'from-indigo-500 to-purple-600',
  },
  {
    id: 'activity',
    title: 'Platform Activity',
    value: '124K',
    change: '+32%',
    description: 'Monthly neural interactions',
    icon: Activity,
    color: 'from-yellow-400 to-orange-500',
  },
];

const quickActions = [
  {
    id: 'new-tool',
    title: 'Inject New Tool',
    description: 'Add AI entity to the network',
    icon: Zap,
    color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    href: '/tools/submit'
  },
  {
    id: 'explore',
    title: 'Explore Matrix',
    description: 'Navigate AI tool network',
    icon: Network,
    color: 'bg-gradient-to-br from-purple-500 to-pink-500',
    href: '/tools'
  },
  {
    id: 'research',
    title: 'Access Knowledge',
    description: 'Browse research library',
    icon: Brain,
    color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    href: '/research-news'
  },
  {
    id: 'analytics',
    title: 'Analyze Cortex',
    description: 'Deep platform analytics',
    icon: BarChart3,
    color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    href: '/analytics'
  }
];

const recentActivity = [
  { 
    id: 1, 
    type: 'new_tool', 
    title: 'New AI Tool Added', 
    description: 'GPT-5 was added to the directory', 
    time: '5 min ago', 
    icon: Zap,
    iconColor: 'text-yellow-400'
  },
  { 
    id: 2, 
    type: 'update', 
    title: 'Platform Update', 
    description: 'New search filters added', 
    time: '2 hours ago', 
    icon: TrendingUp,
    iconColor: 'text-blue-400'
  },
  { 
    id: 3, 
    type: 'featured', 
    title: 'Featured Tool', 
    description: 'Midjourney v6 is now featured', 
    time: '1 day ago', 
    icon: Star,
    iconColor: 'text-purple-400'
  },
  { 
    id: 4, 
    type: 'research', 
    title: 'New Research Paper', 
    description: 'Advancements in LLM architectures', 
    time: '2 days ago', 
    icon: FileText,
    iconColor: 'text-green-400'
  },
];

// System resource type
type ResourceType = 'cpu' | 'memory' | 'storage' | 'network';

// System resource data type
type ResourceData = {
  type: ResourceType;
  name: string;
  value: number;
  max: number;
  unit: string;
  icon: any;
  color: string;
  data: number[];
};

export default function DashboardPage() {
  const { addToast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [neuralActivity, setNeuralActivity] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [holographicEffect, setHolographicEffect] = useState({ x: 0, y: 0 });
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  // Voice command state
  const [isListening, setIsListening] = useState(false);
  const [voiceCommand, setVoiceCommand] = useState('');
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // New: Live feed simulation
  const [liveFeed, setLiveFeed] = useState([
    { id: 1, type: 'model', name: 'GPT-4', action: 'completed training cycle', time: 'Just now' },
    { id: 2, type: 'data', name: 'Image Dataset', action: 'processed 10,000 images', time: '2 min ago' },
    { id: 3, type: 'user', name: 'Alex Johnson', action: 'deployed new model', time: '5 min ago' },
    { id: 4, type: 'system', name: 'Cluster Node 3', action: 'performance optimized', time: '10 min ago' },
    { id: 5, type: 'model', name: 'Claude 2', action: 'started inference batch', time: '15 min ago' },
  ]);

  // New: Performance metrics over time
  const [performanceMetrics, setPerformanceMetrics] = useState({
    latency: [45, 52, 38, 61, 49, 55, 42],
    throughput: [1200, 1350, 1100, 1420, 1280, 1360, 1450],
    accuracy: [96.5, 97.2, 95.8, 98.1, 97.6, 97.9, 98.3],
  });

  // New: Security alerts
  const [securityAlerts, setSecurityAlerts] = useState([
    { id: 1, level: 'medium', title: 'Unusual API activity detected', description: '320% increase in API calls from unknown IP', time: '1 hour ago' },
    { id: 2, level: 'low', title: 'Certificate expiration warning', description: 'SSL certificate expires in 30 days', time: '2 hours ago' },
    { id: 3, level: 'high', title: 'Failed login attempts', description: '5 consecutive failed login attempts blocked', time: '4 hours ago' },
  ]);

  // New: Cost analytics
  const [costAnalytics, setCostAnalytics] = useState({
    compute: 1245.75,
    storage: 324.50,
    bandwidth: 187.25,
    total: 1757.50,
  });

  // New: Prediction Accuracy Data
  const [predictionAccuracy, setPredictionAccuracy] = useState([
    { month: 'Jan', accuracy: 92 },
    { month: 'Feb', accuracy: 94 },
    { month: 'Mar', accuracy: 95 },
    { month: 'Apr', accuracy: 96 },
    { month: 'May', accuracy: 97 },
    { month: 'Jun', accuracy: 98 },
  ]);

  // New: AI Projects
  const [aiProjects, setAiProjects] = useState([
    { id: 1, name: 'Natural Language Processing', progress: 75, status: 'In Progress', team: 'NLP Team', deadline: '2024-01-15' },
    { id: 2, name: 'Computer Vision System', progress: 40, status: 'In Progress', team: 'Vision Team', deadline: '2024-02-28' },
    { id: 3, name: 'Predictive Analytics', progress: 90, status: 'Review', team: 'Data Science', deadline: '2023-12-30' },
    { id: 4, name: 'Speech Recognition', progress: 20, status: 'Planning', team: 'Audio Team', deadline: '2024-03-15' },
  ]);

  // New: Notifications
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'alert', title: 'High CPU Usage Detected', message: 'Server cluster experiencing 85% CPU utilization', time: '5 min ago', unread: true },
    { id: 2, type: 'info', title: 'New Model Deployment', message: 'GPT-5 model successfully deployed to production', time: '2 hours ago', unread: false },
    { id: 3, type: 'warning', title: 'Storage Threshold Warning', message: 'Storage capacity reaching 90% threshold', time: '1 day ago', unread: false },
    { id: 4, type: 'success', title: 'Training Completed', message: 'Neural network training phase 2 completed successfully', time: '2 days ago', unread: false },
  ]);

  // New: Data Processing Stats
  const [dataProcessingStats, setDataProcessingStats] = useState([
    { name: 'Images Processed', value: '2.4M', change: '+12%', icon: Image },
    { name: 'Text Analyzed', value: '1.8B', change: '+8%', icon: FileText },
    { name: 'Audio Transcribed', value: '856K', change: '+24%', icon: Mic },
    { name: 'Videos Analyzed', value: '423K', change: '+15%', icon: Video },
  ]);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      if (recognitionRef.current) {
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;

        recognitionRef.current.onresult = (event: any) => {
          const transcript = Array.from(event.results)
            .map((result: any) => result[0])
            .map((result) => result.transcript)
            .join('');
          
          setVoiceCommand(transcript);
          
          // Process commands
          const command = transcript.toLowerCase();
          if (command.includes('refresh')) {
            addToast('Refreshing dashboard...', 'info');
            // Add refresh logic here
          } else if (command.includes('dark mode')) {
            document.documentElement.classList.add('dark');
            addToast('Switched to dark mode', 'success');
          } else if (command.includes('light mode')) {
            document.documentElement.classList.remove('dark');
            addToast('Switched to light mode', 'success');
          }
        };

        recognitionRef.current.onerror = (event: any) => {
          console.error('Speech recognition error', event.error);
          setIsListening(false);
        };
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [addToast]);

  const toggleVoiceControl = useCallback(() => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      if (voiceCommand) {
        setVoiceCommand('');
      }
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
        addToast('Listening for commands...', 'info');
      } catch (err) {
        console.error('Speech recognition error:', err);
        addToast('Error: Could not access microphone', 'error');
      }
    }
  }, [isListening, voiceCommand, addToast]);

  const [resources, setResources] = useState<ResourceData[]>([
    {
      type: 'cpu',
      name: 'CPU Usage',
      value: 0,
      max: 100,
      unit: '%',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-400',
      data: Array(12).fill(0).map(() => Math.random() * 100)
    },
    {
      type: 'memory',
      name: 'Memory',
      value: 0,
      max: 32,
      unit: 'GB',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      data: Array(12).fill(0).map(() => Math.random() * 100)
    },
    {
      type: 'storage',
      name: 'Storage',
      value: 0,
      max: 512,
      unit: 'GB',
      icon: HardDrive,
      color: 'from-yellow-500 to-orange-500',
      data: Array(12).fill(0).map(() => Math.random() * 100)
    },
    {
      type: 'network',
      name: 'Network',
      value: 0,
      max: 1000,
      unit: 'Mbps',
      icon: ActivityIcon,
      color: 'from-green-500 to-teal-400',
      data: Array(12).fill(0).map(() => Math.random() * 100)
    }
  ]);
  
  // Add holographic effect to cards on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardsRef.current.length === 0) return;
      
      cardsRef.current.forEach((card) => {
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        card.style.boxShadow = `${-angleY}px ${angleX}px 30px rgba(0, 0, 0, 0.2)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Card hover effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update card transforms
      cardsRef.current.forEach((card) => {
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        card.style.boxShadow = `${-angleY}px ${angleX}px 30px rgba(0, 0, 0, 0.2)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Simulate neural activity and resource usage
  useEffect(() => {
    const interval = setInterval(() => {
      const activity = Math.random() * 100;
      setNeuralActivity(activity);
      
      // Update resource data
      setResources(prev => prev.map(resource => ({
        ...resource,
        value: Math.min(
          resource.max,
          Math.max(0, resource.value + (Math.random() * 10 - 4.5))
        ),
        data: [...resource.data.slice(1), Math.random() * 100]
      })));
    }, 2000);
    
    // Initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
      addToast('Dashboard loaded successfully!', 'success');
    }, 1000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [addToast]);
  
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  // Add premium data for the enhanced dashboard
  const premiumStats = [
    {
      id: 'global-reach',
      title: 'Global Reach',
      value: '1.2M',
      change: '+12.5%',
      description: 'Active users across all platforms',
      icon: Globe,
      color: 'from-purple-500 to-indigo-500',
    },
    {
      id: 'ai-models',
      title: 'AI Models',
      value: '47',
      change: '+5',
      description: 'Active neural networks',
      icon: Brain,
      color: 'from-pink-500 to-rose-500',
    },
    {
      id: 'api-requests',
      title: 'API Requests',
      value: '24.8K',
      change: '+32%',
      description: 'Per minute average',
      icon: Zap,
      color: 'from-amber-500 to-orange-500',
    },
    {
      id: 'accuracy',
      title: 'Model Accuracy',
      value: '99.7%',
      change: '+0.2%',
      description: 'Average prediction accuracy',
      icon: Target,
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  // Additional tools and features
  const aiTools = [
    {
      id: 'code-generator',
      title: 'AI Code Generator',
      description: 'Generate code snippets in multiple programming languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      stats: '1.2k uses today'
    },
    {
      id: 'data-analyzer',
      title: 'Data Analyzer',
      description: 'Advanced data analysis and visualization',
      icon: BarChart4,
      color: 'from-purple-500 to-pink-500',
      stats: '850 uses today'
    },
    {
      id: 'image-recognition',
      title: 'Image Recognition',
      description: 'AI-powered image analysis and tagging',
      icon: Image,
      color: 'from-green-500 to-emerald-500',
      stats: '2.1k uses today'
    },
    {
      id: 'speech-to-text',
      title: 'Speech to Text',
      description: 'Convert speech to accurate text in real-time',
      icon: Mic,
      color: 'from-red-500 to-orange-500',
      stats: '1.5k uses today'
    },
    {
      id: 'language-translator',
      title: 'Language Translator',
      description: 'Translate text between 100+ languages',
      icon: Languages,
      color: 'from-indigo-500 to-blue-500',
      stats: '3.4k uses today'
    },
    {
      id: 'sentiment-analyzer',
      title: 'Sentiment Analysis',
      description: 'Analyze emotions and opinions in text',
      icon: Heart,
      color: 'from-rose-500 to-pink-500',
      stats: '980 uses today'
    },
    {
      id: 'document-analyzer',
      title: 'Document Analysis',
      description: 'Extract insights from documents and PDFs',
      icon: FileText,
      color: 'from-amber-500 to-yellow-500',
      stats: '1.7k uses today'
    },
    {
      id: 'chatbot-builder',
      title: 'Chatbot Builder',
      description: 'Create AI-powered chatbots without coding',
      icon: MessageSquare,
      color: 'from-teal-500 to-cyan-500',
      stats: '2.3k uses today'
    },
  ];

  // Recent activities
  const recentActivities = [
    {
      id: 1,
      user: 'Alex Johnson',
      action: 'trained a new model',
      time: '2 minutes ago',
      icon: BrainCircuit,
      color: 'text-purple-400'
    },
    {
      id: 2,
      user: 'Sarah Miller',
      action: 'deployed API endpoint',
      time: '15 minutes ago',
      icon: Cpu,
      color: 'text-blue-400'
    },
    {
      id: 3,
      user: 'Michael Chen',
      action: 'updated dataset',
      time: '1 hour ago',
      icon: Database,
      color: 'text-green-400'
    },
    {
      id: 4,
      user: 'Emma Wilson',
      action: 'created new workflow',
      time: '3 hours ago',
      icon: Workflow,
      color: 'text-amber-400'
    },
    {
      id: 5,
      user: 'David Kim',
      action: 'optimized model parameters',
      time: '5 hours ago',
      icon: Settings,
      color: 'text-cyan-400'
    }
  ];

  // Team members
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'AI Research Lead',
      avatar: 'AJ',
      status: 'online',
      color: 'bg-purple-500'
    },
    {
      id: 2,
      name: 'Sarah Miller',
      role: 'ML Engineer',
      avatar: 'SM',
      status: 'away',
      color: 'bg-blue-500'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Data Scientist',
      avatar: 'MC',
      status: 'offline',
      color: 'bg-green-500'
    },
    {
      id: 4,
      name: 'Emma Wilson',
      role: 'UX Designer',
      avatar: 'EW',
      status: 'online',
      color: 'bg-pink-500'
    },
    {
      id: 5,
      name: 'David Kim',
      role: 'DevOps Engineer',
      avatar: 'DK',
      status: 'online',
      color: 'bg-amber-500'
    }
  ];

  // New: AI Model Performance Data
  const modelPerformance = [
    { name: 'GPT-4', accuracy: 98.7, latency: 120, usage: 42 },
    { name: 'Claude 2', accuracy: 97.3, latency: 95, usage: 28 },
    { name: 'LLaMA 2', accuracy: 95.8, latency: 210, usage: 18 },
    { name: 'PaLM 2', accuracy: 96.9, latency: 150, usage: 12 },
  ];

  // New: Upcoming Events
  const upcomingEvents = [
    { id: 1, title: 'AI Ethics Workshop', date: '2023-12-15', time: '14:00', attendees: 42 },
    { id: 2, title: 'Neural Network Optimization', date: '2023-12-18', time: '10:30', attendees: 28 },
    { id: 3, title: 'Quantum Computing & AI', date: '2023-12-22', time: '16:00', attendees: 35 },
  ];

  // New: Resource Utilization
  const resourceUtilization = [
    { name: 'GPU Cluster A', usage: 78, status: 'high', color: 'from-red-500 to-orange-500' },
    { name: 'GPU Cluster B', usage: 45, status: 'normal', color: 'from-green-500 to-emerald-500' },
    { name: 'Storage Array 1', usage: 62, status: 'normal', color: 'from-blue-500 to-cyan-500' },
    { name: 'Memory Pool', usage: 85, status: 'critical', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Enhanced Background Effects */}
      <ParticlesBackground />
      
      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden opacity-30">
        <div className="absolute top-1/4 -left-40 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full mix-blend-soft-light filter blur-[100px] animate-float"></div>
        <div className="absolute top-2/3 right-0 w-[1000px] h-[1000px] bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full mix-blend-soft-light filter blur-[120px] animate-float animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full mix-blend-soft-light filter blur-[80px] animate-float animation-delay-4000"></div>
        {/* Extra orbs for ultra premium effect */}
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-indigo-600/25 to-blue-600/25 rounded-full mix-blend-soft-light filter blur-[90px] animate-pulse animation-delay-3000"></div>
        <div className="absolute top-3/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-pink-600/20 to-rose-600/20 rounded-full mix-blend-soft-light filter blur-[70px] animate-pulse animation-delay-5000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/15 to-teal-500/15 rounded-full mix-blend-soft-light filter blur-[100px] animate-pulse animation-delay-6000"></div>
      </div>
      
      {/* Interactive 3D Neural Network Background */}
      <div className="fixed inset-0 -z-10 opacity-15 pointer-events-none">
        <NeuralNetwork />
      </div>
      
      {/* Voice Command Indicator */}
      <div className={`fixed top-24 right-6 z-50 transition-all duration-300 ${isListening ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping"></div>
          <div className="relative flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/90 to-cyan-600/90 backdrop-blur-sm rounded-full text-white text-sm font-medium shadow-lg">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
            {voiceCommand || 'Listening...'}
          </div>
        </div>
      </div>
      
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90 backdrop-blur-md border-b border-gray-800/50 shadow-2xl shadow-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Nexus Cortex
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Neural Command Center • Last updated: Just now
              </p>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto">
              <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gray-800/50 text-xs sm:text-sm text-gray-300 flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                <span className="hidden sm:inline">Neural Network: </span>{Math.floor(neuralActivity)}%
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => addToast('Refreshing dashboard...', 'info')}
                  className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/80 text-gray-400 hover:text-white transition-colors group"
                  aria-label="Refresh"
                >
                  <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
                </button>
                <button 
                  onClick={toggleVoiceControl}
                  className={`p-2 rounded-full transition-all duration-300 ${isListening 
                    ? 'bg-red-500/20 text-red-400 ring-2 ring-red-500/50' 
                    : 'bg-gray-800/50 hover:bg-gray-800/80 text-gray-400 hover:text-white'}`}
                  aria-label={isListening ? 'Stop listening' : 'Start voice control'}
                >
                  <Mic className="w-5 h-5" />
                </button>
                {/* Notification Bell */}
                <div className="relative">
                  <button className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/80 text-gray-400 hover:text-white transition-colors group">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12 py-8 relative">
        {/* Floating 3D Elements */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-full mix-blend-overlay filter blur-3xl animate-float animation-delay-3000"></div>
        
        {/* AI Assistant */}
        <AIChatbot />
        
        {/* Ultra Premium Banner */}
        <div className="mb-10 bg-gradient-to-r from-indigo-900/90 via-purple-900/80 to-blue-900/90 backdrop-blur-sm rounded-2xl p-8 border border-indigo-800/50 relative overflow-hidden transform transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-indigo-500/10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre-v2.png')] opacity-10"></div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full filter blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200 mb-2">Nexus Cortex Premium</h2>
                <p className="text-indigo-100 max-w-2xl">
                  Unlock the full potential of your AI infrastructure with advanced analytics, priority support, and exclusive features.
                </p>
              </div>
              <button className="mt-4 md:mt-0 px-6 py-2.5 bg-white text-indigo-900 rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:scale-105">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
        
        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {premiumStats.map((stat) => (
            <div 
              key={stat.id}
              ref={(el) => {
                if (el) cardsRef.current.push(el);
              }}
              className="bg-gradient-to-br from-gray-900/90 to-gray-950/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 transform hover:-translate-y-1.5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-20`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-900/30 text-green-400">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-300 font-medium">{stat.title}</p>
              <p className="text-xs text-gray-400 mt-1">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* New: AI Model Performance and AI Projects Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* AI Model Performance */}
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-950/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">AI Model Performance</h2>
              <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center">
                View Detailed Analytics <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modelPerformance.map((model, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-5 border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h3 className="font-semibold text-white mb-3">{model.name}</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Accuracy</span>
                        <span className="text-white font-medium">{model.accuracy}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                          style={{ width: `${model.accuracy}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Latency</span>
                        <span className="text-white font-medium">{model.latency}ms</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            model.latency < 100 ? 'bg-gradient-to-r from-green-500 to-emerald-400' : 
                            model.latency < 200 ? 'bg-gradient-to-r from-yellow-500 to-orange-400' : 
                            'bg-gradient-to-r from-red-500 to-orange-500'
                          }`}
                          style={{ width: `${Math.min(100, model.latency / 3)}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Usage</span>
                        <span className="text-white font-medium">{model.usage}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                          style={{ width: `${model.usage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Projects */}
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-950/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">AI Projects</h2>
              <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center">
                View All Projects <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="space-y-5">
              {aiProjects.map((project) => (
                <div key={project.id} className="p-4 bg-gray-800/30 rounded-xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium text-white">{project.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.status === 'In Progress' ? 'bg-blue-900/30 text-blue-400' :
                      project.status === 'Review' ? 'bg-yellow-900/30 text-yellow-400' :
                      'bg-gray-900/30 text-gray-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-white font-medium">{project.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Team: {project.team}</span>
                    <span>Due: {project.deadline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics Visualization */}
        <div className="mb-12 bg-gradient-to-br from-gray-900/90 to-gray-950/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Performance Metrics</h2>
            <div className="flex space-x-2">
              <button className="text-xs px-3 py-1 rounded-full bg-indigo-600/30 text-indigo-300 transition-colors">
                Latency
              </button>
              <button className="text-xs px-3 py-1 rounded-full bg-gray-800/50 hover:bg-gray-800/80 text-gray-300 hover:text-white transition-colors">
                Throughput
              </button>
              <button className="text-xs px-3 py-1 rounded-full bg-gray-800/50 hover:bg-gray-800/80 text-gray-300 hover:text-white transition-colors">
                Accuracy
              </button>
            </div>
          </div>
          <div className="h-64 flex items-end space-x-1 justify-center">
            {performanceMetrics.latency.map((value, index) => (
              <div key={index} className="flex flex-col items-center group flex-1 max-w-[40px]">
                <div className="text-xs text-gray-400 mb-2 group-hover:text-white transition-colors">
                  {value}ms
                </div>
                <div 
                  className="w-full bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t-lg transition-all duration-300 group-hover:from-indigo-500 group-hover:to-purple-400 min-h-[20px]"
                  style={{ height: `${(value / Math.max(...performanceMetrics.latency)) * 200}px` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-8 text-sm text-gray-500">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>

        {/* New: Prediction Accuracy Chart */}
        <div className="mb-12 bg-gradient-to-br from-gray-900/90 to-gray-950/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Prediction Accuracy Trend</h2>
            <div className="flex space-x-2">
              <button className="text-xs px-3 py-1 rounded-full bg-gray-800/50 hover:bg-gray-800/80 text-gray-300 hover:text-white transition-colors">
                6 Months
              </button>
              <button className="text-xs px-3 py-1 rounded-full bg-indigo-600/30 text-indigo-300 transition-colors">
                1 Year
              </button>
            </div>
          </div>
          <div className="h-64 flex items-end space-x-2 justify-center">
            {predictionAccuracy.map((item, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="text-xs text-gray-400 mb-2 group-hover:text-white transition-colors">
                  {item.accuracy}%
                </div>
                <div 
                  className="w-12 bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t-lg transition-all duration-300 group-hover:from-indigo-500 group-hover:to-purple-400"
                  style={{ height: `${item.accuracy}%` }}
                ></div>
                <div className="text-xs text-gray-500 mt-2">
                  {item.month}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Tools Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">AI Tools & Features</h2>
            <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              View All Tools <ChevronRight className="inline w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {aiTools.map((tool) => (
              <div 
                key={tool.id}
                className="bg-gradient-to-br from-gray-900/90 to-gray-950/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4`}>
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{tool.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{tool.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{tool.stats}</span>
                  <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                    Try Now <ChevronRight className="inline w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New: Data Processing Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dataProcessingStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900/90 to-gray-950/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-900/30 text-green-400">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-400">{stat.name}</p>
              </div>
            );
          })}
        </div>

        {/* New: Resource Utilization and Upcoming Events Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Resource Utilization */}
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-950/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
            <h2 className="text-xl font-semibold text-white mb-6">Resource Utilization</h2>
            <div className="space-y-5">
              {resourceUtilization.map((resource, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${resource.color} mr-3`}></div>
                    <span className="text-gray-300 font-medium">{resource.name}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-gray-800 rounded-full mr-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${resource.color} rounded-full`}
                        style={{ width: `${resource.usage}%` }}
                      ></div>
                    </div>
                    <span className={`text-sm font-medium ${
                      resource.status === 'critical' ? 'text-red-400' : 
                      resource.status === 'high' ? 'text-yellow-400' : 'text-green-400'
                    }`}>
                      {resource.usage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full py-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-800/50 hover:border-blue-500/50 text-blue-400 text-sm font-medium transition-all duration-300">
              Optimize Resources
            </button>
          </div>

          {/* Upcoming Events */}
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-950/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
            <h2 className="text-xl font-semibold text-white mb-6">Upcoming Events</h2>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-start p-4 bg-gray-800/30 rounded-xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex flex-col items-center justify-center mr-4">
                    <span className="text-xs text-purple-300 font-medium">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                    <span className="text-lg font-bold text-white">
                      {new Date(event.date).getDate()}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white">{event.title}</h3>
                    <div className="flex items-center text-sm text-gray-400 mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{event.time}</span>
                      <Users className="w-4 h-4 ml-3 mr-1" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                  <button className="text-xs px-3 py-1 bg-gray-800/50 hover:bg-gray-800/80 rounded-full text-blue-400 transition-colors">
                    Join
                  </button>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full py-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-800/50 hover:border-purple-500/50 text-purple-400 text-sm font-medium transition-all duration-300">
              View All Events
            </button>
          </div>
        </div>

        {/* Notifications and Quick Actions Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Notifications */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-950/95 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-800/50">
                <h2 className="text-lg font-semibold text-white">Notifications</h2>
              </div>
              <div className="divide-y divide-gray-800/50 max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id}
                    className={`p-4 hover:bg-gray-800/30 transition-colors cursor-pointer ${
                      notification.unread ? 'bg-gray-800/20' : ''
                    }`}
                  >
                    <div className="flex items-start">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 mt-0.5 ${
                        notification.type === 'alert' ? 'bg-red-500/20 text-red-400' :
                        notification.type === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                        notification.type === 'success' ? 'bg-green-500/20 text-green-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {notification.type === 'alert' ? <AlertTriangle className="w-4 h-4" /> :
                         notification.type === 'warning' ? <AlertTriangle className="w-4 h-4" /> :
                         notification.type === 'success' ? <CheckCircle className="w-4 h-4" /> :
                         <Info className="w-4 h-4" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-white">{notification.title}</h4>
                          <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">{notification.message}</p>
                      </div>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 flex-shrink-0 mt-2"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-800/50">
                <button className="w-full text-center text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  View All Notifications
                </button>
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div>
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-950/95 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden">
              <button 
                onClick={() => toggleSection('quick-actions')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/30 transition-colors border-b border-gray-800/50"
              >
                <h2 className="text-lg font-semibold text-white">Quick Actions</h2>
                {expandedSection === 'quick-actions' ? 
                  <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                }
              </button>
              
              {expandedSection === 'quick-actions' && (
                <div className="p-4 space-y-3">
                  {quickActions.map((action) => (
                    <Link 
                      key={action.id}
                      href={action.href}
                      onClick={() => addToast(`Navigating to ${action.title}`, 'info')}
                      className="flex items-center p-3 rounded-lg bg-gray-800/30 hover:bg-gray-700/50 border border-gray-800/50 transition-all duration-200 group"
                    >
                      <div className={`w-9 h-9 rounded-lg ${action.color} flex items-center justify-center text-white mr-3`}>
                        <action.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-white truncate">{action.title}</h4>
                        <p className="text-xs text-gray-400 truncate">{action.description}</p>
                      </div>
                      <ArrowRight className="ml-2 w-4 h-4 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Team Members */}
            <div className="mt-6 bg-gradient-to-br from-gray-900/90 to-gray-950/95 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-800/50">
                <h2 className="text-lg font-semibold text-white">Team Members</h2>
              </div>
              <div className="p-4 space-y-3">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-center p-2 rounded-lg hover:bg-gray-800/30 transition-colors">
                    <div className={`w-10 h-10 rounded-full ${member.color} flex items-center justify-center text-white font-medium mr-3`}>
                      {member.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-white text-sm">{member.name}</h4>
                      <p className="text-xs text-gray-400">{member.role}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      member.status === 'online' ? 'bg-green-500' :
                      member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
                    }`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* System Resources & Team Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* System Resources */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-white mb-4">System Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {resources.map((resource) => {
                const Icon = resource.icon;
                const usage = (resource.value / resource.max) * 100;
                const colorClass = usage > 80 ? 'from-red-500 to-pink-500' : 
                                 usage > 60 ? 'from-yellow-500 to-orange-500' : 
                                 'from-green-500 to-teal-400';
                
                return (
                  <div 
                    key={resource.type}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-lg ${colorClass} flex items-center justify-center text-white mr-3`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white">{resource.name}</h3>
                          <p className="text-xs text-gray-400">{Math.round(usage)}% utilized</p>
                        </div>
                      </div>
                      <span className="text-sm font-mono">
                        {resource.value.toFixed(1)}<span className="text-xs opacity-70">/{resource.max}{resource.unit}</span>
                      </span>
                    </div>
                    <LineChart data={resource.data} color={colorClass.split(' ')[0].split('-')[1]} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Performance Metrics</h2>
              <div className="flex space-x-2">
                <button 
                  onClick={() => addToast('Refreshing metrics...', 'info')}
                  className="text-xs px-3 py-1 rounded-full bg-gray-800/50 hover:bg-gray-800/80 text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <RefreshCw className="w-3 h-3 mr-1" /> Refresh
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <MetricCard
                  key={stat.id}
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                  icon={stat.icon}
                  color={stat.color}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => toggleSection('quick-actions')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/30 transition-colors"
              >
                <h2 className="text-lg font-semibold text-white">Quick Actions</h2>
                {expandedSection === 'quick-actions' ? 
                  <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                }
              </button>
              
              {expandedSection === 'quick-actions' && (
                <div className="p-4 pt-0 space-y-3">
                  {quickActions.map((action) => (
                    <Link 
                      key={action.id}
                      href={action.href}
                      onClick={() => addToast(`Navigating to ${action.title}`, 'info')}
                      className="flex items-center p-3 rounded-lg bg-gray-800/30 hover:bg-gray-700/50 border border-gray-800/50 transition-all duration-200 group"
                    >
                      <div className={`w-9 h-9 rounded-lg ${action.color} flex items-center justify-center text-white mr-3`}>
                        <action.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-white truncate">{action.title}</h4>
                        <p className="text-xs text-gray-400 truncate">{action.description}</p>
                      </div>
                      <ArrowRight className="ml-2 w-4 h-4 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Activity Feed */}
          <div className="lg:col-span-2">
            <div 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden transition-all duration-300"
            >
              <div className="px-6 py-4 flex items-center justify-between border-b border-gray-800/50">
                <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
                <button 
                  onClick={() => addToast('Loading more activities...', 'info')}
                  className="text-xs px-3 py-1 rounded-full bg-gray-800/50 hover:bg-gray-800/80 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View All
                </button>
              </div>
              
              <div className="divide-y divide-gray-800/50">
                {recentActivity.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div 
                      key={activity.id}
                      className="p-4 hover:bg-gray-800/30 transition-colors cursor-pointer"
                      onClick={() => addToast(`Viewing ${activity.title}`, 'info')}
                    >
                      <div className="flex items-start">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 mt-0.5 ${activity.iconColor} bg-opacity-20`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-white">{activity.title}</h4>
                            <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">{activity.time}</span>
                          </div>
                          <p className="text-sm text-gray-400 mt-0.5">{activity.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="p-4 border-t border-gray-800/50">
                <button 
                  onClick={() => addToast('Loading more activities...', 'info')}
                  className="w-full text-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Ultra Premium Floating Action Buttons */}
        <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
          <button 
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center text-2xl shadow-xl hover:shadow-indigo-500/40 hover:scale-110 transition-all duration-300 group relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(124, 58, 237, 0.9) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
            onClick={() => addToast('New action triggered', 'info')}
          >
            <span className="group-hover:rotate-180 transition-transform duration-500">+</span>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button 
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center text-2xl shadow-xl hover:shadow-blue-500/40 hover:scale-110 transition-all duration-300 group relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.9) 0%, rgba(6, 182, 212, 0.9) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
            onClick={() => addToast('Quick action triggered', 'info')}
          >
            <Zap className="w-6 h-6 group-hover:animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button 
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-600 to-rose-500 text-white flex items-center justify-center text-2xl shadow-xl hover:shadow-pink-500/40 hover:scale-110 transition-all duration-300 group relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(219, 39, 119, 0.9) 0%, rgba(244, 63, 94, 0.9) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
            onClick={() => addToast('Magic! ✨', 'success')}
          >
            <span className="text-xl">✨</span>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </main>
    </div>
  );
}
