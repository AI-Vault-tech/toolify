import { FolderOpen, Plus, Search, Filter, ChevronRight, Clock, Users, BarChart } from 'lucide-react';
import Link from 'next/link';

type Project = {
  id: string;
  name: string;
  description: string;
  lastUpdated: string;
  members: number;
  status: 'active' | 'archived' | 'completed';
  progress: number;
};

const projects: Project[] = [
  {
    id: '1',
    name: 'AI Content Generator',
    description: 'Next-gen content generation using GPT-4',
    lastUpdated: '2 hours ago',
    members: 5,
    status: 'active',
    progress: 75,
  },
  {
    id: '2',
    name: 'E-commerce Analytics',
    description: 'Real-time sales and customer analytics dashboard',
    lastUpdated: '1 day ago',
    members: 3,
    status: 'active',
    progress: 45,
  },
  {
    id: '3',
    name: 'Mobile App Redesign',
    description: 'UI/UX overhaul for mobile application',
    lastUpdated: '3 days ago',
    members: 4,
    status: 'active',
    progress: 90,
  },
  {
    id: '4',
    name: 'API Integration Hub',
    description: 'Centralized API management system',
    lastUpdated: '1 week ago',
    members: 2,
    status: 'active',
    progress: 30,
  },
  {
    id: '5',
    name: 'Customer Support Portal',
    description: 'New support ticketing system',
    lastUpdated: '2 weeks ago',
    members: 6,
    status: 'completed',
    progress: 100,
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Projects</h1>
            <p className="text-gray-400 mt-1">Manage and track all your projects in one place</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              <Plus className="w-5 h-5 mr-2" />
              New Project
            </button>
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden">
          <div className="p-4 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600/20 border border-blue-500/30 rounded-lg">
                All Projects
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors">
                Active
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors">
                Archived
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors">
                Completed
              </button>
            </div>
            <button className="flex items-center px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
          </div>

          <div className="divide-y divide-gray-800/50">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.id}`}
                className="block hover:bg-gray-800/30 transition-colors group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-blue-500/10">
                        <FolderOpen className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-gray-400 mt-1">{project.description}</p>
                        <div className="flex items-center mt-3 space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{project.lastUpdated}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            <span>{project.members} members</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full mr-1 bg-blue-500"></div>
                            <span className="capitalize">{project.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-400">Progress</span>
                      <span className="font-medium text-white">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className={`h-full rounded-full ${
                          project.progress < 30 ? 'bg-red-500' : 
                          project.progress < 70 ? 'bg-yellow-500' : 'bg-green-500'
                        }`} 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="p-4 border-t border-gray-800/50 flex items-center justify-between">
            <p className="text-sm text-gray-400">Showing 1 to {projects.length} of {projects.length} projects</p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 rounded-md bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 transition-colors">
                Previous
              </button>
              <button className="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                1
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
