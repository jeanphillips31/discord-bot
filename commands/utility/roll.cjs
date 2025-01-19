const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("roll")
        .setDescription("Roll a dice")
        .addStringOption(option =>
            option.setName("dice")
                .setDescription("The dice to roll")
                .setRequired(true)
                .addChoices(
                { name: "D10", value: "d10" },
                        { name: "D100", value: "d100" },
                        { name: "D1000", value: "d1000" },
            )),
    async execute(interaction) {
        const dice = interaction.options.getString("dice");
        let roll = 0;
        switch(dice) {
            case "d10":
                roll = 10;
                break;
            case "d100":
                roll = 100;
                break;
            case "d1000":
                roll = 1000;
                break;
        }
        await interaction.reply(`You rolled ${Math.floor(Math.random() * roll)}!`);
    }
}