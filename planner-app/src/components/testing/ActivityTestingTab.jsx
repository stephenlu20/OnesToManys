import React, { useState } from 'react';
import { activityService } from '../../services/activityService';
import { convertToISO } from '../../utils/dateUtils';
import ApiTestSection from './ApiTestSection';

export default function ActivityTestingTab({ setResponse, setLoading }) {
  const [userId, setUserId] = useState('');
  const [activityId, setActivityId] = useState('');
  const [activityData, setActivityData] = useState({
    userId: '',
    label: '',
    category: '',
    duration: '',
    dateTime: '',
    isCompleted: false,
    description: '',
    note: ''
  });

  const executeApiCall = async (apiFunction) => {
    setLoading(true);
    try {
      const data = await apiFunction();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-700">Activity API Tests</h3>
      
      {/* GET All Activities by User ID */}
      <ApiTestSection
        title="Get Activities by User ID"
        method="GET"
        onSubmit={() => executeApiCall(() => activityService.getAllByUserId(userId))}
        buttonLabel="GET Activities"
      >
        <input
          type="number"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
      </ApiTestSection>

      {/* GET Single Activity by ID */}
      <ApiTestSection
        title="Get Activity by ID"
        method="GET"
        onSubmit={() => executeApiCall(() => activityService.getById(activityId))}
        buttonLabel="GET Activity"
      >
        <input
          type="number"
          placeholder="Activity ID"
          value={activityId}
          onChange={(e) => setActivityId(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
      </ApiTestSection>

      {/* POST - Create Activity */}
      <ApiTestSection
        title="Create New Activity"
        method="POST"
        onSubmit={() => {
          const payload = {
            ...activityData,
            userId: parseInt(activityData.userId),
            duration: parseInt(activityData.duration),
            dateTime: convertToISO(activityData.dateTime)
          };
          executeApiCall(() => activityService.create(payload));
        }}
        buttonLabel="POST Create Activity"
      >
        <div className="grid grid-cols-2 gap-3">
          <input
            type="number"
            placeholder="User ID"
            value={activityData.userId}
            onChange={(e) => setActivityData({...activityData, userId: e.target.value})}
            className="border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Label"
            value={activityData.label}
            onChange={(e) => setActivityData({...activityData, label: e.target.value})}
            className="border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Category"
            value={activityData.category}
            onChange={(e) => setActivityData({...activityData, category: e.target.value})}
            className="border px-3 py-2 rounded"
          />
          <input
            type="number"
            placeholder="Duration (minutes)"
            value={activityData.duration}
            onChange={(e) => setActivityData({...activityData, duration: e.target.value})}
            className="border px-3 py-2 rounded"
          />
          <input
            type="datetime-local"
            placeholder="Date & Time"
            value={activityData.dateTime}
            onChange={(e) => setActivityData({...activityData, dateTime: e.target.value})}
            className="border px-3 py-2 rounded"
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={activityData.isCompleted}
              onChange={(e) => setActivityData({...activityData, isCompleted: e.target.checked})}
              className="mr-2"
            />
            <label>Completed</label>
          </div>
          <input
            type="text"
            placeholder="Description"
            value={activityData.description}
            onChange={(e) => setActivityData({...activityData, description: e.target.value})}
            className="border px-3 py-2 rounded col-span-2"
          />
          <input
            type="text"
            placeholder="Note"
            value={activityData.note}
            onChange={(e) => setActivityData({...activityData, note: e.target.value})}
            className="border px-3 py-2 rounded col-span-2"
          />
        </div>
      </ApiTestSection>

      {/* PUT - Update Activity */}
      <ApiTestSection
        title="Update Activity"
        method="PUT"
        onSubmit={() => {
          const payload = {
            ...activityData,
            userId: parseInt(activityData.userId),
            duration: parseInt(activityData.duration),
            dateTime: convertToISO(activityData.dateTime)
          };
          executeApiCall(() => activityService.update(activityId, payload));
        }}
        buttonLabel="PUT Update Activity"
      >
        <input
          type="number"
          placeholder="Activity ID to Update"
          value={activityId}
          onChange={(e) => setActivityId(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
        <div className="text-sm text-gray-600">
          Fill in the fields in the POST section above, then click update
        </div>
      </ApiTestSection>

      {/* PUT - Toggle Completion */}
      <ApiTestSection
        title="Toggle Activity Completion"
        method="PUT"
        onSubmit={() => executeApiCall(() => activityService.toggleCompletion(activityId))}
        buttonLabel="PUT Toggle Completion"
      >
        <input
          type="number"
          placeholder="Activity ID"
          value={activityId}
          onChange={(e) => setActivityId(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
      </ApiTestSection>

      {/* DELETE Activity */}
      <ApiTestSection
        title="Delete Activity"
        method="DELETE"
        onSubmit={() => executeApiCall(() => activityService.delete(activityId))}
        buttonLabel="DELETE Activity"
      >
        <input
          type="number"
          placeholder="Activity ID to Delete"
          value={activityId}
          onChange={(e) => setActivityId(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
      </ApiTestSection>

      {/* DELETE Activities by User ID */}
      <ApiTestSection
        title="Delete All Activities by User ID"
        method="DELETE"
        onSubmit={() => executeApiCall(() => activityService.deleteByUserId(userId))}
        buttonLabel="DELETE All User Activities"
      >
        <input
          type="number"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
      </ApiTestSection>
    </div>
  );
}