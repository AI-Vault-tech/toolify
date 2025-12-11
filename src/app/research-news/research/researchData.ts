export interface ResearchItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'whitepaper' | 'report' | 'case-study';
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  authorInitials: string;
  tags: string[];
  imageUrl?: string;
  featured: boolean;
  slug: string;
}

export const researchData: ResearchItem[] = [
  {
    id: '1',
    title: 'Advancements in Neural Architecture Search',
    excerpt: 'Exploring the latest breakthroughs in automated machine learning and neural architecture optimization.',
    content: `
      <h2>Introduction to Neural Architecture Search</h2>
      <p>Neural Architecture Search (NAS) has emerged as a powerful approach to automate the design of artificial neural networks. This paper explores the latest advancements in NAS, focusing on efficiency improvements and novel search strategies.</p>
      
      <h3>Key Findings</h3>
      <ul>
        <li>Novel weight-sharing mechanisms that reduce search time by up to 80%</li>
        <li>Evolutionary algorithms showing promising results in complex search spaces</li>
        <li>Integration of meta-learning techniques for more efficient architecture search</li>
      </ul>
      
      <h3>Methodology</h3>
      <p>Our approach combines reinforcement learning with gradient-based optimization to efficiently navigate the architecture search space. We introduce a novel attention mechanism that helps in better understanding the importance of different architectural components.</p>
      
      <h3>Results</h3>
      <p>The proposed method achieves state-of-the-art performance on CIFAR-10 and ImageNet datasets, with 3.2% better accuracy compared to previous approaches while using 40% fewer parameters.</p>
    `,
    category: 'whitepaper',
    date: '2023-06-15',
    readTime: '12 min read',
    author: 'Dr. Sarah Chen',
    authorRole: 'Lead AI Researcher',
    authorInitials: 'SC',
    tags: ['machine learning', 'neural networks', 'automl', 'deep learning'],
    imageUrl: '/images/research/nas-advancements.jpg',
    featured: true,
    slug: 'advancements-neural-architecture-search'
  },
  // Add more research items here...
];
