/* Librery by Oscar Diaz, free purpose use */
/* soouselab@gmail.com */
/* soouse.com */
!function(c){"use strict";c.fn.bezierCanvas=function(o){var t=1<window.devicePixelRatio?2:1;null==navigator.userAgent.match(/iPad/i)&&null==navigator.userAgent.match(/iPhone/i)||(t=1.5);var v=[],k=[],f=c.extend({maxStyles:10,maxLines:100,strokeWidth:.5,lineSpacing:1,spacingVariation:0,colorBase:{r:100,g:100,b:100},colorVariation:{r:100,g:100,b:100},globalSpeed:300,globalAlpha:.5,delayVariation:.3,speedLinear:!1,coordinates:[],loop:!1,moveCenterX:0,moveCenterY:0,spacingMode:"add"},o),b=this[0],C=b.getContext("2d");b.style.height=c(window).height()+"px",b.style.width=c(window).width()+"px",b.width=c(window).width()*t,b.height=c(window).height()*t,C.save(),c(window).on("resize",function(){C.restore(),b.style.height=c(window).height()+"px",b.style.width=c(window).width()+"px",b.width=c(window).width()*t,b.height=c(window).height()*t,C.translate(b.width/2+f.moveCenterX,b.height/2+f.moveCenterY)}),C.translate(b.width/2+f.moveCenterX,b.height/2+f.moveCenterY);for(var e=0;e<f.maxStyles;e++)k.push({cR:Math.round(f.colorBase.r+Math.random()*f.colorVariation.g),cG:Math.round(f.colorBase.g+Math.random()*f.colorVariation.g),cB:Math.round(f.colorBase.b+Math.random()*f.colorVariation.g),line:f.strokeWidth*t}),v[e]=[];for(var i=0;i<f.maxLines;i++){var a=Math.random(),n=Math.floor(Math.random()*f.maxStyles);v[n].push({speed:f.speedLinear?.1+i/200:f.delayVariation*a+.1,pos:(i*f.lineSpacing+f.spacingVariation*a)*t})}if(0==f.coordinates.length){var r=.5-Math.random(),s=.5-Math.random(),d=0<r?Math.ceil(r):Math.floor(r),h=0<s?Math.ceil(s):Math.floor(s);f.coordinates.push({x1:d*b.width/2,y1:h*b.height/3,x2:Math.random()*b.width-b.width/2,y2:Math.random()*b.height-b.height/2,x3:Math.random()*b.width-b.width/2,y3:Math.random()*b.height-b.height/2,x4:-d*b.width/2,y4:-h*b.height/3,kx1:15,ky1:15*Math.random(),kx2:15,ky2:15})}var P={addPoints:function(){var o=f.coordinates[f.coordinates.length-1],t=.7-Math.random(),e=o.x4<0?-1:1,i=o.y4<0?-1:1,a=0<t?Math.ceil(t):Math.floor(t);f.coordinates.push({x1:o.x4,y1:o.y4,x2:o.x4+(o.x4-o.x3),y2:o.y4+(o.y4-o.y3),x3:Math.random()*b.width-b.width/2,y3:Math.random()*b.height-b.height/2,x4:-e*(b.width/4+Math.round(Math.random()-.2)*b.height/4),y4:-i*a*(b.height/4+Math.round(Math.random()-.2)*b.height/4),kx1:o.kx2,ky1:o.ky2,kx2:15-30*Math.random(),ky2:15-30*Math.random()})},segmentPoints:function(o,t,e,i,a,n,r,s,d,h,c,m){return{x1:o*o*o*a+(e*o*o+o*e*o+o*o*e)*r+(e*e*o+o*e*e+e*o*e)*d+e*e*e*c,x2:o*o*t*a+(e*o*t+o*e*t+o*o*i)*r+(e*e*t+o*e*i+e*o*i)*d+e*e*i*c,x3:o*t*t*a+(e*t*t+o*i*t+o*t*i)*r+(e*i*t+o*i*i+e*t*i)*d+e*i*i*c,x4:t*t*t*a+(i*t*t+t*i*t+t*t*i)*r+(i*i*t+t*i*i+i*t*i)*d+i*i*i*c,y1:o*o*o*n+(e*o*o+o*e*o+o*o*e)*s+(e*e*o+o*e*e+e*o*e)*h+e*e*e*m,y2:o*o*t*n+(e*o*t+o*e*t+o*o*i)*s+(e*e*t+o*e*i+e*o*i)*h+e*e*i*m,y3:o*t*t*n+(e*t*t+o*i*t+o*t*i)*s+(e*i*t+o*i*i+e*t*i)*h+e*i*i*m,y4:t*t*t*n+(i*t*t+t*i*t+t*t*i)*s+(i*i*t+t*i*i+i*t*i)*h+i*i*i*m}}},A=(new Date).getTime();return function o(){window.requestAnimationFrame(o,this);var t=(new Date).getTime(),e=t-(A||t);C.clearRect(-b.width/2-f.moveCenterX,-b.height/2-f.moveCenterY,b.width,b.height);for(var i=0;i<k.length;i++){C.beginPath(),C.lineWidth=k[i].line,C.strokeStyle="rgba("+k[i].cR+","+k[i].cG+","+k[i].cB+", "+f.globalAlpha+")";for(var a=0;a<v[i].length;a++){var n=v[i][a],r=e/10/f.globalSpeed-v[i][a].speed-1,s=e/10/f.globalSpeed-v[i][a].speed,d=Math.floor(Math.max(r,0));if(f.loop)var h=d%(f.coordinates.length-1);else h=d;f.coordinates.length<=d&&!f.loop&&P.addPoints();var c=r-d,m=s-d,l=1-Math.min(c,1),x=1-Math.min(m,1);if(void 0===f.coordinates[h])break;if("multiply"==f.spacingMode)var y=P.segmentPoints(l,x,Math.min(c,1),Math.min(m,1),f.coordinates[h].x1*n.pos,f.coordinates[h].y1*n.pos,f.coordinates[h].x2*n.pos,f.coordinates[h].y2*n.pos,f.coordinates[h].x3*n.pos,f.coordinates[h].y3*n.pos,f.coordinates[h].x4*n.pos,f.coordinates[h].y4*n.pos);else y=P.segmentPoints(l,x,Math.min(c,1),Math.min(m,1),f.coordinates[h].x1+n.pos*f.coordinates[h].kx1,f.coordinates[h].y1+n.pos*f.coordinates[h].ky1,f.coordinates[h].x2+n.pos*f.coordinates[h].kx1,f.coordinates[h].y2+n.pos*f.coordinates[h].ky1,f.coordinates[h].x3+n.pos*f.coordinates[h].kx2,f.coordinates[h].y3+n.pos*f.coordinates[h].ky2,f.coordinates[h].x4+n.pos*f.coordinates[h].kx2,f.coordinates[h].y4+n.pos*f.coordinates[h].ky2);if(C.moveTo(y.x1,y.y1),C.bezierCurveTo(y.x2,y.y2,y.x3,y.y3,y.x4,y.y4),1<=s-d){d+=1,h=f.loop?d%(f.coordinates.length-1):d,f.coordinates.length<=d&&!f.loop&&P.addPoints();var p=Math.max(r-d,0),g=Math.max(s-d,0),w=1-Math.min(p,1),M=1-Math.min(g,1);if("multiply"==f.spacingMode)var u=P.segmentPoints(w,M,Math.min(p,1),Math.min(g,1),f.coordinates[h].x1*n.pos,f.coordinates[h].y1*n.pos,f.coordinates[h].x2*n.pos,f.coordinates[h].y2*n.pos,f.coordinates[h].x3*n.pos,f.coordinates[h].y3*n.pos,f.coordinates[h].x4*n.pos,f.coordinates[h].y4*n.pos);else u=P.segmentPoints(w,M,Math.min(p,1),Math.min(g,1),f.coordinates[h].x1+n.pos*f.coordinates[h].kx1,f.coordinates[h].y1+n.pos*f.coordinates[h].ky1,f.coordinates[h].x2+n.pos*f.coordinates[h].kx1,f.coordinates[h].y2+n.pos*f.coordinates[h].ky1,f.coordinates[h].x3+n.pos*f.coordinates[h].kx2,f.coordinates[h].y3+n.pos*f.coordinates[h].ky2,f.coordinates[h].x4+n.pos*f.coordinates[h].kx2,f.coordinates[h].y4+n.pos*f.coordinates[h].ky2);C.moveTo(u.x1,u.y1),C.bezierCurveTo(u.x2,u.y2,u.x3,u.y3,u.x4,u.y4)}}C.stroke()}}(),this}}(jQuery),window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(o,t){window.setTimeout(o,1e3/60)});