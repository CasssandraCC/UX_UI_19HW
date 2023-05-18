console.log("Hello world!") ;

$(document).ready(function() {
    $(".navbar-item").hover(
      function() {
        $(this).addClass("hovered");
      },
      function() {
        $(this).removeClass("hovered");
      }
    );
  });