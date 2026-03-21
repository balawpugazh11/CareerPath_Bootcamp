import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookOpen, CheckCircle2, Clock3, Download, FileText, PlayCircle } from 'lucide-react';
import { lessonViewerData } from '../../data/platformData';

const statusStyles = {
  completed: 'bg-emerald-100 text-emerald-700',
  in_progress: 'bg-cyan-100 text-cyan-700',
  locked: 'bg-slate-100 text-slate-500',
};

const statusLabels = {
  completed: 'Completed',
  in_progress: 'In Progress',
  locked: 'Locked',
};

export default function LessonViewer() {
  const { bootcampId } = useParams();
  const viewer = lessonViewerData[bootcampId] ?? lessonViewerData['1'];
  const { bootcampTitle, lesson, modules } = viewer;

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <Link to="/dashboard" className="text-cyan-700 hover:text-cyan-800 font-medium">
              &larr; Back to learner dashboard
            </Link>
            <p className="mt-3 text-sm uppercase tracking-[0.24em] text-cyan-700 font-semibold">Lesson Viewer</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-black text-slate-900">{bootcampTitle}</h1>
          </div>
          <div className="rounded-2xl bg-white border border-slate-200 px-5 py-4 shadow-sm min-w-[220px]">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Current lesson progress</div>
            <div className="mt-2 text-3xl font-black text-slate-900">{lesson.progress}%</div>
          </div>
        </div>

        <div className="grid xl:grid-cols-[0.78fr_1.22fr] gap-8 items-start">
          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-white border border-slate-200 shadow-sm p-6">
              <h2 className="text-xl font-black text-slate-900">Course modules</h2>
              <div className="mt-5 space-y-5">
                {modules.map((module) => (
                  <div key={module.week} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-cyan-700 font-semibold">Week {module.week}</div>
                    <h3 className="mt-2 font-bold text-slate-900">{module.title}</h3>
                    <div className="mt-4 space-y-3">
                      {module.lessons.map((item) => (
                        <div
                          key={item.id}
                          className={`rounded-xl border px-4 py-3 ${
                            item.id === lesson.id ? 'border-cyan-200 bg-cyan-50' : 'border-slate-200 bg-white'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="font-medium text-slate-900">{item.title}</div>
                              <div className="text-sm text-slate-500 mt-1">{item.duration}</div>
                            </div>
                            <span className={`text-xs font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full ${statusStyles[item.status]}`}>
                              {statusLabels[item.status]}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-900 text-white p-6">
              <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">Mentor note</div>
              <p className="mt-4 text-slate-200 leading-relaxed">{lesson.mentorNote}</p>
            </div>
          </aside>

          <section className="space-y-6">
            <div className="rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-sm">
              <div className="bg-gradient-to-br from-slate-950 via-cyan-950 to-teal-800 text-white p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-sm uppercase tracking-[0.24em] text-cyan-200">Week {lesson.week} - {lesson.module}</div>
                    <h2 className="mt-3 text-3xl font-black">{lesson.title}</h2>
                    <p className="mt-4 text-slate-200 max-w-3xl">{lesson.summary}</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 border border-white/10 px-5 py-4 min-w-[160px]">
                    <div className="text-xs uppercase tracking-[0.2em] text-cyan-200">Runtime</div>
                    <div className="mt-2 text-2xl font-black">{lesson.videoLength}</div>
                  </div>
                </div>

                <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-black/30 p-6 min-h-[300px] flex flex-col items-center justify-center text-center">
                  <PlayCircle className="w-16 h-16 text-cyan-300" />
                  <h3 className="mt-5 text-2xl font-bold">Lesson video placeholder</h3>
                  <p className="mt-3 max-w-xl text-slate-300">
                    This is the frontend shell for the lesson player. Video streaming and progress persistence still need backend and media integration.
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="text-sm font-semibold text-slate-700">Playback progress</div>
                  <div className="text-sm font-bold text-cyan-700">{lesson.progress}% completed</div>
                </div>
                <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full rounded-full bg-cyan-600" style={{ width: `${lesson.progress}%` }} />
                </div>

                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                    <div className="flex items-center gap-2 text-slate-900 font-bold">
                      <BookOpen className="w-5 h-5 text-cyan-700" />
                      Learning objectives
                    </div>
                    <div className="mt-4 space-y-3">
                      {lesson.objectives.map((objective) => (
                        <div key={objective} className="flex gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                    <div className="flex items-center gap-2 text-slate-900 font-bold">
                      <Download className="w-5 h-5 text-cyan-700" />
                      Materials
                    </div>
                    <div className="mt-4 space-y-3">
                      {lesson.materials.map((material) => (
                        <div key={material.label} className="flex items-center justify-between gap-4 rounded-xl bg-white border border-slate-200 px-4 py-3">
                          <div>
                            <div className="font-medium text-slate-900">{material.label}</div>
                            <div className="text-sm text-slate-500">{material.type}</div>
                          </div>
                          <button className="text-cyan-700 font-semibold">Open</button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-slate-900 text-white p-6">
                  <div className="flex items-center gap-2 font-bold">
                    <FileText className="w-5 h-5 text-cyan-300" />
                    Practice tasks
                  </div>
                  <div className="mt-4 space-y-3">
                    {lesson.tasks.map((task) => (
                      <div key={task} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200">
                        {task}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <button className="rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-semibold px-6 py-3 transition-colors">
                    Mark lesson complete
                  </button>
                  <Link
                    to={`/learn/${viewer.bootcampId}/assignment`}
                    className="rounded-xl bg-white border border-cyan-200 hover:bg-cyan-50 text-cyan-800 font-semibold px-6 py-3 transition-colors"
                  >
                    Open assignment
                  </Link>
                  <Link
                    to={`/bootcamp/${viewer.bootcampId}`}
                    className="rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-6 py-3 transition-colors"
                  >
                    View bootcamp overview
                  </Link>
                  <div className="inline-flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <Clock3 className="w-4 h-4" />
                    Frontend prototype only, persistence not connected yet
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
