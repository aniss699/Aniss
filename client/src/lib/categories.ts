
// Catégories pour la mise en relation (services généraux)
export const CATEGORIES = [
  {
    id: 'web-dev',
    name: 'Développement Web',
    icon: 'Code',
    description: 'Sites web, applications web, e-commerce'
  },
  {
    id: 'mobile-dev',
    name: 'Développement Mobile',
    icon: 'Smartphone',
    description: 'Applications iOS, Android, hybrides'
  },
  {
    id: 'design',
    name: 'Design Graphique',
    icon: 'Palette',
    description: 'Logo, identité visuelle, UI/UX'
  },
  {
    id: 'marketing',
    name: 'Marketing Digital',
    icon: 'TrendingUp',
    description: 'SEO, publicité, réseaux sociaux'
  },
  {
    id: 'writing',
    name: 'Rédaction',
    icon: 'PenTool',
    description: 'Articles, contenu web, copywriting'
  },
  {
    id: 'video',
    name: 'Vidéo & Audio',
    icon: 'Video',
    description: 'Montage, animation, production'
  },
  {
    id: 'ai-ml',
    name: 'IA & Machine Learning',
    icon: 'Bot',
    description: 'Intelligence artificielle, data science'
  },
  {
    id: 'consulting',
    name: 'Consulting',
    icon: 'Briefcase',
    description: 'Stratégie, audit, conseil'
  },
  {
    id: 'translation',
    name: 'Traduction',
    icon: 'Globe',
    description: 'Traduction, localisation'
  },
  {
    id: 'data',
    name: 'Data & Analytics',
    icon: 'BarChart3',
    description: 'Analyse de données, reporting'
  },
  {
    id: 'photography',
    name: 'Photographie',
    icon: 'Camera',
    description: 'Photos produits, portraits, événements'
  },
  {
    id: 'other',
    name: 'Autres Services',
    icon: 'Settings',
    description: 'Autres prestations professionnelles'
  }
];

// Catégories pour les appels d'offres (personnes physiques/experts)
export const connectionCategories = [
  {
    id: 'lawyer',
    name: 'Avocat',
    icon: 'Scale',
    description: 'Conseil juridique, représentation légale'
  },
  {
    id: 'celebrity',
    name: 'Célébrité',
    icon: 'Star',
    description: 'Influenceur, personnalité publique'
  },
  {
    id: 'tech-expert',
    name: 'Expert Informatique',
    icon: 'Cpu',
    description: 'CTO, architecte logiciel, expert cybersécurité'
  },
  {
    id: 'ceo-executive',
    name: 'Dirigeant',
    icon: 'Crown',
    description: 'CEO, directeur général, entrepreneur'
  },
  {
    id: 'doctor',
    name: 'Médecin Spécialiste',
    icon: 'Stethoscope',
    description: 'Consultation médicale spécialisée'
  },
  {
    id: 'coach',
    name: 'Coach Personnel',
    icon: 'Target',
    description: 'Coach de vie, sportif, professionnel'
  },
  {
    id: 'chef',
    name: 'Chef Cuisinier',
    icon: 'ChefHat',
    description: 'Chef étoilé, consultant culinaire'
  },
  {
    id: 'architect',
    name: 'Architecte',
    icon: 'Building',
    description: 'Architecte DPLG, urbaniste'
  },
  {
    id: 'financial-advisor',
    name: 'Conseiller Financier',
    icon: 'PiggyBank',
    description: 'Expert en investissement, gestion patrimoine'
  },
  {
    id: 'artist',
    name: 'Artiste',
    icon: 'Paintbrush',
    description: 'Peintre, sculpteur, créateur'
  },
  {
    id: 'scientist',
    name: 'Scientifique',
    icon: 'Microscope',
    description: 'Chercheur, expert technique'
  },
  {
    id: 'professor',
    name: 'Professeur/Formateur',
    icon: 'GraduationCap',
    description: 'Expert académique, formation spécialisée'
  }
];

// Type pour les catégories
export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

// Export des fourchettes de budget
export const budgetRanges = [
  { label: 'Moins de 500€', min: 0, max: 500 },
  { label: '500€ - 1 500€', min: 500, max: 1500 },
  { label: '1 500€ - 5 000€', min: 1500, max: 5000 },
  { label: '5 000€ - 15 000€', min: 5000, max: 15000 },
  { label: 'Plus de 15 000€', min: 15000, max: 100000 }
];

// Export des niveaux d'urgence
export const urgencyLevels = [
  { id: 'low', label: 'Standard', description: 'Délai flexible' },
  { id: 'medium', label: 'Prioritaire', description: 'Sous 2 semaines' },
  { id: 'high', label: 'Urgent', description: 'Sous 1 semaine' },
  { id: 'critical', label: 'Critique', description: 'Sous 48h' }
];
