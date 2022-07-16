var circles = document.getElementById('circles')
var startCircle = document.getElementById('startCircle')
var startWidth = startCircle.offsetWidth
var size = 150,
    increasingSize = size
var searchBtn = document.getElementById('searchBtn')
// var background = '#fff';
var border = '3px solid rgb(223 223 223)';

window.addEventListener("load", function () {
    setTimeout(() => {
        // startCircle.style.background = background
        startCircle.style.background = border
        for (let i = 1; i < circles.children.length; i++) {
            const el = circles.children[i]
            var elLast = circles.children[circles.children.length - i]

            // Increase size of circle
            increasingSize += size
            elLast.style.width = increasingSize + 'px'
            elLast.style.height = increasingSize + 'px'

            // Decrease opacity of circle
            elLast.style.opacity = 100 - (i * 10) + '%'
            // elLast.style.background = background
            elLast.style.border = border
        }
    }, 500);
})