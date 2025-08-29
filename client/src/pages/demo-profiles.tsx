import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, MapPin, Clock, CheckCircle, Award, TrendingUp } from 'lucide-react';

const demoProfiles = [
  {
    id: 1,
    name: "Sophie Dubois",
    role: "Développeuse Full-Stack",
    location: "Paris, France",
    rating: 4.9,
    reviewCount: 127,
    completedProjects: 89,
    responseTime: "< 2h",
    skills: ["React", "Node.js", "TypeScript", "MongoDB"],
    hourlyRate: "45-65 €/h",
    availability: "Disponible",
    verified: true,
    topRated: true,
    description: "Spécialisée dans le développement d'applications web modernes avec React et Node.js. 5 ans d'expérience en développement full-stack.",
    recentWork: ["E-commerce Shopify", "Dashboard Analytics", "API REST"]
  },
  {
    id: 2,
    name: "Marc Leroy",
    role: "Designer UX/UI",
    location: "Lyon, France",
    rating: 4.8,
    reviewCount: 93,
    completedProjects: 156,
    responseTime: "< 4h",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    hourlyRate: "40-55 €/h",
    availability: "Occupé jusqu'au 15/02",
    verified: true,
    topRated: false,
    description: "Designer UX/UI passionné par la création d'expériences utilisateur intuitives et engageantes. Expertise en design thinking.",
    recentWork: ["App Mobile Fintech", "Site E-commerce", "SaaS Dashboard"]
  },
  {
    id: 3,
    name: "Julie Martin",
    role: "Consultante Marketing Digital",
    location: "Marseille, France",
    rating: 4.7,
    reviewCount: 64,
    completedProjects: 78,
    responseTime: "< 1h",
    skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
    hourlyRate: "35-50 €/h",
    availability: "Disponible",
    verified: true,
    topRated: true,
    description: "Experte en marketing digital avec une approche data-driven. Spécialisée dans l'acquisition et la conversion.",
    recentWork: ["Campagne Google Ads", "Stratégie SEO", "Social Media Management"]
  }
];

export default function DemoProfiles() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Profils de Prestataires - Démonstration
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez des profils de prestataires qualifiés. Ces profils sont des exemples 
            pour démontrer les fonctionnalités de notre plateforme.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4 items-center justify-center">
          <Badge variant="outline">Tous les domaines</Badge>
          <Badge variant="outline">Développement</Badge>
          <Badge variant="outline">Design</Badge>
          <Badge variant="outline">Marketing</Badge>
          <Badge variant="outline">Disponible uniquement</Badge>
          <Badge variant="outline">Top rated</Badge>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProfiles.map((profile) => (
            <Card key={profile.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.name}`} />
                      <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        {profile.name}
                        {profile.verified && <CheckCircle className="w-4 h-4 text-green-500" />}
                        {profile.topRated && <Award className="w-4 h-4 text-amber-500" />}
                      </CardTitle>
                      <CardDescription className="text-sm">{profile.role}</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Location & Availability */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{profile.responseTime}</span>
                  </div>
                </div>

                {/* Rating & Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-medium">{profile.rating}</span>
                      <span className="text-sm text-gray-600">({profile.reviewCount})</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>{profile.completedProjects} projets</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 line-clamp-2">
                  {profile.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1">
                  {profile.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Availability & Rate */}
                <div className="flex items-center justify-between text-sm">
                  <span className={`font-medium ${
                    profile.availability.includes('Disponible') ? 'text-green-600' : 'text-orange-600'
                  }`}>
                    {profile.availability}
                  </span>
                  <span className="font-medium text-gray-900">{profile.hourlyRate}</span>
                </div>

                {/* Recent Work */}
                <div>
                  <p className="text-xs font-medium text-gray-700 mb-2">Travaux récents:</p>
                  <div className="flex flex-wrap gap-1">
                    {profile.recentWork.map((work, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {work}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1" size="sm">
                    Contacter
                  </Button>
                  <Button variant="outline" size="sm">
                    Voir profil
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Vous êtes prestataire ?
          </h3>
          <p className="text-gray-600 mb-6">
            Rejoignez notre plateforme et commencez à recevoir des missions qualifiées dès aujourd'hui.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Créer mon profil prestataire
          </Button>
        </div>
      </div>
    </div>
  );
}