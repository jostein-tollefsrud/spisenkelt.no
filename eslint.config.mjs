import eslintConfigPrettier from 'eslint-config-prettier';

const eslintConfig = [
	eslintConfigPrettier,
	{
		ignores: ['.next/**', 'node_modules/**'],
	},
];

export default eslintConfig;
