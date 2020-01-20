const Discord = require("discord.js"),
giveaways = require("discord-giveaways");

module.exports = class {

    constructor (client) {
        this.client = client;
    }

    async run () {

        let client = this.client;

        // Logs some informations using the logger file
        client.logger.log(`Loading a total of ${client.commands.size} command(s).`, "log");
        client.logger.log(`${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "ready");

        /* DiscordBots.org STATS */
        let discordbotsorg = require("../utils/discordbots.org.js");
        discordbotsorg.init(client);

        /* UNMUTE USERS */
        let checkUnmutes = require("../utils/checkUnmutes.js");
        checkUnmutes.init(client);

        /* SEND REMIND */
        let checkReminders = require("../utils/checkReminders.js");
        checkReminders.init(client);

        /* DAILY SHOP FORTNITE */
        let fortniteShop = require("../utils/fortniteShop.js");
        fortniteShop.init(client);

        /* AUTO UPDATE DOCS */
        let autoUpdateDocs = require("../utils/autoUpdateDocs.js");
        autoUpdateDocs.update(client);

        // Start the dashboard
        if(client.config.dashboard.enabled){
            client.dashboard.load(client);
        }

        // Start update of giveaways
        let giveawaysOptions = { updateCountdownEvery: 15000, ignoreIfHasPermission: [ "ADMINISTRATOR" ], storage: require("path").resolve()+"/giveaways.json" };
        giveaways.launch(client, giveawaysOptions);

    }
}  
