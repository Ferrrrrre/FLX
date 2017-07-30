$(function(){
	console.log("Engines are GO!");

	var grid = $('.grid').isotope({
		  // options
		  itemSelector: '.item-container',
          masonry: {

          },
          sortBy: 'random'
	});

    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        grid.isotope({ filter: filterValue });
        console.log($("." + filterValue));
    });

});


