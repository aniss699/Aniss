import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { users, projects, bids } from '../shared/schema.js';

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

async function seedDemo() {
  console.log('🌱 Création des données de démonstration...');

  try {
    // Créer utilisateur démo client
    const [demoClient] = await db
      .insert(users)
      .values({
        email: 'demo@appelspro.com',
        password: 'demo123', // En production, cela devrait être hashé
        name: 'Marie Dubois',
        role: 'CLIENT',
        rating_mean: '4.6',
        rating_count: 23,
        profile_data: {
          company: 'StartupTech Paris',
          sector: 'E-commerce',
          projects_posted: 15,
          total_budget_spent: 45000,
          verified: true,
          phone: '+33 1 42 86 97 34',
          location: 'Paris, France'
        }
      })
      .returning();

    // Créer utilisateur démo prestataire
    const [demoProvider] = await db
      .insert(users)
      .values({
        email: 'prestataire@appelspro.com',
        password: 'demo123',
        name: 'Alexandre Martin',
        role: 'PRO',
        rating_mean: '4.8',
        rating_count: 89,
        profile_data: {
          specialties: ['React', 'Node.js', 'TypeScript', 'Python', 'AWS'],
          hourly_rate: 75,
          availability: 'Disponible',
          experience_years: 7,
          completed_projects: 156,
          success_rate: 0.94,
          response_time_hours: 2,
          certifications: ['AWS Solutions Architect', 'React Professional'],
          portfolio_url: 'https://alexandremartin.dev',
          linkedin: 'https://linkedin.com/in/alexandremartin',
          phone: '+33 6 42 78 56 89',
          location: 'Lyon, France'
        }
      })
      .returning();

    // Créer utilisateur admin
    const [demoAdmin] = await db
      .insert(users)
      .values({
        email: 'admin@appelspro.com',
        password: 'admin123',
        name: 'Sophie Leroy',
        role: 'ADMIN',
        profile_data: {
          department: 'Platform Management',
          access_level: 'full',
          phone: '+33 1 45 67 89 23'
        }
      })
      .returning();

    // Créer des projets démo
    const [project1] = await db
      .insert(projects)
      .values({
        title: 'Développement d\'une marketplace SaaS B2B',
        description: 'Recherche d\'un développeur full-stack expérimenté pour créer une marketplace SaaS B2B complète. Le projet inclut : système d\'authentification multi-tenant, API REST robuste, tableau de bord analytique temps réel, intégration de paiements avec Stripe, système de notifications en temps réel, interface d\'administration avancée. Technologies souhaitées : React/Next.js, Node.js, PostgreSQL, Redis, AWS. Méthode agile avec livrables hebdomadaires.',
        budget: '12000-18000',
        category: 'developpement',
        quality_target: 'high',
        risk_tolerance: '0.3',
        geo_required: false,
        status: 'published',
        client_id: demoClient.id
      })
      .returning();

    const [project2] = await db
      .insert(projects)
      .values({
        title: 'Application mobile React Native - Fintech',
        description: 'Développement d\'une application mobile fintech avec React Native pour la gestion financière personnelle. Fonctionnalités : connexion bancaire sécurisée (PSD2), analyse des dépenses avec IA, budgétisation intelligente, notifications push personnalisées, synchronisation multi-appareils. Sécurité maximale requise avec chiffrement bout-en-bout. Design moderne et UX intuitive. Compatible iOS et Android.',
        budget: '15000-25000',
        category: 'mobile',
        quality_target: 'high',
        risk_tolerance: '0.2',
        geo_required: true,
        onsite_radius_km: 50,
        status: 'published',
        client_id: demoClient.id
      })
      .returning();

    const [project3] = await db
      .insert(projects)
      .values({
        title: 'Intégration IA et Machine Learning avancée',
        description: 'Intégration d\'intelligence artificielle dans une plateforme e-commerce existante. Développement de : système de recommandations personnalisées avec deep learning, analyse prédictive des ventes, détection automatique de fraude, optimisation dynamique des prix, chatbot conversationnel avec NLP. Technologies : Python, TensorFlow/PyTorch, FastAPI, Docker, Kubernetes. Expérience ML/IA requise.',
        budget: '20000-35000',
        category: 'intelligence-artificielle',
        quality_target: 'high',
        risk_tolerance: '0.4',
        geo_required: false,
        status: 'published',
        client_id: demoClient.id
      })
      .returning();

    // Créer des offres démo
    await db.insert(bids).values([
      {
        project_id: project1.id,
        provider_id: demoProvider.id,
        amount: '14500.00',
        timeline_days: 45,
        message: 'Bonjour Marie, Expert en développement SaaS avec 7 ans d\'expérience. J\'ai développé 12 marketplaces similaires incluant multi-tenancy et intégrations de paiement. Mon approche : architecture microservices scalable, tests automatisés, CI/CD, livrables hebdomadaires. Portfolio : [liens projets]. Disponible immédiatement, 35h/semaine. Garantie de qualité et support post-lancement inclus.',
        score_breakdown: {
          price_score: 85,
          experience_score: 92,
          timeline_score: 88,
          technical_fit: 94,
          communication_score: 89,
          overall_score: 90
        },
        is_leading: true,
        flagged: false
      },
      {
        project_id: project2.id,
        provider_id: demoProvider.id,
        amount: '18500.00',
        timeline_days: 60,
        message: 'Salut ! Spécialiste React Native avec expertise fintech. J\'ai développé 8 apps financières conformes PSD2. Mon plus récent projet : app de crypto-trading avec 50k+ utilisateurs. Méthode : MVP en 30j puis itérations, sécurité maximale, tests automatisés iOS/Android. Certifié AWS Security. Références disponibles. Planning : démarrage immédiat.',
        score_breakdown: {
          price_score: 78,
          experience_score: 96,
          timeline_score: 85,
          technical_fit: 98,
          communication_score: 87,
          overall_score: 92
        },
        is_leading: true,
        flagged: false
      }
    ]);

    console.log('✅ Données de démonstration créées avec succès !');
    console.log('\n🔑 Comptes créés :');
    console.log(`
👤 CLIENT DÉMO
Email: demo@appelspro.com  
Mot de passe: demo123
Rôle: Client
Nom: Marie Dubois

👨‍💻 PRESTATAIRE DÉMO  
Email: prestataire@appelspro.com
Mot de passe: demo123
Rôle: Prestataire  
Nom: Alexandre Martin

👑 ADMIN DÉMO
Email: admin@appelspro.com
Mot de passe: admin123
Rôle: Administrateur
Nom: Sophie Leroy
`);
    
    console.log('\n📊 Données créées :');
    console.log(`- ${3} utilisateurs`);
    console.log(`- ${3} projets`); 
    console.log(`- ${2} offres`);

  } catch (error) {
    console.error('❌ Erreur lors de la création des données démo:', error);
    process.exit(1);
  }

  process.exit(0);
}

seedDemo();