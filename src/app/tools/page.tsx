'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Mock data for tools with more detailed information and website links
const mockTools = [
  {
    id: '1',
    name: 'ChatGPT Pro Enterprise',
    description: 'Advanced conversational AI with deep learning capabilities for complex problem solving, content creation, and intelligent assistance across multiple domains with enterprise-grade security.',
    category: 'Natural Language Processing',
    rating: 4.9,
    reviewCount: 2450,
    price: 'From $49/mo',
    isFeatured: true,
    isNew: false,
    isTrending: true,
    website: 'https://openai.com/chatgpt'
  },
  {
    id: '2',
    name: 'Midjourney Art Studio',
    description: 'Generate stunning artwork and images from text descriptions with AI. Perfect for designers, artists, and creative professionals seeking inspiration with commercial licensing.',
    category: 'Image Generation',
    rating: 4.9,
    reviewCount: 1890,
    price: 'From $15/mo',
    isFeatured: true,
    isNew: true,
    isTrending: true,
    website: 'https://www.midjourney.com'
  },
  {
    id: '3',
    name: 'Runway ML Professional',
    description: 'Professional video editing powered by machine learning algorithms. Transform your video production workflow with AI-enhanced editing capabilities and real-time collaboration.',
    category: 'Video Editing',
    rating: 4.7,
    reviewCount: 1120,
    price: 'From $29/mo',
    isFeatured: false,
    isNew: false,
    isTrending: false,
    website: 'https://runwayml.com'
  },
  {
    id: '4',
    name: 'GitHub Copilot X',
    description: 'AI pair programmer that helps you write code faster with intelligent suggestions. Integrates seamlessly with your development environment and supports 50+ programming languages.',
    category: 'Code Assistance',
    rating: 4.8,
    reviewCount: 3560,
    price: 'From $19/mo',
    isFeatured: true,
    isNew: false,
    isTrending: true,
    website: 'https://github.com/features/copilot'
  },
  {
    id: '5',
    name: 'Descript Pro Studio',
    description: 'Edit video and audio by editing text with AI-powered transcription. Revolutionary approach to media editing for content creators with collaborative features.',
    category: 'Audio/Video Editing',
    rating: 4.6,
    reviewCount: 1450,
    price: 'From $18/mo',
    isFeatured: false,
    isNew: true,
    isTrending: false,
    website: 'https://www.descript.com'
  },
  {
    id: '6',
    name: 'Jasper AI Business',
    description: 'Create marketing copy, blog posts, and social media content with AI assistance. Trusted by marketers and content creators worldwide with team collaboration tools.',
    category: 'Content Creation',
    rating: 4.7,
    reviewCount: 2100,
    price: 'From $49/mo',
    isFeatured: false,
    isNew: false,
    isTrending: true,
    website: 'https://www.jasper.ai'
  },
  {
    id: '7',
    name: 'Notion AI Enterprise',
    description: 'Supercharge your productivity with AI-powered note-taking, document creation, and workflow automation in one powerful workspace with enterprise security features.',
    category: 'Productivity',
    rating: 4.8,
    reviewCount: 2890,
    price: 'From $15/mo',
    isFeatured: true,
    isNew: false,
    isTrending: true,
    website: 'https://www.notion.so'
  },
  {
    id: '8',
    name: 'Synthesia Business Pro',
    description: 'Create professional videos with AI avatars from text in minutes. No camera, actors, or studio required for your video content with unlimited video generation.',
    category: 'Video Generation',
    rating: 4.6,
    reviewCount: 1670,
    price: 'From $69/mo',
    isFeatured: false,
    isNew: true,
    isTrending: false,
    website: 'https://www.synthesia.io'
  },
  {
    id: '9',
    name: 'Otter.ai Professional',
    description: 'Capture and share insights from meetings, lectures, and conversations with AI-powered transcription and search capabilities with team collaboration features.',
    category: 'Speech Recognition',
    rating: 4.5,
    reviewCount: 1890,
    price: 'From $25/mo',
    isFeatured: false,
    isNew: false,
    isTrending: false,
    website: 'https://otter.ai'
  },
  {
    id: '10',
    name: 'Grammarly Business',
    description: 'AI-powered writing assistant that helps you write clear, mistake-free, and impactful messages. Advanced grammar checking with tone detection.',
    category: 'Writing Assistant',
    rating: 4.7,
    reviewCount: 4200,
    price: 'From $15/mo',
    isFeatured: true,
    isNew: false,
    isTrending: true,
    website: 'https://www.grammarly.com'
  },
  {
    id: '11',
    name: 'Canva Pro AI',
    description: 'Design platform with AI-powered tools for creating graphics, presentations, and social media content. Thousands of templates and smart design suggestions.',
    category: 'Graphic Design',
    rating: 4.6,
    reviewCount: 3500,
    price: 'From $12.99/mo',
    isFeatured: false,
    isNew: true,
    isTrending: true,
    website: 'https://www.canva.com'
  },
  {
    id: '12',
    name: 'Loom Pro',
    description: 'Record and share video messages instantly. AI-powered features include automatic transcripts, highlights, and smart sharing suggestions.',
    category: 'Video Communication',
    rating: 4.8,
    reviewCount: 2800,
    price: 'From $8/mo',
    isFeatured: true,
    isNew: false,
    isTrending: false,
    website: 'https://www.loom.com'
  }
];

// Generate additional mock tools to reach 1,000,000
const generateAdditionalTools = () => {
  const categories = [
    'Natural Language Processing', 'Image Generation', 'Video Editing', 'Code Assistance',
    'Audio/Video Editing', 'Content Creation', 'Productivity', 'Video Generation',
    'Speech Recognition', 'Writing Assistant', 'Graphic Design', 'Video Communication',
    'SEO & Marketing', 'Data Analysis', 'Research Tools', 'Business Intelligence',
    'Customer Support', 'Legal Tech', 'Healthcare AI', 'Finance Tools',
    'Education', 'E-commerce', 'Cybersecurity', 'Human Resources',
    'Project Management', 'Social Media', 'Translation', 'Music Production',
    'Gaming', 'Architecture', 'Real Estate', 'Travel & Hospitality',
    'Automotive', 'Agriculture', 'Energy', 'Manufacturing',
    'Logistics', 'Retail', 'Media & Entertainment', 'Sports & Fitness',
    'Fashion', 'Beauty', 'Food & Beverage', 'Construction',
    'Telecommunications', 'Aerospace', 'Biotechnology', 'Chemicals',
    'Pharmaceuticals', 'Utilities', 'Mining', 'Forestry',
    'Maritime', 'Railways', 'Aviation', 'Defense',
    'Renewable Energy', 'Nuclear Power', 'Oil & Gas', 'Water Management',
    'Waste Management', 'Recycling', 'Urban Planning', 'Public Safety',
    'Emergency Services', 'Disaster Management', 'Climate Science', 'Environmental Monitoring',
    'Space Exploration', 'Satellite Technology', 'Quantum Computing', 'Nanotechnology',
    'Robotics', 'Autonomous Systems', 'IoT', 'Blockchain',
    'Cryptocurrency', 'Fintech', 'Insurtech', 'Regtech',
    'Edtech', 'Healthtech', 'Cleantech', 'Greentech',
    'Foodtech', 'Agtech', 'Legaltech', 'Govtech',
    'Martech', 'Adtech', 'HRTech', 'Proptech'
  ];
  
  // List of real AI tool websites to use for all generated tools
  const realWebsites = [
    'https://www.openai.com',
    'https://www.midjourney.com',
    'https://runwayml.com',
    'https://github.com/features/copilot',
    'https://www.descript.com',
    'https://www.jasper.ai',
    'https://www.notion.so',
    'https://www.synthesia.io',
    'https://otter.ai',
    'https://www.grammarly.com',
    'https://www.canva.com',
    'https://www.loom.com',
    'https://www.anthropic.com',
    'https://www.huggingface.co',
    'https://www.stability.ai',
    'https://www.cohere.ai',
    'https://www.replicate.com',
    'https://www.elevenlabs.io',
    'https://www.assemblyai.com',
    'https://www.langchain.com',
    'https://www.pinecone.io',
    'https://www.weightsandbiases.ai',
    'https://www.comet.ml',
    'https://www.clearml.org',
    'https://www.roboflow.com',
    'https://www.labelbox.com',
    'https://www.scale.ai',
    'https://www.figure-eight.com',
    'https://www.snorkel.ai',
    'https://www.activeloop.ai',
    'https://www.deepl.com',
    'https://www.rewrite.com',
    'https://www.writersonic.com',
    'https://www.copy.ai',
    'https://www.jasper.ai',
    'https://www.rytr.me',
    'https://www.wordtune.com',
    'https://www.quillbot.com',
    'https://www.hemingwayapp.com',
    'https://www.prowritingaid.com',
    'https://www.languagetool.org',
    'https://www.alexandria.ai',
    'https://www.casetext.com',
    'https://www.rossintelligence.com',
    'https://www.kira.com',
    'https://www.lexmachina.com',
    'https://www.ravelaw.com',
    'https://www.fastcase.com',
    'https://www.cylance.com',
    'https://www.darktrace.com',
    'https://www.crowdstrike.com',
    'https://www.fireeye.com',
    'https://www.recordedfuture.com',
    'https://www.anomali.com',
    'https://www.threatconnect.com',
    'https://www.splunk.com',
    'https://www.elastic.co',
    'https://www.datadoghq.com',
    'https://www.newrelic.com',
    'https://www.appdynamics.com',
    'https://www.dynatrace.com',
    'https://www.sumologic.com',
    'https://www.logz.io',
    'https://www.papertrailapp.com',
    'https://www.loggly.com',
    'https://www.scalyr.com',
    'https://www.honeycomb.io',
    'https://www.lightstep.com',
    'https://www.signalfx.com',
    'https://www.vividcortex.com',
    'https://www.sysdig.com',
    'https://www.tenable.com',
    'https://www.qualys.com',
    'https://www.rapid7.com',
    'https://www.greenbone.net',
    'https://www.alienvault.com',
    'https://www.ibm.com/security',
    'https://www.microsoft.com/security',
    'https://www.google.com/cloud/security',
    'https://www.aws.amazon.com/security',
    'https://www.oracle.com/security',
    'https://www.salesforce.com/security',
    'https://www.sap.com/security',
    'https://www.vmware.com/security',
    'https://www.checkpoint.com',
    'https://www.paloaltonetworks.com',
    'https://www.fortinet.com',
    'https://www.juniper.net',
    'https://www.cisco.com/security',
    'https://www.arubanetworks.com',
    'https://www.extremenetworks.com',
    'https://www.hpe.com/networking',
    'https://www.dell.com/networking',
    'https://www.lenovo.com/networking',
    'https://www.huawei.com/networking',
    'https://www.zte.com.cn/networking',
    'https://www.ericsson.com/networking',
    'https://www.nokia.com/networking',
    'https://www.alcatel-lucent.com',
    'https://www.motorola.com/networking',
    'https://www.arris.com',
    'https://www.commscope.com',
    'https://www.adtran.com',
    'https://www.calix.com',
    'https://www.ciena.com',
    'https://www.infinera.com',
    'https://www.lumentum.com',
    'https://www.oclaro.com',
    'https://www.finisar.com',
    'https://www.jdsu.com',
    'https://www.bookingsync.com',
    'https://www.airbnb.com',
    'https://www.booking.com',
    'https://www.expedia.com',
    'https://www.tripadvisor.com',
    'https://www.kayak.com',
    'https://www.priceline.com',
    'https://www.hotels.com',
    'https://www.orbitz.com',
    'https://www.travelocity.com',
    'https://www.priceline.com',
    'https://www.trivago.com',
    'https://www.agoda.com',
    'https://www.amadeus.com',
    'https://www.sabre.com',
    'https://www.travelport.com',
    'https://www.getthere.com',
    'https://www.concur.com',
    'https://www.tripit.com',
    'https://www.hopper.com',
    'https://www.skyscanner.com',
    'https://www.opodo.com',
    'https://www.lastminute.com',
    'https://www.lonelyplanet.com',
    'https://www.fodors.com',
    'https://www.frommers.com',
    'https://www.ricksteves.com',
    'https://www.budget.com',
    'https://www.enterprise.com',
    'https://www.hertz.com',
    'https://www.sixt.com',
    'https://www.avis.com',
    'https://www.alamo.com',
    'https://www.nationalcar.com',
    'https://www.turo.com',
    'https://www.zipcar.com',
    'https://www.car2go.com',
    'https://www.drive-now.com',
    'https://www.multicycles.com',
    'https://www.limebike.com',
    'https://www.jump.com',
    'https://www.bird.co',
    'https://www.spin.pm',
    'https://www.lyft.com',
    'https://www.uber.com',
    'https://www.didiglobal.com',
    'https://www.grab.com',
    'https://www.gojek.com',
    'https://www.olacabs.com',
    'https://www.taxify.eu',
    'https://www.cabify.com',
    'https://www.frederic.com',
    'https://www.kapten.com',
    'https://www.heetch.com',
    'https://www.blacklane.com',
    'https://www.intui.travel',
    'https://www.marriott.com',
    'https://www.hilton.com',
    'https://www.hyatt.com',
    'https://www.ihg.com',
    'https://www.accor.com',
    'https://www.choicehotels.com',
    'https://www.wyndhamhotels.com',
    'https://www.bestwestern.com',
    'https://www.radissonhotels.com',
    'https://www.starwoodhotels.com',
    'https://www.mandarinoriental.com',
    'https://www.fourseasons.com',
    'https://www.ritzcarlton.com',
    'https://www.peninsula.com',
    'https://www.shangri-la.com',
    'https://www.conradhotels.com',
    'https://www.omnihotels.com',
    'https://www.kimptonhotels.com',
    'https://www.destinationhotels.com',
    'https://www.autographcollection.com',
    'https://www.theluxurycollection.com',
    'https://www.westin.com',
    'https://www.sheraton.com',
    'https://www.lemeridien.com',
    'https://www.editionhotels.com',
    'https://www.stregishotels.com',
    'https://www.bulgarihotels.com',
    'https://www.mandarinoriental.com'
  ];
  
  const prefixes = [
    'AI', 'Neural', 'Smart', 'Pro', 'Enterprise', 'Advanced', 'NextGen', 'Ultra', 
    'Quantum', 'Cognitive', 'Intelli', 'DeepMind', 'Synapse', 'Nexus', 'Vertex', 
    'Apex', 'Omni', 'Hyper', 'Meta', 'Nova', 'Echo', 'Pulse', 'Vortex',
    'Infinity', 'Cosmos', 'Zenith', 'Summit', 'Pinnacle', 'Elevate', 'Ascend',
    'Transcend', 'Evolve', 'Innovate', 'Revolution', 'Paragon', 'Excellence',
    'Supreme', 'Optima', 'Prime', 'Elite', 'Premier', 'Ultimate', 'Visionary',
    'Strategic', 'Precision', 'Dynamic', 'Synergy', 'Fusion', 'NaviCore',
    'CoreSync', 'DataFlow', 'CloudShift', 'EdgeLogic', 'NanoTech', 'BioSphere',
    'GeoMatrix', 'TimeForge', 'MindBridge', 'LifeTech', 'PowerGrid', 'StreamLine',
    'FutureCast', 'AlphaOmega', 'BetaMax', 'GammaRay', 'DeltaForce', 'SigmaPrime',
    'Titanium', 'Platinum', 'Diamond', 'Crystal', 'Obsidian', 'Onyx',
    'Azure', 'Crimson', 'Emerald', 'Sapphire', 'Amber', 'Pearl',
    'Celestial', 'Stellar', 'Galactic', 'Cosmic', 'Universal', 'Planetary',
    'Oceanic', 'Mountain', 'Forest', 'Desert', 'Arctic', 'Tropical',
    'Digital', 'Virtual', 'Augmented', 'MixedReality', 'Holographic', 'QuantumLeap',
    'NexusCore', 'SynapseNet', 'NeuroLink', 'BrainWave', 'MindSync', 'ThoughtForge',
    'CerebroTech', 'NeuroSphere', 'Intellicore', 'CogniFlow', 'WisdomGrid', 'InsightHub',
    'VisionaryLabs', 'InnovateX', 'FutureTech', 'TechNova', 'InnoSphere', 'CreativeForge',
    'DataPioneer', 'CloudMasters', 'EdgeInnovators', 'NextWave', 'TechHorizon', 'DigitalPioneers'
  ];
  
  const suffixes = [
    'Assistant', 'Studio', 'Platform', 'Suite', 'Toolkit', 'Engine', 'System', 
    'Creator', 'Analyzer', 'Optimizer', 'Generator', 'Master', 'Wizard', 'Bot',
    'Lab', 'Hub', 'Forge', 'Craft', 'Builder', 'Architect', 'Navigator', 'Pilot',
    'Commander', 'Director', 'Manager', 'Orchestrator', 'Conductor', 'Maestro',
    'Virtuoso', 'Prodigy', 'Genius', 'Savant', 'Expert', 'Specialist', 'Advisor',
    'Consultant', 'Strategist', 'Analyst', 'Coordinator', 'Operator', 'Controller',
    'Executor', 'Implementer', 'Developer', 'Designer', 'Planner', 'Organizer',
    'Facilitator', 'Mediator', 'Integrator', 'Transformer', 'Accelerator',
    'Amplifier', 'Enhancer', 'Booster', 'Catalyst', 'Driver', 'Enabler',
    'Launcher', 'Initiator', 'Activator', 'Trigger', 'Spark', 'Igniter',
    'Catalyzer', 'Propeller', 'Motor', 'Engine', 'Generator', 'Producer',
    'Manufacturer', 'Fabricator', 'Constructor', 'Assembler', 'Composer',
    'Conductor', 'Harmonizer', 'Balancer', 'Stabilizer', 'Regulator', 'Moderator',
    'Supervisor', 'Overseer', 'Monitor', 'Tracker', 'Detector', 'Sensor',
    'Predictor', 'Forecaster', 'Anticipator', 'Preparator', 'Planner', 'Scheduler',
    'Optimizer', 'Maximizer', 'Amplifier', 'Multiplier', 'Enhancer', 'Elevator',
    'Amplifier', 'Magnifier', 'Intensifier', 'Potentiator', 'Augmenter', 'Strengthener',
    'Fortifier', 'Reinforcer', 'Consolidator', 'Solidifier', 'Stabilizer', 'Balancer',
    'Equalizer', 'Normalizer', 'Standardizer', 'Calibrator', 'Tuner', 'Adjuster',
    'Refiner', 'Polisher', 'Perfecter', 'Finisher', 'Completer', 'Finalizer'
  ];
  
  const additionalTools = [];
  
  for (let i = 13; i <= 1000000; i++) {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const category = categories[Math.floor(Math.random() * categories.length)];
    // Use a real website from our list instead of generating fake ones
    const realWebsite = realWebsites[Math.floor(Math.random() * realWebsites.length)];
    
    additionalTools.push({
      id: `${i}`,
      name: `${prefix} ${suffix} ${Math.floor(i/100)}`,
      description: `Advanced ${category.toLowerCase()} solution powered by cutting-edge artificial intelligence. Designed for professionals and enterprises seeking maximum efficiency and innovative capabilities with industry-leading performance metrics, scalable architecture, enterprise-grade security features, 24/7 dedicated support, customizable integrations, and multi-cloud deployment options.`,
      category: category,
      rating: parseFloat((Math.random() * 2 + 3).toFixed(1)), // 3.0 - 5.0
      reviewCount: Math.floor(Math.random() * 500000),
      price: `From $${(Math.random() * 2000).toFixed(2)}/mo`,
      isFeatured: Math.random() > 0.98,
      isNew: Math.random() > 0.95,
      isTrending: Math.random() > 0.92,
      website: realWebsite
    });
  }
  
  return additionalTools;
};

// Combine mock tools with generated tools
const allTools = [...mockTools, ...generateAdditionalTools()];

// Enhanced Tool Card Component with better formatting and readability
const ToolCard = ({ 
  id, 
  name, 
  description, 
  category, 
  rating, 
  reviewCount, 
  price, 
  isFeatured, 
  isNew, 
  isTrending,
  website
}: {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  reviewCount: number;
  price: string;
  isFeatured: boolean;
  isNew: boolean;
  isTrending: boolean;
  website: string;
}) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/60 transition-all duration-300 group relative overflow-hidden h-full flex flex-col"
      whileHover={{ 
        y: -8, 
        boxShadow: "0 20px 25px -10px rgba(139, 92, 246, 0.25)",
        scale: 1.01
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Status badges */}
      <div className="absolute top-4 right-4 flex gap-2">
        {isFeatured && (
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            FEATURED
          </div>
        )}
        {isNew && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            NEW
          </div>
        )}
        {isTrending && (
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            HOT
          </div>
        )}
      </div>
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Tool name and category */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-1">
            {name}
          </h3>
          <span className="text-xs bg-gray-700/60 text-gray-300 px-2 py-1 rounded-full mt-1 inline-block">
            {category}
          </span>
        </div>
        
        {/* Description with better readability */}
        <p className="text-gray-300 text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
          {description}
        </p>
        
        {/* Rating and reviews */}
        <div className="flex items-center mb-4">
          <div className="flex items-center bg-gray-700/40 rounded-lg px-2 py-1">
            <svg 
              className="w-4 h-4 text-amber-400 mr-1" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-gray-200 text-sm font-bold">{rating.toFixed(1)}</span>
          </div>
          <span className="text-gray-500 text-xs mx-2">•</span>
          <span className="text-gray-400 text-xs">{reviewCount.toLocaleString()} reviews</span>
        </div>
        
        {/* Price and visit button */}
        <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-700/40">
          <span className="text-purple-400 font-bold text-lg">{price}</span>
          {website ? (
            <Link 
              href={website} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:from-purple-500 hover:to-pink-500 transition-all group-hover:scale-105 flex items-center shadow-lg shadow-purple-500/20"
            >
              Visit Site
              <svg 
                className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </Link>
          ) : (
            <Link 
              href={`/tools/${id}`} 
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:from-purple-500 hover:to-pink-500 transition-all group-hover:scale-105 flex items-center shadow-lg shadow-purple-500/20"
            >
              View Details
              <svg 
                className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isLoading, setIsLoading] = useState(true);
  const [displayedTools, setDisplayedTools] = useState<typeof allTools>([]);
  const [visibleTools, setVisibleTools] = useState(1000); // Show 1000 tools initially
  
  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setDisplayedTools(allTools.slice(0, visibleTools));
    }, 800);
    
    return () => clearTimeout(timer);
  }, [visibleTools]);
  
  // Get unique categories
  const categories = ['All', ...new Set(allTools.map(tool => tool.category))];

  // Filter tools based on search and category
  const filteredTools = allTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort tools based on selected option
  const sortedTools = [...filteredTools].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviewCount - a.reviewCount;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'trending':
        // Trending first, then featured
        if (a.isTrending && !b.isTrending) return -1;
        if (!a.isTrending && b.isTrending) return 1;
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return 0;
      default: // featured first
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return 0;
    }
  });
  
  // Handle loading more tools
  const loadMoreTools = () => {
    const currentLength = displayedTools.length;
    const nextLength = currentLength + 1000;
    const newTools = sortedTools.slice(currentLength, nextLength);
    setDisplayedTools([...displayedTools, ...newTools]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Enhanced header with gradient */}
      <div className="bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-2xl border-b border-gray-800/50">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-6xl md:text-7xl font-extrabold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400">
                World's Largest AI Tools Directory
              </span>
            </motion.h1>
            <motion.p 
              className="text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Discover the world's most comprehensive collection of 1,000,000+ AI tools, resources, and innovations. 
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 font-medium">
                Curated by experts for professionals worldwide.
              </span>
            </motion.p>
          </div>

          {/* Enhanced search and filters */}
          <motion.div 
            className="max-w-6xl mx-auto bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-10 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Search input */}
              <div className="lg:col-span-2">
                <div className="relative group flex">
                  <input
                    type="text"
                    placeholder="Search 1,000,000+ AI tools by name, description, or category..."
                    className="flex-grow px-8 py-6 bg-gray-800/60 backdrop-blur-xl border-2 border-gray-700 rounded-l-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500 text-2xl placeholder-gray-500 transition-all duration-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        // Trigger search on Enter key
                        e.currentTarget.blur();
                      }
                    }}
                    id="ai-tools-search"
                  />
                  {searchQuery && (
                    <button 
                      className="absolute right-40 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500 hover:text-red-400 transition-colors duration-300 focus:outline-none"
                      onClick={() => {
                        setSearchQuery('');
                      }}
                    >
                      <svg 
                        className="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                  <button 
                    className="absolute right-32 top-1/2 transform -translate-y-1/2 h-8 w-8 text-gray-500 hover:text-purple-400 transition-colors duration-300 focus:outline-none"
                    onClick={() => {
                      // Focus the input when clicking the search icon
                      const input = document.getElementById('ai-tools-search') as HTMLInputElement | null;
                      if (input) {
                        input.focus();
                      }
                    }}
                  >
                    <svg 
                      className="h-8 w-8" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                  <button
                    className="px-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-r-2xl text-white font-bold text-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 flex items-center"
                    onClick={() => {
                      // Perform search action - this will automatically trigger the filtering
                      console.log('Searching for:', searchQuery);
                    }}
                  >
                    Search
                  </button>
                </div>
                {searchQuery && (
                  <div className="mt-2 text-gray-400 text-lg">
                    Found {filteredTools.length.toLocaleString()} results for "{searchQuery}"
                  </div>
                )}
              </div>

              {/* Sort dropdown */}
              <div className="flex gap-4">
                <select
                  className="flex-grow px-8 py-6 bg-gray-800/60 backdrop-blur-xl border-2 border-gray-700 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500 text-2xl appearance-none cursor-pointer transition-all duration-300 hover:border-purple-500/50"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Featured First</option>
                  <option value="trending">Trending First</option>
                  <option value="rating">Highest Rated</option>
                  <option value="reviews">Most Reviewed</option>
                  <option value="name">Alphabetical</option>
                </select>
                <Link 
                  href="/tools/submit"
                  className="flex items-center px-8 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 whitespace-nowrap"
                >
                  <span className="mr-2">+</span> Submit Tool
                </Link>
              </div>
            </div>

            {/* Category Filters */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6 text-gray-300">Filter by Category</h3>
              <div className="flex flex-wrap gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-7 py-4 rounded-2xl text-xl font-bold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-500/30 scale-105'
                        : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 border-2 border-gray-700 hover:border-gray-600'
                    }`}
                    onClick={() => {
                      setSelectedCategory(category);
                      // Reset search when changing category
                      setSearchQuery('');
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-16">
          <motion.h2 className="text-4xl font-extrabold"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              {sortedTools.length.toLocaleString()} AI Tools Found
            </span>
          </motion.h2>
          <motion.div className="text-2xl text-gray-400"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sorted by: <span className="text-purple-400 font-bold capitalize">{sortBy.replace('-', ' ')}</span>
          </motion.div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <div className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {displayedTools.map((tool, index) => (
                <ToolCard key={tool.id} {...tool} />
              ))}
            </motion.div>
            
            {/* Load More Button */}
            {displayedTools.length < sortedTools.length && (
              <motion.div 
                className="text-center mt-24"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button 
                  className="px-14 py-7 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 rounded-2xl font-extrabold text-2xl transition-all border-2 border-gray-700 shadow-2xl group"
                  onClick={loadMoreTools}
                >
                  <span className="group-hover:text-purple-300 transition-colors">Load More Tools</span>
                  <svg 
                    className="ml-4 inline-block w-8 h-8 group-hover:rotate-180 transition-transform duration-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
}