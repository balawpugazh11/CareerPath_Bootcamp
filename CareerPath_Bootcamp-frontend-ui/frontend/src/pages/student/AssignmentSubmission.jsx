import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CalendarDays, CheckCircle2, Github, MessageSquareQuote, UploadCloud } from 'lucide-react';
import { assignmentSubmissionData } from '../../data/platformData';

export default function AssignmentSubmission() {
  const { bootcampId } = useParams();
  const submission = assignmentSubmissionData[bootcampId] ?? assignmentSubmissionData['1'];
  const { bootcampTitle, assignment } = submission;

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <Link to={`/learn/${submission.bootcampId}`} className="text-cyan-700 hover:text-cyan-800 font-medium">
              &larr; Back to lesson viewer
            </Link>
            <p className="mt-3 text-sm uppercase tracking-[0.24em] text-cyan-700 font-semibold">Assignment Submission</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-black text-slate-900">{bootcampTitle}</h1>
          </div>
          <div className="rounded-2xl bg-white border border-slate-200 px-5 py-4 shadow-sm">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Status</div>
            <div className="mt-2 text-lg font-bold text-slate-900">{assignment.status}</div>
          </div>
        </div>

        <div className="grid xl:grid-cols-[0.74fr_1.26fr] gap-8 items-start">
          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-white border border-slate-200 p-6 shadow-sm">
              <div className="text-sm uppercase tracking-[0.24em] text-cyan-700 font-semibold">Assignment brief</div>
              <h2 className="mt-3 text-2xl font-black text-slate-900">{assignment.title}</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <CalendarDays className="w-5 h-5 text-cyan-700" />
                  <span>Due {assignment.dueDate}</span>
                </div>
                <div className="flex items-center gap-3">
                  <UploadCloud className="w-5 h-5 text-cyan-700" />
                  <span>{assignment.type}</span>
                </div>
              </div>
              <p className="mt-5 text-slate-700 leading-relaxed">{assignment.instructions}</p>
            </div>

            <div className="rounded-[2rem] bg-slate-900 text-white p-6">
              <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">Submission checklist</div>
              <div className="mt-4 space-y-3">
                {assignment.checklist.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-white border border-slate-200 p-6 shadow-sm">
              <div className="text-sm uppercase tracking-[0.24em] text-cyan-700 font-semibold">Timeline</div>
              <div className="mt-4 space-y-4">
                {assignment.submissionHistory.map((event) => (
                  <div key={event.label} className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                    <div className="font-semibold text-slate-900">{event.label}</div>
                    <div className="text-sm text-slate-500 mt-1">{event.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <section className="rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-sm">
            <div className="bg-gradient-to-br from-slate-950 via-cyan-950 to-teal-800 text-white p-8">
              <div className="text-sm uppercase tracking-[0.24em] text-cyan-200">Week {assignment.week} - {assignment.module}</div>
              <h2 className="mt-3 text-3xl font-black">Prepare and submit your work</h2>
              <p className="mt-4 text-slate-200 max-w-3xl">
                This frontend step covers the learner experience for assignment delivery. Real file handling, persistence, and mentor comments will connect later.
              </p>
            </div>

            <div className="p-8 space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="repoLink" className="block text-sm font-medium text-slate-700 mb-2">GitHub repository</label>
                  <div className="relative">
                    <Github className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      id="repoLink"
                      type="url"
                      placeholder="https://github.com/username/project"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="demoLink" className="block text-sm font-medium text-slate-700 mb-2">Live demo or notebook link</label>
                  <input
                    id="demoLink"
                    type="url"
                    placeholder="https://..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-8 text-center">
                <UploadCloud className="w-10 h-10 text-cyan-700 mx-auto" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">Upload project archive</h3>
                <p className="mt-2 text-slate-600">Drag and drop a `.zip` file here or browse to attach supporting files.</p>
                <button className="mt-5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-900 font-semibold px-5 py-3 transition-colors">
                  Choose file
                </button>
              </div>

              <div>
                <label htmlFor="submissionNotes" className="block text-sm font-medium text-slate-700 mb-2">Submission notes</label>
                <textarea
                  id="submissionNotes"
                  rows="6"
                  placeholder="Summarize what you built, key decisions, and where you want mentor feedback."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                />
              </div>

              <div className="rounded-2xl bg-cyan-50 border border-cyan-100 p-5">
                <div className="flex items-start gap-3">
                  <MessageSquareQuote className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Mentor review focus</div>
                    <p className="mt-1 text-slate-700 text-sm">
                      Ask for specific feedback on code structure, documentation clarity, and whether your tradeoffs are easy to explain in an interview.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <button className="rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-semibold px-6 py-3 transition-colors">
                  Submit assignment
                </button>
                <button className="rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-6 py-3 transition-colors">
                  Save draft
                </button>
                <span className="text-sm text-slate-500 font-medium">Frontend prototype only. Submission state is not persisted yet.</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
