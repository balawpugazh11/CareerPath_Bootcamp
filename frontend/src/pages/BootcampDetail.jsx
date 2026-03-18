import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, CheckCircle, Video, Star } from 'lucide-react';

const BOOTCAMPS = {
  '1': {
    title: 'Full Stack Web Development Masterclass',
    description: 'A comprehensive journey from frontend basics to advanced backend architecture. Build production-ready applications with React, Node.js, and MongoDB.',
    duration: '12 Weeks',
    level: 'Intermediate',
    price: '$999',
    modules: [
      { week: 1, title: 'HTML, CSS & JavaScript Fundamentals', lessons: 8 },
      { week: 2, title: 'React Basics & State Management', lessons: 10 },
      { week: 3, title: 'Advanced React & Hooks', lessons: 7 },
      { week: 4, title: 'Node.js & Express API Development', lessons: 9 },
    ],
    features: [
      'Live mentorship sessions twice a week',
      'Code reviews from industry experts',
      'Portfolio building and resume review',
      'Certificate of completion',
    ],
  },
  '2': {
    title: 'Data Science & Machine Learning',
    description: 'Learn Python, Pandas, SQL, and model deployment workflows through practical datasets and portfolio-ready case studies.',
    duration: '16 Weeks',
    level: 'Intermediate',
    price: '$1299',
    modules: [
      { week: 1, title: 'Python Foundations for Data Work', lessons: 7 },
      { week: 2, title: 'Data Cleaning with Pandas', lessons: 9 },
      { week: 3, title: 'Machine Learning with Scikit-Learn', lessons: 10 },
      { week: 4, title: 'Model Evaluation and Deployment', lessons: 8 },
    ],
    features: [
      'Weekly live doubt-clearing labs',
      'Hands-on projects with real datasets',
      'Career support for analyst and ML roles',
      'Certificate of completion',
    ],
  },
  '3': {
    title: 'UI/UX Design Masterclass',
    description: 'Design intuitive digital experiences with research, wireframing, prototyping, and polished case studies for your portfolio.',
    duration: '8 Weeks',
    level: 'Beginner',
    price: '$799',
    modules: [
      { week: 1, title: 'Design Thinking and User Research', lessons: 6 },
      { week: 2, title: 'Wireframes and Information Architecture', lessons: 8 },
      { week: 3, title: 'High-Fidelity UI in Figma', lessons: 9 },
      { week: 4, title: 'Interactive Prototypes and Portfolio Review', lessons: 7 },
    ],
    features: [
      'Portfolio-ready design case studies',
      'Mentor feedback on every milestone',
      'Figma templates and reusable assets',
      'Certificate of completion',
    ],
  },
};

export default function BootcampDetail() {
  const { id } = useParams();
  const bootcamp = BOOTCAMPS[id] ?? BOOTCAMPS['1'];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-blue-200 hover:text-white mb-6 inline-block font-medium">
            &larr; Back to Bootcamps
          </Link>
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="flex gap-3 mb-4">
                <span className="bg-blue-600/30 text-blue-100 px-4 py-1.5 rounded-full font-semibold border border-blue-500/30 backdrop-blur-sm">
                  {bootcamp.level}
                </span>
                <span className="bg-emerald-500/30 text-emerald-100 px-4 py-1.5 rounded-full font-semibold border border-emerald-500/30 backdrop-blur-sm">
                  {bootcamp.duration}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{bootcamp.title}</h1>
              <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">{bootcamp.description}</p>
            </div>

            <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl relative">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl font-bold text-sm">
                Enrolling Now
              </div>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wide mb-2">Program Tuition</p>
              <div className="text-5xl font-extrabold mb-6 text-gray-900">{bootcamp.price}</div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transform hover:-translate-y-0.5 mb-4">
                Enroll Now
              </button>
              <p className="text-center text-sm text-gray-500 font-medium">14-day money-back guarantee.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <BookOpen className="text-blue-600 w-8 h-8" /> Syllabus
          </h2>
          <div className="space-y-6">
            {bootcamp.modules.map((mod) => (
              <div key={mod.week} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1 block">Week {mod.week}</span>
                    <h3 className="text-xl font-bold text-gray-900">{mod.title}</h3>
                  </div>
                  <div className="bg-blue-50 text-blue-700 font-semibold px-4 py-2 rounded-lg flex items-center gap-2">
                    <Video className="w-4 h-4" /> {mod.lessons} Lessons
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Star className="text-blue-600 w-6 h-6" /> What's Included
          </h2>
          <ul className="space-y-4">
            {bootcamp.features.map((feature, idx) => (
              <li key={idx} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <CheckCircle className="text-emerald-500 shrink-0 w-6 h-6" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
