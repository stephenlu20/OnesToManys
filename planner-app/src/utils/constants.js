export const API_BASE_URL = 'http://localhost:8080';

export const API_ENDPOINTS = {
  // Activity endpoints
  ACTIVITIES: `${API_BASE_URL}/activity`,
  ACTIVITIES_BY_USER: (userId) => `${API_BASE_URL}/activity/user/${userId}`,
  ACTIVITY_BY_ID: (id) => `${API_BASE_URL}/activity/${id}`,
  ACTIVITY_TOGGLE: (id) => `${API_BASE_URL}/activity/toggle/${id}`,
  ACTIVITIES_DELETE_BY_USER: (userId) => `${API_BASE_URL}/activity/user/${userId}`,
  
  // User endpoints
  USERS: `${API_BASE_URL}/user`,
  USER_BY_ID: (id) => `${API_BASE_URL}/user/${id}`,
  
  // Template endpoints
  TEMPLATES: `${API_BASE_URL}/template`,
  TEMPLATES_BY_USER: (userId) => `${API_BASE_URL}/template/user/${userId}`,
  TEMPLATE_BY_ID: (id) => `${API_BASE_URL}/template/${id}`,
  TEMPLATES_DELETE_BY_USER: (userId) => `${API_BASE_URL}/template/user/${userId}`
};

export const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];