import { useEffect, useState } from 'react';
import { bootcamps as fallbackBootcamps } from '../data/platformData';
import { fetchBootcamps } from '../lib/bootcampApi';

export function useBootcamps() {
  const [bootcamps, setBootcamps] = useState(fallbackBootcamps);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    let active = true;

    const loadBootcamps = async () => {
      try {
        const data = await fetchBootcamps();

        if (!active) {
          return;
        }

        if (data.length > 0) {
          setBootcamps(data);
          setUsingFallback(false);
        } else {
          setUsingFallback(true);
        }
      } catch (error) {
        if (active) {
          setUsingFallback(true);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadBootcamps();

    return () => {
      active = false;
    };
  }, []);

  return { bootcamps, loading, usingFallback };
}
