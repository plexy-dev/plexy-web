import React from 'react';
import { Blocks, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Blocks className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-2xl font-bold text-white">Plexy</span>
            </div>
            <p className="mt-4 text-gray-400">
              Transforming businesses through innovative technology solutions. 
              Your partner in digital excellence.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="https://x.com/dsha256" className="text-gray-400 hover:text-indigo-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://github.com/plexy-dev" className="text-gray-400 hover:text-indigo-500">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/dsha256/" className="text-gray-400 hover:text-indigo-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-indigo-500">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-500">Full Stack Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-500">AI Integration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-500">UI/UX Design</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-indigo-500">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-500">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-500">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-500">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Plexy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}