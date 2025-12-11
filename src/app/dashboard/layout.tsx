'use client';

import { Inter } from 'next/font/google';
import '../globals.css';
import Sidebar from '@/components/dashboard/Sidebar';
import { ToasterProvider } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className={`${inter.className} h-full`}>
        <ToasterProvider>
          <div className="flex h-full">
            <Sidebar />
            <div className="flex-1 overflow-auto">
              <main className="p-6 max-w-7xl mx-auto">
                {children}
              </main>
            </div>
          </div>
        </ToasterProvider>
      </body>
    </html>
  );
}
