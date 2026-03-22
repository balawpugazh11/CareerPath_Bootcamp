import React from 'react';
import { Link } from 'react-router-dom';
import { Users, FileCheck, MessageSquare } from 'lucide-react';
import { mentorDashboard } from '../../data/platformData';

export default function MentorDashboard() {
  const { submissions, assignedStudents, responseSla } = mentorDashboard;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Mentor Portal</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-4 bg-indigo-50 text-indigo-600 rounded-xl"><Users className="w-8 h-8"/></div>
          <div>
            <div className="text-2xl font-bold text-gray-900">{assignedStudents}</div>
            <div className="text-gray-500 text-sm font-medium">Assigned Students</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-4 bg-orange-50 text-orange-600 rounded-xl"><FileCheck className="w-8 h-8"/></div>
          <div>
            <div className="text-2xl font-bold text-gray-900">{submissions.length}</div>
            <div className="text-gray-500 text-sm font-medium">Pending Reviews</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-4 bg-emerald-50 text-emerald-600 rounded-xl"><MessageSquare className="w-8 h-8"/></div>
          <div>
            <div className="text-2xl font-bold text-gray-900">{responseSla}</div>
            <div className="text-gray-500 text-sm font-medium">Average Response SLA</div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Submissions</h2>
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {submissions.map((sub) => (
              <tr key={sub.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{sub.student}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{sub.assignment}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-sm">
                  <div>{sub.date}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-indigo-500 mt-1">{sub.status}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link
                    to={`/mentor/review/${sub.reviewId}`}
                    className="text-indigo-600 hover:text-indigo-900 bg-indigo-50 px-3 py-1.5 rounded-lg flex items-center gap-1.5 ml-auto"
                  >
                    <MessageSquare className="w-4 h-4"/> Review
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
