document.getElementById("toggle").addEventListener("click",function(event){
	event.preventDefault();
	document.getElementById("nav-header").classList.toggle("open");
	document.getElementById("body").classList.toggle("overflow-hidden");
});

var currentScroll = window.pageYOFFset || document.body.scrollTop;
var lastScrollTop = 0;
window.addEventListener("scroll",function(){
	var currentScroll = window.pageYOFFset || document.body.scrollTop;
	if(currentScroll > lastScrollTop){
		console.log("down");
	}else{
		console.log("up");
	}
}, false);