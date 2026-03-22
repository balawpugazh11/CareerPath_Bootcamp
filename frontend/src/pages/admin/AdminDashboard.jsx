import React from 'react';
import { LayoutDashboard, BookText, Settings, Plus } from 'lucide-react';
import { adminDashboard } from '../../data/platformData';

export default function AdminDashboard() {
  const { bootcamps, metrics } = adminDashboard;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Control Panel</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors">
          <Plus className="w-5 h-5"/> New Bootcamp
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-black text-gray-900">{metric.value}</div>
            <div className="mt-2 text-sm font-medium text-gray-500">{metric.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-flow-col gap-8">
        <div className="col-span-1 lg:w-64 space-y-2">
          <div className="bg-blue-50 text-blue-700 px-4 py-3 rounded-lg font-bold flex items-center gap-3 cursor-pointer">
            <LayoutDashboard className="w-5 h-5"/> Overview
          </div>
          <div className="text-gray-600 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium flex items-center gap-3 cursor-pointer transition-colors">
            <BookText className="w-5 h-5"/> Curriculums
          </div>
          <div className="text-gray-600 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium flex items-center gap-3 cursor-pointer transition-colors">
            <Settings className="w-5 h-5"/> Settings
          </div>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Manage Bootcamps</h2>
          <div className="grid gap-4">
            {bootcamps.map(bc => (
              <div key={bc.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">{bc.title}</h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${bc.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>
                      {bc.status}
                    </span>
                  </div>
                  <div className="text-gray-500 text-sm font-medium">{bc.students} Enrolled Students</div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">Edit</button>
                  <button className="px-4 py-2 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">Manage Curriculum</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
