// **SUMMARY-CODE** 4
// export const ENV_VARS = {
//     PORT: 'PORT',
//     MONGODB_USER: 'MONGODB_USER',
//     MONGODB_PASSWORD: 'MONGODB_PASSWORD',
//     MONGODB_URL: 'MONGODB_URL',
//     MONGODB_DB: 'MONGODB_DB',
// };

// **SUMMARY-CODE** 5

// export const ENV_VARS = {
//     PORT: 'PORT',
//     MONGODB_USER: 'MONGODB_USER',
//     MONGODB_PASSWORD: 'MONGODB_PASSWORD',
//     MONGODB_URL: 'MONGODB_URL',
//     MONGODB_DB: 'MONGODB_DB',
// };

// export const SORT_ORDER = {
//     ASC: 'asc',
//     DESC: 'desc',
// };

// export const FIFTEEN_MINUTES = 15 * 60 * 1000;

// export const ONE_DAY = 24 * 60 * 60 * 1000;

// export const ROLES = {
//     TEACHER: 'teacher',
//     PARENT: 'parent',
// };


// **SUMMARY-CODE** 6
import path from 'node:path';

export const ENV_VARS = {
    PORT: 'PORT',
    MONGODB_USER: 'MONGODB_USER',
    MONGODB_PASSWORD: 'MONGODB_PASSWORD',
    MONGODB_URL: 'MONGODB_URL',
    MONGODB_DB: 'MONGODB_DB',
};

export const SORT_ORDER = {
    ASC: 'asc',
    DESC: 'desc',
};

export const FIFTEEN_MINUTES = 15 * 60 * 1000;

export const ONE_DAY = 24 * 60 * 60 * 1000;

export const ROLES = {
    TEACHER: 'teacher',
    PARENT: 'parent',
};

export const SMTP = {
  SMTP_HOST: 'SMTP_HOST',
  SMTP_PORT: 'SMTP_PORT',
  SMTP_USER: 'SMTP_USER',
  SMTP_PASSWORD: 'SMTP_PASSWORD',
  SMTP_FROM: 'SMTP_FROM',
};

export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');
