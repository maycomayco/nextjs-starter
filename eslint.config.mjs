import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // ...compat.extends("next/core-web-vitals", "next/typescript","prettier"),
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    rules: {
      'prefer-arrow-callback': 'error',
      'no-console': 'warn',
      'prefer-template': 'error',
      semi: 'error',
      quotes: ['error', 'double'],
    },
  }),
  eslintPluginPrettierRecommended,
];

export default eslintConfig;
