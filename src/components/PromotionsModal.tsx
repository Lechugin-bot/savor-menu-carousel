
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tag, Clock, Star, Utensils } from 'lucide-react';

interface PromotionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const promotions = [
  {
    id: 1,
    title: "Lunes de Paella",
    description: "Toda nuestra selección de paellas con 25% de descuento",
    discount: "25% OFF",
    validUntil: "Válido solo los lunes",
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400&h=300&fit=crop",
    type: "Descuento"
  },
  {
    id: 2,
    title: "Happy Hour",
    description: "2x1 en bebidas seleccionadas de 5:00 PM a 7:00 PM",
    discount: "2x1",
    validUntil: "Lunes a Viernes 5-7 PM",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop",
    type: "Especial"
  },
  {
    id: 3,
    title: "Menú Familiar",
    description: "Entrada + 2 platos principales + postre + bebidas para 4 personas",
    discount: "$89.99",
    validUntil: "Fines de semana",
    image: "https://images.unsplash.com/photo-1555992336-03a23c9e3018?w=400&h=300&fit=crop",
    type: "Combo"
  },
  {
    id: 4,
    title: "Miércoles de Tacos",
    description: "Todos los tacos a precio especial + bebida gratis",
    discount: "$12.99",
    validUntil: "Solo miércoles",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    type: "Especial"
  }
];

export const PromotionsModal = ({ isOpen, onClose }: PromotionsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-800 flex items-center justify-center gap-2">
            <Tag className="h-6 w-6 text-orange-600" />
            Promociones de Hoy
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-6 mt-6">
          {promotions.map((promo) => (
            <div key={promo.id} className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200">
              <div className="grid md:grid-cols-3 gap-4 items-center">
                <div className="md:col-span-1">
                  <img 
                    src={promo.image} 
                    alt={promo.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                
                <div className="md:col-span-2 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{promo.title}</h3>
                      <p className="text-gray-600 mb-3">{promo.description}</p>
                    </div>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      {promo.type}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-orange-600">
                        {promo.discount}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {promo.validUntil}
                      </div>
                    </div>
                    
                    <Button className="bg-orange-600 hover:bg-orange-700">
                      <Utensils className="h-4 w-4 mr-2" />
                      Ordenar Ahora
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-orange-100 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Star className="h-5 w-5 text-orange-600" />
            <h4 className="font-semibold text-gray-800">¡Importante!</h4>
          </div>
          <p className="text-sm text-gray-600">
            Las promociones están sujetas a disponibilidad y no son acumulables con otras ofertas. 
            Válidas únicamente para consumo en restaurante. Presenta este cupón al momento de ordenar.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
