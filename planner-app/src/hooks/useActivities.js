import { useState, useEffect } from 'react';
import { activityService } from '../services/activityService';

export const useActivities = (userId) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchActivities = async () => {
    if (!userId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const data = await activityService.getAllByUserId(userId);
      setActivities(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching activities:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, [userId]);

  return { activities, loading, error, refetch: fetchActivities };
};