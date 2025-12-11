'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Define types for our data
type Article = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  avatar: string;
  tags: string[];
  relatedArticles: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
  }[];
};

// Mock data for articles with professional content
const articleData: Record<string, Article> = {
  '1': {
    id: '1',
    title: 'The Convergence of Quantum Computing and Artificial Intelligence: A Paradigm Shift',
    excerpt: 'Exploring how quantum computing will revolutionize AI capabilities and unlock unprecedented computational possibilities for machine learning algorithms.',
    content: `
      <p>In the rapidly evolving landscape of technological advancement, the convergence of quantum computing and artificial intelligence represents one of the most promising frontiers. As classical computing approaches its physical limitations, quantum computing emerges as a revolutionary paradigm that could fundamentally transform our approach to machine learning and AI development.</p>
      
      <h2>Quantum Supremacy and Machine Learning</h2>
      <p>Quantum supremacy, achieved when quantum computers can solve problems that are practically impossible for classical computers, has profound implications for AI. Google's demonstration of quantum supremacy in 2019 marked a watershed moment, proving that quantum processors could perform specific calculations exponentially faster than their classical counterparts.</p>
      
      <p>For machine learning, this translates to unprecedented capabilities in optimization problems, which are fundamental to training neural networks. Variational Quantum Eigensolvers (VQE) and Quantum Approximate Optimization Algorithms (QAOA) offer the potential to solve complex optimization landscapes that are currently computationally prohibitive.</p>
      
      <h2>Quantum Machine Learning Algorithms</h2>
      <p>The development of quantum-native machine learning algorithms represents a paradigm shift in computational approach:</p>
      
      <h3>Quantum Support Vector Machines</h3>
      <p>By leveraging quantum kernel methods, these algorithms can classify data in high-dimensional Hilbert spaces that are inaccessible to classical computers. This enables pattern recognition in datasets with exponentially large feature spaces, potentially revolutionizing fields like genomics and financial modeling.</p>
      
      <h3>Quantum Neural Networks</h3>
      <p>Parametrized quantum circuits can function as quantum neural networks, offering new approaches to learning and inference. These networks exploit quantum phenomena like superposition and entanglement to process information in fundamentally different ways than classical neural networks.</p>
      
      <h3>Quantum Boltzmann Machines</h3>
      <p>Quantum annealing approaches to training Boltzmann machines could enable more efficient sampling from complex probability distributions, crucial for probabilistic machine learning models and generative AI systems.</p>
      
      <h2>Current Limitations and Roadmap</h2>
      <p>Despite tremendous promise, practical quantum advantage for AI faces significant hurdles:</p>
      
      <ul>
        <li><strong>Noise and Decoherence:</strong> Current quantum processors are "noisy intermediate-scale quantum" (NISQ) devices, prone to errors that accumulate rapidly and limit computational depth</li>
        <li><strong>Qubit Quality:</strong> Achieving sufficient coherence times and gate fidelities for practical quantum algorithms requires advances in materials science and engineering</li>
        <li><strong>Error Correction:</strong> Fault-tolerant quantum computing demands millions of physical qubits to create a single logical qubit, requiring breakthroughs in quantum error correction</li>
      </ul>
      
      <p>Experts predict practical quantum advantage for specific AI applications within 7-10 years, with specialized applications in quantum chemistry and optimization emerging sooner.</p>
      
      <h2>Strategic Implications for Organizations</h2>
      <p>Forward-thinking organizations should begin preparing for the quantum-AI convergence:</p>
      
      <ul>
        <li><strong>Quantum Literacy:</strong> Invest in education and training programs to develop quantum competency among technical teams</li>
        <li><strong>Hybrid Strategies:</strong> Develop expertise in combining classical and quantum approaches for optimal problem-solving</li>
        <li><strong>Problem Identification:</strong> Catalog optimization and simulation challenges in your domain that could benefit from quantum acceleration</li>
        <li><strong>Partnership Development:</strong> Engage with quantum computing companies, research institutions, and government initiatives</li>
      </ul>
      
      <p>The quantum-AI revolution represents not just an incremental advance but a fundamental reimagining of computational possibility. Organizations that begin exploring this intersection today will be best positioned to capitalize on the transformative potential when practical quantum advantage arrives.</p>
    `,
    date: 'Dec 5, 2025',
    author: 'Dr. Elena Rodriguez',
    readTime: '12 min read',
    category: 'Quantum AI',
    avatar: 'ER',
    tags: ['Quantum Computing', 'Machine Learning', 'Future Tech'],
    relatedArticles: [
      {
        id: '2',
        title: 'Ethical Frameworks for Autonomous AI Systems: Navigating the Moral Landscape',
        excerpt: 'A comprehensive examination of ethical considerations in AI development, focusing on bias mitigation, transparency, and accountability mechanisms.',
        date: 'Dec 1, 2025',
        readTime: '15 min read'
      },
      {
        id: '3',
        title: 'Transforming Healthcare Through Predictive AI: Clinical Decision Support Evolution',
        excerpt: 'How machine learning algorithms are revolutionizing diagnostic accuracy and personalized treatment plans in modern healthcare systems.',
        date: 'Nov 28, 2025',
        readTime: '18 min read'
      }
    ]
  },
  '2': {
    id: '2',
    title: 'Ethical Frameworks for Autonomous AI Systems: Navigating the Moral Landscape',
    excerpt: 'A comprehensive examination of ethical considerations in AI development, focusing on bias mitigation, transparency, and accountability mechanisms.',
    content: `
      <p>As artificial intelligence systems become increasingly autonomous and influential in critical decision-making processes, the ethical implications of their deployment demand rigorous examination. The development of robust ethical frameworks is essential to ensure that AI technologies serve humanity's best interests while minimizing potential harms.</p>
      
      <h2>The Challenge of Algorithmic Bias</h2>
      <p>Algorithmic bias represents one of the most pressing ethical concerns in AI development. These biases often originate from:</p>
      
      <ul>
        <li><strong>Training Data Limitations:</strong> Historical datasets frequently encode societal prejudices and inequalities that become perpetuated by AI systems</li>
        <li><strong>Feature Selection Biases:</strong> The choice of input variables can inadvertently discriminate against protected groups</li>
        <li><strong>Feedback Loop Amplification:</strong> AI systems deployed in real-world settings can reinforce existing biases through recursive learning processes</li>
      </ul>
      
      <p>Effective bias mitigation requires proactive measures throughout the AI development lifecycle, from diverse dataset curation to continuous monitoring of system outputs for discriminatory patterns.</p>
      
      <h2>Transparency and Explainability</h2>
      <p>The "black box" nature of many AI systems creates significant ethical challenges, particularly in high-stakes applications like healthcare, criminal justice, and finance. Organizations deploying AI systems must balance:</p>
      
      <ul>
        <li><strong>Model Performance:</strong> More interpretable models often sacrifice predictive accuracy</li>
        <li><strong>Regulatory Compliance:</strong> Legal frameworks increasingly require explanations for automated decisions</li>
        <li><strong>Stakeholder Trust:</strong> Users are more likely to accept AI recommendations when they understand the underlying rationale</li>
      </ul>
      
      <p>Emerging techniques in explainable AI (XAI) offer promising approaches to demystify complex models while preserving their effectiveness.</p>
      
      <h2>Accountability Mechanisms</h2>
      <p>Establishing clear lines of accountability for AI-driven decisions is crucial for responsible deployment:</p>
      
      <h3>Human-in-the-Loop Systems</h3>
      <p>Critical decisions should involve meaningful human oversight, ensuring that automated recommendations are reviewed by qualified personnel before implementation.</p>
      
      <h3>Audit Trails and Documentation</h3>
      <p>Comprehensive logging of AI system inputs, processes, and outputs enables retrospective analysis and accountability when adverse outcomes occur.</p>
      
      <h3>Liability Frameworks</h3>
      <p>Legal structures must evolve to address questions of responsibility when AI systems cause harm, whether through manufacturer liability, operator negligence, or novel forms of corporate accountability.</p>
      
      <h2>Governance Best Practices</h2>
      <p>Organizations should implement comprehensive AI governance frameworks that include:</p>
      
      <ul>
        <li><strong>Ethics Review Boards:</strong> Multidisciplinary committees to evaluate AI projects for potential ethical concerns</li>
        <li><strong>Impact Assessments:</strong> Systematic evaluation of potential positive and negative consequences before deployment</li>
        <li><strong>Ongoing Monitoring:</strong> Continuous surveillance of AI system performance and societal impact</li>
        <li><strong>Stakeholder Engagement:</strong> Regular consultation with affected communities and advocacy groups</li>
      </ul>
      
      <p>The ethical development of autonomous AI systems requires sustained commitment from technologists, policymakers, and civil society. By embedding ethical considerations at every stage of the AI lifecycle, we can harness the transformative potential of artificial intelligence while safeguarding fundamental human values and dignity.</p>
    `,
    date: 'Dec 1, 2025',
    author: 'Prof. Michael Chen',
    readTime: '15 min read',
    category: 'AI Ethics',
    avatar: 'MC',
    tags: ['Ethics', 'Bias', 'Transparency', 'Governance'],
    relatedArticles: [
      {
        id: '1',
        title: 'The Convergence of Quantum Computing and Artificial Intelligence: A Paradigm Shift',
        excerpt: 'Exploring how quantum computing will revolutionize AI capabilities and unlock unprecedented computational possibilities for machine learning algorithms.',
        date: 'Dec 5, 2025',
        readTime: '12 min read'
      },
      {
        id: '6',
        title: 'AI-Powered Cybersecurity: Defending Against Next-Generation Threats',
        excerpt: 'How artificial intelligence is transforming cybersecurity through predictive threat detection, automated response systems, and adaptive defense mechanisms.',
        date: 'Nov 18, 2025',
        readTime: '13 min read'
      }
    ]
  },
  'featured': {
    id: 'featured',
    title: 'The Singularity Horizon: When Artificial General Intelligence Transforms Humanity',
    excerpt: 'An in-depth exploration of the theoretical and practical implications of achieving AGI, examining timelines, potential scenarios, and preparation strategies for the post-human era.',
    content: `
      <p>The concept of technological singularity—the hypothetical moment when artificial general intelligence surpasses human intelligence—represents one of the most profound questions facing humanity. As we approach the threshold of potentially creating minds that exceed our own cognitive capabilities, understanding the implications becomes paramount for our collective future.</p>
      
      <h2>Defining Artificial General Intelligence</h2>
      <p>Artificial General Intelligence (AGI) differs fundamentally from narrow AI systems that excel in specific domains. True AGI would possess the ability to understand, learn, and apply knowledge across diverse fields with human-like flexibility and creativity. This encompasses not just computational prowess but genuine comprehension, reasoning, and perhaps even consciousness.</p>
      
      <p>The path to AGI involves overcoming significant technical challenges, including:</p>
      
      <ul>
        <li><strong>Common Sense Reasoning:</strong> Developing AI systems that understand the implicit knowledge humans take for granted</li>
        <li><strong>Transfer Learning:</strong> Creating systems that can apply knowledge from one domain to entirely different contexts</li>
        <li><strong>Metacognition:</strong> Enabling AI to understand its own thinking processes and limitations</li>
        <li><strong>Creative Synthesis:</strong> Generating novel ideas and solutions that transcend programmed parameters</li>
      </ul>
      
      <h2>Predictive Timelines and Methodologies</h2>
      <p>Expert predictions for AGI development vary widely, reflecting both the complexity of the challenge and the uncertainty inherent in technological forecasting:</p>
      
      <h3>Optimistic Projections (2030-2040)</h3>
      <p>Researchers like Ray Kurzweil predict AGI emergence by 2045, based on exponential growth in computing power and algorithmic sophistication. This view assumes continued rapid progress in deep learning, neuromorphic computing, and brain-computer interfaces.</p>
      
      <h3>Mainstream Estimates (2040-2060)</h3>
      <p>Surveys of AI researchers suggest a median estimate of 2060 for a 50% probability of high-level machine intelligence. This timeframe accounts for the need to solve fundamental problems in reasoning, learning, and embodiment that remain unsolved.</p>
      
      <h3>Conservative Views (Beyond 2100)</h3>
      <p>Some experts argue that consciousness and general intelligence involve emergent properties that cannot be replicated through computational means alone, suggesting AGI may be centuries away or fundamentally impossible.</p>
      
      <h2>Scenario Analysis: Possible Futures</h2>
      <p>The arrival of AGI could unfold along several trajectories, each with distinct implications:</p>
      
      <h3>Cooperative Coexistence</h3>
      <p>In this optimistic scenario, AGI systems work alongside humans as intellectual partners, amplifying human capabilities while respecting human values and autonomy. This requires successful alignment of AI goals with human welfare and the development of robust cooperation mechanisms.</p>
      
      <h3>Gradual Integration</h3>
      <p>Rather than a sudden breakthrough, AGI might emerge gradually through successive enhancements to narrow AI systems. This slower progression could allow society to adapt incrementally while maintaining human agency in decision-making processes.</p>
      
      <h3>Rapid Takeoff</h3>
      <p>If AGI achieves the ability to recursively self-improve, it could undergo rapid capability gains that quickly surpass human understanding. This scenario raises profound questions about control, alignment, and the preservation of human relevance.</p>
      
      <h2>Preparation Strategies</h2>
      <p>Regardless of the specific trajectory, proactive preparation is essential:</p>
      
      <ul>
        <li><strong>Technical Alignment:</strong> Developing robust methods for ensuring AI systems pursue intended goals and respect human values</li>
        <li><strong>Institutional Frameworks:</strong> Creating governance structures capable of managing superintelligent systems</li>
        <li><strong>Economic Adaptation:</strong> Preparing for potential disruptions to labor markets and wealth distribution</li>
        <li><strong>Philosophical Inquiry:</strong> Examining fundamental questions about consciousness, personhood, and the nature of intelligence</li>
      </ul>
      
      <p>The singularity horizon represents not just a technological milestone but an existential challenge that will define the future of intelligence itself. By approaching this transformation with wisdom, foresight, and humility, humanity can strive to ensure that the emergence of artificial general intelligence enhances rather than diminishes our collective potential.</p>
    `,
    date: 'Dec 5, 2025',
    author: 'Dr. Katherine Morrison',
    readTime: '22 min read',
    category: 'AGI',
    avatar: 'KM',
    tags: ['AGI', 'Singularity', 'Future of Humanity', 'Transhumanism'],
    relatedArticles: [
      {
        id: '1',
        title: 'The Convergence of Quantum Computing and Artificial Intelligence: A Paradigm Shift',
        excerpt: 'Exploring how quantum computing will revolutionize AI capabilities and unlock unprecedented computational possibilities for machine learning algorithms.',
        date: 'Dec 5, 2025',
        readTime: '12 min read'
      },
      {
        id: '7',
        title: 'The Evolution of Natural Language Understanding: From Syntax to Semantics',
        excerpt: 'Advances in NLP that enable machines to comprehend context, nuance, and implied meaning in human language with unprecedented accuracy.',
        date: 'Nov 15, 2025',
        readTime: '11 min read'
      }
    ]
  }
};

export default function ArticleDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulate API call to fetch article data
    const fetchArticle = () => {
      setTimeout(() => {
        const articleId = params.id;
        const foundArticle = articleData[articleId];
        
        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          setError(true);
        }
        setLoading(false);
      }, 500);
    };

    fetchArticle();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading research article...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-8">Sorry, we couldn't find the research article you're looking for.</p>
          <button 
            onClick={() => router.push('/insights')}
            className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-bold hover:from-cyan-500 hover:to-blue-500 transition-all"
          >
            Browse All Research
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <main className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <button 
          onClick={() => router.push('/insights')}
          className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Insights
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Article Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm rounded-full">
                  {article.category}
                </span>
                <span className="text-gray-500 text-sm">{article.date} • {article.readTime}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
              <p className="text-xl text-gray-300 mb-8">{article.excerpt}</p>
              
              {/* Author Info */}
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-lg font-bold mr-4">
                  {article.avatar}
                </div>
                <div>
                  <div className="text-lg font-medium">{article.author}</div>
                  <div className="text-gray-500 text-sm">Lead AI Researcher</div>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Article Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 mb-8"
            >
              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </motion.div>

            {/* Comments Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Research Discussion</h2>
              
              <div className="mb-6">
                <textarea 
                  placeholder="Share your insights or questions about this research..." 
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  rows={4}
                ></textarea>
                <div className="flex justify-end mt-3">
                  <button className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-medium hover:from-cyan-500 hover:to-blue-500 transition-all">
                    Post Response
                  </button>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                    JD
                  </div>
                  <div>
                    <div className="font-medium">Dr. John Davies</div>
                    <div className="text-gray-400 text-sm mb-2">Fascinating analysis on quantum computing applications. I'm particularly intrigued by the potential for quantum optimization in protein folding simulations for drug discovery.</div>
                    <div className="text-gray-500 text-xs">3 hours ago</div>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                    SA
                  </div>
                  <div>
                    <div className="font-medium">Prof. Sarah Adams</div>
                    <div className="text-gray-400 text-sm mb-2">The timeline projections seem optimistic given current hardware limitations. My research suggests we're still 12-15 years from practical quantum advantage in most AI applications.</div>
                    <div className="text-gray-500 text-xs">6 hours ago</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Quick Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 mb-8"
            >
              <h3 className="text-xl font-bold mb-4">Research Tools</h3>
              
              <div className="space-y-3">
                <button className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-medium hover:from-cyan-500 hover:to-blue-500 transition-all flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Research PDF
                </button>
                
                <button className="w-full py-3 bg-gray-700/50 hover:bg-gray-600/50 rounded-xl font-medium transition-all flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share Research
                </button>
                
                <button className="w-full py-3 bg-gray-700/50 hover:bg-gray-600/50 rounded-xl font-medium transition-all flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  Save to Research Library
                </button>
              </div>
            </motion.div>

            {/* Related Articles */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6"
            >
              <h3 className="text-xl font-bold mb-4">Related Research</h3>
              
              <div className="space-y-4">
                {article.relatedArticles.map((related) => (
                  <div key={related.id} className="flex items-start p-3 bg-gray-700/30 rounded-xl cursor-pointer hover:bg-gray-700/50 transition-colors">
                    <div className="bg-gray-700 w-12 h-12 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-sm">🔬</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{related.title}</h4>
                      <p className="text-gray-400 text-sm mb-1">{related.excerpt}</p>
                      <div className="flex text-gray-500 text-xs">
                        <span>{related.date}</span>
                        <span className="mx-2">•</span>
                        <span>{related.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link href="/insights" className="block mt-4 text-cyan-400 hover:text-cyan-300 text-center">
                View All Research
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}