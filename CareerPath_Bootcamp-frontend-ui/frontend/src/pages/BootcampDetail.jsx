import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle, Video, Star } from 'lucide-react';
import { bootcamps as mockBootcamps } from '../data/platformData';

export default function BootcampDetail() {
  const { id } = useParams();
  const [bootcamp, setBootcamp] = useState(mockBootcamps.find((item) => String(item.id) === String(id)) ?? mockBootcamps[0]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/bootcamps/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        if (data.success && data.data) {
          const b = data.data;
          setBootcamp({
            id: b._id,
            title: b.title,
            shortTitle: b.title.substring(0, 30),
            description: b.description,
            level: b.level || 'Intermediate',
            duration: b.duration || '12 Weeks',
            price: `$${(b.price || 5000).toLocaleString()}`,
            cohortStart: 'Rolling Admissions',
            tags: b.tags?.length ? b.tags : ['Engineering', 'Design'],
            features: b.features || [],
            outcomes: b.features?.slice(0, 3) || ['Job Assistance', 'Portfolio Project'],
            modules: b.modules?.length ? b.modules : mockBootcamps[0].modules,
            mentor: { name: 'Dr. Jane Smith', role: 'Senior Engineer', company: 'TechCorp' }
          });
        }
      })
      .catch((error) => {
        console.error('Backend offline or bootcamp not found, keeping platformData mock object:', error);
      });
  }, [id]);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-gradient-to-br from-slate-950 via-cyan-950 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-cyan-200 hover:text-white mb-6 inline-block font-medium">
            &larr; Back to Bootcamps
          </Link>
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="flex gap-3 mb-4">
                <span className="bg-cyan-500/20 text-cyan-100 px-4 py-1.5 rounded-full font-semibold border border-cyan-400/20 backdrop-blur-sm">
                  {bootcamp.level}
                </span>
                <span className="bg-emerald-500/20 text-emerald-100 px-4 py-1.5 rounded-full font-semibold border border-emerald-500/20 backdrop-blur-sm">
                  {bootcamp.duration}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{bootcamp.title}</h1>
              <p className="text-xl text-slate-200 max-w-2xl leading-relaxed">{bootcamp.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {bootcamp.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white text-gray-900 p-8 rounded-3xl shadow-2xl relative">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl font-bold text-sm">
                Enrolling Now
              </div>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wide mb-2">Program Tuition</p>
              <div className="text-5xl font-extrabold mb-6 text-gray-900">{bootcamp.price}</div>
              <Link
                to={`/bootcamp/${bootcamp.id}/enroll`}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-cyan-600/30 hover:shadow-cyan-600/50 transform hover:-translate-y-0.5 mb-4 inline-flex items-center justify-center"
              >
                Enroll Now
              </Link>
              <div className="space-y-3 text-sm text-gray-500 font-medium">
                <p className="text-center">14-day money-back guarantee.</p>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Next cohort</div>
                  <div className="mt-2 text-lg font-bold text-slate-900">{bootcamp.cohortStart}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <BookOpen className="text-cyan-600 w-8 h-8" /> Syllabus
          </h2>
          <div className="space-y-6">
            {bootcamp.modules.map((mod) => (
              <div key={mod.week} className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-1 block">Week {mod.week}</span>
                    <h3 className="text-xl font-bold text-gray-900">{mod.title}</h3>
                  </div>
                  <div className="bg-cyan-50 text-cyan-700 font-semibold px-4 py-2 rounded-lg flex items-center gap-2">
                    <Video className="w-4 h-4" /> {mod.lessons} Lessons
                  </div>
                </div>
              </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Lead mentor</div>
                <div className="mt-2 text-lg font-bold text-slate-900">{bootcamp.mentor.name}</div>
                <div className="text-sm text-slate-600 mt-1">{bootcamp.mentor.role}, {bootcamp.mentor.company}</div>
              </div>
            </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Star className="text-cyan-600 w-6 h-6" /> What's Included
          </h2>
          <ul className="space-y-4">
            {bootcamp.features.map((feature, idx) => (
              <li key={idx} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <CheckCircle className="text-emerald-500 shrink-0 w-6 h-6" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-3xl bg-slate-900 text-white p-6">
            <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">Outcomes</div>
            <div className="mt-4 space-y-3">
              {bootcamp.outcomes.map((outcome) => (
                <div key={outcome} className="flex items-center justify-between gap-3 border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                  <span>{outcome}</span>
                  <ArrowRight className="w-4 h-4 text-cyan-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
