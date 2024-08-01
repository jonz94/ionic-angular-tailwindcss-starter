// @ts-check
import eslint from '@eslint/js';
import ngEslint from 'angular-eslint';
import twEslint from 'eslint-plugin-tailwindcss';
import tsEslint from 'typescript-eslint';

const configs = eslint.configs;
const tweslintConfigs = twEslint.configs;

export default tsEslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      configs.recommended,
      ...tsEslint.configs.recommended,
      ...tsEslint.configs.stylistic,
      ...ngEslint.configs.tsRecommended,
    ],
    processor: ngEslint.processInlineTemplates,
    rules: {
      '@angular-eslint/component-class-suffix': [
        'error',
        {
          suffixes: ['Page', 'Component'],
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...ngEslint.configs.templateRecommended,
      ...ngEslint.configs.templateAccessibility,
      ...tweslintConfigs['flat/recommended'],
    ],
    rules: {},
  },
);
