$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})

$('#myTabs a[href="nav"]').tab('show') // Select tab by name
$('#myTabs a:first').tab('show')