'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  Search, 
  Download, 
  Play, 
  TrendingUp, 
  Award, 
  Zap,
  Filter,
  ChevronDown,
  Tag,
  Calendar,
  Eye,
  Heart,
  Share2,
  Bookmark,
  BarChart3,
  Target,
  Lightbulb,
  Brain,
  Rocket,
  Crown,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';

const playbooks = [
  {
    id: '1',
    slug: 'complete-content-creation-pipeline',
    title: 'Complete Content Creation Pipeline',
    description: 'End-to-end workflow for creating engaging content with AI assistance',
    duration: '45 min read',
    difficulty: 'Intermediate',
    category: 'Content Creation',
    tags: ['Writing', 'SEO', 'Social Media'],
    author: 'Alex Morgan',
    avatar: 'AM',
    rating: 4.8,
    students: '2.1K'
  },
  {
    id: '2',
    slug: 'building-ai-powered-startup',
    title: 'Building an AI-Powered Startup',
    description: 'Step-by-step guide to launching a successful AI startup',
    duration: '1 hour read',
    difficulty: 'Advanced',
    category: 'Entrepreneurship',
    tags: ['Business', 'Strategy', 'Funding'],
    author: 'Sarah Chen',
    avatar: 'SC',
    rating: 4.9,
    students: '3.4K'
  },
  {
    id: '3',
    slug: 'ai-marketing-campaigns',
    title: 'AI for Marketing Campaigns',
    description: 'Leverage AI tools to optimize your marketing campaigns and ROI',
    duration: '35 min read',
    difficulty: 'Beginner',
    category: 'Marketing',
    tags: ['Advertising', 'Analytics', 'Automation'],
    author: 'Michael Torres',
    avatar: 'MT',
    rating: 4.7,
    students: '1.8K'
  },
  {
    id: '4',
    slug: 'developer-productivity-boost',
    title: 'Developer Productivity Boost',
    description: 'Maximize your coding efficiency with AI-powered development tools',
    duration: '50 min read',
    difficulty: 'Intermediate',
    category: 'Development',
    tags: ['Coding', 'Debugging', 'Testing'],
    author: 'James Wilson',
    avatar: 'JW',
    rating: 4.9,
    students: '2.7K'
  },
  {
    id: '5',
    slug: 'data-analysis-mastery',
    title: 'Data Analysis Mastery',
    description: 'Transform raw data into actionable insights using AI analytics tools',
    duration: '1 hour 15 min read',
    difficulty: 'Advanced',
    category: 'Data Science',
    tags: ['Visualization', 'Machine Learning', 'Reporting'],
    author: 'Priya Sharma',
    avatar: 'PS',
    rating: 4.8,
    students: '3.1K'
  },
  {
    id: '6',
    slug: 'customer-support-automation',
    title: 'Customer Support Automation',
    description: 'Implement AI chatbots and support systems for enhanced customer experience',
    duration: '40 min read',
    difficulty: 'Beginner',
    category: 'Customer Service',
    tags: ['Chatbots', 'CRM', 'Feedback'],
    author: 'David Kim',
    avatar: 'DK',
    rating: 4.6,
    students: '1.5K'
  },
  {
    id: '7',
    slug: 'ai-powered-design-systems',
    title: 'AI-Powered Design Systems',
    description: 'Create consistent and scalable design systems using AI tools',
    duration: '55 min read',
    difficulty: 'Intermediate',
    category: 'Design',
    tags: ['UI/UX', 'Branding', 'Prototyping'],
    author: 'Emma Rodriguez',
    avatar: 'ER',
    rating: 4.9,
    students: '2.3K'
  },
  {
    id: '8',
    slug: 'financial-forecasting-ai',
    title: 'Financial Forecasting with AI',
    description: 'Utilize machine learning models for accurate financial predictions',
    duration: '1 hour 20 min read',
    difficulty: 'Advanced',
    category: 'Finance',
    tags: ['Investment', 'Risk Assessment', 'Modeling'],
    author: 'Robert Johnson',
    avatar: 'RJ',
    rating: 4.8,
    students: '2.9K'
  },
  {
    id: '9',
    slug: 'hr-tech-transformation',
    title: 'HR Tech Transformation',
    description: 'Modernize human resources with AI recruitment and employee engagement tools',
    duration: '48 min read',
    difficulty: 'Intermediate',
    category: 'Human Resources',
    tags: ['Recruitment', 'Performance', 'Engagement'],
    author: 'Lisa Anderson',
    avatar: 'LA',
    rating: 4.7,
    students: '1.9K'
  },
  {
    id: '10',
    slug: 'cybersecurity-ai-defense',
    title: 'Cybersecurity AI Defense',
    description: 'Protect your digital assets with advanced AI-powered threat detection systems',
    duration: '1 hour 5 min read',
    difficulty: 'Advanced',
    category: 'Security',
    tags: ['Threat Detection', 'Incident Response', 'Compliance'],
    author: 'Marcus Thompson',
    avatar: 'MT',
    rating: 4.9,
    students: '2.4K'
  },
  {
    id: '11',
    slug: 'supply-chain-ai-optimization',
    title: 'Supply Chain AI Optimization',
    description: 'Leverage AI to streamline logistics, inventory, and distribution networks',
    duration: '55 min read',
    difficulty: 'Intermediate',
    category: 'Operations',
    tags: ['Logistics', 'Inventory', 'Forecasting'],
    author: 'Jennifer Park',
    avatar: 'JP',
    rating: 4.7,
    students: '1.7K'
  },
  {
    id: '12',
    slug: 'healthcare-ai-diagnostics',
    title: 'Healthcare AI Diagnostics',
    description: 'Implement AI diagnostic tools to improve patient outcomes and reduce costs',
    duration: '1 hour 15 min read',
    difficulty: 'Advanced',
    category: 'Healthcare',
    tags: ['Medical Imaging', 'Patient Care', 'Regulation'],
    author: 'Dr. Amanda Foster',
    avatar: 'AF',
    rating: 4.8,
    students: '3.2K'
  },
  {
    id: '13',
    slug: 'education-ai-personalization',
    title: 'Education AI Personalization',
    description: 'Create adaptive learning experiences that cater to individual student needs',
    duration: '45 min read',
    difficulty: 'Intermediate',
    category: 'Education',
    tags: ['Learning Analytics', 'Curriculum', 'Assessment'],
    author: 'Prof. Robert Chen',
    avatar: 'RC',
    rating: 4.6,
    students: '1.9K'
  },
  {
    id: '14',
    slug: 'legal-ai-document-review',
    title: 'Legal AI Document Review',
    description: 'Accelerate legal document analysis and contract review with AI assistance',
    duration: '50 min read',
    difficulty: 'Intermediate',
    category: 'Legal',
    tags: ['Contract Analysis', 'Compliance', 'E-Discovery'],
    author: 'Elizabeth Warren',
    avatar: 'EW',
    rating: 4.7,
    students: '1.6K'
  },
  {
    id: '15',
    slug: 'ai-for-retail-optimization',
    title: 'AI for Retail Optimization',
    description: 'Transform retail operations with AI-driven inventory management, personalized customer experiences, and predictive analytics',
    duration: '1 hour 10 min read',
    difficulty: 'Intermediate',
    category: 'Retail',
    tags: ['Inventory Management', 'Customer Experience', 'Pricing'],
    author: 'Sophia Williams',
    avatar: 'SW',
    rating: 4.8,
    students: '2.3K'
  },
  {
    id: '16',
    slug: 'manufacturing-ai-excellence',
    title: 'Manufacturing AI Excellence',
    description: 'Achieve operational excellence through AI-powered predictive maintenance, quality control, and production optimization',
    duration: '1 hour 25 min read',
    difficulty: 'Advanced',
    category: 'Manufacturing',
    tags: ['Predictive Maintenance', 'Quality Control', 'Production Optimization'],
    author: 'Dr. Michael Rodriguez',
    avatar: 'MR',
    rating: 4.9,
    students: '2.7K'
  },
  {
    id: '17',
    slug: 'ai-powered-project-management',
    title: 'AI-Powered Project Management',
    description: 'Enhance project delivery success with AI-driven planning, risk management, and team collaboration tools',
    duration: '55 min read',
    difficulty: 'Intermediate',
    category: 'Project Management',
    tags: ['Planning', 'Risk Management', 'Team Collaboration'],
    author: 'Jennifer Adams',
    avatar: 'JA',
    rating: 4.7,
    students: '1.8K'
  },
  {
    id: '18',
    slug: 'ai-in-agriculture-and-farming',
    title: 'AI in Agriculture and Farming',
    description: 'Revolutionize agricultural practices with AI-powered precision farming, crop monitoring, and sustainable resource management',
    duration: '1 hour 5 min read',
    difficulty: 'Intermediate',
    category: 'Agriculture',
    tags: ['Precision Farming', 'Crop Management', 'Sustainability'],
    author: 'Dr. Robert Green',
    avatar: 'RG',
    rating: 4.8,
    students: '2.1K'
  },
  {
    id: '19',
    slug: 'ai-for-nonprofit-impact',
    title: 'AI for Nonprofit Impact',
    description: 'Maximize social impact through AI-powered donor engagement, program optimization, and mission-driven analytics',
    duration: '50 min read',
    difficulty: 'Beginner',
    category: 'Nonprofit',
    tags: ['Donor Engagement', 'Program Optimization', 'Social Impact'],
    author: 'Sarah Johnson',
    avatar: 'SJ',
    rating: 4.9,
    students: '1.5K'
  },
  {
    id: '20',
    slug: 'ai-in-energy-and-utilities',
    title: 'AI in Energy and Utilities',
    description: 'Optimize energy production, distribution, and consumption through AI-powered smart grids, predictive maintenance, and sustainability initiatives',
    duration: '1 hour 15 min read',
    difficulty: 'Advanced',
    category: 'Energy',
    tags: ['Smart Grids', 'Renewable Energy', 'Predictive Maintenance'],
    author: 'Dr. Emily Chen',
    avatar: 'EC',
    rating: 4.8,
    students: '2.4K'
  },
  {
    id: '21',
    slug: 'ai-for-media-and-entertainment',
    title: 'AI for Media and Entertainment',
    description: 'Revolutionize content creation, distribution, and audience engagement with AI-powered recommendation engines, personalization, and immersive experiences',
    duration: '1 hour 5 min read',
    difficulty: 'Intermediate',
    category: 'Media & Entertainment',
    tags: ['Content Creation', 'Personalization', 'Audience Analytics'],
    author: 'Marcus Thompson',
    avatar: 'MT',
    rating: 4.7,
    students: '2.1K'
  },
  {
    id: '22',
    slug: 'ai-in-transportation-and-logistics',
    title: 'AI in Transportation and Logistics',
    description: 'Transform transportation and logistics operations with AI-powered route optimization, fleet management, and autonomous vehicle integration',
    duration: '1 hour 20 min read',
    difficulty: 'Advanced',
    category: 'Transportation',
    tags: ['Route Optimization', 'Fleet Management', 'Autonomous Vehicles'],
    author: 'Dr. Jennifer Park',
    avatar: 'JP',
    rating: 4.9,
    students: '2.8K'
  },
  {
    id: '23',
    slug: 'ai-for-real-estate-and-construction',
    title: 'AI for Real Estate and Construction',
    description: 'Revolutionize property management, construction planning, and real estate transactions with AI-powered valuation, predictive maintenance, and smart building technologies',
    duration: '1 hour 10 min read',
    difficulty: 'Intermediate',
    category: 'Real Estate',
    tags: ['Property Valuation', 'Construction Planning', 'Smart Buildings'],
    author: 'Dr. Robert Green',
    avatar: 'RG',
    rating: 4.8,
    students: '2.2K'
  },
  {
    id: '24',
    slug: 'ai-in-insurance-and-risk-management',
    title: 'AI in Insurance and Risk Management',
    description: 'Transform insurance operations and risk assessment with AI-powered underwriting, claims processing, and fraud detection systems',
    duration: '1 hour 5 min read',
    difficulty: 'Advanced',
    category: 'Insurance',
    tags: ['Underwriting', 'Claims Processing', 'Fraud Detection'],
    author: 'Sarah Johnson',
    avatar: 'SJ',
    rating: 4.9,
    students: '2.5K'
  },
  {
    id: '25',
    slug: 'ai-in-telecommunications',
    title: 'AI in Telecommunications',
    description: 'Transform telecom operations with AI-powered network optimization, predictive maintenance, and intelligent customer service solutions',
    duration: '1 hour 15 min read',
    difficulty: 'Advanced',
    category: 'Telecommunications',
    tags: ['Network Optimization', 'Predictive Maintenance', 'Customer Experience'],
    author: 'Dr. Kevin Martinez',
    avatar: 'KM',
    rating: 4.8,
    students: '2.3K'
  },
  {
    id: '26',
    slug: 'ai-for-government-services',
    title: 'AI for Government Services',
    description: 'Modernize public sector operations with AI-powered citizen services, data-driven policy making, and intelligent governance solutions',
    duration: '1 hour 20 min read',
    difficulty: 'Advanced',
    category: 'Government',
    tags: ['Citizen Services', 'Policy Making', 'Public Safety'],
    author: 'Dr. Amanda Foster',
    avatar: 'AF',
    rating: 4.9,
    students: '2.7K'
  },
  {
    id: '27',
    slug: 'ai-in-pharmaceuticals',
    title: 'AI in Pharmaceuticals',
    description: 'Accelerate drug discovery, clinical trials, and pharmaceutical operations with AI-powered research, development, and manufacturing solutions',
    duration: '1 hour 30 min read',
    difficulty: 'Expert',
    category: 'Pharmaceuticals',
    tags: ['Drug Discovery', 'Clinical Trials', 'Precision Medicine'],
    author: 'Dr. Rachel Kim',
    avatar: 'RK',
    rating: 4.9,
    students: '3.1K'
  },
  {
    id: '28',
    slug: 'ai-for-environmental-conservation',
    title: 'AI for Environmental Conservation',
    description: 'Combat climate change and protect biodiversity with AI-powered environmental monitoring, conservation planning, and sustainability solutions',
    duration: '1 hour 25 min read',
    difficulty: 'Advanced',
    category: 'Environment',
    tags: ['Climate Change', 'Biodiversity', 'Pollution Control'],
    author: 'Dr. Thomas Wright',
    avatar: 'TW',
    rating: 4.9,
    students: '2.9K'
  },
  {
    id: '29',
    slug: 'ai-in-sports-and-entertainment',
    title: 'AI in Sports and Entertainment',
    description: 'Enhance fan experiences, athlete performance, and entertainment production with AI-powered analytics, personalization, and immersive technologies',
    duration: '1 hour 10 min read',
    difficulty: 'Intermediate',
    category: 'Sports & Entertainment',
    tags: ['Fan Experience', 'Athlete Performance', 'Content Production'],
    author: 'Marcus Johnson',
    avatar: 'MJ',
    rating: 4.7,
    students: '2.4K'
  },
  {
    id: '30',
    slug: 'ai-in-aviation-and-aerospace',
    title: 'AI in Aviation and Aerospace',
    description: 'Revolutionize flight operations, aircraft maintenance, and space exploration with AI-powered predictive analytics, autonomous systems, and intelligent decision support',
    duration: '1 hour 25 min read',
    difficulty: 'Advanced',
    category: 'Aviation & Aerospace',
    tags: ['Autonomous Systems', 'Predictive Maintenance', 'Air Traffic Management'],
    author: 'Dr. Christopher Evans',
    avatar: 'CE',
    rating: 4.9,
    students: '2.8K'
  },
  {
    id: '31',
    slug: 'ai-for-fashion-and-luxury',
    title: 'AI for Fashion and Luxury',
    description: 'Transform fashion design, retail operations, and luxury brand management with AI-powered trend forecasting, personalized experiences, and sustainable practices',
    duration: '1 hour 15 min read',
    difficulty: 'Intermediate',
    category: 'Fashion & Luxury',
    tags: ['Trend Forecasting', 'Personalization', 'Sustainability'],
    author: 'Isabella Rossi',
    avatar: 'IR',
    rating: 4.8,
    students: '2.5K'
  },
  {
    id: '32',
    slug: 'ai-in-food-and-beverage',
    title: 'AI in Food and Beverage',
    description: 'Optimize food production, restaurant operations, and culinary experiences with AI-powered quality control, personalized menus, and sustainable sourcing',
    duration: '1 hour 20 min read',
    difficulty: 'Intermediate',
    category: 'Food & Beverage',
    tags: ['Quality Control', 'Personalization', 'Sustainability'],
    author: 'Chef Michael Chen',
    avatar: 'MC',
    rating: 4.7,
    students: '2.6K'
  },
  {
    id: '33',
    slug: 'ai-for-event-management',
    title: 'AI for Event Management',
    description: 'Transform event planning, execution, and attendee experiences with AI-powered scheduling, personalized agendas, and intelligent venue management',
    duration: '1 hour 10 min read',
    difficulty: 'Intermediate',
    category: 'Event Management',
    tags: ['Planning Automation', 'Personalization', 'Venue Management'],
    author: 'Sarah Williams',
    avatar: 'SW',
    rating: 4.8,
    students: '2.3K'
  },
  {
    id: '34',
    slug: 'ai-in-construction-and-infrastructure',
    title: 'AI in Construction and Infrastructure',
    description: 'Modernize construction projects and infrastructure management with AI-powered project planning, safety monitoring, and asset optimization',
    duration: '1 hour 25 min read',
    difficulty: 'Advanced',
    category: 'Construction & Infrastructure',
    tags: ['Project Planning', 'Safety Monitoring', 'Asset Optimization'],
    author: 'Dr. Robert Thompson',
    avatar: 'RT',
    rating: 4.9,
    students: '2.9K'
  },
  {
    id: '35',
    slug: 'ai-in-automotive-and-mobility',
    title: 'AI in Automotive and Mobility',
    description: 'Transform automotive design, manufacturing, and mobility services with AI-powered autonomous driving, predictive maintenance, and smart transportation solutions',
    duration: '1 hour 30 min read',
    difficulty: 'Advanced',
    category: 'Automotive & Mobility',
    tags: ['Autonomous Driving', 'Predictive Maintenance', 'Connected Vehicles'],
    author: 'Dr. Jennifer Park',
    avatar: 'JP',
    rating: 4.9,
    students: '3.1K'
  },
  {
    id: '36',
    slug: 'ai-for-media-and-journalism',
    title: 'AI for Media and Journalism',
    description: 'Revolutionize content creation, fact-checking, and audience engagement with AI-powered newsrooms, automated reporting, and personalized media experiences',
    duration: '1 hour 15 min read',
    difficulty: 'Intermediate',
    category: 'Media & Journalism',
    tags: ['Automated Reporting', 'Fact-Checking', 'Personalization'],
    author: 'Marcus Thompson',
    avatar: 'MT',
    rating: 4.8,
    students: '2.7K'
  },
  {
    id: '37',
    slug: 'ai-in-mining-and-resources',
    title: 'AI in Mining and Resources',
    description: 'Optimize mineral extraction, resource management, and environmental stewardship with AI-powered exploration, autonomous equipment, and sustainable practices',
    duration: '1 hour 20 min read',
    difficulty: 'Advanced',
    category: 'Mining & Resources',
    tags: ['Autonomous Operations', 'Predictive Maintenance', 'Environmental Stewardship'],
    author: 'Dr. Sarah Johnson',
    avatar: 'SJ',
    rating: 4.7,
    students: '2.4K'
  },
  {
    id: '38',
    slug: 'ai-for-tourism-and-hospitality',
    title: 'AI for Tourism and Hospitality',
    description: 'Enhance travel experiences, hotel operations, and destination management with AI-powered personalization, dynamic pricing, and intelligent service delivery',
    duration: '1 hour 10 min read',
    difficulty: 'Intermediate',
    category: 'Tourism & Hospitality',
    tags: ['Personalization', 'Dynamic Pricing', 'Chatbots'],
    author: 'Dr. Amanda Foster',
    avatar: 'AF',
    rating: 4.8,
    students: '2.5K'
  },
  {
    id: '39',
    slug: 'ai-in-water-and-utilities',
    title: 'AI in Water and Utilities',
    description: 'Modernize water treatment, distribution, and utility management with AI-powered predictive maintenance, leak detection, and smart grid optimization',
    duration: '1 hour 25 min read',
    difficulty: 'Advanced',
    category: 'Water & Utilities',
    tags: ['Predictive Maintenance', 'Leak Detection', 'Water Quality'],
    author: 'Dr. Robert Green',
    avatar: 'RG',
    rating: 4.9,
    students: '2.8K'
  },
  {
    id: '40',
    slug: 'ai-in-biotechnology-and-life-sciences',
    title: 'AI in Biotechnology and Life Sciences',
    description: 'Accelerate drug discovery, genomics research, and personalized medicine with AI-powered molecular modeling, gene sequencing, and therapeutic development',
    duration: '1 hour 35 min read',
    difficulty: 'Expert',
    category: 'Biotechnology & Life Sciences',
    tags: ['Drug Discovery', 'Genomics', 'Personalized Medicine'],
    author: 'Dr. Emily Chen',
    avatar: 'EC',
    rating: 4.9,
    students: '3.2K'
  },
  {
    id: '41',
    slug: 'ai-for-education-and-learning',
    title: 'AI for Education and Learning',
    description: 'Transform teaching, learning, and educational administration with AI-powered personalized instruction, intelligent tutoring, and data-driven insights',
    duration: '1 hour 20 min read',
    difficulty: 'Intermediate',
    category: 'Education & Learning',
    tags: ['Personalized Learning', 'Intelligent Tutoring', 'Assessment'],
    author: 'Dr. Michael Rodriguez',
    avatar: 'MR',
    rating: 4.8,
    students: '2.9K'
  },
  {
    id: '42',
    slug: 'ai-in-robotics-and-automation',
    title: 'AI in Robotics and Automation',
    description: 'Enhance industrial automation, collaborative robotics, and autonomous systems with AI-powered perception, decision-making, and adaptive control',
    duration: '1 hour 25 min read',
    difficulty: 'Advanced',
    category: 'Robotics & Automation',
    tags: ['Perception', 'Autonomous Systems', 'Collaborative Robotics'],
    author: 'Dr. Kevin Martinez',
    avatar: 'KM',
    rating: 4.9,
    students: '3.0K'
  },
  {
    id: '43',
    slug: 'ai-for-legal-and-compliance',
    title: 'AI for Legal and Compliance',
    description: 'Transform legal research, contract analysis, and regulatory compliance with AI-powered document review, case prediction, and automated compliance monitoring',
    duration: '1 hour 15 min read',
    difficulty: 'Advanced',
    category: 'Legal & Compliance',
    tags: ['Document Analysis', 'Case Prediction', 'Compliance Automation'],
    author: 'Sarah Williams',
    avatar: 'SW',
    rating: 4.7,
    students: '2.6K'
  },
  {
    id: '44',
    slug: 'ai-in-agriculture-and-agritech',
    title: 'AI in Agriculture and AgriTech',
    description: 'Optimize crop production, livestock management, and farm operations with AI-powered precision agriculture, predictive analytics, and smart farming solutions',
    duration: '1 hour 30 min read',
    difficulty: 'Advanced',
    category: 'Agriculture & AgriTech',
    tags: ['Precision Agriculture', 'Livestock Management', 'Predictive Analytics'],
    author: 'Dr. Thomas Wright',
    avatar: 'TW',
    rating: 4.8,
    students: '3.1K'
  },
  {
    id: '45',
    slug: 'ai-in-semiconductors-and-electronics',
    title: 'AI in Semiconductors and Electronics',
    description: 'Revolutionize chip design, manufacturing, and electronic systems with AI-powered circuit optimization, predictive maintenance, and intelligent embedded systems',
    duration: '1 hour 40 min read',
    difficulty: 'Expert',
    category: 'Semiconductors & Electronics',
    tags: ['Chip Design', 'Manufacturing Optimization', 'Embedded Systems'],
    author: 'Dr. Lisa Zhang',
    avatar: 'LZ',
    rating: 4.9,
    students: '3.3K'
  },
  {
    id: '46',
    slug: 'ai-for-research-and-academia',
    title: 'AI for Research and Academia',
    description: 'Accelerate scientific discovery, academic research, and educational innovation with AI-powered data analysis, literature review, and collaborative research platforms',
    duration: '1 hour 25 min read',
    difficulty: 'Advanced',
    category: 'Research & Academia',
    tags: ['Literature Review', 'Data Analysis', 'Collaborative Research'],
    author: 'Prof. David Kim',
    avatar: 'DK',
    rating: 4.8,
    students: '2.9K'
  },
  {
    id: '47',
    slug: 'ai-in-defence-and-security',
    title: 'AI in Defence and Security',
    description: 'Enhance national security, military operations, and cyber defense with AI-powered surveillance, threat detection, and strategic decision support systems',
    duration: '1 hour 35 min read',
    difficulty: 'Expert',
    category: 'Defence & Security',
    tags: ['Surveillance', 'Cyber Defense', 'Autonomous Systems'],
    author: 'Gen. Robert Hayes',
    avatar: 'RH',
    rating: 4.9,
    students: '3.5K'
  },
  {
    id: '48',
    slug: 'ai-for-small-business-and-entrepreneurs',
    title: 'AI for Small Business and Entrepreneurs',
    description: 'Empower small businesses and startups with AI-powered marketing, customer service, financial management, and growth strategies',
    duration: '1 hour 20 min read',
    difficulty: 'Intermediate',
    category: 'Small Business & Entrepreneurship',
    tags: ['Marketing Automation', 'Customer Service', 'Financial Management'],
    author: 'Rachel Thompson',
    avatar: 'RT',
    rating: 4.7,
    students: '4.2K'
  },
  {
    id: '49',
    slug: 'ai-in-space-and-satellite-technology',
    title: 'AI in Space and Satellite Technology',
    description: 'Revolutionize space exploration, satellite operations, and orbital mechanics with AI-powered autonomous systems, predictive maintenance, and deep space navigation',
    duration: '1 hour 45 min read',
    difficulty: 'Expert',
    category: 'Space & Satellite Technology',
    tags: ['Satellite Operations', 'Autonomous Systems', 'Deep Space Navigation'],
    author: 'Dr. Elena Volkov',
    avatar: 'EV',
    rating: 4.9,
    students: '3.7K'
  },
  {
    id: '50',
    slug: 'ai-in-renewable-energy-systems',
    title: 'AI in Renewable Energy Systems',
    description: 'Optimize solar, wind, and hydroelectric power generation with AI-powered forecasting, grid management, and energy storage solutions',
    duration: '1 hour 30 min read',
    difficulty: 'Advanced',
    category: 'Renewable Energy Systems',
    tags: ['Solar Optimization', 'Wind Enhancement', 'Grid Integration'],
    author: 'Dr. Marcus Chen',
    avatar: 'MC',
    rating: 4.8,
    students: '3.4K'
  },
  {
    id: '51',
    slug: 'ai-for-non-profit-organizations',
    title: 'AI for Non-Profit Organizations',
    description: 'Empower charitable organizations with AI-powered donor engagement, volunteer management, and social impact measurement',
    duration: '1 hour 15 min read',
    difficulty: 'Intermediate',
    category: 'Non-Profit Organizations',
    tags: ['Donor Engagement', 'Volunteer Management', 'Social Impact'],
    author: 'Sarah Johnson',
    avatar: 'SJ',
    rating: 4.7,
    students: '2.8K'
  },
  {
    id: '52',
    slug: 'ai-in-blockchain-and-cryptocurrency',
    title: 'AI in Blockchain and Cryptocurrency',
    description: 'Revolutionize decentralized finance, smart contracts, and digital asset management with AI-powered trading, fraud detection, and blockchain optimization',
    duration: '1 hour 40 min read',
    difficulty: 'Expert',
    category: 'Blockchain & Cryptocurrency',
    tags: ['Smart Contracts', 'Trading Automation', 'DeFi Optimization'],
    author: 'Dr. Alexei Petrov',
    avatar: 'AP',
    rating: 4.9,
    students: '4.1K'
  },
  {
    id: '53',
    slug: 'ai-for-mental-health-and-wellness',
    title: 'AI for Mental Health and Wellness',
    description: 'Transform therapy, counseling, and wellness programs with AI-powered mood tracking, personalized interventions, and mental health support systems',
    duration: '1 hour 25 min read',
    difficulty: 'Advanced',
    category: 'Mental Health & Wellness',
    tags: ['Therapy Augmentation', 'Wellness Apps', 'Crisis Intervention'],
    author: 'Dr. Jennifer Adams',
    avatar: 'JA',
    rating: 4.8,
    students: '3.9K'
  },
  {
    id: '54',
    slug: 'ai-in-quantum-computing',
    title: 'AI in Quantum Computing',
    description: 'Accelerate quantum algorithm development, error correction, and quantum machine learning with AI-powered optimization and intelligent quantum systems',
    duration: '1 hour 50 min read',
    difficulty: 'Expert',
    category: 'Quantum Computing',
    tags: ['Algorithm Development', 'Error Correction', 'Quantum Machine Learning'],
    author: 'Dr. Quantum Lee',
    avatar: 'QL',
    rating: 4.9,
    students: '3.6K'
  },
  {
    id: '55',
    slug: 'ai-in-biomedical-engineering',
    title: 'AI in Biomedical Engineering',
    description: 'Revolutionize medical device development, biomaterials research, and tissue engineering with AI-powered simulation, optimization, and personalized healthcare solutions',
    duration: '1 hour 35 min read',
    difficulty: 'Expert',
    category: 'Biomedical Engineering',
    tags: ['Medical Devices', 'Biomaterials', 'Tissue Engineering'],
    author: 'Dr. Sarah Mitchell',
    avatar: 'SM',
    rating: 4.9,
    students: '3.8K'
  },
  {
    id: '56',
    slug: 'ai-for-urban-planning-and-smart-cities',
    title: 'AI for Urban Planning and Smart Cities',
    description: 'Transform city infrastructure, transportation, and public services with AI-powered urban analytics, predictive modeling, and intelligent city management',
    duration: '1 hour 25 min read',
    difficulty: 'Advanced',
    category: 'Urban Planning & Smart Cities',
    tags: ['Infrastructure', 'Transportation', 'Public Services'],
    author: 'Dr. Michael Rodriguez',
    avatar: 'MR',
    rating: 4.8,
    students: '3.5K'
  },
  {
    id: '57',
    slug: 'ai-in-food-technology-and-nutrition',
    title: 'AI in Food Technology and Nutrition',
    description: 'Revolutionize food production, processing, and personalized nutrition with AI-powered quality control, supply chain optimization, and dietary recommendations',
    duration: '1 hour 20 min read',
    difficulty: 'Advanced',
    category: 'Food Technology & Nutrition',
    tags: ['Food Safety', 'Nutrition', 'Supply Chain'],
    author: 'Dr. Emma Wilson',
    avatar: 'EW',
    rating: 4.7,
    students: '3.2K'
  },
  {
    id: '58',
    slug: 'ai-for-disaster-management-and-humanitarian-aid',
    title: 'AI for Disaster Management and Humanitarian Aid',
    description: 'Enhance emergency response, crisis prediction, and humanitarian assistance with AI-powered risk assessment, resource allocation, and recovery planning',
    duration: '1 hour 30 min read',
    difficulty: 'Advanced',
    category: 'Disaster Management & Humanitarian Aid',
    tags: ['Emergency Response', 'Risk Assessment', 'Humanitarian Aid'],
    author: 'Dr. James Patterson',
    avatar: 'JP',
    rating: 4.9,
    students: '3.7K'
  },
  {
    id: '59',
    slug: 'ai-in-materials-science-and-engineering',
    title: 'AI in Materials Science and Engineering',
    description: 'Accelerate新材料 discovery, property prediction, and manufacturing optimization with AI-powered computational modeling, materials informatics, and process control',
    duration: '1 hour 40 min read',
    difficulty: 'Expert',
    category: 'Materials Science & Engineering',
    tags: ['新材料 Discovery', 'Property Prediction', 'Process Optimization'],
    author: 'Dr. Lisa Chang',
    avatar: 'LC',
    rating: 4.9,
    students: '3.9K'
  },
  {
    id: '60',
    slug: 'ai-in-architectural-design-and-construction',
    title: 'AI in Architectural Design and Construction',
    description: 'Transform building design, construction planning, and facility management with AI-powered generative design, predictive analytics, and smart building technologies',
    duration: '1 hour 25 min read',
    difficulty: 'Advanced',
    category: 'Architectural Design & Construction',
    tags: ['Generative Design', 'Construction Planning', 'Smart Buildings'],
    author: 'Dr. Robert Kim',
    avatar: 'RK',
    rating: 4.8,
    students: '3.6K'
  },
  {
    id: '61',
    slug: 'ai-for-journalism-and-news-media',
    title: 'AI for Journalism and News Media',
    description: 'Revolutionize news gathering, fact-checking, and content distribution with AI-powered investigative tools, automated reporting, and personalized news experiences',
    duration: '1 hour 20 min read',
    difficulty: 'Advanced',
    category: 'Journalism & News Media',
    tags: ['Fact-Checking', 'Automated Reporting', 'News Distribution'],
    author: 'Sarah Thompson',
    avatar: 'ST',
    rating: 4.7,
    students: '3.3K'
  },
  {
    id: '62',
    slug: 'ai-in-veterinary-medicine',
    title: 'AI in Veterinary Medicine',
    description: 'Enhance animal healthcare, diagnostics, and treatment with AI-powered medical imaging, predictive analytics, and telemedicine solutions',
    duration: '1 hour 30 min read',
    difficulty: 'Advanced',
    category: 'Veterinary Medicine',
    tags: ['Medical Imaging', 'Diagnostics', 'Telemedicine'],
    author: 'Dr. Michael Chen',
    avatar: 'MC',
    rating: 4.9,
    students: '3.8K'
  },
  {
    id: '63',
    slug: 'ai-for-music-and-entertainment-production',
    title: 'AI for Music and Entertainment Production',
    description: 'Revolutionize music creation, sound design, and entertainment experiences with AI-powered composition, audio processing, and immersive technologies',
    duration: '1 hour 25 min read',
    difficulty: 'Advanced',
    category: 'Music & Entertainment Production',
    tags: ['Music Composition', 'Sound Design', 'Interactive Media'],
    author: 'Alex Rivera',
    avatar: 'AR',
    rating: 4.8,
    students: '4.1K'
  },
  {
    id: '64',
    slug: 'ai-in-museums-and-cultural-heritage',
    title: 'AI in Museums and Cultural Heritage',
    description: 'Preserve, digitize, and showcase cultural artifacts with AI-powered conservation, virtual exhibitions, and personalized visitor experiences',
    duration: '1 hour 20 min read',
    difficulty: 'Advanced',
    category: 'Museums & Cultural Heritage',
    tags: ['Artifact Conservation', 'Digital Preservation', 'Virtual Exhibitions'],
    author: 'Dr. Maria Santos',
    avatar: 'MS',
    rating: 4.7,
    students: '3.4K'
  },
  {
    id: '65',
    slug: 'ai-in-sports-analytics-and-performance',
    title: 'AI in Sports Analytics and Performance',
    description: 'Optimize athlete training, game strategy, and fan engagement with AI-powered performance analysis, injury prediction, and immersive viewing experiences',
    duration: '1 hour 20 min read',
    difficulty: 'Advanced',
    category: 'Sports Analytics & Performance',
    tags: ['Performance Analysis', 'Injury Prevention', 'Game Strategy'],
    author: 'Dr. Jason Williams',
    avatar: 'JW',
    rating: 4.8,
    students: '4.2K'
  },
  {
    id: '66',
    slug: 'ai-for-religious-and-spiritual-organizations',
    title: 'AI for Religious and Spiritual Organizations',
    description: 'Enhance community engagement, pastoral care, and spiritual guidance with AI-powered communication, counseling, and personalized faith experiences',
    duration: '1 hour 15 min read',
    difficulty: 'Intermediate',
    category: 'Religious & Spiritual Organizations',
    tags: ['Community Engagement', 'Pastoral Care', 'Spiritual Guidance'],
    author: 'Rev. Dr. Mary Johnson',
    avatar: 'MJ',
    rating: 4.7,
    students: '3.5K'
  },
  {
    id: '67',
    slug: 'ai-in-luxury-goods-and-fashion',
    title: 'AI in Luxury Goods and Fashion',
    description: 'Revolutionize design, production, and retail experiences with AI-powered trend forecasting, personalized styling, and sustainable luxury practices',
    duration: '1 hour 25 min read',
    difficulty: 'Advanced',
    category: 'Luxury Goods & Fashion',
    tags: ['Design Innovation', 'Trend Forecasting', 'Personalized Styling'],
    author: 'Isabella Moreau',
    avatar: 'IM',
    rating: 4.8,
    students: '3.9K'
  },
  {
    id: '68',
    slug: 'ai-for-senior-care-and-aging',
    title: 'AI for Senior Care and Aging',
    description: 'Enhance elderly care, health monitoring, and quality of life with AI-powered assistive technologies, predictive health analytics, and personalized wellness programs',
    duration: '1 hour 30 min read',
    difficulty: 'Advanced',
    category: 'Senior Care & Aging',
    tags: ['Health Monitoring', 'Assistive Technologies', 'Cognitive Support'],
    author: 'Dr. Susan Miller',
    avatar: 'SM',
    rating: 4.9,
    students: '4.3K'
  },
  {
    id: '69',
    slug: 'ai-in-maritime-and-ocean-technology',
    title: 'AI in Maritime and Ocean Technology',
    description: 'Optimize shipping operations,海洋 exploration, and maritime safety with AI-powered navigation, predictive maintenance, and autonomous vessel systems',
    duration: '1 hour 35 min read',
    difficulty: 'Expert',
    category: 'Maritime & Ocean Technology',
    tags: ['Navigation Systems', 'Predictive Maintenance', 'Autonomous Operations'],
    author: 'Capt. Dr. William Turner',
    avatar: 'WT',
    rating: 4.9,
    students: '3.7K'
  },
  {
    id: '70',
    slug: 'ai-in-forestry-and-woodland-management',
    title: 'AI in Forestry and Woodland Management',
    description: 'Optimize forest conservation, timber harvesting, and ecosystem monitoring with AI-powered satellite imagery analysis, predictive growth modeling, and sustainable resource management',
    duration: '1 hour 25 min read',
    difficulty: 'Advanced',
    category: 'Forestry & Woodland Management',
    tags: ['Forest Monitoring', 'Growth Modeling', 'Harvesting Operations'],
    author: 'Dr. Thomas Green',
    avatar: 'TG',
    rating: 4.8,
    students: '3.2K'
  },
  {
    id: '71',
    slug: 'ai-for-diplomacy-and-international-relations',
    title: 'AI for Diplomacy and International Relations',
    description: 'Enhance diplomatic negotiations, conflict resolution, and global cooperation with AI-powered sentiment analysis, multilingual communication, and geopolitical forecasting',
    duration: '1 hour 20 min read',
    difficulty: 'Advanced',
    category: 'Diplomacy & International Relations',
    tags: ['Multilingual Communication', 'Sentiment Analysis', 'Geopolitical Forecasting'],
    author: 'Ambassador Dr. Maria Rodriguez',
    avatar: 'MR',
    rating: 4.7,
    students: '3.8K'
  },
  {
    id: '72',
    slug: 'ai-in-textile-and-apparel-manufacturing',
    title: 'AI in Textile and Apparel Manufacturing',
    description: 'Revolutionize fabric production, garment design, and supply chain efficiency with AI-powered quality control, predictive maintenance, and sustainable manufacturing practices',
    duration: '1 hour 30 min read',
    difficulty: 'Advanced',
    category: 'Textile & Apparel Manufacturing',
    tags: ['Quality Control', 'Predictive Maintenance', 'Design Innovation'],
    author: 'Sophia Chen',
    avatar: 'SC',
    rating: 4.8,
    students: '4.1K'
  },
  {
    id: '73',
    slug: 'ai-for-disability-services-and-inclusion',
    title: 'AI for Disability Services and Inclusion',
    description: 'Enhance accessibility, independent living, and social participation with AI-powered assistive technologies, personalized support systems, and inclusive design principles',
    duration: '1 hour 35 min read',
    difficulty: 'Advanced',
    category: 'Disability Services & Inclusion',
    tags: ['Assistive Technologies', 'Personalized Support', 'Inclusive Design'],
    author: 'Dr. James Wilson',
    avatar: 'JW',
    rating: 4.9,
    students: '4.5K'
  },
  {
    id: '74',
    slug: 'ai-in-waste-management-and-recycling',
    title: 'AI in Waste Management and Recycling',
    description: 'Optimize waste collection, sorting, and processing with AI-powered route optimization, automated classification, and circular economy solutions',
    duration: '1 hour 40 min read',
    difficulty: 'Expert',
    category: 'Waste Management & Recycling',
    tags: ['Collection Optimization', 'Automated Sorting', 'Recycling Innovation'],
    author: 'Dr. Emily Parker',
    avatar: 'EP',
    rating: 4.9,
    students: '4.2K'
  }
];

const categories = [
  'All',
  'Content Creation',
  'Entrepreneurship',
  'Marketing',
  'Development',
  'Data Science',
  'Customer Service',
  'Design',
  'Finance',
  'Human Resources',
  'Security',
  'Operations',
  'Healthcare',
  'Education',
  'Legal',
  'Retail',
  'Manufacturing',
  'Project Management',
  'Agriculture',
  'Nonprofit',
  'Energy',
  'Media & Entertainment',
  'Transportation',
  'Real Estate',
  'Insurance',
  'Telecommunications',
  'Government',
  'Pharmaceuticals',
  'Environment',
  'Sports & Entertainment',
  'Aviation & Aerospace',
  'Fashion & Luxury',
  'Food & Beverage',
  'Event Management',
  'Construction & Infrastructure',
  'Automotive & Mobility',
  'Media & Journalism',
  'Mining & Resources',
  'Tourism & Hospitality',
  'Water & Utilities',
  'Biotechnology & Life Sciences',
  'Education & Learning',
  'Robotics & Automation',
  'Legal & Compliance',
  'Agriculture & AgriTech',
  'Semiconductors & Electronics',
  'Research & Academia',
  'Defence & Security',
  'Small Business & Entrepreneurship',
  'Space & Satellite Technology',
  'Renewable Energy Systems',
  'Non-Profit Organizations',
  'Blockchain & Cryptocurrency',
  'Mental Health & Wellness',
  'Quantum Computing',
  'Biomedical Engineering',
  'Urban Planning & Smart Cities',
  'Food Technology & Nutrition',
  'Disaster Management & Humanitarian Aid',
  'Materials Science & Engineering',
  'Architectural Design & Construction',
  'Journalism & News Media',
  'Veterinary Medicine',
  'Music & Entertainment Production',
  'Museums & Cultural Heritage',
  'Sports Analytics & Performance',
  'Religious & Spiritual Organizations',
  'Luxury Goods & Fashion',
  'Senior Care & Aging',
  'Maritime & Ocean Technology',
  'Forestry & Woodland Management',
  'Diplomacy & International Relations',
  'Textile & Apparel Manufacturing',
  'Disability Services & Inclusion',
  'Waste Management & Recycling'
];

const featuredPlaybook = {
  id: '1',
  slug: 'complete-content-creation-pipeline',
  title: 'Complete Content Creation Pipeline',
  description: 'End-to-end workflow for creating engaging content with AI assistance',
  category: 'Content Creation',
  updatedAt: 'Nov 2025',
  downloads: '12.4K',
  rating: 4.8,
  tags: ['Writing', 'SEO', 'Social Media'],
  author: 'Alex Morgan',
  avatar: 'AM',
  students: '2.1K'
} as {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  updatedAt: string;
  downloads: string;
  rating: number;
  tags: string[];
  author: string;
  avatar: string;
  students: string;
};

// Revolutionary 3D Playbook Visualization Component
const PlaybookOrbit = () => {
  return (
    <div className="relative w-64 h-64 mx-auto mb-8">
      {/* Central Core */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-2xl shadow-purple-500/50 animate-pulse"></div>
      
      {/* Orbiting Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg"
          animate={{
            rotate: 360,
            x: Math.cos((i * 60 * Math.PI) / 180) * 80,
            y: Math.sin((i * 60 * Math.PI) / 180) * 80,
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            x: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        />
      ))}
      
      {/* Inner Orbit */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full shadow-md"
          animate={{
            rotate: -360,
            x: Math.cos((i * 120 * Math.PI) / 180) * 50,
            y: Math.sin((i * 120 * Math.PI) / 180) * 50,
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            x: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 15, repeat: Infinity, ease: "linear" },
          }}
        />
      ))}
    </div>
  );
};

export default function PlaybooksPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 -left-40 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full mix-blend-soft-light filter blur-[100px] animate-float"></div>
        <div className="absolute top-2/3 right-0 w-[1000px] h-[1000px] bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full mix-blend-soft-light filter blur-[120px] animate-float animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full mix-blend-soft-light filter blur-[80px] animate-float animation-delay-4000"></div>
        {/* Extra orbs for ultra premium effect */}
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-indigo-600/25 to-blue-600/25 rounded-full mix-blend-soft-light filter blur-[90px] animate-pulse animation-delay-3000"></div>
        <div className="absolute top-3/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-pink-600/20 to-rose-600/20 rounded-full mix-blend-soft-light filter blur-[70px] animate-pulse animation-delay-5000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/15 to-teal-500/15 rounded-full mix-blend-soft-light filter blur-[100px] animate-pulse animation-delay-6000"></div>
        {/* New pulsating rings for extra premium effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-cyan-500/10 animate-ping animation-delay-7000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-purple-500/10 animate-ping animation-delay-9000"></div>
      </div>
      
      {/* Live Activity Feed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90 backdrop-blur-md rounded-xl border border-gray-800/50 p-4 mb-6">
          <div className="flex items-center">
            <div className="flex items-center space-x-2 mr-4">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">LIVE</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                <span className="text-blue-400 font-medium">New Playbook:</span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-gray-300">Enterprise AI Implementation Guide released</span>
                <span className="text-gray-400 mx-4">•</span>
                <span className="text-purple-400 font-medium">Trending:</span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-gray-300">AI for Marketing Campaigns gets 5-star rating</span>
                <span className="text-gray-400 mx-4">•</span>
                <span className="text-cyan-400 font-medium">Popular:</span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-gray-300">Building an AI-Powered Startup downloaded 1000+ times</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-full blur-xl opacity-70"></div>
              <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Workflow Playbooks
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Step-by-step guides to master AI workflows and integrate tools into your processes. 
            Expert-crafted playbooks for every role and industry.
          </motion.p>
          
          {/* Monetag Direct Link Zone - Talented tag */}
          <div className="mb-8 text-center">
            <a href="https://otieu.com/4/10465890" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full shadow-lg hover:from-amber-600 hover:to-orange-600 transition-all font-bold text-lg transform hover:scale-105">
              💰 Earn More with Monetag
            </a>
          </div>
          
          {/* Enhanced Search and Filters */}
          <motion.div 
            className="max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1 group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search playbooks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pl-12 transition-all group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/20"
                  />
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full md:w-48 px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none pr-10 transition-all group-hover:border-cyan-500/50 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="recent">Most Recent</option>
                    <option value="rating">Highest Rated</option>
                    <option value="downloads">Most Downloads</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Stats Banner */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 text-center relative overflow-hidden"
            whileHover={{ y: -10, rotateX: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-3">
                <BookOpen className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-1">50+</div>
              <div className="text-gray-400 text-sm">Playbooks</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 text-center relative overflow-hidden"
            whileHover={{ y: -10, rotateX: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-3">
                <Tag className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-1">25</div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 text-center relative overflow-hidden"
            whileHover={{ y: -10, rotateX: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-3">
                <Download className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-1">100K+</div>
              <div className="text-gray-400 text-sm">Downloads</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 text-center relative overflow-hidden"
            whileHover={{ y: -10, rotateX: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 opacity-0 hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-3">
                <Star className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-amber-400 mb-1">4.8</div>
              <div className="text-gray-400 text-sm">Avg. Rating</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Categories Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all relative overflow-hidden flex items-center ${
                activeCategory === category 
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{category}</span>
              {category !== 'All' && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 opacity-0 hover:opacity-100 transition-opacity"></div>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Playbooks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {playbooks.map((playbook, index) => (
            <motion.div
              key={playbook.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 hover:border-purple-500/50 transition-all cursor-pointer group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-2xl border border-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              {/* Premium Badge */}
              {index === 0 && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                    <Crown className="w-3 h-3 mr-1" />
                    PREMIUM
                  </div>
                </div>
              )}
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-purple-300 transition-colors">
                    {playbook.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 mb-6 text-sm">
                  {playbook.description}
                </p>
                
                {/* Author Info */}
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-xs font-bold mr-2">
                    {playbook.avatar}
                  </div>
                  <span className="text-gray-300 text-sm">{playbook.author}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {playbook.duration}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full flex items-center ${
                    playbook.difficulty === 'Beginner' ? 'bg-green-900/50 text-green-300' :
                    playbook.difficulty === 'Intermediate' ? 'bg-yellow-900/50 text-yellow-300' :
                    'bg-red-900/50 text-red-300'
                  }`}>
                    <Target className="w-3 h-3 mr-1" />
                    {playbook.difficulty}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {playbook.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full flex items-center">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Rating and Students */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1 fill-current" />
                    <span className="text-sm font-medium">{playbook.rating}</span>
                    <span className="text-gray-500 text-sm ml-2">({playbook.students})</span>
                  </div>
                  <span className="text-sm text-gray-500">{playbook.category}</span>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                  <div className="flex space-x-2">
                    <button className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors">
                      <Heart className="w-4 h-4 text-gray-400 hover:text-red-400" />
                    </button>
                    <button className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors">
                      <Bookmark className="w-4 h-4 text-gray-400 hover:text-blue-400" />
                    </button>
                    <button className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors">
                      <Share2 className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
                    </button>
                  </div>
                  <Link href={`/playbooks/${playbook.slug}`} className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center">
                    View Details
                    <svg 
                      className="h-4 w-4 ml-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Featured Playbook */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
            Featured Playbook
            <Sparkles className="w-8 h-8 text-yellow-400 ml-3" />
          </h2>
          
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700 p-8 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/5 mb-8 lg:mb-0 lg:pr-8">
                <motion.div 
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl w-full h-64 flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <BookOpen className="w-16 h-16 text-white z-10" />
                  {/* Animated Particles */}
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                      animate={{
                        x: [0, Math.random() * 200 - 100],
                        y: [0, Math.random() * 200 - 100],
                        opacity: [0.2, 0],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </motion.div>
              </div>
              <div className="lg:w-3/5">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm rounded-full flex items-center">
                    <Crown className="w-4 h-4 mr-1" />
                    Editor's Choice
                  </span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full flex items-center">
                    <Tag className="w-4 h-4 mr-1" />
                    {featuredPlaybook.category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Updated {featuredPlaybook.updatedAt}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{featuredPlaybook.title}</h3>
                <p className="text-gray-300 mb-6 text-lg">
                  {featuredPlaybook.description}
                </p>
                
                {/* Author Info */}
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-sm font-bold mr-3">
                    {featuredPlaybook.avatar}
                  </div>
                  <div>
                    <div className="text-gray-300 font-medium">{featuredPlaybook.author}</div>
                    <div className="text-gray-500 text-sm">{featuredPlaybook.students} students</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPlaybook.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-sm flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1 fill-current" />
                    <span className="font-bold text-lg">{featuredPlaybook.rating}</span>
                    <span className="text-gray-500 ml-2">({featuredPlaybook.downloads} downloads)</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href={`/playbooks/${featuredPlaybook.slug}`} className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl font-bold hover:from-purple-500 hover:to-indigo-500 transition-all flex items-center shadow-lg shadow-purple-500/30">
                    <Download className="h-5 w-5 mr-2" />
                    Download Playbook
                  </Link>
                  <button className="px-8 py-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-2xl font-bold transition-all flex items-center">
                    <Play className="h-5 w-5 mr-2" />
                    Watch Overview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Learning Pathways */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center">
            <Rocket className="w-8 h-8 text-cyan-400 mr-3" />
            Learning Pathways
            <Rocket className="w-8 h-8 text-cyan-400 ml-3" />
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 text-center relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Beginner Path</h3>
                <p className="text-gray-400 mb-4">Start your AI journey with foundational concepts</p>
                <div className="text-2xl font-bold text-blue-400 mb-2">12 Playbooks</div>
                <div className="text-gray-500 flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Estimated 20 hours
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 text-center relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Intermediate Path</h3>
                <p className="text-gray-400 mb-4">Advance your skills with practical applications</p>
                <div className="text-2xl font-bold text-purple-400 mb-2">18 Playbooks</div>
                <div className="text-gray-500 flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Estimated 35 hours
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 text-center relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 opacity-0 hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Path</h3>
                <p className="text-gray-400 mb-4">Master advanced techniques and leadership skills</p>
                <div className="text-2xl font-bold text-amber-400 mb-2">20 Playbooks</div>
                <div className="text-gray-500 flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Estimated 50 hours
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div 
          className="mt-24 text-center py-16 relative overflow-hidden rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-3xl"></div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px] rounded-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center">
              <Lightbulb className="w-10 h-10 text-yellow-400 mr-4" />
              Become an AI Workflow Expert
              <Lightbulb className="w-10 h-10 text-yellow-400 ml-4" />
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Join thousands of professionals who have transformed their work with our expert-crafted playbooks.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/pro" className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl font-bold hover:from-green-500 hover:to-emerald-500 transition-all shadow-lg shadow-green-500/30 flex items-center">
                <Crown className="w-5 h-5 mr-2" />
                Get Unlimited Access
              </Link>
              <button className="px-8 py-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-2xl font-bold transition-all flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Preview Sample
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}