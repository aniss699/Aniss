import { useState } from 'react';
import { useLocation } from 'wouter';
import { HeroSection } from '@/components/home/hero-section';
import { ServiceTypeCards } from '@/components/home/service-type-cards';
import { CategorySelector } from '@/components/missions/category-selector';
import { QuickMissionCreator } from '@/components/missions/quick-mission-creator';
import { ProgressiveFlow } from '@/components/home/progressive-flow';
import { Button } from '@/components/ui/button';
import { Zap, MessageSquare, Star, Users, Clock } from 'lucide-react';
import { ROUTES } from '../routes/paths';

export default function Home() {
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedService, setSelectedService] = useState<'reverse-bidding' | 'direct-connection' | null>('reverse-bidding');
  const [showProgressiveFlow, setShowProgressiveFlow] = useState(true);

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

        {/* Toggle pour tester le bloc progressif */}
        <div className="text-center mb-4">
          <button 
            onClick={() => setShowProgressiveFlow(!showProgressiveFlow)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            {showProgressiveFlow ? '🔼 Masquer' : '🔽 Afficher'} le bloc progressif
          </button>
        </div>

        {/* Bloc d'affichage progressif */}
        {showProgressiveFlow && (
          <div className="mb-12 sm:mb-16 px-2 sm:px-0">
            <ProgressiveFlow 
              onComplete={(data) => {
                console.log('Données du projet:', data);
                alert('Projet configuré ! Voir la console pour les détails.');
                // Rediriger vers la création de mission avec les données
                setLocation('/create-mission');
              }}
            />
          </div>
        )}

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

        {/* Missions en cours */}
        <div className="mb-16 px-2 sm:px-0">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Missions en cours</h2>
            <p className="text-gray-600">Découvrez quelques projets actuellement ouverts sur la plateforme</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Développement d'une app mobile",
                category: "Développement Mobile",
                budget: "5 000 - 8 000 €",
                timeline: "6 semaines",
                bids: 12
              },
              {
                title: "Refonte site web e-commerce",
                category: "Développement Web",
                budget: "3 000 - 5 000 €",
                timeline: "4 semaines",
                bids: 8
              },
              {
                title: "Campagne marketing digital",
                category: "Marketing Digital",
                budget: "2 000 - 4 000 €",
                timeline: "3 semaines",
                bids: 15
              }
            ].map((mission, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-lg mb-2">{mission.title}</h3>
                <div className="text-sm text-gray-600 mb-4">
                  <div className="flex justify-between mb-1">
                    <span>Catégorie:</span>
                    <span className="font-medium">{mission.category}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Budget:</span>
                    <span className="text-green-600 font-medium">{mission.budget}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Délai:</span>
                    <span className="font-medium">{mission.timeline}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-medium">{mission.bids} offres reçues</span>
                  <Button size="sm" variant="outline">Voir plus</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notre concept */}
        <div className="mb-16 px-2 sm:px-0">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Notre concept</h2>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              AppelsPro révolutionne la mise en relation professionnelle grâce à l'intelligence artificielle. 
              Notre plateforme d'enchères inversées permet aux clients de recevoir des devis personnalisés 
              en temps record, tandis que les prestataires accèdent à des opportunités qualifiées 
              correspondant exactement à leurs compétences.
            </p>
          </div>
        </div>

        {/* Comment ça marche */}
        <div className="mb-16 px-2 sm:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comment ça marche</h2>
            <p className="text-gray-600">Deux approches simples selon vos besoins</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Appels d'offres */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-blue-600 mb-6 text-center">Appels d'offres inversés</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Publiez votre projet</h4>
                    <p className="text-gray-600 text-sm">Décrivez votre besoin en détail avec l'aide de notre IA</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Recevez des devis</h4>
                    <p className="text-gray-600 text-sm">Les prestataires qualifiés soumettent leurs propositions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Choisissez le meilleur</h4>
                    <p className="text-gray-600 text-sm">Comparez et sélectionnez l'offre qui vous convient</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mise en relation directe */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-green-600 mb-6 text-center">Mise en relation directe</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Choisissez un expert</h4>
                    <p className="text-gray-600 text-sm">Parcourez les profils vérifiés dans votre domaine</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Contactez directement</h4>
                    <p className="text-gray-600 text-sm">Échangez immédiatement avec le professionnel choisi</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Démarrez votre projet</h4>
                    <p className="text-gray-600 text-sm">Négociez et lancez votre collaboration rapidement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pourquoi choisir AppelsPro */}
        <div className="mb-16 px-2 sm:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi choisir AppelsPro</h2>
          </div>

          {selectedService === 'reverse-bidding' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Gain de temps</h3>
                <p className="text-gray-600">Recevez plusieurs devis qualifiés en quelques heures au lieu de semaines de prospection</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">IA intelligente</h3>
                <p className="text-gray-600">Notre IA optimise votre brief et attire les meilleurs prestataires pour votre projet</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Qualité garantie</h3>
                <p className="text-gray-600">Tous nos prestataires sont vérifiés et évalués par la communauté</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Clients qualifiés</h3>
                <p className="text-gray-600">Accédez à des projets sérieux avec des budgets définis et des clients motivés</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Zéro prospection</h3>
                <p className="text-gray-600">Fini la recherche de clients ! Ils viennent directement à vous via notre plateforme</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Matching intelligent</h3>
                <p className="text-gray-600">Notre IA vous propose uniquement les projets qui correspondent à vos compétences</p>
              </div>
            </div>
          )}
        </div>

        {/* Chiffres clés */}
        <div className="mb-16 px-2 sm:px-0">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">AppelsPro en chiffres</h2>
              <p className="text-lg opacity-90">La confiance de notre communauté</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">1,200+</div>
                <div className="text-lg opacity-90">Projets réalisés</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lg opacity-90">Prestataires actifs</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-lg opacity-90">Taux de satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16 px-2 sm:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
            <p className="text-gray-600">Tout ce que vous devez savoir sur AppelsPro</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "Comment fonctionne l'enchère inversée ?",
                answer: "Contrairement aux enchères classiques, c'est le client qui pose son besoin et les prestataires proposent leurs prix. Plus l'offre est compétitive et qualitative, plus elle a de chances d'être sélectionnée."
              },
              {
                question: "Les prestataires sont-ils vérifiés ?",
                answer: "Oui, tous nos prestataires passent par un processus de vérification incluant leurs compétences, références et identité. Leur profil affiche également les évaluations des clients précédents."
              },
              {
                question: "Y a-t-il des frais pour utiliser AppelsPro ?",
                answer: "L'inscription et la navigation sont gratuites. Une commission est prélevée uniquement sur les projets finalisés, garantissant ainsi notre engagement dans votre réussite."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold mb-3">Plateforme</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setLocation(ROUTES.HOME)} className="text-gray-300 hover:text-white transition-colors">Accueil</button></li>
                <li><button onClick={() => setLocation(ROUTES.MARKETPLACE)} className="text-gray-300 hover:text-white transition-colors">Marketplace</button></li>
                <li><button onClick={() => setLocation(ROUTES.SERVICES)} className="text-gray-300 hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => setLocation('/available-providers')} className="text-gray-300 hover:text-white transition-colors">Prestataires</button></li>
                <li><button onClick={() => setLocation(ROUTES.FEATURES)} className="text-gray-300 hover:text-white transition-colors">Fonctionnalités</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Démo & Test</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setLocation('/demo/profils')} className="text-gray-300 hover:text-white transition-colors">Profils Démo</button></li>
                <li><button onClick={() => setLocation('/demo/ia')} className="text-gray-300 hover:text-white transition-colors">IA en Action</button></li>
                <li><button onClick={() => setLocation('/demo/missions')} className="text-gray-300 hover:text-white transition-colors">Missions Démo</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">IA & Intelligence</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setLocation('/ai-features')} className="text-gray-300 hover:text-white transition-colors">Fonctionnalités IA</button></li>
                <li><button onClick={() => setLocation('/ai-dashboard')} className="text-gray-300 hover:text-white transition-colors">Dashboard IA</button></li>
                <li><button onClick={() => setLocation('/ai-advanced')} className="text-gray-300 hover:text-white transition-colors">IA Avancée</button></li>
                <li><button onClick={() => setLocation('/ai-test')} className="text-gray-300 hover:text-white transition-colors">Test IA</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Mon Espace & Support</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setLocation('/login')} className="text-gray-300 hover:text-white transition-colors">Connexion</button></li>
                <li><button onClick={() => setLocation(ROUTES.DASHBOARD)} className="text-gray-300 hover:text-white transition-colors">Tableau de bord</button></li>
                <li><button onClick={() => setLocation(ROUTES.PROFILE)} className="text-gray-300 hover:text-white transition-colors">Mon profil</button></li>
                <li><button onClick={() => setLocation(ROUTES.MISSIONS)} className="text-gray-300 hover:text-white transition-colors">Mes missions</button></li>
                <li><button onClick={() => setLocation(ROUTES.CREATE_MISSION)} className="text-gray-300 hover:text-white transition-colors">Créer une mission</button></li>
                <li><button onClick={() => setLocation(ROUTES.MESSAGES)} className="text-gray-300 hover:text-white transition-colors">Messages</button></li>
                <li><button onClick={() => setLocation(ROUTES.LEGAL)} className="text-gray-300 hover:text-white transition-colors">Mentions légales</button></li>
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