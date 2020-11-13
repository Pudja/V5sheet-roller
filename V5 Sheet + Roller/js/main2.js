$(document).ready(function () {
  //page creation
  var dot =
    '<label class="container"><input type="checkbox" class="checkbox" /><span  class="checkmark"></span></label>';
  var sqr =
    '<label class="container"><input type="checkbox"  /><span class="checkmark sqr"></span></label>';
    var Hsqr =
    '<label class="container"><input type="checkbox" class="checksqr"  /><span class="checkmark sqr"></span></label>';
  var i = 0;
  var j = 0;
  var m = 0;

  var dotTargets = $(".dot-input");
  var sqrTargets = $(".sqr-input");
  var sqrHunger = $(".hunger-sqr-input");

  function dotPlacer(f) {
    while (i < 5) {
      f.append(dot);
      i++;
    }
  }
  function hunger(h) {
    while (m < 5) {
      h.append(Hsqr);
      m++;
    }
  }

  function sqrPlacer(g) {
    while (j < 10) {
      g.append(sqr);
      j++;
    }
  }
  dotPlacer(dotTargets);
  sqrPlacer(sqrTargets);
  hunger(sqrHunger);

  //dot manipulation
  var checkbox = $(".checkbox");

  checkbox.change(function () {
    var thisParent = $(this).parent();
    if ($(this).is(":checked")) {
      thisParent.prevUntil(".dot-input").find(".checkbox").prop("checked", true);
    } else {
      thisParent.nextAll().find(".checkbox").prop("checked", false);
    }
  });
  var checksqr = $(".checksqr");
  checksqr.change(function () {
    var thisParent = $(this).parent();
    if ($(this).is(":checked")) {
      thisParent.prevUntil(".sqr-input").find(".checksqr").prop("checked", true);
    } else {
      thisParent.nextAll().find(".checksqr").prop("checked", false);
    }
  });

});
