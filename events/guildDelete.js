const Discord = require("discord.js");

module.exports = class {

    constructor (client) {
      this.client = client;
    }
    
    async run (guild) {
        
        let text = "Someone evicted me from **"+guild.name+"** with **"+guild.members.cache.filter((m) => !m.user.bot).size+"** Members (and "+guild.members.cache.filter((m) => m.user.bot).size+" bots)";

        // Sends log embed in the logs channel
        let embed = new Discord.MessageEmbed()
            .setAuthor(guild.name, guild.iconURL())
            .setColor("#B22222")
            .setDescription(text);
        this.client.channels.cache.get(this.client.config.support.logs).send(embed);

    }
}  