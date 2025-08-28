
// Types pour une meilleure type safety
export interface RouteConfig {
  path: string;
  title: string;
  description?: string;
  requiresAuth?: boolean;
  roles?: string[];
}

// Routes principales
export const ROUTES = {
  // Routes publiques
  HOME: '/',
  MARKETPLACE: '/marketplace',
  SERVICES: '/services',
  FEATURES: '/features',
  LEGAL: '/legal',
  
  // Routes authentifiées
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  MISSIONS: '/missions',
  CREATE_MISSION: '/create-mission',
  MESSAGES: '/messages',
  
  // Routes AI
  AI: {
    FEATURES: '/ai-features',
    DASHBOARD: '/ai-dashboard',
    ADVANCED: '/ai-advanced',
    TEST: '/ai-test',
  },
  
  // Routes API
  API: {
    BASE: '/api',
    HEALTH: '/api/health',
    AUTH: '/api/auth',
    MISSIONS: '/api/missions',
    AI: '/api/ai',
  }
} as const;

// Configuration des routes avec métadonnées
export const routeConfigs: Record<string, RouteConfig> = {
  [ROUTES.HOME]: {
    path: ROUTES.HOME,
    title: 'Accueil - AppelsPro',
    description: 'Plateforme d\'appels d\'offres inversés'
  },
  [ROUTES.MARKETPLACE]: {
    path: ROUTES.MARKETPLACE,
    title: 'Marketplace - AppelsPro',
    description: 'Trouvez des missions et prestataires'
  },
  [ROUTES.DASHBOARD]: {
    path: ROUTES.DASHBOARD,
    title: 'Tableau de bord - AppelsPro',
    requiresAuth: true
  },
  [ROUTES.PROFILE]: {
    path: ROUTES.PROFILE,
    title: 'Mon profil - AppelsPro',
    requiresAuth: true
  },
  [ROUTES.MISSIONS]: {
    path: ROUTES.MISSIONS,
    title: 'Mes missions - AppelsPro',
    requiresAuth: true
  },
  [ROUTES.CREATE_MISSION]: {
    path: ROUTES.CREATE_MISSION,
    title: 'Créer une mission - AppelsPro',
    requiresAuth: true
  },
  [ROUTES.AI.DASHBOARD]: {
    path: ROUTES.AI.DASHBOARD,
    title: 'Dashboard IA - AppelsPro',
    requiresAuth: true
  }
};

// Helpers
export const isAuthRoute = (path: string): boolean => {
  const config = routeConfigs[path];
  return config?.requiresAuth ?? false;
};

export const getRouteTitle = (path: string): string => {
  return routeConfigs[path]?.title ?? 'AppelsPro';
};

export const buildApiUrl = (endpoint: string): string => {
  return `${ROUTES.API.BASE}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
};

// Navigation groups pour le menu
export const navigationGroups = {
  main: [
    { path: ROUTES.HOME, label: 'Accueil' },
    { path: ROUTES.MARKETPLACE, label: 'Marketplace' },
    { path: ROUTES.SERVICES, label: 'Services' },
    { path: ROUTES.FEATURES, label: 'Fonctionnalités' }
  ],
  user: [
    { path: ROUTES.DASHBOARD, label: 'Dashboard' },
    { path: ROUTES.MISSIONS, label: 'Missions' },
    { path: ROUTES.PROFILE, label: 'Profil' },
    { path: ROUTES.MESSAGES, label: 'Messages' }
  ],
  ai: [
    { path: ROUTES.AI.FEATURES, label: 'IA Features' },
    { path: ROUTES.AI.DASHBOARD, label: 'Dashboard IA' },
    { path: ROUTES.AI.ADVANCED, label: 'IA Avancée' }
  ]
};
