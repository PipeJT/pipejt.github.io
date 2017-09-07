$(document).ready(function () {
    $menu = $("#menu").find("ul").find("li");

    $menu.hover(function () {
        $(this).children('ul').stop();
        $(this).children('ul').slideDown();
    }, function () {
        $(this).children('ul').stop();
        $(this).children('ul').slideUp();
    });
    
    $menuMobile = $("#menuMovil").find("ul").find("li");

    $menuMobile.hover(function () {
        $(this).children('ul').stop();
        $(this).children('ul').slideDown();
    }, function () {
        $(this).children('ul').stop();
        $(this).children('ul').slideUp();
    });
    
    $("#showSide").click(function () {
        if($("#moveBtn").hasClass("activeSide")){
            $("#moveBtn").removeClass("activeSide");
            $("#side").removeClass("sideShow");
            $("#asideClose").removeClass("hide");
            $("#asideShow").addClass("hide");
        }else{
            $("#moveBtn").addClass("activeSide");
            $("#side").addClass("sideShow");
            $("#asideClose").addClass("hide");
            $("#asideShow").removeClass("hide");
        };
    });
});