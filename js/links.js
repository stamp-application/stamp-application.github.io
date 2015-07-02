$(function(){
    $('.link-to-the-top').click(function(){
        $('#top-of-page').ScrollTo();
    });

    $('nav li a').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href');
        $(id).ScrollTo({
            duration: 400
        });
    });
});
