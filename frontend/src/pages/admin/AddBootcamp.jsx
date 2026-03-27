import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BookPlus, ArrowLeft, Loader2, Save } from 'lucide-react';

export default function AddBootcamp() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;
  
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEdit);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    level: 'Beginner',
    duration: '',
    price: '',
    format: 'Live Online',
    cohortStart: '',
    paymentPlan: '',
    summary: '',
  });

  useEffect(() => {
    if (isEdit) {
      const fetchBootcamp = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/bootcamps/${id}`);
          const data = await response.json();
          if (!response.ok) throw new Error(data.message || 'Failed to fetch bootcamp details.');
          
          const bc = data.data;
          setForm({
            name: bc.name || '',
            title: bc.title || '',
            description: bc.description || '',
            level: bc.level || 'Beginner',
            duration: bc.duration || '',
            price: bc.price || '',
            format: bc.format || 'Live Online',
            cohortStart: bc.cohortStart || '',
            paymentPlan: bc.paymentPlan || '',
            summary: bc.summary || '',
          });
        } catch (err) {
          setError(err.message);
        } finally {
          setFetching(false);
        }
      };
      fetchBootcamp();
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const url = isEdit 
        ? `http://localhost:5000/api/bootcamps/${id}` 
        : 'http://localhost:5000/api/bootcamps';
      const method = isEdit ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || `Failed to ${isEdit ? 'update' : 'create'} bootcamp.`);
      navigate('/admin');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    'w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition';
  const labelCls = 'block text-sm font-medium text-gray-700 mb-1';

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <button
        onClick={() => navigate('/admin')}
        className="flex items-center gap-2 text-gray-500 hover:text-gray-800 text-sm font-medium mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </button>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        {fetching ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="w-8 h-8 text-blue-500 animate-spin mb-4" />
            <p className="text-gray-500 font-medium">Loading bootcamp details...</p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-100 p-2.5 rounded-xl">
                {isEdit ? <Save className="w-6 h-6 text-blue-600" /> : <BookPlus className="w-6 h-6 text-blue-600" />}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{isEdit ? 'Edit Bootcamp' : 'Add New Bootcamp'}</h1>
                <p className="text-sm text-gray-500 mt-0.5">
                  {isEdit ? 'Update the details of the existing bootcamp.' : 'Fill in the details to publish a new bootcamp to the catalog.'}
                </p>
              </div>
            </div>

        {error && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>Internal Name <span className="text-red-500">*</span></label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={inputCls}
                placeholder="e.g. fullstack-2025"
                required
              />
              <p className="text-xs text-gray-400 mt-1">Unique identifier, no spaces preferred.</p>
            </div>
            <div>
              <label className={labelCls}>Display Title <span className="text-red-500">*</span></label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className={inputCls}
                placeholder="e.g. Full Stack Web Development"
                required
              />
            </div>
          </div>

          <div>
            <label className={labelCls}>Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className={inputCls}
              rows={3}
              placeholder="What will students learn in this bootcamp?"
            />
          </div>

          <div>
            <label className={labelCls}>Short Summary</label>
            <input
              name="summary"
              value={form.summary}
              onChange={handleChange}
              className={inputCls}
              placeholder="One-liner shown on the catalog card"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            <div>
              <label className={labelCls}>Level</label>
              <select name="level" value={form.level} onChange={handleChange} className={inputCls}>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Duration</label>
              <input
                name="duration"
                value={form.duration}
                onChange={handleChange}
                className={inputCls}
                placeholder="e.g. 16 Weeks"
              />
            </div>
            <div>
              <label className={labelCls}>Format</label>
              <select name="format" value={form.format} onChange={handleChange} className={inputCls}>
                <option>Live Online</option>
                <option>Self-Paced</option>
                <option>Hybrid</option>
                <option>In-Person</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            <div>
              <label className={labelCls}>Price</label>
              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                className={inputCls}
                placeholder="e.g. ₹49,999"
              />
            </div>
            <div>
              <label className={labelCls}>Payment Plan</label>
              <input
                name="paymentPlan"
                value={form.paymentPlan}
                onChange={handleChange}
                className={inputCls}
                placeholder="e.g. 3 instalments of ₹16,666"
              />
            </div>
            <div>
              <label className={labelCls}>Cohort Start</label>
              <input
                name="cohortStart"
                value={form.cohortStart}
                onChange={handleChange}
                className={inputCls}
                placeholder="e.g. April 15, 2025"
              />
            </div>
          </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => navigate('/admin')}
                className="px-5 py-2.5 border border-gray-200 text-gray-600 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm flex items-center gap-2 disabled:opacity-60"
              >
                {isEdit ? <Save className="w-4 h-4" /> : <BookPlus className="w-4 h-4" />}
                {loading ? (isEdit ? 'Updating...' : 'Publishing...') : (isEdit ? 'Update Bootcamp' : 'Publish Bootcamp')}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  </div>
);
}
