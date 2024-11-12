import { motion } from 'framer-motion';
import { useState } from 'react';
import FoodGallery from '../components/FoodGallery';
import MenuItem from '../components/MenuItem';

const menuItems = [
  {
    category: "Starters",
    items: [
      { 
        id: 1,
        name: "Wild Mushroom Risotto", 
        price: "₹250", 
        description: "Arborio rice, truffle, seasonal mushrooms",
        detailedDescription: "A creamy risotto made with locally sourced wild mushrooms, finished with truffle oil and fresh herbs. Served with parmesan crisps.",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
        ingredients: ["Arborio rice", "Wild mushrooms", "Truffle oil", "Parmesan", "Fresh herbs"],
        allergens: ["Dairy"]
      },
      { 
        id: 2,
        name: "Garden Fresh Bruschetta", 
        price: "₹180", 
        description: "Sourdough, heirloom tomatoes, basil",
        detailedDescription: "Crispy sourdough toast topped with marinated heirloom tomatoes, fresh basil, and extra virgin olive oil. Finished with balsamic glaze.",
        image: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=800&q=80",
        ingredients: ["Sourdough bread", "Heirloom tomatoes", "Fresh basil", "Olive oil", "Balsamic glaze"],
        allergens: ["Gluten"]
      }
    ]
  },
  {
    category: "Main Courses",
    items: [
      { 
        id: 3,
        name: "Buddha Bowl", 
        price: "₹280", 
        description: "Quinoa, roasted vegetables, tahini dressing",
        detailedDescription: "A nourishing bowl of quinoa, seasonal roasted vegetables, fresh greens, and creamy tahini dressing. Topped with toasted seeds and microgreens.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        ingredients: ["Quinoa", "Seasonal vegetables", "Tahini", "Mixed seeds", "Microgreens"],
        allergens: ["Sesame"]
      },
      { 
        id: 4,
        name: "Cauliflower Steak", 
        price: "₹260", 
        description: "Herb-crusted, truffle puree, wild mushrooms",
        detailedDescription: "Thick-cut cauliflower steak, herb-crusted and roasted to perfection. Served with truffle potato puree and sautéed wild mushrooms.",
        image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=800&q=80",
        ingredients: ["Cauliflower", "Fresh herbs", "Truffle", "Wild mushrooms", "Potato"],
        allergens: ["None"]
      }
    ]
  },
  {
    category: "Desserts",
    items: [
      { 
        id: 5,
        name: "Dark Chocolate Mousse", 
        price: "₹220", 
        description: "Vegan chocolate, raspberry coulis",
        detailedDescription: "Rich and creamy vegan dark chocolate mousse, served with fresh raspberry coulis and chocolate shavings. Topped with fresh berries.",
        image: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=800&q=80",
        ingredients: ["Dark chocolate", "Coconut cream", "Raspberries", "Vanilla", "Fresh berries"],
        allergens: ["None"]
      },
      { 
        id: 6,
        name: "Coconut Panna Cotta", 
        price: "₹200", 
        description: "Mango compote, passion fruit",
        detailedDescription: "Silky smooth coconut panna cotta with tropical mango compote and fresh passion fruit. Garnished with toasted coconut flakes.",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
        ingredients: ["Coconut milk", "Mango", "Passion fruit", "Agar agar", "Coconut flakes"],
        allergens: ["Coconut"]
      }
    ]
  }
];

export default function Menu() {
  const [cart, setCart] = useState<{id: number; name: string; price: string; quantity: number}[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const addToCart = (item: any) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
    setSelectedItem(null);
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace('₹', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Our Menu</h1>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Discover our plant-based creations, where vegetables take center stage
        </p>

        <FoodGallery />
        
        <div className="grid gap-16">
          {menuItems.map((section, index) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <h2 className="text-2xl font-semibold mb-8 text-center">{section.category}</h2>
              <div className="grid gap-8 md:grid-cols-2">
                {section.items.map((item) => (
                  <MenuItem
                    key={item.id}
                    item={item}
                    onClick={() => setSelectedItem(item)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Item Details Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-900 p-6 rounded-lg max-w-2xl w-full"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedItem.name}</h3>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-300 mb-4">{selectedItem.detailedDescription}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Ingredients:</h4>
                <p className="text-gray-300">{selectedItem.ingredients.join(', ')}</p>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Allergens:</h4>
                <p className="text-gray-300">{selectedItem.allergens.join(', ')}</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-green-400">{selectedItem.price}</span>
                <button
                  onClick={() => addToCart(selectedItem)}
                  className="bg-green-400 text-black px-6 py-2 rounded-md hover:bg-green-500 transition-colors"
                >
                  Add to Order
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Cart Summary */}
        {cart.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4 border-t border-gray-800"
          >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div>
                <span className="text-gray-300">Items in cart: {cart.reduce((total, item) => total + item.quantity, 0)}</span>
                <span className="ml-4 text-green-400 font-bold">Total: ₹{getTotalAmount()}</span>
              </div>
              <button
                onClick={() => alert('Proceeding to checkout...')}
                className="bg-green-400 text-black px-8 py-2 rounded-md hover:bg-green-500 transition-colors"
              >
                Checkout
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}