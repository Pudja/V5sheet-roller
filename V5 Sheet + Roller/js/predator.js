$(document).ready(function () {
    //Predator types list and listing function
    var predator = [
      "Alleycat",
      "Bagger",
      "Blood Leech",
      "Cleaver",
      "Consensualist",
      "Extortionist",
      "Farmer",
      "Graverobber",
      "Osiris",
      "Sandman",
      "Scene Queen",
      "Siren",
    ];
    function predatorList(item) {
      document.getElementById("predatorList").innerHTML +=
        ' <option value="' + item + '">' + item + "</option>";
    }
    predator.forEach(predatorList);
});