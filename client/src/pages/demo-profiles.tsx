import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, MapPin, Clock, CheckCircle, Award, TrendingUp, Users, Briefcase, Phone, Globe } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

interface DemoProvider {
  id: number;
  name: string;
  email: string;
  role: string;
  rating_mean: string;
  rating_count: number;
  profile_data: any;
  created_at: string;
}

export default function DemoProfiles() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/demo-providers'],
    queryFn: async () => {
      const response = await fetch('/api/demo-providers');
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des prestataires');
      }
      return response.json();
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Chargement des profils...</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-24"></div>
                      <div className="h-3 bg-gray-200 rounded w-20"></div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-red-600 mb-4">Erreur de chargement</h1>
            <p className="text-gray-600">Impossible de charger les profils de prestataires.</p>
          </div>
        </div>
      </div>
    );
  }

  const providers: DemoProvider[] = data?.providers || [];

  const formatProvider = (provider: DemoProvider) => {
    const profileData = provider.profile_data || {};
    return {
      id: provider.id,
      name: provider.name || 'Nom non disponible',
      role: getRoleDisplay(provider.role),
      location: profileData.location || 'Location non spécifiée',
      rating: parseFloat(provider.rating_mean || '0'),
      reviewCount: provider.rating_count || 0,
      completedProjects: profileData.completed_projects || 0,
      responseTime: `${profileData.response_time_hours || 'N/A'}h`,
      skills: profileData.specialties || [],
      hourlyRate: profileData.hourly_rate ? `${profileData.hourly_rate}€/h` : 'Tarif à discuter',
      availability: profileData.availability || 'Non spécifié',
      verified: true,
      topRated: parseFloat(provider.rating_mean || '0') >= 4.5,
      description: getDescriptionFromRole(provider.role, profileData),
      phone: profileData.phone || null,
      portfolio: profileData.portfolio_url || null,
      linkedin: profileData.linkedin || null,
      experienceYears: profileData.experience_years || null,
      successRate: profileData.success_rate || null,
      email: provider.email
    };
  };

  const getRoleDisplay = (role: string) => {
    switch(role) {
      case 'PRO': return 'Prestataire Expert';
      case 'CLIENT': return 'Client';
      case 'ADMIN': return 'Administrateur';
      default: return role;
    }
  };

  const getDescriptionFromRole = (role: string, profileData: any) => {
    if (role === 'PRO') {
      const exp = profileData.experience_years;
      const projects = profileData.completed_projects;
      const skills = profileData.specialties || [];
      
      return `Prestataire expert avec ${exp || 'plusieurs'} années d'expérience. ${projects ? `${projects} projets réalisés.` : ''} Spécialisé en : ${skills.slice(0, 3).join(', ')}.`;
    }
    return 'Professionnel expérimenté sur la plateforme AppelsPro.';
  };
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
          {providers.map((providerData) => {
            const profile = formatProvider(providerData);
            return (
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
                {profile.skills.length > 3 && (
                  <div>
                    <p className="text-xs font-medium text-gray-700 mb-2">Spécialisations:</p>
                    <div className="flex flex-wrap gap-1">
                      {profile.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

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
            );
          })}
        </div>

        {/* Additional info section for real data */}
        {providers.length > 0 && (
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-900">
                Données Réelles de la Base
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span><strong>{providers.length}</strong> prestataires chargés</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-blue-600" />
                <span>Notes moyennes réelles</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <span>Profils complets avec spécialités</span>
              </div>
            </div>
            <p className="mt-3 text-blue-700 text-sm">
              Ces profils sont tirés directement de la base de données PostgreSQL avec toutes les informations réelles saisies lors de la création des comptes démo.
            </p>
          </div>
        )}
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