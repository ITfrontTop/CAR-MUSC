$(function () {
    $('.slider__items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1320,
            settings: {
                    slidesToShow: 2,
                },
            }
        ]
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

$(function () {
    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
    });
});
