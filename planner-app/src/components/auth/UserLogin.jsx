import React, { useState } from 'react';

export default function UserLogin({ onLogin }) {
  const [userIdInput, setUserIdInput] = useState('');

  const handleLogin = () => {
    if (userIdInput) {
      onLogin(parseInt(userIdInput));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">User Login</h2>
        <p className="text-gray-600 mb-4 text-center">
          Enter your User ID to view your calendar
        </p>
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Enter User ID"
            value={userIdInput}
            onChange={(e) => setUserIdInput(e.target.value)}
            onKeyUp={handleKeyPress}
            className="w-full border px-4 py-3 rounded text-lg"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white px-4 py-3 rounded text-lg hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}