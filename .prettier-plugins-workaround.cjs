// This is a workaround to make following prettier plugins compatible with each other.
// See: https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/31#issuecomment-1024722576

const prettierParserHTML = require('prettier/parser-html');
const tailwindcss = require('@jonz94/prettier-plugin-tailwindcss');
const organizeAttributes = require('@jonz94/prettier-plugin-organize-attributes');
const organizeImports = require('prettier-plugin-organize-imports');

module.exports = {
  ...tailwindcss,
  parsers: {
    ...tailwindcss.parsers,
    ...Object.keys(organizeImports.parsers).reduce((acc, key) => {
      acc[key] = {
        ...tailwindcss.parsers[key],
        preprocess(code, options) {
          return organizeImports.parsers[key].preprocess(code, options);
        },
      };
      return acc;
    }, {}),
    ...Object.keys(organizeAttributes.parsers).reduce((acc, key) => {
      acc[key] = tailwindcss.createParser(
        {
          ...prettierParserHTML.parsers[key],
          parse: organizeAttributes.transformPostParse(prettierParserHTML.parsers[key].parse),
        },
        tailwindcss.transformHtml(['class']),
      );

      if (Object.keys(organizeImports.parsers).includes(key)) {
        acc[key] = {
          ...acc[key],
          preprocess(code, options) {
            return organizeImports.parsers[key].preprocess(code, options);
          },
        };
      }
      return acc;
    }, {}),
  },
};
