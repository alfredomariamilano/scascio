/** @type {import("prettier").Config} */
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  // parser: 'typescript',
  // overrides: [
  //   {
  //     files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  //     options: {
  //       parser: 'typescript',
  //     },
  //   },
  //   {
  //     files: ['**/*.css', '**/*.module.css'],
  //     options: {
  //       parser: 'css',
  //     },
  //   },
  // ],
  printWidth: 100,
  semi: false,
  singleQuote: true,
  trailingComma: "all",
  arrowParens: "avoid",
  tabWidth: 2,
  bracketSpacing: true,
  endOfLine: "auto",
};
