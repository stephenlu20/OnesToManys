import React, { useState } from 'react';
import TabNavigation from './components/common/TabNavigation';
import TestingPanel from './components/testing/TestingPanel';
import UserLogin from './components/auth/UserLogin';
import Calendar from './components/calendar/Calendar';

export default function App() {
  const [activeTab, setActiveTab] = useState('testing');
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  const tabs = [
    { id: 'testing', label: 'API Testing' },
    { id: 'calendar', label: 'Calendar View' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <TabNavigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        tabs={tabs}
      />
      
      <div className="max-w-7xl mx-auto p-6">
        {activeTab === 'testing' ? (
          <TestingPanel />
        ) : (
          <>
            {!loggedInUserId ? (
              <UserLogin onLogin={setLoggedInUserId} />
            ) : (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">
                    Calendar for User #{loggedInUserId}
                  </h2>
                  <button
                    onClick={() => setLoggedInUserId(null)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Logout
                  </button>
                </div>
                <Calendar userId={loggedInUserId} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}