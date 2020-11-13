$(document).ready(function () {
$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
    $('.navbar').css('background','red');
    $('.navbar button').css('opacity','1');
    } else {
    $('.navbar').css('background','transparent');
    }
    });
});