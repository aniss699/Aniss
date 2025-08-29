import { useState } from 'react';
import { useLocation } from 'wouter';
import { HeroSection } from '@/components/home/hero-section';
import { ServiceTypeCards } from '@/components/home/service-type-cards';
import { CategorySelector } from '@/components/missions/category-selector';
import { QuickMissionCreator } from '@/components/missions/quick-mission-creator';
import { ROUTES } from '../routes/paths';

export default function Home() {
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedService, setSelectedService] = useState<'reverse-bidding' | 'direct-connection' | null>('reverse-bidding');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* User Type Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setSelectedService('reverse-bidding')}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedService === 'reverse-bidding'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                👨‍💼 Je suis client
              </button>
              <button
                onClick={() => setSelectedService('direct-connection')}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedService === 'direct-connection'
                    ? 'bg-green-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-green-500'
                }`}
              >
                🛠️ Je suis prestataire
              </button>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <HeroSection />

        {/* Service Type Cards */}
        <ServiceTypeCards 
          selectedService={selectedService}
          onServiceSelect={setSelectedService}
        />

        {/* Service Content */}
        {selectedService && (
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 mb-12 max-w-6xl mx-auto">
            {selectedService === 'reverse-bidding' && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Quel est votre besoin ?
                  </h2>
                  <p className="text-gray-600">
                    Sélectionnez votre domaine et décrivez votre projet
                  </p>
                </div>

                <div className="mb-8">
                  <CategorySelector
                    selectedCategory={selectedCategory}
                    onCategorySelect={setSelectedCategory}
                    serviceType={selectedService}
                  />
                </div>

                <div className="mt-6">
                  <QuickMissionCreator />
                </div>
              </div>
            )}

            {selectedService === 'direct-connection' && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Trouvez le bon professionnel
                  </h2>
                  <p className="text-gray-600">
                    Sélectionnez votre domaine pour découvrir les experts disponibles
                  </p>
                </div>

                <div className="mb-8">
                  <CategorySelector
                    selectedCategory={selectedCategory}
                    onCategorySelect={setSelectedCategory}
                    serviceType={selectedService}
                  />
                </div>

                <div className="text-center">
                  <button 
                    onClick={() => setLocation('/available-providers')}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition hover:scale-105"
                  >
                    Explorer les profils
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Simplified Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold mb-3">Plateforme</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setLocation(ROUTES.MARKETPLACE)} className="text-gray-300 hover:text-white transition-colors">Missions</button></li>
                <li><button onClick={() => setLocation('/available-providers')} className="text-gray-300 hover:text-white transition-colors">Prestataires</button></li>
                <li><button onClick={() => setLocation(ROUTES.CREATE_MISSION)} className="text-gray-300 hover:text-white transition-colors">Créer une mission</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">IA & Fonctionnalités</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setLocation('/ai-dashboard')} className="text-gray-300 hover:text-white transition-colors">Tableau de bord IA</button></li>
                <li><button onClick={() => setLocation('/ai-features')} className="text-gray-300 hover:text-white transition-colors">Fonctionnalités IA</button></li>
                <li><button onClick={() => setLocation('/features')} className="text-gray-300 hover:text-white transition-colors">Toutes les fonctionnalités</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setLocation(ROUTES.LEGAL)} className="text-gray-300 hover:text-white transition-colors">Mentions légales</button></li>
                <li><button onClick={() => setLocation(ROUTES.PROFILE)} className="text-gray-300 hover:text-white transition-colors">Mon profil</button></li>
                <li><button onClick={() => setLocation(ROUTES.DASHBOARD)} className="text-gray-300 hover:text-white transition-colors">Tableau de bord</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
            © 2024 AppelsPro. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}