$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle("50");
    $("#walrus-hidden").slideToggle("50");
  });

  $(".clicky").click(function() {
    $("#secret-hide").toggle();
    $("#secret-show").toggle();
  });
});
