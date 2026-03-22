import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-6 px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-cyan-600">404</h1>
        <h2 className="text-3xl font-bold text-slate-800 mt-4">Page Not Found</h2>
        <p className="text-slate-500 mt-3 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          to="/"
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
