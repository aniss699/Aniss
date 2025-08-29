import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ROUTES } from '../../routes/paths';

export function HeroSection() {
  return (
    <div className="text-center mb-12 sm:mb-16 px-2 sm:px-0">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Trouvez le <span className="text-blue-600">prestataire parfait</span> avec l'IA
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Plateforme française d'appels d'offres inversés avec intelligence artificielle avancée.
        </p>
        <div className="flex justify-center gap-3 text-sm">
          <div className="flex items-center text-green-600 font-medium">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            1,247+ projets réalisés
          </div>
          <div className="flex items-center text-blue-600 font-medium">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
            98% de satisfaction
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button asChild size="lg">
            <Link href={ROUTES.MARKETPLACE}>
              Découvrir les missions
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={ROUTES.CREATE_MISSION}>
              Poster une mission
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}