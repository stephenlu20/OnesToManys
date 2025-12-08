import { API_ENDPOINTS } from '../utils/constants';

const apiCall = async (method, endpoint, body = null) => {
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' }
  };
  
  if (body) {
    options.body = JSON.stringify(body);
  }
  
  const response = await fetch(endpoint, options);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  if (response.status === 204) {
    return { success: true, message: 'Operation completed successfully' };
  }
  
  return await response.json();
};

export const templateService = {
  getAllByUserId: async (userId) => {
    return await apiCall('GET', API_ENDPOINTS.TEMPLATES_BY_USER(userId));
  },
  
  getById: async (id) => {
    return await apiCall('GET', API_ENDPOINTS.TEMPLATE_BY_ID(id));
  },
  
  create: async (templateData) => {
    return await apiCall('POST', API_ENDPOINTS.TEMPLATES, templateData);
  },
  
  update: async (id, templateData) => {
    return await apiCall('PUT', API_ENDPOINTS.TEMPLATE_BY_ID(id), templateData);
  },
  
  delete: async (id) => {
    return await apiCall('DELETE', API_ENDPOINTS.TEMPLATE_BY_ID(id));
  },
  
  deleteByUserId: async (userId) => {
    return await apiCall('DELETE', API_ENDPOINTS.TEMPLATES_DELETE_BY_USER(userId));
  }
};