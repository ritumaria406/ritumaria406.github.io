window.addEventListener('load', function() {
	//navigate to sections
	var navs = document.getElementsByClassName("nav-sec");
	for (var i=0; i < navs.length; i++) {
	  	navs[i].onclick = function(){
	  		var selector = this.getAttribute('data-nav');
	  		console.log(document.querySelector(selector));
	  		var offset = document.querySelector(selector).offsetTop;
	  		var headerHeigh = 56;
	  		window.scrollTo(0, offset - headerHeigh);
		}
	}
});
$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	var objectSelect = $(".content-wrap");
	var objectPosition = objectSelect.offset().top;
	if (scroll > objectPosition) {
		$("#changeheader").addClass("minimal");
	} else {
		$("#changeheader").removeClass("minimal");
	}
});