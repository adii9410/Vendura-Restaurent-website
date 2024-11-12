import { motion } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import Scene3D from '../components/Scene3D';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>
      
      <div className="relative z-10 pt-32 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <div className="flex justify-center mb-4">
            <Leaf className="text-green-400 w-12 h-12" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Pure Vegetarian Excellence
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Where nature's finest ingredients create extraordinary flavors
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-400 hover:bg-green-500 md:text-lg"
          >
            View Menu <ArrowRight className="ml-2" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Farm to Table</h3>
            <p className="text-gray-300">Fresh, organic ingredients sourced from local farms</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Plant-Based Innovation</h3>
            <p className="text-gray-300">Creative dishes that celebrate vegetables</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Sustainable Dining</h3>
            <p className="text-gray-300">Eco-friendly practices for a better tomorrow</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}