import React from 'react';
import ActivityBlock from './ActivityBlock';

export default function CalendarDay({ day, activities, onActivityClick }) {
  return (
    <div
      className={`min-h-24 border border-gray-300 rounded p-2 ${
        day ? 'bg-white' : 'bg-gray-50'
      }`}
    >
      {day && (
        <>
          <div className="text-sm font-semibold text-gray-600 mb-1">
            {day}
          </div>
          <div className="space-y-1">
            {activities.map(activity => (
              <ActivityBlock
                key={activity.id}
                activity={activity}
                onClick={onActivityClick}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}