$(function () {
    $('.slider__items').slick({
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $('.material__slider-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    });
});


new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
