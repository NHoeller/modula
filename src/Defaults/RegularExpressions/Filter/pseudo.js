/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.pseudo
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 */


			/**
			 * child/of-type selector like ":first-child"
			 */
			// alternative 'Defaults( 'RegularExpressions' )( 'Filter' )( 'CHILD' , new ... );'
			Regex.Filter[ 'CHILD' ] = new RegExp( "^:(first|last|(nth)(?:-last)?|only)-(child|of-type)(?:\\(" +
				"\\s*(even|odd|(?:([+-]|)(\\d*)n|)\\s*(?:([+-]|)\\s*(\\d+)|))\\s*\\)|)", "i");

			/**
			 * other pseudos like "::before"
			 */
			// alternative 'Defaults( 'RegularExpressions' )( 'Filter' )( 'PSEUDO' , new ... );'
			Regex.Filter[ 'PSEUDO' ] = new RegExp( "^(:(?::)?[\\w-]+)(?:\\(((?:'((?:\\\\.|[^\\\\'])*)'|" +
				"\"((?:\\\\.|[^\\\\\"])*)\")|.*)\\))?" );


			// the Defaults() method can use combined
			// 'Defaults( 'RegularExpressions' )( 'Filter' )
			//		( 'CHILD' , new ... , 'PSEUDO' , new ... );

