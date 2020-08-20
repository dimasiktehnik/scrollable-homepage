$(document).ready(function () {
    $('#fullpage').fullpage({
        licenseKey: '951BDF59-63F84E77-8768E365-3ACE3408',
        scrollHorizontally: true,
        anchors:['solution', 'engineering','carsharing','rental'],
        menu: '#home-nav-list',
        css3: true,
    });

    //menu
    $('.nav-icon').click(function () {
        $(this).toggleClass('open');
        $('.menu-drop').toggleClass('open');
        $('.header__logo').toggleClass('black');


    });
});