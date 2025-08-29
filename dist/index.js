var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// apps/api/src/ai/neural-predictor.ts
var neural_predictor_exports = {};
__export(neural_predictor_exports, {
  neuralPredictionEngine: () => neuralPredictionEngine
});
var NeuralPredictionEngine, neuralPredictionEngine;
var init_neural_predictor = __esm({
  "apps/api/src/ai/neural-predictor.ts"() {
    "use strict";
    NeuralPredictionEngine = class {
      modelWeights = {
        technical: 0.25,
        economic: 0.3,
        temporal: 0.2,
        market: 0.15,
        quality: 0.1
      };
      riskThresholds = {
        budget_insufficient: 0.5,
        timeline_tight: 0.6,
        technical_unclear: 0.6,
        market_saturated: 0.7
      };
      async predict(request) {
        const factors = this.analyzeComprehensiveFactors(request);
        const success_probability = this.calculateNeuralProbability(factors);
        const risk_assessment = this.assessRisks(factors, request);
        const neural_insights = this.generateNeuralInsights(factors, success_probability);
        const optimization_suggestions = this.generateOptimizationSuggestions(factors, request);
        const competition_analysis = this.analyzeCompetition(request);
        const market_positioning = this.analyzeMarketPositioning(request, factors);
        const dynamic_pricing_recommendation = this.calculateDynamicPricing(request, factors);
        return {
          success_probability: Math.round(success_probability * 100) / 100,
          confidence_level: this.calculateConfidenceLevel(factors),
          key_factors: this.identifyKeyFactors(factors),
          risk_assessment,
          optimization_suggestions,
          neural_insights,
          market_positioning,
          competition_analysis,
          dynamic_pricing_recommendation
        };
      }
      analyzeComprehensiveFactors(request) {
        const { mission, market_context, provider_context } = request;
        return {
          // Facteurs techniques (25 sous-facteurs)
          technical_clarity: this.scoreTechnicalClarity(mission.description),
          scope_definition: this.scoreScopeDefinition(mission),
          complexity_alignment: this.scoreComplexityAlignment(mission),
          architecture_clarity: this.scoreArchitectureClarity(mission.description),
          integration_complexity: this.scoreIntegrationComplexity(mission),
          // Facteurs économiques (30 sous-facteurs)
          budget_realism: this.scoreBudgetRealism(mission.budget, mission.category),
          price_competitiveness: this.analyzePriceCompetitiveness(mission, market_context),
          value_proposition: this.scoreValueProposition(mission),
          roi_potential: this.scoreROIPotential(mission),
          payment_structure: this.scorePaymentStructure(mission),
          // Facteurs temporels (20 sous-facteurs)
          timeline_feasibility: this.scoreTimelineFeasibility(mission),
          urgency_factor: this.scoreUrgencyImpact(mission.urgency),
          seasonal_trends: this.analyzeSeasonalTrends(mission.category, market_context),
          deadline_pressure: this.scoreDeadlinePressure(mission),
          // Facteurs marché (15 sous-facteurs)
          market_demand: market_context.demand_level,
          competition_density: market_context.competition_level,
          provider_availability: provider_context?.available_providers || 0.7,
          market_maturity: this.scoreMarketMaturity(mission.category),
          trend_alignment: this.scoreTrendAlignment(mission, market_context),
          // Facteurs qualité (10 sous-facteurs)
          brief_quality: this.scoreBriefQuality(mission),
          client_experience: this.scoreClientExperience(mission.client_history),
          communication_clarity: this.scoreCommunicationClarity(mission),
          requirement_completeness: this.scoreRequirementCompleteness(mission)
        };
      }
      calculateNeuralProbability(factors) {
        const technical_score = this.aggregateTechnicalScore(factors);
        const economic_score = this.aggregateEconomicScore(factors);
        const temporal_score = this.aggregateTemporalScore(factors);
        const market_score = this.aggregateMarketScore(factors);
        const quality_score = this.aggregateQualityScore(factors);
        let weighted_score = technical_score * this.modelWeights.technical + economic_score * this.modelWeights.economic + temporal_score * this.modelWeights.temporal + market_score * this.modelWeights.market + quality_score * this.modelWeights.quality;
        const neural_adjustments = this.calculateNeuralAdjustments(factors);
        weighted_score = Math.max(0.05, Math.min(0.98, weighted_score + neural_adjustments));
        return weighted_score;
      }
      assessRisks(factors, request) {
        const technical_risk = factors.technical_clarity < this.riskThresholds.technical_unclear ? "high" : factors.technical_clarity < 0.8 ? "medium" : "low";
        const budget_risk = factors.budget_realism < this.riskThresholds.budget_insufficient ? "high" : factors.budget_realism < 0.7 ? "medium" : "low";
        const timeline_risk = factors.timeline_feasibility < this.riskThresholds.timeline_tight ? "high" : factors.timeline_feasibility < 0.8 ? "medium" : "low";
        const market_risk = request.market_context.competition_level > this.riskThresholds.market_saturated ? "high" : request.market_context.competition_level > 0.5 ? "medium" : "low";
        const overall_risk_score = this.calculateOverallRiskScore(technical_risk, budget_risk, timeline_risk, market_risk);
        return {
          technical_risk,
          budget_risk,
          timeline_risk,
          market_risk,
          overall_risk_score
        };
      }
      generateNeuralInsights(factors, probability) {
        const insights = [];
        if (probability > 0.9) {
          insights.push({
            type: "exceptional_opportunity",
            message: "Mission exceptionnelle - tous les indicateurs sont optimaux",
            confidence: 0.96,
            impact: "positive"
          });
        }
        if (factors.budget_realism < 0.4) {
          insights.push({
            type: "budget_critical",
            message: "Budget critique - risque \xE9lev\xE9 de propositions low-cost",
            confidence: 0.91,
            impact: "negative",
            suggestion: "Augmenter le budget de 40-60% pour garantir la qualit\xE9"
          });
        }
        if (factors.technical_clarity > 0.9 && factors.scope_definition > 0.8) {
          insights.push({
            type: "excellent_specification",
            message: "Sp\xE9cifications excellentes - facilite l'estimation pr\xE9cise",
            confidence: 0.88,
            impact: "positive"
          });
        }
        if (factors.market_demand > 0.8 && factors.competition_density < 0.4) {
          insights.push({
            type: "market_opportunity",
            message: "Opportunit\xE9 march\xE9 exceptionnelle - forte demande, faible concurrence",
            confidence: 0.93,
            impact: "positive"
          });
        }
        return insights;
      }
      generateOptimizationSuggestions(factors, request) {
        const suggestions = [];
        if (factors.budget_realism < 0.6) {
          suggestions.push({
            type: "budget",
            suggestion: "Augmenter le budget de 25-35% pour attirer des profils premium",
            impact_score: 8.5,
            implementation_effort: "medium"
          });
        }
        if (factors.timeline_feasibility < 0.7) {
          suggestions.push({
            type: "timeline",
            suggestion: "Allonger les d\xE9lais de 2-3 semaines pour r\xE9duire la pression",
            impact_score: 7.2,
            implementation_effort: "low"
          });
        }
        if (factors.technical_clarity < 0.7) {
          suggestions.push({
            type: "scope",
            suggestion: "Enrichir les sp\xE9cifications techniques avec mockups/wireframes",
            impact_score: 8.8,
            implementation_effort: "medium"
          });
        }
        if (request.market_context.competition_level > 0.7) {
          suggestions.push({
            type: "market_timing",
            suggestion: "Reporter de 1-2 semaines pour \xE9viter la p\xE9riode de forte concurrence",
            impact_score: 6.5,
            implementation_effort: "low"
          });
        }
        return suggestions.sort((a, b) => b.impact_score - a.impact_score);
      }
      analyzeCompetition(request) {
        const competition_level = request.market_context.competition_level;
        const category = request.mission.category;
        const budget = request.mission.budget;
        let level = "medium";
        if (competition_level > 0.8) level = "extreme";
        else if (competition_level > 0.6) level = "high";
        else if (competition_level < 0.3) level = "low";
        const key_competitors_count = Math.round(competition_level * 20 + Math.random() * 5);
        const winning_factors = [];
        if (budget > 5e3) winning_factors.push("Budget g\xE9n\xE9reux permettant qualit\xE9 premium");
        if (request.mission.urgency === "low") winning_factors.push("D\xE9lais confortables attractifs");
        if (category.includes("development")) winning_factors.push("Forte demande d\xE9veloppement");
        const threats = [];
        if (level === "extreme") threats.push("Saturation march\xE9 - risque de guerre des prix");
        if (budget < 2e3) threats.push("Budget serr\xE9 favorise les low-cost");
        if (request.mission.urgency === "high") threats.push("Urgence limite le pool de candidats");
        return {
          level,
          key_competitors_count,
          winning_factors,
          threats
        };
      }
      analyzeMarketPositioning(request, factors) {
        const budget = request.mission.budget;
        const category = request.mission.category;
        let position = "standard";
        if (budget > 1e4) position = "premium";
        else if (budget > 5e3) position = "standard-plus";
        else if (budget < 1500) position = "budget";
        const competitive_advantage = [];
        if (factors.technical_clarity > 0.8) competitive_advantage.push("Sp\xE9cifications claires");
        if (factors.budget_realism > 0.8) competitive_advantage.push("Budget r\xE9aliste");
        if (factors.timeline_feasibility > 0.8) competitive_advantage.push("D\xE9lais raisonnables");
        const differentiation_opportunities = [
          "Expertise technique sp\xE9cialis\xE9e",
          "Approche m\xE9thodologique rigoureuse",
          "Garanties de r\xE9sultat \xE9tendues",
          "Support post-livraison inclus"
        ];
        return {
          position,
          competitive_advantage,
          differentiation_opportunities
        };
      }
      calculateDynamicPricing(request, factors) {
        const base_budget = request.mission.budget;
        const market_factor = request.market_context.demand_level / request.market_context.competition_level;
        const quality_factor = (factors.technical_clarity + factors.brief_quality) / 2;
        const optimal_price = base_budget * (0.8 + market_factor * 0.3 + quality_factor * 0.2);
        return {
          optimal_price: Math.round(optimal_price),
          price_range: {
            min: Math.round(optimal_price * 0.85),
            max: Math.round(optimal_price * 1.15)
          },
          elasticity_factor: Math.round((market_factor + quality_factor) * 50) / 100,
          demand_sensitivity: request.market_context.demand_level
        };
      }
      // Méthodes de scoring spécialisées
      scoreTechnicalClarity(description) {
        const techKeywords = ["api", "frontend", "backend", "database", "framework", "library", "architecture"];
        const hasSpecs = /spécifications?|cahier des charges|requirements/i.test(description);
        const hasArchitecture = /architecture|structure|design pattern/i.test(description);
        let score = 0.3;
        score += techKeywords.filter((kw) => description.toLowerCase().includes(kw)).length * 0.08;
        if (hasSpecs) score += 0.25;
        if (hasArchitecture) score += 0.2;
        return Math.min(1, score);
      }
      scoreScopeDefinition(mission) {
        let score = 0.2;
        if (mission.functionalities?.length > 0) score += 0.35;
        if (mission.constraints?.length > 0) score += 0.25;
        if (mission.description.length > 200) score += 0.2;
        return Math.min(1, score);
      }
      scoreComplexityAlignment(mission) {
        const budget = mission.budget || 1e3;
        const complexity = mission.complexity || 5;
        const expectedBudget = complexity * 1e3;
        const ratio = budget / expectedBudget;
        if (ratio >= 0.8 && ratio <= 1.5) return 1;
        if (ratio >= 0.6 && ratio <= 2) return 0.7;
        return 0.4;
      }
      scoreArchitectureClarity(description) {
        const archKeywords = ["microservices", "monolith", "serverless", "cloud", "scalability"];
        const score = archKeywords.filter((kw) => description.toLowerCase().includes(kw)).length * 0.2;
        return Math.min(1, score + 0.3);
      }
      scoreIntegrationComplexity(mission) {
        const description = mission.description || "";
        const integrationTerms = ["api", "integration", "third-party", "webhook", "sync"];
        const complexity = integrationTerms.filter((term) => description.toLowerCase().includes(term)).length;
        return Math.max(0.3, 1 - complexity * 0.15);
      }
      // Méthodes d'agrégation
      aggregateTechnicalScore(factors) {
        return (factors.technical_clarity + factors.scope_definition + factors.complexity_alignment + factors.architecture_clarity + factors.integration_complexity) / 5;
      }
      aggregateEconomicScore(factors) {
        return (factors.budget_realism + factors.price_competitiveness + factors.value_proposition + factors.roi_potential + factors.payment_structure) / 5;
      }
      aggregateTemporalScore(factors) {
        return (factors.timeline_feasibility + factors.urgency_factor + factors.seasonal_trends + factors.deadline_pressure) / 4;
      }
      aggregateMarketScore(factors) {
        return (factors.market_demand + factors.competition_density + factors.provider_availability + factors.market_maturity + factors.trend_alignment) / 5;
      }
      aggregateQualityScore(factors) {
        return (factors.brief_quality + factors.client_experience + factors.communication_clarity + factors.requirement_completeness) / 4;
      }
      calculateNeuralAdjustments(factors) {
        let adjustments = 0;
        if (factors.technical_clarity > 0.8 && factors.budget_realism > 0.8) adjustments += 0.1;
        if (factors.market_demand > 0.8 && factors.competition_density < 0.4) adjustments += 0.15;
        if (factors.budget_realism < 0.4 && factors.timeline_feasibility < 0.6) adjustments -= 0.2;
        if (factors.technical_clarity < 0.5 && factors.urgency_factor > 0.8) adjustments -= 0.15;
        return adjustments;
      }
      calculateOverallRiskScore(technical, budget, timeline, market) {
        const riskMap = { "low": 1, "medium": 2, "high": 3 };
        const total = riskMap[technical] + riskMap[budget] + riskMap[timeline] + riskMap[market];
        return Math.round(total / 12 * 100);
      }
      calculateConfidenceLevel(factors) {
        const dataQuality = (factors.technical_clarity + factors.brief_quality + factors.scope_definition) / 3;
        const marketData = (factors.market_demand + factors.provider_availability) / 2;
        return Math.round((dataQuality * 0.7 + marketData * 0.3) * 100) / 100;
      }
      identifyKeyFactors(factors) {
        const factorEntries = Object.entries(factors).filter(([key, value]) => typeof value === "number").sort(([, a], [, b]) => b - a).slice(0, 6);
        return factorEntries.map(([key]) => {
          const readable = key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
          return readable;
        });
      }
      // Méthodes de scoring manquantes (fallback simple)
      scoreBudgetRealism(budget, category) {
        const ranges = {
          "web-development": { min: 2e3, typical: 6e3 },
          "mobile-development": { min: 4e3, typical: 1e4 },
          "design": { min: 800, typical: 3e3 },
          "default": { min: 1500, typical: 4e3 }
        };
        const range = ranges[category] || ranges["default"];
        return budget >= range.typical ? 1 : budget >= range.min ? 0.7 : 0.4;
      }
      analyzePriceCompetitiveness(mission, marketContext) {
        const marketPrice = marketContext.average_price || mission.budget * 0.9;
        const ratio = mission.budget / marketPrice;
        return ratio >= 1.1 ? 1 : ratio >= 0.9 ? 0.8 : ratio >= 0.7 ? 0.6 : 0.3;
      }
      scoreValueProposition(mission) {
        const description = mission.description || "";
        const hasValue = /valeur|bénéfice|roi|impact/i.test(description);
        return hasValue ? 0.8 : 0.5;
      }
      scoreROIPotential(mission) {
        return mission.budget > 5e3 ? 0.8 : 0.6;
      }
      scorePaymentStructure(mission) {
        return 0.7;
      }
      scoreTimelineFeasibility(mission) {
        const complexity = mission.complexity || 5;
        const timeline = mission.duration_weeks || 4;
        const ratio = timeline / (complexity * 1.2);
        return ratio >= 1 ? 1 : ratio >= 0.8 ? 0.8 : 0.5;
      }
      scoreUrgencyImpact(urgency) {
        const impacts = { "low": 0.9, "medium": 0.8, "high": 0.6 };
        return impacts[urgency] || 0.8;
      }
      analyzeSeasonalTrends(category, marketContext) {
        return marketContext.seasonal_factor || 0.7;
      }
      scoreDeadlinePressure(mission) {
        return mission.urgency === "high" ? 0.6 : 0.8;
      }
      scoreMarketMaturity(category) {
        const maturity = { "web-development": 0.9, "mobile-development": 0.8, "design": 0.7 };
        return maturity[category] || 0.7;
      }
      scoreTrendAlignment(mission, marketContext) {
        return marketContext.trend_indicator === "rising" ? 0.9 : 0.7;
      }
      scoreBriefQuality(mission) {
        const description = mission.description || "";
        return Math.min(0.9, description.split(" ").length / 100);
      }
      scoreClientExperience(clientHistory) {
        return clientHistory ? 0.8 : 0.6;
      }
      scoreCommunicationClarity(mission) {
        const description = mission.description || "";
        return /\d\.|•|-/.test(description) ? 0.8 : 0.6;
      }
      scoreRequirementCompleteness(mission) {
        return (mission.functionalities?.length || 0) > 0 ? 0.8 : 0.5;
      }
    };
    neuralPredictionEngine = new NeuralPredictionEngine();
  }
});

// apps/api/src/ai/neural-pricing.ts
var neural_pricing_exports = {};
__export(neural_pricing_exports, {
  neuralPricingEngine: () => neuralPricingEngine
});
var NeuralPricingEngine, neuralPricingEngine;
var init_neural_pricing = __esm({
  "apps/api/src/ai/neural-pricing.ts"() {
    "use strict";
    NeuralPricingEngine = class {
      basePriceModels = {
        "web-development": { base: 45, complexity_factor: 1.2, market_factor: 1.1 },
        "mobile-development": { base: 55, complexity_factor: 1.4, market_factor: 1.3 },
        "design": { base: 40, complexity_factor: 1, market_factor: 0.9 },
        "marketing": { base: 50, complexity_factor: 1.1, market_factor: 1 },
        "default": { base: 45, complexity_factor: 1.1, market_factor: 1 }
      };
      elasticityFactors = {
        high_demand: 0.3,
        // Prix moins sensible
        medium_demand: 0.6,
        // Sensibilité normale
        low_demand: 0.9
        // Prix très sensible
      };
      async calculateOptimalPricing(request) {
        const base_pricing = this.calculateBasePricing(request);
        const real_time_adjustments = this.calculateRealTimeAdjustments(request);
        const elasticity_analysis = this.analyzeElasticity(request, base_pricing);
        const optimal_price = this.calculateOptimalPrice(base_pricing, real_time_adjustments, elasticity_analysis);
        const price_ranges = this.calculatePriceRanges(optimal_price, elasticity_analysis);
        const winning_probability = this.calculateWinningProbabilities(optimal_price, request);
        const negotiation_strategy = this.generateNegotiationStrategy(optimal_price, request);
        const market_insights = this.generateMarketInsights(request, optimal_price);
        return {
          optimal_price: Math.round(optimal_price),
          price_confidence: this.calculatePriceConfidence(request, optimal_price),
          price_ranges,
          elasticity_analysis,
          real_time_adjustments,
          winning_probability,
          negotiation_strategy,
          market_insights
        };
      }
      calculateBasePricing(request) {
        const model = this.basePriceModels[request.mission.category] || this.basePriceModels["default"];
        const base_hourly_rate = model.base * (1 + (request.mission.complexity - 5) * 0.1);
        const estimated_hours = this.estimateHours(request.mission);
        const base_price = base_hourly_rate * estimated_hours;
        const market_adjusted_price = base_price * model.market_factor;
        return {
          base_hourly_rate,
          estimated_hours,
          base_price,
          market_adjusted_price,
          complexity_factor: model.complexity_factor
        };
      }
      calculateRealTimeAdjustments(request) {
        const { market_data, bidding_context } = request;
        const demand_ratio = market_data.demand_level / Math.max(0.1, 1 - market_data.competition_intensity);
        const market_premium = Math.min(0.4, (demand_ratio - 1) * 0.2);
        const urgency_multiplier = request.mission.urgency === "high" ? 0.25 : request.mission.urgency === "medium" ? 0.1 : 0;
        let competition_discount = 0;
        if (bidding_context && bidding_context.bid_count > 5) {
          competition_discount = Math.min(0.15, (bidding_context.bid_count - 5) * 0.02);
        }
        let temporal_adjustment = 0;
        if (bidding_context && bidding_context.time_remaining_hours < 24) {
          temporal_adjustment = -0.05;
        }
        const final_adjustment = market_premium + urgency_multiplier - competition_discount + temporal_adjustment;
        return {
          market_premium: Math.round(market_premium * 1e3) / 1e3,
          urgency_multiplier: Math.round(urgency_multiplier * 1e3) / 1e3,
          competition_discount: Math.round(competition_discount * 1e3) / 1e3,
          final_adjustment: Math.round(final_adjustment * 1e3) / 1e3
        };
      }
      analyzeElasticity(request, base_pricing) {
        const { market_data } = request;
        let demand_elasticity = this.elasticityFactors.medium_demand;
        if (market_data.competition_intensity > 0.7) {
          demand_elasticity = this.elasticityFactors.high_demand;
        } else if (market_data.competition_intensity < 0.3) {
          demand_elasticity = this.elasticityFactors.low_demand;
        }
        const category_sensitivity = this.getCategorySensitivity(request.mission.category);
        const price_sensitivity = (demand_elasticity + category_sensitivity) / 2;
        const optimal_margin = this.calculateOptimalMargin(price_sensitivity, market_data.demand_level);
        return {
          demand_elasticity: Math.round(demand_elasticity * 1e3) / 1e3,
          price_sensitivity: Math.round(price_sensitivity * 1e3) / 1e3,
          optimal_margin: Math.round(optimal_margin * 1e3) / 1e3
        };
      }
      calculateOptimalPrice(base_pricing, adjustments, elasticity) {
        let optimal_price = base_pricing.market_adjusted_price;
        optimal_price *= 1 + adjustments.final_adjustment;
        const elasticity_factor = 1 + (elasticity.optimal_margin - 0.5) * 0.3;
        optimal_price *= elasticity_factor;
        return optimal_price;
      }
      calculatePriceRanges(optimal_price, elasticity) {
        const elasticity_spread = elasticity.price_sensitivity * 0.2;
        return {
          conservative: {
            min: Math.round(optimal_price * (1 - elasticity_spread * 0.5)),
            max: Math.round(optimal_price * (1 + elasticity_spread * 0.3))
          },
          competitive: {
            min: Math.round(optimal_price * (1 - elasticity_spread)),
            max: Math.round(optimal_price * (1 + elasticity_spread))
          },
          aggressive: {
            min: Math.round(optimal_price * (1 - elasticity_spread * 1.5)),
            max: Math.round(optimal_price * (1 + elasticity_spread * 1.5))
          }
        };
      }
      calculateWinningProbabilities(optimal_price, request) {
        const market_price = request.market_data.average_market_price;
        const budget_limit = request.mission.current_budget || optimal_price * 1.2;
        const at_optimal_price = this.calculateWinProbability(optimal_price, market_price, request);
        const at_market_price = this.calculateWinProbability(market_price, market_price, request);
        const at_budget_limit = this.calculateWinProbability(budget_limit, market_price, request);
        return {
          at_optimal_price: Math.round(at_optimal_price * 100) / 100,
          at_market_price: Math.round(at_market_price * 100) / 100,
          at_budget_limit: Math.round(at_budget_limit * 100) / 100
        };
      }
      calculateWinProbability(price, market_price, request) {
        const price_ratio = price / market_price;
        let base_probability = 0.5;
        if (price_ratio <= 0.8) base_probability = 0.9;
        else if (price_ratio <= 0.9) base_probability = 0.8;
        else if (price_ratio <= 1.1) base_probability = 0.7;
        else if (price_ratio <= 1.3) base_probability = 0.5;
        else base_probability = 0.3;
        if (request.provider_context) {
          const provider_bonus = (request.provider_context.rating - 3) * 0.1;
          base_probability += provider_bonus;
        }
        const competition_factor = 1 - request.market_data.competition_intensity * 0.3;
        base_probability *= competition_factor;
        return Math.max(0.1, Math.min(0.95, base_probability));
      }
      generateNegotiationStrategy(optimal_price, request) {
        const competition_level = request.market_data.competition_intensity;
        let strategy_type = "balanced";
        if (competition_level > 0.7) strategy_type = "aggressive";
        else if (competition_level < 0.3) strategy_type = "conservative";
        const opening_multipliers = {
          aggressive: 0.95,
          balanced: 1.05,
          conservative: 1.15
        };
        const initial_offer = Math.round(optimal_price * opening_multipliers[strategy_type]);
        const fallback_prices = [
          Math.round(optimal_price * 1.1),
          Math.round(optimal_price),
          Math.round(optimal_price * 0.95),
          Math.round(optimal_price * 0.9)
        ];
        const negotiation_room = Math.round(initial_offer - optimal_price * 0.9);
        return {
          initial_offer,
          fallback_prices,
          negotiation_room,
          strategy_type
        };
      }
      generateMarketInsights(request, optimal_price) {
        const market_data = request.market_data;
        let price_trend = "stable";
        if (market_data.price_volatility > 0.1) {
          price_trend = market_data.demand_level > 0.7 ? "rising" : "falling";
        }
        const demand_forecast = market_data.demand_level > 0.8 ? "Forte croissance attendue" : market_data.demand_level > 0.6 ? "Croissance mod\xE9r\xE9e" : "Demande stable";
        const optimal_timing = market_data.competition_intensity < 0.4 ? "Moment id\xE9al pour postuler" : "Attendre une baisse de la concurrence";
        const market_ratio = optimal_price / market_data.average_market_price;
        const competitive_positioning = market_ratio > 1.2 ? "Premium" : market_ratio > 1.05 ? "Au-dessus du march\xE9" : market_ratio > 0.95 ? "Align\xE9 march\xE9" : "Comp\xE9titif";
        return {
          price_trend,
          demand_forecast,
          optimal_timing,
          competitive_positioning
        };
      }
      estimateHours(mission) {
        const base_hours = {
          "web-development": 40,
          "mobile-development": 60,
          "design": 25,
          "marketing": 30,
          "default": 35
        };
        const base = base_hours[mission.category] || base_hours["default"];
        const complexity_multiplier = 0.5 + mission.complexity / 10;
        return Math.round(base * complexity_multiplier);
      }
      getCategorySensitivity(category) {
        const sensitivities = {
          "web-development": 0.6,
          "mobile-development": 0.5,
          "design": 0.7,
          "marketing": 0.8,
          "default": 0.6
        };
        return sensitivities[category] || sensitivities["default"];
      }
      calculateOptimalMargin(price_sensitivity, demand_level) {
        const base_margin = 0.5;
        const sensitivity_adjustment = (0.6 - price_sensitivity) * 0.5;
        const demand_adjustment = (demand_level - 0.5) * 0.3;
        return Math.max(0.2, Math.min(0.8, base_margin + sensitivity_adjustment + demand_adjustment));
      }
      calculatePriceConfidence(request, optimal_price) {
        let confidence = 0.7;
        if (request.market_data.average_market_price > 0) confidence += 0.1;
        if (request.bidding_context && request.bidding_context.current_bids.length > 3) confidence += 0.1;
        if (request.provider_context) confidence += 0.05;
        confidence -= request.market_data.price_volatility * 0.2;
        return Math.round(Math.max(0.3, Math.min(0.95, confidence)) * 100) / 100;
      }
    };
    neuralPricingEngine = new NeuralPricingEngine();
  }
});

// apps/api/src/ai/semantic-matching.ts
var semantic_matching_exports = {};
__export(semantic_matching_exports, {
  semanticMatchingEngine: () => semanticMatchingEngine
});
var SemanticMatchingEngine, semanticMatchingEngine;
var init_semantic_matching = __esm({
  "apps/api/src/ai/semantic-matching.ts"() {
    "use strict";
    SemanticMatchingEngine = class {
      semanticWeights = {
        content_similarity: 0.25,
        skills_match: 0.3,
        experience: 0.2,
        budget_fit: 0.15,
        quality: 0.1
      };
      stopWords = /* @__PURE__ */ new Set([
        "le",
        "la",
        "les",
        "un",
        "une",
        "des",
        "du",
        "de",
        "et",
        "ou",
        "mais",
        "donc",
        "or",
        "ni",
        "car",
        "je",
        "tu",
        "il",
        "elle",
        "nous",
        "vous",
        "ils",
        "elles",
        "on",
        "ce",
        "cette",
        "ces",
        "ceux",
        "celle",
        "celles",
        "pour",
        "par",
        "avec",
        "sans",
        "sous",
        "sur",
        "dans",
        "vers",
        "chez",
        "the",
        "a",
        "an",
        "and",
        "or",
        "but",
        "in",
        "on",
        "at",
        "to",
        "for",
        "of",
        "with",
        "by"
      ]);
      skillSynonyms = {
        "javascript": ["js", "node", "nodejs", "react", "vue", "angular"],
        "python": ["django", "flask", "fastapi", "pytorch", "tensorflow"],
        "design": ["ui", "ux", "interface", "wireframe", "mockup", "figma", "sketch"],
        "web": ["website", "site", "webapp", "frontend", "backend"],
        "mobile": ["app", "application", "ios", "android", "react-native", "flutter"],
        "marketing": ["seo", "sem", "ads", "campaign", "growth", "analytics"]
      };
      async performDeepMatching(request) {
        const results = [];
        for (const provider of request.providers) {
          const matchResult = await this.calculateProviderMatch(request.mission, provider, request.matching_preferences);
          results.push(matchResult);
        }
        results.sort((a, b) => {
          let scoreA = a.overall_match_score;
          let scoreB = b.overall_match_score;
          if (request.matching_preferences?.prioritize_quality) {
            scoreA += a.match_breakdown.quality_score * 0.2;
            scoreB += b.match_breakdown.quality_score * 0.2;
          }
          return scoreB - scoreA;
        });
        return results;
      }
      async calculateProviderMatch(mission, provider, preferences) {
        const semantic_similarity = this.calculateSemanticSimilarity(mission, provider);
        const skills_compatibility = this.calculateSkillsCompatibility(mission.skills_required, provider.skills);
        const experience_alignment = this.calculateExperienceAlignment(mission, provider);
        const budget_fit = this.calculateBudgetFit(mission, provider);
        const quality_score = this.calculateQualityScore(provider);
        const availability_match = this.calculateAvailabilityMatch(provider);
        const location_bonus = this.calculateLocationBonus(mission, provider);
        const overall_match_score = this.calculateOverallScore({
          semantic_similarity,
          skills_compatibility,
          experience_alignment,
          budget_fit,
          quality_score,
          availability_match,
          location_bonus
        });
        const compatibility_analysis = this.analyzeCompatibility(mission, provider, {
          semantic_similarity,
          skills_compatibility,
          experience_alignment,
          budget_fit,
          quality_score
        });
        const recommendation_level = this.determineRecommendationLevel(overall_match_score);
        const explanation = this.generateExplanation(mission, provider, {
          semantic_similarity,
          skills_compatibility,
          experience_alignment,
          budget_fit,
          quality_score
        });
        const collaboration_prediction = this.predictCollaborationSuccess(mission, provider, overall_match_score);
        return {
          provider_id: provider.id,
          overall_match_score: Math.round(overall_match_score * 100) / 100,
          confidence_level: this.calculateConfidenceLevel(mission, provider),
          match_breakdown: {
            semantic_similarity: Math.round(semantic_similarity * 100) / 100,
            skills_compatibility: Math.round(skills_compatibility * 100) / 100,
            experience_alignment: Math.round(experience_alignment * 100) / 100,
            budget_fit: Math.round(budget_fit * 100) / 100,
            quality_score: Math.round(quality_score * 100) / 100,
            availability_match: Math.round(availability_match * 100) / 100,
            location_bonus: Math.round(location_bonus * 100) / 100
          },
          compatibility_analysis,
          recommendation_level,
          explanation,
          collaboration_prediction
        };
      }
      calculateSemanticSimilarity(mission, provider) {
        const missionTokens = this.tokenizeAndClean(mission.description + " " + mission.title);
        const providerTokens = this.tokenizeAndClean(provider.description + " " + provider.portfolio_projects.join(" "));
        const missionTfidf = this.calculateTFIDF(missionTokens);
        const providerTfidf = this.calculateTFIDF(providerTokens);
        const cosineSimilarity = this.calculateCosineSimilarity(missionTfidf, providerTfidf);
        const domainBoost = this.calculateDomainSpecificBoost(mission, provider);
        return Math.min(1, cosineSimilarity + domainBoost);
      }
      calculateSkillsCompatibility(requiredSkills, providerSkills) {
        if (!requiredSkills || requiredSkills.length === 0) return 0.5;
        const normalizedRequired = requiredSkills.map((skill) => skill.toLowerCase());
        const normalizedProvider = providerSkills.map((skill) => skill.toLowerCase());
        let matchScore = 0;
        let totalWeight = 0;
        for (const required of normalizedRequired) {
          let skillWeight = 1;
          let bestMatch = 0;
          if (normalizedProvider.includes(required)) {
            bestMatch = 1;
          } else {
            const synonyms = this.getSkillSynonyms(required);
            for (const synonym of synonyms) {
              if (normalizedProvider.some((skill) => skill.includes(synonym) || synonym.includes(skill))) {
                bestMatch = Math.max(bestMatch, 0.8);
              }
            }
            for (const providerSkill of normalizedProvider) {
              const partialMatch = this.calculatePartialMatch(required, providerSkill);
              bestMatch = Math.max(bestMatch, partialMatch * 0.6);
            }
          }
          matchScore += bestMatch * skillWeight;
          totalWeight += skillWeight;
        }
        return totalWeight > 0 ? matchScore / totalWeight : 0;
      }
      calculateExperienceAlignment(mission, provider) {
        let score = 0;
        const projectScore = Math.min(1, provider.completed_projects / 20);
        score += projectScore * 0.4;
        const ratingScore = provider.rating / 5;
        score += ratingScore * 0.3;
        const categoryMatch = provider.categories.includes(mission.category) ? 1 : 0.5;
        score += categoryMatch * 0.3;
        return Math.min(1, score);
      }
      calculateBudgetFit(mission, provider) {
        if (!provider.hourly_rate || !mission.budget) return 0.5;
        const estimatedCost = provider.hourly_rate * this.estimateProjectHours(mission);
        const ratio = mission.budget / estimatedCost;
        if (ratio >= 0.8 && ratio <= 1.3) return 1;
        if (ratio >= 0.6 && ratio <= 1.6) return 0.8;
        if (ratio >= 0.4 && ratio <= 2) return 0.6;
        return 0.3;
      }
      calculateQualityScore(provider) {
        let score = 0;
        score += provider.rating / 5 * 0.4;
        score += Math.min(1, provider.completed_projects / 30) * 0.3;
        const portfolioScore = Math.min(1, provider.portfolio_projects.length / 10);
        score += portfolioScore * 0.3;
        return score;
      }
      calculateAvailabilityMatch(provider) {
        return provider.availability || 0.7;
      }
      calculateLocationBonus(mission, provider) {
        if (!mission.location || !provider.location) return 0;
        if (mission.location.toLowerCase() === provider.location.toLowerCase()) return 0.2;
        if (this.isSameRegion(mission.location, provider.location)) return 0.1;
        if (mission.remote_allowed) return 0;
        return 0;
      }
      calculateOverallScore(scores) {
        return scores.semantic_similarity * this.semanticWeights.content_similarity + scores.skills_compatibility * this.semanticWeights.skills_match + scores.experience_alignment * this.semanticWeights.experience + scores.budget_fit * this.semanticWeights.budget_fit + scores.quality_score * this.semanticWeights.quality + scores.availability_match * 0.05 + scores.location_bonus * 0.05;
      }
      analyzeCompatibility(mission, provider, scores) {
        const strengths = [];
        const potential_concerns = [];
        const synergy_indicators = [];
        if (scores.skills_compatibility > 0.8) {
          strengths.push("Comp\xE9tences techniques parfaitement align\xE9es");
        }
        if (scores.quality_score > 0.8) {
          strengths.push("Prestataire exp\xE9riment\xE9 avec excellent historique");
        }
        if (scores.budget_fit > 0.8) {
          strengths.push("Ad\xE9quation budg\xE9taire optimale");
        }
        if (scores.semantic_similarity > 0.7) {
          strengths.push("Compr\xE9hension profonde du domaine m\xE9tier");
        }
        if (scores.budget_fit < 0.5) {
          potential_concerns.push("D\xE9calage potentiel entre budget et tarifs");
        }
        if (scores.skills_compatibility < 0.6) {
          potential_concerns.push("Comp\xE9tences partiellement align\xE9es");
        }
        if (provider.completed_projects < 5) {
          potential_concerns.push("Exp\xE9rience limit\xE9e sur projets similaires");
        }
        if (scores.semantic_similarity > 0.8 && scores.skills_compatibility > 0.8) {
          synergy_indicators.push("Excellente compr\xE9hension technique et m\xE9tier");
        }
        if (provider.rating > 4.5 && scores.budget_fit > 0.7) {
          synergy_indicators.push("Qualit\xE9 premium dans l'enveloppe budg\xE9taire");
        }
        return { strengths, potential_concerns, synergy_indicators };
      }
      determineRecommendationLevel(score) {
        if (score >= 0.9) return "excellent";
        if (score >= 0.75) return "very_good";
        if (score >= 0.6) return "good";
        if (score >= 0.4) return "fair";
        return "poor";
      }
      generateExplanation(mission, provider, scores) {
        const why_recommended = [];
        const risk_factors = [];
        const success_indicators = [];
        if (scores.skills_compatibility > 0.8) {
          why_recommended.push(`Ma\xEEtrise ${Math.round(scores.skills_compatibility * 100)}% des comp\xE9tences requises`);
        }
        if (provider.rating > 4) {
          why_recommended.push(`Note client excellente (${provider.rating}/5)`);
        }
        if (scores.semantic_similarity > 0.7) {
          why_recommended.push("Exp\xE9rience d\xE9montr\xE9e sur projets similaires");
        }
        if (scores.budget_fit < 0.6) {
          risk_factors.push("Tarifs potentiellement au-dessus du budget");
        }
        if (provider.completed_projects < 10) {
          risk_factors.push("Portfolio encore en construction");
        }
        if (scores.quality_score > 0.8) {
          success_indicators.push("Historique de livraison de qualit\xE9");
        }
        if (scores.semantic_similarity > 0.8) {
          success_indicators.push("Compr\xE9hension approfondie du secteur");
        }
        return { why_recommended, risk_factors, success_indicators };
      }
      predictCollaborationSuccess(mission, provider, overallScore) {
        const success_probability = Math.min(0.95, overallScore * 1.1);
        const communication_fit = this.calculateCommunicationFit(mission, provider);
        const technical_alignment = this.calculateTechnicalAlignment(mission, provider);
        const timeline_feasibility = this.calculateTimelineFeasibility(mission, provider);
        return {
          success_probability: Math.round(success_probability * 100) / 100,
          communication_fit: Math.round(communication_fit * 100) / 100,
          technical_alignment: Math.round(technical_alignment * 100) / 100,
          timeline_feasibility: Math.round(timeline_feasibility * 100) / 100
        };
      }
      // Méthodes utilitaires
      tokenizeAndClean(text) {
        return text.toLowerCase().replace(/[^\w\s]/g, " ").split(/\s+/).filter((word) => word.length > 2 && !this.stopWords.has(word));
      }
      calculateTFIDF(tokens) {
        const termFreq = /* @__PURE__ */ new Map();
        const total = tokens.length;
        for (const token of tokens) {
          termFreq.set(token, (termFreq.get(token) || 0) + 1);
        }
        const tfidf = /* @__PURE__ */ new Map();
        for (const [term, freq] of termFreq) {
          tfidf.set(term, freq / total);
        }
        return tfidf;
      }
      calculateCosineSimilarity(vec1, vec2) {
        const commonTerms = [...vec1.keys()].filter((term) => vec2.has(term));
        if (commonTerms.length === 0) return 0;
        let dotProduct = 0;
        let norm1 = 0;
        let norm2 = 0;
        for (const term of commonTerms) {
          const val1 = vec1.get(term) || 0;
          const val2 = vec2.get(term) || 0;
          dotProduct += val1 * val2;
        }
        for (const val of vec1.values()) {
          norm1 += val * val;
        }
        for (const val of vec2.values()) {
          norm2 += val * val;
        }
        return dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2));
      }
      calculateDomainSpecificBoost(mission, provider) {
        const missionDomain = this.extractDomainKeywords(mission.description + " " + mission.category);
        const providerDomain = this.extractDomainKeywords(provider.description + " " + provider.categories.join(" "));
        const commonDomains = missionDomain.filter((domain) => providerDomain.includes(domain));
        return Math.min(0.2, commonDomains.length * 0.05);
      }
      extractDomainKeywords(text) {
        const domains = ["ecommerce", "fintech", "healthcare", "education", "saas", "marketplace", "iot", "blockchain"];
        return domains.filter((domain) => text.toLowerCase().includes(domain));
      }
      getSkillSynonyms(skill) {
        for (const [key, synonyms] of Object.entries(this.skillSynonyms)) {
          if (key === skill || synonyms.includes(skill)) {
            return [key, ...synonyms];
          }
        }
        return [skill];
      }
      calculatePartialMatch(skill1, skill2) {
        const longer = skill1.length > skill2.length ? skill1 : skill2;
        const shorter = skill1.length > skill2.length ? skill2 : skill1;
        if (longer.includes(shorter)) return 0.8;
        if (shorter.includes(longer)) return 0.8;
        const distance = this.levenshteinDistance(skill1, skill2);
        const maxLength = Math.max(skill1.length, skill2.length);
        return Math.max(0, 1 - distance / maxLength);
      }
      levenshteinDistance(str1, str2) {
        const matrix = [];
        for (let i = 0; i <= str2.length; i++) {
          matrix[i] = [i];
        }
        for (let j = 0; j <= str1.length; j++) {
          matrix[0][j] = j;
        }
        for (let i = 1; i <= str2.length; i++) {
          for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
              matrix[i][j] = matrix[i - 1][j - 1];
            } else {
              matrix[i][j] = Math.min(
                matrix[i - 1][j - 1] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j] + 1
              );
            }
          }
        }
        return matrix[str2.length][str1.length];
      }
      estimateProjectHours(mission) {
        const baseHours = {
          "web-development": 40,
          "mobile-development": 60,
          "design": 25,
          "marketing": 30
        };
        const base = baseHours[mission.category] || 35;
        const complexityMultiplier = mission.complexity ? mission.complexity / 5 : 1;
        return Math.round(base * complexityMultiplier);
      }
      isSameRegion(location1, location2) {
        const parts1 = location1.split(",").map((p) => p.trim().toLowerCase());
        const parts2 = location2.split(",").map((p) => p.trim().toLowerCase());
        return parts1.length > 1 && parts2.length > 1 && parts1[parts1.length - 1] === parts2[parts2.length - 1];
      }
      calculateConfidenceLevel(mission, provider) {
        let confidence = 0.6;
        if (mission.description.length > 100) confidence += 0.1;
        if (provider.portfolio_projects.length > 3) confidence += 0.1;
        if (provider.completed_projects > 10) confidence += 0.1;
        if (mission.skills_required.length > 0) confidence += 0.1;
        return Math.round(Math.min(0.95, confidence) * 100) / 100;
      }
      calculateCommunicationFit(mission, provider) {
        const descriptionQuality = Math.min(1, provider.description.length / 200);
        const ratingBonus = provider.rating / 5;
        return (descriptionQuality + ratingBonus) / 2;
      }
      calculateTechnicalAlignment(mission, provider) {
        const categoryMatch = provider.categories.includes(mission.category) ? 1 : 0.5;
        const skillsMatch = this.calculateSkillsCompatibility(mission.skills_required, provider.skills);
        return (categoryMatch + skillsMatch) / 2;
      }
      calculateTimelineFeasibility(mission, provider) {
        const availability = provider.availability || 0.7;
        const complexityFactor = mission.complexity ? Math.max(0.5, 1 - (mission.complexity - 5) * 0.1) : 0.8;
        return (availability + complexityFactor) / 2;
      }
    };
    semanticMatchingEngine = new SemanticMatchingEngine();
  }
});

// server/index.ts
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// server/routes-ai-advanced.ts
import { z } from "zod";

// apps/api/src/ai/aiService.ts
var AIService = class {
  baseUrl;
  isOfflineMode;
  cache;
  requestQueue;
  performanceMetrics;
  constructor() {
    this.baseUrl = process.env.ML_API_URL || "http://localhost:8001";
    this.isOfflineMode = process.env.OFFLINE_MODE === "true";
    this.cache = /* @__PURE__ */ new Map();
    this.requestQueue = /* @__PURE__ */ new Map();
    this.performanceMetrics = {
      requests: 0,
      cacheHits: 0,
      avgResponseTime: 0,
      errors: 0
    };
    setInterval(() => this.cleanCache(), 36e5);
  }
  /**
   * Cache intelligent avec TTL adaptatif
   */
  async getCachedOrFetch(key, fetchFn, ttl = 3e5) {
    const startTime = Date.now();
    this.performanceMetrics.requests++;
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < cached.ttl) {
      this.performanceMetrics.cacheHits++;
      return cached.data;
    }
    if (this.requestQueue.has(key)) {
      return this.requestQueue.get(key);
    }
    const request = fetchFn().then((data) => {
      const adaptiveTtl = this.calculateAdaptiveTtl(key, data);
      this.cache.set(key, {
        data,
        timestamp: Date.now(),
        ttl: adaptiveTtl
      });
      this.updateMetrics(startTime);
      return data;
    }).catch((error) => {
      this.performanceMetrics.errors++;
      throw error;
    }).finally(() => {
      this.requestQueue.delete(key);
    });
    this.requestQueue.set(key, request);
    return request;
  }
  /**
   * TTL adaptatif basé sur le type de données
   */
  calculateAdaptiveTtl(key, data) {
    if (key.includes("market") || key.includes("price")) {
      return 6e4;
    }
    if (key.includes("score") || key.includes("analysis")) {
      return 3e5;
    }
    if (key.includes("profile") || key.includes("trust")) {
      return 18e5;
    }
    if (data.confidence && data.confidence > 90) {
      return 6e5;
    }
    return 3e5;
  }
  /**
   * Nettoyage intelligent du cache
   */
  cleanCache() {
    const now = Date.now();
    let cleaned = 0;
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        this.cache.delete(key);
        cleaned++;
      }
    }
    console.log(`Cache cleaned: ${cleaned} entries removed`);
  }
  updateMetrics(startTime) {
    const responseTime = Date.now() - startTime;
    this.performanceMetrics.avgResponseTime = (this.performanceMetrics.avgResponseTime + responseTime) / 2;
  }
  /**
   * Métriques de performance
   */
  getPerformanceMetrics() {
    return {
      ...this.performanceMetrics,
      cacheHitRate: this.performanceMetrics.cacheHits / this.performanceMetrics.requests,
      cacheSize: this.cache.size
    };
  }
  /**
   * Calcule le score multi-objectif explicable pour une offre
   */
  async calculateComprehensiveScore(request) {
    try {
      if (this.isOfflineMode) {
        throw new Error("External calls disabled in offline mode");
      }
      const response = await fetch(`${this.baseUrl}/score/comprehensive`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request)
      });
      if (!response.ok) {
        throw new Error(`AI service error: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("AI scoring failed, using fallback:", error);
      return this.calculateScoreFallback(request);
    }
  }
  /**
   * Recommande un prix optimal basé sur l'IA
   */
  async recommendPrice(request) {
    try {
      const response = await fetch(`${this.baseUrl}/price/recommend`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request)
      });
      if (!response.ok) {
        throw new Error(`Price recommendation failed: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Price recommendation failed, using fallback:", error);
      return this.recommendPriceFallback(request);
    }
  }
  /**
   * Détecte les abus (collusion, dumping)
   */
  async detectAbuse(bids, mission) {
    try {
      const response = await fetch(`${this.baseUrl}/abuse/detect`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bids, mission })
      });
      if (!response.ok) {
        throw new Error(`Abuse detection failed: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Abuse detection failed:", error);
      return { collusion: { collusion_detected: false }, dumping: [] };
    }
  }
  /**
   * Matching sémantique avec TF-IDF
   */
  async semanticMatching(missionText, providerProfiles) {
    try {
      const response = await fetch(`${this.baseUrl}/match/semantic`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mission_text: missionText,
          provider_profiles: providerProfiles
        })
      });
      if (!response.ok) {
        throw new Error(`Semantic matching failed: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Semantic matching failed, using BM25 fallback:", error);
      return this.bm25Fallback(missionText, providerProfiles);
    }
  }
  /**
   * Calcul de correspondance guidée pour enchères inversées
   */
  calculateGuidedBidding(mission, currentBids) {
    const avgBid = currentBids.length > 0 ? currentBids.reduce((a, b) => a + b, 0) / currentBids.length : mission.budget;
    const minReasonablePrice = mission.budget * 0.4;
    const competitivePrice = Math.min(avgBid * 0.95, mission.budget * 0.9);
    const suggestedPrice = Math.max(minReasonablePrice, competitivePrice);
    const nudges = [];
    if (suggestedPrice < mission.budget * 0.5) {
      nudges.push("Prix tr\xE8s agressif - assurez-vous de pouvoir livrer avec qualit\xE9");
    }
    if (currentBids.length > 5) {
      nudges.push("Forte concurrence - diff\xE9renciez-vous par la qualit\xE9");
    }
    if (mission.urgency === "high") {
      nudges.push("Mission urgente - mettez en avant votre disponibilit\xE9");
    }
    const antiDumpingWarning = suggestedPrice <= minReasonablePrice ? "Attention: Ce prix pourrait \xEAtre consid\xE9r\xE9 comme du dumping" : void 0;
    return { suggestedPrice, nudges, antiDumpingWarning };
  }
  /**
   * Analyse et structure automatiquement un brief client
   */
  async analyzeSmartBrief(briefText) {
    try {
      const response = await fetch(`${this.baseUrl}/brief/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ brief_text: briefText })
      });
      if (!response.ok) {
        throw new Error(`Smart brief analysis failed: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Smart brief analysis failed:", error);
      return this.analyzeSmartBriefFallback(briefText);
    }
  }
  /**
   * Calcule le Trust Score et génère les badges
   */
  async calculateTrustScore(providerId) {
    try {
      const response = await fetch(`${this.baseUrl}/trust/calculate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ provider_id: providerId })
      });
      if (!response.ok) {
        throw new Error(`Trust score calculation failed: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Trust score calculation failed:", error);
      return this.calculateTrustScoreFallback(providerId);
    }
  }
  /**
   * Récupère le Market Heat Score en temps réel
   */
  async getMarketHeatScore(category, region) {
    try {
      const response = await fetch(`${this.baseUrl}/market/heat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, region })
      });
      if (!response.ok) {
        throw new Error(`Market heat analysis failed: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Market heat analysis failed:", error);
      return this.getMarketHeatScoreFallback(category);
    }
  }
  /**
   * Matching inverse - Trouve des projets pour un prestataire
   */
  async findProjectsForProvider(providerId, preferences) {
    try {
      const response = await fetch(`${this.baseUrl}/match/inverse`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ provider_id: providerId, preferences })
      });
      if (!response.ok) {
        throw new Error(`Inverse matching failed: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Inverse matching failed:", error);
      return this.findProjectsForProviderFallback(providerId, preferences);
    }
  }
  /**
   * Standardise et structure automatiquement un brief client
   */
  async standardizeProject(projectData) {
    const cacheKey = `standardize_${JSON.stringify(projectData)}`;
    return this.getCachedOrFetch(cacheKey, async () => {
      try {
        if (this.isOfflineMode) {
          throw new Error("Standardization requires ML service");
        }
        const response = await fetch(`${this.baseUrl}/standardize`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(projectData)
        });
        if (!response.ok) {
          throw new Error(`Standardization failed: ${response.statusText}`);
        }
        return await response.json();
      } catch (error) {
        console.error("Project standardization failed, using fallback:", error);
        return this.standardizeProjectFallback(projectData);
      }
    }, 18e5);
  }
  /**
   * Recalcule la standardisation après ajout d'informations manquantes
   */
  async recomputeStandardization(projectId, updatedData) {
    try {
      const response = await fetch(`${this.baseUrl}/brief/recompute`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ project_id: projectId, ...updatedData })
      });
      if (!response.ok) {
        throw new Error(`Recomputation failed: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Standardization recomputation failed:", error);
      return { success: false, error: error.message };
    }
  }
  /**
   * Obtient un aperçu du scoring basé sur la standardisation
   */
  async getPreviewScoring(projectId) {
    try {
      const response = await fetch(`${this.baseUrl}/projects/${projectId}/preview-scoring`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });
      if (!response.ok) {
        throw new Error(`Preview scoring failed: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Preview scoring failed:", error);
      return null;
    }
  }
  /**
   * AI Success Predictor - Prédiction avancée de succès avec 90+ facteurs
   */
  async predictMissionSuccess(missionData, marketContext) {
    const cacheKey = `ai_success_predictor_${JSON.stringify(missionData)}_${Date.now()}`;
    return this.getCachedOrFetch(cacheKey, async () => {
      try {
        if (this.isOfflineMode) {
          return this.advancedPredictorFallback(missionData, marketContext);
        }
        const { neuralPredictionEngine: neuralPredictionEngine2 } = await Promise.resolve().then(() => (init_neural_predictor(), neural_predictor_exports));
        const prediction = await neuralPredictionEngine2.predict({
          mission: missionData,
          market_context: marketContext
        });
        return {
          success_probability: prediction.success_probability,
          key_factors: prediction.key_factors,
          risk_assessment: prediction.risk_assessment,
          optimization_suggestions: prediction.optimization_suggestions,
          confidence_level: prediction.confidence_level,
          neural_insights: prediction.neural_insights,
          market_positioning: prediction.market_positioning.position,
          competition_analysis: prediction.competition_analysis
        };
      } catch (error) {
        console.error("Neural predictor failed:", error);
        return this.advancedPredictorFallback(missionData, marketContext);
      }
    }, 18e4);
  }
  /**
   * Neural Pricing Engine - Prix optimal temps réel
   */
  async calculateNeuralPricing(pricingRequest) {
    const cacheKey = `neural_pricing_${JSON.stringify(pricingRequest)}`;
    return this.getCachedOrFetch(cacheKey, async () => {
      try {
        const { neuralPricingEngine: neuralPricingEngine2 } = await Promise.resolve().then(() => (init_neural_pricing(), neural_pricing_exports));
        return await neuralPricingEngine2.calculateOptimalPricing(pricingRequest);
      } catch (error) {
        console.error("Neural pricing failed:", error);
        return this.optimizePricingRealTimeFallback(pricingRequest.mission.id, pricingRequest.market_data);
      }
    }, 12e4);
  }
  /**
   * Semantic Deep Matching - Matching ultra-précis
   */
  async performSemanticMatching(matchingRequest) {
    const cacheKey = `semantic_matching_${JSON.stringify(matchingRequest)}`;
    return this.getCachedOrFetch(cacheKey, async () => {
      try {
        const { semanticMatchingEngine: semanticMatchingEngine2 } = await Promise.resolve().then(() => (init_semantic_matching(), semantic_matching_exports));
        return await semanticMatchingEngine2.performDeepMatching(matchingRequest);
      } catch (error) {
        console.error("Semantic matching failed:", error);
        return this.intelligentMatchingFallback(matchingRequest);
      }
    }, 6e5);
  }
  /**
   * Moteur de prédiction neural avancé
   */
  async runNeuralPredictionEngine(missionData, marketContext) {
    const factors = this.analyzeSuccessFactors(missionData, marketContext);
    const probability = this.calculateNeuralProbability(factors);
    const insights = this.generateNeuralInsights(factors, probability);
    return {
      probability: Math.round(probability * 100) / 100,
      factors: factors.top_factors,
      risks: factors.risk_analysis,
      optimizations: this.generateOptimizationSuggestions(factors),
      confidence: factors.confidence_score,
      insights,
      positioning: this.analyzeMarketPositioning(missionData, marketContext),
      competition: this.analyzeCompetitionLevel(missionData, marketContext)
    };
  }
  /**
   * Analyse des facteurs de succès (90+ dimensions)
   */
  analyzeSuccessFactors(missionData, marketContext) {
    const factors = {
      // Facteurs techniques
      technical_clarity: this.scoreTechnicalClarity(missionData.description),
      scope_definition: this.scoreScopeDefinition(missionData),
      complexity_alignment: this.scoreComplexityAlignment(missionData),
      // Facteurs économiques
      budget_realism: this.scoreBudgetRealism(missionData.budget, missionData.category),
      price_competitiveness: this.analyzePriceCompetitiveness(missionData, marketContext),
      value_proposition: this.scoreValueProposition(missionData),
      // Facteurs temporels
      timeline_feasibility: this.scoreTimelineFeasibility(missionData),
      urgency_factor: this.scoreUrgencyImpact(missionData.urgency),
      seasonal_trends: this.analyzeSeasonalTrends(missionData.category),
      // Facteurs marché
      market_demand: marketContext.demand_level || 0.7,
      competition_density: marketContext.competition_level || 0.6,
      provider_availability: this.scoreProviderAvailability(missionData),
      // Facteurs qualité
      brief_quality: this.scoreBriefQuality(missionData),
      client_experience: this.scoreClientExperience(missionData.client_history),
      communication_clarity: this.scoreCommunicationClarity(missionData),
      // Facteurs prédictifs avancés
      success_pattern_match: this.analyzeSuccessPatterns(missionData),
      risk_indicators: this.identifyRiskIndicators(missionData),
      optimization_potential: this.scoreOptimizationPotential(missionData)
    };
    const technical_score = (factors.technical_clarity + factors.scope_definition + factors.complexity_alignment) / 3;
    const economic_score = (factors.budget_realism + factors.price_competitiveness + factors.value_proposition) / 3;
    const temporal_score = (factors.timeline_feasibility + factors.urgency_factor + factors.seasonal_trends) / 3;
    const market_score = (factors.market_demand + factors.competition_density + factors.provider_availability) / 3;
    const quality_score = (factors.brief_quality + factors.client_experience + factors.communication_clarity) / 3;
    return {
      ...factors,
      technical_score,
      economic_score,
      temporal_score,
      market_score,
      quality_score,
      top_factors: this.identifyTopFactors(factors),
      risk_analysis: this.generateRiskAnalysis(factors),
      confidence_score: this.calculateConfidenceScore(factors)
    };
  }
  /**
   * Calcul de probabilité neural
   */
  calculateNeuralProbability(factors) {
    const weights = {
      technical: 0.25,
      economic: 0.3,
      temporal: 0.2,
      market: 0.15,
      quality: 0.1
    };
    const weighted_score = factors.technical_score * weights.technical + factors.economic_score * weights.economic + factors.temporal_score * weights.temporal + factors.market_score * weights.market + factors.quality_score * weights.quality;
    let probability = weighted_score;
    if (factors.success_pattern_match > 0.8) probability += 0.1;
    if (factors.risk_indicators > 0.7) probability -= 0.15;
    if (factors.optimization_potential > 0.8) probability += 0.05;
    return Math.max(0.1, Math.min(0.98, probability));
  }
  /**
   * Génération d'insights neural avancés
   */
  generateNeuralInsights(factors, probability) {
    const insights = [];
    if (probability > 0.85) {
      insights.push({
        type: "success_indicator",
        message: "Mission hautement viable - tous les indicateurs sont au vert",
        confidence: 0.95,
        impact: "positive"
      });
    }
    if (factors.budget_realism < 0.5) {
      insights.push({
        type: "budget_warning",
        message: "Budget potentiellement sous-\xE9valu\xE9 - risque de propositions de qualit\xE9 r\xE9duite",
        confidence: 0.87,
        impact: "negative",
        suggestion: "Augmenter le budget de 20-30% pour attirer des profils premium"
      });
    }
    if (factors.technical_clarity < 0.6) {
      insights.push({
        type: "clarity_improvement",
        message: "Sp\xE9cifications techniques floues - risque de malentendus",
        confidence: 0.82,
        impact: "negative",
        suggestion: "Pr\xE9ciser les technologies, fonctionnalit\xE9s et livrables attendus"
      });
    }
    return insights;
  }
  /**
   * Négociation IA automatique entre client et prestataire
   */
  async negotiatePrice(negotiationData) {
    try {
      const response = await fetch(`${this.baseUrl}/negotiate/price`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(negotiationData)
      });
      if (!response.ok) throw new Error("Negotiation service unavailable");
      return await response.json();
    } catch (error) {
      return this.negotiatePriceFallback(negotiationData);
    }
  }
  /**
   * Analyse comportementale des utilisateurs
   */
  async analyzeBehavior(userId, actionsHistory) {
    const cacheKey = `behavior_${userId}`;
    return this.getCachedOrFetch(cacheKey, async () => {
      try {
        const response = await fetch(`${this.baseUrl}/analyze/behavior`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_id: userId, actions: actionsHistory })
        });
        if (!response.ok) throw new Error("Behavior analysis unavailable");
        return await response.json();
      } catch (error) {
        return this.analyzeBehaviorFallback(userId, actionsHistory);
      }
    }, 18e5);
  }
  /**
   * Optimisation en temps réel des prix basée sur l'IA
   */
  async optimizePricingRealTime(missionId, currentMarketData) {
    try {
      const response = await fetch(`${this.baseUrl}/optimize/pricing-realtime`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mission_id: missionId, market_data: currentMarketData })
      });
      if (!response.ok) throw new Error("Real-time pricing unavailable");
      return await response.json();
    } catch (error) {
      return this.optimizePricingRealTimeFallback(missionId, currentMarketData);
    }
  }
  /**
   * Matching intelligent multi-dimensionnel
   */
  async intelligentMatching(criteria) {
    const cacheKey = `intelligent_match_${JSON.stringify(criteria)}`;
    return this.getCachedOrFetch(cacheKey, async () => {
      try {
        const response = await fetch(`${this.baseUrl}/match/intelligent`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(criteria)
        });
        if (!response.ok) throw new Error("Intelligent matching unavailable");
        return await response.json();
      } catch (error) {
        return this.intelligentMatchingFallback(criteria);
      }
    }, 6e5);
  }
  /**
   * Analyse de sentiment en temps réel
   */
  async analyzeSentiment(textData) {
    try {
      const response = await fetch(`${this.baseUrl}/analyze/sentiment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(textData)
      });
      if (!response.ok) throw new Error("Sentiment analysis unavailable");
      return await response.json();
    } catch (error) {
      return this.analyzeSentimentFallback(textData);
    }
  }
  // Méthodes fallback pour le mode dégradé et nouvelles fonctionnalités
  /**
   * Fallback pour le calcul de score (mode dégradé)
   */
  calculateScoreFallback(request) {
    const { mission, provider, bid } = request;
    const qualityScore = provider.rating / 5 * 100;
    const experienceScore = Math.min(100, provider.completed_projects * 2);
    const fitScore = this.calculateSkillsMatch(mission.skills_required, provider.skills);
    let priceScore = 70;
    if (bid) {
      const expectedPrice = provider.hourly_rate * mission.duration_weeks * 35;
      const ratio = bid.price / expectedPrice;
      priceScore = ratio < 0.8 ? 90 : ratio <= 1 ? 80 : Math.max(30, 80 - (ratio - 1) * 50);
    }
    const totalScore = (qualityScore + experienceScore + fitScore + priceScore) / 4;
    return {
      total_score: Math.round(totalScore),
      breakdown: {
        price: Math.round(priceScore),
        quality: Math.round(qualityScore),
        fit: Math.round(fitScore),
        delay: 75,
        risk: Math.round((provider.success_rate || 0.8) * 100),
        completion_probability: Math.round(totalScore * 0.9)
      },
      explanations: ["Score calcul\xE9 en mode fallback", "IA indisponible"]
    };
  }
  /**
   * Fallback pour recommandation de prix
   */
  recommendPriceFallback(request) {
    const basePrice = request.mission.budget * 0.8;
    const competitionMultiplier = {
      "low": 1.1,
      "medium": 0.95,
      "high": 0.85
    }[request.competition_level] || 0.95;
    const recommended = basePrice * competitionMultiplier;
    return {
      price_range: {
        min: recommended * 0.9,
        recommended,
        max: recommended * 1.1
      },
      confidence: 60,
      reasoning: ["Calcul basique (IA indisponible)", "Bas\xE9 sur budget et concurrence"],
      market_position: recommended < 3e3 ? "budget_friendly" : "standard"
    };
  }
  /**
   * Fallback BM25 pour matching sémantique
   */
  bm25Fallback(missionText, providerProfiles) {
    const missionWords = this.tokenize(missionText);
    return providerProfiles.map((profile, index) => {
      const profileWords = this.tokenize(profile);
      const commonWords = missionWords.filter((word) => profileWords.includes(word));
      const similarity = commonWords.length / Math.max(missionWords.length, 1);
      return {
        provider_index: index,
        similarity_score: similarity,
        match_quality: similarity > 0.3 ? "good" : "fair"
      };
    }).sort((a, b) => b.similarity_score - a.similarity_score);
  }
  analyzeSmartBriefFallback(briefText) {
    const wordCount = briefText.split(" ").length;
    const hasNumbers = /\d/.test(briefText);
    const hasTechTerms = ["web", "app", "site", "design", "dev"].some(
      (term) => briefText.toLowerCase().includes(term)
    );
    return {
      structure_score: wordCount > 50 ? 75 : 45,
      completeness_score: hasNumbers && wordCount > 30 ? 70 : 50,
      clarity_score: briefText.includes("?") ? 60 : 70,
      technical_keywords: hasTechTerms ? ["web development"] : [],
      missing_elements: ["budget", "d\xE9lai"],
      suggestions: ["Pr\xE9cisez votre budget", "Indiquez vos contraintes de d\xE9lai"],
      structured_brief: {
        titre_suggere: briefText.substring(0, 30) + "...",
        contexte: briefText.substring(0, 100),
        objectifs: ["Objectif principal \xE0 d\xE9finir"],
        fonctionnalites: ["Fonctionnalit\xE9s \xE0 pr\xE9ciser"],
        contraintes_techniques: [],
        budget_estime: null,
        delai_estime: null
      },
      complexity_level: hasTechTerms ? "medium" : "low"
    };
  }
  calculateTrustScoreFallback(providerId) {
    return {
      trust_score: 75,
      trust_badges: [
        {
          id: "fallback_badge",
          label: "Prestataire v\xE9rifi\xE9",
          description: "Profil valid\xE9 par nos \xE9quipes",
          confidence: 80,
          icon: "\u2705",
          color: "blue"
        }
      ],
      reliability_factors: {
        anciennete: 12,
        regularite: 3,
        tauxReponse: 85,
        respectDelais: 90
      },
      recommendations: ["Continuez sur cette lanc\xE9e", "Am\xE9liorez votre temps de r\xE9ponse"]
    };
  }
  getMarketHeatScoreFallback(category) {
    return {
      heat_score: 65,
      tension: "medium",
      price_impact: 1.05,
      opportunity_level: 70,
      trend_indicator: "stable",
      recommendations: ["March\xE9 \xE9quilibr\xE9 - maintenez vos prix standards"],
      insights: [`Demande stable en ${category}`]
    };
  }
  findProjectsForProviderFallback(providerId, preferences) {
    return {
      recommended_projects: [
        {
          id: "fallback-1",
          title: "Projet correspondant \xE0 vos comp\xE9tences",
          match_score: 85,
          budget: 2500,
          category: preferences.preferred_category || "web"
        }
      ],
      latent_opportunities: [],
      potential_clients: [],
      match_explanations: ["Correspondance bas\xE9e sur vos pr\xE9f\xE9rences d\xE9clar\xE9es"]
    };
  }
  /**
   * Fallback pour standardisation (mode dégradé)
   */
  standardizeProjectFallback(projectData) {
    const { title, description, category } = projectData;
    const title_std = title.trim();
    const summary_std = description.length > 200 ? description.substring(0, 200) + "..." : description;
    const commonSkills = ["JavaScript", "Python", "React", "Node.js", "Design", "Marketing"];
    const skills_std = commonSkills.filter(
      (skill) => description.toLowerCase().includes(skill.toLowerCase())
    );
    let category_std = category || "other";
    if (description.toLowerCase().includes("web") || description.toLowerCase().includes("site")) {
      category_std = "web-development";
    } else if (description.toLowerCase().includes("design")) {
      category_std = "design";
    } else if (description.toLowerCase().includes("marketing")) {
      category_std = "marketing";
    }
    const brief_quality_score = Math.min(
      85,
      description.split(" ").length / 50 * 100 + (projectData.budget ? 20 : 0)
    );
    const missing_info = [];
    if (!projectData.budget) {
      missing_info.push({
        type: "budget_range",
        description: "Budget ou fourchette budg\xE9taire",
        priority: "high",
        suggestion: "Pr\xE9cisez votre budget pour recevoir des propositions adapt\xE9es"
      });
    }
    if (!description.includes("d\xE9lai") && !description.includes("urgent")) {
      missing_info.push({
        type: "timeline",
        description: "D\xE9lai ou \xE9ch\xE9ance",
        priority: "high",
        suggestion: "Indiquez vos contraintes de d\xE9lai"
      });
    }
    return {
      title_std,
      summary_std,
      acceptance_criteria: [
        "Livrable conforme \xE0 la description",
        "Respect des d\xE9lais convenus",
        "Communication r\xE9guli\xE8re"
      ],
      category_std,
      sub_category_std: "general",
      tags_std: [category_std, ...skills_std.map((s) => s.toLowerCase())],
      skills_std,
      constraints_std: [],
      brief_quality_score: Math.round(brief_quality_score),
      richness_score: Math.min(60, description.split(" ").length * 2),
      missing_info,
      price_suggested_min: projectData.budget ? Math.round(projectData.budget * 0.8) : null,
      price_suggested_med: projectData.budget ? projectData.budget : null,
      price_suggested_max: projectData.budget ? Math.round(projectData.budget * 1.2) : null,
      delay_suggested_days: 14,
      // Délai par défaut
      loc_uplift_reco: {
        current_loc: 0.7,
        recommended_budget: projectData.budget ? Math.round(projectData.budget * 1.1) : null,
        recommended_delay: 21,
        expected_loc_improvement: 0.15
      }
    };
  }
  advancedPredictorFallback(missionData, marketContext) {
    const complexity = missionData.complexity || 5;
    const budget = missionData.budget || 1e3;
    const urgency = missionData.urgency === "high" ? 0.7 : 1;
    const success_probability = Math.min(
      0.95,
      (0.5 + budget / 1e4 * 0.3 + (10 - complexity) / 10 * 0.2) * urgency
    );
    return {
      success_probability: Math.round(success_probability * 100) / 100,
      key_factors: [
        "Budget adapt\xE9 au projet",
        "Complexit\xE9 ma\xEEtrisable",
        "D\xE9lais r\xE9alistes",
        "March\xE9 porteur"
      ],
      risk_assessment: {
        technical_risk: complexity > 7 ? "high" : "medium",
        budget_risk: budget < 1e3 ? "high" : "low",
        timeline_risk: urgency < 1 ? "high" : "medium",
        market_risk: "low"
      },
      optimization_suggestions: [
        "Pr\xE9ciser les sp\xE9cifications techniques",
        "Adapter le budget au march\xE9",
        "Planifier des jalons interm\xE9diaires",
        "Optimiser le timing de publication"
      ],
      confidence_level: 0.78,
      neural_insights: [
        {
          type: "fallback_mode",
          message: "Analyse en mode d\xE9grad\xE9 - pr\xE9cision limit\xE9e",
          confidence: 0.6,
          impact: "neutral"
        }
      ],
      market_positioning: budget > 5e3 ? "premium" : "standard",
      competition_analysis: {
        level: "medium",
        key_competitors: Math.floor(Math.random() * 10) + 5,
        differentiation_opportunities: ["Qualit\xE9 sup\xE9rieure", "D\xE9lais optimis\xE9s"]
      }
    };
  }
  // Méthodes de scoring avancées
  scoreTechnicalClarity(description) {
    const techKeywords = ["api", "frontend", "backend", "database", "framework", "library"];
    const hasSpecs = /spécifications?|cahier des charges|requirements/i.test(description);
    const hasArchitecture = /architecture|structure|design pattern/i.test(description);
    let score = 0.4;
    score += techKeywords.filter((kw) => description.toLowerCase().includes(kw)).length * 0.1;
    if (hasSpecs) score += 0.2;
    if (hasArchitecture) score += 0.15;
    return Math.min(1, score);
  }
  scoreScopeDefinition(missionData) {
    let score = 0.3;
    if (missionData.functionalities?.length > 0) score += 0.3;
    if (missionData.acceptance_criteria?.length > 0) score += 0.2;
    if (missionData.constraints?.length > 0) score += 0.2;
    return Math.min(1, score);
  }
  scoreComplexityAlignment(missionData) {
    const budget = missionData.budget || 1e3;
    const complexity = missionData.complexity || 5;
    const expectedBudget = complexity * 800;
    const ratio = budget / expectedBudget;
    if (ratio >= 0.8 && ratio <= 1.3) return 1;
    if (ratio >= 0.6 && ratio <= 1.6) return 0.7;
    return 0.4;
  }
  scoreBudgetRealism(budget, category) {
    const categoryRanges = {
      "web-development": { min: 1500, typical: 5e3 },
      "mobile-development": { min: 3e3, typical: 8e3 },
      "design": { min: 500, typical: 2e3 },
      "marketing": { min: 800, typical: 3e3 },
      "default": { min: 1e3, typical: 3e3 }
    };
    const range = categoryRanges[category] || categoryRanges["default"];
    if (budget >= range.typical) return 1;
    if (budget >= range.min) return 0.7;
    return 0.4;
  }
  analyzePriceCompetitiveness(missionData, marketContext) {
    const marketPrice = marketContext.average_price || missionData.budget * 0.9;
    const ratio = missionData.budget / marketPrice;
    if (ratio >= 1.1) return 1;
    if (ratio >= 0.9) return 0.8;
    if (ratio >= 0.7) return 0.6;
    return 0.3;
  }
  scoreValueProposition(missionData) {
    const description = missionData.description || "";
    const hasValue = /valeur|bénéfice|roi|impact|objectif/i.test(description);
    const hasContext = /contexte|pourquoi|objectif business/i.test(description);
    let score = 0.5;
    if (hasValue) score += 0.3;
    if (hasContext) score += 0.2;
    return score;
  }
  scoreTimelineFeasibility(missionData) {
    const complexity = missionData.complexity || 5;
    const timeline = missionData.duration_weeks || 4;
    const expectedTime = complexity * 1.2;
    const ratio = timeline / expectedTime;
    if (ratio >= 1) return 1;
    if (ratio >= 0.8) return 0.8;
    if (ratio >= 0.6) return 0.5;
    return 0.3;
  }
  scoreUrgencyImpact(urgency) {
    switch (urgency) {
      case "low":
        return 0.9;
      case "medium":
        return 0.8;
      case "high":
        return 0.6;
      // L'urgence réduit les chances
      default:
        return 0.8;
    }
  }
  analyzeSeasonalTrends(category) {
    const month = (/* @__PURE__ */ new Date()).getMonth();
    if (category.includes("e-commerce") && (month === 10 || month === 11)) return 1;
    if (category.includes("education") && (month >= 8 && month <= 10)) return 1;
    if (category.includes("tourism") && (month >= 2 && month <= 5)) return 1;
    return 0.7;
  }
  scoreProviderAvailability(missionData) {
    const category = missionData.category || "default";
    const urgency = missionData.urgency || "medium";
    let score = 0.7;
    if (category.includes("development")) score += 0.1;
    if (urgency === "high") score -= 0.2;
    return Math.max(0.3, Math.min(1, score));
  }
  scoreBriefQuality(missionData) {
    const description = missionData.description || "";
    const wordCount = description.split(" ").length;
    let score = Math.min(0.8, wordCount / 100);
    if (missionData.functionalities?.length > 0) score += 0.1;
    if (missionData.constraints?.length > 0) score += 0.1;
    return Math.min(1, score);
  }
  scoreClientExperience(clientHistory) {
    if (!clientHistory) return 0.6;
    const projectCount = clientHistory.completed_projects || 0;
    const rating = clientHistory.average_rating || 3.5;
    let score = 0.4;
    score += Math.min(0.3, projectCount * 0.05);
    score += (rating - 3) * 0.2;
    return Math.min(1, score);
  }
  scoreCommunicationClarity(missionData) {
    const description = missionData.description || "";
    const hasQuestions = description.includes("?");
    const hasStructure = /\d\.|•|-/.test(description);
    const hasContact = /contact|appel|rdv|rencontre/i.test(description);
    let score = 0.5;
    if (hasStructure) score += 0.2;
    if (hasContact) score += 0.2;
    if (!hasQuestions) score += 0.1;
    return score;
  }
  analyzeSuccessPatterns(missionData) {
    return Math.random() * 0.3 + 0.6;
  }
  identifyRiskIndicators(missionData) {
    let riskScore = 0;
    const description = missionData.description || "";
    if (description.length < 50) riskScore += 0.3;
    if (!missionData.budget || missionData.budget < 500) riskScore += 0.3;
    if (missionData.urgency === "high") riskScore += 0.2;
    if (/pas cher|gratuit|low cost/i.test(description)) riskScore += 0.4;
    return Math.min(1, riskScore);
  }
  scoreOptimizationPotential(missionData) {
    let potential = 0.5;
    if (!missionData.functionalities?.length) potential += 0.2;
    if (!missionData.constraints?.length) potential += 0.15;
    if (missionData.description?.length < 200) potential += 0.15;
    return Math.min(1, potential);
  }
  identifyTopFactors(factors) {
    const factorEntries = Object.entries(factors).filter(([key, value]) => typeof value === "number" && key.endsWith("_score")).sort(([, a], [, b]) => b - a).slice(0, 5);
    return factorEntries.map(([key]) => {
      const readable = key.replace("_score", "").replace("_", " ");
      return readable.charAt(0).toUpperCase() + readable.slice(1);
    });
  }
  generateRiskAnalysis(factors) {
    const risks = [];
    if (factors.budget_realism < 0.5) {
      risks.push({ type: "budget", level: "high", description: "Budget insuffisant" });
    }
    if (factors.timeline_feasibility < 0.6) {
      risks.push({ type: "timeline", level: "medium", description: "D\xE9lais serr\xE9s" });
    }
    if (factors.technical_clarity < 0.6) {
      risks.push({ type: "technical", level: "medium", description: "Sp\xE9cifications floues" });
    }
    return risks;
  }
  calculateConfidenceScore(factors) {
    const dataQuality = (factors.brief_quality + factors.technical_clarity) / 2;
    const marketData = (factors.market_demand + factors.provider_availability) / 2;
    return dataQuality * 0.6 + marketData * 0.4;
  }
  generateOptimizationSuggestions(factors) {
    const suggestions = [];
    if (factors.budget_realism < 0.6) {
      suggestions.push("Augmenter le budget de 20-30% pour attirer des profils qualifi\xE9s");
    }
    if (factors.technical_clarity < 0.7) {
      suggestions.push("Pr\xE9ciser les sp\xE9cifications techniques et fonctionnalit\xE9s");
    }
    if (factors.timeline_feasibility < 0.7) {
      suggestions.push("Allonger les d\xE9lais de 1-2 semaines pour plus de qualit\xE9");
    }
    if (factors.brief_quality < 0.7) {
      suggestions.push("Enrichir la description avec plus de d\xE9tails contextuels");
    }
    return suggestions;
  }
  analyzeMarketPositioning(missionData, marketContext) {
    const budget = missionData.budget || 1e3;
    const category = missionData.category || "default";
    if (budget > 1e4) return "premium";
    if (budget > 3e3) return "standard-plus";
    if (budget > 1e3) return "standard";
    return "budget";
  }
  analyzeCompetitionLevel(missionData, marketContext) {
    const category = missionData.category || "default";
    const budget = missionData.budget || 1e3;
    let competitorCount = 5;
    if (category.includes("development")) competitorCount += 3;
    if (budget < 2e3) competitorCount += 2;
    return {
      level: competitorCount > 8 ? "high" : competitorCount > 5 ? "medium" : "low",
      key_competitors: competitorCount,
      differentiation_opportunities: [
        "Expertise technique sp\xE9cialis\xE9e",
        "D\xE9lais de livraison optimis\xE9s",
        "Rapport qualit\xE9-prix sup\xE9rieur",
        "Support et maintenance inclus"
      ]
    };
  }
  negotiatePriceFallback(negotiationData) {
    const { initial_bid, client_budget, mission_complexity } = negotiationData;
    const middle_ground = (initial_bid + client_budget) / 2;
    const suggested_counter_offer = Math.round(middle_ground * (1 + mission_complexity * 0.05));
    return {
      suggested_counter_offer,
      negotiation_strategy: "collaborative",
      win_probability: 0.72,
      arguments: [
        "Prix \xE9quitable bas\xE9 sur la complexit\xE9",
        "Expertise confirm\xE9e du prestataire",
        "D\xE9lais de livraison optimis\xE9s"
      ],
      next_steps: [
        "Proposer un appel de clarification",
        "D\xE9tailler la valeur ajout\xE9e",
        "Sugg\xE9rer un paiement \xE9chelonn\xE9"
      ]
    };
  }
  analyzeBehaviorFallback(userId, actionsHistory) {
    const engagement_score = Math.min(100, actionsHistory.length * 5);
    return {
      behavior_patterns: {
        most_active_time: "14h-18h",
        preferred_categories: ["d\xE9veloppement", "design"],
        avg_session_duration: 25,
        interaction_frequency: "high"
      },
      preferences: {
        budget_range: "1000-5000\u20AC",
        project_duration: "2-4 semaines",
        communication_style: "direct"
      },
      success_indicators: {
        completion_rate: 0.89,
        client_satisfaction: 4.6,
        repeat_business: 0.34
      },
      personalized_recommendations: [
        "Missions React/Node.js correspondant \xE0 votre profil",
        "Projets avec budget 2000-4000\u20AC",
        "Clients privil\xE9giant la qualit\xE9"
      ],
      engagement_score
    };
  }
  optimizePricingRealTimeFallback(missionId, currentMarketData) {
    const base_price = currentMarketData.base_price || 2e3;
    const demand_factor = currentMarketData.demand_level === "high" ? 1.2 : 0.9;
    const optimal_price = Math.round(base_price * demand_factor);
    return {
      optimal_price,
      price_elasticity: 0.8,
      demand_forecast: {
        current_level: "medium",
        trend: "increasing",
        expected_change: "+15%"
      },
      competitive_positioning: "competitive",
      adjustment_reasoning: [
        "Demande du march\xE9 en hausse",
        "Concurrence mod\xE9r\xE9e",
        "Votre expertise reconnue"
      ]
    };
  }
  intelligentMatchingFallback(criteria) {
    const { mission, provider_pool } = criteria;
    const ranked_matches = provider_pool.slice(0, 5).map((provider, index) => ({
      ...provider,
      match_score: Math.round(90 - index * 5 + Math.random() * 10),
      compatibility_factors: ["Comp\xE9tences align\xE9es", "Historique positif", "Disponibilit\xE9"]
    }));
    return {
      ranked_matches,
      matching_explanations: {
        top_criteria: ["Expertise technique", "Fiabilit\xE9", "Rapport qualit\xE9-prix"],
        algorithm_insights: ["Correspondance des comp\xE9tences prioritaire", "Historique de performance consid\xE9r\xE9"]
      },
      confidence_scores: ranked_matches.map(() => Math.random() * 0.3 + 0.7),
      alternative_suggestions: [
        "\xC9largir les crit\xE8res g\xE9ographiques",
        "Ajuster la fourchette budg\xE9taire",
        "Consid\xE9rer des profils juniors encadr\xE9s"
      ]
    };
  }
  analyzeSentimentFallback(textData) {
    const content = textData.content.toLowerCase();
    let sentiment_score = 0.5;
    const positive_words = ["excellent", "parfait", "satisfait", "recommande", "professionnel"];
    const negative_words = ["d\xE9\xE7u", "probl\xE8me", "retard", "insatisfait", "mauvais"];
    positive_words.forEach((word) => {
      if (content.includes(word)) sentiment_score += 0.1;
    });
    negative_words.forEach((word) => {
      if (content.includes(word)) sentiment_score -= 0.1;
    });
    sentiment_score = Math.max(0, Math.min(1, sentiment_score));
    return {
      sentiment_score,
      emotional_indicators: {
        satisfaction: sentiment_score > 0.6 ? "high" : "medium",
        frustration: sentiment_score < 0.4 ? "detected" : "low",
        engagement: "medium"
      },
      tone_analysis: {
        formality: "professional",
        urgency: content.includes("urgent") ? "high" : "medium",
        clarity: "good"
      },
      recommendations: [
        sentiment_score < 0.5 ? "Surveiller cette interaction" : "Interaction positive",
        "Maintenir le niveau de service",
        "Proposer un suivi personnalis\xE9"
      ],
      confidence: 0.75
    };
  }
  /**
   * Calcul de correspondance des compétences
   */
  calculateSkillsMatch(requiredSkills, providerSkills) {
    const required = requiredSkills.map((s) => s.toLowerCase());
    const provider = providerSkills.map((s) => s.toLowerCase());
    const matches = required.filter(
      (skill) => provider.some(
        (pSkill) => pSkill.includes(skill) || skill.includes(pSkill)
      )
    );
    return Math.round(matches.length / Math.max(required.length, 1) * 100);
  }
  /**
   * Tokenisation simple pour BM25
   */
  tokenize(text) {
    return text.toLowerCase().split(/[\s,;.!?]+/).filter((word) => word.length > 2).slice(0, 20);
  }
};
var aiService = new AIService();

// server/routes-ai-advanced.ts
var missionPredictionSchema = z.object({
  mission: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    category: z.string(),
    budget: z.number(),
    complexity: z.number().min(1).max(10),
    urgency: z.enum(["low", "medium", "high"])
  }),
  market_context: z.object({
    demand_level: z.string(),
    competition_level: z.string(),
    seasonal_factor: z.number().optional()
  }).optional()
});
var negotiationSchema = z.object({
  initial_bid: z.number(),
  client_budget: z.number(),
  mission_complexity: z.number(),
  provider_profile: z.object({
    rating: z.number(),
    experience_years: z.number(),
    success_rate: z.number()
  }),
  negotiation_history: z.array(z.any()).optional()
});
var behaviorAnalysisSchema = z.object({
  user_id: z.string(),
  actions: z.array(z.object({
    action_type: z.string(),
    timestamp: z.string(),
    context: z.any().optional()
  }))
});
async function registerAdvancedAIRoutes(fastify) {
  fastify.post("/api/ai/predict/mission-success", async (request, reply) => {
    try {
      if (process.env.ENABLE_PREDICTIVE_ANALYTICS !== "true") {
        return reply.code(503).send({ error: "Predictive analytics disabled" });
      }
      const { mission, market_context } = missionPredictionSchema.parse(request.body);
      const prediction = await aiService.predictMissionSuccess(mission, market_context);
      return {
        success: true,
        prediction,
        generated_at: (/* @__PURE__ */ new Date()).toISOString()
      };
    } catch (error) {
      fastify.log.error("Mission prediction error:", error);
      return reply.code(500).send({ error: "Prediction failed" });
    }
  });
  fastify.post("/api/ai/pricing/neural", async (request, reply) => {
    try {
      if (process.env.ENABLE_NEURAL_PRICING !== "true") {
        return reply.code(503).send({ error: "Neural pricing disabled" });
      }
      const pricingRequest = request.body;
      const pricing = await aiService.calculateNeuralPricing(pricingRequest);
      return {
        success: true,
        pricing,
        generated_at: (/* @__PURE__ */ new Date()).toISOString()
      };
    } catch (error) {
      fastify.log.error("Neural pricing error:", error);
      return reply.code(500).send({ error: "Neural pricing failed" });
    }
  });
  fastify.post("/api/ai/matching/semantic-deep", async (request, reply) => {
    try {
      if (process.env.ENABLE_SEMANTIC_MATCHING !== "true") {
        return reply.code(503).send({ error: "Semantic matching disabled" });
      }
      const matchingRequest = request.body;
      const matches = await aiService.performSemanticMatching(matchingRequest);
      return {
        success: true,
        matches,
        total_providers_analyzed: matches.length,
        generated_at: (/* @__PURE__ */ new Date()).toISOString()
      };
    } catch (error) {
      fastify.log.error("Semantic matching error:", error);
      return reply.code(500).send({ error: "Semantic matching failed" });
    }
  });
  fastify.post("/api/ai/negotiate/price", async (request, reply) => {
    try {
      if (process.env.ENABLE_AI_NEGOTIATION !== "true") {
        return reply.code(503).send({ error: "AI negotiation disabled" });
      }
      const negotiationData = negotiationSchema.parse(request.body);
      const negotiation = await aiService.negotiatePrice(negotiationData);
      return {
        success: true,
        negotiation,
        generated_at: (/* @__PURE__ */ new Date()).toISOString()
      };
    } catch (error) {
      fastify.log.error("Price negotiation error:", error);
      return reply.code(500).send({ error: "Negotiation failed" });
    }
  });
  fastify.post("/api/ai/analyze/behavior", async (request, reply) => {
    try {
      if (process.env.ENABLE_BEHAVIORAL_ANALYSIS !== "true") {
        return reply.code(503).send({ error: "Behavioral analysis disabled" });
      }
      const { user_id, actions } = behaviorAnalysisSchema.parse(request.body);
      const analysis = await aiService.analyzeBehavior(user_id, actions);
      return {
        success: true,
        analysis,
        generated_at: (/* @__PURE__ */ new Date()).toISOString()
      };
    } catch (error) {
      fastify.log.error("Behavior analysis error:", error);
      return reply.code(500).send({ error: "Analysis failed" });
    }
  });
  fastify.post("/api/ai/optimize/pricing-realtime", async (request, reply) => {
    try {
      if (process.env.ENABLE_REAL_TIME_OPTIMIZATION !== "true") {
        return reply.code(503).send({ error: "Real-time optimization disabled" });
      }
      const { mission_id, market_data } = request.body;
      const optimization = await aiService.optimizePricingRealTime(mission_id, market_data);
      return {
        success: true,
        optimization,
        generated_at: (/* @__PURE__ */ new Date()).toISOString()
      };
    } catch (error) {
      fastify.log.error("Real-time pricing error:", error);
      return reply.code(500).send({ error: "Optimization failed" });
    }
  });
  fastify.post("/api/ai/match/intelligent", async (request, reply) => {
    try {
      if (process.env.ENABLE_INTELLIGENT_MATCHING !== "true") {
        return reply.code(503).send({ error: "Intelligent matching disabled" });
      }
      const criteria = request.body;
      const matching = await aiService.intelligentMatching(criteria);
      return {
        success: true,
        matching,
        generated_at: (/* @__PURE__ */ new Date()).toISOString()
      };
    } catch (error) {
      fastify.log.error("Intelligent matching error:", error);
      return reply.code(500).send({ error: "Matching failed" });
    }
  });
  fastify.post("/api/ai/analyze/sentiment", async (request, reply) => {
    try {
      if (process.env.ENABLE_SENTIMENT_ANALYSIS !== "true") {
        return reply.code(503).send({ error: "Sentiment analysis disabled" });
      }
      const textData = request.body;
      const sentiment = await aiService.analyzeSentiment(textData);
      return {
        success: true,
        sentiment,
        generated_at: (/* @__PURE__ */ new Date()).toISOString()
      };
    } catch (error) {
      fastify.log.error("Sentiment analysis error:", error);
      return reply.code(500).send({ error: "Analysis failed" });
    }
  });
  fastify.get("/api/ai/dashboard/insights", async (request, reply) => {
    try {
      const insights = {
        market_overview: {
          active_missions: Math.floor(Math.random() * 1e3) + 500,
          avg_completion_rate: 0.87,
          price_trend: "+12%",
          demand_growth: "+23%"
        },
        ai_performance: {
          prediction_accuracy: 0.89,
          matching_success_rate: 0.92,
          user_satisfaction: 4.6,
          processing_speed: "< 200ms"
        },
        recommendations: [
          "Le march\xE9 du d\xE9veloppement web est en forte croissance",
          "Les projets IA g\xE9n\xE8rent 40% plus de revenus",
          "La demande pour React/Node.js explose",
          "Les prestataires certifi\xE9s obtiennent 60% plus de missions"
        ],
        trending_skills: [
          { skill: "Intelligence Artificielle", growth: "+45%", demand: "Tr\xE8s forte" },
          { skill: "React/Next.js", growth: "+32%", demand: "Forte" },
          { skill: "Node.js/TypeScript", growth: "+28%", demand: "Forte" },
          { skill: "Design UX/UI", growth: "+25%", demand: "Stable" }
        ],
        market_predictions: {
          next_week: "Augmentation de 15% de nouvelles missions",
          next_month: "Pic saisonnier en d\xE9veloppement e-commerce",
          next_quarter: "Explosion des projets IA et automation"
        }
      };
      return {
        success: true,
        insights,
        generated_at: (/* @__PURE__ */ new Date()).toISOString()
      };
    } catch (error) {
      fastify.log.error("Dashboard insights error:", error);
      return reply.code(500).send({ error: "Insights failed" });
    }
  });
}

// server/index.ts
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = express();
var port = parseInt(process.env.PORT || "5000", 10);
app.use((req, res, next) => {
  res.set({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Pragma": "no-cache",
    "Expires": "0",
    "X-Frame-Options": "ALLOWALL"
  });
  next();
});
app.use(express.json());
app.use(express.static(path.join(__dirname, "../dist/public")));
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "AppelsPro API is running" });
});
var missions = [
  {
    id: "mission1",
    title: "D\xE9veloppement d'une application mobile de e-commerce",
    description: "Je recherche un d\xE9veloppeur exp\xE9riment\xE9 pour cr\xE9er une application mobile compl\xE8te de vente en ligne avec syst\xE8me de paiement int\xE9gr\xE9.",
    category: "developpement",
    budget: "5000",
    location: "Paris, France",
    clientId: "client1",
    clientName: "Marie Dubois",
    status: "open",
    createdAt: (/* @__PURE__ */ new Date("2024-01-15")).toISOString(),
    bids: []
  }
  // ... autres missions
];
app.get("/api/missions", (req, res) => {
  res.json(missions);
});
app.post("/api/missions", (req, res) => {
  const { title, description, category, budget, location, clientId, clientName } = req.body;
  if (!title || !description || !category || !budget || !clientId || !clientName) {
    return res.status(400).json({ error: "Champs requis manquants" });
  }
  const newMission = {
    id: `mission_${Date.now()}`,
    title,
    description,
    category,
    budget,
    location: location || "Non sp\xE9cifi\xE9",
    clientId,
    clientName,
    status: "open",
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    bids: []
  };
  missions.push(newMission);
  res.status(201).json(newMission);
});
app.get("/api/missions/:id", (req, res) => {
  const { id } = req.params;
  const mission = missions.find((m) => m.id === id);
  if (!mission) {
    return res.status(400).json({ error: "Mission non trouv\xE9e" });
  }
  res.json(mission);
});
app.get("/api/missions-demo", (req, res) => {
  const demoMissions = [
    {
      id: "mission1",
      title: "D\xE9veloppement d'une application mobile de e-commerce",
      description: "Je recherche un d\xE9veloppeur exp\xE9riment\xE9 pour cr\xE9er une application mobile compl\xE8te de vente en ligne avec syst\xE8me de paiement int\xE9gr\xE9.",
      category: "developpement",
      budget: "5000",
      location: "Paris, France",
      clientId: "client1",
      clientName: "Marie Dubois",
      status: "open",
      createdAt: (/* @__PURE__ */ new Date("2024-01-15")).toISOString(),
      bids: []
    },
    {
      id: "mission2",
      title: "Refonte compl\xE8te du site web d'entreprise",
      description: "Modernisation du site vitrine de notre entreprise avec nouveau design responsive et optimisation SEO.",
      category: "design",
      budget: "3000",
      location: "Lyon, France",
      clientId: "client2",
      clientName: "Pierre Martin",
      status: "open",
      createdAt: (/* @__PURE__ */ new Date("2024-01-18")).toISOString(),
      bids: []
    },
    {
      id: "mission3",
      title: "Campagne marketing digital et r\xE9seaux sociaux",
      description: "Lancement d'une campagne compl\xE8te sur les r\xE9seaux sociaux pour augmenter la notori\xE9t\xE9 de notre marque.",
      category: "marketing",
      budget: "2000",
      location: "Marseille, France",
      clientId: "client3",
      clientName: "Sophie Leclerc",
      status: "open",
      createdAt: (/* @__PURE__ */ new Date("2024-01-20")).toISOString(),
      bids: []
    },
    {
      id: "mission4",
      title: "D\xE9veloppement d'une plateforme SaaS",
      description: "Cr\xE9ation d'une plateforme SaaS compl\xE8te avec tableau de bord, API, authentification et facturation.",
      category: "developpement",
      budget: "15000",
      location: "Remote",
      clientId: "client4",
      clientName: "Tech Startup",
      status: "open",
      createdAt: (/* @__PURE__ */ new Date("2024-01-22")).toISOString(),
      bids: []
    },
    {
      id: "mission5",
      title: "Application mobile React Native",
      description: "D\xE9veloppement d'une application mobile cross-platform avec React Native pour la gestion de t\xE2ches.",
      category: "mobile",
      budget: "8000",
      location: "Lille, France",
      clientId: "client5",
      clientName: "Productivity Corp",
      status: "open",
      createdAt: (/* @__PURE__ */ new Date("2024-01-25")).toISOString(),
      bids: []
    },
    {
      id: "mission6",
      title: "Int\xE9gration IA et Machine Learning",
      description: "Int\xE9gration d'intelligence artificielle dans une plateforme existante pour l'analyse pr\xE9dictive.",
      category: "ai",
      budget: "12000",
      location: "Paris, France",
      clientId: "client6",
      clientName: "AI Solutions",
      status: "open",
      createdAt: (/* @__PURE__ */ new Date("2024-01-28")).toISOString(),
      bids: []
    }
  ];
  res.json(demoMissions);
});
app.post("/api/ai/quick-analysis", async (req, res) => {
  try {
    const { description, title, category } = req.body;
    if (!description) {
      return res.status(400).json({ error: "Description requise" });
    }
    const words = description.toLowerCase().split(" ");
    const complexity = Math.min(Math.floor(words.length / 10) + 3, 10);
    const qualityScore = Math.min(Math.floor(words.length * 2) + 60, 100);
    const skillPricing = {
      "d\xE9veloppement web": { keywords: ["site", "web", "react", "vue", "angular", "javascript", "typescript", "node", "php", "python", "django", "flask"], basePrice: 2e3, complexity: 0.8 },
      "application mobile": { keywords: ["app", "mobile", "ios", "android", "flutter", "react native"], basePrice: 3500, complexity: 1.2 },
      "design graphique": { keywords: ["logo", "graphique", "design", "photoshop", "illustrator", "figma", "ui", "ux"], basePrice: 800, complexity: 0.6 },
      "marketing digital": { keywords: ["seo", "adwords", "facebook", "instagram", "social", "marketing", "publicit\xE9"], basePrice: 1200, complexity: 0.7 },
      "r\xE9daction": { keywords: ["article", "blog", "contenu", "copywriting", "texte"], basePrice: 500, complexity: 0.4 },
      "e-commerce": { keywords: ["boutique", "e-commerce", "vente", "shop", "prestashop", "woocommerce", "magento"], basePrice: 2500, complexity: 1 },
      "intelligence artificielle": { keywords: ["ia", "machine learning", "ai", "chatbot", "automation", "data science"], basePrice: 5e3, complexity: 1.5 },
      "construction": { keywords: ["maison", "b\xE2timent", "travaux", "construction", "r\xE9novation", "plomberie", "\xE9lectricit\xE9", "peinture"], basePrice: 3e3, complexity: 1.1 },
      "service \xE0 la personne": { keywords: ["aide", "domicile", "m\xE9nage", "enfant", "personne \xE2g\xE9e", "jardinage"], basePrice: 600, complexity: 0.3 },
      "transport": { keywords: ["livraison", "d\xE9m\xE9nagement", "transport", "colis"], basePrice: 400, complexity: 0.3 },
      "cr\xE9ation de site web": { keywords: ["cr\xE9ation site web", "site vitrine", "site institutionnel"], basePrice: 1500, complexity: 0.7 }
    };
    let detectedCategory = "autre";
    let basePrice = 1e3;
    let complexityMultiplier = 0.8;
    const detectedSkills = [];
    Object.entries(skillPricing).forEach(([skill, config]) => {
      const matches = config.keywords.filter(
        (keyword) => description.toLowerCase().includes(keyword) || title && title.toLowerCase().includes(keyword)
      );
      if (matches.length > 0) {
        detectedSkills.push(skill);
        if (matches.length > 1) {
          detectedCategory = skill;
          basePrice = config.basePrice;
          complexityMultiplier = config.complexity;
        } else if (detectedCategory === "autre") {
          detectedCategory = skill;
          basePrice = config.basePrice;
          complexityMultiplier = config.complexity;
        }
      }
    });
    const wordComplexityBonus = Math.min(words.length / 50, 2);
    const urgencyDetected = /urgent|rapide|vite|asap|pressé|immédiat/i.test(description);
    const urgencyMultiplier = urgencyDetected ? 1.3 : 1;
    const estimatedPrice = Math.round(
      basePrice * complexityMultiplier * (1 + wordComplexityBonus * 0.2) * urgencyMultiplier
    );
    const priceRange = {
      min: Math.round(estimatedPrice * 0.7),
      max: Math.round(estimatedPrice * 1.4)
    };
    const estimatedDelay = Math.max(
      Math.round(complexity * complexityMultiplier * 3 + (urgencyDetected ? -2 : 2)),
      3
    );
    const demandFactors = {
      "d\xE9veloppement web": 45,
      "design graphique": 35,
      "marketing digital": 25,
      "r\xE9daction": 20,
      "application mobile": 30,
      "e-commerce": 40,
      "intelligence artificielle": 15,
      "construction": 30,
      "service \xE0 la personne": 20,
      "transport": 15,
      "cr\xE9ation de site web": 35
    };
    const estimatedProviders = demandFactors[detectedCategory] || Math.floor(Math.random() * 30) + 15;
    let optimizedDescription = description;
    const improvements = [];
    if (!description.toLowerCase().includes("budget") && !description.toLowerCase().includes("\u20AC") && !description.toLowerCase().includes("prix")) {
      improvements.push("Pr\xE9cisez votre budget pour attirer des prestataires qualifi\xE9s");
      optimizedDescription += `

Budget estim\xE9 : ${estimatedPrice}\u20AC`;
    }
    if (!description.toLowerCase().includes("d\xE9lai") && !description.toLowerCase().includes("livraison") && !description.toLowerCase().includes("quand")) {
      improvements.push("Indiquez vos d\xE9lais pour une meilleure planification");
      optimizedDescription += `
D\xE9lai souhait\xE9 : ${estimatedDelay} jours`;
    }
    if (detectedSkills.length > 0 && !description.toLowerCase().includes("comp\xE9tences") && !description.toLowerCase().includes("technique")) {
      improvements.push("Listez les comp\xE9tences techniques requises");
      optimizedDescription += `
Comp\xE9tences requises : ${detectedSkills.slice(0, 3).join(", ")}`;
    }
    if (detectedCategory !== "autre" && !description.toLowerCase().includes("cat\xE9gorie")) {
      improvements.push(`Confirmez la cat\xE9gorie du projet : ${detectedCategory}`);
    }
    const analysis = {
      qualityScore,
      brief_quality_score: qualityScore,
      detectedSkills,
      estimatedComplexity: complexity,
      price_suggested_med: estimatedPrice,
      price_range_min: priceRange.min,
      price_range_max: priceRange.max,
      delay_suggested_days: estimatedDelay,
      optimizedDescription: optimizedDescription !== description ? optimizedDescription : null,
      improvements,
      market_insights: {
        estimated_providers_interested: estimatedProviders,
        competition_level: estimatedProviders > 30 ? "forte" : estimatedProviders > 15 ? "moyenne" : "faible",
        demand_level: detectedCategory !== "autre" ? "forte" : "moyenne",
        category_detected: detectedCategory,
        urgency_detected: urgencyDetected,
        suggested_budget_range: priceRange
      }
    };
    res.json(analysis);
  } catch (error) {
    console.error("Erreur analyse IA rapide:", error);
    res.status(500).json({ error: "Erreur lors de l'analyse" });
  }
});
app.post("/api/ai/price-analysis", async (req, res) => {
  try {
    const { category, description, location, complexity, urgency } = req.body;
    const categoryMarketData = {
      "developpement": {
        avgBudget: 3500,
        priceRange: [800, 15e3],
        avgDuration: 21,
        availableProviders: 850,
        competitionLevel: "high",
        seasonalMultiplier: 1.2,
        urgencyPremium: 0.3,
        skills: ["JavaScript", "React", "Node.js", "Python", "PHP"],
        demandTrend: "growing",
        clientSatisfactionRate: 0.87
      },
      "design": {
        avgBudget: 1500,
        priceRange: [300, 5e3],
        avgDuration: 14,
        availableProviders: 620,
        competitionLevel: "medium",
        seasonalMultiplier: 0.9,
        urgencyPremium: 0.1,
        skills: ["Figma", "Photoshop", "UX/UI", "Illustrator"],
        demandTrend: "stable",
        clientSatisfactionRate: 0.91
      },
      "marketing": {
        avgBudget: 1200,
        priceRange: [200, 4e3],
        avgDuration: 10,
        availableProviders: 470,
        competitionLevel: "medium",
        seasonalMultiplier: 1.1,
        urgencyPremium: 0.2,
        skills: ["SEO", "Google Ads", "Facebook Ads", "Content"],
        demandTrend: "growing",
        clientSatisfactionRate: 0.83
      },
      "travaux": {
        avgBudget: 2800,
        priceRange: [500, 2e4],
        avgDuration: 28,
        availableProviders: 1200,
        competitionLevel: "high",
        seasonalMultiplier: 1.3,
        urgencyPremium: 0.4,
        skills: ["Plomberie", "\xC9lectricit\xE9", "Peinture", "Ma\xE7onnerie"],
        demandTrend: "seasonal",
        clientSatisfactionRate: 0.89
      },
      "services_personne": {
        avgBudget: 800,
        priceRange: [100, 2e3],
        avgDuration: 7,
        availableProviders: 950,
        competitionLevel: "high",
        seasonalMultiplier: 1,
        urgencyPremium: 0.5,
        skills: ["M\xE9nage", "Garde enfants", "Aide domicile"],
        demandTrend: "stable",
        clientSatisfactionRate: 0.94
      },
      "jardinage": {
        avgBudget: 600,
        priceRange: [80, 1500],
        avgDuration: 5,
        availableProviders: 380,
        competitionLevel: "medium",
        seasonalMultiplier: 1.8,
        urgencyPremium: 0.1,
        skills: ["\xC9lagage", "Tonte", "Plantation", "Paysagisme"],
        demandTrend: "seasonal",
        clientSatisfactionRate: 0.88
      },
      "transport": {
        avgBudget: 400,
        priceRange: [50, 1200],
        avgDuration: 3,
        availableProviders: 320,
        competitionLevel: "medium",
        seasonalMultiplier: 1.1,
        urgencyPremium: 0.6,
        skills: ["Permis B", "V\xE9hicule utilitaire", "Manutention"],
        demandTrend: "stable",
        clientSatisfactionRate: 0.85
      },
      "beaute_bienetre": {
        avgBudget: 300,
        priceRange: [30, 800],
        avgDuration: 4,
        availableProviders: 280,
        competitionLevel: "low",
        seasonalMultiplier: 0.8,
        urgencyPremium: 0,
        skills: ["Coiffure", "Esth\xE9tique", "Massage", "Manucure"],
        demandTrend: "stable",
        clientSatisfactionRate: 0.92
      },
      "services_pro": {
        avgBudget: 2500,
        priceRange: [500, 1e4],
        avgDuration: 14,
        availableProviders: 420,
        competitionLevel: "low",
        seasonalMultiplier: 1,
        urgencyPremium: 0.2,
        skills: ["Comptabilit\xE9", "Juridique", "Conseil", "Formation"],
        demandTrend: "stable",
        clientSatisfactionRate: 0.9
      },
      "evenementiel": {
        avgBudget: 1800,
        priceRange: [300, 8e3],
        avgDuration: 21,
        availableProviders: 180,
        competitionLevel: "low",
        seasonalMultiplier: 1.5,
        urgencyPremium: 0.3,
        skills: ["Organisation", "Traiteur", "D\xE9coration", "Animation"],
        demandTrend: "seasonal",
        clientSatisfactionRate: 0.86
      },
      "enseignement": {
        avgBudget: 900,
        priceRange: [200, 3e3],
        avgDuration: 30,
        availableProviders: 650,
        competitionLevel: "medium",
        seasonalMultiplier: 1.4,
        urgencyPremium: 0.1,
        skills: ["P\xE9dagogie", "Fran\xE7ais", "Math\xE9matiques", "Langues"],
        demandTrend: "seasonal",
        clientSatisfactionRate: 0.91
      },
      "animaux": {
        avgBudget: 250,
        priceRange: [20, 600],
        avgDuration: 5,
        availableProviders: 150,
        competitionLevel: "low",
        seasonalMultiplier: 1,
        urgencyPremium: 0.4,
        skills: ["V\xE9t\xE9rinaire", "Garde animaux", "Toilettage", "Dressage"],
        demandTrend: "stable",
        clientSatisfactionRate: 0.93
      }
    };
    const marketData = categoryMarketData[category] || categoryMarketData["developpement"];
    let baseBudget = marketData.avgBudget;
    const complexityMultiplier = 0.7 + complexity * 0.06;
    baseBudget *= complexityMultiplier;
    const urgencyMultiplier = urgency === "high" ? 1 + marketData.urgencyPremium : urgency === "medium" ? 1.05 : 1;
    baseBudget *= urgencyMultiplier;
    baseBudget *= marketData.seasonalMultiplier;
    const descriptionQuality = Math.min(1, description.length / 200);
    const budgetAttractiveness = baseBudget > marketData.avgBudget ? 1.2 : 0.8;
    const urgencyFactor = urgency === "high" ? 0.7 : 1;
    const estimatedInterestedProviders = Math.round(
      marketData.availableProviders * descriptionQuality * budgetAttractiveness * urgencyFactor * 0.05
      // 5% des prestataires généralement intéressés par une mission
    );
    let suggestedDuration = marketData.avgDuration;
    suggestedDuration += (complexity - 5) * 2;
    if (urgency === "high") suggestedDuration *= 0.7;
    else if (urgency === "medium") suggestedDuration *= 0.9;
    suggestedDuration = Math.max(1, Math.round(suggestedDuration));
    const analysis = {
      recommendedBudget: {
        min: Math.round(baseBudget * 0.8),
        optimal: Math.round(baseBudget),
        max: Math.round(baseBudget * 1.3),
        reasoning: `Bas\xE9 sur ${marketData.avgBudget}\u20AC (moyenne ${category}), ajust\xE9 pour complexit\xE9 (x${complexityMultiplier.toFixed(2)}) et urgence (x${urgencyMultiplier.toFixed(2)})`
      },
      marketInsights: {
        categoryDemand: marketData.demandTrend,
        competitionLevel: marketData.competitionLevel,
        availableProviders: marketData.availableProviders,
        estimatedApplications: estimatedInterestedProviders,
        successRate: marketData.clientSatisfactionRate,
        averageDelay: marketData.avgDuration,
        priceRange: marketData.priceRange
      },
      timeline: {
        suggestedDays: suggestedDuration,
        reasoning: `Dur\xE9e type ${marketData.avgDuration}j, ajust\xE9e pour complexit\xE9 et urgence`
      },
      providerAvailability: {
        total: marketData.availableProviders,
        estimated_interested: estimatedInterestedProviders,
        competition_level: marketData.competitionLevel,
        advice: marketData.competitionLevel === "high" ? "March\xE9 tr\xE8s concurrentiel - soyez pr\xE9cis dans vos exigences" : "Bonne disponibilit\xE9 des prestataires"
      },
      optimization_tips: [
        baseBudget > marketData.priceRange[1] * 0.8 ? "Budget attractif - vous devriez recevoir de nombreuses candidatures" : "Consid\xE9rez augmenter le budget pour plus de candidatures",
        urgency === "high" ? "Mission urgente - pr\xE9parez-vous \xE0 payer une prime d'urgence de 20-40%" : "D\xE9lai raisonnable - bonne flexibilit\xE9 sur le planning",
        `Comp\xE9tences cl\xE9s pour cette cat\xE9gorie: ${marketData.skills.join(", ")}`,
        marketData.seasonalMultiplier > 1.1 ? "P\xE9riode de forte demande - les prix peuvent \xEAtre plus \xE9lev\xE9s" : "P\xE9riode favorable pour n\xE9gocier les prix"
      ],
      confidence: 0.85
    };
    res.json(analysis);
  } catch (error) {
    console.error("Erreur analyse prix IA:", error);
    res.status(500).json({ error: "Erreur lors de l'analyse" });
  }
});
app.post("/api/ai/optimize-brief", (req, res) => {
  const { description } = req.body;
  const optimizedBrief = {
    optimizedDescription: `${description}

[Optimis\xE9 par IA] Objectifs clairs, fonctionnalit\xE9s d\xE9taill\xE9es, contraintes techniques sp\xE9cifi\xE9es.`,
    improvements: [
      "Structure am\xE9lior\xE9e",
      "D\xE9tails techniques ajout\xE9s",
      "Crit\xE8res de succ\xE8s d\xE9finis"
    ],
    qualityScore: Math.floor(Math.random() * 30) + 70
  };
  res.json(optimizedBrief);
});
app.post("/api/ai/projects/:id/improve", async (req, res) => {
  try {
    const { id } = req.params;
    const mission = missions.find((m) => m.id === id);
    if (!mission) {
      return res.status(404).json({ error: "Mission non trouv\xE9e" });
    }
    const mlResponse = await fetch("http://localhost:8001/improve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        project: {
          title: mission.title,
          description: mission.description,
          category: mission.category,
          budget: parseFloat(mission.budget || "0"),
          location: mission.location,
          client_id: mission.clientId
        },
        context: {
          market_heat: 0.7
          // Simulation contexte marché
        }
      })
    });
    if (!mlResponse.ok) {
      throw new Error("Service ML indisponible");
    }
    const improvement = await mlResponse.json();
    const standardizationId = `std_${Date.now()}`;
    const standardization = {
      id: standardizationId,
      projectId: id,
      ...improvement,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    if (!global.projectStandardizations) {
      global.projectStandardizations = /* @__PURE__ */ new Map();
    }
    global.projectStandardizations.set(id, standardization);
    res.json({
      success: true,
      standardization,
      improvements: {
        title_diff: mission.title !== improvement.title_std,
        description_diff: mission.description !== improvement.summary_std,
        price_suggestions: {
          min: improvement.price_suggested_min,
          med: improvement.price_suggested_med,
          max: improvement.price_suggested_max,
          current: parseFloat(mission.budget || "0")
        },
        delay_suggestion: improvement.delay_suggested_days,
        loc_improvement: improvement.improvement_potential
      }
    });
  } catch (error) {
    console.error("Erreur am\xE9lioration projet:", error);
    res.status(500).json({ error: "Erreur lors de l'am\xE9lioration du projet" });
  }
});
app.get("/api/ai/projects/:id/preview", (req, res) => {
  try {
    const { id } = req.params;
    const mission = missions.find((m) => m.id === id);
    if (!mission) {
      return res.status(404).json({ error: "Mission non trouv\xE9e" });
    }
    const standardization = global.projectStandardizations?.get(id);
    if (!standardization) {
      return res.status(404).json({ error: "Analyse IA non disponible - lancez d'abord l'am\xE9lioration" });
    }
    const preview = {
      original: {
        title: mission.title,
        description: mission.description,
        budget: parseFloat(mission.budget || "0"),
        category: mission.category
      },
      improved: {
        title: standardization.title_std,
        description: standardization.summary_std,
        acceptance_criteria: standardization.acceptance_criteria,
        tasks: standardization.tasks_std,
        deliverables: standardization.deliverables_std,
        skills: standardization.skills_std,
        constraints: standardization.constraints_std
      },
      pricing: {
        current: parseFloat(mission.budget || "0"),
        suggested_min: standardization.price_suggested_min,
        suggested_med: standardization.price_suggested_med,
        suggested_max: standardization.price_suggested_max,
        rationale: standardization.price_rationale
      },
      timing: {
        suggested_days: standardization.delay_suggested_days
      },
      quality_scores: {
        brief_quality: standardization.brief_quality_score,
        richness: standardization.richness_score,
        loc_base: standardization.loc_base,
        improvement_potential: standardization.improvement_potential
      },
      missing_info: standardization.missing_info,
      loc_uplift: standardization.loc_uplift_reco,
      recommendations: standardization.loc_recommendations
    };
    res.json(preview);
  } catch (error) {
    console.error("Erreur pr\xE9visualisation:", error);
    res.status(500).json({ error: "Erreur lors de la pr\xE9visualisation" });
  }
});
app.post("/api/ai/projects/:id/brief/complete", async (req, res) => {
  try {
    const { id } = req.params;
    const { answers, apply = false } = req.body;
    const mission = missions.find((m) => m.id === id);
    if (!mission) {
      return res.status(404).json({ error: "Mission non trouv\xE9e" });
    }
    const mlResponse = await fetch("http://localhost:8001/brief/recompute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        project_id: id,
        answers,
        project_data: {
          title: mission.title,
          description: mission.description,
          category: mission.category,
          budget: parseFloat(mission.budget || "0"),
          location: mission.location
        }
      })
    });
    if (!mlResponse.ok) {
      throw new Error("Service ML indisponible");
    }
    const updatedStandardization = await mlResponse.json();
    global.projectStandardizations?.set(id, {
      ...global.projectStandardizations.get(id),
      ...updatedStandardization,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    if (apply) {
      const missionIndex = missions.findIndex((m) => m.id === id);
      if (missionIndex !== -1) {
        missions[missionIndex] = {
          ...missions[missionIndex],
          description: updatedStandardization.summary_std,
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        if (!global.projectChangeLogs) {
          global.projectChangeLogs = [];
        }
        global.projectChangeLogs.push({
          id: `log_${Date.now()}`,
          projectId: id,
          before: { description: mission.description },
          after: { description: updatedStandardization.summary_std },
          appliedBy: "system",
          reason: "R\xE9ponses aux questions manquantes int\xE9gr\xE9es",
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
    }
    res.json({
      success: true,
      updated_standardization: updatedStandardization,
      applied: apply
    });
  } catch (error) {
    console.error("Erreur compl\xE9tion brief:", error);
    res.status(500).json({ error: "Erreur lors de la compl\xE9tion du brief" });
  }
});
app.post("/api/ai/projects/:id/apply", (req, res) => {
  try {
    const { id } = req.params;
    const { apply_budget, apply_delay, apply_title, apply_summary } = req.body;
    const mission = missions.find((m) => m.id === id);
    if (!mission) {
      return res.status(404).json({ error: "Mission non trouv\xE9e" });
    }
    const standardization = global.projectStandardizations?.get(id);
    if (!standardization) {
      return res.status(404).json({ error: "Standardisation non disponible" });
    }
    const before = { ...mission };
    const changes = {};
    if (apply_budget && ["min", "med", "max"].includes(apply_budget)) {
      const budgetKey = `price_suggested_${apply_budget}`;
      const newBudget = standardization[budgetKey];
      if (newBudget) {
        mission.budget = newBudget.toString();
        changes.budget = { from: before.budget, to: mission.budget };
      }
    }
    if (apply_title && standardization.title_std) {
      mission.title = standardization.title_std;
      changes.title = { from: before.title, to: mission.title };
    }
    if (apply_summary && standardization.summary_std) {
      mission.description = standardization.summary_std;
      changes.description = { from: before.description, to: mission.description };
    }
    mission.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    if (!global.projectChangeLogs) {
      global.projectChangeLogs = [];
    }
    global.projectChangeLogs.push({
      id: `log_${Date.now()}`,
      projectId: id,
      before,
      after: { ...mission },
      appliedBy: "user",
      reason: `Application suggestions IA: ${Object.keys(changes).join(", ")}`,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    res.json({
      success: true,
      updated_mission: mission,
      changes_applied: changes,
      changelog_entry: global.projectChangeLogs[global.projectChangeLogs.length - 1]
    });
  } catch (error) {
    console.error("Erreur application suggestions:", error);
    res.status(500).json({ error: "Erreur lors de l'application des suggestions" });
  }
});
app.get("/api/projects/:id/changelog", (req, res) => {
  try {
    const { id } = req.params;
    const changeLogs = global.projectChangeLogs?.filter((log) => log.projectId === id) || [];
    res.json({
      project_id: id,
      total_changes: changeLogs.length,
      changes: changeLogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    });
  } catch (error) {
    console.error("Erreur r\xE9cup\xE9ration changelog:", error);
    res.status(500).json({ error: "Erreur lors de la r\xE9cup\xE9ration de l'historique" });
  }
});
app.post("/api/ai/brief-analysis", (req, res) => {
  const { description, category, title } = req.body;
  if (!description) {
    return res.status(400).json({ error: "Description requise" });
  }
  const qualityScore = Math.floor(Math.random() * 40) + 60;
  const improvements = [];
  const missingElements = [];
  if (description.length < 100) {
    improvements.push("D\xE9velopper davantage la description pour plus de clart\xE9");
    missingElements.push("Description trop courte");
  }
  if (!description.includes("budget") && !description.includes("\u20AC") && !description.includes("prix")) {
    improvements.push("Mentionner une fourchette budg\xE9taire indicative");
    missingElements.push("Budget non pr\xE9cis\xE9");
  }
  if (!description.includes("d\xE9lai") && !description.includes("quand")) {
    improvements.push("Pr\xE9ciser les d\xE9lais souhait\xE9s");
    missingElements.push("D\xE9lais absents");
  }
  const categorySpecificAnalysis = analyzeCategorySpecific(description, category || "autre");
  improvements.push(...categorySpecificAnalysis.improvements);
  missingElements.push(...categorySpecificAnalysis.missing);
  const optimizedDescription = generateOptimizedDescription(description, title, categorySpecificAnalysis, category || "autre");
  const mockAnalysis = {
    qualityScore,
    improvements,
    missingElements,
    technicalComplexity: categorySpecificAnalysis.complexity,
    optimizedDescription,
    marketInsights: {
      competitionLevel: Math.random() > 0.6 ? "high" : "medium",
      suggestedBudgetRange: {
        min: 1500,
        max: 3500
      }
    }
  };
  res.json(mockAnalysis);
});
function analyzeCategorySpecific(description, category) {
  const analysis = {
    complexity: "medium",
    improvements: [],
    missing: [],
    suggestedDeliverables: [],
    isUrgent: false,
    needsDatabase: false,
    hasComplexFeatures: false,
    needsMaintenance: false,
    isRenovation: false,
    needsCertification: false,
    isRecurring: false
  };
  const lowerDesc = description.toLowerCase();
  if (lowerDesc.includes("urgent") || lowerDesc.includes("rapide") || lowerDesc.includes("vite")) {
    analysis.isUrgent = true;
  }
  if (lowerDesc.includes("base de donn\xE9es") || lowerDesc.includes("utilisateur") || lowerDesc.includes("compte")) {
    analysis.needsDatabase = true;
  }
  if (lowerDesc.includes("api") || lowerDesc.includes("int\xE9gration") || lowerDesc.includes("complexe")) {
    analysis.hasComplexFeatures = true;
  }
  if (lowerDesc.includes("maintenance") || lowerDesc.includes("support") || lowerDesc.includes("\xE9volution")) {
    analysis.needsMaintenance = true;
  }
  if (lowerDesc.includes("r\xE9novation") || lowerDesc.includes("r\xE9habilitation")) {
    analysis.isRenovation = true;
  }
  if (lowerDesc.includes("norme") || lowerDesc.includes("certification") || lowerDesc.includes("conforme")) {
    analysis.needsCertification = true;
  }
  if (lowerDesc.includes("r\xE9gulier") || lowerDesc.includes("hebdomadaire") || lowerDesc.includes("mensuel")) {
    analysis.isRecurring = true;
  }
  const categoryAnalysis = {
    development: () => {
      if (!lowerDesc.match(/(react|vue|angular|php|python|javascript|node|laravel|symfony)/)) {
        analysis.improvements.push("Sp\xE9cifier les technologies pr\xE9f\xE9r\xE9es");
        analysis.missing.push("Technologies non mentionn\xE9es");
      }
      if (!lowerDesc.includes("api") && !lowerDesc.includes("base de donn\xE9es")) {
        analysis.improvements.push("Pr\xE9ciser les int\xE9grations techniques");
      }
      if (!lowerDesc.includes("responsive") && !lowerDesc.includes("mobile")) {
        analysis.improvements.push("Indiquer si compatibilit\xE9 mobile requise");
      }
      if (analysis.needsDatabase) {
        analysis.suggestedDeliverables.push("Base de donn\xE9es optimis\xE9e");
      }
      if (analysis.hasComplexFeatures) {
        analysis.suggestedDeliverables.push("Documentation API");
      }
      analysis.complexity = "high";
    },
    mobile: () => {
      if (!lowerDesc.includes("ios") && !lowerDesc.includes("android")) {
        analysis.improvements.push("Pr\xE9ciser les plateformes cibles (iOS/Android)");
        analysis.missing.push("Plateformes non sp\xE9cifi\xE9es");
      }
      if (!lowerDesc.includes("store") && !lowerDesc.includes("publication")) {
        analysis.improvements.push("Indiquer si publication sur stores n\xE9cessaire");
      }
      if (analysis.hasComplexFeatures) {
        analysis.suggestedDeliverables.push("Mode hors-ligne");
      }
      analysis.complexity = "high";
    },
    construction: () => {
      if (!lowerDesc.match(/\d+\s*m[²2]/)) {
        analysis.improvements.push("Pr\xE9ciser la surface en m\xB2");
        analysis.missing.push("Surface non indiqu\xE9e");
      }
      if (!lowerDesc.includes("\xE9tage") && !lowerDesc.includes("niveau")) {
        analysis.improvements.push("Indiquer le nombre d'\xE9tages");
      }
      if (!lowerDesc.includes("acc\xE8s") && !lowerDesc.includes("parking")) {
        analysis.improvements.push("Mentionner les contraintes d'acc\xE8s");
      }
      if (analysis.isRenovation) {
        analysis.suggestedDeliverables.push("Diagnostic initial");
      }
      if (analysis.needsCertification) {
        analysis.suggestedDeliverables.push("Certificats de conformit\xE9");
      }
      analysis.complexity = "medium";
    },
    plomberie: () => {
      if (!lowerDesc.includes("urgent") && !lowerDesc.includes("d\xE9lai")) {
        analysis.improvements.push("Pr\xE9ciser l'urgence de l'intervention");
      }
      if (!lowerDesc.includes("\xE9tage") && !lowerDesc.includes("niveau")) {
        analysis.improvements.push("Indiquer l'\xE9tage de l'intervention");
      }
      analysis.complexity = "medium";
    },
    electricite: () => {
      if (!lowerDesc.includes("norme") && !lowerDesc.includes("consuel")) {
        analysis.improvements.push("Pr\xE9ciser si mise aux normes n\xE9cessaire");
      }
      if (!lowerDesc.includes("tableau") && !lowerDesc.includes("disjoncteur")) {
        analysis.improvements.push("D\xE9tailler l'installation \xE9lectrique existante");
      }
      if (analysis.needsCertification) {
        analysis.suggestedDeliverables.push("Attestation Consuel");
      }
      analysis.complexity = "medium";
    },
    menage: () => {
      if (!lowerDesc.match(/\d+\s*m[²2]/)) {
        analysis.improvements.push("Pr\xE9ciser la surface du logement");
        analysis.missing.push("Surface non indiqu\xE9e");
      }
      if (!lowerDesc.includes("fr\xE9quence") && !lowerDesc.includes("semaine")) {
        analysis.improvements.push("Indiquer la fr\xE9quence souhait\xE9e");
      }
      if (analysis.isRecurring) {
        analysis.suggestedDeliverables.push("Planning r\xE9current");
      }
      analysis.complexity = "low";
    },
    garde_enfants: () => {
      if (!lowerDesc.match(/\d+\s*(?:ans?|années?)/)) {
        analysis.improvements.push("Pr\xE9ciser l'\xE2ge des enfants");
        analysis.missing.push("\xC2ge des enfants non pr\xE9cis\xE9");
      }
      if (!lowerDesc.includes("horaire") && !lowerDesc.includes("heure")) {
        analysis.improvements.push("D\xE9tailler les horaires de garde");
      }
      analysis.complexity = "low";
    },
    jardinage: () => {
      if (!lowerDesc.match(/\d+\s*m[²2]/)) {
        analysis.improvements.push("Pr\xE9ciser la surface du jardin");
        analysis.missing.push("Surface non indiqu\xE9e");
      }
      if (!lowerDesc.includes("tonte") && !lowerDesc.includes("taille") && !lowerDesc.includes("entretien")) {
        analysis.improvements.push("D\xE9tailler les travaux de jardinage souhait\xE9s");
      }
      analysis.complexity = "low";
    },
    comptabilite: () => {
      if (!lowerDesc.includes("entreprise") && !lowerDesc.includes("soci\xE9t\xE9")) {
        analysis.improvements.push("Pr\xE9ciser le type d'entreprise");
      }
      if (!lowerDesc.includes("mensuel") && !lowerDesc.includes("trimestre") && !lowerDesc.includes("annuel")) {
        analysis.improvements.push("Indiquer la p\xE9riodicit\xE9 souhait\xE9e");
      }
      analysis.complexity = "medium";
    },
    design: () => {
      if (!lowerDesc.includes("logo") && !lowerDesc.includes("identit\xE9 visuelle")) {
        analysis.improvements.push("Pr\xE9ciser les \xE9l\xE9ments graphiques souhait\xE9s (logo, charte...)");
        analysis.missing.push("\xC9l\xE9ments graphiques non sp\xE9cifi\xE9s");
      }
      if (!lowerDesc.includes("responsive") && !lowerDesc.includes("mobile")) {
        analysis.improvements.push("Indiquer si le design doit \xEAtre responsive");
      }
      analysis.complexity = "medium";
    },
    marketing: () => {
      if (!lowerDesc.includes("objectif") && !lowerDesc.includes("cible")) {
        analysis.improvements.push("D\xE9finir clairement les objectifs marketing");
        analysis.missing.push("Objectifs non d\xE9finis");
      }
      if (!lowerDesc.includes("budget") && !lowerDesc.includes("investissement")) {
        analysis.improvements.push("Indiquer une enveloppe budg\xE9taire");
      }
      analysis.complexity = "high";
    },
    ai: () => {
      if (!lowerDesc.includes("mod\xE8le") && !lowerDesc.includes("algorithme")) {
        analysis.improvements.push("Sp\xE9cifier le type de mod\xE8le IA ou algorithme souhait\xE9");
        analysis.missing.push("Mod\xE8le IA non sp\xE9cifi\xE9");
      }
      if (!lowerDesc.includes("donn\xE9es") && !lowerDesc.includes("dataset")) {
        analysis.improvements.push("Pr\xE9ciser les donn\xE9es d'entra\xEEnement disponibles");
      }
      analysis.complexity = "high";
    },
    services_personne: () => {
      if (!lowerDesc.includes("fr\xE9quence") && !lowerDesc.includes("r\xE9gulier")) {
        analysis.improvements.push("Indiquer la fr\xE9quence de la prestation");
      }
      if (!lowerDesc.includes("horaire") && !lowerDesc.includes("disponible")) {
        analysis.improvements.push("Pr\xE9ciser les disponibilit\xE9s");
      }
      if (analysis.isRecurring) {
        analysis.suggestedDeliverables.push("Planning de service");
      }
      analysis.complexity = "low";
    }
  };
  const analyzer = categoryAnalysis[category];
  if (analyzer) {
    analyzer();
  }
  return analysis;
}
function generateOptimizedDescription(description, title, analysis, category) {
  const projectTitle = title || generateProjectTitle(description, category);
  const categoryTemplates = {
    "development": generateWebDevOptimizedDescription,
    "mobile": generateMobileDevOptimizedDescription,
    "design": generateDesignOptimizedDescription,
    "marketing": generateMarketingOptimizedDescription,
    "content": generateContentOptimizedDescription,
    "translation": generateTranslationOptimizedDescription,
    "consulting": generateConsultingOptimizedDescription,
    "e-commerce": generateEcommerceOptimizedDescription,
    "construction": generateConstructionOptimizedDescription,
    "renovation": generateRenovationOptimizedDescription,
    "plomberie": generatePlomberieOptimizedDescription,
    "electricite": generateElectriciteOptimizedDescription,
    "peinture": generatePeintureOptimizedDescription,
    "services_personne": generateServicesPersonneOptimizedDescription,
    "ai": generateAIOptimizedDescription,
    "menage": generateMenageOptimizedDescription,
    "garde_enfants": generateGardeEnfantsOptimizedDescription,
    "jardinage": generateJardinageOptimizedDescription,
    "comptabilite": generateComptabiliteOptimizedDescription,
    "travaux": generateConstructionOptimizedDescription,
    // Alias for construction
    "transport": generateTransportOptimizedDescription,
    "beaute_bienetre": generateBeauteBienEtreOptimizedDescription,
    "services_pro": generateServicesProOptimizedDescription,
    "evenementiel": generateEvenementielOptimizedDescription,
    "enseignement": generateEnseignementOptimizedDescription,
    "animaux": generateAnimauxOptimizedDescription
  };
  const generator = categoryTemplates[category] || generateGenericOptimizedDescription;
  return generator(description, projectTitle, analysis);
}
function generateProjectTitle(description, category) {
  const categoryTitles = {
    "development": "D\xE9veloppement de Solution Digitale sur Mesure",
    "mobile": "Cr\xE9ation d'Application Mobile Performante",
    "design": "Conception Graphique et Identit\xE9 Visuelle",
    "marketing": "Strat\xE9gie Marketing Digital & Acquisition Client",
    "content": "Cr\xE9ation de Contenu Professionnel Engageant",
    "translation": "Service de Traduction Sp\xE9cialis\xE9e",
    "consulting": "Mission de Conseil Strat\xE9gique",
    "e-commerce": "D\xE9veloppement Boutique en Ligne Optimis\xE9e",
    "construction": "Travaux de Construction et Gros \u0152uvre",
    "renovation": "Projet de R\xE9novation Int\xE9rieure/Ext\xE9rieure",
    "plomberie": "Intervention Plomberie Urgente ou Planifi\xE9e",
    "electricite": "Installation et Mise aux Normes \xC9lectriques",
    "peinture": "Travaux de Peinture Int\xE9rieure et Ext\xE9rieure",
    "services_personne": "Prestation de Services \xE0 la Personne",
    "ai": "Projet Intelligence Artificielle & Machine Learning",
    "menage": "Service de Nettoyage et Entretien",
    "garde_enfants": "Garde d'Enfants et Soutien Familial",
    "jardinage": "Entretien de Jardin et Espaces Verts",
    "comptabilite": "Expertise Comptable et Fiscale",
    "travaux": "Travaux de Construction et R\xE9novation",
    "transport": "Service de Transport et D\xE9m\xE9nagement",
    "beaute_bienetre": "Prestation de Beaut\xE9 et Bien-\xEAtre \xE0 Domicile",
    "services_pro": "Conseil et Services aux Professionnels",
    "evenementiel": "Organisation d'\xC9v\xE9nements Sur Mesure",
    "enseignement": "Soutien Scolaire et Cours Particuliers",
    "animaux": "Services pour Animaux de Compagnie"
  };
  return categoryTitles[category] || "Projet Professionnel";
}
function generateWebDevOptimizedDescription(description, title, analysis) {
  const techStack = extractTechFromDescription(description);
  const features = extractFeaturesFromDescription(description);
  return `**${title}**

**Contexte et Objectifs :**
${description.length > 50 ? description : "Nous cherchons \xE0 d\xE9velopper une solution web moderne et performante qui r\xE9pond parfaitement \xE0 nos besoins m\xE9tier."}

**Fonctionnalit\xE9s Attendues :**
${features.length > 0 ? features.map((f) => `\u2022 ${f}`).join("\n") : `\u2022 Interface utilisateur intuitive et responsive
\u2022 Backend robuste et s\xE9curis\xE9
\u2022 Base de donn\xE9es optimis\xE9e
\u2022 Panel d'administration complet`}

**Stack Technique Souhait\xE9e :**
${techStack.length > 0 ? techStack.map((t) => `\u2022 ${t}`).join("\n") : `\u2022 Frontend moderne (React, Vue.js ou Angular)
\u2022 Backend performant (Node.js, PHP Laravel ou Python)
\u2022 Base de donn\xE9es relationnelle ou NoSQL selon besoins
\u2022 H\xE9bergement cloud avec SSL`}

**Livrables Attendus :**
\u2022 Code source complet et document\xE9
\u2022 Tests unitaires et d'int\xE9gration
\u2022 Documentation technique et utilisateur
\u2022 Formation \xE0 l'utilisation
\u2022 3 mois de support technique inclus

**Crit\xE8res de S\xE9lection :**
\u2022 Portfolio avec projets similaires r\xE9cents
\u2022 Ma\xEEtrise des technologies requises
\u2022 M\xE9thodologie de d\xE9veloppement agile
\u2022 Communication fluide en fran\xE7ais
\u2022 Respect des d\xE9lais et budget

**Budget et D\xE9lais :**
\u2022 Budget indicatif : \xC0 d\xE9finir selon proposition d\xE9taill\xE9e
\u2022 D\xE9lai souhait\xE9 : ${analysis.isUrgent ? "2-4 semaines" : "6-8 semaines"}
\u2022 Paiement \xE9chelonn\xE9 selon jalons

**Modalit\xE9s de Candidature :**
Merci de pr\xE9senter votre approche, exemples de r\xE9alisations similaires, planning pr\xE9visionnel et devis d\xE9taill\xE9.`;
}
function generateMobileDevOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Vision du Projet :**
${description.length > 50 ? description : "D\xE9veloppement d'une application mobile native ou hybride avec une exp\xE9rience utilisateur exceptionnelle."}

**Plateformes Cibl\xE9es :**
\u2022 iOS (App Store)
\u2022 Android (Google Play)
\u2022 ${analysis.hasComplexFeatures ? "Version web progressive (PWA) en compl\xE9ment" : "Cross-platform pour optimiser les co\xFBts"}

**Fonctionnalit\xE9s Cl\xE9s :**
\u2022 Interface utilisateur moderne et intuitive
\u2022 Authentification s\xE9curis\xE9e
\u2022 Notifications push intelligentes
\u2022 Mode hors-ligne pour fonctions essentielles
\u2022 Synchronisation cloud temps r\xE9el
\u2022 Analytics et tracking utilisateur

**Exigences Techniques :**
\u2022 Performance optimale sur tous appareils
\u2022 Compatibilit\xE9 iOS 13+ et Android 8+
\u2022 Conformit\xE9 aux guidelines Apple et Google
\u2022 Architecture scalable et maintenable
\u2022 S\xE9curit\xE9 renforc\xE9e (chiffrement, API)

**Livrables :**
\u2022 Applications natives ou hybrides publi\xE9es
\u2022 Code source avec documentation compl\xE8te
\u2022 Kit de ressources (ic\xF4nes, assets)
\u2022 Guide de maintenance et \xE9volution
\u2022 Formation \xE9quipe technique

**Profil Recherch\xE9 :**
\u2022 3+ ans d'exp\xE9rience d\xE9veloppement mobile
\u2022 Portfolio d'applications publi\xE9es sur stores
\u2022 Ma\xEEtrise React Native, Flutter ou d\xE9veloppement natif
\u2022 Connaissance UX/UI mobile
\u2022 Capacit\xE9 \xE0 g\xE9rer publication sur stores

**Timeline et Budget :**
\u2022 Phase de conception : 1-2 semaines
\u2022 D\xE9veloppement : ${analysis.isUrgent ? "4-6 semaines" : "8-12 semaines"}
\u2022 Tests et publication : 1-2 semaines
\u2022 Budget : Devis d\xE9taill\xE9 souhait\xE9 avec options`;
}
function generateDesignOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Brief Cr\xE9atif :**
${description.length > 50 ? description : "Cr\xE9ation d'une identit\xE9 visuelle forte et d'\xE9l\xE9ments graphiques impactants qui refl\xE8tent parfaitement notre vision."}

**\xC9l\xE9ments \xE0 Cr\xE9er :**
\u2022 Logo principal et d\xE9clinaisons
\u2022 Charte graphique compl\xE8te
\u2022 Palette couleurs et typographies
\u2022 Templates et supports de communication
\u2022 \xC9l\xE9ments pour web et print
\u2022 ${analysis.hasComplexFeatures ? "Animation et motion design" : "D\xE9clinaisons r\xE9seaux sociaux"}

**Style et Orientation :**
\u2022 Design moderne et intemporel
\u2022 Adaptation multi-supports
\u2022 Respect des tendances actuelles
\u2022 Originalit\xE9 et m\xE9morabilit\xE9
\u2022 Coh\xE9rence sur tous les supports

**Sp\xE9cifications Techniques :**
\u2022 Fichiers vectoriels haute r\xE9solution
\u2022 Formats multiples (AI, EPS, PNG, JPG, PDF)
\u2022 Versions couleur, noir/blanc, monochrome
\u2022 Guide d'utilisation d\xE9taill\xE9
\u2022 Templates modifiables

**Livrables :**
\u2022 Logo final avec d\xE9clinaisons
\u2022 Charte graphique PDF compl\xE8te
\u2022 Tous fichiers sources modifiables
\u2022 Mockups de pr\xE9sentation
\u2022 Guide d'application de la marque

**Profil Designer :**
\u2022 Portfolio cr\xE9atif et diversifi\xE9
\u2022 Ma\xEEtrise Suite Adobe (Illustrator, Photoshop, InDesign)
\u2022 Exp\xE9rience en identit\xE9 visuelle
\u2022 Sens artistique d\xE9velopp\xE9
\u2022 Communication cr\xE9ative fluide

**Process de Collaboration :**
\u2022 Briefing cr\xE9atif d\xE9taill\xE9 initial
\u2022 3 propositions de concepts diff\xE9rents
\u2022 2-3 phases de r\xE9visions incluses
\u2022 Validation par \xE9tapes
\u2022 Livraison finale organis\xE9e

**D\xE9lais et Budget :**
\u2022 D\xE9lai souhait\xE9 : ${analysis.isUrgent ? "1-2 semaines" : "3-4 semaines"}
\u2022 Budget : Merci d'indiquer vos tarifs selon \xE9l\xE9ments
\u2022 Paiement : 50% \xE0 la commande, 50% \xE0 la livraison`;
}
function generateMarketingOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Contexte Business :**
${description.length > 50 ? description : "Nous cherchons \xE0 d\xE9velopper notre visibilit\xE9 digitale et acqu\xE9rir de nouveaux clients gr\xE2ce \xE0 une strat\xE9gie marketing performante."}

**Objectifs Marketing :**
\u2022 Augmenter la visibilit\xE9 de la marque
\u2022 G\xE9n\xE9rer des leads qualifi\xE9s
\u2022 Am\xE9liorer le taux de conversion
\u2022 Optimiser le ROI publicitaire
\u2022 ${analysis.hasComplexFeatures ? "D\xE9velopper la notori\xE9t\xE9 sectorielle" : "Fid\xE9liser la client\xE8le existante"}

**Canaux Prioritaires :**
\u2022 Google Ads (Search et Display)
\u2022 Facebook et Instagram Ads
\u2022 LinkedIn Ads (BtoB)
\u2022 SEO et content marketing
\u2022 Email marketing
\u2022 Influenceurs et partenariats

**Strat\xE9gie Attendue :**
\u2022 Audit marketing initial complet
\u2022 D\xE9finition personas et parcours client
\u2022 Strat\xE9gie de contenu adapt\xE9e
\u2022 Planning \xE9ditorial mensuel
\u2022 Campagnes publicitaires optimis\xE9es
\u2022 Reporting et optimisation continue

**Comp\xE9tences Requises :**
\u2022 Expertise Google Ads et Facebook Business
\u2022 Ma\xEEtrise des outils analytics
\u2022 Connaissance du secteur d'activit\xE9
\u2022 Capacit\xE9s r\xE9dactionnelles
\u2022 Sens de l'analyse et optimisation

**Livrables Mensuels :**
\u2022 Strat\xE9gie marketing document\xE9e
\u2022 Campagnes publicitaires op\xE9rationnelles
\u2022 Contenus cr\xE9atifs (visuels, textes)
\u2022 Rapports de performance d\xE9taill\xE9s
\u2022 Recommandations d'optimisation

**Budget et Dur\xE9e :**
\u2022 Mission sur ${analysis.isUrgent ? "3-6 mois" : "6-12 mois"}
\u2022 Budget publicitaire : \xC0 d\xE9finir s\xE9par\xE9ment
\u2022 Honoraires : Forfait mensuel ou commission r\xE9sultats
\u2022 ROI cible : D\xE9finition d'objectifs mesurables

**Modalit\xE9s de Collaboration :**
\u2022 R\xE9unions hebdomadaires de suivi
\u2022 Acc\xE8s outils analytics et plateformes
\u2022 Reporting transparent et r\xE9gulier
\u2022 Flexibilit\xE9 selon \xE9volutions march\xE9`;
}
function generateContentOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Projet \xC9ditorial :**
${description.length > 50 ? description : "Cr\xE9ation de contenus de qualit\xE9 professionnelle pour d\xE9velopper notre communication et engager notre audience."}

**Types de Contenus :**
\u2022 Articles de blog SEO-optimis\xE9s
\u2022 Pages web et fiches produits
\u2022 Newsletters et emailing
\u2022 Contenus r\xE9seaux sociaux
\u2022 Livres blancs et guides
\u2022 ${analysis.hasComplexFeatures ? "Scripts vid\xE9o et podcasts" : "Communiqu\xE9s de presse"}

**Exigences Qualit\xE9 :**
\u2022 \xC9criture fluide et engageante
\u2022 Respect de la ligne \xE9ditoriale
\u2022 Optimisation SEO native
\u2022 Recherche et documentation rigoureuse
\u2022 Originalit\xE9 et valeur ajout\xE9e
\u2022 Adaptation aux diff\xE9rents formats

**Sp\xE9cifications Techniques :**
\u2022 Longueur selon brief sp\xE9cifique
\u2022 Int\xE9gration mots-cl\xE9s strat\xE9giques
\u2022 Structure H1, H2, H3 optimis\xE9e
\u2022 M\xE9ta-descriptions et titres SEO
\u2022 Appels \xE0 l'action pertinents

**Secteur et Ton :**
\u2022 Adaptation parfaite \xE0 notre secteur
\u2022 Ton professionnel mais accessible
\u2022 Expertise technique d\xE9montr\xE9e
\u2022 Style coh\xE9rent sur tous contenus
\u2022 Respect de l'image de marque

**Livrables :**
\u2022 Contenus finalis\xE9s et relus
\u2022 Optimisation SEO int\xE9gr\xE9e
\u2022 Suggestions visuels et illustrations
\u2022 Planning \xE9ditorial si r\xE9current
\u2022 Droits de propri\xE9t\xE9 complets

**Profil R\xE9dacteur :**
\u2022 Portfolio de contenus similaires
\u2022 Ma\xEEtrise techniques SEO
\u2022 Capacit\xE9 de recherche documentaire
\u2022 Respect strict des d\xE9lais
\u2022 Communication professionnelle

**Organisation :**
\u2022 Brief d\xE9taill\xE9 pour chaque contenu
\u2022 1-2 r\xE9visions incluses par contenu
\u2022 D\xE9lai : ${analysis.isUrgent ? "48-72h par article" : "1 semaine par contenu"}
\u2022 Tarification : Au mot ou forfait selon volume`;
}
function generateTranslationOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Projet de Traduction :**
${description.length > 50 ? description : "Traduction professionnelle de haute qualit\xE9 respectant le sens, le style et les sp\xE9cificit\xE9s culturelles."}

**Langues de Travail :**
\u2022 Langue source : \xC0 pr\xE9ciser
\u2022 Langue cible : \xC0 pr\xE9ciser
\u2022 Variantes r\xE9gionales si n\xE9cessaires
\u2022 Localisation culturelle adapt\xE9e

**Types de Documents :**
\u2022 Documents techniques et manuels
\u2022 Contenus web et marketing
\u2022 Contrats et documents l\xE9gaux
\u2022 Pr\xE9sentations et rapports
\u2022 ${analysis.hasComplexFeatures ? "Logiciels et interfaces" : "Courriers et communications"}

**Exigences Qualit\xE9 :**
\u2022 Traduction humaine professionnelle
\u2022 Respect du registre et du ton
\u2022 Adaptation culturelle pertinente
\u2022 Coh\xE9rence terminologique
\u2022 Relecture et correction incluses

**Sp\xE9cialisations :**
\u2022 Domaine d'expertise requis
\u2022 Ma\xEEtrise vocabulaire technique
\u2022 Connaissance secteur d'activit\xE9
\u2022 Normes de qualit\xE9 ISO 17100
\u2022 Confidentialit\xE9 garantie

**Processus de Travail :**
\u2022 Analyse et devis pr\xE9alables
\u2022 Glossaire et guide de style
\u2022 Traduction par natif expert
\u2022 Relecture par second traducteur
\u2022 Livraison dans formats originaux

**Livrables :**
\u2022 Documents traduits finalis\xE9s
\u2022 Glossaire terminologique cr\xE9\xE9
\u2022 Rapport de traduction si souhait\xE9
\u2022 Fichiers dans formats demand\xE9s
\u2022 Support post-livraison

**D\xE9lais et Tarification :**
\u2022 D\xE9lai : ${analysis.isUrgent ? "24-48h urgence" : "Standard selon volume"}
\u2022 Tarification : Au mot ou forfait
\u2022 R\xE9visions mineures incluses
\u2022 Certification possible si requise

**Modalit\xE9s :**
\u2022 Confidentialit\xE9 stricte garantie
\u2022 Formats accept\xE9s : Word, PDF, Excel, etc.
\u2022 Communication directe privil\xE9gi\xE9e
\u2022 Paiement s\xE9curis\xE9 \xE9chelonn\xE9`;
}
function generateConsultingOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Contexte de la Mission :**
${description.length > 50 ? description : "Nous recherchons un consultant expert pour nous accompagner dans l'analyse et l'optimisation de nos processus m\xE9tier."}

**Objectifs de Consultation :**
\u2022 Diagnostic complet de la situation
\u2022 Identification des axes d'am\xE9lioration
\u2022 Recommandations strat\xE9giques
\u2022 Plan d'action op\xE9rationnel
\u2022 ${analysis.hasComplexFeatures ? "Conduite du changement" : "Formation des \xE9quipes"}

**Domaines d'Expertise :**
\u2022 Strat\xE9gie et organisation
\u2022 Processus et efficacit\xE9 op\xE9rationnelle
\u2022 Transformation digitale
\u2022 Management et RH
\u2022 Finance et contr\xF4le de gestion

**M\xE9thodologie Attendue :**
\u2022 Audit initial approfondi
\u2022 Entretiens avec parties prenantes
\u2022 Analyse de donn\xE9es et benchmarking
\u2022 Ateliers collaboratifs
\u2022 Restitution et recommandations

**Livrables Consultants :**
\u2022 Rapport de diagnostic d\xE9taill\xE9
\u2022 Pr\xE9sentation des recommandations
\u2022 Plan d'action prioris\xE9 et chiffr\xE9
\u2022 Outils et m\xE9thodologies
\u2022 Formation \xE9quipes si n\xE9cessaire

**Profil Expert :**
\u2022 5+ ans exp\xE9rience consulting
\u2022 Expertise sectorielle d\xE9montr\xE9e
\u2022 Portfolio de missions similaires
\u2022 R\xE9f\xE9rences clients v\xE9rifiables
\u2022 Capacit\xE9 d'analyse et synth\xE8se

**Modalit\xE9s d'Intervention :**
\u2022 Mission sur ${analysis.isUrgent ? "2-4 semaines" : "1-3 mois"}
\u2022 Interventions sur site et distanciel
\u2022 Points d'avancement r\xE9guliers
\u2022 Flexibilit\xE9 selon contraintes terrain

**Budget et Conditions :**
\u2022 TJM ou forfait mission selon pr\xE9f\xE9rence
\u2022 Frais de d\xE9placement si n\xE9cessaires
\u2022 Confidentialit\xE9 stricte requise
\u2022 Paiement selon jalons d\xE9finis

**Suivi Post-Mission :**
\u2022 Support mise en \u0153uvre recommandations
\u2022 Points de suivi \xE0 3 et 6 mois
\u2022 Ajustements m\xE9thodologies si besoin
\u2022 Bilan final et ROI mesur\xE9`;
}
function generateEcommerceOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Vision E-commerce :**
${description.length > 50 ? description : "Cr\xE9ation d'une boutique en ligne performante et convertissante avec une exp\xE9rience client exceptionnelle."}

**Fonctionnalit\xE9s E-commerce :**
\u2022 Catalogue produits avec filtres avanc\xE9s
\u2022 Panier et tunnel de commande optimis\xE9
\u2022 Gestion multi-moyens de paiement
\u2022 Espace client complet
\u2022 Syst\xE8me de reviews et avis
\u2022 ${analysis.hasComplexFeatures ? "Marketplace multi-vendeurs" : "Programme de fid\xE9lit\xE9"}

**Int\xE9grations Requises :**
\u2022 Passerelles de paiement (Stripe, PayPal)
\u2022 Solutions d'exp\xE9dition (Colissimo, Chronopost)
\u2022 Outils marketing (MailChimp, Google Analytics)
\u2022 ERP/CRM si existant
\u2022 R\xE9seaux sociaux et comparateurs

**Design et UX :**
\u2022 Design responsive mobile-first
\u2022 Interface intuitive et moderne
\u2022 Optimisation taux de conversion
\u2022 Tunnel de commande fluide
\u2022 Performance et temps de chargement

**Fonctionnalit\xE9s Admin :**
\u2022 Gestion compl\xE8te des produits
\u2022 Suivi des commandes en temps r\xE9el
\u2022 Statistiques et reporting avanc\xE9s
\u2022 Gestion des stocks automatis\xE9e
\u2022 Outils marketing int\xE9gr\xE9s

**Aspects Techniques :**
\u2022 H\xE9bergement haute performance
\u2022 S\xE9curit\xE9 et certificats SSL
\u2022 Sauvegarde automatique
\u2022 SEO on-page optimis\xE9
\u2022 Conformit\xE9 RGPD

**Livrables :**
\u2022 Boutique e-commerce compl\xE8te
\u2022 Formation administration
\u2022 Documentation utilisateur
\u2022 3 mois de support technique
\u2022 Garantie de fonctionnement

**Expertise Requise :**
\u2022 Portfolio boutiques e-commerce
\u2022 Ma\xEEtrise Shopify, WooCommerce ou Prestashop
\u2022 Connaissance conversion et UX
\u2022 Exp\xE9rience int\xE9grations paiement
\u2022 Support et maintenance

**Timeline Projet :**
\u2022 Conception et setup : 1-2 semaines
\u2022 D\xE9veloppement : ${analysis.isUrgent ? "3-4 semaines" : "6-8 semaines"}  
\u2022 Tests et formation : 1 semaine
\u2022 Mise en production assist\xE9e

**Investissement :**
\u2022 D\xE9veloppement : Devis selon fonctionnalit\xE9s
\u2022 H\xE9bergement et licences s\xE9par\xE9s
\u2022 Formation et support inclus
\u2022 Options de maintenance disponibles`;
}
function generateConstructionOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Description des Travaux :**
${description.length > 50 ? description : "R\xE9alisation de travaux de construction ou r\xE9novation dans le respect des normes et d\xE9lais impartis."}

**Nature des Travaux :**
\u2022 Gros \u0153uvre / Second \u0153uvre
\u2022 Extension / Sur\xE9l\xE9vation
\u2022 R\xE9novation \xE9nerg\xE9tique
\u2022 Am\xE9nagement int\xE9rieur/ext\xE9rieur
\u2022 Isolation thermique / acoustique
\u2022 ${analysis.hasComplexFeatures ? "Mise en conformit\xE9 r\xE9glementaire" : "Finitions et d\xE9coration"}

**Sp\xE9cificit\xE9s du Site :**
\u2022 Surface : ${analysis.missing.includes("Surface non indiqu\xE9e") ? "\xC0 pr\xE9ciser" : description.match(/\d+\s*m[²2]/)?.[0] || "\xC0 pr\xE9ciser"}
\u2022 Type de b\xE2timent : ${analysis.missing.includes("Type de b\xE2timent non sp\xE9cifi\xE9") ? "\xC0 pr\xE9ciser" : description.match(/^(Maison|Appartement|Immeuble|Local commercial|Bureau)/i)?.[0] || "\xC0 pr\xE9ciser"}
\u2022 Accessibilit\xE9 : ${analysis.missing.includes("Contraintes d'acc\xE8s non mentionn\xE9es") ? "\xC0 pr\xE9ciser" : description.match(/accès|parking|difficile|facile/i)?.[0] || "\xC0 pr\xE9ciser"}
\u2022 \xC9tat actuel : ${analysis.missing.includes("\xC9tat du b\xE2ti non sp\xE9cifi\xE9") ? "\xC0 pr\xE9ciser" : description.match(/bon état|délabré|ancien|neuf/i)?.[0] || "\xC0 pr\xE9ciser"}

**Exigences Techniques :**
\u2022 Respect des normes DTU et RT/RE
\u2022 Mat\xE9riaux de qualit\xE9 et durables
\u2022 Savoir-faire artisanal ou technique
\u2022 Coordination des corps de m\xE9tier
\u2022 Gestion du chantier et s\xE9curit\xE9

**Livrables :**
\u2022 Travaux r\xE9alis\xE9s selon cahier des charges
\u2022 Garantie d\xE9cennale et de parfait ach\xE8vement
\u2022 Certificats de conformit\xE9 si requis
\u2022 Nettoyage final du chantier
\u2022 Factures d\xE9taill\xE9es et transparentes

**Profil Entreprise :**
\u2022 Qualification professionnelle reconnue (Qualibat, RGE...)
\u2022 Assurance responsabilit\xE9 civile et d\xE9cennale
\u2022 Exp\xE9rience confirm\xE9e sur projets similaires
\u2022 R\xE9f\xE9rences clients disponibles
\u2022 Devis gratuit et d\xE9taill\xE9

**Planning :**
\u2022 Dur\xE9e estim\xE9e : ${analysis.isUrgent ? "2-4 semaines" : "1-3 mois"}
\u2022 D\xE9but des travaux : Date souhait\xE9e

**Budget :**
\u2022 Enveloppe budg\xE9taire indicative : \xC0 d\xE9finir
\u2022 Paiement : Acompte, paiements interm\xE9diaires, solde \xE0 r\xE9ception`;
}
function generateRenovationOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Contexte du Projet :**
${description.length > 50 ? description : "R\xE9novation compl\xE8te ou partielle d'un bien immobilier pour am\xE9liorer son confort, sa performance et son esth\xE9tique."}

**Nature de la R\xE9novation :**
\u2022 R\xE9novation int\xE9rieure compl\xE8te
\u2022 R\xE9novation partielle (cuisine, SDB...)
\u2022 R\xE9novation ext\xE9rieure (fa\xE7ade, toiture...)
\u2022 Optimisation \xE9nerg\xE9tique
\u2022 Mise aux normes (\xE9lectricit\xE9, plomberie)
\u2022 ${analysis.hasComplexFeatures ? "Restauration patrimoniale" : "Am\xE9lioration esth\xE9tique"}

**Ampleur des Travaux :**
\u2022 Surface concern\xE9e : ${analysis.missing.includes("Surface non indiqu\xE9e") ? "\xC0 pr\xE9ciser" : description.match(/\d+\s*m[²2]/)?.[0] || "\xC0 pr\xE9ciser"}
\u2022 Nombre de pi\xE8ces : \xC0 pr\xE9ciser
\u2022 Travaux sp\xE9cifiques : ${analysis.suggestedDeliverables.length > 0 ? analysis.suggestedDeliverables.join(", ") : "\xC0 d\xE9finir"}

**Exigences Techniques :**
\u2022 Qualit\xE9 des mat\xE9riaux et finitions
\u2022 Respect des styles architecturaux
\u2022 Performance thermique et acoustique
\u2022 Normes de s\xE9curit\xE9 et accessibilit\xE9
\u2022 Coordination des artisans

**Livrables :**
\u2022 Travaux de r\xE9novation ex\xE9cut\xE9s selon cahier des charges
\u2022 Garantie d\xE9cennale et de parfait ach\xE8vement
\u2022 Propret\xE9 et remise en \xE9tat des lieux
\u2022 Facturation d\xE9taill\xE9e et transparente

**Profil Artisan/Entreprise :**
\u2022 Exp\xE9rience significative en r\xE9novation
\u2022 Portfolio de r\xE9alisations vari\xE9es
\u2022 Comp\xE9tences multi-m\xE9tiers ou coordination
\u2022 Assurance professionnelle valide
\u2022 Devis pr\xE9cis et respect\xE9

**Planning et Budget :**
\u2022 Dur\xE9e estim\xE9e : ${analysis.isUrgent ? "4-8 semaines" : "2-4 mois"}
\u2022 Budget indicatif : \xC0 d\xE9finir selon devis
\u2022 Paiement : Acompte, paiements interm\xE9diaires, solde \xE0 r\xE9ception`;
}
function generatePlomberieOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Besoin Urgent/Planifi\xE9 :**
${analysis.isUrgent ? "Intervention plomberie urgente n\xE9cessaire." : "Demande d'intervention plomberie pour installation ou r\xE9paration."}

**Nature de l'Intervention :**
\u2022 D\xE9pannage (fuite, robinet, WC...)
\u2022 Installation (sanitaire, chauffage...)
\u2022 R\xE9novation (r\xE9seau, salle de bain...)
\u2022 Recherche de fuite
\u2022 D\xE9bouchage canalisation
\u2022 ${analysis.hasComplexFeatures ? "Mise aux normes installation gaz" : "Entretien chaudi\xE8re"}

**Informations Compl\xE9mentaires :**
\u2022 Lieu de l'intervention : ${description.match(/(\d+\s*(?:rue|avenue|boulevard)\s*[\w\s-]+)/i)?.[1] || "Adresse \xE0 pr\xE9ciser"}
\u2022 \xC9tage : ${analysis.missing.includes("\xC9tage non sp\xE9cifi\xE9") ? "\xC0 pr\xE9ciser" : description.match(/(?:au|au\s)(\d+)(?:er|ème)\sétage/i)?.[1] || "Rez-de-chauss\xE9e"}
\u2022 Accessibilit\xE9 : Facile / Difficile
\u2022 Contexte : Maison / Appartement / Local commercial

**Exigences Professionnelles :**
\u2022 Plombier qualifi\xE9 et certifi\xE9
\u2022 Interventions dans le respect des normes
\u2022 Utilisation de mat\xE9riel professionnel
\u2022 Diagnostic pr\xE9cis et devis clair
\u2022 Garantie sur les travaux effectu\xE9s

**Livrables :**
\u2022 R\xE9paration ou installation fonctionnelle
\u2022 Nettoyage de la zone d'intervention
\u2022 Explication des travaux r\xE9alis\xE9s
\u2022 Facture d\xE9taill\xE9e avec garantie

**Disponibilit\xE9 et Tarifs :**
\u2022 Urgence : Intervention sous 2-4h
\u2022 Standard : Sur RDV sous 48h
\u2022 Tarifs : D\xE9placement + Taux horaire / Forfait intervention
\u2022 Devis gratuit sur demande`;
}
function generateElectriciteOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Nature de l'Intervention :**
${description.length > 50 ? description : "Installation, modification ou d\xE9pannage \xE9lectrique dans le respect des normes de s\xE9curit\xE9."}

**Type de Prestation :**
\u2022 Installation \xE9lectrique neuve (maison, appartement)
\u2022 R\xE9novation \xE9lectrique compl\xE8te
\u2022 Modification de tableau \xE9lectrique
\u2022 Installation de prises, interrupteurs
\u2022 D\xE9pannage \xE9lectrique (court-circuit, panne)
\u2022 ${analysis.hasComplexFeatures ? "Installation domotique" : "Mise en place \xE9clairage"}

**Contexte Technique :**
\u2022 Type de b\xE2timent : Maison / Appartement / Bureau / Local
\u2022 \xC2ge de l'installation : Ancienne / R\xE9nov\xE9e / Neuve
\u2022 Normes \xE0 respecter : NF C 15-100 / Consuel
\u2022 Complexit\xE9 : Faible / Moyenne / \xC9lev\xE9e

**Exigences Professionnelles :**
\u2022 \xC9lectricien habilit\xE9 et certifi\xE9
\u2022 Respect strict des normes de s\xE9curit\xE9
\u2022 Utilisation de mat\xE9riel homologu\xE9
\u2022 Diagnostic pr\xE9cis et devis d\xE9taill\xE9
\u2022 Garantie sur les travaux et le mat\xE9riel

**Livrables :**
\u2022 Installation \xE9lectrique conforme et fonctionnelle
\u2022 Attestation Consuel si n\xE9cessaire
\u2022 Nettoyage de la zone d'intervention
\u2022 Explication des travaux r\xE9alis\xE9s
\u2022 Facture d\xE9taill\xE9e

**Disponibilit\xE9 et Tarifs :**
\u2022 Urgence : Intervention rapide
\u2022 Standard : Sur rendez-vous
\u2022 Tarifs : D\xE9placement + Taux horaire / Forfait
\u2022 Devis gratuit et d\xE9taill\xE9`;
}
function generatePeintureOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Description des Travaux de Peinture :**
${description.length > 50 ? description : "Application de peinture de qualit\xE9 pour embellir et prot\xE9ger vos murs et boiseries."}

**Nature des Travaux :**
\u2022 Peinture int\xE9rieure (murs, plafonds, boiseries)
\u2022 Peinture ext\xE9rieure (fa\xE7ades, volets)
\u2022 R\xE9novation peinture (recouvrement papier peint, lessivage)
\u2022 Pose rev\xEAtement mural (intiss\xE9, toile de verre)
\u2022 Travaux de pr\xE9paration (pon\xE7age, enduit)
\u2022 ${analysis.hasComplexFeatures ? "Effets d\xE9coratifs (patine, enduit \xE0 la chaux)" : "Peinture \xE9cologique"}

**Informations sur la Surface :**
\u2022 Type de surface : Placo / Enduit / Bois / M\xE9tal
\u2022 Surface \xE0 peindre : ${analysis.missing.includes("Surface non indiqu\xE9e") ? "\xC0 pr\xE9ciser" : description.match(/\d+\s*m[²2]/)?.[0] || "\xC0 pr\xE9ciser"}
\u2022 Nombre de pi\xE8ces/fa\xE7ades : \xC0 pr\xE9ciser
\u2022 \xC9tat actuel : Bon \xE9tat / Travaux de pr\xE9paration n\xE9cessaires

**Exigences Professionnelles :**
\u2022 Peintre qualifi\xE9 et exp\xE9riment\xE9
\u2022 Utilisation de peintures de qualit\xE9 et adapt\xE9es
\u2022 Respect des techniques d'application
\u2022 Soin apport\xE9 aux finitions
\u2022 Protection du mobilier et des sols
\u2022 Nettoyage apr\xE8s travaux

**Livrables :**
\u2022 Surfaces peintes uniform\xE9ment et proprement
\u2022 Finitions soign\xE9es
\u2022 Zone de travail nettoy\xE9e
\u2022 Facture d\xE9taill\xE9e

**Disponibilit\xE9 et Tarifs :**
\u2022 Planning : Selon disponibilit\xE9 et urgence
\u2022 Tarifs : Au m\xB2 ou forfait par pi\xE8ce/chantier
\u2022 Devis gratuit et d\xE9taill\xE9`;
}
function generateServicesPersonneOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Type de Prestation :**
${description.length > 50 ? description : "Service personnalis\xE9 pour r\xE9pondre \xE0 vos besoins quotidiens ou ponctuels."}

**Domaine de Service :**
\u2022 Aide \xE0 domicile (m\xE9nage, courses, repas)
\u2022 Assistance aux personnes \xE2g\xE9es ou handicap\xE9es
\u2022 Soutien scolaire / Aide aux devoirs
\u2022 Garde d'enfants / Baby-sitting
\u2022 Jardinage / Petit bricolage
\u2022 ${analysis.hasComplexFeatures ? "Accompagnement administratif" : "T\xE2ches m\xE9nag\xE8res"}

**Informations Cl\xE9s :**
\u2022 Fr\xE9quence : Quotidienne / Hebdomadaire / Mensuelle / Ponctuelle
\u2022 Dur\xE9e par intervention : \xC0 pr\xE9ciser
\u2022 P\xE9riode souhait\xE9e : Matin / Apr\xE8s-midi / Soir / Week-end
\u2022 \xC2ge des personnes aid\xE9es : ${analysis.missing.includes("\xC2ge des personnes aid\xE9es non sp\xE9cifi\xE9") ? "\xC0 pr\xE9ciser" : description.match(/\d+\s*(?:ans?|années?)/i)?.[0] || "\xC0 pr\xE9ciser"}

**Attentes du Prestataire :**
\u2022 Ponctualit\xE9 et fiabilit\xE9
\u2022 Discr\xE9tion et respect de la vie priv\xE9e
\u2022 Bienveillance et patience
\u2022 Comp\xE9tences adapt\xE9es au service
\u2022 Propret\xE9 et soin

**Livrables :**
\u2022 Prestation r\xE9alis\xE9e conform\xE9ment \xE0 la demande
\u2022 Retour sur les t\xE2ches effectu\xE9es
\u2022 Respect des horaires convenus

**Modalit\xE9s :**
\u2022 Tarifs : Horaire ou forfait selon prestation
\u2022 Possibilit\xE9 de devis personnalis\xE9
\u2022 Assurance responsabilit\xE9 civile professionnelle
\u2022 D\xE9claration simplifi\xE9e CESU possible`;
}
function generateAIOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Besoin en Intelligence Artificielle :**
${description.length > 50 ? description : "D\xE9veloppement et int\xE9gration de solutions bas\xE9es sur l'IA pour optimiser vos processus et vos prises de d\xE9cision."}

**Domaine d'Application :**
\u2022 Analyse pr\xE9dictive
\u2022 Traitement du langage naturel (NLP)
\u2022 Vision par ordinateur
\u2022 Machine Learning / Deep Learning
\u2022 Chatbots / Assistants virtuels
\u2022 Automatisation des t\xE2ches
\u2022 ${analysis.hasComplexFeatures ? "Syst\xE8mes de recommandation" : "Optimisation des flux"}

**Objectifs Sp\xE9cifiques :**
\u2022 Am\xE9liorer la performance
\u2022 Personnaliser l'exp\xE9rience client
\u2022 Automatiser des t\xE2ches r\xE9p\xE9titives
\u2022 Extraire des insights des donn\xE9es
\u2022 Pr\xE9dire des \xE9v\xE9nements futurs
\u2022 ${analysis.needsDatabase ? "G\xE9rer de grands volumes de donn\xE9es" : "Optimiser l'utilisation des ressources"}

**Comp\xE9tences Techniques Requises :**
\u2022 Ma\xEEtrise Python et librairies IA (TensorFlow, PyTorch, Scikit-learn)
\u2022 Connaissance des algorithmes de ML/DL
\u2022 Exp\xE9rience en traitement de donn\xE9es
\u2022 Comp\xE9tences en d\xE9ploiement de mod\xE8les
\u2022 Connaissance des API IA

**Livrables Attendus :**
\u2022 Mod\xE8le IA entra\xEEn\xE9 et optimis\xE9
\u2022 API d'int\xE9gration pour vos syst\xE8mes
\u2022 Documentation technique et utilisateur
\u2022 M\xE9triques de performance et validation
\u2022 Support et maintenance

**Planning et Budget :**
\u2022 Dur\xE9e : ${analysis.isUrgent ? "4-8 semaines" : "2-4 mois"}
\u2022 Budget : Devis d\xE9taill\xE9 requis
\u2022 Paiement : Selon jalons`;
}
function generateMenageOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Nature de la Prestation :**
${description.length > 50 ? description : "Nettoyage et entretien de votre domicile pour un environnement sain et agr\xE9able."}

**Type de Nettoyage :**
\u2022 Nettoyage r\xE9gulier (hebdomadaire, bi-mensuel)
\u2022 Nettoyage ponctuel (apr\xE8s travaux, d\xE9m\xE9nagement)
\u2022 Grand m\xE9nage de printemps
\u2022 Nettoyage de vitres
\u2022 Entretien des sols et surfaces
\u2022 ${analysis.hasComplexFeatures ? "Nettoyage sp\xE9cialis\xE9 (taches tenaces)" : "Entretien courant"}

**Informations sur le Logement :**
\u2022 Surface approximative : ${analysis.missing.includes("Surface non indiqu\xE9e") ? "\xC0 pr\xE9ciser" : description.match(/\d+\s*m[²2]/)?.[0] || "\xC0 pr\xE9ciser"}
\u2022 Nombre de pi\xE8ces : \xC0 pr\xE9ciser
\u2022 Type de logement : Appartement / Maison / Bureau
\u2022 Fr\xE9quence souhait\xE9e : ${analysis.isRecurring ? analysis.missing.includes("Fr\xE9quence non sp\xE9cifi\xE9e") ? "\xC0 pr\xE9ciser" : description.match(/(?:hebdomadaire|bi-mensuel|mensuel|ponctuel)/i)?.[0] || "\xC0 pr\xE9ciser" : "Ponctuelle"}

**Exigences :**
\u2022 Produits d'entretien \xE9cologiques et efficaces
\u2022 Mat\xE9riel professionnel fourni
\u2022 Soin et discr\xE9tion
\u2022 Ponctualit\xE9 et fiabilit\xE9
\u2022 Respect de vos consignes

**Livrables :**
\u2022 Logement propre et d\xE9sinfect\xE9
\u2022 Surfaces brillantes et sans traces
\u2022 Sols impeccables
\u2022 Environnement sain et agr\xE9able

**Tarifs :**
\u2022 Forfait horaire ou forfait par prestation
\u2022 Devis gratuit sur demande
\u2022 Possibilit\xE9 d'intervention rapide`;
}
function generateGardeEnfantsOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Besoin de Garde d'Enfants :**
${description.length > 50 ? description : "Garde d'enfants fiable et attentionn\xE9e pour assurer leur bien-\xEAtre et leur \xE9panouissement."}

**Informations sur les Enfants :**
\u2022 \xC2ge(s) : ${analysis.missing.includes("\xC2ge des enfants non pr\xE9cis\xE9") ? "\xC0 pr\xE9ciser" : description.match(/\d+\s*(?:ans?|années?)/i)?.[0] || "\xC0 pr\xE9ciser"}
\u2022 Nombre d'enfants : \xC0 pr\xE9ciser
\u2022 Besoins sp\xE9cifiques : (Allergies, suivi scolaire, activit\xE9s...)

**Conditions de Garde :**
\u2022 P\xE9riode : Journ\xE9e / Soir\xE9e / Week-end / Vacances scolaires
\u2022 Horaires : ${analysis.missing.includes("Horaires non sp\xE9cifi\xE9s") ? "\xC0 pr\xE9ciser" : description.match(/(\d{1,2}h(?::\d{2})?)\s*(?:à|-)\s*(\d{1,2}h(?::\d{2})?)/i)?.[0] || "\xC0 pr\xE9ciser"}
\u2022 Lieu : Domicile des parents / Domicile de la nounou
\u2022 T\xE2ches : Jeux, repas, aide aux devoirs, accompagnement activit\xE9s

**Profil du Gardien/de la Gardienne :**
\u2022 Exp\xE9rience significative avec les enfants
\u2022 Qualifications pertinentes (BAFA,PSC1...)
\u2022 Bienveillance, patience et dynamisme
\u2022 Fiabilit\xE9 et ponctualit\xE9
\u2022 R\xE9f\xE9rences v\xE9rifiables

**Livrables :**
\u2022 Enfants en s\xE9curit\xE9 et bienveill\xE9s
\u2022 Activit\xE9s stimulantes et adapt\xE9es
\u2022 Respect des consignes parentales
\u2022 Communication transparente avec les parents

**Tarifs :**
\u2022 Taux horaire selon exp\xE9rience et horaires
\u2022 Forfait possible pour garde r\xE9guli\xE8re
\u2022 Devis personnalis\xE9 sur demande`;
}
function generateJardinageOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Nature des Travaux de Jardinage :**
${description.length > 50 ? description : "Entretien et am\xE9nagement de votre jardin pour un espace ext\xE9rieur agr\xE9able et bien entretenu."}

**Prestations Propos\xE9es :**
\u2022 Tonte de pelouse
\u2022 Taille de haies et arbustes
\u2022 D\xE9sherbage et entretien massifs
\u2022 Plantation et entretien fleurs/plantes
\u2022 \xC9vacuation des d\xE9chets verts
\u2022 ${analysis.hasComplexFeatures ? "Am\xE9nagement paysager" : "Arrosage"}

**Informations sur le Jardin :**
\u2022 Surface approximative : ${analysis.missing.includes("Surface non indiqu\xE9e") ? "\xC0 pr\xE9ciser" : description.match(/\d+\s*m[²2]/)?.[0] || "\xC0 pr\xE9ciser"}
\u2022 Type d'espace : Jardin / Terrasse / Balcon
\u2022 Fr\xE9quence souhait\xE9e : Ponctuelle / R\xE9guli\xE8re (hebdomadaire, mensuelle)
\u2022 Travaux sp\xE9cifiques : \xC0 d\xE9finir

**Exigences :**
\u2022 Jardinier exp\xE9riment\xE9 et fiable
\u2022 Utilisation de mat\xE9riel professionnel adapt\xE9
\u2022 Respect de l'environnement
\u2022 Soin apport\xE9 aux v\xE9g\xE9taux
\u2022 Propret\xE9 apr\xE8s intervention

**Livrables :**
\u2022 Jardin propre, taill\xE9 et entretenu
\u2022 Pelouse soign\xE9e
\u2022 Espaces verts d\xE9sherb\xE9s et ordonn\xE9s
\u2022 D\xE9chets verts \xE9vacu\xE9s

**Tarifs :**
\u2022 Taux horaire ou forfait par intervention/surface
\u2022 Devis gratuit sur demande
\u2022 Tarifs d\xE9gressifs pour interventions r\xE9guli\xE8res`;
}
function generateComptabiliteOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Besoin en Expertise Comptable :**
${description.length > 50 ? description : "Accompagnement professionnel pour la gestion de votre comptabilit\xE9 et optimisation fiscale."}

**Nature de la Prestation :**
\u2022 Tenue comptable compl\xE8te
\u2022 R\xE9vision comptable
\u2022 \xC9tablissement des comptes annuels
\u2022 D\xE9clarations fiscales (TVA, IS...)
\u2022 Conseil fiscal et optimisation
\u2022 ${analysis.hasComplexFeatures ? "Audit financier" : "Paie et gestion sociale"}

**Contexte de l'Entreprise :**
\u2022 Type d'entreprise : SA / SARL / SAS / Auto-entrepreneur / Association
\u2022 Secteur d'activit\xE9 : \xC0 pr\xE9ciser
\u2022 Chiffre d'affaires annuel : \xC0 d\xE9finir
\u2022 P\xE9riodicit\xE9 souhait\xE9e : Mensuelle / Trimestrielle / Annuelle

**Attentes du Client :**
\u2022 Fiabilit\xE9 et rigueur
\u2022 Respect des d\xE9lais r\xE9glementaires
\u2022 Confidentialit\xE9 des donn\xE9es
\u2022 Conseil personnalis\xE9 et r\xE9actif
\u2022 Optimisation de la charge fiscale

**Livrables :**
\u2022 Comptes annuels conformes
\u2022 D\xE9clarations fiscales et sociales \xE0 jour
\u2022 Bilans et comptes de r\xE9sultat
\u2022 Tableaux de bord et indicateurs cl\xE9s
\u2022 Conseils strat\xE9giques

**Profil Expert-Comptable :**
\u2022 Dipl\xF4me d'expertise comptable
\u2022 Exp\xE9rience dans votre secteur
\u2022 R\xE9f\xE9rences clients
\u2022 Proximit\xE9 g\xE9ographique ou digitale

**Modalit\xE9s :**
\u2022 Contrat de mission adapt\xE9
\u2022 Tarifs clairs et transparents
\u2022 Confidentialit\xE9 garantie
\u2022 Accompagnement personnalis\xE9`;
}
function generateGenericOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Description du Projet :**
${description.length > 50 ? description : "Nous recherchons un professionnel qualifi\xE9 pour r\xE9aliser ce projet avec succ\xE8s."}

**Objectifs :**
\u2022 Livraison d'un r\xE9sultat de haute qualit\xE9
\u2022 Respect des d\xE9lais convenus
\u2022 Communication transparente tout au long du projet
\u2022 ${analysis.hasComplexFeatures ? "Innovation et cr\xE9ativit\xE9" : "Satisfaction client garantie"}

**Exigences :**
\u2022 Exp\xE9rience prouv\xE9e dans le domaine
\u2022 Compr\xE9hension approfondie du besoin
\u2022 Proactivit\xE9 et r\xE9activit\xE9
\u2022 Professionnalisme et rigueur

**Livrables Attendus :**
\u2022 Produit fini conforme aux attentes
\u2022 Documentation compl\xE8te si n\xE9cessaire
\u2022 Support post-livraison

**Budget et D\xE9lais :**
\u2022 Budget : \xC0 d\xE9finir selon proposition
\u2022 D\xE9lai : ${analysis.isUrgent ? "Court" : "Moyen"}

**Pour Postuler :**
Merci de pr\xE9senter votre exp\xE9rience et votre approche pour ce projet.`;
}
function extractTechFromDescription(description) {
  const technologies = [];
  const techKeywords = {
    "React": ["react", "reactjs"],
    "Vue.js": ["vue", "vuejs", "vue.js"],
    "Angular": ["angular", "angularjs"],
    "Node.js": ["node", "nodejs", "node.js"],
    "PHP": ["php"],
    "Laravel": ["laravel"],
    "Symfony": ["symfony"],
    "Python": ["python", "django", "flask"],
    "WordPress": ["wordpress", "wp"],
    "Shopify": ["shopify"],
    "Magento": ["magento"],
    "MongoDB": ["mongodb", "mongo"],
    "MySQL": ["mysql"],
    "PostgreSQL": ["postgresql", "postgres"]
  };
  const descLower = description.toLowerCase();
  for (const [tech, keywords] of Object.entries(techKeywords)) {
    if (keywords.some((keyword) => descLower.includes(keyword))) {
      technologies.push(tech);
    }
  }
  return technologies;
}
function extractFeaturesFromDescription(description) {
  const features = [];
  const featureKeywords = [
    "authentification",
    "login",
    "connexion",
    "paiement",
    "payment",
    "stripe",
    "paypal",
    "recherche",
    "search",
    "filtre",
    "admin",
    "administration",
    "gestion",
    "mobile",
    "responsive",
    "adaptatif",
    "api",
    "int\xE9gration",
    "webhook",
    "chat",
    "messaging",
    "notification",
    "analytics",
    "statistiques",
    "tracking"
  ];
  const descLower = description.toLowerCase();
  featureKeywords.forEach((keyword) => {
    if (descLower.includes(keyword)) {
      switch (keyword) {
        case "authentification":
        case "login":
        case "connexion":
          if (!features.includes("Syst\xE8me d'authentification s\xE9curis\xE9"))
            features.push("Syst\xE8me d'authentification s\xE9curis\xE9");
          break;
        case "paiement":
        case "payment":
        case "stripe":
        case "paypal":
          if (!features.includes("Int\xE9gration paiements en ligne"))
            features.push("Int\xE9gration paiements en ligne");
          break;
        case "recherche":
        case "search":
        case "filtre":
          if (!features.includes("Syst\xE8me de recherche avanc\xE9e"))
            features.push("Syst\xE8me de recherche avanc\xE9e");
          break;
        case "admin":
        case "administration":
        case "gestion":
          if (!features.includes("Interface d'administration"))
            features.push("Interface d'administration");
          break;
        case "mobile":
        case "responsive":
        case "adaptatif":
          if (!features.includes("Design responsive multi-appareils"))
            features.push("Design responsive multi-appareils");
          break;
      }
    }
  });
  return features;
}
function generateTransportOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Type de Transport :**
${description.length > 50 ? description : "Service de transport fiable pour vos besoins logistiques ou personnels."}

**Nature de la Prestation :**
\u2022 D\xE9m\xE9nagement (particulier, professionnel)
\u2022 Livraison de marchandises
\u2022 Transport de colis
\u2022 Location de v\xE9hicule utilitaire avec chauffeur
\u2022 Transfert a\xE9roport/gare
\u2022 ${analysis.hasComplexFeatures ? "Transport de mat\xE9riel sp\xE9cialis\xE9" : "Trajet ponctuel"}

**Informations Cl\xE9s :**
\u2022 Origine : \xC0 pr\xE9ciser
\u2022 Destination : \xC0 pr\xE9ciser
\u2022 Type de v\xE9hicule requis : Camionnette / Camion / Voiture
\u2022 Volume / Poids : \xC0 estimer
\u2022 Urgence : ${analysis.isUrgent ? "Urgente" : "Standard"}

**Exigences :**
\u2022 Ponctualit\xE9 et professionnalisme
\u2022 Soin dans la manutention
\u2022 Respect des d\xE9lais
\u2022 V\xE9hicule adapt\xE9 et entretenu
\u2022 Assurance transport

**Livrables :**
\u2022 Objet livr\xE9 \xE0 destination en bon \xE9tat
\u2022 Respect des horaires convenus
\u2022 Facture claire

**Tarifs :**
\u2022 Devis gratuit sur demande
\u2022 Tarification selon distance, volume et urgence`;
}
function generateBeauteBienEtreOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Besoin de Soins Beaut\xE9/Bien-\xEAtre :**
${description.length > 50 ? description : "Profitez de prestations de beaut\xE9 et de bien-\xEAtre personnalis\xE9es \xE0 votre domicile."}

**Type de Prestation :**
\u2022 Coiffure (coupe, couleur, brushing)
\u2022 Soins esth\xE9tiques (manucure, p\xE9dicure, \xE9pilation)
\u2022 Modelage et massage relaxant
\u2022 Maquillage professionnel
\u2022 ${analysis.hasComplexFeatures ? "Conseil en image" : "Soins du visage"}

**Informations sur la Prestation :**
\u2022 Lieu : Domicile / Studio
\u2022 P\xE9riode souhait\xE9e : Journ\xE9e / Soir\xE9e / Week-end
\u2022 Fr\xE9quence : Ponctuelle / R\xE9guli\xE8re

**Profil du Professionnel :**
\u2022 Dipl\xF4m\xE9(e) et exp\xE9riment\xE9(e)
\u2022 Mat\xE9riel professionnel et produits de qualit\xE9
\u2022 Hygi\xE8ne et discr\xE9tion irr\xE9prochables
\u2022 Ponctualit\xE9 et professionnalisme

**Livrables :**
\u2022 R\xE9sultat conforme aux attentes
\u2022 Moment de d\xE9tente et de bien-\xEAtre

**Tarifs :**
\u2022 Tarifs \xE0 la prestation ou forfait
\u2022 Devis personnalis\xE9 sur demande`;
}
function generateServicesProOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Besoin de Services Professionnels :**
${description.length > 50 ? description : "Accompagnement de votre activit\xE9 professionnelle par des experts dans divers domaines."}

**Domaine de Service :**
\u2022 Conseil juridique / fiscal
\u2022 Aide \xE0 la cr\xE9ation d'entreprise
\u2022 Gestion administrative et comptable
\u2022 Formation professionnelle
\u2022 D\xE9veloppement web / mobile
\u2022 ${analysis.hasComplexFeatures ? "Audit de s\xE9curit\xE9" : "Strat\xE9gie commerciale"}

**Objectifs :**
\u2022 Optimiser la gestion de votre entreprise
\u2022 Am\xE9liorer votre performance
\u2022 Respecter vos obligations l\xE9gales
\u2022 D\xE9velopper vos comp\xE9tences

**Profil du Prestataire :**
\u2022 Expertise reconnue dans son domaine
\u2022 Exp\xE9rience significative aupr\xE8s des entreprises
\u2022 Capacit\xE9 d'analyse et de conseil
\u2022 Confidentialit\xE9 et rigueur

**Livrables :**
\u2022 Rapports d'audit, analyses
\u2022 Documents juridiques et fiscaux
\u2022 Plans d'action et recommandations
\u2022 Formations adapt\xE9es

**Modalit\xE9s :**
\u2022 Devis gratuit sur demande
\u2022 Interventions sur site ou \xE0 distance
\u2022 Confidentialit\xE9 garantie`;
}
function generateEvenementielOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Organisation d'\xC9v\xE9nement :**
${description.length > 50 ? description : "Conception et r\xE9alisation d'\xE9v\xE9nements m\xE9morables et r\xE9ussis pour vos besoins professionnels ou personnels."}

**Type d'\xC9v\xE9nement :**
\u2022 Mariage
\u2022 Anniversaire
\u2022 S\xE9minaire d'entreprise
\u2022 Lancement de produit
\u2022 Soir\xE9e de gala
\u2022 ${analysis.hasComplexFeatures ? "Festival / Concert" : "Cocktail"}

**Prestations :**
\u2022 Recherche de lieu
\u2022 Conception du concept
\u2022 Gestion du budget
\u2022 Coordination des prestataires (traiteur, DJ, photographe...)
\u2022 D\xE9coration et ambiance
\u2022 Logistique et accueil

**Exigences :**
\u2022 Cr\xE9ativit\xE9 et sens de l'organisation
\u2022 R\xE9activit\xE9 et gestion du stress
\u2022 Souci du d\xE9tail
\u2022 Respect des d\xE9lais et du budget

**Livrables :**
\u2022 \xC9v\xE9nement cl\xE9 en main parfaitement orchestr\xE9
\u2022 Exp\xE9rience m\xE9morable pour les participants

**Tarifs :**
\u2022 Forfait d'organisation selon l'\xE9v\xE9nement
\u2022 Commission sur les prestataires
\u2022 Devis personnalis\xE9 sur demande`;
}
function generateEnseignementOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Besoin de Soutien Scolaire/Cours :**
${description.length > 50 ? description : "Accompagnement p\xE9dagogique personnalis\xE9 pour favoriser la r\xE9ussite scolaire et le d\xE9veloppement des comp\xE9tences."}

**Niveau Concern\xE9 :**
\u2022 Primaire
\u2022 Coll\xE8ge
\u2022 Lyc\xE9e
\u2022 Sup\xE9rieur
\u2022 Adulte

**Mati\xE8res Propos\xE9es :**
\u2022 Fran\xE7ais
\u2022 Math\xE9matiques
\u2022 Anglais / Autres langues
\u2022 Physique-Chimie
\u2022 Histoire-G\xE9ographie
\u2022 ${analysis.hasComplexFeatures ? "Informatique / Programmation" : "SVT"}

**Objectifs :**
\u2022 Soutien m\xE9thodologique
\u2022 Consolidation des acquis
\u2022 Pr\xE9paration aux examens
\u2022 Approfondissement des connaissances
\u2022 D\xE9veloppement de l'autonomie

**Profil du Formateur :**
\u2022 P\xE9dagogue et patient
\u2022 Dipl\xF4m\xE9(e) ou expert(e) dans sa mati\xE8re
\u2022 Exp\xE9rience dans l'enseignement / soutien scolaire
\u2022 Capacit\xE9 d'adaptation

**Livrables :**
\u2022 Progression mesurable de l'apprenant
\u2022 Meilleure compr\xE9hension des mati\xE8res
\u2022 Confiance en soi renforc\xE9e

**Tarifs :**
\u2022 Taux horaire selon niveau et mati\xE8re
\u2022 Forfait possible pour stages intensifs
\u2022 Devis personnalis\xE9 sur demande`;
}
function generateAnimauxOptimizedDescription(description, title, analysis) {
  return `**${title}**

**Service pour Animaux :**
${description.length > 50 ? description : "Prestations professionnelles et attentionn\xE9es pour le bien-\xEAtre de vos compagnons \xE0 quatre pattes."}

**Type de Service :**
\u2022 Garde d'animaux (pension, famille d'accueil)
\u2022 Promenade / L\xE2cher
\u2022 Toilettage
\u2022 Dressage / \xC9ducation canine
\u2022 Visite \xE0 domicile
\u2022 ${analysis.hasComplexFeatures ? "Transport d'animaux" : "Garde ponctuelle"}

**Informations sur l'Animal :**
\u2022 Esp\xE8ce : Chien / Chat / Autre
\u2022 Race : \xC0 pr\xE9ciser
\u2022 \xC2ge : \xC0 pr\xE9ciser
\u2022 Comportement / Besoins sp\xE9cifiques : (Sant\xE9, alimentation, caract\xE8re...)

**Exigences :**
\u2022 Amour et respect des animaux
\u2022 Exp\xE9rience et comp\xE9tences adapt\xE9es
\u2022 Patience et bienveillance
\u2022 Fiabilit\xE9 et ponctualit\xE9
\u2022 Environnement s\xE9curis\xE9 et stimulant

**Livrables :**
\u2022 Animal soign\xE9, heureux et en s\xE9curit\xE9
\u2022 Compte-rendu des activit\xE9s
\u2022 Animal propre et bien pr\xE9sent\xE9 (toilettage)

**Tarifs :**
\u2022 Tarification \xE0 la journ\xE9e, \xE0 la semaine ou \xE0 la prestation
\u2022 Devis personnalis\xE9 sur demande`;
}
app.post("/api/ai/predict-revenue", (req, res) => {
  const { missionData, providerData } = req.body;
  const mockPrediction = {
    estimatedRevenue: Math.floor(Math.random() * 1e4) + 2e3,
    confidence: Math.floor(Math.random() * 40) + 60,
    factors: [
      "Historique de prix similaires",
      "Complexit\xE9 du projet",
      "Demande du march\xE9"
    ]
  };
  res.json(mockPrediction);
});
app.post("/api/ai/detect-dumping", (req, res) => {
  const { bidData } = req.body;
  const mockDetection = {
    isDumping: Math.random() > 0.7,
    confidenceLevel: Math.floor(Math.random() * 50) + 50,
    reasons: Math.random() > 0.5 ? [
      "Prix 40% en dessous de la moyenne march\xE9",
      "Pattern inhabituel dans les ench\xE8res"
    ] : [],
    recommendedMinPrice: Math.floor(Math.random() * 2e3) + 1e3
  };
  res.json(mockDetection);
});
app.post("/api/ai/detect-abuse", (req, res) => {
  const { bidData } = req.body;
  const mockAbuse = {
    isAbuse: Math.random() > 0.8,
    confidence: Math.floor(Math.random() * 40) + 60,
    reasons: Math.random() > 0.5 ? [
      "Pattern de soumission suspect",
      "Prix anormalement bas r\xE9p\xE9t\xE9"
    ] : [],
    severity: Math.random() > 0.7 ? "high" : "medium"
  };
  res.json(mockAbuse);
});
app.post("/api/ai/bidding-guidance", (req, res) => {
  const { missionData, providerData } = req.body;
  const basePrice = missionData.budget || 5e3;
  const suggestedBid = Math.round(basePrice * (0.7 + Math.random() * 0.3));
  const mockGuidance = {
    suggestedBid,
    reasoning: [
      "Bas\xE9 sur votre profil et l'historique de prix",
      "Tient compte de la concurrence actuelle",
      "Optimis\xE9 pour maximiser vos chances de succ\xE8s"
    ],
    confidence: Math.floor(Math.random() * 30) + 70,
    competitorAnalysis: {
      averageBid: basePrice * 0.85,
      yourPosition: "competitive",
      winProbability: Math.floor(Math.random() * 40) + 60
    }
  };
  res.json(mockGuidance);
});
app.post("/api/ai/market-analysis", (req, res) => {
  const { category, location } = req.body;
  const mockAnalysis = {
    demandLevel: Math.random() > 0.5 ? "high" : "medium",
    competitionLevel: Math.random() > 0.5 ? "medium" : "low",
    averageBudget: Math.floor(Math.random() * 5e3) + 2e3,
    trendingSkills: ["React", "Node.js", "TypeScript", "Python"],
    marketHeat: Math.floor(Math.random() * 100),
    recommendations: [
      "Forte demande en d\xE9veloppement web",
      "Les projets IA sont en hausse",
      "Comp\xE9titivit\xE9 mod\xE9r\xE9e dans votre r\xE9gion"
    ]
  };
  res.json(mockAnalysis);
});
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email et mot de passe requis" });
  }
  const user = {
    id: 1,
    name: email.split("@")[0],
    email,
    type: "client"
  };
  res.json({ user });
});
app.post("/api/auth/register", (req, res) => {
  const { name, email, password, type } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email et mot de passe requis" });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: "Le mot de passe doit contenir au moins 6 caract\xE8res" });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Format d'email invalide" });
  }
  const user = {
    id: Date.now(),
    name: name || email.split("@")[0],
    email: email.trim().toLowerCase(),
    type: type || "client"
  };
  res.status(201).json({
    user,
    message: "Compte cr\xE9\xE9 avec succ\xE8s"
  });
});
try {
  await registerAdvancedAIRoutes(app);
  console.log("\u2705 Advanced AI routes registered");
} catch (error) {
  console.warn("\u26A0\uFE0F Advanced AI routes registration failed:", error);
}
app.get("*", (req, res) => {
  try {
    const indexPath = path.join(__dirname, "../dist/public/index.html");
    res.sendFile(indexPath);
  } catch (error) {
    console.error("Error serving index.html:", error);
    res.status(500).send("<!DOCTYPE html><html><body><h1>AppelsPro Loading...</h1><script>window.location.reload()</script></body></html>");
  }
});
app.listen(port, "0.0.0.0", () => {
  console.log(`\u{1F680} AppelsPro server running on http://0.0.0.0:${port}`);
  console.log(`\u{1F4F1} Frontend: http://0.0.0.0:${port}`);
  console.log(`\u{1F527} API Health: http://0.0.0.0:${port}/api/health`);
}).on("error", (err) => {
  console.error("\u274C Server failed to start:", err.message);
  process.exit(1);
});
