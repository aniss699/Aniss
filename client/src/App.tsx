import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/hooks/use-auth';
import Navbar from '@/components/layout/navbar';
import { queryClient } from '@/lib/queryClient';

// Lazy load pages for better performance
const Home = React.lazy(() => import('@/pages/home'));
const Marketplace = React.lazy(() => import('@/pages/marketplace'));
const Missions = React.lazy(() => import('@/pages/missions'));
const CreateMission = React.lazy(() => import('@/pages/create-mission'));
const Profile = React.lazy(() => import('@/pages/profile'));
const Dashboard = React.lazy(() => import('@/pages/dashboard'));
const Messages = React.lazy(() => import('@/pages/messages'));
const Services = React.lazy(() => import('@/pages/services'));
const Legal = React.lazy(() => import('@/pages/legal'));
const Features = React.lazy(() => import('@/pages/features'));
const AIFeatures = React.lazy(() => import('@/pages/ai-features'));
const AIDashboard = React.lazy(() => import('@/pages/ai-dashboard'));
const AIAdvancedFeatures = React.lazy(() => import('@/pages/ai-advanced-features'));
const AITest = React.lazy(() => import('@/pages/ai-test'));
const NotFound = React.lazy(() => import('@/pages/not-found'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <AuthProvider>
          <Router>
            <div className="min-h-screen bg-background">
              <Navbar />
              <main className="pt-16">
                <Suspense fallback={<LoadingSpinner />}>
                  <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/marketplace" component={Marketplace} />
                    <Route path="/missions" component={Missions} />
                    <Route path="/create-mission" component={CreateMission} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/messages" component={Messages} />
                    <Route path="/services" component={Services} />
                    <Route path="/legal" component={Legal} />
                    <Route path="/features" component={Features} />
                    <Route path="/ai-features" component={AIFeatures} />
                    <Route path="/ai-dashboard" component={AIDashboard} />
                    <Route path="/ai-advanced" component={AIAdvancedFeatures} />
                    <Route path="/ai-test" component={AITest} />
                    <Route component={NotFound} />
                  </Switch>
                </Suspense>
              </main>
              <Toaster />
            </div>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;