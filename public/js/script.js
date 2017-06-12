$(function(){
	console.log("Engines are GO!");

	var grid = $('.grid').isotope({
		  // options
		  itemSelector: '.item',
		  masonry: {
		  
		}
	});

	$('.content').css('margin-left', $('.sidebar').width());
});