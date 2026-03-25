import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { CalendarDays, CheckCircle2, CreditCard, ShieldCheck, Users } from 'lucide-react';
import { useBootcamps } from '../hooks/useBootcamps';

const enrollmentSteps = [
  'Choose your preferred payment option',
  'Confirm your learner profile and goals',
  'Receive cohort onboarding details by email',
];

export default function Enrollment() {
  const { id } = useParams();
  const { bootcamps } = useBootcamps();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const bootcamp = bootcamps.find((item) => String(item.id) === String(id)) ?? bootcamps[0];

  const handleEnroll = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Please log in to enroll.');
      
      const response = await fetch(`http://localhost:5000/api/bootcamps/${id}/enroll`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Enrollment failed');
      
      setSuccessMsg('Successfully enrolled! Redirecting to dashboard...');
      setTimeout(() => navigate('/dashboard'), 2000);
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to={`/bootcamp/${bootcamp.id}`} className="inline-flex items-center text-cyan-700 hover:text-cyan-800 font-medium mb-8">
          &larr; Back to bootcamp details
        </Link>

        <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <section className="rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-sm">
            <div className="bg-gradient-to-br from-slate-950 via-cyan-950 to-teal-800 text-white p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">Bootcamp Enrollment</p>
              <h1 className="mt-3 text-4xl font-black">{bootcamp.title}</h1>
              <p className="mt-4 text-slate-200 max-w-2xl">
                Secure your seat in the next cohort and get onboarding details, schedule access, and mentor contact info after confirmation.
              </p>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-cyan-200">Starts</div>
                  <div className="mt-2 text-lg font-bold">{bootcamp.cohortStart}</div>
                </div>
                <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-cyan-200">Format</div>
                  <div className="mt-2 text-lg font-bold">{bootcamp.format}</div>
                </div>
                <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-cyan-200">Mentor</div>
                  <div className="mt-2 text-lg font-bold">{bootcamp.mentor.name}</div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Learner details</h2>
                  <div className="mt-6 space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="fullName">Full name</label>
                      <input id="fullName" type="text" placeholder="Aarav Kumar" className="w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">Email address</label>
                      <input id="email" type="email" placeholder="you@example.com" className="w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="goal">Primary goal</label>
                      <select id="goal" className="w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                        <option>Switch careers</option>
                        <option>Upskill for current role</option>
                        <option>Build portfolio projects</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="experience">Experience level</label>
                      <select id="experience" className="w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                        <option>Beginner</option>
                        <option>Some prior exposure</option>
                        <option>Working professional</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-slate-900">Payment</h2>
                  <div className="mt-6 space-y-4">
                    <label className="block rounded-2xl border border-cyan-200 bg-cyan-50 p-5 cursor-pointer">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="font-bold text-slate-900">Pay in full</div>
                          <div className="text-sm text-slate-600 mt-1">One-time payment with priority onboarding.</div>
                        </div>
                        <div className="text-xl font-black text-cyan-700">{bootcamp.price}</div>
                      </div>
                    </label>

                    <label className="block rounded-2xl border border-slate-200 p-5 cursor-pointer hover:border-cyan-200 hover:bg-slate-50 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="font-bold text-slate-900">Monthly plan</div>
                          <div className="text-sm text-slate-600 mt-1">Split tuition into smaller monthly payments.</div>
                        </div>
                        <div className="text-lg font-black text-slate-900">{bootcamp.paymentPlan}</div>
                      </div>
                    </label>

                    <div className="rounded-2xl bg-slate-100 p-5">
                      <div className="flex items-center gap-2 text-slate-900 font-bold">
                        <CreditCard className="w-5 h-5 text-cyan-700" />
                        Checkout preview
                      </div>
                      <div className="mt-4 space-y-3 text-sm text-slate-600">
                        <div className="flex justify-between"><span>Bootcamp</span><span>{bootcamp.shortTitle}</span></div>
                        <div className="flex justify-between"><span>Seat reservation</span><span>Included</span></div>
                        <div className="flex justify-between"><span>Mentor support</span><span>Included</span></div>
                        <div className="flex justify-between pt-3 border-t border-slate-200 font-bold text-slate-900"><span>Total due today</span><span>{bootcamp.price}</span></div>
                      </div>
                    </div>
                  </div>

                  {errorMsg && <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">{errorMsg}</div>}
                  {successMsg && <div className="mt-4 p-3 bg-green-50 text-green-600 rounded-lg text-sm">{successMsg}</div>}
                  <button 
                    onClick={handleEnroll}
                    disabled={loading || successMsg}
                    className="mt-6 w-full rounded-xl bg-cyan-700 hover:bg-cyan-800 disabled:opacity-50 text-white font-semibold px-6 py-4 transition-colors"
                  >
                    {loading ? 'Processing...' : 'Confirm enrollment'}
                  </button>
                  <p className="mt-3 text-sm text-slate-500 text-center">
                    Payment simulation. Proceeding will confirm your enrollment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-black text-slate-900">What happens next</h3>
              <div className="mt-5 space-y-4">
                {enrollmentSteps.map((step) => (
                  <div key={step} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-900 text-white p-6">
              <h3 className="text-xl font-black">Cohort snapshot</h3>
              <div className="mt-5 space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <CalendarDays className="w-5 h-5 text-cyan-300" />
                  <span>Starts {bootcamp.cohortStart}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-cyan-300" />
                  <span>Small-group mentor reviews every week</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-cyan-300" />
                  <span>14-day money-back guarantee</span>
                </div>
              </div>
              <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-cyan-300">Lead mentor</div>
                <div className="mt-2 text-lg font-bold">{bootcamp.mentor.name}</div>
                <div className="text-slate-300 mt-1">{bootcamp.mentor.role}, {bootcamp.mentor.company}</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
