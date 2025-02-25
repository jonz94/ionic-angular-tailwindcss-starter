/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,
  printWidth: 120,

  attributeGroups: [
    '$ANGULAR_STRUCTURAL_DIRECTIVE',
    '$ANGULAR_ELEMENT_REF',
    '$ID',
    '$DEFAULT',
    '$CLASS',
    '$ANGULAR_ANIMATION',
    '$ANGULAR_ANIMATION_INPUT',
    '$ANGULAR_INPUT',
    '$ANGULAR_TWO_WAY_BINDING',
    '$ANGULAR_OUTPUT',
  ],

  plugins: [
    'prettier-plugin-packagejson',
    'prettier-plugin-organize-attributes',
    'prettier-plugin-organize-imports',
    'prettier-plugin-tailwindcss',
  ],

  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'angular',
      },
    },
    {
      files: ['tsconfig*.json', '.vscode/**.json'],
      options: {
        parser: 'jsonc',
      },
    },
  ],
};

export default config;
