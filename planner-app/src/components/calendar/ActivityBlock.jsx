import React from 'react';
import { formatTime } from '../../utils/dateUtils';

export default function ActivityBlock({ activity, onClick }) {
  const colorClass = activity.isCompleted ? 'bg-green-500' : 'bg-red-500';

  return (
    <div
      onClick={() => onClick(activity)}
      className={`${colorClass} text-white text-xs p-1 rounded cursor-pointer hover:opacity-80 transition`}
    >
      <div className="font-semibold truncate">{activity.label}</div>
      <div className="text-xs">{formatTime(activity.dateTime)}</div>
    </div>
  );
}