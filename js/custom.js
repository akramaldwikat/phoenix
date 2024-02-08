$(".slider #slider").slick({
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                dots: false,
                arrows: false
            }
        }
    ]
});

$(".news #newSlider").slick({
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    // arrows: false, Boolean
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                // rows: 2,
                infinite: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,

            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                // rows: 2,
                infinite: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                // rows: 2,
                infinite: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: false,
                arrows: false
            }
        }
    ]
});

$(".ourMenu #ourMenuSlider").slick({
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    // arrows: false, Boolean
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                // rows: 2,
                infinite: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,

            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                // rows: 2,
                infinite: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                // rows: 2,
                infinite: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: false,
                arrows: false
            }
        }
    ]
});

$(".Search").click(function () {
    $(".formSearch").fadeIn();
});

$(".formSearch .closed").click(function () {
    $(".formSearch").fadeOut();
});;

$(".menuIcon").click(function () {
    $(".menuMobile").toggleClass("active");
});
