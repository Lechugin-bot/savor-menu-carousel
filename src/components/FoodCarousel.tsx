
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const foodItems = [
  {
    id: 1,
    name: "Paella Valenciana",
    description: "Auténtica paella con mariscos frescos, pollo y azafrán",
    price: "$28.99",
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    name: "Tacos de Carnitas",
    description: "Suaves tortillas con carnitas tradicionales y salsa verde",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    name: "Salmón a la Parrilla",
    description: "Salmón fresco con verduras asadas y salsa de limón",
    price: "$32.99",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    name: "Pasta Carbonara",
    description: "Pasta fresca con panceta, huevo y queso parmesano",
    price: "$22.99",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800&h=600&fit=crop"
  }
];

export const FoodCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === foodItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? foodItems.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestros Platillos Estrella
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada platillo es preparado con ingredientes frescos y las mejores técnicas culinarias
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {foodItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-8 mx-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="order-2 md:order-1">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">
                          {item.name}
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-orange-600">
                            {item.price}
                          </span>
                          <Button className="bg-orange-600 hover:bg-orange-700">
                            Ordenar Ahora
                          </Button>
                        </div>
                      </div>
                      <div className="order-1 md:order-2">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="flex justify-center mt-6 space-x-2">
            {foodItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-orange-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
