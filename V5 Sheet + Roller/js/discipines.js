$(document).ready(function () {
  var discipline = {
    animalism: {
      name: "Animalism",
      description:
        "Animalism is a Discipline that brings the vampire closer to their animalistic nature. This not only allows them to communicate with and gain dominance over creatures of nature, but gives them influence over the Beast itself.",
      abilities: {
        dot1: {
          options: {
            option1: {
              name: "Bond famulus",
              description: "Animal companion",
            },

            option2: {
              name: "Bond famulus2",
              description: "Animal companion2",
            },
          },
        },
        dot2: {
          name: "Feral whispers",
          description: "Animal companion2",
        },
        dot3: {
          name: "Animal Succulence",
          description: "",
        },
        dot4: {
          name: "Subsume the Spirit",
          description: "",
        },
        dot5: {
          name: "Animal Dominion",
          description: "",
        },
      },
    },
    auspex: {
      name: "Auspex",
      description:
        "Auspex is a Discipline that grants vampires supernatural senses.",
      abilities: {
        dot1: {
          name: "Heightened Senses",
          description: "Heightened Senses",
        },
        dot2: {
          name: "Premonition",
          description: "",
        },
        dot3: {
          name: "Scry the Soul",
          description: "",
        },
        dot4: {
          name: "Spirit's Touch",
          description: "",
        },
        dot5: {
          name: "Clairvoyance",
          description: "",
        },
      },
    },
    celerity: {
      name: "Celerity",
      description:
        "Celerity is a Discipline that grants vampires supernatural quickness and reflexes.",
      abilities: {
        dot1: {
          name: "Cat's Grace",
          description: "",
        },
        dot2: {
          name: "Fleetness",
          description: "",
        },
        dot3: {
          name: "Blink",
          description: "",
        },
        dot4: {
          name: "Draught of Elegance",
          description: "",
        },
        dot5: {
          name: "Lightning Strike",
          description: "",
        },
      },
    },
    dominate: {
      name: "Dominate",
      description:
        "Dominate is a Discipline that overwhelms another person's mind with the vampire's will, forcing victims to think or act according to the vampire's decree.",
      abilities: {
        dot1: {
          name: "Compel",
          description: "",
        },
        dot2: {
          name: "Mesmerize",
          description: "",
        },
        dot3: {
          name: "The Forgetful Mind",
          description: "",
        },
        dot4: {
          name: "Ancestral Dominion",
          description: "",
        },
        dot5: {
          name: "Mass Manipulation",
          description: "",
        },
      },
    },
    fortitude: {
      name: "Fortitude",
      description:
        "Fortitude is a Discipline that grants Kindred unearthly toughness, even to the point of resisting fire and sunlight.",
      abilities: {
        dot1: {
          name: "Resilence",
          description: "",
        },
        dot2: {
          name: "Toughness",
          description: "",
        },
        dot3: {
          name: "",
          description: "Defy Bane",
        },
        dot4: {
          name: "Draught of Endurance",
          description: "",
        },
        dot5: {
          name: "Flesh of Marble",
          description: "",
        },
      },
    },
    obfuscate: {
      name: "Obfuscate",
      description:
        "Obfuscate is a Discipline that allows vampires to conceal themselves, deceive the mind of others, or make them ignore what the user does not want to be seen.",
      abilities: {
        dot1: {
          name: "Cloak of Shadows",
          description: "",
        },
        dot2: {
          name: "Unseen Passage",
          description: "",
        },
        dot3: {
          name: "Ghost in the Machine",
          description: "",
        },
        dot4: {
          name: "Conceal",
          description: "",
        },
        dot5: {
          name: "Cloak the Gathering",
          description: "",
        },
      },
    },
    oblivion: {
      name: "Oblivion",
      description:
        "Oblivion is a Discipline that allows its users to draw on something wholly unnatural; calling forth supernatural darkness from the Abyss and enslaving specters through Oblivion.",
      abilities: {
        dot1: {
          name: "Shadow Cloak",
          description: "",
        },
        dot2: {
          name: "Shadow Cast",
          description: "",
        },
        dot3: {
          name: "Shadow Perspective",
          description: "",
        },
        dot4: {
          name: "Stygian Shroud",
          description: "",
        },
        dot5: {
          name: "Shadow Step",
          description: "",
        },
      },
    },
    potence: {
      name: "Potence",
      description:
        "Potence is the Discipline that endows vampires with physical vigor and preternatural strength. Vampires with the Potence Discipline possess physical prowess beyond mortal bounds.",
      abilities: {
        dot1: {
          name: "Lethal Body",
          description: "",
        },
        dot2: {
          name: "Prowess",
          description: "",
        },
        dot3: {
          name: "Spark of Rage",
          description: "",
        },
        dot4: {
          name: "Draught of Might",
          description: "",
        },
        dot5: {
          name: "Draught of Might",
          description: "",
        },
      },
    },
    presence: {
      name: "Presence",
      description:
        "Presence is the Discipline of supernatural allure and emotional manipulation which allows Kindred to attract, sway, and control crowds.",
      abilities: {
        dot1: {
          name: "Awe",
          description: "",
        },
        dot2: {
          name: "Lingering Kiss",
          description: "",
        },
        dot3: {
          name: "Dread Gaze",
          description: "",
        },
        dot4: {
          name: "Irresistable Voice",
          description: "",
        },
        dot5: {
          name: "Majesty",
          description: "",
        },
      },
    },
    protean: {
      name: "Protean",
      description:
        "Protean is a Discipline that gives vampires the ability to change form, from growing feral claws to evaporating into a cloud of mist.",
      abilities: {
        dot1: {
          name: "Eyes of the Beast",
          description: "",
        },
        dot2: {
          name: "Feral Claws",
          description: "",
        },
        dot3: {
          name: "Earth Meld",
          description: "",
        },
        dot4: {
          name: "Shape of the Beast",
          description: "",
        },
        dot5: {
          name: "Mist Form",
          description: "",
        },
      },
    },
    sorcery: {
      name: "Blood Sorcery",
      description:
        "Blood Sorcery, refers to the magic performed by vampires, fueled by religious or occult practices and the power of Cainite vitae.",
      abilities: {
        dot1: {
          name: "Corrosive Vitae",
          description: "",
        },
        dot2: {
          name: "Extinguish Vitae",
          description: "",
        },
        dot3: {
          name: "Blood of Potency",
          description: "",
        },
        dot4: {
          name: "Theft of Vitae",
          description: "",
        },
        dot5: {
          name: "Baal’s Caress",
          description: "",
        },
      },
    },
    Alchemy: {
      name: "Thin-Blood Alchemy",
      description:
        "Thin-Blood Alchemy is a two step practice: distillation of a blood concoction using the proper formula, then activation of said brew by drinking it and channeling its power. &#013;Exlusive for Thin-Bloods",
      abilities: {
        dot1: {
          name: "Far Reach",
          description: "",
        },
        dot2: {
          name: "Envelop",
          description: "",
        },
        dot3: {
          name: "Defractionate",
          description: "",
        },
        dot4: {
          name: "Airborne Momentum",
          description: "",
        },
        dot5: {
          name: "Awaken the Sleeper",
          description: "",
        },
      },
    },
  };
  for (property in discipline) {
    $(".disciplineList").append(
      ' <option value=" ' +
        `${discipline[property].name}` +
        ' " title=" ' +
        `${discipline[property].description}` +
        ' ">' +
        `${discipline[property].name}` +
        "</option>"
    );
  }
  $("#disciplineList1").change(function () {
    var value = $("option:selected", this).text();
    $.each(discipline, function (objName) {
      var disciplineSelector = objName;
      var disciplinePath = discipline[disciplineSelector];
      var disciplineName = disciplinePath.name;
      if (disciplineName === value) {
        var disciplinesAbilities = disciplinePath.abilities;
        //First dot logic
        var firstDot = disciplinesAbilities.dot1;
        var firstDotOptions = firstDot.options;
        if (firstDotOptions !== undefined) {
          $(".row1 > .col1").html("<select></select>");
          for (property in firstDotOptions) {
            $(".row1 > .col1")
              .find("select")
              .append(
                '<option value="' +
                  `${firstDotOptions[property].name}` +
                  '" title="'+ `${firstDotOptions[property].description}` +'">' +
                  `${firstDotOptions[property].name}` +
                  "</option>"
              );
          }
        } else {
          $(".row1 > .col1").text(firstDot.name);
          $(".row1 > .col1").attr("title", firstDot.description)
        }

        //Second dot logic
        var secondDot = disciplinesAbilities.dot2;
        var secondDotOptions = secondDot.options;
        if (secondDotOptions !== undefined) {
          $(".row2 > .col1").html("<select></select>");
          for (property in secondDotOptions) {
            $(".row2 > .col1")
              .find("select")
              .append(
                '<option value="' +
                  `${secondDotOptions[property].name}` +
                  '">' +
                  `${secondDotOptions[property].name}` +
                  "</option>"
              );
          }
        } else {
          $(".row2 > .col1").text(secondDot.name);
        }

        //Third dot logic
        var thirdDot = disciplinesAbilities.dot3;
        var thirdDotOptions = thirdDot.options;
        if (thirdDotOptions !== undefined) {
          $(".row3 > .col1").html("<select></select>");
          for (property in thirdDotOptions) {
            $(".row3 > .col1")
              .find("select")
              .append(
                '<option value="' +
                  `${thirdDotOptions[property].name}` +
                  '">' +
                  `${thirdDotOptions[property].name}` +
                  "</option>"
              );
          }
        } else {
          $(".row3 > .col1").text(thirdDot.name);
        }

        //forth dot logic
        var forthDot = disciplinesAbilities.dot4;
        var forthDotOptions = forthDot.options;
        if (forthDotOptions !== undefined) {
          $(".row4 > .col1").html("<select></select>");
          for (property in forthDotOptions) {
            $(".row4 > .col1")
              .find("select")
              .append(
                '<option value="' +
                  `${forthDotOptions[property].name}` +
                  '">' +
                  `${forthDotOptions[property].name}` +
                  "</option>"
              );
          }
        } else {
          $(".row4 > .col1").text(forthDot.name);
        }

        //fifth dot logic
        var fifthDot = disciplinesAbilities.dot5;
        var fifthDotOptions = fifthDot.options;
        if (fifthDotOptions !== undefined) {
          $(".row5 > .col1").html("<select></select>");
          for (property in fifthDotOptions) {
            $(".row5 > .col1")
              .find("select")
              .append(
                '<option value="' +
                  `${fifthDotOptions[property].name}` +
                  '">' +
                  `${fifthDotOptions[property].name}` +
                  "</option>"
              );
          }
        } else {
          $(".row5 > .col1").text(fifthDot.name);
        }
      }
    });
  });
  //Second Column
  $("#disciplineList2").change(function () {
    var value = $("option:selected", this).text();
    $.each(discipline, function (objName) {
      var disciplineSelector = objName;
      var disciplinePath = discipline[disciplineSelector];
      var disciplineName = disciplinePath.name;
      if (disciplineName === value) {
        var disciplinesAbilities = disciplinePath.abilities;
        //First dot logic
        var firstDot = disciplinesAbilities.dot1;
        var firstDotOptions = firstDot.options;
        if (firstDotOptions !== undefined) {
          $(".row1 > .col2").html("<select></select>");
          for (property in firstDotOptions) {
            $(".row1 > .col2")
              .find("select")
              .append(
                '<option value="' +
                  `${firstDotOptions[property].name}` +
                  '">' +
                  `${firstDotOptions[property].name}` +
                  "</option>"
              );
          }
        } else {
          $(".row1 > .col2").text(firstDot.name);
        }

        //Second dot logic
        var secondDot = disciplinesAbilities.dot2;
        var secondDotOptions = secondDot.options;
        if (secondDotOptions !== undefined) {
          $(".row2 > .col2").html("<select></select>");
          for (property in secondDotOptions) {
            $(".row2 > .col2")
              .find("select")
              .append(
                '<option value="' +
                  `${secondDotOptions[property].name}` +
                  '">' +
                  `${secondDotOptions[property].name}` +
                  "</option>"
              );
          }
        } else {
          $(".row2 > .col2").text(secondDot.name);
        }

        //Third dot logic
        var thirdDot = disciplinesAbilities.dot3;
        var thirdDotOptions = thirdDot.options;
        if (thirdDotOptions !== undefined) {
          $(".row3 > .col2").html("<select></select>");
          for (property in thirdDotOptions) {
            $(".row3 > .col2")
              .find("select")
              .append(
                '<option value="' +
                  `${thirdDotOptions[property].name}` +
                  '">' +
                  `${thirdDotOptions[property].name}` +
                  "</option>"
              );
          }
        } else {
          $(".row3 > .col2").text(thirdDot.name);
        }

        //forth dot logic
        var forthDot = disciplinesAbilities.dot4;
        var forthDotOptions = forthDot.options;
        if (forthDotOptions !== undefined) {
          $(".row4 > .col2").html("<select></select>");
          for (property in forthDotOptions) {
            $(".row4 > .col2")
              .find("select")
              .append(
                '<option value="' +
                  `${forthDotOptions[property].name}` +
                  '">' +
                  `${forthDotOptions[property].name}` +
                  "</option>"
              );
          }
        } else {
          $(".row4 > .col2").text(forthDot.name);
        }

        //fifth dot logic
        var fifthDot = disciplinesAbilities.dot5;
        var fifthDotOptions = fifthDot.options;
        if (fifthDotOptions !== undefined) {
          $(".row5 > .col2").html("<select></select>");
          for (property in fifthDotOptions) {
            $(".row5 > .col2")
              .find("select")
              .append(
                '<option value="' +
                  `${fifthDotOptions[property].name}` +
                  '">' +
                  `${fifthDotOptions[property].name}` +
                  "</option>"
              );
          }
        } else {
          $(".row5 > .col2").text(fifthDot.name);
        }
      }
    });
  });
  //third column
  $("#disciplineList3").change(function () {
    var value = $("option:selected", this).text();
    $.each(discipline, function (objName) {
      var disciplineSelector = objName;
      var disciplinePath = discipline[disciplineSelector];
      var disciplineName = disciplinePath.name;
      if (disciplineName === value) {
        var disciplinesAbilities = disciplinePath.abilities;
        //First dot logic
        var firstDot = disciplinesAbilities.dot1;
        var firstDotOptions = firstDot.options;
        if (firstDotOptions !== undefined) {
          $(".row1 > .col3").html("<select></select>");
          for (property in firstDotOptions) {
            $(".row1 > .col3")
              .find("select")
              .append(
                '<option value="' +
                  `${firstDotOptions[property].name}` +
                  '">' +
                  `${firstDotOptions[property].name}` +
                  "</option>"
              );
          }
        } else {
          $(".row1 > .col3").text(firstDot.name);
        }

        //Second dot logic
        var secondDot = disciplinesAbilities.dot2;
        var secondDotOptions = secondDot.options;
        if (secondDotOptions !== undefined) {
          $(".row2 > .col3").html("<select></select>");
          for (property in secondDotOptions) {
            $(".row2 > .col3")
              .find("select")
              .append(
                '<option value="' +
                  `${secondDotOptions[property].name}` +
                  '">' +
                  `${secondDotOptions[property].name}` +
                  "</option>"
              );
          }
        } else {
          $(".row2 > .col3").text(secondDot.name);
        }

        //Third dot logic
        var thirdDot = disciplinesAbilities.dot3;
        var thirdDotOptions = thirdDot.options;
        if (thirdDotOptions !== undefined) {
          $(".row3 > .col3").html("<select></select>");
          for (property in thirdDotOptions) {
            $(".row3 > .col3")
              .find("select")
              .append(
                '<option value="' +
                  `${thirdDotOptions[property].name}` +
                  '">' +
                  `${thirdDotOptions[property].name}` +
                  "</option>"
              );
          }
        } else {
          $(".row3 > .col3").text(thirdDot.name);
        }

        //forth dot logic
        var forthDot = disciplinesAbilities.dot4;
        var forthDotOptions = forthDot.options;
        if (forthDotOptions !== undefined) {
          $(".row4 > .col3").html("<select></select>");
          for (property in forthDotOptions) {
            $(".row4 > .col3")
              .find("select")
              .append(
                '<option value="' +
                  `${forthDotOptions[property].name}` +
                  '">' +
                  `${forthDotOptions[property].name}` +
                  "</option>"
              );
          }
        } else {
          $(".row4 > .col3").text(forthDot.name);
        }

        //fifth dot logic
        var fifthDot = disciplinesAbilities.dot5;
        var fifthDotOptions = fifthDot.options;
        if (fifthDotOptions !== undefined) {
          $(".row5 > .col3").html("<select></select>");
          for (property in fifthDotOptions) {
            $(".row5 > .col3")
              .find("select")
              .append(
                '<option value="' +
                  `${fifthDotOptions[property].name}` +
                  '">' +
                  `${fifthDotOptions[property].name}` +
                  "</option>"
              );
          }
        } else {
          $(".row5 > .col3").text(fifthDot.name);
        }
      }
    });
  });
});
