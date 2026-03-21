import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, BarChart3, PlayCircle } from 'lucide-react';
import { studentDashboard } from '../../data/platformData';

export default function StudentDashboard() {
  const { enrolledCourses, learnerName, milestones } = studentDashboard;

  const activeCourses = enrolledCourses.length;
  const averageCompletion = Math.round(
    enrolledCourses.reduce((total, course) => total + course.progress, 0) / activeCourses
  );
  const certificatesEarned = enrolledCourses.filter((course) => course.progress === 100).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Learning Dashboard</h1>
        <div className="text-gray-500 font-medium">Welcome back, {learnerName}.</div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-4 bg-blue-50 text-blue-600 rounded-xl"><BookOpen className="w-8 h-8" /></div>
          <div>
            <div className="text-2xl font-bold text-gray-900">{activeCourses}</div>
            <div className="text-gray-500 text-sm font-medium">Active Courses</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-4 bg-emerald-50 text-emerald-600 rounded-xl"><Award className="w-8 h-8" /></div>
          <div>
            <div className="text-2xl font-bold text-gray-900">{certificatesEarned}</div>
            <div className="text-gray-500 text-sm font-medium">Certificates Earned</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-4 bg-purple-50 text-purple-600 rounded-xl"><BarChart3 className="w-8 h-8" /></div>
          <div>
            <div className="text-2xl font-bold text-gray-900">{averageCompletion}%</div>
            <div className="text-gray-500 text-sm font-medium">Avg Completion</div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Learning</h2>
      <div className="grid xl:grid-cols-[1.25fr_0.75fr] gap-8">
        <div className="grid gap-8">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">{course.streak}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-2 font-medium">
                  <span>Progress: {course.progress}%</span>
                  <span>{course.completedModules} / {course.totalModules} Modules</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5 mb-6">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold text-blue-600 uppercase mb-1">Up Next</div>
                    <div className="text-gray-900 font-semibold flex items-center gap-2">
                      <PlayCircle className="w-4 h-4 text-blue-500" /> {course.nextLesson}
                    </div>
                  </div>
                  <Link
                    to={`/learn/${course.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors inline-flex items-center"
                  >
                    Resume
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="bg-slate-900 text-white rounded-2xl p-6 h-fit">
          <h3 className="text-xl font-bold">Momentum Board</h3>
          <p className="mt-2 text-slate-300 text-sm">
            A quick view of the milestones already in motion so the learner flow feels alive.
          </p>
          <div className="mt-6 space-y-4">
            {milestones.map((milestone) => (
              <div key={milestone} className="rounded-xl border border-white/10 bg-white/5 p-4">
                {milestone}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
