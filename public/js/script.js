$(document).ready( function(){

	console.log("Engines are GO!");

    $(window).on('resize', function(){
      $('.eqHeight').matchHeight();
    });

    if($('.grid').length){
        var grid = $('.grid').isotope({
          // options
          itemSelector: '.item-container',
          masonry: {

          },
          sortBy: 'random'
        });

        grid.imagesLoaded().progress( function() {
          grid.isotope('layout');
        });
    }

    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        grid.isotope({ filter: filterValue });
    });

    $('.button-group').each( function( i, buttonGroup ) {
        var buttonGroup = $( buttonGroup );
        buttonGroup.on( 'click', 'button', function() {
            console.log('clicker');
            buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });

});




