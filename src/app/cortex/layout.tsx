import { Inter } from 'next/font/google';
import CortexWrapper from './CortexWrapper';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nexus Cortex | AI Command Center',
  description: 'The neural command center for AI Nexus platform',
};

export default function CortexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CortexWrapper>
      <div className="flex h-full">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950" />
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(96, 165, 250, 0.1) 0%, transparent 30%), radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 30%)',
            }}
          />
        </div>
        
        <main className="flex-1">
          <div className={`${inter.className} relative min-h-screen`}>
            {children}
          </div>
        </main>
      </div>
    </CortexWrapper>
  );
}
