'use client';

import { useEffect } from 'react';
import type { Metric } from 'web-vitals';

export function WebVitals() {
  const reportWebVital = (metric: Metric) => {
    // Log metrics to console for development
    if (process.env.NODE_ENV === 'development') {
      console.log(metric);
    }
    
    // Send metrics to your analytics service
    // Example: trackWebVitals(metric);
  };

  useEffect(() => {
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(reportWebVital);
      onFID(reportWebVital);
      onFCP(reportWebVital);
      onLCP(reportWebVital);
      onTTFB(reportWebVital);
    });
  }, []);

  return null;
}
