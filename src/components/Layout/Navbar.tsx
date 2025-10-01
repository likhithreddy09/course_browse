// components/Navbar.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-bold text-gray-900">Logo</div>
          <div className="hidden md:flex items-center gap-1">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium border-b-2 border-purple-600">
              Course
            </button>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium">
            Login
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity">
            Register for free
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
          <div className="flex flex-col gap-2">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium text-left">
              Course
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium text-left">
              Login
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium">
              Register for free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;