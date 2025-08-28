
# 🚀 Marketplace d'Appels d'Offres Inversés - Mode ÉCO

Plateforme française complète avec standardisation d'annonces, matching IA, enchère inversée guidée, et sourcing web gratuit.

## 🎯 Fonctionnalités Principales

### ✅ Implémenté
- **Standardisation d'annonces IA** : Analyse automatique et structuration des briefs
- **Scoring multicritère explicable** : Évaluation transparente des offres
- **Enchères inversées guidées** : Accompagnement intelligent des prestataires
- **LOC (Likelihood of Completion)** : Probabilité de succès des projets
- **Anti-abus** : Détection collusion et dumping
- **Sourcing web gratuit** : Découverte via RSS/Sitemap sans APIs payantes
- **Fusion candidats** : Internes + externes avec scoring unifié

### 🎨 Interface Moderne
- Interface React/TypeScript responsive
- Dashboard IA avec métriques temps réel
- Composants UI avancés (shadcn/ui)
- Système de notifications intelligentes

## 🏗️ Architecture

```
/apps
  /api        # Node.js, TypeScript, Fastify, Prisma
  /ml         # Python, FastAPI, scikit-learn, LightGBM
  /worker     # BullMQ, jobs asynchrones
  /ingestion  # Sourcing web, crawling, enrichissement
/packages
  /core       # Utilitaires scoring, fairness, diversity
/client       # React, TypeScript, Vite
/infra        # Docker, PostgreSQL, Redis, données
```

## 🚀 Démarrage Rapide

```bash
# Mode Docker (recommandé)
docker-compose up --build

# Mode développement
npm install
npm run dev
```

**Accès:**
- App: http://localhost:5000
- API: http://localhost:3000
- ML Service: http://localhost:8001

## ⚙️ Configuration Mode ÉCO

Le projet fonctionne en **mode gratuit** par défaut :

```env
# Mode ÉCO - Pas d'APIs payantes
OFFLINE_MODE=false
FEATURE_SOURCING=true
FEATURE_API_CONNECTORS=false
FEATURE_CRAWLER=true

# Sourcing web gratuit
DOMAIN_WHITELIST="*.gouv.fr,*.insee.fr,*.cci.fr,*.pagesjaunes.fr"
RATE_LIMIT_PER_DOMAIN_RPS=1
USER_AGENT="TestMarketplaceBot/0.1 (+contact@exemple.fr)"

# ML local
EMBEDDINGS_ENABLED=false
BM25_ENABLED=true
```

## 🤖 Fonctionnalités IA - 12 Innovations Complètes

### 🧠 **IA Prédictive & Analytics** (Phases 1-2)
1. **AI Success Predictor** : Probabilité de succès mission en temps réel
2. **Neural Pricing Engine** : Prix optimal basé sur 50+ facteurs
3. **Semantic Deep Matching** : Correspondance sémantique avancée
4. **Predictive Analytics Suite** : Prévisions revenus & ROI

### 🛡️ **Trust & Sécurité** (Phases 3-4) 
5. **Trust Layer Blockchain** : Réputation décentralisée & infalsifiable
6. **Advanced Fraud Detection** : Détection collusion & dumping
7. **Voice-to-Brief** : Création briefs par dictée vocale
8. **AI Concierge** : Assistant intelligent brief structuré

### 🚀 **Collaboration & Intelligence** (Phases 5-6)
9. **Market Intelligence Dashboard** : Alertes & tendances temps réel
10. **Collaborative AI Workspace** : Gestion projets avec IA
11. **Adaptive Learning Engine** : Apprentissage continu & personnalisation
12. **Advanced Analytics** : Intelligence marché prédictive

### 1. Standardisation Automatique ✅
```typescript
// Analyse et structure un brief client avec IA avancée
const standardization = await aiService.standardizeProject({
  title: "Site e-commerce",
  description: "Je veux un site pour vendre mes produits...",
  category: "web-development"
});
// Retourne: score qualité, compétences détectées, prix suggéré, complexité
```

### 2. Neural Pricing Engine ✅
```typescript
// Prix optimal avec 50+ facteurs
const pricing = await aiService.calculateNeuralPricing({
  project: briefData,
  market_context: marketData,
  provider_profile: providerData
});
// Retourne: prix optimal, fourchette, confiance, facteurs
```

### 3. Semantic Deep Matching ✅
```typescript
// Matching sémantique profond
const matches = await aiService.performSemanticMatching({
  mission: missionData,
  providers: providersPool,
  context: 'urgency_high'
});
// Retourne: correspondances scorées, explications, recommandations
```

## 📊 Données et ML

### Services Python (FastAPI)
- **TextNormalizer** : Extraction quantités, prix, contraintes géo
- **Taxonomizer** : Classification automatique + compétences
- **BriefQualityAnalyzer** : Score qualité + informations manquantes
- **AbuseDetector** : Détection collusion/dumping

### Scoring Avancé
- Poids adaptatifs selon contexte (urgence, complexité, marché)
- Ajustements ML basés sur l'historique
- Détection d'anomalies sophistiquée
- Recommandations intelligentes

## 🌐 Sourcing Web

### Mode ÉCO (Gratuit)
- Découverte via RSS feeds et sitemaps
- Respect robots.txt et rate limiting
- Parsing intelligent des pages entreprises
- Extraction automatique : SIREN, compétences, contact

### Pipeline de Traitement
1. **Découverte** : RSS/Sitemap discovery
2. **Crawling** : Respect rate limits + robots.txt  
3. **Extraction** : Parsing entreprises + signaux
4. **Enrichissement** : Classification + scoring
5. **Matching** : Fusion avec candidats internes

## 🎯 **Accès Rapide aux 12 Innovations IA**

### Navigation Principale
- **Navbar** → "IA Avancée" : Accès direct aux 12 fonctionnalités
- **Dashboard** → "IA Avancée (12 innovations)" : Bouton action rapide
- **Profil** → Assistant IA complet avec analyse avancée

### Assistant IA Profil (Nouveau)
- 🎯 **Génération contenu** : Titre, bio, mots-clés automatiques
- 🔍 **Analyse complétude** : Score détaillé + recommandations
- 📈 **Optimisation marché** : Positionnement intelligent
- 🧠 **12 Innovations** : Accès direct depuis le profil

### Fonctionnalités par Onglet
- **Trust Layer** : Réputation blockchain, badges confiance
- **Market Intelligence** : Alertes temps réel, tendances
- **Workspace IA** : Collaboration intelligente, détection blocages
- **Apprentissage** : ML adaptatif, méta-learning, auto-amélioration

## 📈 Système de Scoring Neural

### Critères Principaux Améliorés
- **Prix** (25%) : Neural pricing + compétitivité marché
- **Qualité** (20%) : Trust score blockchain + historique
- **Correspondance** (20%) : Matching sémantique profond
- **Délai** (15%) : Prédiction IA + réactivité
- **Risque** (10%) : Détection fraude + patterns
- **LOC** (10%) : Probabilité succès prédictive

### Ajustements Intelligents
- Poids adaptatifs selon urgence/complexité
- Bonus qualité brief standardisé
- Pénalités informations manquantes
- Détection dumping/prix suspects

## 🛡️ Anti-Abus

### Détection Automatique
- **Collusion** : Patterns suspects entre offres
- **Dumping** : Prix anormalement bas
- **Profils artificiels** : Scores trop parfaits
- **Incohérences** : Expérience vs prix

## 📱 Interface Utilisateur

### Composants Clés
- **ProjectStandardizer** : Interface standardisation IA
- **AdvancedScoringEngine** : Scoring transparent
- **IntelligentBiddingGuide** : Accompagnement enchères
- **MarketHeatIndicator** : Tension marché temps réel
- **SmartNotifications** : Alertes contextuelles

## 🔧 APIs Complètes - 12 Innovations

### APIs IA Prédictive
```typescript
// Success Prediction
POST /api/ai/predict/mission-success
POST /api/ai/pricing/neural  
POST /api/ai/matching/semantic-deep

// Analytics Avancées  
POST /api/ai/advanced-analytics
GET  /api/ai/market-intelligence
POST /api/ai/revenue-prediction
```

### APIs Trust & Sécurité
```typescript
// Trust Layer Blockchain
GET  /api/ai/trust-score/:userId
POST /api/ai/verify-reputation
GET  /api/ai/trust-badges/:userId

// Fraud Detection
POST /api/ai/detect-fraud
GET  /api/ai/risk-assessment/:projectId
```

### APIs Collaboration & Profil
```typescript
// Workspace Collaboratif
GET  /api/ai/workspace/:projectId
POST /api/ai/detect-blockers
GET  /api/ai/team-insights

// Profil IA (Nouveau)
POST /api/ai/analyze-profile
POST /api/ai/market-optimization
GET  /api/ai/smart-feed
POST /api/ai/assistant-suggestions
```

### APIs Legacy (Maintenues)
```typescript
// Standardisation
POST /api/ai/projects/:id/standardize
GET  /api/projects/:id/standardized

// Sourcing
POST /api/sourcing/discover
GET  /api/sourcing/project/:id/candidates

// Scoring
POST /api/ai/score
GET  /api/ai/projects/:id/preview-scoring
```

## 📦 Technologies

### Backend
- **Node.js** + TypeScript + Fastify
- **Python** + FastAPI + scikit-learn
- **PostgreSQL** + Prisma ORM
- **Redis** + BullMQ
- **Docker** + docker-compose

### Frontend
- **React** + TypeScript + Vite
- **Tailwind CSS** + shadcn/ui
- **TanStack Query** + Zustand
- **Recharts** + Lucide Icons

### ML/IA
- **scikit-learn** : Classification, clustering
- **LightGBM** : Gradient boosting
- **TF-IDF/BM25** : Matching sémantique
- **sentence-transformers** : Embeddings (optionnel)

## 🆕 **Mise à Jour du Jour - 12 Innovations IA Complètes**

### ✅ **Nouvelles Fonctionnalités Ajoutées**
- **Trust Layer Blockchain** : Réputation décentralisée + badges confiance
- **Market Intelligence Dashboard** : Alertes temps réel + prédictions
- **Collaborative AI Workspace** : Gestion projets intelligente
- **Adaptive Learning Engine** : ML auto-amélioration continue
- **AI Concierge Profil** : Assistant IA intégré au profil utilisateur

### 🎯 **Accès Utilisateur Facilité**
- **Navigation améliorée** : Bouton "IA Avancée" dans navbar + dashboard
- **Assistant IA Profil** : 8 boutons IA dans section profil (génération + analyse)
- **12 Innovations en 1 clic** : Page dédiée `/ai-advanced` avec tous les outils
- **APIs complètes** : 20+ nouveaux endpoints pour toutes les fonctionnalités

### 🚀 **Impact Utilisateur**
- **Profil optimisé** : Complétude automatique + recommandations marché
- **Décisions éclairées** : Prédictions succès + pricing neural
- **Collaboration fluide** : Workspace IA + détection blocages
- **Confiance renforcée** : Trust score blockchain + vérifications

## 🎯 Roadmap Actualisé

### Phase 1-2 : IA Prédictive ✅ **TERMINÉ**
- [x] AI Success Predictor - Prédiction succès missions
- [x] Neural Pricing Engine - Prix optimal 50+ facteurs  
- [x] Semantic Deep Matching - Correspondance avancée
- [x] Predictive Analytics - Revenus & ROI prédictifs

### Phase 3-4 : Trust & Collaboration ✅ **TERMINÉ**
- [x] Trust Layer Blockchain - Réputation décentralisée
- [x] Fraud Detection - Anti-collusion & dumping
- [x] Voice-to-Brief - Dictée vocale intelligente
- [x] AI Concierge - Assistant brief structuré

### Phase 5-6 : Intelligence & Apprentissage ✅ **TERMINÉ**
- [x] Market Intelligence - Alertes & tendances temps réel
- [x] Collaborative AI Workspace - Gestion projets IA
- [x] Adaptive Learning Engine - ML personnalisé
- [x] Assistant IA Profil - Optimisation utilisateur

### Phase 7 : Scale & Mobile 🚧 **EN COURS**
- [ ] Mobile app React Native
- [ ] API publique v2
- [ ] Multi-tenant SaaS
- [ ] IA conversationnelle voice

## 📄 Licence

MIT License - Voir [LICENSE](LICENSE) pour plus de détails.

---

**💡 Astuce** : Utilisez `docker-compose up` pour un démarrage complet en une commande !
