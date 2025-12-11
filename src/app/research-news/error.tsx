'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error in Research & News page:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-red-400">Something went wrong!</h2>
        <p className="text-gray-300 mb-8">
          We're having trouble loading the Research & News page. Please try again or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors text-center"
          >
            Back to Home
          </Link>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-gray-800/50 rounded-lg text-left text-sm text-gray-300">
            <p className="font-mono text-red-400 mb-2">{error.message}</p>
            <p className="text-xs opacity-70">
              {error.stack?.split('\n').map((line, i) => (
                <span key={i} className="block">{line.trim()}</span>
              ))}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
