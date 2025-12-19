import React from 'react';
import Modal from '../common/Modal';
import { formatDateTime } from '../../utils/dateUtils';

export default function ActivityDetailModal({ activity, onClose }) {
  if (!activity) return null;

  return (
    <Modal isOpen={!!activity} onClose={onClose} title={activity.label}>
      <div className="space-y-3">
        <div>
          <span className="font-semibold">Category:</span> {activity.category}
        </div>
        
        <div>
          <span className="font-semibold">Date & Time:</span> {formatDateTime(activity.dateTime)}
        </div>
        
        <div>
          <span className="font-semibold">Duration:</span> {activity.duration} minutes
        </div>
        
        <div>
          <span className="font-semibold">Status:</span> {activity.isCompleted ? '✓ Completed' : 'Pending'}
        </div>
        
        {activity.description && (
          <div>
            <span className="font-semibold">Description:</span>
            <p className="mt-1 text-gray-700">{activity.description}</p>
          </div>
        )}
        
        {activity.note && (
          <div>
            <span className="font-semibold">Note:</span>
            <p className="mt-1 text-gray-700">{activity.note}</p>
          </div>
        )}
      </div>
      
      <button
        onClick={onClose}
        className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Close
      </button>
    </Modal>
  );
}