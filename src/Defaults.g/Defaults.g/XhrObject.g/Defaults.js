/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.Defaults.XhrObject.
 * @type : Defaults
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.Defaults._define
 * 					Defaults.Defaults.XhrObject._define
 */


		/**
		 * define XhrObject defaults
		 */
		// alternative 'Defaults.Defaults.XhrObject = {'
		// alternative '};'
		Defaults(
			true ,
			[ 'Defaults' , 'XhrObject' ] ,
			{
				// url : (must be defined by function)
				method : 'POST',
				protocol : window.location.protocol === 'https:' ? 'https' : 'http:',
				cache : false,
				async : true,
				responseType : 'html',
				requestHeader : {
					'Accept' : 'text/xml',
					'Accept-Charset' : 'UTF-8',
					'Content-Type' : 'application/x-www-form-urlencoded',
				},
				timeout : 0,
				override : 'text/xml',
				user : '',
				password : '',
				multipart : false,
				sendData : null,
			}
		);


