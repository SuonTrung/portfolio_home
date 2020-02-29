$(function() {
  $(".move-cont").click( function() {
    $("html, body").animate({ scrollTop: $(".cont").offset().top });
  });

  $(".move-top").click( function() {
    $("html, body").animate({ scrollTop: 0 });
  });
});