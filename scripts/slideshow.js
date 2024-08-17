let index = 0;
let images = ["url('../images/arches.jpg')", "url('../images/bryce_canyon.jpg')", "url('./images/canyonlands.jpg')", "url('./images/capitol_reef.jpg')", "url('./images/zion.jpg')"]
showSlides()

function showSlides() {
    index++;
    if (index > images.length) { index = 1 }
    document.getElementById("bg").style.backgroundImage = images[index];
    setTimeout(showSlides, 30000);
}