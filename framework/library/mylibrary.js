/**
	Version 1.0.1 19/11/2009 : Add trim function
			1.0.2 30/03/2010 : Resolve local variable "x" problem in SetElementAttribute
			1.0.3 24/04/2013 : Resolve bug in StringToArray (check if 'input' is a really string)
**/
try{
	Base.call(this,['SERVER']);
}catch(error){
Base=(function(){
    var CLASS=function Base(name){
		if(CLASS.registry[name]==undefined)CLASS.registry[name]=[];
		/*if(CLASS.registry[name].indexOf(this)==-1)CLASS.registry[name].push(this);*/
		CLASS.registry[name].push(this);
    }
    CLASS.registry={}
    CLASS.registry.usage=function(){
    	var usage=[];
    	for(var n in CLASS.registry){
    		usage[usage.length]=n+"="+CLASS.registry[n].length
    	}
    	return usage.join("&");
    }
    return CLASS;
    })();
}


try{
	consoles++;
}catch(err){
	consoles=0;
}

	
(function console_init(){
	if(consoles>0)return;
	Base.call(this,['_console']);
try{MAKE.div()}catch(error){
	try{SET.css(document.createElement('div'),{width:'12px'})}catch(error){
		SET={
			css:function(element,style){for(var s in style){try{element.style[s]=style[s]}catch(err){alert("SET.css "+err+':'+s+'>'+style[s])}}}
			,attr:function(element,attrs){for(var a in attrs){try{element.setAttribute(a,attrs[a])}catch(err){_console.log(err,"SET.attr "+':'+a+'>'+attrs[a])}}}
		}
	}
	MAKE={}
	tagNames=["b","i","u","o","p","h1","h2","h3","h4","h5","a","center","fake","source", "video", "media", "audio", "track", "shadow", "content", "unknown", "ulist", "title", "textarea"
	          , "template", "tbody","thead","tfoot", "tr", "table", "th", "td", "caption", "style", "strong", "span"
	          , "select", "script", "quote", "progress", "pre", "param", "paragraph", "output", "option", "optgroup", "object"
	          , "ol","ul","li", "mod", "meter", "meta", "menu", "marquee", "map", "link", "legend", "label", "keygen", "input"
	          , "img", "iframe", "heading", "head", "hr", "frameset", "frame", "form", "font", "fieldset", "embed", "div"
	          , "directory", "datalist", "dlist", "canvas", "button", "body", "basefont", "base", "br", "area", "applet"
	          , "anchor"];
	
	for(var i in tagNames){
		MAKE[tagNames[i]+""]=(function(eltc){
			return function(a,s,c){
				var el=document.createElement(eltc),error=false;
				if(arguments.length>0){for(var i in arguments[0]){try{el[i]=arguments[0][i];}catch(err){error=true;}}}
				if(arguments.length>1){for(var i in arguments[1]){try{el.style[i]=arguments[1][i];}catch(err){error=true;}}}
				if(arguments.length>2){for(var i in arguments[2]){el.appendChild(arguments[2][i]);}};
				if(error)el.className=el.className+' ERROR';
			  return el;
			};
		})(tagNames[i]+"");
	}
}
		setTimeout(function(){
			_console.log('<i>using mylibrary.js</i>');
		},1000);
	var IS={
		WEBKIT:(function(){return navigator.userAgent.indexOf('AppleWebKit')>-1})()
		,IE:(function(){return navigator.userAgent.indexOf('MSIE')>-1})()
		,FF:(function(){return navigator.userAgent.indexOf('Firefox')>-1})()
		,WINDOWS:(function(){return navigator.userAgent.indexOf('Windows NT')>-1})()
		,LINUX:(function(){return navigator.userAgent.indexOf('Linux')>-1})()
		,OSX:(function(){return navigator.userAgent.indexOf('Intel Mac OS X')>-1})()
	}
	
	_console={}
	if(!IS.WEBKIT)console=_console;
	
	_console.cmdlist=['asd={a:1,b:2e13,c:[1.1,2.78,3.14,0xFF00FF45],d:{aa:1,bb:2,cc:3,ff:function(){}},e:MAKE.div(),f:MAKE.iframe(),g:window}'];
	_console.cmdlist.index=0;
	
	ARROW_DOWN='url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAsklEQVRYw2NgGAWjYBSMglEwBEAZBXpLKbW8lYGB4T8DA8MNBgYGNhL0sUP1/IeaQRYwhRoAwz8YGBjkidAnD1WLrNeUXEckoRn0n4GBwReP+gAs6hMpjQZjBgaGP2iGYgvWNjQ1f6B6qQL4GRgYnqBZsBtJfjea3BOoHqqDw2gW3YRiZLFDtM6WPVjiGYZ76FU2hGOxPIzeBZQaAwPDTyhWG6hSUhSKR8EoGAWjYBSQDQDfz0GoJrUmkQAAAABJRU5ErkJggg==)'
	ARROW_UP='url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACwSURBVFhH7ZAxCkIxEAVTaWllbecFxGMIVlrrHfQGWnkjO72E9h5CQdB5kMASECX5fi12YMiS7NuFBMdxHKeSfvQnDPEWVd0qM3xkzrEVdpgvT+rtqxzQLjxH7d0RG6eHF7SL9phQbd/Uq0wjjPCOdsEWczZoe5RRtooF2qFyiq+YYN6/xCLGaAddcYDvUI96bVazikjfesKuLj6kg8ooqxlVrOJZwjqejuM4zr8SwhNeS0GoCb7SmgAAAABJRU5ErkJggg==)';
	var tbl,title,inp,con,h3,opened=false;
	tbl=MAKE.table({
		onmouseover:function(event){h3.innerHTML='Console&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'}
		,onmouseout:function(event){if(!opened)h3.innerHTML='&nbsp;'}
	},{fontSize:'11px',position:'absolute',top:'0px',right:'0px',width:'100px',height:'50px',backgroundColor:"#FFF",border:'1px solid #000'},[MAKE.tbody({},{}
		,[
		  	MAKE.tr({},{},[title=MAKE.td(
		  		{
		  			onclick:function(event){
						var ZOOM=parseFloat(document.body.style.zoom);
						if(con.offsetHeight<500){
							opened=true;
							SET.css(con,{display:'',height:'540px',width:'540px'});
							if(IS.WEBKIT)tbl.style.right='450px';
							title.style.backgroundImage=ARROW_UP;
							inp.style.display='';
						}else{
							opened=false;
							SET.css(con,{display:'none',width:'100%',height:'20px'});
							title.style.backgroundImage=ARROW_DOWN;
							tbl.style.top='0px';
							if(IS.WEBKIT)tbl.style.right='20px';
							inp.style.display='none';
						}
					}
		  		}
		  		,{width:'100%',backgroundColor:"#EEE",color:"#122227",backgroundImage:ARROW_DOWN,backgroundPosition:'100% 50%',backgroundRepeat:'no-repeat',cursor:'pointer'}
				,[h3=MAKE.h3({innerHTML:'&nbsp;'})])
			])
		  	,MAKE.tr({},{},[MAKE.td({},{},[
				_console.element=con=MAKE.pre(
					{}
					,{width:'100px',height:'50px',overflow:'auto',background:'#FFF',zIndex:99999,display:'none'}
				)
			])])
		  	,MAKE.tr({},{},[MAKE.td({},{},[
				inp=MAKE.input({
					onkeyup:function(event){
						var evt=event || window.event;
						var val=this.value;
						var kk=evt.keyCode||evt.which;
						var arrow=false;
						if(kk==40){_console.cmdlist.index--;arrow=true;}
						if(kk==38){_console.cmdlist.index++;arrow=true;}
						if(_console.cmdlist.index<0)_console.cmdlist.index=0;
						if(_console.cmdlist.index>=_console.cmdlist.length){_console.cmdlist.index=_console.cmdlist.length-1;}
						if(arrow){this.value=_console.cmdlist[_console.cmdlist.index]||this.value;}
						if(kk==13 || kk==10){this.onchange();}
						this.focus();
					}
					,onmousemove:function(event){
						var evt=event || window.event;var x= evt.offsetX || evt.layerX ;
						if((this.offsetWidth-x)<44){this.style.cursor='pointer';}else{this.style.cursor='';}
					}
					,onclick:function(event){
						var evt=event || window.event;var x= evt.offsetX || evt.layerX ;
						if((this.offsetWidth-x)<44){}else{}
					}
					,onchange:function(event){
						var f;
						try{f=new Function("return "+inp.value+";");}
						catch(error1){
							try{f=new Function(" "+inp.value+";");}
							catch(error2){
								try{f=new Function("return '"+ error2 +" : \""+inp.value+"\"';");}
								catch(error3){f=new Function("return 'Error : "+error3.message+"';");}
							}
						}
						try{_console.log(f());_console.cmdlist.push(this.value);this.value='';}
						catch(err){_console.log(err.message)}
					}
				},{width:'100%',backgroundImage:ARROW_DOWN,backgroundPosition:'100% 50%',backgroundRepeat:'no-repeat',display:'none'})
			])])
		  ])
	])
	_console.show=function console_show(){try{document.body.appendChild(tbl);}catch(err){setTimeout(function(){_console.show()},1);};}
	_console.hide=function console_hide(){try{document.body.removeChild(element);}catch(err){setTimeout(function(){_console.hide()},1);};}
	
	var list_item=function list_item(object,index){
		var o;try{o=object[index]}catch(error){return MAKE.div({},{marginLeft:'2em'})}
		if(o==null){return MAKE.div({innerHTML:"<font style='color:#07F'>"+index+"</font>"+':<font style="color:#A0A">null</font>'},{marginLeft:'2em'})}
		var subs=MAKE.div({},{marginLeft:'2em',display:'none'},[]),title;
		var type
		type=Object.prototype.toString.call(object[index]).substr(8).replace(']','');
		if(IS.IE && typeof(o)=='object'){
			try{
				type=object[index].constructor.toString().split("function ")[1].split("(")[0];
			}catch(error2){
				try{
					type=o.toString().substr(8).replace(']','');
				}catch(err){
					type='Undefined Prototype';
				}
			}
			
			if(type=="")type='Object Extension';
			try{
			if(o.hasOwnProperty('length') && !o.hasOwnProperty('push')){
				type='array-like Object';
			}
			}catch(err){}
			try{
			if(o.hasOwnProperty('getElementsByTagName')){
				type='Document';
			}
			}catch(err){}
			try{
			if(o.hasOwnProperty('tagName')){
				type='HTML'+o.tagName.substr(0,1)+o.tagName.substr(1).toLowerCase()+'Element';
			}
			}catch(v){}
			try{
			if(o.hasOwnProperty('padding')){
				type='CSSStyleDeclaration';
			}
			}catch(err){}
			try{
			if(o.hasOwnProperty('namedItem')){
				type='HTMLCollection';
			}
			}catch(err){}
			try{
			if(o.hasOwnProperty('window')){
				type='Window';
			}
			}catch(err){}
			try{
			if(o.hasOwnProperty('hasChildNodes')){
				type='Node';
			}
			}catch(err){}
			try{
			if(o.hasOwnProperty('hasAttributeNS')){
				type='Element';
			}
			}catch(err){}
			try{
			if(o.hasOwnProperty('insertAdjacentElement')){
				type='HTMLElement';
			}
			}catch(err){}
			try{
			if(o.hasOwnProperty('namedItem')){
				type='HTMLCollection['+o.length+']';
			}
			}catch(err){}
			if(index=='childNodes'){
				type='NodeList';
			}
			if(index=='location'){
				type='Location';
			}
			if(index=='localStorage'){
				type='LocalStorage';
			}
		}
		
		return MAKE.div({},{}
			,[
			title=MAKE.div({
					innerHTML:"<font style='color:#07F'>"+index+"</font>"+':'+"<font style='color:#F0F'><b>"+type+"</b></font>"
					,onclick:function(event){
						while(subs.children.length>0)subs.removeChild(subs.children[subs.children.length-1]);
						if(subs.style.display=='none'){
							subs.style.display='';
							list_obj(object[index],subs);
						}else{
							subs.style.display='none'
						}
						return false;
					}
				}
				,{marginLeft:'2em',cursor:'pointer'},[])
			,subs
		])
	}
	var list_obj=function list_obj(o,trg){
		var container=MAKE.div();
		var type=Object.prototype.toString.call(o).substr(8).replace(']','');
		trg.appendChild(MAKE.div({innerHTML:"<font style='color:#F0F'><b>"+type+"</b></font>"+'::{'},{marginLeft:'2em'}))
		for(var j in o){
			if(typeof(o[j])=='object'){
				trg.appendChild(list_item(o,j));
			}else{
				var text=o[j].toString();
				if(typeof(o[j])=='object'){
					try{
						text=o[j].toString().replace(/[\n\r]/gi,'').substr(0,text.length>35?32:text.length);
						text+=(text.length>29?'...':'');
					}catch(err){text='undefined'}
				}
				
				var color='#FF8800';
				switch(typeof(o[j])){
					case 'object':
						color='#88FF55';break;
					case 'function':
						color='#0033FF';break;
					case 'number':
						color='#882200';break;
					case 'string':
						color='#448800';break;
				}
				trg.appendChild(MAKE.div({innerHTML:"<font style='color:#07F'>"+j+"</font>"+':'+"<font style='color:"+color+"'><b>"+text+"</b></font>"}
				,{marginLeft:'2em'}));
			}
		}
		if(typeof(o.__proto__)!==undefined)trg.appendChild(list_item(o,'__proto__'));
		if(typeof(o.prototype)!==undefined)trg.appendChild(list_item(o,'prototype'));
		if(typeof(o.constructor)!==undefined)trg.appendChild(list_item(o,'constructor'));
		trg.appendChild(MAKE.div({innerHTML:'}'}))
	}
	_console.log=(function(){
		var _THIS=this;
		var func=function func(){
			_console.show();
			var arg=[];for(var i=0;i<arguments.length;i++){
				arg[i]=arguments[i];
				dv=document.createElement("div");
				//dv.title=new Date().toString().replace(/[TZ]/gi,' ');
				if(typeof(arg[i])=='string'){
						dv.innerHTML=arg[i];
				}else{
					if(arg[i] instanceof Array){
						dv.innerHTML=arg[i].join(',');
					}else{
						if(arg[i] instanceof Object){
							list_obj(arg[i],dv);
						}else{
							dv.innerHTML=arg[i];
						}
					}
				}
				/*dv.innerHTML+=' | '+con.scrollTop +' | '+ dv.offsetHeight+' | ';*/
				con.appendChild(dv);
				/*dv.scrollIntoView(false);*/
				con.scrollTop=dv.offsetHeight+con.offsetHeight+con.scrollTop+88/* - con.clientHeight;*/
			}
		}
		return func || console.log;
	})();
	_console.log('<h3>usage :</h3>');
	_console.log('<pre><font color="magenta">_console</font>.<font color="magenta">log</font>(<font color="blue">varargs</font> <i>arguments</i>);</pre> to log.');
	_console.log({a:1,b:2e13,c:[1.1,2.78,3.14,0xFF00FF45],d:{aa:1,bb:2,cc:3,ff:function(){}},e:MAKE.div(),f:MAKE.iframe(),g:window});
	
  var winsrc=MAKE.div({},{width:'100%'},[
	  
	title2=MAKE.div({
			ondblclick:function(event){document.body.removeChild(winsrc)}
			,innerHTML:"<font style='color:#07F'>Code Window</font>"+' : : '+"<font style='color:#F0F'><b> click to toggle </b> <b>; doubleclick close </b></font>"
			,onclick:function(event){
				if(src.style.display=='none'){
					src.style.display='';
				}else{
					src.style.display='none'
				}
				return false;
			}
		}
		,{marginLeft:'2em',cursor:'pointer'},[]),
	 src=MAKE.iframe({},{width:'100%',height:'550px'})
	])
	function cc(){
		/*document.body.onerror=function(errorMsg, url, lineNumber){
			console.log([errorMsg, url, lineNumber].join(' '));
		}*/
		window.onerror=function myErrorHandler(errorMsg, url, lineNumber) {
			var dv=MAKE.div({},{},[
				MAKE.div({innerHTML:errorMsg},{textWeight:'bold',color:'#F22'},[])
				,MAKE.div({innerHTML:url,onclick:function(event){
						src.src="http://devlop/portail/library/_debug.lib/LDT/ldt.php?url="+url+"&line="+(lineNumber+238);
						if(document.body.children[0]!==winsrc){
							document.body.insertBefore(winsrc,document.body.children[0])
						}
						
						}}
					,{display:'inline',cursor:'pointer',textDecoration:'underline'},[])
				,MAKE.div({innerHTML:'Line :: '+(lineNumber+239)},{display:'inline',float:'right'},[])
			])
			con.appendChild(dv);
		}
	}
	cc();
	/*cc.CALL();*/
	//document.body.appendChild(INSPECTOR=MAKE.iframe({src:'http://devlop/portail/webkit-devtools/weinre/client/inspector.html'},{backgroundColor:'#FFF',position:'absolute',width:'840px',height:'640px'}))
})();

var xmlHttpSync=null;
var xmlHttpAsync;
var CallBackFunction=null;
var TimerCallBackAsynchronous;

/**
*
*  Secure Hash Algorithm (SHA256)
*  http://www.webtoolkit.info/
*
*  Original code by Angel Marin, Paul Johnston.
*
**/

function SHA256(s){

    var chrsz   = 8;
    var hexcase = 0;

    function safe_add (x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }

    function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
    function R (X, n) { return ( X >>> n ); }
    function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
    function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
    function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
    function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
    function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
    function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }

    function core_sha256 (m, l) {
        var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
        var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
        var W = new Array(64);
        var a, b, c, d, e, f, g, h, i, j;
        var T1, T2;

        m[l >> 5] |= 0x80 << (24 - l % 32);
        m[((l + 64 >> 9) << 4) + 15] = l;

        for ( var i = 0; i<m.length; i+=16 ) {
            a = HASH[0];
            b = HASH[1];
            c = HASH[2];
            d = HASH[3];
            e = HASH[4];
            f = HASH[5];
            g = HASH[6];
            h = HASH[7];

            for ( var j = 0; j<64; j++) {
                if (j < 16) W[j] = m[j + i];
                else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);

                T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
                T2 = safe_add(Sigma0256(a), Maj(a, b, c));

                h = g;
                g = f;
                f = e;
                e = safe_add(d, T1);
                d = c;
                c = b;
                b = a;
                a = safe_add(T1, T2);
            }

            HASH[0] = safe_add(a, HASH[0]);
            HASH[1] = safe_add(b, HASH[1]);
            HASH[2] = safe_add(c, HASH[2]);
            HASH[3] = safe_add(d, HASH[3]);
            HASH[4] = safe_add(e, HASH[4]);
            HASH[5] = safe_add(f, HASH[5]);
            HASH[6] = safe_add(g, HASH[6]);
            HASH[7] = safe_add(h, HASH[7]);
        }
        return HASH;
    }

    function str2binb (str) {
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for(var i = 0; i < str.length * chrsz; i += chrsz) {
            bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);
        }
        return bin;
    }

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g,"\n");
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
    }

    function binb2hex (binarray) {
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for(var i = 0; i < binarray.length * 4; i++) {
            str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
            hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
        }
        return str;
    }

    s = Utf8Encode(s);
    return binb2hex(core_sha256(str2binb(s), s.length * chrsz));

}
var blockSizeInBits=128;
var keySizeInBits=256;

// The round constants used in subkey expansion
var Rcon = [ 
0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 
0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 
0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91 ];

// Precomputed lookup table for the SBox
var S = [
 99, 124, 119, 123, 242, 107, 111, 197,  48,   1, 103,  43, 254, 215, 171, 
118, 202, 130, 201, 125, 250,  89,  71, 240, 173, 212, 162, 175, 156, 164, 
114, 192, 183, 253, 147,  38,  54,  63, 247, 204,  52, 165, 229, 241, 113, 
216,  49,  21,   4, 199,  35, 195,  24, 150,   5, 154,   7,  18, 128, 226, 
235,  39, 178, 117,   9, 131,  44,  26,  27, 110,  90, 160,  82,  59, 214, 
179,  41, 227,  47, 132,  83, 209,   0, 237,  32, 252, 177,  91, 106, 203, 
190,  57,  74,  76,  88, 207, 208, 239, 170, 251,  67,  77,  51, 133,  69, 
249,   2, 127,  80,  60, 159, 168,  81, 163,  64, 143, 146, 157,  56, 245, 
188, 182, 218,  33,  16, 255, 243, 210, 205,  12,  19, 236,  95, 151,  68,  
23,  196, 167, 126,  61, 100,  93,  25, 115,  96, 129,  79, 220,  34,  42, 
144, 136,  70, 238, 184,  20, 222,  94,  11, 219, 224,  50,  58,  10,  73,
  6,  36,  92, 194, 211, 172,  98, 145, 149, 228, 121, 231, 200,  55, 109, 
141, 213,  78, 169, 108,  86, 244, 234, 101, 122, 174,   8, 186, 120,  37,  
 46,  28, 166, 180, 198, 232, 221, 116,  31,  75, 189, 139, 138, 112,  62, 
181, 102,  72,   3, 246,  14,  97,  53,  87, 185, 134, 193,  29, 158, 225,
248, 152,  17, 105, 217, 142, 148, 155,  30, 135, 233, 206,  85,  40, 223,
140, 161, 137,  13, 191, 230,  66, 104,  65, 153,  45,  15, 176,  84, 187,  
 22 ];

var T1 = [
0xa56363c6, 0x847c7cf8, 0x997777ee, 0x8d7b7bf6,
0x0df2f2ff, 0xbd6b6bd6, 0xb16f6fde, 0x54c5c591,
0x50303060, 0x03010102, 0xa96767ce, 0x7d2b2b56,
0x19fefee7, 0x62d7d7b5, 0xe6abab4d, 0x9a7676ec,
0x45caca8f, 0x9d82821f, 0x40c9c989, 0x877d7dfa,
0x15fafaef, 0xeb5959b2, 0xc947478e, 0x0bf0f0fb,
0xecadad41, 0x67d4d4b3, 0xfda2a25f, 0xeaafaf45,
0xbf9c9c23, 0xf7a4a453, 0x967272e4, 0x5bc0c09b,
0xc2b7b775, 0x1cfdfde1, 0xae93933d, 0x6a26264c,
0x5a36366c, 0x413f3f7e, 0x02f7f7f5, 0x4fcccc83,
0x5c343468, 0xf4a5a551, 0x34e5e5d1, 0x08f1f1f9,
0x937171e2, 0x73d8d8ab, 0x53313162, 0x3f15152a,
0x0c040408, 0x52c7c795, 0x65232346, 0x5ec3c39d,
0x28181830, 0xa1969637, 0x0f05050a, 0xb59a9a2f,
0x0907070e, 0x36121224, 0x9b80801b, 0x3de2e2df,
0x26ebebcd, 0x6927274e, 0xcdb2b27f, 0x9f7575ea,
0x1b090912, 0x9e83831d, 0x742c2c58, 0x2e1a1a34,
0x2d1b1b36, 0xb26e6edc, 0xee5a5ab4, 0xfba0a05b,
0xf65252a4, 0x4d3b3b76, 0x61d6d6b7, 0xceb3b37d,
0x7b292952, 0x3ee3e3dd, 0x712f2f5e, 0x97848413,
0xf55353a6, 0x68d1d1b9, 0x00000000, 0x2cededc1,
0x60202040, 0x1ffcfce3, 0xc8b1b179, 0xed5b5bb6,
0xbe6a6ad4, 0x46cbcb8d, 0xd9bebe67, 0x4b393972,
0xde4a4a94, 0xd44c4c98, 0xe85858b0, 0x4acfcf85,
0x6bd0d0bb, 0x2aefefc5, 0xe5aaaa4f, 0x16fbfbed,
0xc5434386, 0xd74d4d9a, 0x55333366, 0x94858511,
0xcf45458a, 0x10f9f9e9, 0x06020204, 0x817f7ffe,
0xf05050a0, 0x443c3c78, 0xba9f9f25, 0xe3a8a84b,
0xf35151a2, 0xfea3a35d, 0xc0404080, 0x8a8f8f05,
0xad92923f, 0xbc9d9d21, 0x48383870, 0x04f5f5f1,
0xdfbcbc63, 0xc1b6b677, 0x75dadaaf, 0x63212142,
0x30101020, 0x1affffe5, 0x0ef3f3fd, 0x6dd2d2bf,
0x4ccdcd81, 0x140c0c18, 0x35131326, 0x2fececc3,
0xe15f5fbe, 0xa2979735, 0xcc444488, 0x3917172e,
0x57c4c493, 0xf2a7a755, 0x827e7efc, 0x473d3d7a,
0xac6464c8, 0xe75d5dba, 0x2b191932, 0x957373e6,
0xa06060c0, 0x98818119, 0xd14f4f9e, 0x7fdcdca3,
0x66222244, 0x7e2a2a54, 0xab90903b, 0x8388880b,
0xca46468c, 0x29eeeec7, 0xd3b8b86b, 0x3c141428,
0x79dedea7, 0xe25e5ebc, 0x1d0b0b16, 0x76dbdbad,
0x3be0e0db, 0x56323264, 0x4e3a3a74, 0x1e0a0a14,
0xdb494992, 0x0a06060c, 0x6c242448, 0xe45c5cb8,
0x5dc2c29f, 0x6ed3d3bd, 0xefacac43, 0xa66262c4,
0xa8919139, 0xa4959531, 0x37e4e4d3, 0x8b7979f2,
0x32e7e7d5, 0x43c8c88b, 0x5937376e, 0xb76d6dda,
0x8c8d8d01, 0x64d5d5b1, 0xd24e4e9c, 0xe0a9a949,
0xb46c6cd8, 0xfa5656ac, 0x07f4f4f3, 0x25eaeacf,
0xaf6565ca, 0x8e7a7af4, 0xe9aeae47, 0x18080810,
0xd5baba6f, 0x887878f0, 0x6f25254a, 0x722e2e5c,
0x241c1c38, 0xf1a6a657, 0xc7b4b473, 0x51c6c697,
0x23e8e8cb, 0x7cdddda1, 0x9c7474e8, 0x211f1f3e,
0xdd4b4b96, 0xdcbdbd61, 0x868b8b0d, 0x858a8a0f,
0x907070e0, 0x423e3e7c, 0xc4b5b571, 0xaa6666cc,
0xd8484890, 0x05030306, 0x01f6f6f7, 0x120e0e1c,
0xa36161c2, 0x5f35356a, 0xf95757ae, 0xd0b9b969,
0x91868617, 0x58c1c199, 0x271d1d3a, 0xb99e9e27,
0x38e1e1d9, 0x13f8f8eb, 0xb398982b, 0x33111122,
0xbb6969d2, 0x70d9d9a9, 0x898e8e07, 0xa7949433,
0xb69b9b2d, 0x221e1e3c, 0x92878715, 0x20e9e9c9,
0x49cece87, 0xff5555aa, 0x78282850, 0x7adfdfa5,
0x8f8c8c03, 0xf8a1a159, 0x80898909, 0x170d0d1a,
0xdabfbf65, 0x31e6e6d7, 0xc6424284, 0xb86868d0,
0xc3414182, 0xb0999929, 0x772d2d5a, 0x110f0f1e,
0xcbb0b07b, 0xfc5454a8, 0xd6bbbb6d, 0x3a16162c ];

var T2 = [
0x6363c6a5, 0x7c7cf884, 0x7777ee99, 0x7b7bf68d,
0xf2f2ff0d, 0x6b6bd6bd, 0x6f6fdeb1, 0xc5c59154,
0x30306050, 0x01010203, 0x6767cea9, 0x2b2b567d,
0xfefee719, 0xd7d7b562, 0xabab4de6, 0x7676ec9a,
0xcaca8f45, 0x82821f9d, 0xc9c98940, 0x7d7dfa87,
0xfafaef15, 0x5959b2eb, 0x47478ec9, 0xf0f0fb0b,
0xadad41ec, 0xd4d4b367, 0xa2a25ffd, 0xafaf45ea,
0x9c9c23bf, 0xa4a453f7, 0x7272e496, 0xc0c09b5b,
0xb7b775c2, 0xfdfde11c, 0x93933dae, 0x26264c6a,
0x36366c5a, 0x3f3f7e41, 0xf7f7f502, 0xcccc834f,
0x3434685c, 0xa5a551f4, 0xe5e5d134, 0xf1f1f908,
0x7171e293, 0xd8d8ab73, 0x31316253, 0x15152a3f,
0x0404080c, 0xc7c79552, 0x23234665, 0xc3c39d5e,
0x18183028, 0x969637a1, 0x05050a0f, 0x9a9a2fb5,
0x07070e09, 0x12122436, 0x80801b9b, 0xe2e2df3d,
0xebebcd26, 0x27274e69, 0xb2b27fcd, 0x7575ea9f,
0x0909121b, 0x83831d9e, 0x2c2c5874, 0x1a1a342e,
0x1b1b362d, 0x6e6edcb2, 0x5a5ab4ee, 0xa0a05bfb,
0x5252a4f6, 0x3b3b764d, 0xd6d6b761, 0xb3b37dce,
0x2929527b, 0xe3e3dd3e, 0x2f2f5e71, 0x84841397,
0x5353a6f5, 0xd1d1b968, 0x00000000, 0xededc12c,
0x20204060, 0xfcfce31f, 0xb1b179c8, 0x5b5bb6ed,
0x6a6ad4be, 0xcbcb8d46, 0xbebe67d9, 0x3939724b,
0x4a4a94de, 0x4c4c98d4, 0x5858b0e8, 0xcfcf854a,
0xd0d0bb6b, 0xefefc52a, 0xaaaa4fe5, 0xfbfbed16,
0x434386c5, 0x4d4d9ad7, 0x33336655, 0x85851194,
0x45458acf, 0xf9f9e910, 0x02020406, 0x7f7ffe81,
0x5050a0f0, 0x3c3c7844, 0x9f9f25ba, 0xa8a84be3,
0x5151a2f3, 0xa3a35dfe, 0x404080c0, 0x8f8f058a,
0x92923fad, 0x9d9d21bc, 0x38387048, 0xf5f5f104,
0xbcbc63df, 0xb6b677c1, 0xdadaaf75, 0x21214263,
0x10102030, 0xffffe51a, 0xf3f3fd0e, 0xd2d2bf6d,
0xcdcd814c, 0x0c0c1814, 0x13132635, 0xececc32f,
0x5f5fbee1, 0x979735a2, 0x444488cc, 0x17172e39,
0xc4c49357, 0xa7a755f2, 0x7e7efc82, 0x3d3d7a47,
0x6464c8ac, 0x5d5dbae7, 0x1919322b, 0x7373e695,
0x6060c0a0, 0x81811998, 0x4f4f9ed1, 0xdcdca37f,
0x22224466, 0x2a2a547e, 0x90903bab, 0x88880b83,
0x46468cca, 0xeeeec729, 0xb8b86bd3, 0x1414283c,
0xdedea779, 0x5e5ebce2, 0x0b0b161d, 0xdbdbad76,
0xe0e0db3b, 0x32326456, 0x3a3a744e, 0x0a0a141e,
0x494992db, 0x06060c0a, 0x2424486c, 0x5c5cb8e4,
0xc2c29f5d, 0xd3d3bd6e, 0xacac43ef, 0x6262c4a6,
0x919139a8, 0x959531a4, 0xe4e4d337, 0x7979f28b,
0xe7e7d532, 0xc8c88b43, 0x37376e59, 0x6d6ddab7,
0x8d8d018c, 0xd5d5b164, 0x4e4e9cd2, 0xa9a949e0,
0x6c6cd8b4, 0x5656acfa, 0xf4f4f307, 0xeaeacf25,
0x6565caaf, 0x7a7af48e, 0xaeae47e9, 0x08081018,
0xbaba6fd5, 0x7878f088, 0x25254a6f, 0x2e2e5c72,
0x1c1c3824, 0xa6a657f1, 0xb4b473c7, 0xc6c69751,
0xe8e8cb23, 0xdddda17c, 0x7474e89c, 0x1f1f3e21,
0x4b4b96dd, 0xbdbd61dc, 0x8b8b0d86, 0x8a8a0f85,
0x7070e090, 0x3e3e7c42, 0xb5b571c4, 0x6666ccaa,
0x484890d8, 0x03030605, 0xf6f6f701, 0x0e0e1c12,
0x6161c2a3, 0x35356a5f, 0x5757aef9, 0xb9b969d0,
0x86861791, 0xc1c19958, 0x1d1d3a27, 0x9e9e27b9,
0xe1e1d938, 0xf8f8eb13, 0x98982bb3, 0x11112233,
0x6969d2bb, 0xd9d9a970, 0x8e8e0789, 0x949433a7,
0x9b9b2db6, 0x1e1e3c22, 0x87871592, 0xe9e9c920,
0xcece8749, 0x5555aaff, 0x28285078, 0xdfdfa57a,
0x8c8c038f, 0xa1a159f8, 0x89890980, 0x0d0d1a17,
0xbfbf65da, 0xe6e6d731, 0x424284c6, 0x6868d0b8,
0x414182c3, 0x999929b0, 0x2d2d5a77, 0x0f0f1e11,
0xb0b07bcb, 0x5454a8fc, 0xbbbb6dd6, 0x16162c3a ];

var T3 = [
0x63c6a563, 0x7cf8847c, 0x77ee9977, 0x7bf68d7b,
0xf2ff0df2, 0x6bd6bd6b, 0x6fdeb16f, 0xc59154c5,
0x30605030, 0x01020301, 0x67cea967, 0x2b567d2b,
0xfee719fe, 0xd7b562d7, 0xab4de6ab, 0x76ec9a76,
0xca8f45ca, 0x821f9d82, 0xc98940c9, 0x7dfa877d,
0xfaef15fa, 0x59b2eb59, 0x478ec947, 0xf0fb0bf0,
0xad41ecad, 0xd4b367d4, 0xa25ffda2, 0xaf45eaaf,
0x9c23bf9c, 0xa453f7a4, 0x72e49672, 0xc09b5bc0,
0xb775c2b7, 0xfde11cfd, 0x933dae93, 0x264c6a26,
0x366c5a36, 0x3f7e413f, 0xf7f502f7, 0xcc834fcc,
0x34685c34, 0xa551f4a5, 0xe5d134e5, 0xf1f908f1,
0x71e29371, 0xd8ab73d8, 0x31625331, 0x152a3f15,
0x04080c04, 0xc79552c7, 0x23466523, 0xc39d5ec3,
0x18302818, 0x9637a196, 0x050a0f05, 0x9a2fb59a,
0x070e0907, 0x12243612, 0x801b9b80, 0xe2df3de2,
0xebcd26eb, 0x274e6927, 0xb27fcdb2, 0x75ea9f75,
0x09121b09, 0x831d9e83, 0x2c58742c, 0x1a342e1a,
0x1b362d1b, 0x6edcb26e, 0x5ab4ee5a, 0xa05bfba0,
0x52a4f652, 0x3b764d3b, 0xd6b761d6, 0xb37dceb3,
0x29527b29, 0xe3dd3ee3, 0x2f5e712f, 0x84139784,
0x53a6f553, 0xd1b968d1, 0x00000000, 0xedc12ced,
0x20406020, 0xfce31ffc, 0xb179c8b1, 0x5bb6ed5b,
0x6ad4be6a, 0xcb8d46cb, 0xbe67d9be, 0x39724b39,
0x4a94de4a, 0x4c98d44c, 0x58b0e858, 0xcf854acf,
0xd0bb6bd0, 0xefc52aef, 0xaa4fe5aa, 0xfbed16fb,
0x4386c543, 0x4d9ad74d, 0x33665533, 0x85119485,
0x458acf45, 0xf9e910f9, 0x02040602, 0x7ffe817f,
0x50a0f050, 0x3c78443c, 0x9f25ba9f, 0xa84be3a8,
0x51a2f351, 0xa35dfea3, 0x4080c040, 0x8f058a8f,
0x923fad92, 0x9d21bc9d, 0x38704838, 0xf5f104f5,
0xbc63dfbc, 0xb677c1b6, 0xdaaf75da, 0x21426321,
0x10203010, 0xffe51aff, 0xf3fd0ef3, 0xd2bf6dd2,
0xcd814ccd, 0x0c18140c, 0x13263513, 0xecc32fec,
0x5fbee15f, 0x9735a297, 0x4488cc44, 0x172e3917,
0xc49357c4, 0xa755f2a7, 0x7efc827e, 0x3d7a473d,
0x64c8ac64, 0x5dbae75d, 0x19322b19, 0x73e69573,
0x60c0a060, 0x81199881, 0x4f9ed14f, 0xdca37fdc,
0x22446622, 0x2a547e2a, 0x903bab90, 0x880b8388,
0x468cca46, 0xeec729ee, 0xb86bd3b8, 0x14283c14,
0xdea779de, 0x5ebce25e, 0x0b161d0b, 0xdbad76db,
0xe0db3be0, 0x32645632, 0x3a744e3a, 0x0a141e0a,
0x4992db49, 0x060c0a06, 0x24486c24, 0x5cb8e45c,
0xc29f5dc2, 0xd3bd6ed3, 0xac43efac, 0x62c4a662,
0x9139a891, 0x9531a495, 0xe4d337e4, 0x79f28b79,
0xe7d532e7, 0xc88b43c8, 0x376e5937, 0x6ddab76d,
0x8d018c8d, 0xd5b164d5, 0x4e9cd24e, 0xa949e0a9,
0x6cd8b46c, 0x56acfa56, 0xf4f307f4, 0xeacf25ea,
0x65caaf65, 0x7af48e7a, 0xae47e9ae, 0x08101808,
0xba6fd5ba, 0x78f08878, 0x254a6f25, 0x2e5c722e,
0x1c38241c, 0xa657f1a6, 0xb473c7b4, 0xc69751c6,
0xe8cb23e8, 0xdda17cdd, 0x74e89c74, 0x1f3e211f,
0x4b96dd4b, 0xbd61dcbd, 0x8b0d868b, 0x8a0f858a,
0x70e09070, 0x3e7c423e, 0xb571c4b5, 0x66ccaa66,
0x4890d848, 0x03060503, 0xf6f701f6, 0x0e1c120e,
0x61c2a361, 0x356a5f35, 0x57aef957, 0xb969d0b9,
0x86179186, 0xc19958c1, 0x1d3a271d, 0x9e27b99e,
0xe1d938e1, 0xf8eb13f8, 0x982bb398, 0x11223311,
0x69d2bb69, 0xd9a970d9, 0x8e07898e, 0x9433a794,
0x9b2db69b, 0x1e3c221e, 0x87159287, 0xe9c920e9,
0xce8749ce, 0x55aaff55, 0x28507828, 0xdfa57adf,
0x8c038f8c, 0xa159f8a1, 0x89098089, 0x0d1a170d,
0xbf65dabf, 0xe6d731e6, 0x4284c642, 0x68d0b868,
0x4182c341, 0x9929b099, 0x2d5a772d, 0x0f1e110f,
0xb07bcbb0, 0x54a8fc54, 0xbb6dd6bb, 0x162c3a16 ];

var T4 = [
0xc6a56363, 0xf8847c7c, 0xee997777, 0xf68d7b7b,
0xff0df2f2, 0xd6bd6b6b, 0xdeb16f6f, 0x9154c5c5,
0x60503030, 0x02030101, 0xcea96767, 0x567d2b2b,
0xe719fefe, 0xb562d7d7, 0x4de6abab, 0xec9a7676,
0x8f45caca, 0x1f9d8282, 0x8940c9c9, 0xfa877d7d,
0xef15fafa, 0xb2eb5959, 0x8ec94747, 0xfb0bf0f0,
0x41ecadad, 0xb367d4d4, 0x5ffda2a2, 0x45eaafaf,
0x23bf9c9c, 0x53f7a4a4, 0xe4967272, 0x9b5bc0c0,
0x75c2b7b7, 0xe11cfdfd, 0x3dae9393, 0x4c6a2626,
0x6c5a3636, 0x7e413f3f, 0xf502f7f7, 0x834fcccc,
0x685c3434, 0x51f4a5a5, 0xd134e5e5, 0xf908f1f1,
0xe2937171, 0xab73d8d8, 0x62533131, 0x2a3f1515,
0x080c0404, 0x9552c7c7, 0x46652323, 0x9d5ec3c3,
0x30281818, 0x37a19696, 0x0a0f0505, 0x2fb59a9a,
0x0e090707, 0x24361212, 0x1b9b8080, 0xdf3de2e2,
0xcd26ebeb, 0x4e692727, 0x7fcdb2b2, 0xea9f7575,
0x121b0909, 0x1d9e8383, 0x58742c2c, 0x342e1a1a,
0x362d1b1b, 0xdcb26e6e, 0xb4ee5a5a, 0x5bfba0a0,
0xa4f65252, 0x764d3b3b, 0xb761d6d6, 0x7dceb3b3,
0x527b2929, 0xdd3ee3e3, 0x5e712f2f, 0x13978484,
0xa6f55353, 0xb968d1d1, 0x00000000, 0xc12ceded,
0x40602020, 0xe31ffcfc, 0x79c8b1b1, 0xb6ed5b5b,
0xd4be6a6a, 0x8d46cbcb, 0x67d9bebe, 0x724b3939,
0x94de4a4a, 0x98d44c4c, 0xb0e85858, 0x854acfcf,
0xbb6bd0d0, 0xc52aefef, 0x4fe5aaaa, 0xed16fbfb,
0x86c54343, 0x9ad74d4d, 0x66553333, 0x11948585,
0x8acf4545, 0xe910f9f9, 0x04060202, 0xfe817f7f,
0xa0f05050, 0x78443c3c, 0x25ba9f9f, 0x4be3a8a8,
0xa2f35151, 0x5dfea3a3, 0x80c04040, 0x058a8f8f,
0x3fad9292, 0x21bc9d9d, 0x70483838, 0xf104f5f5,
0x63dfbcbc, 0x77c1b6b6, 0xaf75dada, 0x42632121,
0x20301010, 0xe51affff, 0xfd0ef3f3, 0xbf6dd2d2,
0x814ccdcd, 0x18140c0c, 0x26351313, 0xc32fecec,
0xbee15f5f, 0x35a29797, 0x88cc4444, 0x2e391717,
0x9357c4c4, 0x55f2a7a7, 0xfc827e7e, 0x7a473d3d,
0xc8ac6464, 0xbae75d5d, 0x322b1919, 0xe6957373,
0xc0a06060, 0x19988181, 0x9ed14f4f, 0xa37fdcdc,
0x44662222, 0x547e2a2a, 0x3bab9090, 0x0b838888,
0x8cca4646, 0xc729eeee, 0x6bd3b8b8, 0x283c1414,
0xa779dede, 0xbce25e5e, 0x161d0b0b, 0xad76dbdb,
0xdb3be0e0, 0x64563232, 0x744e3a3a, 0x141e0a0a,
0x92db4949, 0x0c0a0606, 0x486c2424, 0xb8e45c5c,
0x9f5dc2c2, 0xbd6ed3d3, 0x43efacac, 0xc4a66262,
0x39a89191, 0x31a49595, 0xd337e4e4, 0xf28b7979,
0xd532e7e7, 0x8b43c8c8, 0x6e593737, 0xdab76d6d,
0x018c8d8d, 0xb164d5d5, 0x9cd24e4e, 0x49e0a9a9,
0xd8b46c6c, 0xacfa5656, 0xf307f4f4, 0xcf25eaea,
0xcaaf6565, 0xf48e7a7a, 0x47e9aeae, 0x10180808,
0x6fd5baba, 0xf0887878, 0x4a6f2525, 0x5c722e2e,
0x38241c1c, 0x57f1a6a6, 0x73c7b4b4, 0x9751c6c6,
0xcb23e8e8, 0xa17cdddd, 0xe89c7474, 0x3e211f1f,
0x96dd4b4b, 0x61dcbdbd, 0x0d868b8b, 0x0f858a8a,
0xe0907070, 0x7c423e3e, 0x71c4b5b5, 0xccaa6666,
0x90d84848, 0x06050303, 0xf701f6f6, 0x1c120e0e,
0xc2a36161, 0x6a5f3535, 0xaef95757, 0x69d0b9b9,
0x17918686, 0x9958c1c1, 0x3a271d1d, 0x27b99e9e,
0xd938e1e1, 0xeb13f8f8, 0x2bb39898, 0x22331111,
0xd2bb6969, 0xa970d9d9, 0x07898e8e, 0x33a79494,
0x2db69b9b, 0x3c221e1e, 0x15928787, 0xc920e9e9,
0x8749cece, 0xaaff5555, 0x50782828, 0xa57adfdf,
0x038f8c8c, 0x59f8a1a1, 0x09808989, 0x1a170d0d,
0x65dabfbf, 0xd731e6e6, 0x84c64242, 0xd0b86868,
0x82c34141, 0x29b09999, 0x5a772d2d, 0x1e110f0f,
0x7bcbb0b0, 0xa8fc5454, 0x6dd6bbbb, 0x2c3a1616 ];

function B0(x) { return (x&255); }
function B1(x) { return ((x>>8)&255); }
function B2(x) { return ((x>>16)&255); }
function B3(x) { return ((x>>24)&255); }

function F1(x0, x1, x2, x3)
{
  return B1(T1[x0&255]) | (B1(T1[(x1>>8)&255])<<8)
      | (B1(T1[(x2>>16)&255])<<16) | (B1(T1[x3>>>24])<<24);
}

function packBytes(octets)
{
  var i, j;
  var len=octets.length;
  var b=new Array(len/4);

  if (!octets || len % 4) return;

  for (i=0, j=0; j<len; j+= 4)
     b[i++] = octets[j] | (octets[j+1]<<8) | (octets[j+2]<<16) | (octets[j+3]<<24);

  return b;  
}

function unpackBytes(packed)
{
  var j;
  var i=0, l = packed.length;
  var r = new Array(l*4);

  for (j=0; j<l; j++)
  {
    r[i++] = B0(packed[j]);
    r[i++] = B1(packed[j]);
    r[i++] = B2(packed[j]);
    r[i++] = B3(packed[j]);
  }
  return r;
}

// ------------------------------------------------

var maxkc=8;
var maxrk=14;

function keyExpansion(key)
{
  var kc, i, j, r, t;
  var rounds;
  var keySched=new Array(maxrk+1);
  var keylen=key.length;
  var k=new Array(maxkc);
  var tk=new Array(maxkc);
  var rconpointer=0;

  if(keylen==16)
  {
   rounds=10;
   kc=4;
  }
  else if(keylen==24)
  {
   rounds=12;
   kc=6
  }
  else if(keylen==32)
  {
   rounds=14;
   kc=8
  }
  else
  {
   alert('Invalid key length '+keylen);
   return;
  }

  for(i=0; i<maxrk+1; i++) keySched[i]=new Array(4);

  for(i=0,j=0; j<keylen; j++,i+=4)
    k[j] = key.charCodeAt(i) | (key.charCodeAt(i+1)<<8)
                     | (key.charCodeAt(i+2)<<16) | (key.charCodeAt(i+3)<<24);

  for(j=kc-1; j>=0; j--) tk[j] = k[j];

  r=0;
  t=0;
  for(j=0; (j<kc)&&(r<rounds+1); )
  {
    for(; (j<kc)&&(t<4); j++,t++)
    {
      keySched[r][t]=tk[j];
    }
    if(t==4)
    {
      r++;
      t=0;
    }
  }

  while(r<rounds+1)
  {
    var temp = tk[kc-1];

    tk[0] ^= S[B1(temp)] | (S[B2(temp)]<<8) | (S[B3(temp)]<<16) | (S[B0(temp)]<<24);
    tk[0] ^= Rcon[rconpointer++];

    if(kc != 8)
    {
      for(j=1; j<kc; j++) tk[j] ^= tk[j-1];
    }
    else
    {
      for(j=1; j<kc/2; j++) tk[j] ^= tk[j-1];
 
      temp = tk[kc/2-1];
      tk[kc/2] ^= S[B0(temp)] | (S[B1(temp)]<<8) | (S[B2(temp)]<<16) | (S[B3(temp)]<<24);

      for(j=kc/2+1; j<kc; j++) tk[j] ^= tk[j-1];
    }

    for(j=0; (j<kc)&&(r<rounds+1); )
    {
      for(; (j<kc)&&(t<4); j++,t++)
      {
        keySched[r][t]=tk[j];
      }
      if(t==4)
      {
        r++;
        t=0;
      }
    }
  }
  this.rounds = rounds;
  this.rk = keySched;
  return this;
}

function AESencrypt(block, ctx)
{
  var r;
  var t0,t1,t2,t3;

  var b = packBytes(block);
  var rounds = ctx.rounds;
  var b0 = b[0];
  var b1 = b[1];
  var b2 = b[2];
  var b3 = b[3];

  for(r=0; r<rounds-1; r++)
  {
    t0 = b0 ^ ctx.rk[r][0];
    t1 = b1 ^ ctx.rk[r][1];
    t2 = b2 ^ ctx.rk[r][2];
    t3 = b3 ^ ctx.rk[r][3];

    b0 = T1[t0&255] ^ T2[(t1>>8)&255] ^ T3[(t2>>16)&255] ^ T4[t3>>>24];
    b1 = T1[t1&255] ^ T2[(t2>>8)&255] ^ T3[(t3>>16)&255] ^ T4[t0>>>24];
    b2 = T1[t2&255] ^ T2[(t3>>8)&255] ^ T3[(t0>>16)&255] ^ T4[t1>>>24];
    b3 = T1[t3&255] ^ T2[(t0>>8)&255] ^ T3[(t1>>16)&255] ^ T4[t2>>>24];
  }

  // last round is special
  r = rounds-1;

  t0 = b0 ^ ctx.rk[r][0];
  t1 = b1 ^ ctx.rk[r][1];
  t2 = b2 ^ ctx.rk[r][2];
  t3 = b3 ^ ctx.rk[r][3];

  b[0] = F1(t0, t1, t2, t3) ^ ctx.rk[rounds][0];
  b[1] = F1(t1, t2, t3, t0) ^ ctx.rk[rounds][1];
  b[2] = F1(t2, t3, t0, t1) ^ ctx.rk[rounds][2];
  b[3] = F1(t3, t0, t1, t2) ^ ctx.rk[rounds][3];

  return unpackBytes(b);
}

var S5 = [
 82,   9, 106, 213,  48,  54, 165,  56, 191,  64, 163, 158, 129, 243, 215, 
251, 124, 227,  57, 130, 155,  47, 255, 135,  52, 142,  67,  68, 196, 222, 
233, 203,  84, 123, 148,  50, 166, 194,  35,  61, 238,  76, 149,  11,  66, 
250, 195,  78,   8,  46, 161, 102,  40, 217,  36, 178, 118,  91, 162,  73, 
109, 139, 209,  37, 114, 248, 246, 100, 134, 104, 152,  22, 212, 164,  92, 
204,  93, 101, 182, 146, 108, 112,  72,  80, 253, 237, 185, 218,  94,  21,  
 70,  87, 167, 141, 157, 132, 144, 216, 171,   0, 140, 188, 211,  10, 247, 
228,  88,   5, 184, 179,  69,   6, 208,  44,  30, 143, 202,  63,  15,   2, 
193, 175, 189,   3,   1,  19, 138, 107,  58, 145,  17,  65,  79, 103, 220, 
234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116,  34, 231, 173,
 53, 133, 226, 249,  55, 232,  28, 117, 223, 110,  71, 241,  26, 113,  29, 
 41, 197, 137, 111, 183,  98,  14, 170,  24, 190,  27, 252,  86,  62,  75, 
198, 210, 121,  32, 154, 219, 192, 254, 120, 205,  90, 244,  31, 221, 168,
 51, 136,   7, 199,  49, 177,  18,  16,  89,  39, 128, 236,  95,  96,  81,
127, 169,  25, 181,  74,  13,  45, 229, 122, 159, 147, 201, 156, 239, 160,
224,  59,  77, 174,  42, 245, 176, 200, 235, 187,  60, 131,  83, 153,  97, 
 23,  43,   4, 126, 186, 119, 214,  38, 225, 105,  20,  99,  85,  33,  12,
125 ];


var T5 = [
0x50a7f451,0x5365417e,0xc3a4171a,0x965e273a,
0xcb6bab3b,0xf1459d1f,0xab58faac,0x9303e34b,
0x55fa3020,0xf66d76ad,0x9176cc88,0x254c02f5,
0xfcd7e54f,0xd7cb2ac5,0x80443526,0x8fa362b5,
0x495ab1de,0x671bba25,0x980eea45,0xe1c0fe5d,
0x02752fc3,0x12f04c81,0xa397468d,0xc6f9d36b,
0xe75f8f03,0x959c9215,0xeb7a6dbf,0xda595295,
0x2d83bed4,0xd3217458,0x2969e049,0x44c8c98e,
0x6a89c275,0x78798ef4,0x6b3e5899,0xdd71b927,
0xb64fe1be,0x17ad88f0,0x66ac20c9,0xb43ace7d,
0x184adf63,0x82311ae5,0x60335197,0x457f5362,
0xe07764b1,0x84ae6bbb,0x1ca081fe,0x942b08f9,
0x58684870,0x19fd458f,0x876cde94,0xb7f87b52,
0x23d373ab,0xe2024b72,0x578f1fe3,0x2aab5566,
0x0728ebb2,0x03c2b52f,0x9a7bc586,0xa50837d3,
0xf2872830,0xb2a5bf23,0xba6a0302,0x5c8216ed,
0x2b1ccf8a,0x92b479a7,0xf0f207f3,0xa1e2694e,
0xcdf4da65,0xd5be0506,0x1f6234d1,0x8afea6c4,
0x9d532e34,0xa055f3a2,0x32e18a05,0x75ebf6a4,
0x39ec830b,0xaaef6040,0x069f715e,0x51106ebd,
0xf98a213e,0x3d06dd96,0xae053edd,0x46bde64d,
0xb58d5491,0x055dc471,0x6fd40604,0xff155060,
0x24fb9819,0x97e9bdd6,0xcc434089,0x779ed967,
0xbd42e8b0,0x888b8907,0x385b19e7,0xdbeec879,
0x470a7ca1,0xe90f427c,0xc91e84f8,0x00000000,
0x83868009,0x48ed2b32,0xac70111e,0x4e725a6c,
0xfbff0efd,0x5638850f,0x1ed5ae3d,0x27392d36,
0x64d90f0a,0x21a65c68,0xd1545b9b,0x3a2e3624,
0xb1670a0c,0x0fe75793,0xd296eeb4,0x9e919b1b,
0x4fc5c080,0xa220dc61,0x694b775a,0x161a121c,
0x0aba93e2,0xe52aa0c0,0x43e0223c,0x1d171b12,
0x0b0d090e,0xadc78bf2,0xb9a8b62d,0xc8a91e14,
0x8519f157,0x4c0775af,0xbbdd99ee,0xfd607fa3,
0x9f2601f7,0xbcf5725c,0xc53b6644,0x347efb5b,
0x7629438b,0xdcc623cb,0x68fcedb6,0x63f1e4b8,
0xcadc31d7,0x10856342,0x40229713,0x2011c684,
0x7d244a85,0xf83dbbd2,0x1132f9ae,0x6da129c7,
0x4b2f9e1d,0xf330b2dc,0xec52860d,0xd0e3c177,
0x6c16b32b,0x99b970a9,0xfa489411,0x2264e947,
0xc48cfca8,0x1a3ff0a0,0xd82c7d56,0xef903322,
0xc74e4987,0xc1d138d9,0xfea2ca8c,0x360bd498,
0xcf81f5a6,0x28de7aa5,0x268eb7da,0xa4bfad3f,
0xe49d3a2c,0x0d927850,0x9bcc5f6a,0x62467e54,
0xc2138df6,0xe8b8d890,0x5ef7392e,0xf5afc382,
0xbe805d9f,0x7c93d069,0xa92dd56f,0xb31225cf,
0x3b99acc8,0xa77d1810,0x6e639ce8,0x7bbb3bdb,
0x097826cd,0xf418596e,0x01b79aec,0xa89a4f83,
0x656e95e6,0x7ee6ffaa,0x08cfbc21,0xe6e815ef,
0xd99be7ba,0xce366f4a,0xd4099fea,0xd67cb029,
0xafb2a431,0x31233f2a,0x3094a5c6,0xc066a235,
0x37bc4e74,0xa6ca82fc,0xb0d090e0,0x15d8a733,
0x4a9804f1,0xf7daec41,0x0e50cd7f,0x2ff69117,
0x8dd64d76,0x4db0ef43,0x544daacc,0xdf0496e4,
0xe3b5d19e,0x1b886a4c,0xb81f2cc1,0x7f516546,
0x04ea5e9d,0x5d358c01,0x737487fa,0x2e410bfb,
0x5a1d67b3,0x52d2db92,0x335610e9,0x1347d66d,
0x8c61d79a,0x7a0ca137,0x8e14f859,0x893c13eb,
0xee27a9ce,0x35c961b7,0xede51ce1,0x3cb1477a,
0x59dfd29c,0x3f73f255,0x79ce1418,0xbf37c773,
0xeacdf753,0x5baafd5f,0x146f3ddf,0x86db4478,
0x81f3afca,0x3ec468b9,0x2c342438,0x5f40a3c2,
0x72c31d16,0x0c25e2bc,0x8b493c28,0x41950dff,
0x7101a839,0xdeb30c08,0x9ce4b4d8,0x90c15664,
0x6184cb7b,0x70b632d5,0x745c6c48,0x4257b8d0 ];

var T6 = [
0xa7f45150,0x65417e53,0xa4171ac3,0x5e273a96,
0x6bab3bcb,0x459d1ff1,0x58faacab,0x03e34b93,
0xfa302055,0x6d76adf6,0x76cc8891,0x4c02f525,
0xd7e54ffc,0xcb2ac5d7,0x44352680,0xa362b58f,
0x5ab1de49,0x1bba2567,0x0eea4598,0xc0fe5de1,
0x752fc302,0xf04c8112,0x97468da3,0xf9d36bc6,
0x5f8f03e7,0x9c921595,0x7a6dbfeb,0x595295da,
0x83bed42d,0x217458d3,0x69e04929,0xc8c98e44,
0x89c2756a,0x798ef478,0x3e58996b,0x71b927dd,
0x4fe1beb6,0xad88f017,0xac20c966,0x3ace7db4,
0x4adf6318,0x311ae582,0x33519760,0x7f536245,
0x7764b1e0,0xae6bbb84,0xa081fe1c,0x2b08f994,
0x68487058,0xfd458f19,0x6cde9487,0xf87b52b7,
0xd373ab23,0x024b72e2,0x8f1fe357,0xab55662a,
0x28ebb207,0xc2b52f03,0x7bc5869a,0x0837d3a5,
0x872830f2,0xa5bf23b2,0x6a0302ba,0x8216ed5c,
0x1ccf8a2b,0xb479a792,0xf207f3f0,0xe2694ea1,
0xf4da65cd,0xbe0506d5,0x6234d11f,0xfea6c48a,
0x532e349d,0x55f3a2a0,0xe18a0532,0xebf6a475,
0xec830b39,0xef6040aa,0x9f715e06,0x106ebd51,
0x8a213ef9,0x06dd963d,0x053eddae,0xbde64d46,
0x8d5491b5,0x5dc47105,0xd406046f,0x155060ff,
0xfb981924,0xe9bdd697,0x434089cc,0x9ed96777,
0x42e8b0bd,0x8b890788,0x5b19e738,0xeec879db,
0x0a7ca147,0x0f427ce9,0x1e84f8c9,0x00000000,
0x86800983,0xed2b3248,0x70111eac,0x725a6c4e,
0xff0efdfb,0x38850f56,0xd5ae3d1e,0x392d3627,
0xd90f0a64,0xa65c6821,0x545b9bd1,0x2e36243a,
0x670a0cb1,0xe757930f,0x96eeb4d2,0x919b1b9e,
0xc5c0804f,0x20dc61a2,0x4b775a69,0x1a121c16,
0xba93e20a,0x2aa0c0e5,0xe0223c43,0x171b121d,
0x0d090e0b,0xc78bf2ad,0xa8b62db9,0xa91e14c8,
0x19f15785,0x0775af4c,0xdd99eebb,0x607fa3fd,
0x2601f79f,0xf5725cbc,0x3b6644c5,0x7efb5b34,
0x29438b76,0xc623cbdc,0xfcedb668,0xf1e4b863,
0xdc31d7ca,0x85634210,0x22971340,0x11c68420,
0x244a857d,0x3dbbd2f8,0x32f9ae11,0xa129c76d,
0x2f9e1d4b,0x30b2dcf3,0x52860dec,0xe3c177d0,
0x16b32b6c,0xb970a999,0x489411fa,0x64e94722,
0x8cfca8c4,0x3ff0a01a,0x2c7d56d8,0x903322ef,
0x4e4987c7,0xd138d9c1,0xa2ca8cfe,0x0bd49836,
0x81f5a6cf,0xde7aa528,0x8eb7da26,0xbfad3fa4,
0x9d3a2ce4,0x9278500d,0xcc5f6a9b,0x467e5462,
0x138df6c2,0xb8d890e8,0xf7392e5e,0xafc382f5,
0x805d9fbe,0x93d0697c,0x2dd56fa9,0x1225cfb3,
0x99acc83b,0x7d1810a7,0x639ce86e,0xbb3bdb7b,
0x7826cd09,0x18596ef4,0xb79aec01,0x9a4f83a8,
0x6e95e665,0xe6ffaa7e,0xcfbc2108,0xe815efe6,
0x9be7bad9,0x366f4ace,0x099fead4,0x7cb029d6,
0xb2a431af,0x233f2a31,0x94a5c630,0x66a235c0,
0xbc4e7437,0xca82fca6,0xd090e0b0,0xd8a73315,
0x9804f14a,0xdaec41f7,0x50cd7f0e,0xf691172f,
0xd64d768d,0xb0ef434d,0x4daacc54,0x0496e4df,
0xb5d19ee3,0x886a4c1b,0x1f2cc1b8,0x5165467f,
0xea5e9d04,0x358c015d,0x7487fa73,0x410bfb2e,
0x1d67b35a,0xd2db9252,0x5610e933,0x47d66d13,
0x61d79a8c,0x0ca1377a,0x14f8598e,0x3c13eb89,
0x27a9ceee,0xc961b735,0xe51ce1ed,0xb1477a3c,
0xdfd29c59,0x73f2553f,0xce141879,0x37c773bf,
0xcdf753ea,0xaafd5f5b,0x6f3ddf14,0xdb447886,
0xf3afca81,0xc468b93e,0x3424382c,0x40a3c25f,
0xc31d1672,0x25e2bc0c,0x493c288b,0x950dff41,
0x01a83971,0xb30c08de,0xe4b4d89c,0xc1566490,
0x84cb7b61,0xb632d570,0x5c6c4874,0x57b8d042 ];

var T7 = [
0xf45150a7,0x417e5365,0x171ac3a4,0x273a965e,
0xab3bcb6b,0x9d1ff145,0xfaacab58,0xe34b9303,
0x302055fa,0x76adf66d,0xcc889176,0x02f5254c,
0xe54ffcd7,0x2ac5d7cb,0x35268044,0x62b58fa3,
0xb1de495a,0xba25671b,0xea45980e,0xfe5de1c0,
0x2fc30275,0x4c8112f0,0x468da397,0xd36bc6f9,
0x8f03e75f,0x9215959c,0x6dbfeb7a,0x5295da59,
0xbed42d83,0x7458d321,0xe0492969,0xc98e44c8,
0xc2756a89,0x8ef47879,0x58996b3e,0xb927dd71,
0xe1beb64f,0x88f017ad,0x20c966ac,0xce7db43a,
0xdf63184a,0x1ae58231,0x51976033,0x5362457f,
0x64b1e077,0x6bbb84ae,0x81fe1ca0,0x08f9942b,
0x48705868,0x458f19fd,0xde94876c,0x7b52b7f8,
0x73ab23d3,0x4b72e202,0x1fe3578f,0x55662aab,
0xebb20728,0xb52f03c2,0xc5869a7b,0x37d3a508,
0x2830f287,0xbf23b2a5,0x0302ba6a,0x16ed5c82,
0xcf8a2b1c,0x79a792b4,0x07f3f0f2,0x694ea1e2,
0xda65cdf4,0x0506d5be,0x34d11f62,0xa6c48afe,
0x2e349d53,0xf3a2a055,0x8a0532e1,0xf6a475eb,
0x830b39ec,0x6040aaef,0x715e069f,0x6ebd5110,
0x213ef98a,0xdd963d06,0x3eddae05,0xe64d46bd,
0x5491b58d,0xc471055d,0x06046fd4,0x5060ff15,
0x981924fb,0xbdd697e9,0x4089cc43,0xd967779e,
0xe8b0bd42,0x8907888b,0x19e7385b,0xc879dbee,
0x7ca1470a,0x427ce90f,0x84f8c91e,0x00000000,
0x80098386,0x2b3248ed,0x111eac70,0x5a6c4e72,
0x0efdfbff,0x850f5638,0xae3d1ed5,0x2d362739,
0x0f0a64d9,0x5c6821a6,0x5b9bd154,0x36243a2e,
0x0a0cb167,0x57930fe7,0xeeb4d296,0x9b1b9e91,
0xc0804fc5,0xdc61a220,0x775a694b,0x121c161a,
0x93e20aba,0xa0c0e52a,0x223c43e0,0x1b121d17,
0x090e0b0d,0x8bf2adc7,0xb62db9a8,0x1e14c8a9,
0xf1578519,0x75af4c07,0x99eebbdd,0x7fa3fd60,
0x01f79f26,0x725cbcf5,0x6644c53b,0xfb5b347e,
0x438b7629,0x23cbdcc6,0xedb668fc,0xe4b863f1,
0x31d7cadc,0x63421085,0x97134022,0xc6842011,
0x4a857d24,0xbbd2f83d,0xf9ae1132,0x29c76da1,
0x9e1d4b2f,0xb2dcf330,0x860dec52,0xc177d0e3,
0xb32b6c16,0x70a999b9,0x9411fa48,0xe9472264,
0xfca8c48c,0xf0a01a3f,0x7d56d82c,0x3322ef90,
0x4987c74e,0x38d9c1d1,0xca8cfea2,0xd498360b,
0xf5a6cf81,0x7aa528de,0xb7da268e,0xad3fa4bf,
0x3a2ce49d,0x78500d92,0x5f6a9bcc,0x7e546246,
0x8df6c213,0xd890e8b8,0x392e5ef7,0xc382f5af,
0x5d9fbe80,0xd0697c93,0xd56fa92d,0x25cfb312,
0xacc83b99,0x1810a77d,0x9ce86e63,0x3bdb7bbb,
0x26cd0978,0x596ef418,0x9aec01b7,0x4f83a89a,
0x95e6656e,0xffaa7ee6,0xbc2108cf,0x15efe6e8,
0xe7bad99b,0x6f4ace36,0x9fead409,0xb029d67c,
0xa431afb2,0x3f2a3123,0xa5c63094,0xa235c066,
0x4e7437bc,0x82fca6ca,0x90e0b0d0,0xa73315d8,
0x04f14a98,0xec41f7da,0xcd7f0e50,0x91172ff6,
0x4d768dd6,0xef434db0,0xaacc544d,0x96e4df04,
0xd19ee3b5,0x6a4c1b88,0x2cc1b81f,0x65467f51,
0x5e9d04ea,0x8c015d35,0x87fa7374,0x0bfb2e41,
0x67b35a1d,0xdb9252d2,0x10e93356,0xd66d1347,
0xd79a8c61,0xa1377a0c,0xf8598e14,0x13eb893c,
0xa9ceee27,0x61b735c9,0x1ce1ede5,0x477a3cb1,
0xd29c59df,0xf2553f73,0x141879ce,0xc773bf37,
0xf753eacd,0xfd5f5baa,0x3ddf146f,0x447886db,
0xafca81f3,0x68b93ec4,0x24382c34,0xa3c25f40,
0x1d1672c3,0xe2bc0c25,0x3c288b49,0x0dff4195,
0xa8397101,0x0c08deb3,0xb4d89ce4,0x566490c1,
0xcb7b6184,0x32d570b6,0x6c48745c,0xb8d04257 ];

var T8 = [
0x5150a7f4,0x7e536541,0x1ac3a417,0x3a965e27,
0x3bcb6bab,0x1ff1459d,0xacab58fa,0x4b9303e3,
0x2055fa30,0xadf66d76,0x889176cc,0xf5254c02,
0x4ffcd7e5,0xc5d7cb2a,0x26804435,0xb58fa362,
0xde495ab1,0x25671bba,0x45980eea,0x5de1c0fe,
0xc302752f,0x8112f04c,0x8da39746,0x6bc6f9d3,
0x03e75f8f,0x15959c92,0xbfeb7a6d,0x95da5952,
0xd42d83be,0x58d32174,0x492969e0,0x8e44c8c9,
0x756a89c2,0xf478798e,0x996b3e58,0x27dd71b9,
0xbeb64fe1,0xf017ad88,0xc966ac20,0x7db43ace,
0x63184adf,0xe582311a,0x97603351,0x62457f53,
0xb1e07764,0xbb84ae6b,0xfe1ca081,0xf9942b08,
0x70586848,0x8f19fd45,0x94876cde,0x52b7f87b,
0xab23d373,0x72e2024b,0xe3578f1f,0x662aab55,
0xb20728eb,0x2f03c2b5,0x869a7bc5,0xd3a50837,
0x30f28728,0x23b2a5bf,0x02ba6a03,0xed5c8216,
0x8a2b1ccf,0xa792b479,0xf3f0f207,0x4ea1e269,
0x65cdf4da,0x06d5be05,0xd11f6234,0xc48afea6,
0x349d532e,0xa2a055f3,0x0532e18a,0xa475ebf6,
0x0b39ec83,0x40aaef60,0x5e069f71,0xbd51106e,
0x3ef98a21,0x963d06dd,0xddae053e,0x4d46bde6,
0x91b58d54,0x71055dc4,0x046fd406,0x60ff1550,
0x1924fb98,0xd697e9bd,0x89cc4340,0x67779ed9,
0xb0bd42e8,0x07888b89,0xe7385b19,0x79dbeec8,
0xa1470a7c,0x7ce90f42,0xf8c91e84,0x00000000,
0x09838680,0x3248ed2b,0x1eac7011,0x6c4e725a,
0xfdfbff0e,0x0f563885,0x3d1ed5ae,0x3627392d,
0x0a64d90f,0x6821a65c,0x9bd1545b,0x243a2e36,
0x0cb1670a,0x930fe757,0xb4d296ee,0x1b9e919b,
0x804fc5c0,0x61a220dc,0x5a694b77,0x1c161a12,
0xe20aba93,0xc0e52aa0,0x3c43e022,0x121d171b,
0x0e0b0d09,0xf2adc78b,0x2db9a8b6,0x14c8a91e,
0x578519f1,0xaf4c0775,0xeebbdd99,0xa3fd607f,
0xf79f2601,0x5cbcf572,0x44c53b66,0x5b347efb,
0x8b762943,0xcbdcc623,0xb668fced,0xb863f1e4,
0xd7cadc31,0x42108563,0x13402297,0x842011c6,
0x857d244a,0xd2f83dbb,0xae1132f9,0xc76da129,
0x1d4b2f9e,0xdcf330b2,0x0dec5286,0x77d0e3c1,
0x2b6c16b3,0xa999b970,0x11fa4894,0x472264e9,
0xa8c48cfc,0xa01a3ff0,0x56d82c7d,0x22ef9033,
0x87c74e49,0xd9c1d138,0x8cfea2ca,0x98360bd4,
0xa6cf81f5,0xa528de7a,0xda268eb7,0x3fa4bfad,
0x2ce49d3a,0x500d9278,0x6a9bcc5f,0x5462467e,
0xf6c2138d,0x90e8b8d8,0x2e5ef739,0x82f5afc3,
0x9fbe805d,0x697c93d0,0x6fa92dd5,0xcfb31225,
0xc83b99ac,0x10a77d18,0xe86e639c,0xdb7bbb3b,
0xcd097826,0x6ef41859,0xec01b79a,0x83a89a4f,
0xe6656e95,0xaa7ee6ff,0x2108cfbc,0xefe6e815,
0xbad99be7,0x4ace366f,0xead4099f,0x29d67cb0,
0x31afb2a4,0x2a31233f,0xc63094a5,0x35c066a2,
0x7437bc4e,0xfca6ca82,0xe0b0d090,0x3315d8a7,
0xf14a9804,0x41f7daec,0x7f0e50cd,0x172ff691,
0x768dd64d,0x434db0ef,0xcc544daa,0xe4df0496,
0x9ee3b5d1,0x4c1b886a,0xc1b81f2c,0x467f5165,
0x9d04ea5e,0x015d358c,0xfa737487,0xfb2e410b,
0xb35a1d67,0x9252d2db,0xe9335610,0x6d1347d6,
0x9a8c61d7,0x377a0ca1,0x598e14f8,0xeb893c13,
0xceee27a9,0xb735c961,0xe1ede51c,0x7a3cb147,
0x9c59dfd2,0x553f73f2,0x1879ce14,0x73bf37c7,
0x53eacdf7,0x5f5baafd,0xdf146f3d,0x7886db44,
0xca81f3af,0xb93ec468,0x382c3424,0xc25f40a3,
0x1672c31d,0xbc0c25e2,0x288b493c,0xff41950d,
0x397101a8,0x08deb30c,0xd89ce4b4,0x6490c156,
0x7b6184cb,0xd570b632,0x48745c6c,0xd04257b8 ];

var U1 = [
0x00000000,0x0b0d090e,0x161a121c,0x1d171b12,
0x2c342438,0x27392d36,0x3a2e3624,0x31233f2a,
0x58684870,0x5365417e,0x4e725a6c,0x457f5362,
0x745c6c48,0x7f516546,0x62467e54,0x694b775a,
0xb0d090e0,0xbbdd99ee,0xa6ca82fc,0xadc78bf2,
0x9ce4b4d8,0x97e9bdd6,0x8afea6c4,0x81f3afca,
0xe8b8d890,0xe3b5d19e,0xfea2ca8c,0xf5afc382,
0xc48cfca8,0xcf81f5a6,0xd296eeb4,0xd99be7ba,
0x7bbb3bdb,0x70b632d5,0x6da129c7,0x66ac20c9,
0x578f1fe3,0x5c8216ed,0x41950dff,0x4a9804f1,
0x23d373ab,0x28de7aa5,0x35c961b7,0x3ec468b9,
0x0fe75793,0x04ea5e9d,0x19fd458f,0x12f04c81,
0xcb6bab3b,0xc066a235,0xdd71b927,0xd67cb029,
0xe75f8f03,0xec52860d,0xf1459d1f,0xfa489411,
0x9303e34b,0x980eea45,0x8519f157,0x8e14f859,
0xbf37c773,0xb43ace7d,0xa92dd56f,0xa220dc61,
0xf66d76ad,0xfd607fa3,0xe07764b1,0xeb7a6dbf,
0xda595295,0xd1545b9b,0xcc434089,0xc74e4987,
0xae053edd,0xa50837d3,0xb81f2cc1,0xb31225cf,
0x82311ae5,0x893c13eb,0x942b08f9,0x9f2601f7,
0x46bde64d,0x4db0ef43,0x50a7f451,0x5baafd5f,
0x6a89c275,0x6184cb7b,0x7c93d069,0x779ed967,
0x1ed5ae3d,0x15d8a733,0x08cfbc21,0x03c2b52f,
0x32e18a05,0x39ec830b,0x24fb9819,0x2ff69117,
0x8dd64d76,0x86db4478,0x9bcc5f6a,0x90c15664,
0xa1e2694e,0xaaef6040,0xb7f87b52,0xbcf5725c,
0xd5be0506,0xdeb30c08,0xc3a4171a,0xc8a91e14,
0xf98a213e,0xf2872830,0xef903322,0xe49d3a2c,
0x3d06dd96,0x360bd498,0x2b1ccf8a,0x2011c684,
0x1132f9ae,0x1a3ff0a0,0x0728ebb2,0x0c25e2bc,
0x656e95e6,0x6e639ce8,0x737487fa,0x78798ef4,
0x495ab1de,0x4257b8d0,0x5f40a3c2,0x544daacc,
0xf7daec41,0xfcd7e54f,0xe1c0fe5d,0xeacdf753,
0xdbeec879,0xd0e3c177,0xcdf4da65,0xc6f9d36b,
0xafb2a431,0xa4bfad3f,0xb9a8b62d,0xb2a5bf23,
0x83868009,0x888b8907,0x959c9215,0x9e919b1b,
0x470a7ca1,0x4c0775af,0x51106ebd,0x5a1d67b3,
0x6b3e5899,0x60335197,0x7d244a85,0x7629438b,
0x1f6234d1,0x146f3ddf,0x097826cd,0x02752fc3,
0x335610e9,0x385b19e7,0x254c02f5,0x2e410bfb,
0x8c61d79a,0x876cde94,0x9a7bc586,0x9176cc88,
0xa055f3a2,0xab58faac,0xb64fe1be,0xbd42e8b0,
0xd4099fea,0xdf0496e4,0xc2138df6,0xc91e84f8,
0xf83dbbd2,0xf330b2dc,0xee27a9ce,0xe52aa0c0,
0x3cb1477a,0x37bc4e74,0x2aab5566,0x21a65c68,
0x10856342,0x1b886a4c,0x069f715e,0x0d927850,
0x64d90f0a,0x6fd40604,0x72c31d16,0x79ce1418,
0x48ed2b32,0x43e0223c,0x5ef7392e,0x55fa3020,
0x01b79aec,0x0aba93e2,0x17ad88f0,0x1ca081fe,
0x2d83bed4,0x268eb7da,0x3b99acc8,0x3094a5c6,
0x59dfd29c,0x52d2db92,0x4fc5c080,0x44c8c98e,
0x75ebf6a4,0x7ee6ffaa,0x63f1e4b8,0x68fcedb6,
0xb1670a0c,0xba6a0302,0xa77d1810,0xac70111e,
0x9d532e34,0x965e273a,0x8b493c28,0x80443526,
0xe90f427c,0xe2024b72,0xff155060,0xf418596e,
0xc53b6644,0xce366f4a,0xd3217458,0xd82c7d56,
0x7a0ca137,0x7101a839,0x6c16b32b,0x671bba25,
0x5638850f,0x5d358c01,0x40229713,0x4b2f9e1d,
0x2264e947,0x2969e049,0x347efb5b,0x3f73f255,
0x0e50cd7f,0x055dc471,0x184adf63,0x1347d66d,
0xcadc31d7,0xc1d138d9,0xdcc623cb,0xd7cb2ac5,
0xe6e815ef,0xede51ce1,0xf0f207f3,0xfbff0efd,
0x92b479a7,0x99b970a9,0x84ae6bbb,0x8fa362b5,
0xbe805d9f,0xb58d5491,0xa89a4f83,0xa397468d ];

var U2 = [
0x00000000,0x0d090e0b,0x1a121c16,0x171b121d,
0x3424382c,0x392d3627,0x2e36243a,0x233f2a31,
0x68487058,0x65417e53,0x725a6c4e,0x7f536245,
0x5c6c4874,0x5165467f,0x467e5462,0x4b775a69,
0xd090e0b0,0xdd99eebb,0xca82fca6,0xc78bf2ad,
0xe4b4d89c,0xe9bdd697,0xfea6c48a,0xf3afca81,
0xb8d890e8,0xb5d19ee3,0xa2ca8cfe,0xafc382f5,
0x8cfca8c4,0x81f5a6cf,0x96eeb4d2,0x9be7bad9,
0xbb3bdb7b,0xb632d570,0xa129c76d,0xac20c966,
0x8f1fe357,0x8216ed5c,0x950dff41,0x9804f14a,
0xd373ab23,0xde7aa528,0xc961b735,0xc468b93e,
0xe757930f,0xea5e9d04,0xfd458f19,0xf04c8112,
0x6bab3bcb,0x66a235c0,0x71b927dd,0x7cb029d6,
0x5f8f03e7,0x52860dec,0x459d1ff1,0x489411fa,
0x03e34b93,0x0eea4598,0x19f15785,0x14f8598e,
0x37c773bf,0x3ace7db4,0x2dd56fa9,0x20dc61a2,
0x6d76adf6,0x607fa3fd,0x7764b1e0,0x7a6dbfeb,
0x595295da,0x545b9bd1,0x434089cc,0x4e4987c7,
0x053eddae,0x0837d3a5,0x1f2cc1b8,0x1225cfb3,
0x311ae582,0x3c13eb89,0x2b08f994,0x2601f79f,
0xbde64d46,0xb0ef434d,0xa7f45150,0xaafd5f5b,
0x89c2756a,0x84cb7b61,0x93d0697c,0x9ed96777,
0xd5ae3d1e,0xd8a73315,0xcfbc2108,0xc2b52f03,
0xe18a0532,0xec830b39,0xfb981924,0xf691172f,
0xd64d768d,0xdb447886,0xcc5f6a9b,0xc1566490,
0xe2694ea1,0xef6040aa,0xf87b52b7,0xf5725cbc,
0xbe0506d5,0xb30c08de,0xa4171ac3,0xa91e14c8,
0x8a213ef9,0x872830f2,0x903322ef,0x9d3a2ce4,
0x06dd963d,0x0bd49836,0x1ccf8a2b,0x11c68420,
0x32f9ae11,0x3ff0a01a,0x28ebb207,0x25e2bc0c,
0x6e95e665,0x639ce86e,0x7487fa73,0x798ef478,
0x5ab1de49,0x57b8d042,0x40a3c25f,0x4daacc54,
0xdaec41f7,0xd7e54ffc,0xc0fe5de1,0xcdf753ea,
0xeec879db,0xe3c177d0,0xf4da65cd,0xf9d36bc6,
0xb2a431af,0xbfad3fa4,0xa8b62db9,0xa5bf23b2,
0x86800983,0x8b890788,0x9c921595,0x919b1b9e,
0x0a7ca147,0x0775af4c,0x106ebd51,0x1d67b35a,
0x3e58996b,0x33519760,0x244a857d,0x29438b76,
0x6234d11f,0x6f3ddf14,0x7826cd09,0x752fc302,
0x5610e933,0x5b19e738,0x4c02f525,0x410bfb2e,
0x61d79a8c,0x6cde9487,0x7bc5869a,0x76cc8891,
0x55f3a2a0,0x58faacab,0x4fe1beb6,0x42e8b0bd,
0x099fead4,0x0496e4df,0x138df6c2,0x1e84f8c9,
0x3dbbd2f8,0x30b2dcf3,0x27a9ceee,0x2aa0c0e5,
0xb1477a3c,0xbc4e7437,0xab55662a,0xa65c6821,
0x85634210,0x886a4c1b,0x9f715e06,0x9278500d,
0xd90f0a64,0xd406046f,0xc31d1672,0xce141879,
0xed2b3248,0xe0223c43,0xf7392e5e,0xfa302055,
0xb79aec01,0xba93e20a,0xad88f017,0xa081fe1c,
0x83bed42d,0x8eb7da26,0x99acc83b,0x94a5c630,
0xdfd29c59,0xd2db9252,0xc5c0804f,0xc8c98e44,
0xebf6a475,0xe6ffaa7e,0xf1e4b863,0xfcedb668,
0x670a0cb1,0x6a0302ba,0x7d1810a7,0x70111eac,
0x532e349d,0x5e273a96,0x493c288b,0x44352680,
0x0f427ce9,0x024b72e2,0x155060ff,0x18596ef4,
0x3b6644c5,0x366f4ace,0x217458d3,0x2c7d56d8,
0x0ca1377a,0x01a83971,0x16b32b6c,0x1bba2567,
0x38850f56,0x358c015d,0x22971340,0x2f9e1d4b,
0x64e94722,0x69e04929,0x7efb5b34,0x73f2553f,
0x50cd7f0e,0x5dc47105,0x4adf6318,0x47d66d13,
0xdc31d7ca,0xd138d9c1,0xc623cbdc,0xcb2ac5d7,
0xe815efe6,0xe51ce1ed,0xf207f3f0,0xff0efdfb,
0xb479a792,0xb970a999,0xae6bbb84,0xa362b58f,
0x805d9fbe,0x8d5491b5,0x9a4f83a8,0x97468da3,
 ];

var U3 = [
0x00000000,0x090e0b0d,0x121c161a,0x1b121d17,
0x24382c34,0x2d362739,0x36243a2e,0x3f2a3123,
0x48705868,0x417e5365,0x5a6c4e72,0x5362457f,
0x6c48745c,0x65467f51,0x7e546246,0x775a694b,
0x90e0b0d0,0x99eebbdd,0x82fca6ca,0x8bf2adc7,
0xb4d89ce4,0xbdd697e9,0xa6c48afe,0xafca81f3,
0xd890e8b8,0xd19ee3b5,0xca8cfea2,0xc382f5af,
0xfca8c48c,0xf5a6cf81,0xeeb4d296,0xe7bad99b,
0x3bdb7bbb,0x32d570b6,0x29c76da1,0x20c966ac,
0x1fe3578f,0x16ed5c82,0x0dff4195,0x04f14a98,
0x73ab23d3,0x7aa528de,0x61b735c9,0x68b93ec4,
0x57930fe7,0x5e9d04ea,0x458f19fd,0x4c8112f0,
0xab3bcb6b,0xa235c066,0xb927dd71,0xb029d67c,
0x8f03e75f,0x860dec52,0x9d1ff145,0x9411fa48,
0xe34b9303,0xea45980e,0xf1578519,0xf8598e14,
0xc773bf37,0xce7db43a,0xd56fa92d,0xdc61a220,
0x76adf66d,0x7fa3fd60,0x64b1e077,0x6dbfeb7a,
0x5295da59,0x5b9bd154,0x4089cc43,0x4987c74e,
0x3eddae05,0x37d3a508,0x2cc1b81f,0x25cfb312,
0x1ae58231,0x13eb893c,0x08f9942b,0x01f79f26,
0xe64d46bd,0xef434db0,0xf45150a7,0xfd5f5baa,
0xc2756a89,0xcb7b6184,0xd0697c93,0xd967779e,
0xae3d1ed5,0xa73315d8,0xbc2108cf,0xb52f03c2,
0x8a0532e1,0x830b39ec,0x981924fb,0x91172ff6,
0x4d768dd6,0x447886db,0x5f6a9bcc,0x566490c1,
0x694ea1e2,0x6040aaef,0x7b52b7f8,0x725cbcf5,
0x0506d5be,0x0c08deb3,0x171ac3a4,0x1e14c8a9,
0x213ef98a,0x2830f287,0x3322ef90,0x3a2ce49d,
0xdd963d06,0xd498360b,0xcf8a2b1c,0xc6842011,
0xf9ae1132,0xf0a01a3f,0xebb20728,0xe2bc0c25,
0x95e6656e,0x9ce86e63,0x87fa7374,0x8ef47879,
0xb1de495a,0xb8d04257,0xa3c25f40,0xaacc544d,
0xec41f7da,0xe54ffcd7,0xfe5de1c0,0xf753eacd,
0xc879dbee,0xc177d0e3,0xda65cdf4,0xd36bc6f9,
0xa431afb2,0xad3fa4bf,0xb62db9a8,0xbf23b2a5,
0x80098386,0x8907888b,0x9215959c,0x9b1b9e91,
0x7ca1470a,0x75af4c07,0x6ebd5110,0x67b35a1d,
0x58996b3e,0x51976033,0x4a857d24,0x438b7629,
0x34d11f62,0x3ddf146f,0x26cd0978,0x2fc30275,
0x10e93356,0x19e7385b,0x02f5254c,0x0bfb2e41,
0xd79a8c61,0xde94876c,0xc5869a7b,0xcc889176,
0xf3a2a055,0xfaacab58,0xe1beb64f,0xe8b0bd42,
0x9fead409,0x96e4df04,0x8df6c213,0x84f8c91e,
0xbbd2f83d,0xb2dcf330,0xa9ceee27,0xa0c0e52a,
0x477a3cb1,0x4e7437bc,0x55662aab,0x5c6821a6,
0x63421085,0x6a4c1b88,0x715e069f,0x78500d92,
0x0f0a64d9,0x06046fd4,0x1d1672c3,0x141879ce,
0x2b3248ed,0x223c43e0,0x392e5ef7,0x302055fa,
0x9aec01b7,0x93e20aba,0x88f017ad,0x81fe1ca0,
0xbed42d83,0xb7da268e,0xacc83b99,0xa5c63094,
0xd29c59df,0xdb9252d2,0xc0804fc5,0xc98e44c8,
0xf6a475eb,0xffaa7ee6,0xe4b863f1,0xedb668fc,
0x0a0cb167,0x0302ba6a,0x1810a77d,0x111eac70,
0x2e349d53,0x273a965e,0x3c288b49,0x35268044,
0x427ce90f,0x4b72e202,0x5060ff15,0x596ef418,
0x6644c53b,0x6f4ace36,0x7458d321,0x7d56d82c,
0xa1377a0c,0xa8397101,0xb32b6c16,0xba25671b,
0x850f5638,0x8c015d35,0x97134022,0x9e1d4b2f,
0xe9472264,0xe0492969,0xfb5b347e,0xf2553f73,
0xcd7f0e50,0xc471055d,0xdf63184a,0xd66d1347,
0x31d7cadc,0x38d9c1d1,0x23cbdcc6,0x2ac5d7cb,
0x15efe6e8,0x1ce1ede5,0x07f3f0f2,0x0efdfbff,
0x79a792b4,0x70a999b9,0x6bbb84ae,0x62b58fa3,
0x5d9fbe80,0x5491b58d,0x4f83a89a,0x468da397 ];

var U4 = [
0x00000000,0x0e0b0d09,0x1c161a12,0x121d171b,
0x382c3424,0x3627392d,0x243a2e36,0x2a31233f,
0x70586848,0x7e536541,0x6c4e725a,0x62457f53,
0x48745c6c,0x467f5165,0x5462467e,0x5a694b77,
0xe0b0d090,0xeebbdd99,0xfca6ca82,0xf2adc78b,
0xd89ce4b4,0xd697e9bd,0xc48afea6,0xca81f3af,
0x90e8b8d8,0x9ee3b5d1,0x8cfea2ca,0x82f5afc3,
0xa8c48cfc,0xa6cf81f5,0xb4d296ee,0xbad99be7,
0xdb7bbb3b,0xd570b632,0xc76da129,0xc966ac20,
0xe3578f1f,0xed5c8216,0xff41950d,0xf14a9804,
0xab23d373,0xa528de7a,0xb735c961,0xb93ec468,
0x930fe757,0x9d04ea5e,0x8f19fd45,0x8112f04c,
0x3bcb6bab,0x35c066a2,0x27dd71b9,0x29d67cb0,
0x03e75f8f,0x0dec5286,0x1ff1459d,0x11fa4894,
0x4b9303e3,0x45980eea,0x578519f1,0x598e14f8,
0x73bf37c7,0x7db43ace,0x6fa92dd5,0x61a220dc,
0xadf66d76,0xa3fd607f,0xb1e07764,0xbfeb7a6d,
0x95da5952,0x9bd1545b,0x89cc4340,0x87c74e49,
0xddae053e,0xd3a50837,0xc1b81f2c,0xcfb31225,
0xe582311a,0xeb893c13,0xf9942b08,0xf79f2601,
0x4d46bde6,0x434db0ef,0x5150a7f4,0x5f5baafd,
0x756a89c2,0x7b6184cb,0x697c93d0,0x67779ed9,
0x3d1ed5ae,0x3315d8a7,0x2108cfbc,0x2f03c2b5,
0x0532e18a,0x0b39ec83,0x1924fb98,0x172ff691,
0x768dd64d,0x7886db44,0x6a9bcc5f,0x6490c156,
0x4ea1e269,0x40aaef60,0x52b7f87b,0x5cbcf572,
0x06d5be05,0x08deb30c,0x1ac3a417,0x14c8a91e,
0x3ef98a21,0x30f28728,0x22ef9033,0x2ce49d3a,
0x963d06dd,0x98360bd4,0x8a2b1ccf,0x842011c6,
0xae1132f9,0xa01a3ff0,0xb20728eb,0xbc0c25e2,
0xe6656e95,0xe86e639c,0xfa737487,0xf478798e,
0xde495ab1,0xd04257b8,0xc25f40a3,0xcc544daa,
0x41f7daec,0x4ffcd7e5,0x5de1c0fe,0x53eacdf7,
0x79dbeec8,0x77d0e3c1,0x65cdf4da,0x6bc6f9d3,
0x31afb2a4,0x3fa4bfad,0x2db9a8b6,0x23b2a5bf,
0x09838680,0x07888b89,0x15959c92,0x1b9e919b,
0xa1470a7c,0xaf4c0775,0xbd51106e,0xb35a1d67,
0x996b3e58,0x97603351,0x857d244a,0x8b762943,
0xd11f6234,0xdf146f3d,0xcd097826,0xc302752f,
0xe9335610,0xe7385b19,0xf5254c02,0xfb2e410b,
0x9a8c61d7,0x94876cde,0x869a7bc5,0x889176cc,
0xa2a055f3,0xacab58fa,0xbeb64fe1,0xb0bd42e8,
0xead4099f,0xe4df0496,0xf6c2138d,0xf8c91e84,
0xd2f83dbb,0xdcf330b2,0xceee27a9,0xc0e52aa0,
0x7a3cb147,0x7437bc4e,0x662aab55,0x6821a65c,
0x42108563,0x4c1b886a,0x5e069f71,0x500d9278,
0x0a64d90f,0x046fd406,0x1672c31d,0x1879ce14,
0x3248ed2b,0x3c43e022,0x2e5ef739,0x2055fa30,
0xec01b79a,0xe20aba93,0xf017ad88,0xfe1ca081,
0xd42d83be,0xda268eb7,0xc83b99ac,0xc63094a5,
0x9c59dfd2,0x9252d2db,0x804fc5c0,0x8e44c8c9,
0xa475ebf6,0xaa7ee6ff,0xb863f1e4,0xb668fced,
0x0cb1670a,0x02ba6a03,0x10a77d18,0x1eac7011,
0x349d532e,0x3a965e27,0x288b493c,0x26804435,
0x7ce90f42,0x72e2024b,0x60ff1550,0x6ef41859,
0x44c53b66,0x4ace366f,0x58d32174,0x56d82c7d,
0x377a0ca1,0x397101a8,0x2b6c16b3,0x25671bba,
0x0f563885,0x015d358c,0x13402297,0x1d4b2f9e,
0x472264e9,0x492969e0,0x5b347efb,0x553f73f2,
0x7f0e50cd,0x71055dc4,0x63184adf,0x6d1347d6,
0xd7cadc31,0xd9c1d138,0xcbdcc623,0xc5d7cb2a,
0xefe6e815,0xe1ede51c,0xf3f0f207,0xfdfbff0e,
0xa792b479,0xa999b970,0xbb84ae6b,0xb58fa362,
0x9fbe805d,0x91b58d54,0x83a89a4f,0x8da39746 ];

function prepare_decryption(key)
{
  var r, w;
  var rk2=new Array(maxrk+1);

  var ctx = new keyExpansion(key);

  var rounds=ctx.rounds;

  for(r=0; r<maxrk+1; r++)
  {
    rk2[r]=new Array(4);

    rk2[r][0] = ctx.rk[r][0]; 
    rk2[r][1] = ctx.rk[r][1];
    rk2[r][2] = ctx.rk[r][2];
    rk2[r][3] = ctx.rk[r][3];
  }

  for(r=1; r<rounds; r++)
  {
    w=rk2[r][0]; rk2[r][0] = U1[B0(w)] ^ U2[B1(w)] ^ U3[B2(w)] ^ U4[B3(w)];
    w=rk2[r][1]; rk2[r][1] = U1[B0(w)] ^ U2[B1(w)] ^ U3[B2(w)] ^ U4[B3(w)];
    w=rk2[r][2]; rk2[r][2] = U1[B0(w)] ^ U2[B1(w)] ^ U3[B2(w)] ^ U4[B3(w)];
    w=rk2[r][3]; rk2[r][3] = U1[B0(w)] ^ U2[B1(w)] ^ U3[B2(w)] ^ U4[B3(w)];
  }
  this.rk=rk2;
  this.rounds=rounds;
  return this;
}

function AESdecrypt(block, ctx)
{
  var r;
  var t0,t1,t2,t3;
  var rounds = ctx.rounds;

  var b = packBytes(block);

  for(r=rounds; r>1; r--)
  {
    t0 = b[0] ^ ctx.rk[r][0];
    t1 = b[1] ^ ctx.rk[r][1];
    t2 = b[2] ^ ctx.rk[r][2];
    t3 = b[3] ^ ctx.rk[r][3];

    b[0] = T5[B0(t0)] ^ T6[B1(t3)] ^ T7[B2(t2)] ^ T8[B3(t1)];
    b[1] = T5[B0(t1)] ^ T6[B1(t0)] ^ T7[B2(t3)] ^ T8[B3(t2)];
    b[2] = T5[B0(t2)] ^ T6[B1(t1)] ^ T7[B2(t0)] ^ T8[B3(t3)];
    b[3] = T5[B0(t3)] ^ T6[B1(t2)] ^ T7[B2(t1)] ^ T8[B3(t0)];
  }

  // last round is special
  t0 = b[0] ^ ctx.rk[1][0];
  t1 = b[1] ^ ctx.rk[1][1];
  t2 = b[2] ^ ctx.rk[1][2];
  t3 = b[3] ^ ctx.rk[1][3];

  b[0] = S5[B0(t0)] | (S5[B1(t3)]<<8) | (S5[B2(t2)]<<16) | (S5[B3(t1)]<<24);
  b[1] = S5[B0(t1)] | (S5[B1(t0)]<<8) | (S5[B2(t3)]<<16) | (S5[B3(t2)]<<24);
  b[2] = S5[B0(t2)] | (S5[B1(t1)]<<8) | (S5[B2(t0)]<<16) | (S5[B3(t3)]<<24);
  b[3] = S5[B0(t3)] | (S5[B1(t2)]<<8) | (S5[B2(t1)]<<16) | (S5[B3(t0)]<<24);
  
  b[0] ^= ctx.rk[0][0];
  b[1] ^= ctx.rk[0][1];
  b[2] ^= ctx.rk[0][2];
  b[3] ^= ctx.rk[0][3];

  return unpackBytes(b);
}

function byteArrayToString(bA){var R="";for(var i=0;i<bA.length; i++)if(bA[i]!=0)R+=String.fromCharCode(bA[i]);return R;}
function byteArrayToBinaryString(bA){var R="";for(var i=0;i<bA.length; i++)R+=String.fromCharCode(bA[i]);return R;}
function stringToByteArray(st){var bA=[];for(var i=0;i<st.length; i++)bA[i]=st.charCodeAt(i);return bA;}

function byteArrayToHex(byteArray) {
  var result = "";
  if (!byteArray)
    return;
  for (var i=0; i<byteArray.length; i++)
    result += ((byteArray[i]<16) ? "0" : "") + byteArray[i].toString(16);

  return result;
}

function hex2s(hex)
{
  var r='';
  if(hex.indexOf("0x") == 0 || hex.indexOf("0X") == 0) hex = hex.substr(2);

  if(hex.length%2) hex+='0';

  for(var i = 0; i<hex.length; i += 2)
    r += String.fromCharCode(parseInt(hex.slice(i, i+2), 16));
  return r;
}

function formatPlaintext(plaintext) {
  var bpb = blockSizeInBits / 8;               // bytes per block
  var i;

  // if primitive string or String instance
  if (typeof plaintext == "string" || plaintext.indexOf) {
    plaintext = plaintext.split("");
    // Unicode issues here (ignoring high byte)
    for (i=0; i<plaintext.length; i++)
      plaintext[i] = plaintext[i].charCodeAt(0) & 0xFF;
  } 

  for (i = bpb - (plaintext.length % bpb); i > 0 && i < bpb; i--) 
    plaintext[plaintext.length] = 0;
  
  return plaintext;
}

// Returns an array containing "howMany" random bytes. YOU SHOULD CHANGE THIS
// TO RETURN HIGHER QUALITY RANDOM BYTES IF YOU ARE USING THIS FOR A "REAL"
// APPLICATION.

function getRandomBytes(howMany) {
  var i;
  var bytes = new Array();
  for (i=0; i<howMany; i++)
    bytes[i] = Math.round(Math.random()*255);
  return bytes;
}

function rijndaelEncrypt(plaintext, key, mode) {
  var i, aBlock;
  var bpb = blockSizeInBits / 8;          // bytes per block
  var ct;                                 // ciphertext

  if (!plaintext || !key)
    return;
  if (key.length*8 != keySizeInBits)
    return; 
  if (mode == "CBC")
    ct = getRandomBytes(bpb);             // get IV
  else {
    mode = "ECB";
    ct = new Array();
  }

  // convert plaintext to byte array and pad with zeros if necessary. 
  plaintext = formatPlaintext(plaintext);

  var expandedKey = new keyExpansion(key);
  
  for (var block=0; block<plaintext.length / bpb; block++) {
    aBlock = plaintext.slice(block*bpb, (block+1)*bpb);
    if (mode == "CBC")
      for (var i=0; i<bpb; i++) 
        aBlock[i] ^= ct[block*bpb + i];
    ct = ct.concat(AESencrypt(aBlock, expandedKey));
  }

  return ct;
}

function rijndaelDecrypt(ciphertext, key, mode) {
  var bpb = blockSizeInBits / 8;          // bytes per block
  var pt = new Array();                   // plaintext array
  var aBlock;                             // a decrypted block
  var block;                              // current block number

  if (!ciphertext || !key) return;
  if(typeof ciphertext == "string")
  {
    ciphertext = ciphertext.split("");
    for (i=0; i<ciphertext.length; i++)
      ciphertext[i] = ciphertext[i].charCodeAt(0) & 0xFF;
  }

 if (key.length*8 != keySizeInBits)
    return; 
  if (!mode)
    mode = "ECB";                         // assume ECB if mode omitted

  var expandedKey = new prepare_decryption(key);
 
  // work backwards to accomodate CBC mode 
  for (block=(ciphertext.length / bpb)-1; block>0; block--) {
    aBlock = 
     AESdecrypt(ciphertext.slice(block*bpb,(block+1)*bpb), expandedKey);
    if (mode == "CBC") 
      for (var i=0; i<bpb; i++) 
        pt[(block-1)*bpb + i] = aBlock[i] ^ ciphertext[(block-1)*bpb + i];
    else 
      pt = aBlock.concat(pt);
  }

  // do last block if ECB (skips the IV in CBC)
  
  //if (mode == "ECB") TASSIN DAVID
    pt = AESdecrypt(ciphertext.slice(0, bpb), expandedKey).concat(pt);

  return pt;
}

    
function base64_utf8_encode (string)
{
	string = string.replace(/\r\n/g,"\n");
	var utftext = "";

	for (var n = 0; n < string.length; n++)
	{
		var c = string.charCodeAt(n);
		if (c < 128)
		{
			utftext += String.fromCharCode(c);
		}
		else if((c > 127) && (c < 2048))
		{
			utftext += String.fromCharCode((c >> 6) | 192);
			utftext += String.fromCharCode((c & 63) | 128);
		}
		else
		{
			utftext += String.fromCharCode((c >> 12) | 224);
			utftext += String.fromCharCode(((c >> 6) & 63) | 128);
			utftext += String.fromCharCode((c & 63) | 128);
		}
	}

	return utftext;
}

function base64_utf8_decode (utftext)
{
	var string = "";
	var i = 0;
	var c = c1 = c2 = 0;

	while ( i < utftext.length )
	{
		c = utftext.charCodeAt(i);

		if (c < 128)
		{
			string += String.fromCharCode(c);
			i++;
		}
		else if((c > 191) && (c < 224))
		{
			c2 = utftext.charCodeAt(i+1);
			string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
			i += 2;
		}
		else
		{
			c2 = utftext.charCodeAt(i+1);
			c3 = utftext.charCodeAt(i+2);
			string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
			i += 3;
		}
	}
	return string;
}

function base64encode(input)
{
	var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var output = "";
	var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
	var i = 0;

	// TASSIN DAVID
	input = base64_utf8_encode(input);

	while (i < input.length)
	{

		chr1 = input.charCodeAt(i++);
		chr2 = input.charCodeAt(i++);
		chr3 = input.charCodeAt(i++);

		enc1 = chr1 >> 2;
		enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
		enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
		enc4 = chr3 & 63;

		if (isNaN(chr2))
		{
			enc3 = enc4 = 64;
		}
		else if (isNaN(chr3))
		{
			enc4 = 64;
		}

		output = output +
		_keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
		_keyStr.charAt(enc3) + _keyStr.charAt(enc4);
	}

	return output;
}

function base64decode(input)
{
	var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var output = "";
	var chr1, chr2, chr3;
	var enc1, enc2, enc3, enc4;
	var i = 0;
	input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

	while (i < input.length)
	{

		enc1 = _keyStr.indexOf(input.charAt(i++));
		enc2 = _keyStr.indexOf(input.charAt(i++));
		enc3 = _keyStr.indexOf(input.charAt(i++));
		enc4 = _keyStr.indexOf(input.charAt(i++));

		chr1 = (enc1 << 2) | (enc2 >> 4);
		chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
		chr3 = ((enc3 & 3) << 6) | enc4;

		output = output + String.fromCharCode(chr1);

		if (enc3 != 64)
			output = output + String.fromCharCode(chr2);
		
		if (enc4 != 64)
			output = output + String.fromCharCode(chr3);
	}

	// TASSIN DAVID
	//output = base64_utf8_decode(output);

	return output;
}

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function encode64(input) {
   var output = "";
   var chr1, chr2, chr3;
   var enc1, enc2, enc3, enc4;
   var i = 0;

   do {
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

      output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + 
         keyStr.charAt(enc3) + keyStr.charAt(enc4);
   } while (i < input.length);
   
   return output;
}

function decode64(input) {
   var output = "";
   var chr1, chr2, chr3;
   var enc1, enc2, enc3, enc4;
   var i = 0;

   // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
   input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

   do {
      enc1 = keyStr.indexOf(input.charAt(i++));
      enc2 = keyStr.indexOf(input.charAt(i++));
      enc3 = keyStr.indexOf(input.charAt(i++));
      enc4 = keyStr.indexOf(input.charAt(i++));

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
   } while (i < input.length);

   return output;
}


if (typeof XMLDocument == "undefined" )
{
	if (typeof Document!="undefined")
		XMLDocument = Document;
	else
		XMLDocument = document;
}

if( document.implementation.hasFeature("XPath", "3.0") )
{
	XMLDocument.prototype.selectNodes = function(cXPathString, xNode)
	{
		if( !xNode )
		{
			xNode = this;
		}
		var oNSResolver = this.createNSResolver(this.documentElement)
		var aItems = this.evaluate(cXPathString, xNode, oNSResolver,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)
		var aResult = [];
		for( var i = 0; i < aItems.snapshotLength; i++)
		{
			aResult[i] =  aItems.snapshotItem(i);
		}
		return aResult;
	}

	Element.prototype.selectNodes = function(cXPathString)
	{
		if(this.ownerDocument.selectNodes)
		{
			return this.ownerDocument.selectNodes(cXPathString, this);
		}
		else
		{
			throw "For XML Elements Only";
		}
	}
}

if( document.implementation.hasFeature("XPath", "3.0") )
{  
	XMLDocument.prototype.selectSingleNode = function(cXPathString, xNode)
	{
		if( !xNode )	{ xNode = this; }
		var xItems = this.selectNodes(cXPathString, xNode);
		if( xItems.length > 0 )
		{
			return xItems[0];
		}
		else
		{
			return null;
		}
	}

	Element.prototype.selectSingleNode = function(cXPathString)
	{
		if(this.ownerDocument.selectSingleNode)
		{
			return this.ownerDocument.selectSingleNode(cXPathString, this);
		}
		else
		{
			throw "For XML Elements Only";
		}
	}
}        

var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */
function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}
function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));}
function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); }
function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }
function calcMD5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}
function md5_vm_test()
{
  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}
function core_md5(x, len)
{
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;
  
  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
 
    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);
  
}
function md5_cmn(q, a, b, x, s, t) {return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);}
function md5_ff(a, b, c, d, x, s, t) {return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);}
function md5_gg(a, b, c, d, x, s, t) {return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);}
function md5_hh(a, b, c, d, x, s, t) {return md5_cmn(b ^ c ^ d, a, b, x, s, t);}
function md5_ii(a, b, c, d, x, s, t) {return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);}
function core_hmac_md5(key, data)
{
  var bkey = str2binl(key);
  if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++) 
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
  return core_md5(opad.concat(hash), 512 + 128);
}
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}
function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}
function str2binl(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
  return bin;
}
function binl2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
  }
  return str;
}
function binl2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}

function trim (myString) {return myString.replace(/^\s+/g,'').replace(/\s+$/g,'')} 	

function GetHttpObject()
{
	var tmp_object=null;

	try
	{
		tmp_object=new XMLHttpRequest();
	}
	catch (e)
	{
		try
		{
			tmp_object=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			try
			{
				tmp_object=new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e)
			{
				alert("Your browser does not support AJAX!");
				return null;
			}
		}
	}
	
	return tmp_object;
}

function Call(method,url,param)
{
	newparam = "";
	
	if (arguments.length>2)
	{
			for (i=2;i<arguments.length;i++)
			{
				if (i>2) newparam+="&";
				pos = arguments[i].indexOf("=");
				if (pos!=-1)
					newparam+=arguments[i].substr(0,pos+1)+encodeURIComponent(arguments[i].substr(pos+1));
				else
					newparam+=encodeURIComponent(arguments[i]);
			}
	}

	if (xmlHttpSync!=null)
		xmlHttpSync=null;
		
	xmlHttpSync = GetHttpObject();
	
	xmlHttpSync.open(method,url,false);
	if (method.toUpperCase()=="POST") xmlHttpSync.setRequestHeader('Content-Type','application/x-www-form-urlencoded') 
	xmlHttpSync.send(newparam);
	var xmlDoc=xmlHttpSync.responseXML;
	
	return xmlDoc; 
}
/*
function CallText(method,url,param)
{
	newparam = "";

	if (typeof gl_debug_function=="function") {gl_debug_function("--> ");}
	
	var start = new Date();
	
	if (arguments.length>2)
	{
			for (i=2;i<arguments.length;i++)
			{
				if (typeof gl_debug_function=="function") {gl_debug_function(" ; "+arguments[i]);}
				if (i>2) newparam+="&";
				pos = arguments[i].indexOf("=");
				if (pos!=-1)
					newparam+=arguments[i].substr(0,pos+1)+encodeURIComponent(arguments[i].substr(pos+1));
				else
					newparam+=encodeURIComponent(arguments[i]);
			}
	}
	
	if (typeof gl_debug_function=="function") {gl_debug_function("\r\n");}
	
	if (xmlHttpSync!=null)
		xmlHttpSync=null;
		
	xmlHttpSync = GetHttpObject();
	xmlHttpSync.open(method,url,false);
	if (method.toUpperCase()=="POST") xmlHttpSync.setRequestHeader('Content-Type','application/x-www-form-urlencoded') 
	xmlHttpSync.send(newparam);
	var xmlDoc=xmlHttpSync.responseText;

	if (typeof gl_debug_function=="function") 
	{
		var end = new Date();
		var result = new Date();
		result.setTime(end.getTime() - start.getTime());
		gl_debug_function("<--("+result.getMilliseconds()+"ms) "+xmlDoc + "\r\n");
	}

	return xmlDoc; 
}
*/

function CallText(method,url,param)
{
	newparam = "";

	if (typeof gl_debug_function=="function") {gl_debug_function("--> ");}
	
	var start = new Date();
	
	if (arguments.length>2)
	{
		for (i=2;i<arguments.length;i++)
		{
			if (typeof gl_debug_function=="function") {gl_debug_function(" ; "+arguments[i]);}
			if (i>2) newparam+="&";
			pos = arguments[i].indexOf("=");
			if (pos!=-1)
				newparam+=arguments[i].substr(0,pos+1)+encodeURIComponent(arguments[i].substr(pos+1));
			else
				newparam+=encodeURIComponent(arguments[i]);
		}
	}
	
	if (typeof gl_debug_function=="function") {gl_debug_function("\r\n");}
	
	if (xmlHttpSync!=null)
		xmlHttpSync=null;
		
	xmlHttpSync = GetHttpObject();
	xmlHttpSync.open(method,url,false);
	if (method.toUpperCase()=="POST") xmlHttpSync.setRequestHeader('Content-Type','application/x-www-form-urlencoded') 
	xmlHttpSync.send(newparam);
	var xmlDoc=xmlHttpSync.responseText;

	if (typeof gl_debug_function=="function") 
	{
		var end = new Date();
		var result = new Date();
		result.setTime(end.getTime() - start.getTime());
		gl_debug_function("<--("+result.getMilliseconds()+"ms) "+xmlDoc + "\r\n");
	}

	return xmlDoc; 
}


function AbortCall()
{
	window.clearTimeout(TimerCallBackAsynchronous);
	if (xmlHttpAsync!=null)
	{
		xmlHttpAsync.onreadystatechange = function () {};
		xmlHttpAsync.abort();
		xmlHttpAsync = null;
	}
}

function CallAsynchronousCallBack()
{
	if (xmlHttpAsync.readyState==4)
	{
		window.clearTimeout(TimerCallBackAsynchronous);
		var xmlDoc=xmlHttpAsync.responseXML;
		CallBackFunction(xmlDoc);
	}
}

function CallAsynchronous(xcallback,timeout,method,url,param)
{
	newparam = "";
	
	if (arguments.length>3)
	{
			for (i=3;i<arguments.length;i++)
			{
				if (i>3) newparam+="&";
				pos = arguments[i].indexOf("=");
				if (pos!=-1)
					newparam+=arguments[i].substr(0,pos+1)+encodeURIComponent(arguments[i].substr(pos+1));
				else
					newparam+=encodeURIComponent(arguments[i]);
			}
	}

	if (xmlHttpAsync!=null) AbortCall();
	
	xmlHttpAsync = GetHttpObject();
	
	xmlHttpAsync.open(method,url,true);
	if (method.toUpperCase()=="POST") xmlHttpAsync.setRequestHeader('Content-Type','application/x-www-form-urlencoded') 
	CallBackFunction=xcallback;
	window.clearTimeout(TimerCallBackAsynchronous);
	TimerCallBackAsynchronous = window.setTimeout(function(){AbortCall();CallBackFunction();},timeout);
	xmlHttpAsync.onreadystatechange = CallAsynchronousCallBack;
	xmlHttpAsync.send(newparam);
}

function CallAsynchronousCallBackText()
{
	if (xmlHttpAsync.readyState==4)
	{
		window.clearTimeout(TimerCallBackAsynchronous);
		var xmlDoc=xmlHttpAsync.responseText;
		CallBackFunction(xmlDoc);
	}
}

function CallAsynchronousText(xcallback,timeout,method,url,param)
{
	newparam = "";
	
	if (arguments.length>3)
	{
			for (i=3;i<arguments.length;i++)
			{
				if (i>3) newparam+="&";
				pos = arguments[i].indexOf("=");
				if (pos!=-1)
					newparam+=arguments[i].substr(0,pos+1)+encodeURIComponent(arguments[i].substr(pos+1));
				else
					newparam+=encodeURIComponent(arguments[i]);
			}
	}

	if (xmlHttpAsync!=null) AbortCall();
	
	xmlHttpAsync = GetHttpObject();
	
	xmlHttpAsync.open(method,url,true);
	if (method.toUpperCase()=="POST") xmlHttpAsync.setRequestHeader('Content-Type','application/x-www-form-urlencoded') 
	CallBackFunction=xcallback;
	window.clearTimeout(TimerCallBackAsynchronous);
	TimerCallBackAsynchronous = window.setTimeout(function(){AbortCall();CallBackFunction();},timeout);
	xmlHttpAsync.onreadystatechange = CallAsynchronousCallBackText;
	xmlHttpAsync.send(newparam);
	
}

function ResetSelect(selectname)
{
	document.getElementById(selectname).options.length=0;
}

function AddToSelect(selectname,id,value)
{	var so=new Option(value,id);
	document.getElementById(selectname).options[document.getElementById(selectname).options.length] = so;
	return so;
}

function AddToSelectFromArray(selectname,array,ignore_records)
{
	var first=true;
	if (ignore_records==null) ignore_records=0;
	for (i=ignore_records;i<array.length;i++)
	{
		var t=AddToSelect(selectname,array[i][0],array[i][1]);
		if(first){
			first=false;
			t.selected='true';
			document.getElementById(selectname).value=array[i][0];
		}
	}
	document.getElementById(selectname).selectedIndex=0;
}

function SetElementValue(tablename,value,row,column)
{
	var xyz = document.getElementById(tablename);
	
	switch (xyz.nodeName.toUpperCase())
	{
		case "TABLE":
			xyz.rows[row].cells[column].innerHTML=value;
			break;
		default:
			xyz.value=value;
			break;
	
	}
}

function SetElementAttribute(tablename,attributename,attributevalue,row,column,ignorerows)
{
	var x;
	if (ignorerows==null) ignorerows=0;

	if (tablename.nodeName==null)
		x=document.getElementById(tablename);
	else
		x=tablename;

	if (attributename.toUpperCase()=="CLASS") attributename="className";
	if (row!=-1) ignorerows=row;

	if (x==null) return;
	
	var tmp_nodename = x.nodeName.toUpperCase();
	if (tmp_nodename=="TABLE"&&row==null&&column==null) tmp_nodename="";	
	
	switch (tmp_nodename)
	{
		case "TABLE": 
			for (a=ignorerows;a<x.rows.length;a++)
			{
				if (column==-1)
				{
					x.rows[a].setAttribute(attributename,attributevalue);
					try
					{
						if (attributename.toUpperCase()=="STYLE")
							x.rows[a].style.setAttribute("cssText",attributevalue);
						else
							x.rows[a][attributename]=attributevalue;
					}
					catch (Ex) { }
					
				}
				else
				{
					x.rows[a].cells[column].setAttribute(attributename,attributevalue);
					try
					{
						if (attributename.toUpperCase()=="STYLE")
							x.rows[a].cells[column].style.setAttribute("cssText",attributevalue);
						else
						{
							x.rows[a].cells[column][attributename]=attributevalue;
						}
					}
					catch (Ex) { }
				}
				if (row!=-1) break;
			}
			break;
		default:

			try
			{
				if (attributevalue==null)
					eval("if (typeof x."+attributename+"!='undefined'&&typeof x."+attributename+"!='object'&&typeof x."+attributename+"!='function') x."+attributename+" = null;");			
				else
					eval("if (typeof x."+attributename+"!='undefined'&&typeof x."+attributename+"!='object'&&typeof x."+attributename+"!='function') x."+attributename+" = '"+attributevalue+"';");			
			}
			catch (Ex) {}

			x.setAttribute(attributename,attributevalue);
			try
			{
			if (attributename.toUpperCase()=="STYLE")
				x.style.setAttribute("cssText",attributevalue);
			else
				x[attributename]=attributevalue;
			}
			catch (Ex) { }
			break;
	}
	
}

function SetStyleAttribute(tablename,attributename,attributevalue,row,column,ignorerows)
{
	if (ignorerows==null) ignorerows=0;

	if (tablename.nodeName==null)
		x = document.getElementById(tablename);
	else
		x=tablename;

	if (row!=-1) ignorerows=row;

	var tmp_nodename = x.nodeName.toUpperCase();
	if (tmp_nodename=="TABLE"&&row==null&&column==null) tmp_nodename="";	
	
	switch (tmp_nodename)
	{
		case "TABLE": 
			for (a=ignorerows;a<x.rows.length;a++)
			{
				if (column==-1)
				{
					try
					{
						x.rows[a].style.setProperty(attributename,attributevalue,null);
					}
					catch(Ex){}

					try
					{
						x.rows[a].style.setAttribute(attributename,attributevalue);
					}
					catch(Ex){}
				}
				else
				{
					try
					{
					
						x.rows[a].cells[column].style.setProperty(attributename,attributevalue,null);					
					}
					catch(Ex){}

					try
					{
						x.rows[a].cells[column].style.setAttribute(attributename,attributevalue);
					}
					catch(Ex){}
				}
				if (row!=-1) break;
			}
			break;
		default:
			try
			{
				if (x.style.setProperty!=null)
					x.style.setProperty(attributename,attributevalue,null);					
				if (x.style.setAttribute!=null)			
					x.style.setAttribute(attributename,attributevalue);
			}
			catch(Ex){}

			break;
	}
}

function SetTableFromArray(tablename,array)
{
	if (tablename.nodeName==null)
		tbl = document.getElementById(tablename);
	else
		tbl = tablename;
	
	for (i=tbl.childNodes.length-1;i>=0;i--)
	{
		var achild = tbl.childNodes[i];
		
		for (i2=achild.childNodes.length-1;i2>=0;i2--)
		{
			achild.removeChild(achild.childNodes[i2]);
		}
		tbl.removeChild(achild);
	}
	
	var tr = document.createElement("TR");
	var tbody=document.createElement("TBODY");
	var thead=tbl.createTHead();
	var tfoot=tbl.createTFoot();
	if (array.length>0)
	{
		var n=array[0].length;
		for (var j = 0; j < n; j++)
		{
			if (array[0][j]!="")
			{
				var td = document.createElement("TH");
				td.appendChild(document.createTextNode(array[0][j]));
				tr.appendChild(td);
			}
		}
		thead.appendChild(tr);
		m = array.length;
		for(var i = 1; i < m; i++)
		{
			var tr = document.createElement("TR");
			for(var j = 0; j < n ;j++)
			{
				if (array[0][j]!="")
				{
					var td=document.createElement("TD");
					if (array[i][j]==""||array[i][j]==null)
						td.innerHTML = "&nbsp;";
					else
						td.innerHTML = array[i][j];
					tr.appendChild(td);
				}
			}
			tbody.appendChild(tr);	
		}
	}
	tbl.appendChild(thead);
	tbl.appendChild(tbody);
	tbl.appendChild(tfoot);
}

function SortArray(input,field,header,numeric,descending)
{

	if (header==null) header=0;
	if (field==null) field=0;
	if (numeric==null) numeric=0;

	var tmp = new Array();
	
	if (header>0) tmp = input.splice(0,header);
	
	if (numeric)
	{
		input.sort(
						function (a, b)
						{
							if (isNaN(a[field])&&isNaN(b[field])) 
							{
								var x = a[field].toLowerCase();
								var y = b[field].toLowerCase();
								return ((x > y) ? 1 : ((x < y) ? -1 : 0));
							}
							else
							{
								var x = parseFloat(0);
								var y = parseFloat(0);
								if (!isNaN(a[field])) x=parseFloat(a[field]);
								if (!isNaN(b[field])) y=parseFloat(b[field]);
								return ((x > y) ? 1 : ((x < y) ? -1 : 0));
							}
						}
					);
	}		
	else
	{
		input.sort(
						function (a, b)
						{
							var x = a[field].toLowerCase();
							var y = b[field].toLowerCase();
							return ((x > y) ? 1 : ((x < y) ? -1 : 0));
						}
					);
	}
	
	if (descending==1) input.reverse();
	
	for (var x=tmp.length-1;x>-1;x--) input.unshift(tmp[x]);
}

function StringToArray(input)
{
	var pos=0;
	var pos_escape=0;
	var pos_record=0;
	var pos_field =0;
	var field_value = "";
	
	var RecordsArray=new Array();
	var FieldsArray=new Array();
	
	if(!(input && typeof input === 'string')) return RecordsArray;
	
	while(1)
	{
		pos_record = input.indexOf(";",pos);
		pos_escape = input.indexOf("\\",pos);
		pos_field  = input.indexOf("|",pos);

		if (pos_escape>-1 && (pos_escape<pos_field||pos_field==-1) && (pos_escape<pos_record||pos_record==-1))
		{
			field_value += input.substr(pos,pos_escape-pos)+input.substr(pos_escape+1,1);
			pos = pos_escape + 2;
		}
		else
		{
			if ((pos_field<pos_record||pos_record==-1)&&pos_field>-1)
			{
				field_value += input.substr(pos,pos_field-pos);
				pos = pos_field + 1;
				FieldsArray.push(field_value);
				field_value = "";
			}
			else
			{
				var stop=0;
				if (pos_record==-1) {pos_record=input.length;stop=1;}
				field_value += input.substr(pos,pos_record-pos);
				pos = pos_record + 1;
				FieldsArray.push(field_value);
				RecordsArray.push(FieldsArray);
				FieldsArray=new Array();
				field_value = "";
				if (stop) break;
			}
		}
	}
	
	return RecordsArray;
}

function SetObjectBlinking(objectname,style1,style2)
{
	if ((typeof this.global_blinking_timer).toUpperCase() == 'UNDEFINED' ) this.global_blinking_timer = null;	
	if ((typeof this.global_blinking_object).toUpperCase() == 'UNDEFINED' ) this.global_blinking_object = new Array();	

	if (objectname!=null)
	{
		if (style1==null)
			global_blinking_object[objectname]=null;
		else
			global_blinking_object[objectname]=new Array(style1,style2,0);
	}
	
	var count=0;

	for (var obj in global_blinking_object)
	{
		var blinking_obj = global_blinking_object[obj];
		if (blinking_obj==null)
		{
			delete global_blinking_object[obj];
			continue;
		}
		else
			count++;
		if (blinking_obj[2])
		{
			blinking_obj[2]=0;
			SetElementAttribute(obj,"class",blinking_obj[0]);
		}
		else
		{
			blinking_obj[2]=1;
			SetElementAttribute(obj,"class",blinking_obj[1]);
		}
	}
	
	window.clearTimeout(global_blinking_timer);
	if (count)
		global_blinking_timer = window.setTimeout(SetObjectBlinking,350);
}

function ParseXmlString(text)
{
	try
	{
		xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async="false";
		xmlDoc.loadXML(text);
		return xmlDoc;
	}
	catch(e)
	{
		try
		{
			parser=new DOMParser();
			xmlDoc=parser.parseFromString(text,"text/xml");
			return xmlDoc;
		}
		catch(e) {return null;}
	}
}
utf8_2_ascii = [ {
	"utf8" : "\u0001",
	"ascii" : "\u0001"
}, {
	"utf8" : "\u0002",
	"ascii" : "\u0002"
}, {
	"utf8" : "\u0003",
	"ascii" : "\u0003"
}, {
	"utf8" : "\u0004",
	"ascii" : "\u0004"
}, {
	"utf8" : "\u0005",
	"ascii" : "\u0005"
}, {
	"utf8" : "\u0006",
	"ascii" : "\u0006"
}, {
	"utf8" : "\u0007",
	"ascii" : "\u0007"
}, {
	"utf8" : "\b",
	"ascii" : "\b"
}, {
	"utf8" : "\t",
	"ascii" : "\t"
}, {
	"utf8" : "\n",
	"ascii" : "\n"
}, {
	"utf8" : "\u000b",
	"ascii" : "\u000b"
}, {
	"utf8" : "\f",
	"ascii" : "\f"
}, {
	"utf8" : "\r",
	"ascii" : "\r"
}, {
	"utf8" : "\u000e",
	"ascii" : "\u000e"
}, {
	"utf8" : "\u000f",
	"ascii" : "\u000f"
}, {
	"utf8" : "\u0010",
	"ascii" : "\u0010"
}, {
	"utf8" : "\u0011",
	"ascii" : "\u0011"
}, {
	"utf8" : "\u0012",
	"ascii" : "\u0012"
}, {
	"utf8" : "\u0013",
	"ascii" : "\u0013"
}, {
	"utf8" : "\u0014",
	"ascii" : "\u0014"
}, {
	"utf8" : "\u0015",
	"ascii" : "\u0015"
}, {
	"utf8" : "\u0016",
	"ascii" : "\u0016"
}, {
	"utf8" : "\u0017",
	"ascii" : "\u0017"
}, {
	"utf8" : "\u0018",
	"ascii" : "\u0018"
}, {
	"utf8" : "\u0019",
	"ascii" : "\u0019"
}, {
	"utf8" : "\u001a",
	"ascii" : "\u001a"
}, {
	"utf8" : "\u001b",
	"ascii" : "\u001b"
}, {
	"utf8" : "\u001c",
	"ascii" : "\u001c"
}, {
	"utf8" : "\u001d",
	"ascii" : "\u001d"
}, {
	"utf8" : "\u001e",
	"ascii" : "\u001e"
}, {
	"utf8" : "\u001f",
	"ascii" : "\u001f"
/*}, {
	"utf8" : " ",
	"ascii" : " "
}, {
	"utf8" : "!",
	"ascii" : "!"
}, {
	"utf8" : "\"",
	"ascii" : "\""
}, {
	"utf8" : "#",
	"ascii" : "#"
}, {
	"utf8" : "$",
	"ascii" : "$"
}, {
	"utf8" : "%",
	"ascii" : "%"
}, {
	"utf8" : "&",
	"ascii" : "&"
}, {
	"utf8" : "'",
	"ascii" : "'"
}, {
	"utf8" : "(",
	"ascii" : "("
}, {
	"utf8" : ")",
	"ascii" : ")"
}, {
	"utf8" : "*",
	"ascii" : "*"
}, {
	"utf8" : "+",
	"ascii" : "+"
}, {
	"utf8" : ",",
	"ascii" : ","
}, {
	"utf8" : "-",
	"ascii" : "-"
}, {
	"utf8" : ".",
	"ascii" : "."
}, {
	"utf8" : "/",
	"ascii" : "/"
}, {
	"utf8" : "0",
	"ascii" : "0"
}, {
	"utf8" : "1",
	"ascii" : "1"
}, {
	"utf8" : "2",
	"ascii" : "2"
}, {
	"utf8" : "3",
	"ascii" : "3"
}, {
	"utf8" : "4",
	"ascii" : "4"
}, {
	"utf8" : "5",
	"ascii" : "5"
}, {
	"utf8" : "6",
	"ascii" : "6"
}, {
	"utf8" : "7",
	"ascii" : "7"
}, {
	"utf8" : "8",
	"ascii" : "8"
}, {
	"utf8" : "9",
	"ascii" : "9"
}, {
	"utf8" : ":",
	"ascii" : ":"
}, {
	"utf8" : ";",
	"ascii" : ";"
}, {
	"utf8" : "<",
	"ascii" : "<"
}, {
	"utf8" : "=",
	"ascii" : "="
}, {
	"utf8" : ">",
	"ascii" : ">"
}, {
	"utf8" : "?",
	"ascii" : "?"
}, {
	"utf8" : "@",
	"ascii" : "@"
}, {
	"utf8" : "A",
	"ascii" : "A"
}, {
	"utf8" : "B",
	"ascii" : "B"
}, {
	"utf8" : "C",
	"ascii" : "C"
}, {
	"utf8" : "D",
	"ascii" : "D"
}, {
	"utf8" : "E",
	"ascii" : "E"
}, {
	"utf8" : "F",
	"ascii" : "F"
}, {
	"utf8" : "G",
	"ascii" : "G"
}, {
	"utf8" : "H",
	"ascii" : "H"
}, {
	"utf8" : "I",
	"ascii" : "I"
}, {
	"utf8" : "J",
	"ascii" : "J"
}, {
	"utf8" : "K",
	"ascii" : "K"
}, {
	"utf8" : "L",
	"ascii" : "L"
}, {
	"utf8" : "M",
	"ascii" : "M"
}, {
	"utf8" : "N",
	"ascii" : "N"
}, {
	"utf8" : "O",
	"ascii" : "O"
}, {
	"utf8" : "P",
	"ascii" : "P"
}, {
	"utf8" : "Q",
	"ascii" : "Q"
}, {
	"utf8" : "R",
	"ascii" : "R"
}, {
	"utf8" : "S",
	"ascii" : "S"
}, {
	"utf8" : "T",
	"ascii" : "T"
}, {
	"utf8" : "U",
	"ascii" : "U"
}, {
	"utf8" : "V",
	"ascii" : "V"
}, {
	"utf8" : "W",
	"ascii" : "W"
}, {
	"utf8" : "X",
	"ascii" : "X"
}, {
	"utf8" : "Y",
	"ascii" : "Y"
}, {
	"utf8" : "Z",
	"ascii" : "Z"
}, {
	"utf8" : "[",
	"ascii" : "["
}, {
	"utf8" : "\\",
	"ascii" : "\\"
}, {
	"utf8" : "]",
	"ascii" : "]"
}, {
	"utf8" : "^",
	"ascii" : "^"
}, {
	"utf8" : "_",
	"ascii" : "_"
}, {
	"utf8" : "`",
	"ascii" : "`"
}, {
	"utf8" : "a",
	"ascii" : "a"
}, {
	"utf8" : "b",
	"ascii" : "b"
}, {
	"utf8" : "c",
	"ascii" : "c"
}, {
	"utf8" : "d",
	"ascii" : "d"
}, {
	"utf8" : "e",
	"ascii" : "e"
}, {
	"utf8" : "f",
	"ascii" : "f"
}, {
	"utf8" : "g",
	"ascii" : "g"
}, {
	"utf8" : "h",
	"ascii" : "h"
}, {
	"utf8" : "i",
	"ascii" : "i"
}, {
	"utf8" : "j",
	"ascii" : "j"
}, {
	"utf8" : "k",
	"ascii" : "k"
}, {
	"utf8" : "l",
	"ascii" : "l"
}, {
	"utf8" : "m",
	"ascii" : "m"
}, {
	"utf8" : "n",
	"ascii" : "n"
}, {
	"utf8" : "o",
	"ascii" : "o"
}, {
	"utf8" : "p",
	"ascii" : "p"
}, {
	"utf8" : "q",
	"ascii" : "q"
}, {
	"utf8" : "r",
	"ascii" : "r"
}, {
	"utf8" : "s",
	"ascii" : "s"
}, {
	"utf8" : "t",
	"ascii" : "t"
}, {
	"utf8" : "u",
	"ascii" : "u"
}, {
	"utf8" : "v",
	"ascii" : "v"
}, {
	"utf8" : "w",
	"ascii" : "w"
}, {
	"utf8" : "x",
	"ascii" : "x"
}, {
	"utf8" : "y",
	"ascii" : "y"
}, {
	"utf8" : "z",
	"ascii" : "z"
}, {
	"utf8" : "{",
	"ascii" : "{"
}, {
	"utf8" : "|",
	"ascii" : "|"
}, {
	"utf8" : "}",
	"ascii" : "}"
}, {
	"utf8" : "~",
	"ascii" : "~"
}, {
	"utf8" : "",
	"ascii" : ""*/
}, {
	"utf8" : "� ",
	"ascii" : " "
}, {
	"utf8" : "¡",
	"ascii" : "�"
}, {
	"utf8" : "¢",
	"ascii" : "�"
}, {
	"utf8" : "£",
	"ascii" : "�"
}, {
	"utf8" : "¤",
	"ascii" : "�"
}, {
	"utf8" : "¥",
	"ascii" : "�"
}, {
	"utf8" : "¦",
	"ascii" : "�"
}, {
	"utf8" : "§",
	"ascii" : "�"
}, {
	"utf8" : "¨",
	"ascii" : "�"
}, {
	"utf8" : "©",
	"ascii" : "�"
}, {
	"utf8" : "ª",
	"ascii" : "�"
}, {
	"utf8" : "«",
	"ascii" : "�"
}, {
	"utf8" : "¬",
	"ascii" : "�"
}, {
	"utf8" : "­",
	"ascii" : "�"
}, {
	"utf8" : "®",
	"ascii" : "�"
}, {
	"utf8" : "¯",
	"ascii" : "�"
}, {
	"utf8" : "°",
	"ascii" : "�"
}, {
	"utf8" : "±",
	"ascii" : "�"
}, {
	"utf8" : "²",
	"ascii" : "�"
}, {
	"utf8" : "³",
	"ascii" : "�"
}, {
	"utf8" : "´",
	"ascii" : "�"
}, {
	"utf8" : "µ",
	"ascii" : "�"
}, {
	"utf8" : "¶",
	"ascii" : "�"
}, {
	"utf8" : "·",
	"ascii" : "�"
}, {
	"utf8" : "¸",
	"ascii" : "�"
}, {
	"utf8" : "¹",
	"ascii" : "�"
}, {
	"utf8" : "º",
	"ascii" : "�"
}, {
	"utf8" : "»",
	"ascii" : "�"
}, {
	"utf8" : "¼",
	"ascii" : "�"
}, {
	"utf8" : "½",
	"ascii" : "�"
}, {
	"utf8" : "¾",
	"ascii" : "�"
}, {
	"utf8" : "¿",
	"ascii" : "�"
}, {
	"utf8" : "á",
	"ascii" : "�"
}, {
	"utf8" : "â",
	"ascii" : "�"
}, {
	"utf8" : "ã",
	"ascii" : "�"
}, {
	"utf8" : "ä",
	"ascii" : "�"
}, {
	"utf8" : "å",
	"ascii" : "�"
}, {
	"utf8" : "æ",
	"ascii" : "�"
}, {
	"utf8" : "ç",
	"ascii" : "�"
}, {
	"utf8" : "è",
	"ascii" : "�"
}, {
	"utf8" : "é",
	"ascii" : "�"
}, {
	"utf8" : "ê",
	"ascii" : "�"
}, {
	"utf8" : "ë",
	"ascii" : "�"
}, {
	"utf8" : "ì",
	"ascii" : "�"
}, {
	"utf8" : "í",
	"ascii" : "�"
}, {
	"utf8" : "î",
	"ascii" : "�"
}, {
	"utf8" : "ï",
	"ascii" : "�"
}, {
	"utf8" : "ð",
	"ascii" : "�"
}, {
	"utf8" : "ñ",
	"ascii" : "�"
}, {
	"utf8" : "ò",
	"ascii" : "�"
}, {
	"utf8" : "ó",
	"ascii" : "�"
}, {
	"utf8" : "ô",
	"ascii" : "�"
}, {
	"utf8" : "õ",
	"ascii" : "�"
}, {
	"utf8" : "ö",
	"ascii" : "�"
}, {
	"utf8" : "÷",
	"ascii" : "�"
}, {
	"utf8" : "ø",
	"ascii" : "�"
}, {
	"utf8" : "ù",
	"ascii" : "�"
}, {
	"utf8" : "ú",
	"ascii" : "�"
}, {
	"utf8" : "û",
	"ascii" : "�"
}, {
	"utf8" : "ü",
	"ascii" : "�"
}, {
	"utf8" : "ý",
	"ascii" : "�"
}, {
	"utf8" : "þ",
	"ascii" : "�"
}, {
	"utf8" : "ÿ",
	"ascii" : "�"
} ]
function convert_utf8_to_ascii(string){
	return string;
	convert=string;
	for(var i=utf8_2_ascii.length-1;i>=0;i--){
		convert=convert.replace(utf8_2_ascii[i].utf8,utf8_2_ascii[i].ascii)
	}
	return convert;
}
function convert_ascii_to_utf8(string){
	return string;
	convert=string;
	for(var i=utf8_2_ascii.length-1;i>=0;i--){
		convert=convert.replace(utf8_2_ascii[i].utf8,utf8_2_ascii[i].ascii)
	}
	return convert;
}
function encode_control_chars($string,$map){
	var $i;
	for($i in $map){
		$string=$string.replace(new RegExp($i,'gi'),$map[$i]);
	}
	return $string;
}
function decode_control_chars($string,$map){
	var $i;
	for($i in $map){
		$string=$string.replace(new RegExp($map[$i],'gi'),$i);
	}
	return $string;
}