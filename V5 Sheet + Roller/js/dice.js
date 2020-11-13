$(document).ready(function () {
  $("#dice_roller").click(function () {
    var atributesDotsCount = $(".atributes .active").find(
      "label input:checkbox:checked"
    ).length;
    var skillDotsCount = $(".skills .active").find(
      "label input:checkbox:checked"
    ).length;
    var hungerDotCount = $(".hunger-sqr-input").find(
      "label input:checkbox:checked"
    ).length;
    var sum = skillDotsCount + atributesDotsCount;
    var diceCount = 1;
    var hungerCount = 1;

    $(".dice_result").text("");
    while (diceCount <= sum) {
      roll = Math.floor(Math.random() * 10 + 1);
      diceCount++;
      if (hungerCount <= hungerDotCount) {
        if (roll === 10) {
          $(".dice_result").append(
            '<img class="hungry img_dice_result" src="img/critical.png"></img>'
          );
        } else if (roll > 5) {
          $(".dice_result").append(
            '<img class="hungry img_dice_result" src="img/succes.png"></img>'
          );
        } else {
          $(".dice_result").append(
            '<img class="hungry img_dice_result" style="background-color:red" src="img/fail.png"></img>'
          );
        }
        hungerCount++;
      } else {
        if (roll === 10) {
          $(".dice_result").append(
            '<img class="img_dice_result" alt="CRITICAL!" src="img/critical.png"></img>'
          );
        } else if (roll > 5) {
          $(".dice_result").append(
            '<img class="img_dice_result" src="img/succes.png"></img>'
          );
        } else {
          $(".dice_result").append(
            '<img class="img_dice_result" alt="fail" src="img/fail.png"></img>'
          );
        }
      }
    }
  });
  $(".dice_result").on("click", "img", function () {
    if ($(this).hasClass("hungry") === true) {
      alert("You cannot reroll hunger dice");
    } else if ($(this).hasClass("selected") === true) {
      $(this).removeClass("selected");
    } else {
      $(this).addClass("selected");
    }
  });
  $("#wp_reroll").click(function () {
    var reroll_count = 0;
    var reroll_selected = $(".selected").length;
    var wp_for_mark = 0
    $(".selected").remove();
    while (reroll_count < reroll_selected) {
      roll = Math.floor(Math.random() * 10 + 1);
      if (roll === 10) {
        $(".dice_result").append(
          '<img class="img_dice_result" alt="CRITICAL!" src="img/critical.png"></img>'
        );
      } else if (roll > 5) {
        $(".dice_result").append(
          '<img class="img_dice_result" src="img/succes.png"></img>'
        );
      } else {
        $(".dice_result").append(
          '<img class="img_dice_result" alt="fail" src="img/fail.png"></img>'
        );
      }
        reroll_count++;
    }
    if(reroll_selected <= 3){
        wp_mark = 1
    }else if(reroll_selected <= 6){
        wp_mark = 2
    }else{
        wp_mark = 2
    }
    while(wp_for_mark < wp_mark){
        var wp_checked = $(".resources .wp label").find("input:checkbox:checked");
        for(var i = 0; i< wp_checked.length; i++){
            if(wp_checked.eq(i).siblings().is(':empty')){
                wp_checked.eq(i).siblings().text("|")
                wp_checked.eq(i).siblings().addClass("superficial")
                break;
            }
        }
        wp_for_mark++
    }
  });
});