import { motion } from 'framer-motion';

interface MenuItemProps {
  item: {
    name: string;
    price: string;
    description: string;
    image: string;
  };
  onClick: () => void;
}

export default function MenuItem({ item, onClick }: MenuItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="h-48 relative">
        <img
          src={item.image}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-medium">{item.name}</h3>
          <span className="text-xl text-green-400">{item.price}</span>
        </div>
        <p className="text-gray-300">{item.description}</p>
      </div>
    </motion.div>
  );
}