
import { Award, Users, Clock, Heart } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Sobre Sabor Auténtico
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde 1985, hemos servido a nuestra comunidad con pasión, dedicación y los sabores más auténticos 
            que harán de tu experiencia gastronómica algo inolvidable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1555992336-03a23c9e3018?w=600&h=400&fit=crop"
              alt="Interior del restaurante"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Nuestra Historia
            </h3>
            <p className="text-gray-600 mb-4">
              Todo comenzó con una receta familiar transmitida de generación en generación. 
              Hoy, continuamos esa tradición combinando técnicas ancestrales con innovación culinaria.
            </p>
            <p className="text-gray-600 mb-6">
              Nuestro chef ejecutivo, con más de 20 años de experiencia, dirige un equipo 
              apasionado que se dedica a crear experiencias gastronómicas únicas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-orange-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">38 Años</h4>
            <p className="text-gray-600">De Experiencia</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-orange-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">50,000+</h4>
            <p className="text-gray-600">Clientes Satisfechos</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">365 Días</h4>
            <p className="text-gray-600">Abierto al Año</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-orange-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">100%</h4>
            <p className="text-gray-600">Hecho con Amor</p>
          </div>
        </div>
      </div>
    </section>
  );
};
