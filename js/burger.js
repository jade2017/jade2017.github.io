document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("burger"),n=document.getElementsByClassName("big-nav")[0],t=!1;toggleMenu=function(){e.classList.toggle("close"),n.classList.toggle("hidden"),t=!t},e.addEventListener("click",toggleMenu),document.onkeydown=function(e){t&&27===e.keyCode&&(e.preventDefault(),toggleMenu())}});