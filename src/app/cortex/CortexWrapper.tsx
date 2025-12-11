'use client';

import { NeuralProvider } from '@/contexts/NeuralContext';
import { ReactNode } from 'react';

export default function CortexWrapper({ children }: { children: ReactNode }) {
  return (
    <NeuralProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        {children}
      </div>
    </NeuralProvider>
  );
}
