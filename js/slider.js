const Swiper = window.Swiper

const slider = () => {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".slider-button-next",
            prevEl: ".slider-button-prev",
        }
    })
}

slider()
