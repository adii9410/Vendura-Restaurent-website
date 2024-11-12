import { motion } from 'framer-motion';

const foodImages = [
  {
    url: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    alt: "Colorful Buddha bowl"
  },
  {
    url: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    alt: "Fresh salad arrangement"
  },
  {
    url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    alt: "Vegetable curry"
  },
  {
    url: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    alt: "Quinoa bowl with roasted vegetables"
  }
];

export default function FoodGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
      {foodImages.map((image, index) => (
        <motion.div
          key={image.url}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative h-64 overflow-hidden rounded-lg"
        >
          <img
            src={image.url}
            alt={image.alt}
            className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>
      ))}
    </div>
  );
}