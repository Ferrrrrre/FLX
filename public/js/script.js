$(function(){
	console.log("Engines are GO!");

	var grid = $('.grid').isotope({
		  // options
		  itemSelector: '.item',
		  masonry: {
		  
		}
	});

	var depth = 100;
	
	// element to detect scroll direction of
	var el = $(window),

    // initialize last scroll position
    lastY = el.scrollTop();
    
	el.on('scroll', function() {
		console.log('scrolling');
    // get current scroll position
    var currY = el.scrollTop();
        if(currY > lastY){
        	depth++;
        }
        else if(currY === lastY){
        	
        }
        else{
        	depth--;
        }

        // determine current scroll direction
    //$('.background').css('background-size', depth + '%');
    

    // update last scroll position to current position
    lastY = currY;
	});




});


