(function (Prism) {

	var operators = [
		// query and projection
		'$eq', '$gt', '$gte', '$in', '$lt', '$lte', '$ne', '$nin', '$and', '$not', '$nor', '$or', 
		'$exists', '$type', '$expr', '$jsonSchema', '$mod', '$regex', '$text', '$where', '$geoIntersects', 
		'$geoWithin', '$near', '$nearSphere', '$all', '$elemMatch', '$size', '$bitsAllClear', '$bitsAllSet', 
		'$bitsAnyClear', '$bitsAnySet', '$comment', '$elemMatch', '$meta', '$slice',

		// aggregation pipeline stages
		'$addFields', '$bucket', '$bucketAuto', '$collStats', '$count', '$currentOp', '$facet', '$geoNear', 
		'$graphLookup', '$group','$indexStats', '$limit', '$listLocalSessions', '$listSessions', '$lookup', 
		'$match', '$merge', '$out', '$planCacheStats', '$project', '$redact', '$replaceRoot', '$replaceWith', 
		'$sample', '$set', '$skip', '$sort', '$sortByCount', '$unionWith', '$unset', '$unwind',

		// aggregation pipeline operators
		'$abs', '$accumulator', '$acos', '$acosh', '$add', '$addToSet', '$allElementsTrue', '$and', 
		'$anyElementTrue', '$arrayElemAt', '$arrayToObject', '$asin', '$asinh', '$atan', '$atan2',
		'$atanh', '$avg', '$binarySize', '$bsonSize', '$ceil', '$cmp', '$concat', '$concatArrays', '$cond', 
		'$convert', '$cos', '$dateFromParts', '$dateToParts', '$dateFromString', '$dateToString', '$dayOfMonth', 
		'$dayOfWeek', '$dayOfYear', '$degreesToRadians', '$divide', '$eq', '$exp', '$filter', '$first',
		'$floor', '$function', '$gt', '$gte', '$hour', '$ifNull', '$in', '$indexOfArray', '$indexOfBytes', 
		'$indexOfCP', '$isArray', '$isNumber', '$isoDayOfWeek', '$isoWeek', '$isoWeekYear', '$last',
		'$last', '$let', '$literal', '$ln', '$log', '$log10', '$lt', '$lte', '$ltrim', '$map', '$max',
		'$mergeObjects', '$meta', '$min', '$millisecond', '$minute', '$mod', '$month', '$multiply', '$ne', 
		'$not', '$objectToArray', '$or', '$pow', '$push', '$radiansToDegrees', '$range', '$reduce',
		'$regexFind', '$regexFindAll', '$regexMatch', '$replaceOne', '$replaceAll', '$reverseArray', '$round', 
		'$rtrim', '$second', '$setDifference', '$setEquals', '$setIntersection', '$setIsSubset', '$setUnion', 
		'$size', '$sin', '$slice', '$split', '$sqrt', '$stdDevPop', '$stdDevSamp', '$strcasecmp', '$strLenBytes',
		'$strLenCP', '$substr', '$substrBytes', '$substrCP', '$subtract', '$sum', '$switch', '$tan',
		'$toBool', '$toDate', '$toDecimal', '$toDouble', '$toInt', '$toLong', '$toObjectId', '$toString',
		'$toLower', '$toUpper', '$trim', '$trunc', '$type', '$week', '$year', '$zip',

		// aggregation pipeline query modifiers
		'$comment', '$explain', '$hint', '$max', '$maxTimeMS', '$min', '$orderby', '$query',
		'$returnKey', '$showDiskLoc', '$natural',
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

	Prism.languages['mongodb-aggregation'] = {
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




