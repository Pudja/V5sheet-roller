$(document).ready(function () {
    $("#tooltip").css("display", "none");
    $("td").hover(
    function () {
      var description = $(this).prop("title");
      $("#tooltip").css("display", "block");
      $("#tooltip").text(description);
    },
    function () {
      $("#tooltip").css("display", "none");
      $("#tooltip").text("");
    }
  );
});
