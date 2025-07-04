
import { Button } from '@/components/ui/button';
import { ChefHat, User, LogIn, Tag, Menu } from 'lucide-react';

interface NavigationProps {
  onLogin: () => void;
  onRegister: () => void;
  onPromotions: () => void;
  onMenu: () => void;
}

export const Navigation = ({ onLogin, onRegister, onPromotions, onMenu }: NavigationProps) => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold text-gray-800">Sabor Auténtico</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={onLogin}
              className="hover:bg-orange-100 transition-colors"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Iniciar Sesión
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={onRegister}
              className="hover:bg-orange-100 transition-colors"
            >
              <User className="h-4 w-4 mr-2" />
              Registrarse
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={onPromotions}
              className="hover:bg-orange-100 transition-colors"
            >
              <Tag className="h-4 w-4 mr-2" />
              Promociones
            </Button>
            
            <Button 
              onClick={onMenu}
              className="bg-orange-600 hover:bg-orange-700 text-white transition-colors"
            >
              <Menu className="h-4 w-4 mr-2" />
              Menú General
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost"
              onClick={onMenu}
              className="hover:bg-orange-100"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
