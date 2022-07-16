var circles = document.getElementById('circles')
var startCircle = document.getElementById('startCircle')
var startWidth = startCircle.offsetWidth
var size = 150,
    increasingSize = size
var searchBtn = document.getElementById('searchBtn')

window.addEventListener("load", function () {
    startCircle.style.background = '#8c63fd'
    for (let i = 1; i < circles.children.length; i++) {
        const el = circles.children[i]
        var elLast = circles.children[circles.children.length - i]

        // Increase size of circle
        increasingSize += size
        elLast.style.width = increasingSize + 'px'
        elLast.style.height = increasingSize + 'px'

        // Decrease opacity of circle
        if(100 - (i * 10) <= 0) {
            elLast.style.opacity = 10 + '%'
        } else {
            elLast.style.opacity = 100 - (i * 10) + '%'
        }
        elLast.style.background = '#8c63fd'
    }
})