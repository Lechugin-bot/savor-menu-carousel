
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChefHat, Leaf, Flame, Star } from 'lucide-react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuData = {
  appetizers: [
    { name: "Camarones al Ajillo", price: "$14.99", description: "Camarones frescos salteados en ajo y aceite de oliva", spicy: false, vegetarian: false },
    { name: "Guacamole Artesanal", price: "$9.99", description: "Preparado al momento con aguacates frescos", spicy: false, vegetarian: true },
    { name: "Ceviche de Pescado", price: "$16.99", description: "Pescado fresco marinado en limón con cebolla morada", spicy: true, vegetarian: false },
    { name: "Tabla de Quesos", price: "$18.99", description: "Selección de quesos artesanales con frutos secos", spicy: false, vegetarian: true }
  ],
  mains: [
    { name: "Paella Valenciana", price: "$28.99", description: "Auténtica paella con mariscos, pollo y azafrán", spicy: false, vegetarian: false },
    { name: "Salmón a la Parrilla", price: "$32.99", description: "Salmón atlántico con verduras asadas", spicy: false, vegetarian: false },
    { name: "Tacos de Carnitas", price: "$15.99", description: "Tortillas caseras con carnitas tradicionales", spicy: true, vegetarian: false },
    { name: "Risotto de Hongos", price: "$24.99", description: "Arroz arborio con mezcla de hongos silvestres", spicy: false, vegetarian: true },
    { name: "Churrasco Argentino", price: "$36.99", description: "Corte premium con chimichurri casero", spicy: false, vegetarian: false }
  ],
  desserts: [
    { name: "Tiramisu Clásico", price: "$8.99", description: "Postre italiano con café y mascarpone", spicy: false, vegetarian: true },
    { name: "Flan de Caramelo", price: "$7.99", description: "Flan casero con caramelo líquido", spicy: false, vegetarian: true },
    { name: "Brownie con Helado", price: "$9.99", description: "Brownie tibio con helado de vainilla", spicy: false, vegetarian: true },
    { name: "Tres Leches", price: "$8.99", description: "Pastel tradicional bañado en tres leches", spicy: false, vegetarian: true }
  ],
  drinks: [
    { name: "Sangría de la Casa", price: "$12.99", description: "Vino tinto con frutas frescas", spicy: false, vegetarian: true },
    { name: "Margarita Premium", price: "$14.99", description: "Tequila 100% agave con limón fresco", spicy: false, vegetarian: true },
    { name: "Agua Fresca del Día", price: "$4.99", description: "Bebida natural de frutas de temporada", spicy: false, vegetarian: true },
    { name: "Café de Olla", price: "$5.99", description: "Café tradicional con canela y piloncillo", spicy: false, vegetarian: true }
  ]
};

export const MenuModal = ({ isOpen, onClose }: MenuModalProps) => {
  const renderMenuItems = (items: typeof menuData.appetizers) => (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold text-gray-800">{item.name}</h4>
                {item.spicy && <Flame className="h-4 w-4 text-red-500" />}
                {item.vegetarian && <Leaf className="h-4 w-4 text-green-500" />}
              </div>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
            </div>
            <div className="text-right ml-4">
              <div className="text-lg font-bold text-orange-600 mb-2">{item.price}</div>
              <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-xs">
                Agregar
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-800 flex items-center justify-center gap-2">
            <ChefHat className="h-6 w-6 text-orange-600" />
            Menú General
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="appetizers" className="mt-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="appetizers">Entradas</TabsTrigger>
            <TabsTrigger value="mains">Platos Principales</TabsTrigger>
            <TabsTrigger value="desserts">Postres</TabsTrigger>
            <TabsTrigger value="drinks">Bebidas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="appetizers" className="mt-6">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Entradas</h3>
              <p className="text-gray-600 text-sm">Deliciosos aperitivos para comenzar tu experiencia gastronómica</p>
            </div>
            {renderMenuItems(menuData.appetizers)}
          </TabsContent>
          
          <TabsContent value="mains" className="mt-6">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Platos Principales</h3>
              <p className="text-gray-600 text-sm">Nuestras especialidades preparadas con los mejores ingredientes</p>
            </div>
            {renderMenuItems(menuData.mains)}
          </TabsContent>
          
          <TabsContent value="desserts" className="mt-6">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Postres</h3>
              <p className="text-gray-600 text-sm">El final perfecto para una comida excepcional</p>
            </div>
            {renderMenuItems(menuData.desserts)}
          </TabsContent>
          
          <TabsContent value="drinks" className="mt-6">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Bebidas</h3>
              <p className="text-gray-600 text-sm">Bebidas artesanales y clásicas para acompañar tu comida</p>
            </div>
            {renderMenuItems(menuData.drinks)}
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Star className="h-5 w-5 text-orange-600" />
            <h4 className="font-semibold text-gray-800">Leyenda</h4>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-1">
              <Flame className="h-4 w-4 text-red-500" />
              <span>Picante</span>
            </div>
            <div className="flex items-center gap-1">
              <Leaf className="h-4 w-4 text-green-500" />
              <span>Vegetariano</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
