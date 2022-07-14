const discord = require("discord.js");
const simplydjs = require("simply-djs");
module.exports = {
    name: "tictactoe",
    description: "tictactoe",
    category: "Fun",
    aliases: ['tictactoe', 'ttt'],
    async execute(message, args, client) {
        simplydjs.tictactoe(message);
    }
}