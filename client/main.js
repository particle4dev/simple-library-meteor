Meteor.startup(function(){
    $(function () {
        $('.estante li').on('mouseenter', function () {
            $(this).addClass('pulse')
        }).on('mouseleave', function () {
            $(this).removeClass('pulse')
        });
        setTimeout(function () {
            $('.estante li').removeClass('fadeInLeft')
        }, 1001)
    });
});