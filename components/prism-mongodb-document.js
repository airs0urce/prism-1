(function (Prism) {

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

	Prism.languages['mongodb-document'] = {
		'property': {
			pattern: /(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)(?=\s*:)/,
		},
		'string': {
			pattern: /(['"]).*?[^\\]\1/i,
			greedy: true,
			inside: {
				url: {
					// url pattern
					pattern: /https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,
					greedy: true
				},
				entity: {
					// ipv4
					pattern: /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/,
					greedy: true  
				}
			}
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




