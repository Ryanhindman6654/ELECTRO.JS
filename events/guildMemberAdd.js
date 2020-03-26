const Canvas = require("canvas"),
Discord = require("discord.js");
const { resolve } = require("path");
// Register assets fonts
Canvas.registerFont(("https://cdn.glitch.com/5c8b778c-3aaa-4253-b149-acb8c9267727%2Ftheboldfont.ttf?v=1585231410543"), { family: "Bold" });
Canvas.registerFont(("https://cdn.glitch.com/5c8b778c-3aaa-4253-b149-acb8c9267727%2FSketchMatch.ttf?v=1585231402165"), { family: "SketchMatch" });

const applyText = (canvas, text, defaultFontSize) => {
    const ctx = canvas.getContext("2d");
    do {
        ctx.font = `${defaultFontSize -= 10}px Bold`;
    } while (ctx.measureText(text).width > 600);
    return ctx.font;
};

module.exports = class {

    constructor (client) {
        this.client = client;
    }

    async run (member) {
    
        member.guild.fetch().then(async (guild) => {

            let guildData = await this.client.findOrCreateGuild({ id: guild.id });

            let memberData = await this.client.findOrCreateMember({ id: member.id, guildID: guild.id });
            if(memberData.mute.muted && memberData.mute.endDate > Date.now()){
                guild.channels.forEach((channel) => {
                    channel.updateOverwrite(member.id, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                        CONNECT: false
                    }).catch((err) => {});
                });
            }

            // Check if the autorole is enabled
            if(guildData.plugins.autorole.enabled){
                member.roles.add(guildData.plugins.autorole.role).catch((err) => {});
            }
    
            // Check if welcome message is enabled
            if(guildData.plugins.welcome.enabled){
                let channel = member.guild.channels.get(guildData.plugins.welcome.channel);
                if(channel){
                    let message = guildData.plugins.welcome.message
                    .replace(/{user}/g, member)
                    .replace(/{server}/g, guild.name)
                    .replace(/{membercount}/g, guild.memberCount);
                    if(guildData.plugins.welcome.withImage){
                        let canvas = Canvas.createCanvas(1024, 450),
                        ctx = canvas.getContext("2d");
                                            
                        // Background language
                        let background = await Canvas.loadImage("https://cdn.glitch.com/5c8b778c-3aaa-4253-b149-acb8c9267727%2Fgreetings_background.png?v=1585235946547");
                        // This uses the canvas dimensions to stretch the image onto the entire canvas
                        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
                        // Draw username
                        ctx.fillStyle = "#ffffff";
                        ctx.font = applyText(canvas, member.user.username, 48);
                        ctx.fillText(member.user.username, canvas.width - 660, canvas.height - 248);
                        // Draw server name
                        ctx.font = applyText(canvas, text, 53);
                        ctx.fillText(member.user.guild, canvas.width - 690, canvas.height - 65);
                        // Draw discriminator
                        ctx.font = "40px Bold";
                        ctx.fillText(member.user.discriminator, canvas.width - 623, canvas.height - 178);
                        // Draw number
                        ctx.font = "22px Bold";
                        ctx.fillText(member.user.guild.membercount, 40, canvas.height - 50);
                        // Draw # for discriminator
                        ctx.fillStyle = "#44d14a";
                        ctx.font = "75px SketchMatch";
                        ctx.fillText("#", canvas.width - 690, canvas.height - 165);
                        // Draw Title with gradient
                        ctx.font = "90px Bold";
                        ctx.strokeStyle = "#1d2124";
                        ctx.lineWidth = 15;
                        ctx.strokeText('WELCOME', canvas.width - 620, canvas.height - 330);
                        var gradient = ctx.createLinearGradient(canvas.width - 780, 0, canvas.width - 30, 0);
                        gradient.addColorStop(0, "#e15500");
                        gradient.addColorStop(1, "#e7b121");
                        ctx.fillStyle = gradient;
                        ctx.fillText('WELCOME', canvas.width - 620, canvas.height - 330);
                
                        // Pick up the pen
                        ctx.beginPath();
                        //Define Stroke Line
                        ctx.lineWidth = 10;
                        //Define Stroke Style
                        ctx.strokeStyle = "#03A9F4";
                        // Start the arc to form a circle
                        ctx.arc(180, 225, 135, 0, Math.PI * 2, true);
                        // Draw Stroke
                        ctx.stroke();
                        // Put the pen down
                        ctx.closePath();
                        // Clip off the region you drew on
                        ctx.clip();
                    
                        let avatar = await Canvas.loadImage(member.user.avatarURL);
                        // Move the image downwards vertically and constrain its height to 200, so it"s a square
                        ctx.drawImage(avatar, 45, 90, 270, 270)
                        msg.channel.send({
      files: [{
        attachment: canvas.toBuffer(),
        name: "coronavirusavpink.png"
      }]
    }); 
                        channel.send(message);
                    }
                }
            }

        });
    }

};
