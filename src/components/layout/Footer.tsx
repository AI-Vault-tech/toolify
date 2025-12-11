import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-900/80 border-t border-gray-800/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="font-bold text-white text-xl">AI</span>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
                AI Nexus
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md text-lg leading-relaxed">
              The world's ultimate AI ecosystem where every tool, resource, and innovation converges in one exquisite digital experience.
            </p>
            <div className="flex space-x-5">
              {[
                { name: 'Twitter', icon: '𝕏' },
                { name: 'GitHub', icon: '⬤' },
                { name: 'LinkedIn', icon: 'in' },
                { name: 'Discord', icon: '💬' }
              ].map((social) => (
                <Link 
                  key={social.name}
                  href="#" 
                  className="w-12 h-12 rounded-2xl bg-gray-800/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all border border-gray-700"
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Platform</h3>
            <ul className="space-y-4">
              {[
                { name: 'Browse Tools', href: '/tools' },
                { name: 'Collections', href: '/collections' },
                { name: 'Playbooks', href: '/playbooks' },
                { name: 'Insights', href: '/insights' },
                { name: 'Nexus Pro', href: '/pro' },
                { name: 'API Docs', href: '/docs' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Company</h3>
            <ul className="space-y-4">
              {[
                { name: 'About', href: '/about' },
                { name: 'Careers', href: '/careers' },
                { name: 'Contact', href: '/contact' },
                { name: 'Partners', href: '/partners' },
                { name: 'Press', href: '/press' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Legal</h3>
            <ul className="space-y-4">
              {[
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Cookie Policy', href: '/cookies' },
                { name: 'Security', href: '/security' },
                { name: 'Compliance', href: '/compliance' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-lg">
            © 2025 AI Nexus. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-lg transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-lg transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}