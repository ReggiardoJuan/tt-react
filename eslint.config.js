import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default defineConfig([
    globalIgnores(['dist', 'node_modules']),
    js.configs.recommended,
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        plugins: {
            import: importPlugin,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            'block-spacing': ['warn', 'always'],
            curly: 'error',
            eqeqeq: 'error',
            'import/order': [
                'error',
                {
                    named: true,
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc' },
                    groups: ['builtin', ['external', 'internal'], ['parent', 'sibling', 'index', 'object'], 'type'],
                    pathGroups: [
                        { group: 'builtin', pattern: 'react', position: 'before' },
                        { group: 'external', pattern: '@mui/icons-material', position: 'after' },
                    ],
                    pathGroupsExcludedImportTypes: ['react'],
                },
            ],
            'no-console': ['warn', { allow: ['error', 'warn'] }],
            'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
            'object-curly-spacing': ['error', 'always'],
            quotes: ['error', 'single'],
            semi: ['error', 'always', { omitLastInOneLineBlock: true }],
        },
    },
]);
