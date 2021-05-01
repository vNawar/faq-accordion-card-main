$(document).ready(function () {
  // $("details").click(function () {
  //   $("details").not(this).removeAttr("open");
  // });

  $(".accordion-item").click(function () {
    $(".accordion-item").not(this).find(".accordion-answer").removeClass("accordion-answer-open");
    $(".accordion-answer", this).toggleClass("accordion-answer-open accordion-answer-close");
  });
});
