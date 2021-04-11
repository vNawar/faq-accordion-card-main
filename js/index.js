$(document).ready(function () {
  $("details").click(function () {
    $("details").not(this).removeAttr("open");
  });
});
