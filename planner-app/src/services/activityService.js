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

export const activityService = {
  getAllByUserId: async (userId) => {
    return await apiCall('GET', API_ENDPOINTS.ACTIVITIES_BY_USER(userId));
  },
  
  getById: async (id) => {
    return await apiCall('GET', API_ENDPOINTS.ACTIVITY_BY_ID(id));
  },
  
  create: async (activityData) => {
    return await apiCall('POST', API_ENDPOINTS.ACTIVITIES, activityData);
  },
  
  update: async (id, activityData) => {
    return await apiCall('PUT', API_ENDPOINTS.ACTIVITY_BY_ID(id), activityData);
  },
  
  toggleCompletion: async (id) => {
    return await apiCall('PUT', API_ENDPOINTS.ACTIVITY_TOGGLE(id));
  },
  
  delete: async (id) => {
    return await apiCall('DELETE', API_ENDPOINTS.ACTIVITY_BY_ID(id));
  },
  
  deleteByUserId: async (userId) => {
    return await apiCall('DELETE', API_ENDPOINTS.ACTIVITIES_DELETE_BY_USER(userId));
  }
};