$(document).ready(function () {
  $(".accordion-item").click(function () {
    $(".accordion-item").not(this).find(".accordion-answer").removeClass("accordion-answer-open");
    $(".accordion-answer", this).toggleClass("accordion-answer-open accordion-answer-close");
  });

  $(".accordion-item").hover(
    function () {
      $(".illustraion-box").css({ transition: "0.25s transform ease", transform: "translate(-30px)" });
    },
    function () {
      $(".illustraion-box").css({ transform: "translate(0)" });
    }
  );
});
