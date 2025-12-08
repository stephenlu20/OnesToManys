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
  
  if (method === 'DELETE' && response.status === 204) {
    return { success: true, message: 'Operation completed successfully' };
  }
  
  return await response.json();
};

export const userService = {
  getById: async (id) => {
    return await apiCall('GET', API_ENDPOINTS.USER_BY_ID(id));
  },
  
  create: async (userData) => {
    return await apiCall('POST', API_ENDPOINTS.USERS, userData);
  },
  
  update: async (id, userData) => {
    return await apiCall('PUT', API_ENDPOINTS.USER_BY_ID(id), userData);
  },
  
  delete: async (id) => {
    return await apiCall('DELETE', API_ENDPOINTS.USER_BY_ID(id));
  }
};
