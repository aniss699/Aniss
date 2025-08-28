import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/use-auth";
import { Navbar } from "@/components/layout/navbar";
import { paths } from "./routes/paths";
import Home from "@/pages/home";
import Marketplace from "@/pages/marketplace";
import Missions from '@/pages/missions';
import CreateMission from '@/pages/create-mission';
import Legal from '@/pages/legal';
import Features from '@/pages/features';
import Profile from '@/pages/profile';
import Messages from '@/pages/messages';
import AvailableProviders from './pages/available-providers';
import NotFound from "@/pages/not-found";
import Dashboard from "./pages/dashboard";
import AIFeatures from "./pages/ai-features";
import AITest from "./pages/ai-test";
import AIDashboard from "./pages/ai-dashboard";
import ProjectImprove from './pages/project-improve';
import AIAdvancedFeatures from './pages/ai-advanced-features';
import { ProfileDashboard } from './profile/ProfileDashboard';
import { ProfileWizard } from './profile/ProfileWizard';
import { ProfilePublicView } from './profile/ProfilePublicView';
import DemoMissions from './pages/demo-missions';
import Services from './pages/services';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Switch>
              <Route path={paths.home} component={Home} />
              <Route path={paths.marketplace} component={Marketplace} />
              <Route path={paths.availableProviders} component={AvailableProviders} />
              <Route path={paths.aiFeatures} component={AIFeatures} />
              <Route path={paths.aiTest} component={AITest} />
              <Route path={paths.features} component={Features} />
              <Route path={paths.profile} component={Profile} />
              <Route path={paths.missionDetail()} component={Missions} />
              <Route path={paths.missions} component={Missions} />
              <Route path={paths.createMission} component={CreateMission} />
              <Route path={paths.messages} component={Messages} />
              <Route path={paths.legal} component={Legal} />
              <Route path={paths.dashboard} component={Dashboard} />
              <Route path={paths.aiDashboard} component={AIDashboard} />
              <Route path="/project-improve" component={ProjectImprove} />
              <Route path="/profil" component={ProfileDashboard} />
              <Route path="/profil/editer" component={ProfileWizard} />
              <Route path="/profil/:userId" component={ProfilePublicView} />
              <Route path="/ai-advanced" component={AIAdvancedFeatures} />
              <Route path="/demo/missions" component={DemoMissions} />
              <Route path="/demo/profils" component={AvailableProviders} />
              <Route path="/demo/ia" component={AIFeatures} />
              <Route path="/services" component={Services} />
              <Route path="/services/:type" component={Services} />

              {/* Redirections compatibilité anciennes URLs */}
              <Route path="/mes-missions">
                {() => <Redirect to={paths.missions} />}
              </Route>
              <Route path="/mission/new">
                {() => <Redirect to={paths.createMission} />}
              </Route>
              <Route path="/mission/:id">
                {(params) => <Redirect to={paths.missionDetail(params.id)} />}
              </Route>
              <Route path="/projet/new">
                {() => <Redirect to={paths.createMission} />}
              </Route>
              <Route path="/project/:id">
                {(params) => <Redirect to={paths.missionDetail(params.id)} />}
              </Route>

              {/* 404 */}
              <Route path={paths.notFound} component={NotFound} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
          <Toaster />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;