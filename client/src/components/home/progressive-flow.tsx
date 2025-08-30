
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  Zap, 
  ChevronRight, 
  ChevronLeft,
  FileText,
  Target,
  Euro,
  Calendar
} from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { CATEGORIES } from '@/lib/categories';

type UserType = 'client' | 'prestataire' | null;
type ServiceType = 'mise-en-relation' | 'appel-offres' | null;

interface ProgressiveFlowProps {
  onComplete?: (data: any) => void;
}

export function ProgressiveFlow({ onComplete }: ProgressiveFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);

  // Function to get Lucide icon component from icon name
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[
      iconName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('')
    ];
    return IconComponent || LucideIcons.Briefcase;
  };
  const [userType, setUserType] = useState<UserType>(null);
  const [serviceType, setServiceType] = useState<ServiceType>(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    budget: '',
    timeline: '',
    requirements: ''
  });

  const progress = ((currentStep + 1) / 4) * 100;

  // Animation d'entrée pour chaque étape
  useEffect(() => {
    const timer = setTimeout(() => {
      // Force un re-render pour les animations CSS
    }, 100);
    return () => clearTimeout(timer);
  }, [currentStep]);

  // Étape 0: Choix du type d'utilisateur
  const renderStep0 = () => (
    <div className="text-center space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Vous êtes Client ou Prestataire ?
        </h2>
        <p className="text-gray-600">
          Choisissez votre profil pour une expérience personnalisée
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
        <Card 
          className={`cursor-pointer transition-all hover:shadow-lg ${
            userType === 'client' ? 'ring-2 ring-blue-500 bg-blue-50' : ''
          }`}
          onClick={() => {
            setUserType('client');
            setCurrentStep(1);
          }}
        >
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">👨‍💼 Je suis Client</h3>
            <p className="text-gray-600">
              J'ai un projet et je cherche des prestataires qualifiés
            </p>
          </CardContent>
        </Card>

        <Card 
          className={`cursor-pointer transition-all hover:shadow-lg ${
            userType === 'prestataire' ? 'ring-2 ring-green-500 bg-green-50' : ''
          }`}
          onClick={() => {
            setUserType('prestataire');
            setCurrentStep(1);
          }}
        >
          <CardContent className="p-6 text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2">🛠️ Je suis Prestataire</h3>
            <p className="text-gray-600">
              Je propose mes services et cherche des missions
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Étape 1: Choix du type de service
  const renderStep1 = () => (
    <div className="text-center space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Comment souhaitez-vous procéder ?
        </h2>
        <p className="text-gray-600">
          Sélectionnez la méthode qui vous convient le mieux
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
        <Card 
          className={`cursor-pointer transition-all hover:shadow-lg ${
            serviceType === 'mise-en-relation' ? 'ring-2 ring-purple-500 bg-purple-50' : ''
          }`}
          onClick={() => {
            setServiceType('mise-en-relation');
            setCurrentStep(2);
          }}
        >
          <CardContent className="p-6 text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Mise en relation</h3>
            <p className="text-gray-600 mb-4">
              Contact direct avec des prestataires sélectionnés
            </p>
            <div className="space-y-2">
              <Badge variant="secondary">Contact immédiat</Badge>
              <Badge variant="secondary">Profils vérifiés</Badge>
            </div>
          </CardContent>
        </Card>

        <Card 
          className={`cursor-pointer transition-all hover:shadow-lg ${
            serviceType === 'appel-offres' ? 'ring-2 ring-orange-500 bg-orange-50' : ''
          }`}
          onClick={() => {
            setServiceType('appel-offres');
            setCurrentStep(2);
          }}
        >
          <CardContent className="p-6 text-center">
            <Target className="w-12 h-12 mx-auto mb-4 text-orange-600" />
            <h3 className="text-xl font-semibold mb-2">Appel d'offres</h3>
            <p className="text-gray-600 mb-4">
              Recevez plusieurs propositions et choisissez la meilleure
            </p>
            <div className="space-y-2">
              <Badge variant="secondary">Enchère inversée</Badge>
              <Badge variant="secondary">+50 prestataires</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button 
        variant="outline" 
        onClick={() => setCurrentStep(0)}
        className="mt-4"
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Retour
      </Button>
    </div>
  );

  // Étape 2: Choix de catégorie
  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Dans quel domaine ?
        </h2>
        <p className="text-gray-600">
          Sélectionnez la catégorie qui correspond à votre projet
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {CATEGORIES.map((category) => (
          <Card
            key={category.id}
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedCategory === category.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
            }`}
            onClick={() => {
              setSelectedCategory(category.id);
              setTimeout(() => setCurrentStep(3), 300);
            }}
          >
            <CardContent className="p-4 text-center">
              <div className="mb-3">
                {(() => {
                  const IconComponent = getIcon(category.icon);
                  return <IconComponent className={`w-8 h-8 mx-auto ${category.color}`} />;
                })()}
              </div>
              <h3 className="font-medium text-sm leading-tight">{category.name}</h3>
              {category.description && (
                <p className="text-xs text-gray-500 mt-1">{category.description}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button 
          variant="outline" 
          onClick={() => setCurrentStep(1)}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Retour
        </Button>
      </div>
    </div>
  );

  // Étape 3: Complétude d'annonce
  const renderStep3 = () => {
    const selectedCat = CATEGORIES.find(cat => cat.id === selectedCategory);
    
    return (
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Décrivez votre projet {selectedCat?.name}
          </h2>
          <p className="text-gray-600">
            Plus votre description est précise, meilleures seront les propositions
          </p>
        </div>

        <div className="space-y-6 max-w-2xl mx-auto">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Titre du projet *
            </label>
            <Input
              placeholder="Ex: Création d'un site web e-commerce"
              value={projectData.title}
              onChange={(e) => setProjectData(prev => ({ ...prev, title: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description détaillée *
            </label>
            <Textarea
              placeholder="Décrivez précisément votre besoin, vos objectifs, contraintes techniques..."
              rows={4}
              value={projectData.description}
              onChange={(e) => setProjectData(prev => ({ ...prev, description: e.target.value }))}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Euro className="w-4 h-4 inline mr-1" />
                Budget indicatif
              </label>
              <Input
                placeholder="Ex: 5 000 - 10 000 €"
                value={projectData.budget}
                onChange={(e) => setProjectData(prev => ({ ...prev, budget: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                Délai souhaité
              </label>
              <Input
                placeholder="Ex: 2-3 mois"
                value={projectData.timeline}
                onChange={(e) => setProjectData(prev => ({ ...prev, timeline: e.target.value }))}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Exigences spécifiques
            </label>
            <Textarea
              placeholder="Technologies requises, contraintes particulières, livrables attendus..."
              rows={3}
              value={projectData.requirements}
              onChange={(e) => setProjectData(prev => ({ ...prev, requirements: e.target.value }))}
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">
              💡 Estimation IA
            </h4>
            <p className="text-blue-800 text-sm">
              Basé sur votre description, ce projet pourrait coûter entre{' '}
              <span className="font-semibold">3 000€ et 8 000€</span> et prendre{' '}
              <span className="font-semibold">6-10 semaines</span>.
            </p>
          </div>

          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={() => setCurrentStep(2)}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>

            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              disabled={!projectData.title || !projectData.description}
              onClick={() => {
                onComplete?.({
                  userType,
                  serviceType,
                  selectedCategory,
                  projectData
                });
              }}
            >
              <FileText className="w-4 h-4 mr-2" />
              Préparer la publication
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const steps = [renderStep0, renderStep1, renderStep2, renderStep3];

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">
            Créer votre projet - Étape {currentStep + 1}/4
          </CardTitle>
          <Badge variant="outline">
            {Math.round(progress)}% complété
          </Badge>
        </div>
        <Progress value={progress} className="w-full" />
      </CardHeader>
      <CardContent className="p-6">
        {steps[currentStep]()}
      </CardContent>
    </Card>
  );
}
