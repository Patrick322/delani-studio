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

});
