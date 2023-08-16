
const citations = [
    "Dans l'obscurité de l'incertitude, la lumière de la connaissance guide nos pas.",
    "Les rêves d'aujourd'hui façonnent les réalités de demain, car la pensée forge la réalité.",
    "Le temps, ce flux inéluctable, sculpte nos vies comme un artiste invisible.",
    "Les frontières de la réalité sont définies par les limites de notre perception.",
    "L'âme humaine est un océan profond où les émotions dansent telle une marée éternelle.",
    "La sagesse est le trésor que l'on accumule lorsque l'on creuse dans les mines de l'expérience.",
    "Les questions sans réponses sont les étoiles qui guident la barque de notre quête de sens.",
    "La liberté réside dans la compréhension de soi, car seul celui qui se connaît peut être véritablement libre.",
    "Comme les feuilles qui tombent en automne, les souvenirs sont les vestiges de notre passage dans le jardin du temps.",
    "La beauté réside dans les yeux de celui qui contemple, car chaque regard est une interprétation unique."
];

export function citationCommand(interaction) {
    const randomCitation = citations[Math.floor(Math.random() * citations.length)];
    console.log(interaction.user.displayName, "a fait", interaction.commandName);
    interaction.reply(randomCitation);
}