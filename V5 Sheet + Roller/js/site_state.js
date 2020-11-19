$(document).ready(function () {
  var checkbox = $(".checkbox");
  var switchBtn = $("#toggle_mode");
  var playMode = false;

  switchBtn.click(function () {
    if (playMode === false) {
      checkbox.prop("disabled", "true");
      switchBtn.text("Play Mode");
      $("#dice_roller").css("display", "block");
      $("#wp_reroll").css("display", "block");
      playMode = true;

    } else {
      checkbox.removeAttr("disabled");
      $(".atributes").find(".active").removeClass("active");
      $(".skills").find(".active").removeClass("active");
      switchBtn.text("Edit Mode");
      $("#dice_roller").css("display", "none");
      $("#wp_reroll").css("display", "none");
      playMode = false;
    }
    $(".atributes .dot-input").click(function () {
      if (playMode === true) {
        $(".atributes .active").removeClass("active");
        $(this).addClass("active");
      }
      $(".skills .dot-input").click(function () {
        if (playMode === true) {
          $(".skills .active").removeClass("active");
          $(this).addClass("active");
        }
      });
    });


  });
});
