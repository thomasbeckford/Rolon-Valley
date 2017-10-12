/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').removeClass("scrolled");
      //  $('#listItems').css("display", "none");
    }else{
        $('.navbar').addClass("scrolled");
      //  $('#listItems').css("display", "flex");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}
