let config = {
  options: {
    editorconfig: true,
  },
  semi: false,
  printWidth: 120,
  trailingComma: 'all',
  singleQuote: true,
  bracketSpacing: true,
  proseWrap: 'always',
  arrowParens: 'always',
}

module.exports = {
  ...config,
  overrides: [
    {
      files: ['*.js', '*.ts'],
      rules: {
        'prettier/prettier': ['error', config],
      },
    },
  ],
}
