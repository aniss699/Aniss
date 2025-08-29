import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  MessageSquare, 
  Lightbulb,
  CheckCircle,
  Clock,
  Euro,
  Users,
  Sparkles,
  BarChart3
} from 'lucide-react';

const demoAnalysis = {
  title: "Développement d'une application mobile de e-commerce",
  description: "Je recherche un développeur expérimenté pour créer une application mobile complète de vente en ligne avec système de paiement intégré, gestion des stocks et interface administrateur.",
  aiAnalysis: {
    qualityScore: 78,
    detectedSkills: ["React Native", "API REST", "Stripe", "Firebase", "UI/UX Mobile"],
    estimatedComplexity: 8,
    priceRange: { min: 4200, med: 6500, max: 9800 },
    estimatedDelay: 21,
    estimatedProviders: 34,
    improvements: [
      "Précisez les plateformes cibles (iOS, Android, ou les deux)",
      "Détaillez les fonctionnalités de paiement requises",
      "Spécifiez le nombre d'utilisateurs attendus",
      "Mentionnez si vous avez déjà un design ou des wireframes"
    ]
  }
};

export default function DemoAI() {
  const [selectedDemo, setSelectedDemo] = useState('analysis');
  const [inputText, setInputText] = useState(demoAnalysis.description);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(demoAnalysis.aiAnalysis);

  const runDemo = async () => {
    setAnalyzing(true);
    // Simulation d'analyse IA
    await new Promise(resolve => setTimeout(resolve, 2000));
    setAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Brain className="w-8 h-8 text-blue-600" />
            Intelligence Artificielle en Action
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez comment notre IA améliore et optimise vos projets. 
            Testez nos fonctionnalités avancées en temps réel.
          </p>
        </div>

        {/* AI Features Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardHeader>
              <Zap className="w-8 h-8 text-amber-500 mx-auto mb-2" />
              <CardTitle>Analyse Rapide</CardTitle>
              <CardDescription>
                Analyse instantanée de vos projets avec suggestions d'amélioration
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <CardTitle>Matching Intelligent</CardTitle>
              <CardDescription>
                Connexion automatique avec les meilleurs prestataires
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <CardTitle>Prix Optimisé</CardTitle>
              <CardDescription>
                Suggestions de prix basées sur l'analyse du marché
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Interactive Demo */}
        <Tabs value={selectedDemo} onValueChange={setSelectedDemo} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="analysis">Analyse de Projet</TabsTrigger>
            <TabsTrigger value="optimization">Optimisation</TabsTrigger>
            <TabsTrigger value="insights">Insights Marché</TabsTrigger>
          </TabsList>

          <TabsContent value="analysis" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-blue-600" />
                  Analyseur IA - Démonstration Interactive
                </CardTitle>
                <CardDescription>
                  Modifiez la description ci-dessous et voyez comment l'IA analyse votre projet
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Description de votre projet
                  </label>
                  <Textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Décrivez votre projet..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button 
                  onClick={runDemo} 
                  disabled={analyzing}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {analyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Analyse en cours...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Analyser avec l'IA
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Quality Score */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Score Qualité
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Score global</span>
                        <span className="text-sm font-medium">{results.qualityScore}/100</span>
                      </div>
                      <Progress value={results.qualityScore} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Complexité:</span>
                        <span className="ml-1 font-medium">{results.estimatedComplexity}/10</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Délai estimé:</span>
                        <span className="ml-1 font-medium">{results.estimatedDelay}j</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Price Analysis */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Euro className="w-5 h-5 text-blue-500" />
                    Analyse Prix
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Prix recommandé:</span>
                      <span className="font-bold text-lg text-blue-600">
                        {results.priceRange.med.toLocaleString()} €
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Min: {results.priceRange.min.toLocaleString()} €</span>
                      <span>Max: {results.priceRange.max.toLocaleString()} €</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{results.estimatedProviders} prestataires intéressés</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detected Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-500" />
                  Compétences Détectées
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {results.detectedSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Improvements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  Suggestions d'Amélioration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {results.improvements.map((improvement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="optimization" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Optimisation Automatique
                </CardTitle>
                <CardDescription>
                  L'IA améliore automatiquement vos descriptions de projet
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Version Originale</h4>
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm">
                      "Je veux une app mobile pour vendre mes produits"
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                      Version Optimisée <Sparkles className="w-4 h-4 text-amber-500" />
                    </h4>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-sm">
                      "Développement d'une application mobile e-commerce cross-platform (iOS/Android) 
                      avec catalogue produits, panier d'achat, paiement sécurisé Stripe, 
                      gestion des stocks et tableau de bord administrateur. 
                      Budget : 5000-8000€, Délai : 6-8 semaines."
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+340%</div>
                    <div className="text-sm text-gray-600">Plus de détails</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">+85%</div>
                    <div className="text-sm text-gray-600">Candidatures</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">+120%</div>
                    <div className="text-sm text-gray-600">Taux succès</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">-45%</div>
                    <div className="text-sm text-gray-600">Temps nego.</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  Insights Marché en Temps Réel
                </CardTitle>
                <CardDescription>
                  Analyse des tendances et de la demande par secteur
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Secteurs les Plus Demandés</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Développement Web</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="w-4/5 h-full bg-blue-500 rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-600">80%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Design UX/UI</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="w-3/5 h-full bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-600">65%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Marketing Digital</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="w-1/2 h-full bg-purple-500 rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-600">55%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Prix Moyens par Secteur</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Développement</span>
                        <span className="font-medium">2500-8000€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Design</span>
                        <span className="font-medium">800-3000€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Marketing</span>
                        <span className="font-medium">1200-4000€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Rédaction</span>
                        <span className="font-medium">300-1500€</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Tendances</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span>IA & Machine Learning</span>
                        <Badge className="bg-green-100 text-green-800">+150%</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-500" />
                        <span>Applications No-Code</span>
                        <Badge className="bg-blue-100 text-blue-800">+89%</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-purple-500" />
                        <span>E-commerce Mobile</span>
                        <Badge className="bg-purple-100 text-purple-800">+67%</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Prêt à utiliser l'IA pour vos projets ?
          </h3>
          <p className="mb-6 opacity-90">
            Rejoignez des milliers d'utilisateurs qui optimisent leurs projets avec notre IA.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100">
            Commencer maintenant
          </Button>
        </div>
      </div>
    </div>
  );
}