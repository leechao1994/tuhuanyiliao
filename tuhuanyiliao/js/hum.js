var a = 0;
$(document).ready(function(){
$(".hb").click(function() {
    $(".daoh").slideToggle();
    if (a == 0) {
        a = 1;
        $(this).css({
            "background-color": "blue",
            "transition": 0.5 + "s"
        })
    } else {
        a = 0;
        $(this).css({
            "background-color": "red",
            "transition": 0.5 + "s"
        });
    };
});
});