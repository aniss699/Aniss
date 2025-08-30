
// Catégories pour la mise en relation (services généraux)
export const CATEGORIES = [
  {
    id: 'web-dev',
    name: 'Développement Web',
    icon: 'Code',
    color: 'text-blue-600',
    description: 'Sites web, applications web, e-commerce'
  },
  {
    id: 'mobile-dev',
    name: 'Développement Mobile',
    icon: 'Smartphone',
    color: 'text-green-600',
    description: 'Applications iOS, Android, hybrides'
  },
  {
    id: 'design',
    name: 'Design Graphique',
    icon: 'Palette',
    color: 'text-pink-600',
    description: 'Logo, identité visuelle, UI/UX'
  },
  {
    id: 'marketing',
    name: 'Marketing Digital',
    icon: 'TrendingUp',
    color: 'text-orange-600',
    description: 'SEO, publicité, réseaux sociaux'
  },
  {
    id: 'writing',
    name: 'Rédaction',
    icon: 'PenTool',
    color: 'text-purple-600',
    description: 'Articles, contenu web, copywriting'
  },
  {
    id: 'video',
    name: 'Vidéo & Audio',
    icon: 'Video',
    color: 'text-red-600',
    description: 'Montage, animation, production'
  },
  {
    id: 'ai-ml',
    name: 'IA & Machine Learning',
    icon: 'Bot',
    color: 'text-indigo-600',
    description: 'Intelligence artificielle, data science'
  },
  {
    id: 'consulting',
    name: 'Consulting',
    icon: 'Briefcase',
    color: 'text-gray-600',
    description: 'Stratégie, audit, conseil'
  },
  {
    id: 'translation',
    name: 'Traduction',
    icon: 'Globe',
    color: 'text-teal-600',
    description: 'Traduction, localisation'
  },
  {
    id: 'data',
    name: 'Data & Analytics',
    icon: 'BarChart3',
    color: 'text-emerald-600',
    description: 'Analyse de données, reporting'
  },
  {
    id: 'photography',
    name: 'Photographie',
    icon: 'Camera',
    color: 'text-yellow-600',
    description: 'Photos produits, portraits, événements'
  },
  {
    id: 'other',
    name: 'Autres Services',
    icon: 'Settings',
    color: 'text-slate-600',
    description: 'Autres prestations professionnelles'
  }
];

// Catégories pour les appels d'offres (personnes physiques/experts)
export const connectionCategories = [
  {
    id: 'lawyer',
    name: 'Avocat',
    icon: 'Scale',
    color: 'text-amber-600',
    description: 'Conseil juridique, représentation légale'
  },
  {
    id: 'celebrity',
    name: 'Célébrité',
    icon: 'Star',
    color: 'text-yellow-500',
    description: 'Influenceur, personnalité publique'
  },
  {
    id: 'tech-expert',
    name: 'Expert Informatique',
    icon: 'Cpu',
    color: 'text-blue-600',
    description: 'CTO, architecte logiciel, expert cybersécurité'
  },
  {
    id: 'ceo-executive',
    name: 'Dirigeant',
    icon: 'Crown',
    color: 'text-purple-600',
    description: 'CEO, directeur général, entrepreneur'
  },
  {
    id: 'doctor',
    name: 'Médecin Spécialiste',
    icon: 'Stethoscope',
    color: 'text-red-600',
    description: 'Consultation médicale spécialisée'
  },
  {
    id: 'coach',
    name: 'Coach Personnel',
    icon: 'Target',
    color: 'text-green-600',
    description: 'Coach de vie, sportif, professionnel'
  },
  {
    id: 'chef',
    name: 'Chef Cuisinier',
    icon: 'ChefHat',
    color: 'text-orange-600',
    description: 'Chef étoilé, consultant culinaire'
  },
  {
    id: 'architect',
    name: 'Architecte',
    icon: 'Building',
    color: 'text-stone-600',
    description: 'Architecte DPLG, urbaniste'
  },
  {
    id: 'financial-advisor',
    name: 'Conseiller Financier',
    icon: 'PiggyBank',
    color: 'text-emerald-600',
    description: 'Expert en investissement, gestion patrimoine'
  },
  {
    id: 'artist',
    name: 'Artiste',
    icon: 'Paintbrush',
    color: 'text-rose-600',
    description: 'Peintre, sculpteur, créateur'
  },
  {
    id: 'scientist',
    name: 'Scientifique',
    icon: 'Microscope',
    color: 'text-cyan-600',
    description: 'Chercheur, expert technique'
  },
  {
    id: 'professor',
    name: 'Professeur/Formateur',
    icon: 'GraduationCap',
    color: 'text-indigo-600',
    description: 'Expert académique, formation spécialisée'
  }
];

// Type pour les catégories
export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
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
