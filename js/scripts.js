$(document).ready( function() {
    $("#designlogo").click(function () {
        $(this).hide();
        $(".weed").show();
    });

    $('.weed').click(function(){
        $(this).hide();
        $('#designlogo').show();
    });
});