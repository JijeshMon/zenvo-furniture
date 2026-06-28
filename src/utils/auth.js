// Get stored token
export const getToken = () => {
  return localStorage.getItem('token');
};

// Set token in headers
export const authHeader = () => {
  const token = getToken();
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
};

// Check if user is authenticated
export const isAuthenticated = () => {
  const token = getToken();
  return token !== null;
};

// Logout user
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('adminAuth');
  localStorage.removeItem('adminUserName');
};

// Create authenticated fetch function
export const authFetch = async (url, options = {}) => {
  const token = getToken();
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  };
  
  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };
  
  const response = await fetch(url, mergedOptions);
  
  if (response.status === 401) {
    logout();
    window.location.href = '/login';
    return null;
  }
  
  return response;
};