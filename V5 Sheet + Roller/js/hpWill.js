$(document).ready(function () {
  var switchBtn = $("#toggle_mode");
  var hpCheckmark = $(".resources .hp .container .checkmark")
  var wpCheckmark = $(".resources .wp .container .checkmark")
  function wpHpDisabled() {
    $(".resources .hp label").find("input:checkbox").prop("disabled", true);
    $(".resources .wp label").find("input:checkbox").prop("disabled", true);
  }
  wpHpDisabled();
  switchBtn.click(function () {
    resolveDotsCount = $(".atributes  label[for='Resolve']").find(
      "input:checkbox:checked"
    ).length;
    composureDotsCount = $(".atributes  label[for='Composure']").find(
      "input:checkbox:checked"
    ).length;
    staminaDotsCount = $(".atributes  label[for='Stamina']").find(
      "input:checkbox:checked"
    ).length;
    var h = 0;
    var w = 0;
    //HP&WP math
    var healthCounter = 3 + staminaDotsCount;
    var willCounter = resolveDotsCount + composureDotsCount;
    //HP&WP current
    var currentHealthCount = $(".resources .hp label").find("input:checkbox")
      .length;
    var currentWillCount = $(".resources .wp label").find(
      "input:checkbox:checked"
    ).length;
    //Current HP
    if (currentHealthCount !== healthCounter) {
      $(".resources .hp label").find("input:checkbox").prop("checked", false);
      while (h < healthCounter) {
        $(".resources .hp label")
          .find("input:checkbox:not(:checked)")
          .first()
          .prop("checked", true);
        h++;
      }
    }
    //Current WP
    if (currentWillCount !== willCounter) {
      $(".resources .wp label").find("input:checkbox").prop("checked", false);
      while (w < willCounter) {
        $(".resources .wp label")
          .find("input:checkbox:not(:checked)")
          .first()
          .prop("checked", true);
        w++;
      }
    }
    $(".dice_result").text("")
  });
  hpCheckmark.click(function(){
    var thisParent = $(this).parent();
    if($(this).siblings("input:checkbox").prop("checked") === true){
    if($(this).text() === ""){
      $(this).parent().prevUntil(".hp").find(".checkmark").text("|");
      $(this).parent().prevUntil(".hp").find(".checkmark").addClass("superficial")
      $(this).addClass("superficial")
      $(this).text("|")
    }else if($(this).text() === "|"){
      $(this).parent().prevUntil(".hp").find(".checkmark").removeClass("superficial")
      $(this).removeClass("superficial")
      $(this).parent().prevUntil(".hp").find(".checkmark").addClass("aggravated")
      $(this).addClass("aggravated")
      $(this).parent().prevUntil(".hp").find(".checkmark").text("X");
      $(this).text("X")
    }else{
      thisParent.nextAll().find(".checkmark").removeClass("superficial");
      thisParent.nextAll().find(".checkmark").removeClass("aggravated");
      thisParent.nextAll().find(".checkmark").text("");
      $(this).removeClass("aggravated")
      $(this).text("")
    }
  }
  });
  wpCheckmark.click(function(){
    var thisParent = $(this).parent();
    if($(this).siblings("input:checkbox").prop("checked") === true){
    if($(this).text() === ""){
      $(this).parent().prevUntil(".wp").find(".checkmark").text("|");
      $(this).parent().prevUntil(".wp").find(".checkmark").addClass("superficial")
      $(this).addClass("superficial")
      $(this).text("|")
    }else if($(this).text() === "|"){
      $(this).parent().prevUntil(".wp").find(".checkmark").removeClass("superficial")
      $(this).removeClass("superficial")
      $(this).parent().prevUntil(".wp").find(".checkmark").addClass("aggravated")
      $(this).addClass("aggravated")
      $(this).parent().prevUntil(".wp").find(".checkmark").text("X");
      $(this).text("X")
    }else{
      thisParent.nextAll().find(".checkmark").removeClass("superficial");
      thisParent.nextAll().find(".checkmark").removeClass("aggravated");
      thisParent.nextAll().find(".checkmark").text("");
      $(this).removeClass("aggravated")
      $(this).text("")
    }
  }
  });
});