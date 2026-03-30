const { Client, GatewayIntentBits } = require('discord.js');
const sqlite3 = require('sqlite3').verbose();
require('dotenv').config();

const db = new sqlite3.Database('./sentiment.db');
const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessageReactions] 
});

db.run("CREATE TABLE IF NOT EXISTS sentiment (message_id TEXT, upvotes INTEGER, downvotes INTEGER, timestamp DATETIME)");

client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.partial) await reaction.fetch();
    
    const { id } = reaction.message;
    const emoji = reaction.emoji.name;

    // Filter: Only track sentiment on messages from the Treasury Bot
    if (reaction.message.author.id !== process.env.TREASURY_BOT_ID) return;

    if (emoji === '👍') {
        db.run("UPDATE sentiment SET upvotes = upvotes + 1 WHERE message_id = ?", [id]);
    } else if (emoji === '👎') {
        db.run("UPDATE sentiment SET downvotes = downvotes + 1 WHERE message_id = ?", [id]);
    }
});

client.login(process.env.DISCORD_TOKEN);
