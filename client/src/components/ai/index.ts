
// Lazy loading pour les composants AI lourds
import { lazy } from 'react';

// Composants critiques - chargement immédiat
export { BriefEnhancer } from './brief-enhancer';
export { MissionStandardizer } from './mission-standardizer';
export { AIAssistant } from './ai-assistant';

// Composants non-critiques - lazy loading
export const AdvancedAIDashboard = lazy(() => 
  import('./advanced-ai-dashboard').then(module => ({ default: module.AdvancedAIDashboard }))
);

export const CollaborativeAIWorkspace = lazy(() => 
  import('./collaborative-ai-workspace').then(module => ({ default: module.CollaborativeAIWorkspace }))
);

export const RevenuePredictor = lazy(() => 
  import('./revenue-predictor').then(module => ({ default: module.RevenuePredictor }))
);

export const MarketIntelligenceDashboard = lazy(() => 
  import('./market-intelligence-dashboard').then(module => ({ default: module.MarketIntelligenceDashboard }))
);

export const SmartBidAnalyzer = lazy(() => 
  import('./smart-bid-analyzer').then(module => ({ default: module.SmartBidAnalyzer }))
);

export const ProfileCompletenessAnalyzer = lazy(() => 
  import('./profile-completeness-analyzer').then(module => ({ default: module.ProfileCompletenessAnalyzer }))
);

export const MissionMatchingEngine = lazy(() => 
  import('./mission-matching-engine').then(module => ({ default: module.MissionMatchingEngine }))
);

export const IntelligentDashboard = lazy(() => 
  import('./intelligent-dashboard').then(module => ({ default: module.IntelligentDashboard }))
);

// Types
export interface AIComponentProps {
  className?: string;
  onUpdate?: (data: any) => void;
}
