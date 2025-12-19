import React, { useState, useMemo } from 'react';
import { useActivities } from '../../hooks/useActivities';
import { getMonthDays, isSameDate } from '../../utils/dateUtils';
import { MONTH_NAMES } from '../../utils/constants';
import CalendarGrid from './CalendarGrid';
import ActivityDetailModal from './ActivityDetailModal';

export default function Calendar({ userId }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedActivity, setSelectedActivity] = useState(null);
  const { activities, loading } = useActivities(userId);

  const toDateKey = (date) => 
  `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  
  const activitiesByDate = useMemo(() => {
    const map = {};

    activities.forEach(activity => {
      const date = new Date(activity.dateTime);

      const key = toDateKey(date);

      if (!map[key]) {
        map[key] = [];
      }

      map[key].push(activity);
    });

    return map;
  }, [activities]);

  const getActivitiesForDate = (day) => {
    if (!day) return [];

    const key = toDateKey(new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    ));

    return activitiesByDate[key] || [];
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(
      currentDate.getFullYear(), 
      currentDate.getMonth() - 1, 
      1
    ));
  };
  
  const goToNextMonth = () => {
    setCurrentDate(new Date(
      currentDate.getFullYear(), 
      currentDate.getMonth() + 1, 
      1
    ));
  };

  const dayNumbers = getMonthDays(
    currentDate.getFullYear(), 
    currentDate.getMonth()
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={goToPreviousMonth}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Previous
        </button>
        <h3 className="text-xl font-bold">
          {MONTH_NAMES[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <button 
          onClick={goToNextMonth}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>

      {loading ? (
        <div className="text-center py-10">Loading activities...</div>
      ) : (
        <CalendarGrid
          dayNumbers={dayNumbers}
          getActivitiesForDate={getActivitiesForDate}
          onActivityClick={setSelectedActivity}
        />
      )}

      <ActivityDetailModal
        activity={selectedActivity}
        onClose={() => setSelectedActivity(null)}
      />
    </div>
  );
}