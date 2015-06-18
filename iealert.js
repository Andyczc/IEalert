(function(){  

    var DomReady = window.DomReady = {};  

    // Everything that has to do with properly supporting our document ready event. Brought over from the most awesome jQuery.   

    var userAgent = navigator.userAgent.toLowerCase();  

    // Figure out what browser is being used  

    var browser = {  
        version: (userAgent.match( /.+(?:rv|it|ra|ie)[//: ]([/d.]+)/ ) || [])[1],  
        safari: /webkit/.test(userAgent),  
        opera: /opera/.test(userAgent),  
        msie: (/msie/.test(userAgent)) && (!/opera/.test( userAgent )),  
        mozilla: (/mozilla/.test(userAgent)) && (!/(compatible|webkit)/.test(userAgent))  
    };      

    var readyBound = false;   
    var isReady = false;  
    var readyList = [];  

    // Handle when the DOM is ready  
    function domReady() {  
        // Make sure that the DOM is not already loaded  
        if(!isReady) {  
            // Remember that the DOM is ready  
            isReady = true;  

            if(readyList) {  

                for(var fn = 0; fn < readyList.length; fn++) {  
                    readyList[fn].call(window, []);  
                }  

                readyList = [];  

            }  

        }  

    };  

 

    // From Simon Willison. A safe way to fire onload w/o screwing up everyone else.  

    function addLoadEvent(func) {  

      var oldonload = window.onload;  

      if (typeof window.onload != 'function') {  

        window.onload = func;  

      } else {  

        window.onload = function() {  

          if (oldonload) {  

            oldonload();  

          }  

          func();  

        }  

      }  

    };  

 

    // does the heavy work of working through the browsers idiosyncracies (let's call them that) to hook onload.  

    function bindReady() {  

        if(readyBound) {  

            return;  

        }  

        readyBound = true;  

        // If IE is used and is not in a frame  

        // Continually check to see if the document is ready  

        if (browser.msie && window == top) (function(){  

            if (isReady) return;  

            try {  

                // If IE is used, use the trick by Diego Perini  

                // http://javascript.nwbox.com/IEContentLoaded/  

                document.documentElement.doScroll("left");  

            } catch(error) {  

                setTimeout(arguments.callee, 0);  

                return;  

            }  

            // and execute any waiting functions  

            domReady();  

        })();  

        // A fallback to window.onload, that will always work  

        addLoadEvent(domReady);  

    };  

 

    // This is the public function that people can use to hook up ready.  

    DomReady.ready = function(fn, args) {  

        // Attach the listeners  

        bindReady();  

        // If the DOM is already ready  

        if (isReady) {  

            // Execute the function immediately  

            fn.call(window, []);  

        } else {  

            // Add the function to the wait list  

            readyList.push( function() { return fn.call(window, []); } );  

        }  

    };  

    bindReady();  
 
})();

(function(){
	function iealert(){
		var title = "\u4f60\u77e5\u9053\u4f60\u7684\u6d4f\u89c8\u5668\u5185\u6838\u662f\u8fc7\u65f6\u7684\u5417?",
			text = "\u4E3A\u4E86\u5F97\u5230\u6211\u4EEC\u7F51\u7AD9\u6700\u597D\u7684\u4F53\u9A8C\u6548\u679C,\u6211\u4EEC\u5EFA\u8BAE\u60A8\u5347\u7EA7\u5230\u6700\u65B0\u7248\u672C\u7684Internet Explorer\u6216\u9009\u62E9\u53E6\u4E00\u4E2Aweb\u6D4F\u89C8\u5668.\u4E00\u4E2A\u5217\u8868\u6700\u6D41\u884C\u7684web\u6D4F\u89C8\u5668\u5728\u4E0B\u9762\u53EF\u4EE5\u627E\u5230.<br /><br /><h1 id='goon' style='font-size:20px;cursor:pointer; vertical-align:middle;'>>>>\u7EE7\u7EED\u8BBF\u95EE<span style=\"font-size:12px;font-weight:normal;color:red; vertical-align:middle;\">(\u67d0\u4e9b\u529f\u80fd\u53ef\u80fd\u4e0d\u80fd\u6b63\u5e38\u4f7f\u7528)</span></h1>",
			panel = "<span style=\"font-size:18px;margin: 0 0 20px 0;display:block;padding:0;\">"+ title +"</span>"
				  + "<p style='font-size:14px;width:486px;text-align:justify;'> "+ text +"</p>"
			      + "<div style='position: absolute;bottom:35px;'>"
			      + "<ul style='list-style: none;margin:0;padding:0;'>"
			      + "<li style='float:left;margin:0 22px 0 0;'><a href='https://www.google.com/chrome/' target='_blank' style='display:inline-block;background: url(iealert/iealertsprite.png) no-repeat;background-position: 0 0;width: 73px;height: 96px;margin:0 4px 0 0;'></a></li>"
			      + "<li style='float:left;margin:0 22px 0 0;'><a href='http://www.mozilla.org/en-US/firefox/new/' target='_blank' style='display:inline-block;background: url(iealert/iealertsprite.png) no-repeat;background-position: -292px 0;width: 73px;height: 98px;'></a></li>"
			      + "<li style='float:left;margin:0 22px 0 0;'><a href='http://windows.microsoft.com/en-US/internet-explorer/downloads/ie/' target='_blank' style='display:inline-block;background: url(iealert/iealertsprite.png) no-repeat;background-position: -179px 0;width: 95px;height: 98px;'></a></li>"
			      + "<li style='float:left;margin:0 22px 0 0;'><a href='http://www.apple.com/safari/download/' target='_blank' style='display:inline-block;background: url(iealert/iealertsprite.png) no-repeat;background-position: -387px 0;width: 73px;height: 98px;margin:0 4px 0 0;'></a></li>"
			      + "<li style='float:left;'><a href='http://www.opera.com/download/' target='_blank' style='display:inline-block;background: url(iealert/iealertsprite.png) no-repeat;background-position: -90px 0;width: 73px;height: 98px;'></a></li>"
			      + "<ul>"
			      + "</div>";

		var dom1 = document.createElement('div'),
			dom2 = document.createElement('div'),
			sTop = document.documentElement.scrollTop,
			wHeight = document.documentElement.offsetHeight,
			wWidth = document.documentElement.offsetWidth,
			bHeight = document.body.clientHeight;

		dom1.id = 'ie-alert-overlay';
		dom1.style.cssText = "width:100%;height:" + bHeight + "px;background-image:url(iealert/bg.png);position: fixed; top: 0; left: 0;z-index:9999;_position: absolute;";

		dom2.id = 'ie-alert-panel';
		dom2.style.cssText = "width:520px;height:331px;position:fixed;background: url(iealert/iealertsprite.png) no-repeat;background-position: -1px -109px ;_background-position: -627px -116px ;top:" + ( ( wHeight - 403 ) / 2 ) + "px;left:" + ( ( wWidth - 520 ) / 2 ) + "px;padding:72px 0 0 72px;*position:fixed;_position:absolute;font-weight:bold;color:#333;line-height:1.5em;z-index:10000;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;";

		dom2.innerHTML = panel;

		document.body.appendChild( dom1 );
		document.body.appendChild( dom2 );

		var eventDom = document.getElementById('goon');

		eventDom.attachEvent( 'onclick' , function(){
			document.body.removeChild( dom1 );
			document.body.removeChild( dom2 );
		});

	};
	window.iealert = iealert;
})();