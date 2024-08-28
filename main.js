import variables from "./variables.js";

const capitalizeWord = (str) => {
    const result = str.charAt(0).toUpperCase() + str.slice(1);
    return result;
};

const sentences = [
    `Once, in a quiet place called Little Whinging, there lived a ${
        variables.kristina || "young"
    } boy named Harry Potter, raised by his ${
        variables.jessica || "cruel"
    } Aunt Petunia, Uncle Vernon, and their ${
        variables.mingxia || "spoiled"
    } son, Dudley. They were very ${
        variables.stephen || "mean"
    } to Harry, making him ${
        variables.emma || "sleep"
    } in a tiny cupboard under the stairs.`,
    `\n`,
    `On Harry’s eleventh birthday, a ${
        variables.alicia || "giant"
    } named Hagrid knocked on the door, saying, "You’re a ${
        variables.yang || "wizard"
    }, Harry!" This news surprised Harry, who thought he was just a ${
        variables.heela
    } boy. Hagrid explained Harry’s parents were famous ${
        variables.yang || "wizard"
    }s and hadn't died due to a ${
        variables.chelsea || "car crash"
    }. As a baby, Harry survived an attack by a dark ${
        variables.yang || "wizard"
    } named Voldemort, who left him with a lightning-shaped scar on his ${
        variables.brianna || "forehead"
    }, earning him the title “the Boy Who ${
        capitalizeWord(variables.kate) || "Lived"
    }.”`,
    `\n`,
    `Hagrid took Harry to a magical place called ${
        variables.annie || "Diagon Alley"
    }, where Harry discovered a small fortune from his parents. He saw ${
        variables.hana || "wands"
    }, spellbooks, and bought a white ${variables.saba || "owl"} named Hedwig.`,
    `\n`,
    `On the ${
        variables.katarina || "train"
    } to Hogwarts, Harry met Ron Weasley, a friendly boy with red hair, and Hermione Granger, a ${
        variables.yuanshu || "clever"
    } girl who loved to ${
        variables.wendy || "read"
    }. At Hogwarts, the Sorting ${
        capitalizeWord(variables.abraham) || "Hat"
    } briefly considered Slytherin but chose Gryffindor for Harry’s ${
        variables.scarlett || "bravery"
    }. Harry excelled in spells, potions, and Quidditch, a sport played on ${
        variables.jenani || "broomsticks"
    }.`,
    `\n`,
    `Harry, Ron, and Hermione discovered that a ${
        capitalizeWord(variables.yogina) || "Philosopher"
    }'s ${
        capitalizeWord(variables.jelena) || "Stone"
    } was hidden in the school, capable of making someone ${
        variables.abdulkabir || "live"
    } forever. They believed it was at risk of being stolen to restore Voldemort’s power.`,
    `\n`,
    `They snuck past Fluffy, a giant three-headed ${
        variables.mashal || "dog"
    }, and faced challenges: the ${variables.lily || "Devil"}’s Snare, flying ${
        variables.justin || "key"
    }s, and a ${
        variables.tami || "Chess"
    } board where they had to play as the pieces. Harry found Professor Quirrell, not Snape, in the last room, revealing Voldemort’s ${
        variables.shipa || "face"
    } on the back of his head.`,
    `\n`,
    `Quirrell tried to take the ${
        variables.jelena || "Stone"
    } from Harry, but burned upon touching him due to a magical protection of ${
        variables.michelle || "love"
    }. Harry blacked out in the chaos.`,
    `\n`,
    `Waking up in the hospital wing, Harry found out that the ${
        capitalizeWord(variables.jelena) || "Stone"
    } was destroyed to prevent anyone from misusing it. Harry learned that ${
        variables.michelle || "love"
    } and ${variables.huiyi || "friendship"} are the greatest powers of all.`,
    `\n`,
    `When the school year ended, Gryffindor won the House Cup. Harry returned to the Dursleys, no longer just the boy in the cupboard, but a young ${
        variables.yang || "wizard"
    } with a whole world of magic waiting for him. And so, his adventures were just beginning.`,
];

const storyDiv = document.querySelector(".story");
document.title = `Harry Potter and the ${
    capitalizeWord(variables.yogina) || "Philosopher"
}'s ${capitalizeWord(variables.jelena) || "Stone"}`;

const title = document.querySelector(".title");
title.innerText = `Harry Potter and the ${
    capitalizeWord(variables.yogina) || "Philosopher"
}'s ${capitalizeWord(variables.jelena) || "Stone"}`;

sentences.forEach((sentence) => {
    const p = document.createElement("p");
    p.innerText = sentence;
    storyDiv.appendChild(p);
});
