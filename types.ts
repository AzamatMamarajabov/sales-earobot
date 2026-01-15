import React from 'react';

export interface Statistic {
  label: string;
  value: string;
  subtext?: string;
  highlight?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface PricingTier {
  name: string;
  price: number;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ChartDataPoint {
  month: string;
  gain: number;
}