import React, { useState } from 'react';
import { templateService } from '../../services/templateService';
import ApiTestSection from './ApiTestSection';

export default function TemplateTestingTab({ setResponse, setLoading }) {
  const [getUserIdInput, setGetUserIdInput] = useState('');
  const [getTemplateIdInput, setGetTemplateIdInput] = useState('');
  const [updateTemplateIdInput, setUpdateTemplateIdInput] = useState('');
  const [deleteTemplateIdInput, setDeleteTemplateIdInput] = useState('');
  const [deleteByUserIdInput, setDeleteByUserIdInput] = useState('');
  
  const [templateData, setTemplateData] = useState({
    userId: '',
    label: '',
    category: ''
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
      <h3 className="text-xl font-bold text-gray-700">Template API Tests</h3>
      
      {/* GET All Templates by User ID */}
      <ApiTestSection
        title="Get Templates by User ID"
        method="GET"
        onSubmit={() => executeApiCall(
          () => templateService.getAllByUserId(getUserIdInput),
          () => setGetUserIdInput('')
        )}
        buttonLabel="GET Templates"
      >
        <input
          type="number"
          placeholder="User ID"
          value={getUserIdInput}
          onChange={(e) => setGetUserIdInput(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
      </ApiTestSection>

      {/* GET Single Template by ID */}
      <ApiTestSection
        title="Get Template by ID"
        method="GET"
        onSubmit={() => executeApiCall(
          () => templateService.getById(getTemplateIdInput),
          () => setGetTemplateIdInput('')
        )}
        buttonLabel="GET Template"
      >
        <input
          type="number"
          placeholder="Template ID"
          value={getTemplateIdInput}
          onChange={(e) => setGetTemplateIdInput(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
      </ApiTestSection>

      {/* POST - Create Template */}
      <ApiTestSection
        title="Create New Template"
        method="POST"
        onSubmit={() => {
          const payload = {
            ...templateData,
            userId: parseInt(templateData.userId)
          };
          executeApiCall(
            () => templateService.create(payload),
            () => setTemplateData({
              userId: '',
              label: '',
              category: ''
            })
          );
        }}
        buttonLabel="POST Create Template"
      >
        <div className="grid grid-cols-2 gap-3">
          <input
            type="number"
            placeholder="User ID"
            value={templateData.userId}
            onChange={(e) => setTemplateData({...templateData, userId: e.target.value})}
            className="border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Label"
            value={templateData.label}
            onChange={(e) => setTemplateData({...templateData, label: e.target.value})}
            className="border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Category"
            value={templateData.category}
            onChange={(e) => setTemplateData({...templateData, category: e.target.value})}
            className="border px-3 py-2 rounded col-span-2"
          />
        </div>
      </ApiTestSection>

      {/* PUT - Update Template */}
      <ApiTestSection
        title="Update Template"
        method="PUT"
        onSubmit={() => {
          const payload = {
            ...templateData,
            userId: parseInt(templateData.userId)
          };
          executeApiCall(
            () => templateService.update(updateTemplateIdInput, payload),
            () => setUpdateTemplateIdInput('')
          );
        }}
        buttonLabel="PUT Update Template"
      >
        <input
          type="number"
          placeholder="Template ID to Update"
          value={updateTemplateIdInput}
          onChange={(e) => setUpdateTemplateIdInput(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
        <div className="text-sm text-gray-600">
          Fill in the fields in the POST section above, then click update
        </div>
      </ApiTestSection>

      {/* DELETE Template */}
      <ApiTestSection
        title="Delete Template"
        method="DELETE"
        onSubmit={() => executeApiCall(
          () => templateService.delete(deleteTemplateIdInput),
          () => setDeleteTemplateIdInput('')
        )}
        buttonLabel="DELETE Template"
      >
        <input
          type="number"
          placeholder="Template ID to Delete"
          value={deleteTemplateIdInput}
          onChange={(e) => setDeleteTemplateIdInput(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
      </ApiTestSection>

      {/* DELETE Templates by User ID */}
      <ApiTestSection
        title="Delete All Templates by User ID"
        method="DELETE"
        onSubmit={() => executeApiCall(
          () => templateService.deleteByUserId(deleteByUserIdInput),
          () => setDeleteByUserIdInput('')
        )}
        buttonLabel="DELETE All User Templates"
      >
        <input
          type="number"
          placeholder="User ID"
          value={deleteByUserIdInput}
          onChange={(e) => setDeleteByUserIdInput(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
      </ApiTestSection>
    </div>
  );
}