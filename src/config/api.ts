// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://us-central1-trovo-early.cloudfunctions.net/api';

export const API_ENDPOINTS = {
    EARLY_ACCESS: `${API_BASE_URL}/early-access`,
    USER_COUNT: `${API_BASE_URL}/user-count`,
} as const;

export default API_BASE_URL;
