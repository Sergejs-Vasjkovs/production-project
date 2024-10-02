import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin"; // Correct import for the plugin
import tsParser from "@typescript-eslint/parser"; // Needed for TypeScript parsing
import pluginReact from "eslint-plugin-react";
import pluginI18next from "eslint-plugin-i18next";
import pluginReactHooks from "eslint-plugin-react-hooks";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser,
      globals: {
        __IS_DEV__: true,
        __API__: true,
      },
    },
    plugins: {
      i18next: pluginI18next,
      react: pluginReact,
      "@typescript-eslint": tseslint,
      "react-hooks": pluginReactHooks,
    },
    settings: {
      react: {
        version: "detect",
      }
    },
    rules: {
      'react/jsx-indent': [2, 4],
      'react/jsx-indent-props': [2, 4],
      indent: [2, 4],
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/require-default-props': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'warn',
      'react/function-component-definition': 'off',
      'no-shadow': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-underscore-dangle': 'off',
      "react/no-deprecated": 'warn',
      "@typescript-eslint/no-require-imports": "off",
      'i18next/no-literal-string': [
        'error',
        {
          markupOnly: true,
          ignoreAttribute: ['data-testid', 'to'],
        },
      ],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error"
    },
  },
  {
    ignores: ["node_modules", "build", "eslint.config.mjs"],
  },
];
