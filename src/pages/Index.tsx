
import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { FoodCarousel } from '@/components/FoodCarousel';
import { AboutSection } from '@/components/AboutSection';
import { LoginModal } from '@/components/LoginModal';
import { RegisterModal } from '@/components/RegisterModal';
import { PromotionsModal } from '@/components/PromotionsModal';
import { MenuModal } from '@/components/MenuModal';

const Index = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showPromotions, setShowPromotions] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <Navigation 
        onLogin={() => setShowLogin(true)}
        onRegister={() => setShowRegister(true)}
        onPromotions={() => setShowPromotions(true)}
        onMenu={() => setShowMenu(true)}
      />
      
      <Hero />
      <FoodCarousel />
      <AboutSection />
      
      <LoginModal 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)}
        onSwitchToRegister={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
      />
      
      <RegisterModal 
        isOpen={showRegister} 
        onClose={() => setShowRegister(false)}
        onSwitchToLogin={() => {
          setShowRegister(false);
          setShowLogin(true);
        }}
      />
      
      <PromotionsModal 
        isOpen={showPromotions} 
        onClose={() => setShowPromotions(false)} 
      />
      
      <MenuModal 
        isOpen={showMenu} 
        onClose={() => setShowMenu(false)} 
      />
    </div>
  );
};

export default Index;
