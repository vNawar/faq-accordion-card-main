$(document).ready(function () {
  $("details").click(function () {
    $("details").not(this).removeAttr("open");
  });

  $("details").hover(
    function () {
      $(".illustraion-box").css({"transition": "0.25s transform ease", "transform": "translate(-30px)"});
    },
    function () {
      $(".illustraion-box").css({"transform": "translate(0)"});
    }
  );
});

