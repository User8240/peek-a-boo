$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle("50");
    $("#walrus-hidden").slideToggle("50");
  });
});
