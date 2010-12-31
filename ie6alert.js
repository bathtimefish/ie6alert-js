(function () {
     ie6Alert = function() {

	 function isIe6() {
	    var f = false;
	     var ua = navigator.userAgent;
	     if(ua.indexOf("MSIE 6.0") != -1) f = true;
	     return f;
	 }

	 window.onload = function() {
	     var element = 'div';
	     var latestIeSite = 'http://www.microsoft.com/japan/windows/products/winfamily/ie/function/default.mspx';
	     var mesg1 = 'このウェブサイトはInternet Explorer 6では正常に表示されない可能性があります。ご了承ください。最新のInternet Explorerは';

	     if(isIe6()){
		 //IE6 Alert Block
		 var ie6AlertBlock = document.createElement(element);
		 ie6AlertBlock.id = 'noie6alert';
		 //Alert Block CSS Configuration
		 ie6AlertBlock.style.position         = 'absolute';
		 ie6AlertBlock.style.display          = 'block';
		 ie6AlertBlock.style.top              = '-26px';
		 ie6AlertBlock.style.left             = '0';
		 ie6AlertBlock.style.margin           = '0';
		 ie6AlertBlock.style.padding          = '0';
		 ie6AlertBlock.style.textAlign       = 'center';
		 ie6AlertBlock.style.borderBottom    = 'solid 1px #aaa';
		 ie6AlertBlock.style.backgroundColor = '#FFF8DC';
		 ie6AlertBlock.style.fontSize        = '13px';
		 ie6AlertBlock.style.color            = '#361703';
//		 ie6AlertBlock.style.width            = window.innerWidth + 'px';
  	         ie6AlertBlock.style.width            = document.documentElement.clientWidth + 'px'; // !! IE6 !!
	         ie6AlertBlock.style.paddingTop       = '2px';
	         ie6AlertBlock.style.paddingBottom    = '3px';

		 //Latest IE Download Link
		 var latestIeLink  = document.createElement('a');
		 latestIeLink.href = latestIeSite;
		 latestIeLink.appendChild(document.createTextNode('こちら'));
		 
		 //Alert Block Close Button
		 var btnCloseSpan = document.createElement('div');
		 //Close Button CSS Configuration
		 btnCloseSpan.style.display = 'block';
		 //btnCloseSpan.style.cssFloat   = 'right';
		 btnCloseSpan.style.styleFloat   = 'right'; // !! IE6 !!
		 btnCloseSpan.style.marginRight = '15px';
	         btnCloseSpan.style.paddingTop = '3px';
	         btnCloseSpan.style.width = '15px';
		 var btnClose = document.createElement('a');
		 btnClose.id = 'noie6close';
		 btnClose.style.color = '#999';
		 btnClose.style.textDecoration = 'none';
		 btnClose.appendChild(document.createTextNode('×'));
		 btnClose.href = 'javascript:noie6close();';
		 btnCloseSpan.appendChild(btnClose);

	         var ie6MsgSpan = document.createElement('div');
	         ie6MsgSpan.appendChild(document.createTextNode(mesg1));
	       	 ie6MsgSpan.style.styleFloat =  'left';
	       	 ie6MsgSpan.style.width = (document.documentElement.clientWidth -30) + 'px'; // !! IE6 !!
	         ie6MsgSpan.appendChild(latestIeLink);
		 ie6AlertBlock.appendChild(ie6MsgSpan);
		 ie6AlertBlock.appendChild(btnCloseSpan);
		 document.body.insertBefore(ie6AlertBlock, document.body.firstChild);
		 //Animation
		 var date = new Date();
		 var bt = date.getTime();
		 var nx = dx = ie6AlertBlock.offsetTop;
		 var cx = 0;
		 var timer = setInterval(function(){
					     ie6AlertBlock.style.top = (nx += 1) + 'px';
					     if(nx >= 0){
						 nx = 0;
						 ie6AlertBlock.style.top = '0';
						 var now = new Date();
						 if(bt + 8000 < now.getTime()) {
						     ie6AlertBlock.style.top = (cx -= 1) + 'px';
						     if(ie6AlertBlock.offsetTop <= dx) ie6AlertBlock.style.top = dx + 'px', clearInterval(timer);
						 }
					     }
					 }, 30);
	     }
	 };
     };

     noie6close = function() {
	 var noie6alert = document.getElementById('noie6alert');
	 noie6alert.style.display = 'none';
     };
})();
