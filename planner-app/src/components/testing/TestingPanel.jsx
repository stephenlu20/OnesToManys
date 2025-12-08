import React, { useState } from 'react';
import ActivityTestingTab from './ActivityTestingTab';
import UserTestingTab from './UserTestingTab';
import TemplateTestingTab from './TemplateTestingTab';
import ResponseDisplay from './ResponseDisplay';

export default function TestingPanel() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeEntityTab, setActiveEntityTab] = useState('user');

  const entityTabs = [
    { id: 'user', label: 'User' },
    { id: 'template', label: 'Template' },
    { id: 'activity', label: 'Activity' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">API Testing Panel</h2>
      
      {/* Entity Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="flex border-b">
          {entityTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveEntityTab(tab.id)}
              className={`flex-1 py-3 px-6 font-semibold transition ${
                activeEntityTab === tab.id
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="p-6">
          {activeEntityTab === 'user' && (
            <UserTestingTab setResponse={setResponse} setLoading={setLoading} />
          )}
          {activeEntityTab === 'template' && (
            <TemplateTestingTab setResponse={setResponse} setLoading={setLoading} />
          )}
          {activeEntityTab === 'activity' && (
            <ActivityTestingTab setResponse={setResponse} setLoading={setLoading} />
          )}
        </div>
      </div>

      {/* Response Display */}
      <ResponseDisplay response={response} loading={loading} />
    </div>
  );
}