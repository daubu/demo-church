/* jquery.swfobject.license.txt */
(function(C){var E=document,B="object",D=window,A="";C.flashPlayerVersion=(function(){var H,F,K,J,M=false,L="ShockwaveFlash.ShockwaveFlash";if(!(H=navigator.plugins["Shockwave Flash"])){try{F=new ActiveXObject(L+".7")}catch(K){try{F=new ActiveXObject(L+".6");H=[6,0,21];F.AllowScriptAccess="always"}catch(J){if(H&&H[0]===6){M=true}}if(!M){try{F=new ActiveXObject(L)}catch(I){H="X 0,0,0"}}}if(!M&&F){try{H=F.GetVariable("$version")}catch(G){}}}else{H=H.description}H=H.match(/^[A-Za-z\s]*?(\d+)(\.|,)(\d+)(\s+r|,)(\d+)/);return[H[1]*1,H[3]*1,H[5]*1]}());C.flashExpressInstaller="expressInstall.swf";C.hasFlashPlayer=(C.flashPlayerVersion[0]!==0);C.hasFlashPlayerVersion=function(G){var F=C.flashPlayerVersion;G=(/string|number/.test(typeof G))?G.toString().split("."):G;G=[G.major||G[0]||F[0],G.minor||G[1]||F[1],G.release||G[2]||F[2]];return(C.hasFlashPlayer&&(G[0]>F[0]||(G[0]===F[0]&&(G[1]>F[1]||(G[1]===F[1]&&G[2]>=F[2])))))};C.flash=function(Q){if(!C.hasFlashPlayer){return false}var G=Q.swf||A,O=Q.params||{},I=E.createElement("body"),F,P,L,H,N,M,K,J;Q.height=Q.height||180;Q.width=Q.width||320;if(Q.hasVersion&&!C.hasFlashPlayerVersion(Q.hasVersion)){C.extend(Q,{id:"SWFObjectExprInst",height:Math.max(Q.height,137),width:Math.max(Q.width,214)});G=Q.expressInstaller||C.flashExpressInstaller;O={flashvars:{MMredirectURL:location.href,MMplayerType:(C.browser.msie&&C.browser.win)?"ActiveX":"PlugIn",MMdoctitle:E.title.slice(0,47)+" - Flash Player Installation"}}}if(typeof O===B){if(Q.flashvars){O.flashvars=Q.flashvars}if(Q.wmode){O.wmode=Q.wmode}}for(N in (M=["expressInstall","flashvars","hasVersion","params","swf","wmode"])){delete Q[M[N]]}F=[];for(N in Q){if(typeof Q[N]===B){P=[];for(M in Q[N]){P.push(M.replace(/([A-Z])/,"-$1").toLowerCase()+":"+Q[N][M]+";")}Q[N]=P.join(A)}F.push(N+'="'+Q[N]+'"')}Q=F.join(" ");if(typeof O===B){F=[];for(N in O){if(typeof O[N]===B){P=[];for(M in O[N]){if(typeof O[N][M]===B){L=[];for(K in O[N][M]){if(typeof O[N][M][K]===B){H=[];for(J in O[N][M][K]){H.push([J.replace(/([A-Z])/,"-$1").toLowerCase(),":",O[N][M][K][J],";"].join(A))}O[N][M][K]=H.join(A)}L.push([K,"{",O[N][M][K],"}"].join(A))}O[N][M]=L.join(A)}P.push([M,"=",D.escape(O[N][M])].join(A))}O[N]=P.join("&amp;")}F.push(['<PARAM NAME="',N,'" VALUE="',O[N],'">'].join(A))}O=F.join(A)}if(!(/style=/.test(Q))){Q+=' style="vertical-align:text-top;"'}if(!(/style=(.*?)vertical-align/.test(Q))){Q=Q.replace(/style="/,'style="vertical-align:text-top;')}if(C.browser.msie){Q+=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"';O='<PARAM NAME="movie" VALUE="'+G+'">'+O}else{Q+=' type="application/x-shockwave-flash" data="'+G+'"'}I.innerHTML=["<OBJECT ",Q,">",O,"</OBJECT>"].join(A);return C(I.firstChild)};C.fn.flash=function(G){if(!C.hasFlashPlayer){return this}var F=0,H;while((H=this.eq(F++))[0]){H.html(C.flash(C.extend({},G)));if(E.getElementById("SWFObjectExprInst")){F=this.length}}return this}}(jQuery));