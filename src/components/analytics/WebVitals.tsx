'use client';

import { useEffect } from 'react';
import { onCLS, onFCP, onLCP, onTTFB, onINP, type Metric } from 'web-vitals';

export function WebVitals() {
  useEffect(() => {
    const reportWebVital = (metric: Metric) => {
      // Log metrics to console for development
      if (process.env.NODE_ENV === 'development') {
        console.log('[Web Vitals]', metric);
      }
      
      // You can send metrics to your analytics service here
      // Example: trackWebVitals(metric);
    };

    // Core Web Vitals
    onCLS(reportWebVital);
    onFCP(reportWebVital);
    onLCP(reportWebVital);
    onTTFB(reportWebVital);
    
    // Additional metrics (optional)
    onINP(reportWebVital);
    
    // Return cleanup function
    return () => {
      // If any of the web-vitals functions return cleanup functions,
      // they would be called here
    };
  }, []);

  return null;
}
