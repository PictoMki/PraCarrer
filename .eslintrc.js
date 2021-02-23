module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  plugins: [
    'vue'
  ],
  rules: {
  }
}
