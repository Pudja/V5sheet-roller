$(document).ready(function () {
    
var clans = {
    asamites: {
        name:"Banu Haqim",
        description:"The Banu Haqim, are traditionally seen by Western Kindred as dangerous assassins and diablerists, but in truth they are guardians, warriors, and scholars who seek to distance themselves from the Jyhad. &#013;Clan Disciplines: &#013;->Blood Sorcery &#013;->Celerity &#013;->Obfuscate &#013;Clan Weakness: Addicted to vampire blood"
    },
    caitiff: {
        name:"Caitiff",
        description:"Caitiff is a complicated term with two general meanings. The first meaning is more of a political term: those of a flawed or unknown lineage, who have been abandoned by their sires. &#013; The second and more biologically-oriented Caitiff, also known as the clanless, are rare Cainites that do not officially belong to any clan. &#013;Clan Disciplines: No inherent discipline &#013; Clan Weakness: No weakness:" 
    },
    brujah: {
        name:"Brujah",
        description:"Quick to anger and always passionate in the Modern Nights, they have been regaining their position as a clan of lofty philosophers and activists and are often pointed to as a clan of unruly rebels and roughnecks that should not be messed with.&#013;Clan Disciplines: &#013;->Celerity &#013;->Potence &#013;->Presence &#013;Clan Weakness: Easily prone to frenzy"
    },
    gangrel: {
        name:"Gangrel",
        description:"Nomads who hold closer ties to the wild places than most of their city-bound cousins, they are also closer to the animal aspect of the Beast.&#013;Clan Disciplines: &#013;->Animalism &#013;->Fortitude &#013;->Protean &#013;Clan Weakness: After frenzy they temporarely adopt an aspect of an animal(ex. dog ears, goat legs...)"
    },
    hecata: {
        name:"Hecata",
        description:"They are not a fully organic clan deriving from a single Antediluvian and an uninterrupted bloodline, but are made up of the Giovanni and the remnants of the old Clan Cappadocian and their related bloodlines; as well as the Nagaraja despite a lack of connection with Antediluvian.[2] Together, they represent a new, (mostly) unified Clan of Death comprising Kindred bloodlines who practice necromancy through the use of Oblivion. &#013;Clan Disciplines: &#013;->Auspex &#013;->Fortitude &#013;->Oblivion &#013;Clan Weakness: Feeding is extremly painfull for the victom",
    },
    lasombra: {
        name:"Lasombra",
        description:"Firm believers in the worthy ruling and the unworthy serving, the Lasombra have maintained their traditions even as they have turned the Sabbat to their own purposes. &#013;Clan Disciplines: &#013;->Dominate &#013;->Oblivion &#013;->Potence &#013;Clan Weakness: Cast no reflection",
    },
    malkavian: {
        name:"Malkavian",
        description:"Malkavians are an enigmatic and deeply disturbed group of Cainites. Due to their inherent clan weakness every last one of them is irredeemably insane in some form or another. Among the Kindred, some attribute their insanity to a curse of the blood forced upon them by Caine himself, while the Lunatics themselves actually call it a special blessing, a gift of insight. &#013;Clan Disciplines: &#013;->Auspex &#013;->Dominate &#013;->Obfuscate &#013;Clan Weakness: Crazy!!!",
    },
    nosferatu: {
        name:"Nosferatu",
        description:"The archetypal Nosferatu resembles Max Shreck's Count Orlok, though the curse has any number of variations. The Nosferatu are the spymasters of the dead, collecting information and selling it for a dear price. They are also the masters of the underground, living in the sewers for protection. &#013;Clan Disciplines: &#013;->Animalism &#013;->Obfuscate &#013;->Potence &#013;Clan Weakness: Very ugly; Visibly not humans(most of the time)",
    },
    ministy: {
        name:"The Ministry",
        description:"The Ministry, also called the Ministry of Set, Followers of Set, or Setites, are a clan of vampires who believe their founder was the Egyptian god Set. &#013;Clan Disciplines: &#013;->Obfuscate &#013;->Presence &#013;->Protean &#013;Clan Weakness: Extremly weakened by ligh",
    },
    thinBlood: {
        name:"Thin-Blood",
        description:"half-vampires and that is a generous description. they do not poses vampiric disciplines or weakness. &#013;Cland Discipline: &#013;-> Thin-Blood Alchemy &#013;Clan Weakness: Not a vampire in a vampire world",
    },
    toreador: {
        name:"Toreador",
        description:"The Toreador are a clan of vampires known for being some of the most beautiful, sensual, seductive, emotional and glamorous of the Kindred. &#013;Clan Disciplines: &#013;->Auspex &#013;->Celerity &#013;->Presence  &#013;Clan Weakness: They get entranced by the thing they found beautifull",
    },
    tremere: {
        name:"Tremere",
        description:"In the (comparatively) little time since their founding, the Warlocks have made incredible inroads within vampiric society and are arguably the most powerful clan in the modern nights. &#013;Clan Disciplines: &#013;->Auspex &#013;->Blood Sorcery &#013;->Dominate  &#013;Clan Weakness: One stepcloser to any blood bond",
    },
    ventrue: {
        name:"Ventrue",
        description:"The Ventrue have long been one of the proudest lines of vampires. Its members work hard to maintain a reputation for honor, genteel behavior, and leadership. &#013;Clan Disciplines: &#013;->Dominate &#013;->Fortitude &#013;->Presence  &#013;Clan Weakness: Can drink from only a certain kind of victom(ex. Blond people, pregnant women, those no older than 32...) ",
    }
}
    for( property in clans ){
        document.getElementById("clanList").innerHTML +=
        ' <option class="option" value=" ' + `${clans[property].name}` + ' " title=" ' + `${clans[property].description}` + ' "> ' + `${clans[property].name}` + ' </option>) '
        };
});
