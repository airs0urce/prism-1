(function (Prism) {

	var operators = [
		// update
		'$currentDate', '$inc', '$min', '$max', '$mul', '$rename', '$set', '$setOnInsert', '$unset',
		'$addToSet', '$pop', '$pull', '$push', '$pullAll', '$each', '$position', '$slice', '$sort', '$bit',
	];

	var functions = [
		'ObjectId',
		'Code',
		'BinData',
		'DBRef',
		'Timestamp',
		'NumberLong',
		'NumberDecimal',
		'MaxKey',
		'MinKey',
		'RegExp',
		'ISODate',
		'UUID',
	];

	operators = operators.map(function(operator) { 
		return operator.replace('$', '\\$');
	});

	var operatorsSource = '(' + operators.join('|') + ')';

	Prism.languages['mongodb-update'] = {
		'property': {
			pattern: /(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)(?=\s*:)/,
			inside: {
				'keyword': RegExp('^([\'"])?' + operatorsSource + '(?:\\1)?$')
			}
		},
		'string': {
			pattern: /(['"]).*?[^\\]\1/i,
			greedy: true
		},
		'comment': [
			{pattern: /\/\*.*\*\//s, greedy: true},
			{pattern: /\/\/.*/, greedy: true}
		],
		"boolean": /\b(true|false)\b/,
		'constant': /\b(null|undefined)\b/,
		'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
		'function': RegExp('\\b(' + functions.join('|') + ')(?=\\s*\\()'),
		'punctuation': /[{}\[\]:,()]/,
	};

}(Prism));




