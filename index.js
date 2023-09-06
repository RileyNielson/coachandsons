$("#navDropdown").click(function () {
    console.log("clicked");
    $("#navItems").toggle();
});

$(document).mouseup(function (e) {
    var container = $("#navItems");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
    }
})