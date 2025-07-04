
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-600 to-amber-600 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Bienvenidos a Sabor Auténtico
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Descubre los sabores más exquisitos de la cocina tradicional en un ambiente único y acogedor
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-lg">4.9/5 Estrellas</span>
            </div>
            
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Centro de la Ciudad</span>
            </div>
            
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>Abierto 11:00 - 23:00</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
          >
            Ver Nuestro Menú
          </Button>
        </div>
      </div>
    </section>
  );
};
