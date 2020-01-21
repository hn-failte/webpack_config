module.exports = {
    'root': true,
	'env': {
		'browser': true,
        'es6': true,
        'node': true,
        'commonjs': true
	},
	'extends': [
        'eslint:recommended',
        'prettier',
		'plugin:vue/essential'
	],
	'globals': {
		'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': 'babel-eslint',
	'parserOptions': {
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
        'vue'
	],
	'rules': {
		'indent': [
            'error',
            4
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};
