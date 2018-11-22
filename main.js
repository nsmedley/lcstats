$(document).ready(function() {
  var typed = new Typed(".container__header", {
    strings: ["^700 TELL US ABOUT YOUR SITE"],
    typeSpeed: 50,
    loop: false
  });

  $(".next").click(function() {
    stage_two();
  });
});

function stage_two() {
  $(".container__header").text("");
  $(".container__header").removeData("typed");
  var typed = new Typed(".container__header", {
    strings: ["^500 What sector are you in?"],
    typeSpeed: 50,
    loop: false
  });

  $(".container__content").addClass("container__content--stageTwo");
  $(".container__progress").addClass("container__progress--stageTwo");
  $(".graphics").addClass("graphics--stageTwo");
  $(".graphics__circle").addClass("graphics__circle--stageTwo");
  $(".graphics__shop").addClass("graphics__shop--hide");
  $(".graphics__email").addClass("graphics__email--hide");
  $(".graphics__plane").addClass("graphics__plane--hide");
}
