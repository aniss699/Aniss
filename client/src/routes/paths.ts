
export const paths = {
  home: '/',
  marketplace: '/marketplace',
  missions: '/missions',
  missionDetail: (id = ':id') => `/missions/${id}`,
  createMission: '/create-mission',
  availableProviders: '/available-providers',
  profile: '/profile',
  dashboard: '/dashboard',
  aiDashboard: '/ai-dashboard',
  aiFeatures: '/ai-features',
  aiTest: '/ai-test',
  features: '/features',
  messages: '/messages',
  legal: '/legal',
  notFound: '/404',
  // Mode démo
  demoMissions: '/demo/missions',
  demoProfiles: '/demo/profils',
  demoIA: '/demo/ia',
  // Services
  services: '/services',
  servicesConsultation: '/services/consultation',
  servicesFormation: '/services/formation',
  servicesSupport: '/services/support',
} as const;
