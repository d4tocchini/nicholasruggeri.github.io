!function(){function t(){$(".header h1");c=window.innerWidth,h=window.innerHeight,u={x:c/2,y:h/2},l=document.getElementById("header-canvas"),l.width=c,l.height=h,d=l.getContext("2d"),u.x=$(window).height()/3,u.y=$(window).height()/2,m=[];for(var t=0;c>t;t+=c/30)for(var o=0;h>o;o+=h/20){var i=t+Math.random()*c/20,e=o+Math.random()*h/20,n={x:i,originX:i,y:e,originY:e};m.push(n)}for(var a=2,g=0;g<m.length;g++){for(var p=[],_=m[g],f=0;f<m.length;f++){var w=m[f];if(_!=w){for(var v=!1,y=0;a>y;y++)v||void 0==p[y]&&(p[y]=w,v=!0);for(var y=0;a>y;y++)v||s(_,w)<s(_,p[y])&&(p[y]=w,v=!0)}}_.closest=p}for(var g in m){var I=new r(m[g],1+Math.random(),"rgba(255,255,255,0.1)");m[g].circle=I}}function o(){window.addEventListener("scroll",i)}function i(){g=document.body.scrollTop>h?!1:!0}function e(){n();for(var t in m)a(m[t])}function n(){if(g){d.clearRect(0,0,c,h);for(var t in m)Math.abs(s(u,m[t]))<4e4?(m[t].active=.3,m[t].circle.active=.6):Math.abs(s(u,m[t]))<2e5?(m[t].active=.1,m[t].circle.active=.3):Math.abs(s(u,m[t]))<4e5?(m[t].active=.02,m[t].circle.active=.1):(m[t].active=0,m[t].circle.active=0),m[t].circle.draw()}requestAnimationFrame(n)}function a(t){TweenLite.to(t,1+1*Math.random(),{x:t.originX-50+100*Math.random(),y:t.originY-50+100*Math.random(),ease:Power0.easeNone,onComplete:function(){a(t)}})}function r(t,o,i){var e=this;!function(){e.pos=t||null,e.radius=o||null,e.color=i||null}(),this.draw=function(){e.active&&(d.beginPath(),d.arc(e.pos.x,e.pos.y,e.radius,0,2*Math.PI,!1),d.fillStyle="rgba(255,255,255,"+e.active+")",d.fill())}}function s(t,o){return Math.pow(t.x-o.x,2)+Math.pow(t.y-o.y,2)}var c,h,l,d,m,u,g=!0;$(window).width()>768&&(t(),e(),o())}(),function(t){var o=function(){function t(){var t=$(".section-header");$(".site").removeClass("spinner"),setTimeout(function(){TweenLite.to(t,1,{x:0,ease:Expo.easeInOut}),TweenLite.to($(".header span"),.5,{x:0,delay:.3,ease:Expo.easeIn,onComplete:function(){$("h1,h2").css("color","rgba(255,255,255,1)"),TweenLite.to($(".header span"),1,{x:"105%",ease:Expo.easeOut})}})},0)}return{init:t}}();$(document).ready(function(){$(this).scrollTop(0)}),$(window).on("load",o.init)}(window),function(){for(var t=0,o=["ms","moz","webkit","o"],i=0;i<o.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[o[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[o[i]+"CancelAnimationFrame"]||window[o[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(o,i){var e=(new Date).getTime(),n=Math.max(0,16-(e-t)),a=window.setTimeout(function(){o(e+n)},n);return t=e+n,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),+function(t){"use strict";function o(){var t=document.createElement("bootstrap"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in o)if(void 0!==t.style[i])return{end:o[i]};return!1}t.fn.emulateTransitionEnd=function(o){var i=!1,e=this;t(this).one("bsTransitionEnd",function(){i=!0});var n=function(){i||t(e).trigger(t.support.transition.end)};return setTimeout(n,o),this},t(function(){t.support.transition=o(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(o){return t(o.target).is(this)?o.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(t){"use strict";function o(){this._activeZoom=this._initialScrollPosition=this._initialTouchPosition=this._touchMoveListener=null,this._$document=t(document),this._$window=t(window),this._$body=t(document.body),this._boundClick=t.proxy(this._clickHandler,this)}function i(o){this._fullHeight=this._fullWidth=this._overlay=this._targetImageWrap=null,this._targetImage=o,this._$body=t(document.body)}o.prototype.listen=function(){this._$body.on("click",'[data-action="zoom"]',t.proxy(this._zoom,this))},o.prototype._zoom=function(o){var e=o.target;if(e&&"IMG"==e.tagName&&!this._$body.hasClass("zoom-overlay-open"))return o.metaKey||o.ctrlKey?o.target.getAttribute("data-original")||window.open(o.target.src,"_blank"):void(e.width>=window.innerWidth-i.OFFSET||(this._activeZoomClose(!0),this._activeZoom=new i(e),this._activeZoom.zoomImage(),this._$window.on("scroll.zoom",t.proxy(this._scrollHandler,this)),this._$document.on("keyup.zoom",t.proxy(this._keyHandler,this)),this._$document.on("touchstart.zoom",t.proxy(this._touchStart,this)),document.addEventListener("click",this._boundClick,!0),o.stopPropagation()))},o.prototype._activeZoomClose=function(t){this._activeZoom&&(t?this._activeZoom.dispose():this._activeZoom.close(),this._$window.off(".zoom"),this._$document.off(".zoom"),document.removeEventListener("click",this._boundClick,!0),this._activeZoom=null)},o.prototype._scrollHandler=function(t){null===this._initialScrollPosition&&(this._initialScrollPosition=window.scrollY);var o=this._initialScrollPosition-window.scrollY;Math.abs(o)>=40&&this._activeZoomClose()},o.prototype._keyHandler=function(t){27==t.keyCode&&this._activeZoomClose()},o.prototype._clickHandler=function(t){t.stopPropagation(),t.preventDefault(),this._activeZoomClose()},o.prototype._touchStart=function(o){this._initialTouchPosition=o.touches[0].pageY,t(o.target).on("touchmove.zoom",t.proxy(this._touchMove,this))},o.prototype._touchMove=function(o){Math.abs(o.touches[0].pageY-this._initialTouchPosition)>10&&(this._activeZoomClose(),t(o.target).off("touchmove.zoom"))},i.OFFSET=80,i._MAX_WIDTH=2560,i._MAX_HEIGHT=4096,i.prototype.zoomImage=function(){var o=document.createElement("img");o.onload=t.proxy(function(){this._fullHeight=Number(o.height),this._fullWidth=Number(o.width),this._zoomOriginal()},this),o.src=this._targetImage.src},i.prototype._zoomOriginal=function(){this._targetImageWrap=document.createElement("div"),this._targetImageWrap.className="zoom-img-wrap",this._targetImage.parentNode.insertBefore(this._targetImageWrap,this._targetImage),this._targetImageWrap.appendChild(this._targetImage),t(this._targetImage).addClass("zoom-img").attr("data-action","zoom-out"),this._overlay=document.createElement("div"),this._overlay.className="zoom-overlay",document.body.appendChild(this._overlay),this._calculateZoom(),this._triggerAnimation()},i.prototype._calculateZoom=function(){this._targetImage.offsetWidth;var t=this._fullWidth,o=this._fullHeight,e=(window.scrollY,t/this._targetImage.width),n=window.innerHeight-i.OFFSET,a=window.innerWidth-i.OFFSET,r=t/o,s=a/n;this._imgScaleFactor=a>t&&n>o?e:s>r?n/o*e:a/t*e},i.prototype._triggerAnimation=function(){this._targetImage.offsetWidth;var o=t(this._targetImage).offset(),i=t(window).scrollTop(),e=i+window.innerHeight/2,n=window.innerWidth/2,a=o.top+this._targetImage.height/2,r=o.left+this._targetImage.width/2;this._translateY=e-a,this._translateX=n-r,t(this._targetImage).css("transform","scale("+this._imgScaleFactor+")"),t(this._targetImageWrap).css("transform","translate("+this._translateX+"px, "+this._translateY+"px) translateZ(0)"),this._$body.addClass("zoom-overlay-open")},i.prototype.close=function(){this._$body.removeClass("zoom-overlay-open").addClass("zoom-overlay-transitioning"),t(this._targetImage).css("transform",""),t(this._targetImageWrap).css("transform",""),t(this._targetImage).one(t.support.transition.end,t.proxy(this.dispose,this)).emulateTransitionEnd(300)},i.prototype.dispose=function(){this._targetImageWrap&&this._targetImageWrap.parentNode&&(t(this._targetImage).removeClass("zoom-img").attr("data-action","zoom"),this._targetImageWrap.parentNode.replaceChild(this._targetImage,this._targetImageWrap),this._overlay.parentNode.removeChild(this._overlay),this._$body.removeClass("zoom-overlay-transitioning"))},t(function(){(new o).listen()})}(jQuery);