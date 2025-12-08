import React from 'react';
import { DAY_NAMES } from '../../utils/constants';
import CalendarDay from './CalendarDay';

export default function CalendarGrid({ dayNumbers, getActivitiesForDate, onActivityClick }) {
  return (
    <div className="grid grid-cols-7 gap-2">
      {/* Day headers */}
      {DAY_NAMES.map(day => (
        <div key={day} className="text-center font-semibold text-gray-700 py-2">
          {day}
        </div>
      ))}
      
      {/* Day cells */}
      {dayNumbers.map((day, index) => {
        const activities = getActivitiesForDate(day);
        return (
          <CalendarDay
            key={index}
            day={day}
            activities={activities}
            onActivityClick={onActivityClick}
          />
        );
      })}
    </div>
  );
}