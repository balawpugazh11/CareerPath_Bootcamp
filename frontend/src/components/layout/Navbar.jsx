import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { GraduationCap, LayoutDashboard, LogIn, UserPlus, LogOut } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const navLinkClassName = ({ isActive }) =>
    `font-medium transition-colors ${isActive ? 'text-cyan-700' : 'text-gray-600 hover:text-cyan-700'}`;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-cyan-700" />
            <span className="font-bold text-xl tracking-tight text-gray-900">
              Path<span className="text-cyan-700">4</span>Career
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={navLinkClassName}>Bootcamps</NavLink>
            {user?.role === 'student' && <NavLink to="/dashboard" className={navLinkClassName}>Learner</NavLink>}
            {user?.role === 'mentor' && <NavLink to="/mentor" className={navLinkClassName}>Mentor</NavLink>}
            {user?.role === 'admin' && <NavLink to="/admin" className={navLinkClassName}>Admin</NavLink>}
          </div>

          <div className="flex gap-3 items-center">
            {token ? (
              <>
                <Link
                  to={user?.role === 'admin' ? '/admin' : user?.role === 'mentor' ? '/mentor' : '/dashboard'}
                  className="hidden sm:inline-flex text-gray-600 hover:text-cyan-700 font-medium items-center gap-2 transition-colors"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-red-600 font-medium flex items-center gap-1 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-cyan-700 font-medium flex items-center gap-1 transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="bg-cyan-700 hover:bg-cyan-800 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm"
                >
                  <UserPlus className="w-4 h-4" />
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
