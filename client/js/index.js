$(document).ready(function(){

    // Init banner owl carousel
    $('#banner-area .owl-carousel').owlCarousel({
        dots: true,
        items: 1
    });

    // Top sale owl carousel
    $('#top-sale .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // isotope init
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    // filter items on button click
    $(".button-group").on("click", "button",function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue})

    });

    // new phones owl carousel
    $('#new-phones .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // Blog carousel

    $('#blog .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        center: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 3
            },
        }
    });

    // Quantity
    let $qty_up = $('.qty .qty-up');
    let $qty_down = $('.qty .qty-down');
    // let $qty_input = $('.qty-input')

    // Click on Quantity up btn
    $qty_up.click(function(e){
        let $input = $(`.qty-input[data-id='${$(this).data("id")}']`);
        if($input.val() >= 1 && $input.val() < 9){
            $input.val(function(i, oldval){
                return ++oldval;
            });
        }
    });

    // Click on Quantity down btn
    $qty_down.click(function(e){
        let $input = $(`.qty-input[data-id='${$(this).data("id")}']`);
        if($input.val() > 1 && $input.val() <= 10){
            $input.val(function(i, oldval){
                return --oldval;
            });
        }
    });
});