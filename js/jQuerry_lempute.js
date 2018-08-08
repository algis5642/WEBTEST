function toggleSideBar() {
$('.sidebar').slideToggle();

}

$('.burgerbtn').click(function() {
    toggleSideBar()
});


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
