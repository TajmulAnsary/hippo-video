$(function () {

    // show popover on mouse hover 
    $('header .link').mouseover(function () {
        $(this).next().addClass('visible');
    });
    $('header .link').next().mouseover(function () {
        $(this).addClass('visible');
    });
    $('header .link').mouseleave(function () {
        $(this).next().removeClass('visible');
    });
    $('header .link').next().mouseleave(function () {
        $(this).removeClass('visible');
    });

    // Tab contents links
    $(".our-services menu").on("click", "a", function () {
        $(this).siblings().removeClass("active"), $(this).addClass("active");
        var e = $(this).attr("data-name");
        $(".tab-content").find(e).siblings().removeClass("to-load"), $(".tab-content").find(e).addClass("to-load")
    });
    $('.has-dropdown a').click(function () {
        if ($(this).parents("li").hasClass("active")) {
            $(this).parents("li").removeClass('active').find('.popover').slideUp(300);
        } else {
            $(this).parents("li").siblings().removeClass('active').find('.popover').slideUp(300);
            $(this).parents("li").addClass('active').find('.popover').slideDown(300);
        }
    });

});



// some examples in plain Javascript not using jquery

var responsive_menu = document.getElementById("responsive-menu");

var _handleMenuNavigation = function (event) {
    var target = event.target;
    try {
        var headerEle = target.closest("header");

        if (headerEle.classList.contains('opened')) {
            headerEle.classList.remove("opened");
            responsive_menu.classList.remove("active");
            document.body.style.overflow = "auto";
            return;
        }
        headerEle.classList.add("opened");
        responsive_menu.classList.add("active");
        document.body.style.overflow = "hidden";
    } catch (err) {
        console.error("Error in _handleMenuNavigation", err);
    }
};

if (responsive_menu) {
    responsive_menu.addEventListener("click", _handleMenuNavigation);
}