function toggleSidebar(){
    $('.sidebar').slideToggle();
    if (sideState) {
        $('.mainLayout').css('grid-template-columns','1fr');
    } else {
        $('.mainLayout').css('grid-template-columns','1.2fr 5fr');
    }
    sideState = !sideState;
}

$('.burgerbtn').click(function(){
    // $('.sidebar').slideToggle();
    toggleSidebar();
});





/*function toggleSideBar() {
$('.sidebar').slideToggle();

}

$('.burgerbtn').click(function() {
    toggleSideBar()
    $('.sidebar

});*/


$('sakmatai span').click(function () {
    $('.sakmatai .cell').toggleClass('juoda')

});

window.setInterval(function () {
    $('.sakmatai .cell').toggleClass('juoda')
},1000);

$('.cell').click(function () {
    $(this).toggleClass('juoda')

});

$.get("/failas.html"), function (data, status) {
    $('#failo_turinys_cia').html(data);

}
