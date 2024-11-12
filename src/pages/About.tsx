import { motion } from 'framer-motion';
import { Leaf, Sprout, TreePine } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Founded in 1970, VERDURA has been pioneering plant-based cuisine,
            proving that vegetarian food can be extraordinary and innovative.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center"
          >
            <Leaf className="w-12 h-12 mx-auto mb-4 text-green-400" />
            <h3 className="text-xl font-semibold mb-2">Organic Ingredients</h3>
            <p className="text-gray-300">Sourced from local organic farms and gardens</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center"
          >
            <Sprout className="w-12 h-12 mx-auto mb-4 text-green-400" />
            <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
            <p className="text-gray-300">Zero-waste kitchen and eco-friendly packaging</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center"
          >
            <TreePine className="w-12 h-12 mx-auto mb-4 text-green-400" />
            <h3 className="text-xl font-semibold mb-2">Community Garden</h3>
            <p className="text-gray-300">Our own organic garden supplies fresh herbs daily</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative h-96 rounded-lg overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1934&q=80"
            alt="Organic garden"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <blockquote className="text-2xl italic text-center max-w-2xl px-4">
              "Let food be thy medicine, and medicine be thy food."
              <footer className="text-lg mt-4">- Hippocrates</footer>
            </blockquote>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}