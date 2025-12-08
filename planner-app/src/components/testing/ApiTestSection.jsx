import React from 'react';

export default function ApiTestSection({ 
  title, 
  method, 
  colorClass, 
  children, 
  onSubmit, 
  buttonLabel 
}) {
  const methodColors = {
    GET: 'text-green-600',
    POST: 'text-blue-600',
    PUT: 'text-yellow-600',
    DELETE: 'text-red-600'
  };

  const buttonColors = {
    GET: 'bg-green-500 hover:bg-green-600',
    POST: 'bg-blue-500 hover:bg-blue-600',
    PUT: 'bg-yellow-500 hover:bg-yellow-600',
    DELETE: 'bg-red-500 hover:bg-red-600'
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className={`text-lg font-semibold mb-3 ${methodColors[method]}`}>
        {method} - {title}
      </h3>
      <div className="space-y-3">
        {children}
        <button
          onClick={onSubmit}
          className={`${buttonColors[method]} text-white px-4 py-2 rounded w-full`}
        >
          {buttonLabel || `${method} ${title}`}
        </button>
      </div>
    </div>
  );
}