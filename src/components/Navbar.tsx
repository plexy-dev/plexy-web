import React, { useState } from 'react';
import { Menu, X, Blocks } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Blocks className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Plexy
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors">Services</a>
            <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">Solutions</a>
            <a href="#process" className="text-gray-700 hover:text-indigo-600 transition-colors">Development</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              Contact Us
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
                Services
              </a>
              <a href="#features" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
                Solutions
              </a>
              <a href="#process" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
                Development
              </a>
              <a href="#contact" className="block px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}