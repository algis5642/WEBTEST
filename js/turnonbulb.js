function changeImage() {
    var image = document.getElementById('lempa');
    if (image.src.match("bulbshine")) {
        image.src = "/pictures/bulb.jpg";
    } else {
        image.src = "/pictures/bulbshine.jpg";
    }
}