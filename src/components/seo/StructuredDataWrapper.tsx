'use client';

import dynamic from 'next/dynamic';

// Dynamically import the StructuredData component with SSR disabled
const StructuredData = dynamic(
  () => import('./StructuredData').then((mod) => mod.default),
  { ssr: false }
);

const StructuredDataWrapper = () => {
  return <StructuredData />;
};

export default StructuredDataWrapper;
