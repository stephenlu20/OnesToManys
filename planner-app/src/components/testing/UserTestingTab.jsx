import React, { useState } from 'react';
import { userService } from '../../services/userService';
import ApiTestSection from './ApiTestSection';

export default function UserTestingTab({ setResponse, setLoading }) {
  const [getUserIdInput, setGetUserIdInput] = useState('');
  const [updateUserIdInput, setUpdateUserIdInput] = useState('');
  const [deleteUserIdInput, setDeleteUserIdInput] = useState('');
  
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    weight: ''
  });

  const executeApiCall = async (apiFunction, clearFunction) => {
    setLoading(true);
    try {
      const data = await apiFunction();
      setResponse(JSON.stringify(data, null, 2));
      if (clearFunction) clearFunction();
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-700">User API Tests</h3>
      
      {/* GET User by ID */}
      <ApiTestSection
        title="Get User by ID"
        method="GET"
        onSubmit={() => executeApiCall(
          () => userService.getById(getUserIdInput),
          () => setGetUserIdInput('')
        )}
        buttonLabel="GET User"
      >
        <input
          type="number"
          placeholder="User ID"
          value={getUserIdInput}
          onChange={(e) => setGetUserIdInput(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
      </ApiTestSection>

      {/* POST - Create User */}
      <ApiTestSection
        title="Create New User"
        method="POST"
        onSubmit={() => {
          const payload = {
            ...userData,
            age: parseInt(userData.age),
            weight: parseInt(userData.weight)
          };
          executeApiCall(
            () => userService.create(payload),
            () => setUserData({
              firstName: '',
              lastName: '',
              age: '',
              weight: ''
            })
          );
        }}
        buttonLabel="POST Create User"
      >
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="First Name"
            value={userData.firstName}
            onChange={(e) => setUserData({...userData, firstName: e.target.value})}
            className="border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={userData.lastName}
            onChange={(e) => setUserData({...userData, lastName: e.target.value})}
            className="border px-3 py-2 rounded"
          />
          <input
            type="number"
            placeholder="Age"
            value={userData.age}
            onChange={(e) => setUserData({...userData, age: e.target.value})}
            className="border px-3 py-2 rounded"
          />
          <input
            type="number"
            placeholder="Weight"
            value={userData.weight}
            onChange={(e) => setUserData({...userData, weight: e.target.value})}
            className="border px-3 py-2 rounded"
          />
        </div>
      </ApiTestSection>

      {/* PUT - Update User */}
      <ApiTestSection
        title="Update User"
        method="PUT"
        onSubmit={() => {
          const payload = {
            ...userData,
            age: parseInt(userData.age),
            weight: parseInt(userData.weight)
          };
          executeApiCall(
            () => userService.update(updateUserIdInput, payload),
            () => setUpdateUserIdInput('')
          );
        }}
        buttonLabel="PUT Update User"
      >
        <input
          type="number"
          placeholder="User ID to Update"
          value={updateUserIdInput}
          onChange={(e) => setUpdateUserIdInput(e.target.value)}
          className="border px-3 py-2 rounded w-full mb-3"
        />
        <div className="text-sm text-gray-600 mb-3">
          Fill in the fields in the POST section above, then click update
        </div>
      </ApiTestSection>

      {/* DELETE User */}
      <ApiTestSection
        title="Delete User"
        method="DELETE"
        onSubmit={() => executeApiCall(
          () => userService.delete(deleteUserIdInput),
          () => setDeleteUserIdInput('')
        )}
        buttonLabel="DELETE User"
      >
        <input
          type="number"
          placeholder="User ID to Delete"
          value={deleteUserIdInput}
          onChange={(e) => setDeleteUserIdInput(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
      </ApiTestSection>
    </div>
  );
}