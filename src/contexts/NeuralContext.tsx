'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type NeuralContextType = {
  activeModule: string;
  setActiveModule: (module: string) => void;
  isNeuralMode: boolean;
  toggleNeuralMode: () => void;
  neuralActivity: number;
};

const NeuralContext = createContext<NeuralContextType | undefined>(undefined);

export function NeuralProvider({ children }: { children: ReactNode }) {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [isNeuralMode, setIsNeuralMode] = useState(true);
  const [neuralActivity, setNeuralActivity] = useState(0);

  // Simulate neural activity
  React.useEffect(() => {
    const interval = setInterval(() => {
      setNeuralActivity(Math.random() * 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggleNeuralMode = () => {
    setIsNeuralMode(!isNeuralMode);
  };

  return (
    <NeuralContext.Provider
      value={{
        activeModule,
        setActiveModule,
        isNeuralMode,
        toggleNeuralMode,
        neuralActivity,
      }}
    >
      {children}
    </NeuralContext.Provider>
  );
}

export const useNeural = () => {
  const context = useContext(NeuralContext);
  if (context === undefined) {
    throw new Error('useNeural must be used within a NeuralProvider');
  }
  return context;
};
