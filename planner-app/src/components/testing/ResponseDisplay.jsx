import React from 'react';

export default function ResponseDisplay({ response, loading }) {
  return (
    <div className="bg-gray-900 text-green-400 p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-3">Response:</h3>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <pre className="whitespace-pre-wrap">
          {response || 'No response yet'}
        </pre>
      )}
    </div>
  );
}