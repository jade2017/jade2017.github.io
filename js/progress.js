document.addEventListener("DOMContentLoaded",function(){if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1&&!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){document.body.insertAdjacentHTML("afterbegin",'<div id="_progress-bar" style="background-color:#4cb;height:5px;position:fixed;top:0;transition:0.1s ease all;width:0;z-index:20;"></div>');var e,n,t,i,o=document.getElementById("_progress-bar");window.addEventListener("scroll",function(){e=window.innerHeight,n=document.body.clientHeight,t=document.body.scrollTop,i=100*(t/(n-e)),o.style.width=i+"%"})}});