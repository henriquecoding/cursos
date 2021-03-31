$(document).ready(function(){

    let owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                stagePadding: 50
            },
            500: {
                items: 2,
                stagePadding: 50
            },
            1000: {
                items: 3,
                stagePadding: 50
            }
        }
    });

    $('btn_anterior').on('click', function(){
        owl.trigger('prev.owl.carousel');
    })
    $('btn_proximo').on('click', function(){
        owl.trigger('next.owl.carousel');
    })
});