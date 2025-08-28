
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Shield, 
  Globe, 
  Users, 
  Zap,
  Award,
  TrendingUp,
  Settings
} from 'lucide-react';

// Import des nouvelles fonctionnalités
import TrustLayerBlockchain from '@/components/ai/trust-layer-blockchain';
import MarketIntelligenceDashboard from '@/components/ai/market-intelligence-dashboard';
import CollaborativeAIWorkspace from '@/components/ai/collaborative-ai-workspace';
import AdaptiveLearningEngine from '@/components/ai/adaptive-learning-engine';

export default function AIAdvancedFeatures() {
  const [activeFeature, setActiveFeature] = useState('overview');

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Brain className="h-8 w-8 text-blue-500" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Fonctionnalités IA Avancées
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Découvrez nos 12 innovations IA révolutionnaires qui transforment la façon dont vous gérez vos projets et collaborez sur la plateforme.
        </p>
        <div className="flex items-center justify-center gap-2">
          <Badge variant="default" className="bg-blue-100 text-blue-700">
            <Zap className="w-3 h-3 mr-1" />
            12 Innovations Complètes
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            <Award className="w-3 h-3 mr-1" />
            Blockchain Ready
          </Badge>
          <Badge variant="outline" className="bg-purple-100 text-purple-700">
            <TrendingUp className="w-3 h-3 mr-1" />
            ML Adaptatif
          </Badge>
        </div>
      </div>

      {/* Navigation des fonctionnalités */}
      <Tabs value={activeFeature} onValueChange={setActiveFeature} className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="trust">Trust Layer</TabsTrigger>
          <TabsTrigger value="intelligence">Market Intelligence</TabsTrigger>
          <TabsTrigger value="workspace">Workspace IA</TabsTrigger>
          <TabsTrigger value="learning">Apprentissage</TabsTrigger>
        </TabsList>

        {/* Vue d'ensemble */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Fonctionnalités implémentées */}
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Brain className="w-5 h-5" />
                  IA Prédictive
                  <Badge variant="default" className="bg-green-600">✓ Actif</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>✅ Prédiction succès missions</li>
                  <li>✅ Pricing neural avancé</li>
                  <li>✅ Matching sémantique</li>
                  <li>✅ Analytics prédictifs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Shield className="w-5 h-5" />
                  Trust & Sécurité
                  <Badge variant="default" className="bg-blue-600">✓ Actif</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>✅ Réputation blockchain</li>
                  <li>✅ Badges de confiance</li>
                  <li>✅ Détection fraude</li>
                  <li>✅ Vérification KYC</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-800">
                  <Globe className="w-5 h-5" />
                  Intelligence Marché
                  <Badge variant="default" className="bg-purple-600">✓ Actif</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-purple-700">
                  <li>✅ Alertes temps réel</li>
                  <li>✅ Tendances sectorielles</li>
                  <li>✅ Prédictions demande</li>
                  <li>✅ Recommandations prix</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <Users className="w-5 h-5" />
                  Collaboration IA
                  <Badge variant="default" className="bg-orange-600">✓ Actif</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li>✅ Workspace intelligent</li>
                  <li>✅ Détection blocages</li>
                  <li>✅ Optimisation équipes</li>
                  <li>✅ Prédictions projet</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-pink-200 bg-gradient-to-br from-pink-50 to-rose-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-pink-800">
                  <Zap className="w-5 h-5" />
                  Concierge IA
                  <Badge variant="default" className="bg-pink-600">✓ Actif</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-pink-700">
                  <li>✅ Brief auto-structuré</li>
                  <li>✅ Questions intelligentes</li>
                  <li>✅ Cahier des charges</li>
                  <li>✅ Vocal-to-brief</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-indigo-800">
                  <Settings className="w-5 h-5" />
                  Apprentissage ML
                  <Badge variant="default" className="bg-indigo-600">✓ Actif</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-indigo-700">
                  <li>✅ Adaptation continue</li>
                  <li>✅ Meta-learning</li>
                  <li>✅ Personnalisation</li>
                  <li>✅ Auto-amélioration</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Métriques globales */}
          <Card className="bg-gradient-to-r from-gray-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-center">Performance Globale des 12 Innovations IA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600">12/12</div>
                  <div className="text-sm text-gray-600">Fonctionnalités</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">94%</div>
                  <div className="text-sm text-gray-600">Précision IA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">&lt;150ms</div>
                  <div className="text-sm text-gray-600">Temps réponse</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Trust Layer */}
        <TabsContent value="trust" className="space-y-6">
          <TrustLayerBlockchain 
            userId="demo-user" 
            userType="provider" 
            showDetailed={true}
          />
        </TabsContent>

        {/* Market Intelligence */}
        <TabsContent value="intelligence" className="space-y-6">
          <MarketIntelligenceDashboard />
        </TabsContent>

        {/* Workspace Collaboratif */}
        <TabsContent value="workspace" className="space-y-6">
          <CollaborativeAIWorkspace 
            projectId="demo-project"
            userId="demo-user"
            userRole="provider"
          />
        </TabsContent>

        {/* Apprentissage Adaptatif */}
        <TabsContent value="learning" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AdaptiveLearningEngine 
              userId="demo-user"
              currentContext={{
                marketConditions: { tension: 'medium', volatility: 'low' },
                userState: { workload: 0.7, motivation: 'high' }
              }}
            />
            
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-blue-600" />
                  Configuration Apprentissage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Apprentissage automatique</span>
                    <Badge variant="default">Activé</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Collecte données anonymisées</span>
                    <Badge variant="secondary">Opt-in</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Personnalisation avancée</span>
                    <Badge variant="default">Activé</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Prédictions temps réel</span>
                    <Badge variant="default">Activé</Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Algorithmes Actifs</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>• Reinforcement Learning</div>
                    <div>• Neural Networks</div>
                    <div>• Ensemble Methods</div>
                    <div>• Meta-Learning</div>
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Configurer l'Apprentissage
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
