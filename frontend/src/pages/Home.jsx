import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Star } from 'lucide-react';

const DUMMY_BOOTCAMPS = [
  {
    id: '1',
    title: 'Full Stack Web Development',
    description: 'Master React, Node.js, and MongoDB in 12 weeks. Build real-world projects and start your career.',
    level: 'Beginner',
    duration: '12 Weeks',
    price: '$999',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: '2',
    title: 'Data Science & Machine Learning',
    description: 'Learn Python, Pandas, and Scikit-Learn. Go from zero to deploying machine learning models.',
    level: 'Intermediate',
    duration: '16 Weeks',
    price: '$1299',
    tags: ['Python', 'AI', 'SQL']
  },
  {
    id: '3',
    title: 'UI/UX Design Masterclass',
    description: 'Design beautiful, user-centered apps using Figma. Build a stunning portfolio.',
    level: 'Beginner',
    duration: '8 Weeks',
    price: '$799',
    tags: ['Figma', 'Design', 'Prototyping']
  }
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Accelerate Your Career with <span className="text-blue-600 relative inline-block">
            Expert-Led Bootcamps
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-100 -z-10 rounded-full"></div>
          </span>
        </h1>
        <p className="text-xl text-gray-600">
          Join thousands of graduates who have transformed their careers through our immersive learning experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DUMMY_BOOTCAMPS.map((bootcamp) => (
          <Link 
            key={bootcamp.id} 
            to={`/bootcamp/${bootcamp.id}`}
            className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 p-6 flex items-end">
              <h3 className="text-2xl font-bold text-white">{bootcamp.title}</h3>
            </div>
            <div className="p-6">
              <div className="flex gap-2 mb-4">
                {bootcamp.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 line-clamp-2 mb-6">{bootcamp.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6 border-t border-gray-100 pt-4">
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-blue-500"/> {bootcamp.duration}</span>
                <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-emerald-500"/> {bootcamp.level}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">{bootcamp.price}</span>
                <span className="text-blue-600 font-semibold group-hover:text-blue-700">View Course &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
