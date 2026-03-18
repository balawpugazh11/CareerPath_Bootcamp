import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, LogIn, UserPlus } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl tracking-tight text-gray-900">
              Path<span className="text-blue-600">4</span>Career
            </span>
          </Link>
          <div className="flex gap-4 items-center">
            <Link 
              to="/login" 
              className="text-gray-600 hover:text-blue-600 font-medium flex items-center gap-1 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Log In
            </Link>
            <Link 
              to="/register" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm"
            >
              <UserPlus className="w-4 h-4" />
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
