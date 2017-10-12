;(function () {

    var menuBtn = $('.menu-btn');
    var body = $('body');
    var mobileSidebarClass =  '_mobileSidebar';
    var mobileBreakPoint = 1280;
    var openInMobileClass = '_openInmobile';

    menuBtn.on('click', function (e) {
        var width = $(window).width();
        body.toggleClass(mobileSidebarClass);

        if( width < mobileBreakPoint ){
            body.addClass(openInMobileClass);
        }
    });

    $(window).on('resize', function (e) {
        var width = $(this).width();

        if( width < mobileBreakPoint ){
            body.addClass(mobileSidebarClass);
        } else {
            body.removeClass(mobileSidebarClass);
        }
    });

})();