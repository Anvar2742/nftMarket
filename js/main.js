var circles = document.getElementById('circles')
var startCircle = document.getElementById('startCircle')
var startWidth = startCircle.offsetWidth
var size = 150,
    increasingSize = size
var searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click', function () {
    for (let i = 1; i < circles.children.length; i++) {
        const el = circles.children[i]

        // Increase size of circle
        increasingSize += size
        el.style.width = increasingSize + 'px'
        el.style.height = increasingSize + 'px'

        // Decrease opacity of circle
        var tenI = (i * 10)
        el.style.opacity = 100 - (i * 10) + '%'
    }
})