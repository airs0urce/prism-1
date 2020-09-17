(function (Prism) {

	var operators = [
		// query and projection
		'$eq', '$gt', '$gte', '$in', '$lt', '$lte', '$ne', '$nin', '$and', '$not', '$nor', '$or', 
		'$exists', '$type', '$expr', '$jsonSchema', '$mod', '$regex', '$text', '$where', '$geoIntersects', 
		'$geoWithin', '$near', '$nearSphere', '$all', '$elemMatch', '$size', '$bitsAllClear', '$bitsAllSet', 
		'$bitsAnyClear', '$bitsAnySet', '$comment', '$elemMatch', '$meta', '$slice',
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

	Prism.languages['mongodb-filter'] = {
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




