var circles = document.getElementById('circles')
var startCircle = document.getElementById('startCircle')
var startWidth = startCircle.offsetWidth
var size = 150,
    increasingSize = size
var searchBtn = document.getElementById('searchBtn')
var background = '#fff';
var border = '3px solid rgb(223 223 223)';
var heroNfts = document.getElementById('heroNfts')

if (window.innerWidth <= 576) {
    size = 100
}
window.addEventListener("load", function () {
    setTimeout(() => {
        startCircle.style.background = background
        startCircle.style.border = border
        for (let i = 1; i < circles.children.length; i++) {
            var elLast = circles.children[circles.children.length - i - 1]

            // Reduce transition for each element
            elLast.style.transition = 1.3 - i / 10 + `s linear`
            // elLast.style.transition = i / 10 + .6 + `s cubic-bezier(${1 - i / 10}, 0.82, 0.68, 0.19) 0s`

            // Increase size of circle
            increasingSize += size
            elLast.style.width = increasingSize + 'px'
            elLast.style.height = increasingSize + 'px'

            // Make style adjustments
            elLast.style.opacity = 100 - (i * 10) + '%'
            elLast.style.background = background
            elLast.style.border = border
        }
    }, 500);
    setTimeout(() => {
        for (let i = 0; i < circles.children.length; i++) {
            var el = circles.children[i]

            el.style.transition = .15 + i / 10 + `s linear`
            el.classList.add('circle_shadow')
        }
    }, 1200);

    var transition = .6
    for (let i = 0; i < heroNfts.children.length - 3; i++) {
        const el = heroNfts.children[i];

        el.style.transition = transition + i / 10 + 's ease-out'
    }

    for (let i = 1, k = 0; i < heroNfts.children.length - 2; i++, k++) {
        const el = heroNfts.children[heroNfts.children.length - i];

        el.style.transition = transition + k / 10 + 's ease-out'
    }

    setTimeout(() => {
        heroNfts.classList.add('floating__nfts')
    }, 1500);


    var swiperWrap = document.getElementById('swiperWrap')

    for (let i = 0; i < swiperWrap.children.length; i++) {
        const el = swiperWrap.children[i]

        var imgContainer = el.getElementsByClassName('latest__thumbnail_wrap')
        var elImgClone = imgContainer[0].children[0].cloneNode()

        elImgClone.classList.remove('latest__thumbnail')
        elImgClone.classList.add('latest__thumbnail-reflect')

        imgContainer[0].append(elImgClone)
    }
})

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 70,
    loop: true,
    loopedSlides: 5,
    watchSlidesProgress: true,
    centerSlides: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});