import React from 'react';
import QuoteEstimator from '../components/QuoteEstimator';

export default function QuotePage() {
  return (
    <div className="pt-24 pb-16 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <QuoteEstimator />
    </div>
  );
}
