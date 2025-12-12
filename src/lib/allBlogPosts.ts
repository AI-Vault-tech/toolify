interface Author {
  name: string;
  avatar: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: Author;
  category: string;
  tags: string[];
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'the-future-of-ai-content-creation',
    title: 'The Future of AI Content Creation: Trends Shaping 2025',
    excerpt: 'Explore how emerging AI technologies are revolutionizing content creation and what it means for creators in 2025.',
    content: `
      <h2>The Evolution of AI Content Creation</h2>
      <p>As we move deeper into 2025, artificial intelligence continues to reshape the landscape of content creation. From text and image generation to video production and audio synthesis, AI tools are becoming increasingly sophisticated and accessible.</p>
      
      <h3>Key Trends for 2025</h3>
      <ul>
        <li><strong>Multimodal AI Integration</strong>: Tools that seamlessly combine text, image, audio, and video generation</li>
        <li><strong>Real-time Collaboration</strong>: AI assistants that work alongside human creators in real-time</li>
        <li><strong>Ethical AI Frameworks</strong>: Increased focus on bias mitigation and transparent AI practices</li>
        <li><strong>Personalization at Scale</strong>: Hyper-personalized content generation for individual users</li>
      </ul>
    `,
    date: '2025-12-01',
    author: {
      name: 'Alex Rivera',
      avatar: 'AR',
      bio: 'AI Content Strategist with 8 years of experience in digital marketing and content creation.'
    },
    category: 'AI Trends',
    tags: ['AI', 'Content Creation', '2025 Trends', 'Multimodal AI'],
    readTime: '8 min read',
    image: 'ai-content-future'
  }
];