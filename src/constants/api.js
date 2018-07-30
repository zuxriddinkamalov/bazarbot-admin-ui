// Global
export const HOST = 'http://localhost:8080'

// Admin API settings
export const API_HOST = process.env.API_HOST || 'localhost:8000'
export const API_ROOT = 'api'
export const API_VERSION = 'v1'
export const API_URL = `http://${API_HOST}/${API_ROOT}/${API_VERSION}`
