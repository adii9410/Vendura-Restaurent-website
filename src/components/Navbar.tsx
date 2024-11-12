import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-green-400 text-2xl font-bold">VERDURA</Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md">Home</Link>
              <Link to="/menu" className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md">Menu</Link>
              <Link to="/about" className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md">About</Link>
              <Link to="/contact" className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md">Contact</Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-green-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            <Link to="/" className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md">Home</Link>
            <Link to="/menu" className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md">Menu</Link>
            <Link to="/about" className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md">About</Link>
            <Link to="/contact" className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}