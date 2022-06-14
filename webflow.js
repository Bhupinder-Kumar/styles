// *******------**********
// Js File for Webflow
$(document).ready(function () {
    $(".nav-header-dashboard-3").css("visibility", "hidden");

    $(".nav-link-3").mouseover(function () {
        $(".nav-header-dashboard-3").css("visibility", "visible");
    });

    $(".nav-header-dashboard-3").mouseleave(function () {
        $(this).css("visibility", "hidden");
    });

    $(".close-btn").click(function () {
        $(".w-nav-overlay").css("display", "none");
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 30) {
            $(".header-4").addClass("sticky");
        }
        else {
            $(".header-4").removeClass("sticky");
        }
    });

    $(".video-link").click(function () {
        $(".dd-modal").css("display", "flex");
    });
    $(".dd-modal").click(function () {
        $(this).css("display", "none");
    });
    $(".modal-inner").html(`<iframe class="youtubeModel" loading="lazy" width="100%" height="450" src="https://www.youtube.com/embed/PmN_MY5kNrE?rel=0&enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>`);
});

var Webflow = Webflow || [];
Webflow.push(function () {
    var submitBtn = document.querySelector("input[type=submit]");
    submitBtn.disabled = true;
});

const modal = document.querySelector(".dd--cta");
const overlay = document.querySelector(".dd-overlay");
const open_modal = document.querySelector(".nav-link-signin");

const close_Modal = function () {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
}
open_modal.addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
});
overlay.addEventListener("click", close_Modal);