module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        parser: "@typescript-eslint/parser",
    },
    extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
    plugins: [],
    rules: {},
}
