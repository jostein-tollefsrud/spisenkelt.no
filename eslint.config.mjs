import eslintConfigPrettier from 'eslint-config-prettier';
import pluginNext from '@next/eslint-plugin-next';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

const eslintConfig = [
	eslintConfigPrettier,
	...tseslint.config({
		extends: [
			...tseslint.configs.recommendedTypeChecked,
			...tseslint.configs.strictTypeChecked,
			...tseslint.configs.stylisticTypeChecked,
		],
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ['*.js', '*.mjs'],
				},
			},
		},
		rules: {
			'@typescript-eslint/restrict-template-expressions': 'off',
		},
	}),
	{
		plugins: {
			'@next/next': pluginNext,
		},
		rules: {
			...pluginNext.configs.recommended.rules,
			...pluginNext.configs['core-web-vitals'].rules,
		},
	},
	{
		plugins: {
			'react-hooks': pluginReactHooks,
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			...pluginReactHooks.configs.recommended.rules,
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
		},
	},
	{
		ignores: ['.next/**', 'node_modules/**'],
	},
];

export default eslintConfig;
