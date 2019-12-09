$(document).ready( function() {
    $("#designlogo").click(function () {
        $(this).hide();
        $(".weed").show();
    });

    $('.weed').click(function(){
        $(this).hide();
        $('#designlogo').show();
    });

    $("#devLogo").click(function(){
        $(this).hide();
        $(".dev").show()
    });

    $('.dev').click(function(){
        $(this).hide();
        $('#devLogo').show()
    });

    $("#productLogo").click(function(){
        $(this).hide();
        $('.pro').show();
    });

    $('.pro').click(function(){
        $(this).hide();
        $('#productLogo').show();
    });

    $('.img-fluid').hover(function(){
        $('.card-img-overlay').toggle();
    });
    

    $('.img-a').hover(function(){
        $('.card-img-c').toggle();
    });

    $('.img-d').hover(function(){
        $('.card-img-e').toggle();
    });

    $('.img-f').hover(function(){
        $('.card-img-g').toggle();
    });


$('.img-h').hover(function(){
    $('.card-img-i').toggle();
});

$('.img-j').hover(function(){
    $('.card-img-k').toggle();
})

$('.img')
});


