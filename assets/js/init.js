$(document).ready( function(){
    	console.log("works");
    	$('.smoothScroll').on('click', function(e){
    		e.preventDefault();
    		$(window).scrollTo($(this).attr('href'),1000);
    		console.log("click Works");

    	});
    });