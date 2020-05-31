/**
 * Created by lex on 6/19/17.
 */
/*
 * For Navbar style transitions
 */
$(window).on("scroll load resize", function() {
    if ($(window).width() > 992) {
      if ($(document).scrollTop() > 50) {
        $("nav").css({
          "background-color": "rgba(53, 53, 54, 0.9)",
          "border-bottom": "3px solid rgba(00, 128, 128, 0.9)"
        });
      } else {
        $("nav").css({
          "background-color": "transparent",
          "border-bottom": "none"
        });
      }
    } else {
      $("nav").css({
        "background-color": "rgba(53, 53, 54, 0.9)",
        "border-bottom": "3px solid rgba(0, 128, 128, 0.9)"
      });
    }

    if($(window).width() < 768) {
        $("#logo").css({
            height: "32"
        });
    }
    else {
        if ($(document).scrollTop() > 50) {
            $("#logo").css({
                height: "32"
            });
        } else {
            $("#logo").css({
                height: "64"
            });
        }
    }
});

$(document).ready(function() {

    ///////////////////////////////////////////////////////////////////////////////////
    //
    //      SCROLL ON LINK CLICK
    //
    ///////////////////////////////////////////////////////////////////////////////////

    $("a[href^=\\#]").on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html,body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            $('html,body').location.hash = target;
        });
    });
});