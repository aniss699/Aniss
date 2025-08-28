import React, { useState } from 'react';
import { Brain, Wand2, Sparkles, Loader2, Target, Zap, TrendingUp, Star, Plus, RefreshCw, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { aiEnhanceText, aiSuggestHeadline, aiImproveBio, aiGenerateKeywordsSkills } from '../../../ai/profileAssist';
import { useToast } from '@/hooks/use-toast';

interface AIAssistButtonsProps {
  onHeadlineGenerated?: (headline: string) => void;
  onBioGenerated?: (bio: string) => void;
  onKeywordsGenerated?: (keywords: string[]) => void;
  onSkillsGenerated?: (skills: Array<{ name: string; level: number }>) => void;
  currentProfile?: any;
  userType?: 'client' | 'provider';
}

export function AIAssistButtons({
  type,
  currentValue,
  role = 'provider',
  onSuggestion,
  disabled = false,
  additionalData,
  currentProfile,
  userType = 'provider'
}: AIAssistButtonsProps) {
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<any>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const [isLoadingHeadline, setIsLoadingHeadline] = useState(false);
  const [isLoadingBio, setIsLoadingBio] = useState(false);
  const [isLoadingKeywords, setIsLoadingKeywords] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const { toast } = useToast();

  const generateSuggestion = async (actionType?: string) => {
    const action = actionType || type;
    setActiveAction(action);

    if (!currentValue.trim() && !['headline', 'complete-profile', 'optimize-rates', 'improve-visibility'].includes(action)) {
      toast({
        title: 'Texte requis',
        description: 'Veuillez d\'abord saisir du texte pour que l\'IA puisse l\'améliorer.',
        variant: 'destructive'
      });
      setActiveAction(null);
      return;
    }

    setLoading(true);
    try {
      let result: any;

      switch (action) {
        case 'text':
          result = await aiEnhanceText(currentValue);
          break;
        case 'headline':
          result = await aiSuggestHeadline(currentValue, role);
          break;
        case 'bio':
          result = await aiImproveBio(currentValue, role);
          break;
        case 'keywords':
          result = await aiGenerateKeywordsSkills({ 
            bio: currentValue, 
            headline: additionalData?.headline || '' 
          });
          break;
        case 'complete-profile':
          result = await generateProfileCompletionSuggestions();
          break;
        case 'optimize-rates':
          result = await generateRateOptimization();
          break;
        case 'improve-visibility':
          result = await generateVisibilityTips();
          break;
        case 'enhance-description':
          result = await enhanceWithKeywords(currentValue);
          break;
        case 'add-call-to-action':
          result = await addCallToAction(currentValue, role);
          break;
        case 'improve-structure':
          result = await improveTextStructure(currentValue);
          break;
        default:
          result = currentValue;
      }

      if (typeof result === 'string') {
        setSuggestion(result);
      } else {
        onSuggestion(result);
        const message = result.keywords ? 
          `${result.keywords.length} mots-clés et ${result.skills?.length || 0} compétences suggérés.` :
          'Suggestions générées avec succès.';
        toast({
          title: 'Suggestions générées',
          description: message,
        });
        setActiveAction(null);
        return;
      }

      setShowPreview(true);
    } catch (error) {
      console.error('Erreur IA:', error);
      toast({
        title: 'Erreur IA',
        description: 'Une erreur est survenue. Suggestions basiques générées.',
        variant: 'destructive'
      });

      // Fallback simple
      setSuggestion(currentValue + ' [Version améliorée non disponible]');
      setShowPreview(true);
    } finally {
      setLoading(false);
      setActiveAction(null);
    }
  };

  // Fonctions d'assistance IA supplémentaires
  const generateProfileCompletionSuggestions = async () => {
    return {
      sections: [
        'Ajouter 3-5 mots-clés spécifiques à votre domaine',
        'Compléter la section expérience avec des années',
        'Ajouter au moins 2 projets au portfolio',
        'Préciser vos tarifs et disponibilités'
      ],
      priority: 'high'
    };
  };

  const generateRateOptimization = async () => {
    return {
      suggestions: [
        `Tarif recommandé: 45-65€/h pour votre profil ${role}`,
        'Ajustement saisonnier: +15% en période haute',
        'Tarif premium pour projets urgents: +25%'
      ],
      reasoning: 'Basé sur votre expérience et le marché local'
    };
  };

  const generateVisibilityTips = async () => {
    return {
      tips: [
        'Répondre aux appels d\'offres dans les 2h augmente vos chances de 40%',
        'Compléter votre profil à 90%+ améliore votre classement',
        'Ajouter des témoignages clients booste votre crédibilité'
      ]
    };
  };

  const enhanceWithKeywords = async (text: string) => {
    const keywords = role === 'provider' ? 
      ['professionnel', 'expérimenté', 'qualité', 'délais', 'satisfaction'] :
      ['projet', 'partenariat', 'collaboration', 'long terme', 'qualité'];

    return text + ` ${keywords.slice(0, 2).join(', ')} - Contact pour plus d\'informations.`;
  };

  const addCallToAction = async (text: string, userRole: string) => {
    const cta = userRole === 'provider' ? 
      'Contactez-moi pour discuter de votre projet !' :
      'N\'hésitez pas à nous contacter pour échanger sur vos services.';

    return text + ` ${cta}`;
  };

  const improveTextStructure = async (text: string) => {
    const lines = text.split('. ');
    return lines.map((line, index) => 
      index === 0 ? `✓ ${line}` : 
      index < lines.length - 1 ? `• ${line}` : line
    ).join('. ');
  };

  const applySuggestion = () => {
    if (suggestion) {
      onSuggestion(suggestion);
      setSuggestion(null);
      setShowPreview(false);
      toast({
        title: 'Suggestion appliquée',
        description: 'Votre texte a été mis à jour avec la suggestion IA.',
      });
    }
  };

  const getButtonConfigs = () => {
    const configs = [
      {
        action: 'text',
        label: 'Améliorer le style',
        icon: Wand2,
        description: 'Optimise le style et la clarté',
        color: 'blue'
      },
      {
        action: 'enhance-description',
        label: 'Enrichir avec mots-clés',
        icon: Plus,
        description: 'Ajoute des mots-clés pertinents',
        color: 'green'
      },
      {
        action: 'add-call-to-action',
        label: 'Ajouter un appel à l\'action',
        icon: Target,
        description: 'Incite à la prise de contact',
        color: 'orange'
      },
      {
        action: 'improve-structure',
        label: 'Structurer le texte',
        icon: RefreshCw,
        description: 'Améliore la lisibilité',
        color: 'purple'
      }
    ];

    // Configs spécifiques selon le type
    if (type === 'headline') {
      return [{
        action: 'headline',
        label: 'Générer un titre IA',
        icon: Sparkles,
        description: 'Crée un titre accrocheur et professionnel',
        color: 'blue'
      }];
    }

    if (type === 'bio') {
      return [
        {
          action: 'bio',
          label: 'Enrichir la description',
          icon: Brain,
          description: 'Améliore et complète votre présentation',
          color: 'blue'
        },
        ...configs.slice(0, 3)
      ];
    }

    if (type === 'keywords') {
      return [{
        action: 'keywords',
        label: 'Suggérer mots-clés IA',
        icon: Lightbulb,
        description: 'Extrait des mots-clés depuis votre contenu',
        color: 'yellow'
      }];
    }

    return configs;
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-200 hover:border-blue-300 hover:bg-blue-50 text-blue-700',
      green: 'border-green-200 hover:border-green-300 hover:bg-green-50 text-green-700',
      orange: 'border-orange-200 hover:border-orange-300 hover:bg-orange-50 text-orange-700',
      purple: 'border-purple-200 hover:border-purple-300 hover:bg-purple-50 text-purple-700',
      yellow: 'border-yellow-200 hover:border-yellow-300 hover:bg-yellow-50 text-yellow-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const buttonConfigs = getButtonConfigs();

  // Actions IA spécifiques pour la section profil
  const handleGenerateHeadline = async () => {
    setIsLoadingHeadline(true);
    try {
      const headline = await aiSuggestHeadline(currentValue || '', userType);
      onSuggestion(headline); // Utilise onSuggestion pour passer la valeur
      if (onHeadlineGenerated) onHeadlineGenerated(headline);
      toast({ title: "Titre IA généré", description: "Un nouveau titre a été suggéré." });
    } catch (error) {
      toast({ title: "Erreur IA", description: "Impossible de générer le titre.", variant: "destructive" });
    } finally {
      setIsLoadingHeadline(false);
    }
  };

  const handleGenerateBio = async () => {
    setIsLoadingBio(true);
    try {
      const bio = await aiImproveBio(currentValue || '', userType);
      onSuggestion(bio); // Utilise onSuggestion pour passer la valeur
      if (onBioGenerated) onBioGenerated(bio);
      toast({ title: "Bio IA générée", description: "Votre description a été améliorée." });
    } catch (error) {
      toast({ title: "Erreur IA", description: "Impossible d'améliorer la bio.", variant: "destructive" });
    } finally {
      setIsLoadingBio(false);
    }
  };

  const handleGenerateKeywords = async () => {
    setIsLoadingKeywords(true);
    try {
      const result = await aiGenerateKeywordsSkills({ 
        bio: currentValue || '', 
        headline: additionalData?.headline || '' 
      });
      onSuggestion(result); // Utilise onSuggestion pour passer la valeur
      if (onKeywordsGenerated) onKeywordsGenerated(result.keywords);
      if (onSkillsGenerated) onSkillsGenerated(result.skills);
      toast({ title: "Mots-clés IA générés", description: `${result.keywords.length} mots-clés et ${result.skills?.length || 0} compétences suggérés.` });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de générer les mots-clés",
        variant: "destructive"
      });
    } finally {
      setIsLoadingKeywords(false);
    }
  };

  const analyzeProfileCompleteness = async () => {
    setIsAnalyzing(true);
    try {
      const response = await fetch('/api/ai/analyze-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          profile: currentProfile,
          user_type: userType 
        }),
      });

      if (response.ok) {
        const analysis = await response.json();
        toast({
          title: "✨ Analyse IA terminée",
          description: `Score de complétude: ${analysis.completeness_score}% - ${analysis.missing_elements?.length || 0} éléments manquants`,
        });

        // Afficher les recommandations
        if (analysis.ai_suggestions?.length > 0) {
          setTimeout(() => {
            toast({
              title: "🎯 Recommandations IA",
              description: analysis.ai_suggestions[0],
            });
          }, 1000);
        }
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible d'analyser le profil",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const optimizeForMarket = async () => {
    setIsOptimizing(true);
    try {
      const response = await fetch('/api/ai/market-optimization', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          profile: currentProfile,
          user_type: userType,
          market_context: 'current'
        }),
      });

      if (response.ok) {
        const optimization = await response.json();
        toast({
          title: "🚀 Optimisation marché",
          description: `Recommandations générées pour améliorer votre positionnement`,
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Optimisation temporairement indisponible",
        variant: "destructive"
      });
    } finally {
      setIsOptimizing(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Boutons de suggestions multiples */}
      <div className="grid grid-cols-1 gap-3">
        {buttonConfigs.map((config) => {
          const Icon = config.icon;
          const isLoading = loading && activeAction === config.action;

          return (
            <Button
              key={config.action}
              onClick={() => generateSuggestion(config.action)}
              disabled={disabled || loading}
              variant="outline"
              size="sm"
              className={`w-full ${getColorClasses(config.color)} transition-all duration-200`}
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Icon className="h-4 w-4 mr-2" />
              )}
              {isLoading ? 'Génération...' : config.label}
            </Button>
          );
        })}
      </div>

      {/* Descriptions des actions */}
      <div className="text-xs text-gray-500 space-y-1">
        {buttonConfigs.map((config) => (
          <div key={`desc-${config.action}`} className="flex items-center gap-2">
            <config.icon className="h-3 w-3" />
            <span>{config.description}</span>
          </div>
        ))}
      </div>

      {/* Aperçu de la suggestion */}
      {showPreview && suggestion && (
        <Card className="border-blue-200 shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-blue-600 border-blue-200">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Suggestion IA
                </Badge>
              </div>
              <div className="flex space-x-2">
                <Button
                  onClick={applySuggestion}
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 h-8"
                >
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Appliquer
                </Button>
                <Button
                  onClick={() => {
                    setShowPreview(false);
                    setSuggestion(null);
                  }}
                  variant="ghost"
                  size="sm"
                  className="h-8"
                >
                  Ignorer
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
              <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
                {suggestion}
              </p>
            </div>

            <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
              <Brain className="h-3 w-3" />
              <span>Cette suggestion est générée par IA et peut être personnalisée selon vos besoins.</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Actions rapides pour optimisation globale */}
      {type === 'complete-profile' && (
        <Card className="border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-green-700">Actions rapides IA</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 gap-2">
              <Button
                onClick={() => generateSuggestion('optimize-rates')}
                variant="outline"
                size="sm"
                className="border-green-200 hover:bg-green-50 text-green-700 justify-start"
                disabled={loading}
              >
                <Star className="h-3 w-3 mr-2" />
                Optimiser mes tarifs
              </Button>
              <Button
                onClick={() => generateSuggestion('improve-visibility')}
                variant="outline"
                size="sm"
                className="border-green-200 hover:bg-green-50 text-green-700 justify-start"
                disabled={loading}
              >
                <Zap className="h-3 w-3 mr-2" />
                Améliorer ma visibilité
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Section IA pour le Profil */}
      <Card className="border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600" />
              Assistant IA Profil
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                <Sparkles className="w-3 h-3 mr-1" />
                12 Innovations IA
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">

            {/* Génération de contenu */}
            <div>
              <h4 className="text-sm font-medium mb-2 text-gray-700">🎯 Génération de contenu</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                <Button
                  onClick={handleGenerateHeadline}
                  disabled={isLoadingHeadline}
                  variant="outline"
                  className="w-full justify-start hover:bg-blue-50 border-blue-200"
                >
                  {isLoadingHeadline ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Target className="w-4 h-4 mr-2 text-blue-600" />
                  )}
                  Titre accrocheur
                </Button>

                <Button
                  onClick={handleGenerateBio}
                  disabled={isLoadingBio}
                  variant="outline"
                  className="w-full justify-start hover:bg-purple-50 border-purple-200"
                >
                  {isLoadingBio ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Wand2 className="w-4 h-4 mr-2 text-purple-600" />
                  )}
                  Bio professionnelle
                </Button>

                <Button
                  onClick={handleGenerateKeywords}
                  disabled={isLoadingKeywords}
                  variant="outline"
                  className="w-full justify-start hover:bg-green-50 border-green-200"
                >
                  {isLoadingKeywords ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                  )}
                  Mots-clés & Skills
                </Button>

                <Button
                  onClick={() => {
                    handleGenerateHeadline();
                    setTimeout(() => handleGenerateBio(), 1000);
                    setTimeout(() => handleGenerateKeywords(), 2000);
                  }}
                  disabled={isLoadingHeadline || isLoadingBio || isLoadingKeywords}
                  className="w-full justify-start bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Améliorer tout
                </Button>

              </div>
            </div>

            {/* Analyse et optimisation */}
            <div>
              <h4 className="text-sm font-medium mb-2 text-gray-700">🔍 Analyse IA avancée</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                <Button
                  onClick={analyzeProfileCompleteness}
                  disabled={isAnalyzing}
                  variant="outline"
                  className="w-full justify-start hover:bg-orange-50 border-orange-200"
                >
                  {isAnalyzing ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Star className="w-4 h-4 mr-2 text-orange-600" />
                  )}
                  Analyser complétude
                </Button>

                <Button
                  onClick={optimizeForMarket}
                  disabled={isOptimizing}
                  variant="outline"
                  className="w-full justify-start hover:bg-emerald-50 border-emerald-200"
                >
                  {isOptimizing ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <TrendingUp className="w-4 h-4 mr-2 text-emerald-600" />
                  )}
                  Optimiser marché
                </Button>

                <Button
                  onClick={() => window.open('/ai-advanced?tab=learning', '_blank')}
                  variant="outline"
                  className="w-full justify-start hover:bg-indigo-50 border-indigo-200"
                >
                  <Brain className="w-4 h-4 mr-2 text-indigo-600" />
                  Apprentissage ML
                </Button>

                <Button
                  onClick={() => window.open('/ai-advanced?tab=trust', '_blank')}
                  variant="outline"
                  className="w-full justify-start hover:bg-cyan-50 border-cyan-200"
                >
                  <RefreshCw className="w-4 h-4 mr-2 text-cyan-600" />
                  Trust Layer
                </Button>

              </div>
            </div>

            {/* Lien vers toutes les fonctionnalités */}
            <div className="pt-2 border-t border-gray-200">
              <Button
                onClick={() => window.location.href = '/ai-advanced'}
                variant="default"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Brain className="w-4 h-4 mr-2" />
                Accéder aux 12 Innovations IA
                <Plus className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Tips améliorés */}
            <div className="text-xs text-gray-600 bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg border border-blue-100">
              <div className="flex items-center gap-1 mb-1">
                <Lightbulb className="w-3 h-3 text-blue-600" />
                <span className="font-medium">💡 Nouvelles fonctionnalités IA</span>
              </div>
              • <strong>Neural Pricing</strong> : Prix optimal basé sur 50+ facteurs<br/>
              • <strong>Semantic Matching</strong> : Correspondance projets intelligente<br/>
              • <strong>Predictive Analytics</strong> : Prédictions revenus & succès<br/>
              • <strong>Trust Layer Blockchain</strong> : Réputation décentralisée
            </div>

          </CardContent>
        </Card>
    </div>
  );
}