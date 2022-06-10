$(document).ready(function(){      
    $(".nav-header-dashboard-3").css("visibility", "hidden");

$(".nav-link-3").mouseover(function(){
    $(".nav-header-dashboard-3").css("visibility", "visible");
});

$(".nav-header-dashboard-3").mouseleave(function(){
    $(this).css("visibility", "hidden");
});

$(".close-btn").click(function(){
    $(".w-nav-overlay").css("display", "none");
});

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
  
  if(scroll >= 30){
      $(".header-4").addClass("sticky");
  }
  else{
      $(".header-4").removeClass("sticky");
  }
})
});

var Webflow = Webflow || [];
Webflow.push(function () {
  var submitBtn = document.querySelector("input[type=submit]");
submitBtn.disabled = true;
});