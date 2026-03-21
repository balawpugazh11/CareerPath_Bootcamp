import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Star, TrendingUp } from 'lucide-react';
import { bootcamps as mockBootcamps, platformStats, testimonials } from '../data/platformData';

export default function Home() {
  const [bootcamps, setBootcamps] = useState(mockBootcamps);

  useEffect(() => {
    fetch('http://localhost:5000/api/bootcamps')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        if (data.success && data.data?.length > 0) {
          // Map backend schema smoothly into the frontend ui mock format
          const formatted = data.data.map(b => ({
            id: b._id,
            title: b.title,
            shortTitle: b.title.substring(0, 30),
            summary: b.description.substring(0, 100) + '...',
            level: b.level || 'Intermediate',
            duration: b.duration || '12 Weeks',
            price: `$${(b.price || 5000).toLocaleString()}`,
            cohortStart: 'Rolling Admissions',
            tags: b.tags?.length ? b.tags : ['Engineering', 'Design'],
            features: b.features || [],
            outcomes: b.features?.slice(0, 3) || ['Job Assistance', 'Portfolio Project'],
            modules: b.modules || []
          }));
          setBootcamps(formatted);
        }
      })
      .catch((error) => {
        console.error('Backend offline, defaulting to platformData mock array:', error);
        setBootcamps(mockBootcamps);
      });
  }, []);
  return (
    <div className="pb-16">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(45,212,191,0.2),_transparent_30%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-sky-100">
                <TrendingUp className="w-4 h-4" />
                Career accelerators built with mentorship, projects, and hiring prep
              </span>
              <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-tight">
                Turn structured learning into
                <span className="block text-cyan-300">confident career momentum</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed">
                Path4Career combines guided bootcamps, mentor feedback, portfolio projects, and placement support so learners keep moving from sign-up to job-ready output.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition-colors"
                >
                  Start your application
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/dashboard"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Explore learner dashboard
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-sm uppercase tracking-[0.24em] text-cyan-200">Live Cohort Snapshot</div>
                <div className="mt-4 space-y-4">
                  {bootcamps.slice(0, 3).map((bootcamp) => (
                    <div key={bootcamp.id} className="rounded-2xl bg-slate-900/70 p-4 border border-white/5">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <h2 className="font-semibold text-white">{bootcamp.shortTitle}</h2>
                          <p className="text-sm text-slate-400 mt-1">Next cohort starts {bootcamp.cohortStart}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-cyan-300">{bootcamp.price}</div>
                          <div className="text-xs uppercase tracking-wider text-slate-400">{bootcamp.duration}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {platformStats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-3xl font-black text-white">{stat.value}</div>
                    <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid gap-4 rounded-3xl bg-white shadow-2xl shadow-slate-200/70 p-6 md:grid-cols-4">
          {platformStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <div className="text-3xl font-black text-slate-900">{stat.value}</div>
              <div className="mt-2 text-sm font-medium text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-700 font-semibold">Bootcamp Tracks</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900">Choose a path that ends in tangible output</h2>
          </div>
          <p className="text-slate-600 max-w-xl">
            Every track includes live reviews, milestone-based progression, and a finish line tied to portfolio or hiring outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {bootcamps.map((bootcamp) => (
            <Link
              key={bootcamp.id}
              to={`/bootcamp/${bootcamp.id}`}
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-cyan-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-52 bg-gradient-to-br from-slate-900 via-cyan-900 to-teal-700 p-6 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2">
                  {bootcamp.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/10 text-cyan-100 text-xs font-semibold rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-cyan-200 font-medium">{bootcamp.level}</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">{bootcamp.shortTitle}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-6 min-h-[72px]">{bootcamp.summary}</p>

                <div className="flex items-center justify-between text-sm text-slate-500 mb-5 border-t border-slate-100 pt-4">
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-cyan-600" /> {bootcamp.duration}</span>
                  <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-emerald-600" /> Next: {bootcamp.cohortStart}</span>
                </div>

                <div className="space-y-2 mb-6">
                  {bootcamp.outcomes.map((outcome) => (
                    <div key={outcome} className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-500" />
                      {outcome}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-slate-900">{bootcamp.price}</span>
                  <span className="inline-flex items-center gap-2 text-cyan-700 font-semibold group-hover:text-cyan-800">
                    View track
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-700 font-semibold">What Learners Say</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Support that keeps people shipping work</h2>
            <p className="mt-4 text-slate-600">
              The strongest signal in this platform is momentum: weekly milestones, real feedback, and clarity about what comes next.
            </p>
          </div>
          <div className="grid gap-6">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
                <p className="text-lg text-slate-700 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-5">
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="rounded-[2rem] bg-slate-900 text-white p-8 md:p-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-black">Ready to keep building this platform out?</h2>
            <p className="mt-3 text-slate-300 max-w-2xl">
              Learner, mentor, and admin surfaces are now aligned around the same catalog and metrics, making the next backend integration step much cleaner.
            </p>
          </div>
          <Link
            to="/admin"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition-colors"
          >
            View admin overview
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
