!function(e,n){"use strict";var t=function(){function n(){s.each(function(n,t){new ScrollMagic.Scene({duration:e(window).height()/2}).setTween(e(t),{y:-Math.floor(100*Math.random())+1,opacity:0}).addTo(r)}),TweenLite.to(d,.5,{x:0,delay:.3,ease:Expo.easeIn,onComplete:function(){u.css({color:"rgba(0,0,0,1)"}),TweenLite.to(u.find("i"),.5,{y:"0%",ease:Expo.easeOut})}}),TweenLite.to(w,.5,{x:0,delay:1,ease:Expo.easeIn,onComplete:function(){l.css({color:"rgba(0,0,0,1)"}),TweenLite.to(l.find("i"),.5,{y:"0%",ease:Expo.easeOut}),TweenLite.to(".header__extra",1,{opacity:1,x:0})}})}function t(){f.each(function(n,t){new ScrollMagic.Scene({triggerElement:f[n],offset:-e(window).height()/3}).setTween(e(t).children(".animation-cover__mask"),.5,{x:0,ease:Expo.easeOut,onComplete:function(){TweenLite.to(e(t).children(".animation-cover__text"),.5,{y:"0%",ease:Expo.easeOut})}}).reverse(!1).addTo(r)})}function o(){new ScrollMagic.Scene({triggerElement:".list-projects"}).setTween(".name-section",.5,{y:"0%"}).addTo(r)}function i(){e(".content-image").each(function(n,t){new ScrollMagic.Scene({triggerElement:t,triggerHook:"onEnter",duration:4*e(window).height()}).setTween(t,.5,{y:"-50%"}).addTo(r)}),c.each(function(n,t){new ScrollMagic.Scene({triggerElement:c[n],duration:e(window).height()/2,offset:-e(window).height()/3}).setTween(e(t).children("div"),{scale:1}).on("end",function(n){"left"==e(t).data("position")?TweenLite.to(e(t),2,{x:"-100%",ease:Expo.easeOut}):TweenLite.to(e(t),2,{x:"100%",ease:Expo.easeOut})}).addTo(r)})}function a(){o(),i(),n(),t()}var r=new ScrollMagic.Controller,c=e(".project__content-cover"),s=e(".header i"),u=e(".header__title"),d=e(".header__title span"),l=e(".header__subtitle"),w=e(".header__subtitle span"),f=(e(".project"),e(".animation-cover"));return{init:a}}();n.ANIMATIONS=n.ANIMATIONS||t}(jQuery,window),function(e){var n=function(){function e(){ANIMATIONS.init(),PRELOADER.remove(),SHARER.init()}return{init:e}}();$(document).ready(function(){$(this).scrollTop(0)}),$(window).on("load",n.init)}(window),function(e){var n=function(){function e(){setTimeout(function(){n.addClass("is-load")},0)}var n=$("body");return{remove:e}}();e.PRELOADER=e.PRELOADER||n}(window),function(e,n){"use strict";var t=function(){function n(e,n,t){e&&(n=n?n:600,t=t?t:600,i={left:screen.width/2-n/2,top:screen.height/2-t/2},window.open(e,"Share","width="+n+",height="+t+",left="+i.left+",top="+i.top))}function t(e){n(e,470,640)}function o(){return r.length?void r.on("click",function(n){var o=e(this);a=o.attr("href"),n.preventDefault(),n.stopPropagation(),t(a)}):!1}var i,a,r=e(".messanger-share");return{init:o}}();n.SHARER=n.SHARER||t}(jQuery,window);