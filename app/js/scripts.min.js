$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.menu__phone-nav').toggleClass('menu__phone-nav_active');
});

$(document).ready(function() {
    $("#phone").inputmask("+7 (999) 999-99-99")
});