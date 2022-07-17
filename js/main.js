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
    setTimeout(() => {
        heroNfts.classList.add('floating__nfts')
    }, 1500);

    // for (let i = 0; i < heroNfts.children.length; i++) {
    //     const el = heroNfts.children[i];

    //     // el.style.top = Math.round(Math.random() * 100) + "%"
    //     // el.style.left = Math.round(Math.random() * 100) + "%"
    // }
})