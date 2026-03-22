const API_BASE_URL =
  import.meta.env.VITE_API_URL?.replace(/\/$/, '') || 'http://127.0.0.1:5000';

const mapBootcamp = (bootcamp) => ({
  id: bootcamp._id,
  title: bootcamp.title || bootcamp.name,
  shortTitle: bootcamp.shortTitle || bootcamp.name,
  description: bootcamp.description || '',
  summary: bootcamp.summary || '',
  level: bootcamp.level || 'Bootcamp',
  duration: bootcamp.duration || '',
  price: bootcamp.price || '',
  cohortStart: bootcamp.cohortStart || '',
  mentor: bootcamp.mentor || { name: '', role: '', company: '' },
  tags: bootcamp.tags || [],
  outcomes: bootcamp.outcomes || [],
  paymentPlan: bootcamp.paymentPlan || '',
  format: bootcamp.format || '',
  modules: bootcamp.modules || [],
  features: bootcamp.features || [],
});

export async function fetchBootcamps() {
  const response = await fetch(`${API_BASE_URL}/api/bootcamps`);

  if (!response.ok) {
    throw new Error(`Failed to fetch bootcamps: ${response.status}`);
  }

  const payload = await response.json();
  return (payload.data || []).map(mapBootcamp);
}
