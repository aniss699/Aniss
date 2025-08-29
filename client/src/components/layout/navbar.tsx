
import { useState } from 'react';
import { useLocation } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { AuthModal } from '@/components/auth/auth-modal';
import { useAuth } from '@/hooks/use-auth';
import { ROUTES } from '@/routes/paths';
import { User, LogOut, Menu, X, Briefcase, Users, BarChart3, Target, Brain, MessageSquare, Search, Zap, TrendingUp, Plus, MonitorPlay, ChevronDown, PlusCircle } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { QuickMissionCreator } from '@/components/missions/quick-mission-creator';

export default function Navbar() {
  const [location, setLocation] = useLocation();
  const { user, logout } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [showQuickCreator, setShowQuickCreator] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAuthClick = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleLogout = () => {
    logout();
    setLocation('/');
  };

  const handleNavigation = (href: string) => {
    console.log('Navigation vers:', href);
    setLocation(href);
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({ href, children, className = "" }: { href: string, children: React.ReactNode, className?: string }) => (
    <button
      onClick={() => handleNavigation(href)}
      className={`text-gray-700 hover:text-blue-600 transition-colors cursor-pointer px-2 xl:px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap ${className} ${
        location === href ? 'text-blue-600 bg-blue-50' : ''
      }`}
    >
      {children}
    </button>
  );

  const MobileNavLink = ({ href, children, icon: Icon }: { href: string, children: React.ReactNode, icon: any }) => (
    <button
      onClick={() => handleNavigation(href)}
      className={`flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-gray-50 transition-all duration-200 cursor-pointer rounded-md ${
        location === href ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600 font-medium' : 'text-gray-700 hover:text-gray-900 hover:bg-blue-50'
      }`}
    >
      <Icon className={`w-5 h-5 ${location === href ? 'text-blue-600' : 'text-gray-500'}`} />
      <span>{children}</span>
    </button>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleNavigation(ROUTES.HOME)}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">AP</span>
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">AppelsPro</span>
            </button>
          </div>


          {/* User Menu / Auth Buttons */}
          <div className="flex items-center space-x-4">
            {/* Desktop quick mission creator button */}
            <Sheet open={showQuickCreator} onOpenChange={setShowQuickCreator}>
              <SheetTrigger asChild>
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Plus className="w-4 h-4 mr-1 xl:mr-2" />
                  <span className="hidden xl:inline">Nouvelle mission</span>
                  <span className="hidden lg:inline xl:hidden">Mission</span>
                  <span className="lg:hidden">Créer</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[400px] sm:w-[500px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-blue-600" />
                    Création rapide avec IA
                  </SheetTitle>
                  <SheetDescription>
                    Créez votre mission en quelques clics grâce à notre assistant IA intelligent.
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <QuickMissionCreator 
                    onSuccess={() => setShowQuickCreator(false)}
                  />
                </div>
              </SheetContent>
            </Sheet>

            {user ? (
              <div className="flex items-center space-x-4">
                {/* Desktop User Menu */}
                <div className="hidden xl:flex items-center space-x-3">
                  <button
                    onClick={() => handleNavigation('/missions')}
                    className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-2 text-sm"
                  >
                    Mes missions
                  </button>
                  <button
                    onClick={() => handleNavigation('/messages')}
                    className="text-gray-700 hover:text-blue-600 transition-colors relative px-2 py-2 text-sm"
                  >
                    Messages
                  </button>
                </div>

                {/* User Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2 hover:bg-gray-100">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {user.email.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <span className="hidden sm:block text-gray-700">{user.email.split('@')[0]}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem asChild>
                      <button
                        onClick={() => handleNavigation('/profile')}
                        className="flex items-center w-full"
                      >
                        <User className="w-4 h-4 mr-2" />
                        Profil
                      </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <button
                        onClick={() => handleNavigation('/dashboard')}
                        className="flex items-center w-full"
                      >
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Tableau de bord
                      </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="lg:hidden">
                      <button
                        onClick={() => handleNavigation('/missions')}
                        className="flex items-center w-full"
                      >
                        <Briefcase className="w-4 h-4 mr-2" />
                        Mes missions
                      </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="lg:hidden">
                      <button
                        onClick={() => handleNavigation('/messages')}
                        className="flex items-center w-full"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Messages
                      </button>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full text-red-600"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Déconnexion
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  onClick={() => handleNavigation('/login')}
                  className="hidden sm:flex"
                >
                  Se connecter
                </Button>
                <Button
                  onClick={() => handleAuthClick('register')}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Créer un compte
                </Button>
              </div>
            )}

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <SheetHeader className="sr-only">
                  <SheetTitle>Menu de navigation</SheetTitle>
                  <SheetDescription>
                    Menu principal de navigation pour mobile
                  </SheetDescription>
                </SheetHeader>
                
                <div className="py-6">
                  <div className="px-6 pb-4 border-b">
                    <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                  </div>

                  <div className="py-4 space-y-1">
                    <div className="px-2">
                      <MobileNavLink href="/marketplace" icon={Target}>
                        Missions
                      </MobileNavLink>
                      <MobileNavLink href="/available-providers" icon={Users}>
                        Prestataires
                      </MobileNavLink>
                      <MobileNavLink href="/services" icon={Briefcase}>
                        Services
                      </MobileNavLink>
                      <MobileNavLink href="/demo/profils" icon={Users}>
                        Profils Démo
                      </MobileNavLink>
                      <MobileNavLink href="/demo/ia" icon={Brain}>
                        IA en Action
                      </MobileNavLink>
                      <MobileNavLink href="/ai-dashboard" icon={Brain}>
                        <span className="flex items-center justify-between w-full">
                          IA Dashboard
                          <Badge className="bg-purple-100 text-purple-700 text-xs">NOUVEAU</Badge>
                        </span>
                      </MobileNavLink>
                      <MobileNavLink href="/ai-features" icon={Zap}>
                        IA Features
                      </MobileNavLink>
                      <MobileNavLink href="/ai-test" icon={Search}>
                        Test IA
                      </MobileNavLink>
                      <MobileNavLink href="/ai-advanced" icon={TrendingUp}>
                        IA Avancée
                      </MobileNavLink>
                      {user && (
                        <>
                          <MobileNavLink href="/dashboard" icon={BarChart3}>
                            Dashboard
                          </MobileNavLink>
                          <MobileNavLink href="/profile" icon={User}>
                            Mon Profil
                          </MobileNavLink>
                          <MobileNavLink href="/missions" icon={Briefcase}>
                            Mes Missions
                          </MobileNavLink>
                          <MobileNavLink href="/messages" icon={MessageSquare}>
                            Messages
                          </MobileNavLink>
                          <MobileNavLink href="/create-mission" icon={PlusCircle}>
                            Créer une Mission
                          </MobileNavLink>
                        </>
                      )}
                    </div>

                    {/* Mobile quick mission creator button */}
                    <div className="mt-6 px-4">
                      <Sheet open={showQuickCreator} onOpenChange={setShowQuickCreator}>
                        <SheetTrigger asChild className="w-full">
                          <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            <Plus className="w-4 h-4 mr-2" />
                            Nouvelle mission
                          </Button>
                        </SheetTrigger>
                        <SheetContent className="w-[400px] sm:w-[500px]">
                          <SheetHeader>
                            <SheetTitle className="flex items-center gap-2">
                              <Brain className="w-5 h-5 text-blue-600" />
                              Création rapide avec IA
                            </SheetTitle>
                            <SheetDescription>
                              Créez votre mission en quelques clics grâce à notre assistant IA intelligent.
                            </SheetDescription>
                          </SheetHeader>
                          <div className="mt-6">
                            <QuickMissionCreator 
                              onSuccess={() => {
                                setShowQuickCreator(false);
                                setIsMobileMenuOpen(false);
                              }}
                            />
                          </div>
                        </SheetContent>
                      </Sheet>
                    </div>

                    {/* Authentication buttons for mobile */}
                    {!user && (
                      <div className="px-4 py-4 border-t border-gray-200 mt-6">
                        <div className="space-y-3">
                          <Button
                            onClick={() => {
                              handleNavigation('/login');
                              setIsMobileMenuOpen(false);
                            }}
                            variant="outline"
                            className="w-full"
                          >
                            Se connecter
                          </Button>
                          <Button
                            onClick={() => {
                              handleAuthClick('register');
                              setIsMobileMenuOpen(false);
                            }}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                          >
                            Créer un compte
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={setAuthMode}
      />
    </nav>
  );
}
