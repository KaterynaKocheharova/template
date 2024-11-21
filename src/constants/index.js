import path from 'node:path';

// ======================================== ALL PATHS
// - swagger
export const SWAGGER_PATH = path.join(process.cwd(), 'docs', 'swagger.json');
// - images folders
export const TEMP_UPLOAD_DIR = path.join(process.cwd(), "temp");
export const UPLOAD_DIR = path.join(process.cwd(), "uploads");
// -templates
export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');

// ============================= NUMBERS
// - access token
export const FIFTEEN_MINUTES = 15 * 60 * 1000;
// - refresh token
export const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

// ======================================== ENV VARIABLE NAMES
// - cloudinary
export const CLOUDINARY = {
  CLOUD_NAME: 'CLOUD_NAME',
  API_KEY: 'API_KEY',
  API_SECRET: 'API_SECRET',
};
// - smtp
export const SMTP = {
  SMTP_HOST: 'SMTP_HOST',
  SMTP_PORT: 'SMTP_PORT',
  SMTP_USER: 'SMTP_USER',
  SMTP_PASSWORD: 'SMTP_PASSWORD',
  SMTP_FROM: 'SMTP_FROM',
};





