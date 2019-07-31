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
    })
})