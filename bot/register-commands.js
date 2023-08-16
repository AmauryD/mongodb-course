import { REST, Routes, SlashCommandBuilder } from "discord.js";

export async function registerCommands(token, clientId) {
    const COMMANDS = [
        {
            name: "citation",
            description: "envoie une citation d'un philosophe connu ou méconnu"
        },
        {
            name: "clear_citations",
            description : "explose toutes les citations"
        },
        new SlashCommandBuilder()
            .setName('add_citation')
            .setDescription('Ajoute une citation')
            .addStringOption(option =>
                option.setName('citation')
                    .setDescription('La citation')
            ),
        new SlashCommandBuilder()
            .setName('clear_citation')
            .setDescription('Supprime des citations selon une phrase de recherche')
            .addStringOption(option =>
                option.setName('search_phrase')
                    .setDescription('La recherche')
            )
    ];
    
    const rest = new REST({ version: '10' }).setToken(token);
    // ça enregistre les commandes pour votre bot à discord
    await rest.put(Routes.applicationCommands(clientId), { body: COMMANDS });
}