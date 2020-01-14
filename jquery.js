//Some ugly jquery code for the animation of the button
$(document).ready(function () {
    $('#button').click(function () {
        $('#button').height("204px").width("504px").animate(10);
        $('#button').css("margin", "28px");
        window.setTimeout(
            function () {
                $('#button').height("200px").width("500px").animate(10);
                $('#button').css("margin", "30px");
            },
            70
        );
    });
});