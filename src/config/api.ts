// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://trovo-backend.onrender.com';

export const API_ENDPOINTS = {
    EARLY_ACCESS: `${API_BASE_URL}/api/early-access`,
    USER_COUNT: `${API_BASE_URL}/api/user-count`,
} as const;

export default API_BASE_URL;
