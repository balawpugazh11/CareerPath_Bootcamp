import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, FileText, Github, MessageSquareQuote, ShieldCheck, Star } from 'lucide-react';
import { mentorReviewData } from '../../data/platformData';

export default function MentorReview() {
  const { reviewId } = useParams();
  const review = mentorReviewData[reviewId] ?? mentorReviewData['alice-rest-api'];

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <Link to="/mentor" className="text-indigo-700 hover:text-indigo-800 font-medium">
              &larr; Back to mentor dashboard
            </Link>
            <p className="mt-3 text-sm uppercase tracking-[0.24em] text-indigo-700 font-semibold">Mentor Review</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-black text-slate-900">{review.assignment}</h1>
            <p className="mt-3 text-slate-600">
              Reviewing {review.student} in {review.bootcamp}
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-slate-200 px-5 py-4 shadow-sm">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Submitted</div>
            <div className="mt-2 text-lg font-bold text-slate-900">{review.submittedAt}</div>
          </div>
        </div>

        <div className="grid xl:grid-cols-[0.76fr_1.24fr] gap-8 items-start">
          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-white border border-slate-200 p-6 shadow-sm">
              <div className="text-sm uppercase tracking-[0.24em] text-indigo-700 font-semibold">Review checklist</div>
              <div className="mt-4 space-y-3">
                {review.checklist.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-900 text-white p-6">
              <div className="text-sm uppercase tracking-[0.24em] text-indigo-300">Mentor focus</div>
              <p className="mt-4 text-slate-200 leading-relaxed">{review.scoreHint}</p>
            </div>

            <div className="rounded-[2rem] bg-white border border-slate-200 p-6 shadow-sm">
              <div className="text-sm uppercase tracking-[0.24em] text-indigo-700 font-semibold">Submission assets</div>
              <div className="mt-4 space-y-3">
                {review.submissionLinks.map((link) => (
                  <div key={link.label} className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                    <div className="flex items-start gap-3">
                      <Github className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-900">{link.label}</div>
                        <div className="text-sm text-slate-500 mt-1">{link.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <section className="rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-sm">
            <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-sky-900 text-white p-8">
              <div className="text-sm uppercase tracking-[0.24em] text-indigo-200">Review workspace</div>
              <h2 className="mt-3 text-3xl font-black">Provide actionable, learner-friendly feedback</h2>
              <p className="mt-4 text-slate-200 max-w-3xl">
                This frontend screen gives mentors one place to assess work, capture feedback, and choose a review outcome before backend persistence is added.
              </p>
            </div>

            <div className="p-8 space-y-8">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                <div className="flex items-start gap-3">
                  <MessageSquareQuote className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Student note</div>
                    <p className="mt-2 text-slate-700 leading-relaxed">{review.studentNotes}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="decision" className="block text-sm font-medium text-slate-700 mb-2">Review decision</label>
                  <select
                    id="decision"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option>Approve submission</option>
                    <option>Request changes</option>
                    <option>Needs discussion in live session</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="rating" className="block text-sm font-medium text-slate-700 mb-2">Mentor rating</label>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                    <Star className="w-5 h-5 text-amber-500" />
                    <Star className="w-5 h-5 text-amber-500" />
                    <span className="ml-2 text-sm text-slate-500">Prototype rating selector</span>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="strengths" className="block text-sm font-medium text-slate-700 mb-2">Strengths observed</label>
                <textarea
                  id="strengths"
                  rows="4"
                  placeholder="Call out what is working well so the learner knows what to keep doing."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                />
              </div>

              <div>
                <label htmlFor="improvements" className="block text-sm font-medium text-slate-700 mb-2">Requested improvements</label>
                <textarea
                  id="improvements"
                  rows="6"
                  placeholder="Add concrete, actionable changes and explain why they matter."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-5">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Quality reminder</div>
                      <p className="mt-1 text-sm text-slate-700">
                        Good mentor feedback is specific, respectful, and tied to the learner's next concrete action.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Follow-up suggestion</div>
                      <p className="mt-1 text-sm text-slate-700">
                        If changes are requested, summarize the top two fixes the student should prioritize before resubmitting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <button className="rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-6 py-3 transition-colors">
                  Save review
                </button>
                <button className="rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-6 py-3 transition-colors">
                  Send feedback to learner
                </button>
                <span className="text-sm text-slate-500 font-medium">Frontend prototype only. Review decisions are not persisted yet.</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
