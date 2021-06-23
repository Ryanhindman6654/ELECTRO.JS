let lang = "spanish";

let c = require("../config.js");
let e = c.emojis;

// This class is used to store languages strings

module.exports = class {
    constructor() {
		this.language = {

			// Utils
			PREFIX_INFO: (prefix) => `mi prefijo en este servidor es \`${prefix}\``,
			UTILS: {
				YES: "Si",
				NO: "No",
				USER: "Usuario",
				LEVEL: "Nivel",
				REP: "Reputación",
				CREDITS: "Créditos",
				VICTORY: "Victoria",
				DEFEAT: "Derrota",
				PAGE: "Página",
				TOTAL_SERVERS: "Servidores totales",
				MEMBERS: "Miembros",
				STATUS: {
					"dnd": "Do not disturb",
					"idle": "AFK (idle)",
					"offline": "Desconectado",
					"online": "En línea"
				},
				NO_REASON_PROVIDED: "no se proporcionó ninguna razón",
				UNDEFINED: "Sin definir",
				PLEASE_WAIT: `${e.loading} | Porfavor espera...`,
				PREFIX: "Prefijo",
				CUSTOM_COMMANDS: "Comandos personalizados",
				ANDMORE: "**y más...**",
				TITLE: "Titulo",
				AUTHOR: "Autor",
				SIGN_OUT: "Desconectar",
				YOUR_PROFILE: "Tu perfil",
				UPDATE: "Actualizar",
				SERVERS: "Servidores",
				MANAGE: "Preparar",
				STATS: "Estadísticas",
				COMMANDS: "Comandos",
				HOME: "Home",
				SANCTIONS: "Sanciones",
				FRENCH: "French",
				ENGLISH: "English",
				NO_CHANNEL: "Sin canal",
				PROFILE: "Perfil",
				LEADERBOARD: "Ranking",
				GLOBAL_LEADERBOARD: "Ranking global",
				ECONOMY: "Econmía",
				KNOW_MORE: "Más información",
				SETTINGS: "Ajustes",
				SERVERS_SETTINGS: "Ajustes de servidores",
				GLOBAL_STATS: "Global",
				COMMANDS_USAGE: "Uso de comando",
				WEBSITE: "Página",
				DISCONNECT: "Desconectado",
				STREAK: "Racha"
			},

			/* DBL VOTES */

			VOTE_THANKS: (user) => `:arrow_up: Hola ${user.toString()}, gracias por votar!\nTu pemio: 40 créditos!`,
			VOTE_LOGS: (user) => `:arrow_up: **${user.tag}** (\`${user.id}\`) ha votado por **WaterLight** y obtuvo **40** créditos, gracias!\nhttps://discordbots.org/bot/557445719892688897/vote`,

			/* DEFAULT MESSAGES */
			NO_DESCRIPTION_PROVIDED: "No se ha proporcionado ninguna descripción",
			NO_USAGE_PROVIDED: "No se ha proporcionado ningún mensaje",
			NO_EXAMPLE_PROVIDED: "No se ha proporcionado ningún ejemplo",

			// ERROR MESSAGES

			ERR_COMMAND_DISABLED: `${e.error} | Este comando está actualmente desactivado!`,
			ERR_OWNER_ONLY: `${e.error} | Solo ${c.owner.name} puede utulizar este comando!`,
			ERR_INVALID_CHANNEL: `${e.error} | Porfavor menciona un canal valido!`,
			ERR_INVALID_ROLE: `${e.error} | Porfavor menciona a un rol valido!`,
			ERR_INVALID_MEMBER: `${e.error} | Porfavor menciona a un usuario valido!`,
			ERR_INVALID_NUMBER: (nan) => `${e.error} | \`${nan}\` no es un número valido!`,
			ERR_INVALID_NUMBER_MM: (min, max) => `${e.error} Porfavor indica un numero entre ${min} y ${max}!`,
			ERR_INVALID_TIME: `${e.error} | ¡Debes ingresar una hora válida! Unidades válidas: \`s\`, \`m\`, \`h\`, \`d\`, \`w\`, \`y\``,
			ERR_INVALID_ID: `${e.error} | Porfavor pon una ID valida!`,

			ERR_MISSING_BOT_PERMS: (perms) => `${e.error} | Nesecito los siguientes permisos para ejecutar el comando: \`${perms}\``,
			ERR_MISSING_MEMBER_PERMS: (perm) => `${e.error} | No tienes los permisos necesarios para ejecutar este comando (\`${perm}\`)`,
			ERR_NOT_NSFW: `${e.error} | Necesitas ir a un canal NSFW para ejecutar el comando!`,
			ERR_GUILDONLY: `${e.error} | Este comando solo está disponibles en servidores!`,
			ERR_UNAUTHORIZED_CHANNEL: (channel) => `${e.error} | Los comandos están prohibidos en ${channel} !`,
			ERR_BAD_PARAMETERS: (cmd, prefix) => `${e.error} | Por favor verifique los parámetros de los comandos. Mira los ejemplos escribiendo \`${prefix}help ${cmd}\` !`,
			ERR_ROLE_NOT_FOUND: (role) => `${e.error} | Ningún rol encontrado con \`${role}\` !`,
			ERR_CHANNEL_NOT_FOUND: (channel) => `${e.error} | Ningún canal encontrado con \`${channel}\``,
			ERR_YES_NO: `${e.error} | Necesitas responder con "yes" o "no"!`,
			ERR_EVERYONE: `${e.error} | No tienes permitido mencionar a everyone o here.`,
			ERR_BOT_USER: `${e.error} | Ese usuario es un bot!`,
			ERR_GAME_ALREADY_LAUNCHED: `${e.error} | Ya se está ejecutando un juego en este servidor!`,
			ERR_A_GAME_ALREADY_LAUNCHED: `${e.error} | Debido a los retrasos y errores debidos a las palabras de búsqueda y al número, es imposible ejecutar dos juegos al mismo tiempo, incluso si están en dos servidores diferentes. Actualmente hay un juego ejecutándose en otro servidor, así que espere unos minutos e intente nuevamente. Lo sentimos, pero la gente estaba abusando de este comando enviándolo por correo no deseado en muchos servidores.`,
			ERR_OCCURENCED: `${e.error} | Un error ocurrió, porfavor intenta de nuevo en unos minutos.`,
			ERR_CMD_COOLDOWN: (seconds) => `${e.error} | Necesitas esperar **${seconds}** segundo(s) para poder ejecutar este comando nuevamente!`,
			ERR_SANCTION_YOURSELF: `${e.error} | No te puedes sancionar a ti mismo!`,

			/* PING COMMAND */

			// Utils
			PING_DESCRIPTION: "Muestra latencia de bot",
			PING_USAGE: "ping",
			PING_EXAMPLES: "$ping",
			// Content
			PING: (ms) => `${e.success} | Pong! Mi latencia es de \`${ms}\` ms !`,

			/* HELP COMMAND */

			// Utils
			HELP_DESCRIPTION: "Muestra la ayuda de comandos o la ayuda de un comando en particular",
			HELP_USAGE: "help (comando)",
			HELP_EXAMPLES: "$help\n$help ping",
			// Errors
			HELP_ERR_NOT_FOUND: (cmd) => `${e.error} | No se puede encontrar el comando \`${cmd}\`!`,
			HELP_ERR_CMD_CUSTOMIZED: (cmd) => `${e.error} | El comando \`${cmd}\` no tiene ayuda por es customizado.`,
			// Content
			HELP_EDESCRIPTION: (prefix) => `● Para tener más informacion sobre un comando escribe \`${prefix}help <comando>\`!`,
			HELP_TITLE: `${c.botname} | Comandos`,
			HELP_NO_ALIASES: "Sin alias.",
			// Headings
			HELP_HEADINGS: [
				"Ayuda :",
				`${e.help} Uso :`,
				`${e.search} Ejemplos :`,
				`${e.folder} Grupo :`,
				`${e.desc2} Descripción :`,
				`${e.add} Alias :`,
				`${e.crown} Permisos :`
			],

			/* GITHUB COMMAND */

			// Utils
			GITHUB_DESCRIPTION: `Muestra la información de ${c.botname}!`,
			GITHUB_USAGE: "github",
			GITHUB_EXAMPLES: "$github",
			// Content
			GITHUB_DESC: `[Click aquí para acceder al github de ${c.botname}](https://github.com/nachoskeree)`,
			// Headings
			GITHUB_HEADERS: [
				"Strellas :star:",
				"Forks :tools:",
				"Idioma :computer:",
				"Fundador :crown:"
			],

			/* HASTEBIN COMMAND */

			// Utils
			HASTEBIN_DESCRIPTION: "Sube tu texto a un hastebin !",
			HASTEBIN_USAGE: "hastebin [text]",
			HASTEBIN_EXAMPLES: "$hastebin Hello World!",
			// Errors
			HASTEBIN_ERR_TEXT: `${e.error} | Necestias poner un texto valido!`,
			// Content
			HASTEBIN_TITLE: `Subida completada!`,

			/* ASCII COMMAND */

			// Utils
			ASCII_DESCRIPTION: "Convierte tu texto en caracteres ascii!",
			ASCII_USAGE: "ascii [texto]",
			ASCII_EXAMPLES: "$ascii Hey !",
			// Errors
			ASCII_ERR_TEXT: `${e.error} | Porfavor pon un texto valido (menos de 20 carácteres)!`,

			/* FINDWORDS COMMAND */

			// Utils
			FINDWORDS_DESCRIPTION: "Comienza un juego de encontrar palabras!",
			FINDWORDS_USAGE: "findwords",
			FINDWORDS_EXAMPLES: "$findwords",
			// Errors
			FINDWORDS_ERR_INVALID_WORD: (member) => `${e.error} | ${member} tu palabra es invalida!`,
			FINDWORDS_ERR_NO_WINNER: `${e.warn} | No puedo definir ningún ganador porque no se han encontrado palabras de todos lados!`,
			FINDWORDS_ERR_NO_WINNER_GAME: `${e.error} | ¡Nadie pudo encontrar palabras!`,
			// Content
			FINDWORDS_TIMER: `${e.warn} | El juego empieza en 10 segundos!`,
			FINDWORDS_QUESTION: (word) => `${e.warn} | 20 segundos para encontrar una palabra que contenga "**${word}**" !`,
			FINDWORDS_CONGRATS: (winner) => `${e.success} | Bien hecho <@${winner}> ! Tu palabra es válida y fuiste el más rápido!`,
			FINDWORDS_STATS: (username, games, time, number, members) => `:tada: | ${username} gano el juego !\n\n**Stadisticas sobre el juego: **\n__**Tiempo**__: ${time}\n__**Número de participantes**__ : ${number}\n__**Participantes**__ : \n${members}`,
			FINDWORDS_MONEY: (member) => `${member} gana 15 créditos! :tada:`,

			/* NUMBER COMMAND */

			// Utils
			NUMBER_DESCRIPTION: "Encuentra el número!",
			NUMBER_USAGE: "number",
			NUMBER_EXAMPLES: "$number",
			// Content
			NUMBER_START: `${e.warn} | Número determinado, puedes comenzar!`,
			NUMBER_HIGHER: (number, author) => `${author} | El número es más **grande** que \`${number}\` !`,
			NUMBER_SMALLER: (number, author) => `${author} | El número es más **chico** que \`${number}\` !`,
			NUMBER_CONGRATS: (member) => `<@${member}> ha ganado 10 créditos!`,
			NUMBER_STATS: (user, number, time, nb, members) => `:tada: | ${user} encontró el número! Fue el número __**${number}**__ !\n\n\n**Estadisticas sobre el juego: **\n__**Tiempo**__: ${time}\n__** Número de participantes**__ : ${nb}\n__**Participantes**__ : \n${members}`,
			// Errors
			NUMBER_DEFEAT: (number) => `${e.error} | ¡Nadie pudo encontrar el número! Era el número ${number} !`,

			/* RANDOM COMMAND */

			// Utils
			RANDOM_DESCRIPTION: "Elige al azar una de las opciones que me das!",
			RANDOM_USAGE: "random [elección1/elección2/etc...]",
			RANDOM_EXAMPLES: "$random Fire/Wind/Water",
			// Errors
			RANDOM_ERR_CHOICES: `${e.error} | Debe ingresar más de dos opciones!`,
			RANDOM_ERR_BLANK: `${e.error} | Una de sus opciones parece estar vacía ... Por favor, intente nuevamente!`,
			// Content
			RANDOM_CHOOSED: `${e.success} | Aqui esta mi eleccion:`,
			RANDOM_WAIT: `${e.loading} | Elección en progreso...`,

			/* QUOTE COMMAND */

			// Utils
			QUOTE_DESCRIPTION: "Cita un mensaje en el canal!",
			QUOTE_USAGE: "quote [messageID] [channel]",
			QUOTE_EXAMPLES: "$quote 596018101921906698\n$quote 596018101921906698 573508780520898581\n$quote 596018101921906698 #blabla",
			// Errors
			QUOTE_ERR_NOT_FOUND: `${e.error} | Ningún mensaje tiene esa ID.`,
			QUOTE_ERR_NOT_FOUND_CHANNEL: (channel) => `${e.error} | Ningún canal encontado con la ID ${channel} !`,

			/* INVITATIONS COMMAND */

			// Utils
			INVITATIONS_DESCRIPTION: "Muestra el número de personas que ha invitado al servidor.!",
			INVITATIONS_USAGE: "invitations (@member)",
			INVITATIONS_EXAMPLES: "$invitations\n$invitations @Jaime#5311",
			// Errors
			INVITATIONS_ERR_NO_INVITE: (member) => `${e.error} | ${member ? member.user.username : "Tu"} no has invitado nadie a este servidor!`,
			// Content
			INVITATIONS_CODE: (invite) => `**${invite.code}** (${invite.uses} usos) | ${invite.channel}`,
			// Headings
			INVITATIONS_TITLE: (member, msg) => `Información sobre las invitaciones de ${member} en ${msg.guild.name}`,
			INVITATIONS_FIELDS: (total) => [
				"👥 Personas invitadas",
				"🔑 Códigos",
				`${total} miembros`
			],

			/* ACHIEVEMENTS COMMAND */

			// Utils
			ACHIEVEMENTS_DESCRIPTION: "Muestra la lista de todos los logros!",
			ACHIEVEMENTS_USAGE: "achievements",
			ACHIEVEMENTS_EXAMPLES: "$achievements",
			// Content
			ACHIEVEMENTS_DESC: [
				"Write your first command!",
				"Claim 10 times your salary!",
				"Find your half and marry!",
				"Win 3 times in a row in slots!",
				"Keep WaterLight alive by tipping!",
				"Reach 20 reputation points!",
				"Invite WaterLight on your server!"
			],
			ACHIEVEMENTS_TITLE: "🔥 Logros",
			ACHIEVEMENTS_PROGRESS: (progressData) => `Progreso: ${progressData.now}/${progressData.total} (${Math.round(100 * (progressData.now/progressData.total))}%)`,

			/* TCL COMMAND */

			// Utils
			TCL_DESCRIPTION: "Mostrar el último tweet de @thecodinglove !",
			TCL_USAGE: "tcl",
			TCL_EXAMPLES: "$tcl",
			// Content
			TCL_TITLE: "🔥 El último tweet de @thecodinglove !",

			/* SETAFK COMMAND */

			// Utils
			SETAFK_DESCRIPTION: "Ponte en AFK (los miembros que lo mencionen recibirán un mensaje)",
			SETAFK_USAGE: "setafk [razón]",
			SETAFK_EXAMPLES: "$setafk Estoy desarollando a Fire!",
			// Errors
			SETAFK_ERR_REASON: `${e.error} | Porfavor pon una razón!`,
			// Content
			SETAFK_SUCCESS: (reason) => `${e.success} | Pasaste a AFK (razón: ${reason})`,
			// Others
			AFK_DELETED: `${e.warn} | Su AFK acaba de ser eliminado!`,
			AFK_MEMBER: (user, reason) => `${e.warn} | **${user.tag}** está ahora AFK Por:\n\`\`\`${reason}\`\`\``,

			/* REMINDME COMMAND */

			// Utils
			REMINDME_DESCRIPTION: "Define un recordatorio!",
			REMINDME_USAGE: "remindme [razón]",
			REMINDME_EXAMPLES: "$remindme 24h Work command\n$remindme 3m Take the pasta out of the pan!",
			// Errors
			REMINDME_ERR_MESSAGE: `${e.error} | Tienes que poner un comando, el cual será enviado cuando termine el tiempo!`,
			// Content
			REMINDME_SAVED: `${e.success} | Recordatorio correctamente registrado, recibirá un mensaje al final del tiempo!`,
			REMINDME_TITLE: `${c.botname} Recordatorio`,
			REMINDME_FIELDS: [
				"Creado",
				"Message"
			],

			/* USERINFO COMMAND */

			// Utils
			USERINFO_DESCRIPTION: "Muestra información del usuario!",
			USERINFO_USAGE: "userinfo (@user/userID)",
			USERINFO_EXAMPLES: "$userinfo\n$userinfo @Jaime#5311\n$userinfo 579435775696044077",
			// Errors
			USERINFO_ERR_ID: (id) => `${e.error} | Ningún usuario tiene la ID  \`${id}\` !`,
			// Content
			USERINFO_FIELDS: [
				":man: Nombre",
				`${e.discriminator} Discriminador`,
				`${e.bot} Robot`,
				`${e.avatar} Avatar`,
				`${e.calendar} Creación`,
				`${e.games} Juego`,
				`${e.status.online} Status`,
				`${e.up} Rol`,
				`${e.calendar2} Entrada`,
				`${e.pencil} Nickname`,
				`${e.roles} Roles`,
				`${e.color} Color`,
				`${e.desc} Descripción`,
				`${e.stats} Stats`,
				`${e.link} Links`
			],
			USERINFO_NO_GAME: "Sin juego",
			USERINFO_NO_ROLE: "Sin roles",
			USERINFO_MORE_ROLES: (nb) => ` y ${nb} roles más`,
			USERINFO_NO_NICKNAME: "Sin apodo",
			USERINFO_LINKS: (discord, invite, github, website) => `${discord ? `[Soporte](https://discord.gg/${discord})\n` : ""}[Invitación](${invite})\n${github ? `[Github](${github})\n` : ""}${website ? `[Página Web](${website})` : ""}`,
			USERINFO_STATS: (votes, servers, shards, lib) => `**${votes}** votos (Discordbots.org)\n**${servers}** servidores\n**${shards.length === 0 ? "No" : shards.length}** shards\nHecho con **${lib}**`,

			/* SERVERINFO COMMAND */

			// Utils
			SERVERINFO_DESCRIPTION: "Obtiene información sobre el servidor!",
			SERVERINFO_USAGE: "serverinfo [ID/Nombre]",
			SERVERINFO_EXAMPLES: "$serverinfo WaterLight\n$serverinfo",
			// Content
			// Headings
			SERVERINFO_HEADINGS:[
				`${e.title} Nombre`,
				`${e.calendar} Creación`,
				`${e.users} Miembros`,
				`${e.channels} Canales`,
				`${e.afk} Canal de AFk`,
				`${e.id} ID`,
				`${e.crown} Fundador`,
				`${e.boost} Boosts`
			],
			SERVERINFO_MEMBERCOUNT: (members) => `${members.filter((m) => !m.user.bot).size} miembros | ${members.filter((m) => m.user.bot).size} bots`,
			SERVERINFO_NO_AFK: "Sin canal de AFK",
			SERVERINFO_CHANNELS: (channels) => `${channels.filter((ch) => ch.type === "voice").size} canales de voz | ${channels.filter((ch) => ch.type === "text").size} canales de texto | ${channels.filter((ch) => ch.type === "category").size} categorias`,

			/* MENTIONROLE COMMAND */

			// Utils
			MENTIONROLE_DESCRIPTION: "Menciona un rol y luego desactiva la posibilidad de que sea mencionado",
			MENTIONROLE_USAGE: "mentionrole [nombre]",
			MENTIONROLE_EXAMPLES: "$mentionrole Members",
			// Errors
			MENTIONROLE_NOT_FOUND: `${e.error} | Necesitas escribir un rol para mencionar!`,

			/* UNBAN COMMAND */

			// Utils
			UNBAN_DESCRIPTION: "Desbanea a un usuario del servidor!",
			UNBAN_USAGE: "unban [userID/user#0000]",
			UNBAN_EXAMPLES: "$unban 579435775696044077\n$unban Jaime#5311",
			// Errors
			UNBAN_ERR_ID: (id) => `${e.error} | Ningún usuario de discord tiene la ID \`${id}\` !`,
			UNBAN_ERR_NOT_BANNED: (user) => `${e.error} | **${user.username}** no está baneado!`,
			// Content
			UNBAN_SUCCESS: (user, msg) => `${e.success} | **${user.username}** ha sido desbaneado de **${msg.guild.name}** !`,

			/* EVAL COMMAND */

			// Utils
			EVAL_DESCRIPTION: "Executes the code",
			EVAL_USAGE: "eval [code]",
			EVAL_EXAMPLES: "$eval message.channel.send('Hey');",

			/* GETINVITE COMMAND */

			// Utils
			GETINVITE_DESCRIPTION: "Generates an invitation to the server in question. Make sure you make good use of this command.",
			GETINVITE_USAGE: "getinvite [ID/Name]",
			GETINVITE_EXAMPLES: "$getinvite WaterLight\n$getinvite 565048515357835264",
			// Errors
			GETINVITE_ERR_NO_GUILD: (search) => `${e.error} | No server found (search: ${search})`,

			/* SUGGEST COMMAND */

			// Utils
			SUGGEST_DESCRIPTION: "Manda una sugerencia al canal de sugerencias!",
			SUGGEST_USAGE: "suggest [mensaje]",
			SUGGEST_EXAMPLES: "$suggest Nuevo canal #spam !",
			// Errors
			SUGGEST_ERR_NO_CHANNEL: `${e.error} | Todavia no hay un canal de sugerencias definido!`,
			SUGGEST_ERR_NO_SUGG: `${e.error} | Porfavor pon una sugerencia!`,
			// Headings
			SUGGEST_HEADINGS: [
				"Autor",
				"Fecha",
				"Contenido"
			],
			// Content
			SUGGEST_TITLE: (user) => `Sugerencia - ${user.tag}`,
			SUGGEST_SUCCESS: (channel) => `${e.success} | Tu sugerencia fue enviada al canal ${channel} !`,


			/* INVITE COMMAND */

			// Utils
			INVITE_DESCRIPTION: `Invita a ${c.botname}!`,
			INVITE_USAGE: "invite (copy)",
			INVITE_EXAMPLES: "$invite\n$invite copy",
			// Content
			INVITE_TITLE: "Links Principales",
			INVITE_DESC: (prefix) => `Type \`${prefix}invite copy\` para copiar el link!`,
			INVITE_HEADINGS: [
				`${e.add} Invita a ${c.botname}`,
				`${e.vote} Vota por ${c.botname}`,
				`${e.help} Soporte`
			],

			/* SHORTURL COMMAND */

			// Utils
			SHORTURL_DESCRIPTION: "Haz que tu link sea mas pequeño!",
			SHORTURL_USAGE: "shorturl [url]",
			SHORTURL_EXAMPLES: "$shorturl https://google.fr",
			// Errors
			SHORTURL_ERR_INVALID_URL: `${e.error} | Porfavor, ingresa un link URL válido!`,

			/* MINECRAFT COMMAND */

			// Utils
			MINECRAFT_DESCRIPTION: "Obtiene información sobre servidores de minecraft!",
			MINECRAFT_USAGE: "minecraft [ip]",
			MINECRAFT_EXAMPLES: "$minecraft mc.hypixel.net",
			// Errors
			MINECRAFT_ERR_IP: `${e.error} | Porfavor, escribe una IP!`,
			MINECRAFT_ERR_OFFLINE: `${e.error} | Ese servidor está fuera de servicio, o está bloqueando la entrada.!`,
			// Content
			MINECRAFT_ONLINE: "En Línea",
			MINECRAFT_OFFLINE: "Fuera de Línea",
			MINECRAFT_PLAYERS: (nb) => `${nb} jugador(es)`,
			// Headings
			MINECRAFT_HEADINGS: (ip) => [
				`Informaci´´on sobre ${ip}`,
				`${e.version} Versión`,
				`${e.minecraft} Conectadas`,
				`${e.users} Máximo`,
				`${e.status.online} Status`,
				`${e.ip} IP`
			],

			/* STAFF COMMAND */

			// Utils
			STAFF_DESCRIPTION: "Obtiene la lista de los staffs del servidor!",
			STAFF_USAGE: "staff",
			STAFF_EXAMPLES: "$staff",
			// Content
			STAFF_TITLE: (guildName) => `Staff de ${guildName}`,
			STAFF_HEADINGS: {
				ADMIN: "Administradores",
				MOD: "Moderadores"
			},
			STAFF_NO_ADMIN: "Sin Administradores",
			STAFF_NO_MOD: "Sin Moderadores",

			/* JOKE COMMAND */

			// Utils
			JOKE_DESCRIPTION: "Muestra un chiste",
			JOKE_USAGE: "joke",
			JOKE_EXAMPLES: "$joke",
			// Content
			JOKE_FOOTER: "WaterLight",

			/* FML COMMAND */

			// Utils
			FML_DESCRIPTION: "Muestra una FML random",
			FML_USAGE: "fml",
			FML_EXAMPLES: "$fml\n$vdm",
			// Content
			FML_TITLE: "FML | fmylife.com",
			FML_URL: "https://www.fmylife.com/random",
			FML_ERROR: `${e.error} | Un error ocurrió`,

			/* 8BALL COMMAND */

			// Utils
			EIGHTBALL_DESCRIPTION: "¡Te contaré la verdad!",
			EIGHTBALL_USAGE: "8ball [question]",
			EIGHTBALL_EXAMPLES: "$8ball Es WaterLight el mejor bot?",
			// Errors
			EIGHTBALL_ERR_QUESTION: `${e.error} | Necestias escribir una pregunta!`,
			// Content
			EIGHTBALL_ANSWERS: [
				"Estoy seguro de eso.",
				"Es definitivamente seguro",
				"Noo",
				"Si seguro",
				"Probrablemente",
				"Si!",
				"No!",
				"los signos dicen que si",
				"pregunta otra vez...",
				"es mejor no decirtelo...",
				"No puedo predecir ahora...",
				"Concéntrate y preguntame otra vez!",
				"no cuento en eso.",
				"mi respuesta es no.",
				"mis amigos dicen que no...",
				"oh.... Lo dudo!",
			],

			/* QRCODE */

			// Utils
			QRCODE_DESCRIPTION: "Genera un código QR con tu texto!",
			QRCODE_USAGE: "qrcode [text]",
			QRCODE_EXAMPLES: "$qrcode Hey !",
			// Errors
			QRCODE_ERR_TEXT: `${e.error} | Necesitas poner un texto!`,

			/* FLIP COMMAND */

			// Utils
			FLIP_DESCRIPTION: "Lanzo los dados por ti!",
			FLIP_USAGE: "flip",
			FLIP_EXAMPLES: "$flip",
			// Content
			FLIP_PILE: ":game_die: | Es **pila** !",
			FLIP_FACE: ":game_die: | Es **cara** !",

			/* LMG COMMAND */

			// Utils
			LMG_DESCRIPTION: "Devuelve un enlace a lmgtfy.com",
			LMG_USAGE: "lmg [question]",
			LMG_EXAMPLES: "$lmg Como creo un bot para discord?",
			// Errors
			LMG_ERR_QUESTION: `${e.error} | Necesitas poner algo para buscar!`,

			/* LOVECALC COMMAND */

			// Utils
			LOVECALC_DESCRIPTION: "¿Cuánto amor hay entre dos personas? * Este es un comando divertido, no debe ser tomado en serio.*",
			LOVECALC_USAGE: "lovecalc [@member1] (@member2)",
			LOVECALC_EXAMPLES: "$lovecalc @Jaime#5311\n$lovecalc @Jaime#5311 @WaterLight#0945",
			// Errors
			LOVECALC_ERR_MENTIONS: `${e.error} | Necesitas mencionar 2 miembros!`,
			// Content
			LOVECALC_CONTENT: (percent, username1, username2) => `Hay **${percent}%** de amor entre **${username1}** y **${username2}** !`,

			/* BACKUP COMMAND */

			// Utils
			BACKUP_DESCRIPTION: "Haz copias de seguridad de tu servidor!",
			BACKUP_USAGE: "backup [create/load/infos]",
			BACKUP_EXAMPLES: "$backup create\n$backup load 92N1x\n$backup infos 92N1x",
			// Errors
			BACKUP_ERR_STATUS: `${e.error} | Necesitas especificar \`create\`, \`load\` or \`infos\`!`,
			BACKUP_ERR_NOT_FOUND: (backupID) => `${e.error} | Ninguna copia de seguridad fue encontrada con \`${backupID}\``,
			BACKUP_ERR_ID: `${e.error} | Porfavor pon la ID de la copia de seguridad!`,
			BACKUP_ERR_TIMEOUT: `${e.error} | Ya pasó ,mucho tiempo! Cancelando la carga de la copia de seguridad....`,
			// Content
			BACKUP_CREATE_SUCCESS: `${e.success} | Copia de seguridad creada con éxito! El ID de la copia de seguridad se le ha enviado en mensajes privados.!`,
			BACKUP_CREATE_SUCCESS_ID: (backupID) => `${e.success} | Aquí está la ID de su copia de seguridad: \`\`\`${backupID}\`\`\``,
			BACKUP_CONFIRMATION: `${e.warn} | :warning: | Cuando se carga la copia de seguridad, se reemplazarán todos los canales, roles, etc.! Escribe \`-confirm\` para confirmar!`,
			BACKUP_START_SAVING: `${e.success} | Empezando la carga de la copia de seguridad!`,
			BACKUP_LOAD_SUCCESS: `${e.success} | La copia de seguridad fue cargada con éxito!`,
			// Headings
			BACKUP_HEADINGS: [
				"Información sobre la copia de seguridad",
				"ID",
				"ID del Servidor",
				"Tamaño",
				"Creado el"
			],

			/* GETCONF COMMAND */

			// Utils
			GETCONF_DESCRIPTION: "Displays the configuration of a server",
			GETCONF_USAGE: "getconf [server ID]",
			GETCONF_EXAMPLES: "$getconf 565048515357835264",
			// Errors
			GETCONF_ERR_ID: `${e.error} | Please enter a valid ID!`,
			GETCONF_ERR_GUILD_NOT_FOUND: `${e.error} | No server found!`,

			/* PERMISSIONS COMMAND */

			// Utils
			PERMISSIONS_DESCRIPTION: "Obten la información de un usuario",
			PERMISSIONS_USAGE: "permissions (@member)",
			PERMISSIONS_EXAMPLES: "$permissions\n$permissions @Jaime#5311",
			// Content
			PERMISSIONS_TITLE: (username, channel) => `Permisos de ${username} en #${channel}`,

			/* PARTNERS COMMAND */

			// Utils
			PARTNERS_DESCRIPTION: "Obten los socios de WaterLight",
			PARTNERS_USAGE: "partners",
			PARTNERS_EXAMPLES: "$partners",
			// Content
			PARTNERS_TITLE: `Socios de ${c.botname} `,

			/* SERVERSLIST COMMAND */

			SERVERSLIST_DESCRIPTION: "Displays the list of the servers of the bot!",
			SERVERSLIST_USAGE: "servers-list",
			SERVERSLIST_EXAMPLES: "$servers-list",

			/* TWEET COMMAND */

			// Utils
			TWEET_DESCRIPTION: "¡Genera un tweet de la persona que elijas en Twitter!",
			TWEET_USAGE: "tweet [@twitter] [text]",
			TWEET_EXAMPLES: "$tweet EmmanuelMacron Hola Francia!",
			// Errors
			TWEET_ERR_USERNAME: `${e.error} | Tienes que ingresar el apodo de Twitter de alguien!`,
			TWEET_ERR_TEXT: `${e.error} | Tienes que ingresar un texto!`,
			// Content
			TWEET_CONTENT: (user) => `Nuevo tweet publicado por ${user}:`,

			/* PLAY COMMAND */

			// Utils
			PLAY_DESCRIPTION: "Play music!",
			PLAY_USAGE: "play [title]",
			PLAY_EXAMPLES: "$play Despacito",
			// Errors
			PLAY_ERR_CANT_JOIN: `${e.error} | I can't go into the voice channel!`,
			PLAY_ERR_NO_SONG: `${e.error} | No more music in the queue!`,
			// Content
			PLAY_ADDED_TO_QUEUE: (title) => `${e.add} | ${title} has been added to the queue!`,
			PLAY_SEARCH: "Please enter a value to select one of the search results from 1 to 10.",
			PLAY_ERR_NO_NAME: `${e.error} | Please enter a video name to search for!`,
			PLAY_ERR_VOICE_CHANNEL: `${e.error} | You must be connected in a voice channel!`,
			PLAY_ERR_PERMS: `${e.error} | An error has occurred. Either I can't connect in your living room or I can't talk in your living room. Check my permissions and try again.`,
			PLAY_ERR_TIMEOUT: `${e.error} | Time's up! Please retype the command!`,
			PLAY_ERR_NOT_FOUND: `${e.error} | No results on Youtube!`,
			PLAY_ERR_NOT_PLAYING: `${e.error} | No music in progress!`,
			// Headings
			PLAY_PLAYING_TITLE: "Playing in progress",
			PLAY_HEADINGS: [
				`${e.title} Title`,
				`${e.singer} Singer`,
				`${e.time} Duration`,
				`${e.search} Search`,
				`${e.calendar} Creation`,
				`${e.desc} Description`,
				`${e.time} Duration`
			],

			/* STOP COMMAND */

			// Utils
			STOP_DESCRIPTION: "Stop the music in progress!",
			STOP_USAGE: "stop",
			STOP_EXAMPLES: "$stop",
			// Content
			STOP_TITLE: `Stop the music`,
			STOP_CONTENT: (voteCount, requiredCount) => `Stop the music\nVote: ${voteCount}/${requiredCount}\nReact with 👍 to stop the music!`,
			STOP_CONTENT_COMPLETE: "Music correctly stopped!",

			/* SKIP COMMAND */

			// Utils
			SKIP_DESCRIPTION: "Play the next song!",
			SKIP_USAGE: "skip",
			SKIP_EXAMPLES: "$skip",
			// Content
			SKIP_TITLE: "Skip to next song",
			SKIP_CONTENT: (title, voteCount, requiredCount) => `Next song: ${title}\nVote: ${voteCount}/${requiredCount}\nReact with 👍 to play the next song!`,
			SKIP_CONTENT_COMPLETE: (title) => `Song passed ! Now: ${title}`,
			SKIP_SUCCESS: `${e.success} | I just changed the song!`,
			// Errors
			SKIP_ERR_NO_SONG: `${e.error} | No next song!`,

			/* NP COMMAND */

			// Utils
			NP_DESCRIPTION: "Displays information about the current song!",
			NP_USAGE: "np",
			NP_EXAMPLES: "$np",
			// Errors
			NP_ERR_NO_DESC: "**No description**",

			/* QUEUE COMMAND */

			// Utils
			QUEUE_DESCRIPTION: "Displays the queue",
			QUEUE_USAGE: "queue",
			QUEUE_EXAMPLES: "$queue",
			// Content
			QUEUE_TITLE: `${e.playlist} Playlist`,

			/* LYRICS COMMAND */

			// Utils
			LYRICS_DESCRIPTION: "Displays the lyrics of a song",
			LYRICS_USAGE: "lyrics [song-name]",
			LYRICS_EXAMPLES: "$lyrics Skyfall",
			// Content
			LYRICS_TITLE: (songName) => `🎤 Lyrics of ${songName}`,
			LYRICS_NEXT: (link) => `\n**And more...** (${link})[Click here for the rest]`,
			// Errors
			LYRICS_ERR_SONG_NAME: `${e.error} | Please enter a song name!`,
			LYRICS_ERR_NO_LYRICS: (songName) => `${e.error} | No lyrics found for \`${songName}\` !`,

			/* CONFIGURATION COMMAND */

			// Utils
			CONFIGURATION_DESCRIPTION: "Obten mi configuración para este servidor",
			CONFIGURATION_USAGE: "configuration",
			CONFIGURATION_EXAMPLES: "$configuration",
			// Headings
			CONFIGURATION_HEADINGS: [
				[ "Canal(es) ignorados", "Ningún canal ignorado" ],
				[ "Autorole", "Autorole desactivado" ],
				[ "Welcome", "Mensajes de bienvenida desactivados" ],
				[ "Goodbye", "Mensajes de ida desactivados" ],
				[ "Slowmode", "Ningún canal con slowmode" ],
				[ "Canales" ],
				[ "Advertencias" ],
				[ "Automoderation", "Automoderación desactivada" ],
				[ "Auto-delete commands", "Auto-deletion de comandos desactivada" ],
				[ "Edita tu configuración", `[Clic here to go on the dashboard!](${c.dashboard.baseURL})`]
			],
			CONFIGURATION_AUTOROLE: (roleID) => `Role : <@&${roleID}>`,
			CONFIGURATION_WELCOME: (withImage, channelID) => `Channel : <#${channelID}>\nImage : ${withImage ? "Yes" : "No"}`,
			CONFIGURATION_GOODBYE: (withImage, channelID) => `Channel : <#${channelID}>\nImage : ${withImage ? "Yes" : "No"}`,
			CONFIGURATION_MODLOGS: (channelID) => `Moderation logs : ${channelID ? `<#${channelID}>` : "Not defined"}`,
			CONFIGURATION_SUGGESTIONS: (channelID) => `Suggestions : ${channelID ? `<#${channelID}>` : "Not defined" }`,
			CONFIGURATION_FORTNITESHOP: (channelID) => `Fortnite Shop : ${channelID ? `<#${channelID}>` : "Not defined" }`,
			CONFIGURATION_AUTOMOD: (ignoredChannels) => `${ignoredChannels.length > 0 ? `Salon ignorés : ${ignoredChannels.map((ch) => `<#${ch}>`)}` : "Aucun salon ignoré."}`,
			CONFIGURATION_WARNS: (kick, ban) => `${kick ? `**Expulsion**: after **${kick}** warnings.` : "**Expulsion**: Not defined."}\n${ban ? `**Banishment**: after **${ban}** warnings.` : "**Banishment**: Not defined."}`,
			CONFIGURATION_AUTODELETEMOD: "Auto-deletion of moderation commands enabled",

			/* IGNORE COMMAND */

			// Utils
			IGNORE_DESCRIPTION: "Desactiva y activa comandos en una sala",
			IGNORE_USAGE: "ignore [#channel]",
			IGNORE_EXAMPLES: "$ignore #general",
			// Content
			IGNORE_SUCCESS_DISABLED: (channel) => `${e.success} | Ahora los comandos estarán activados ${channel} !`,
			IGNORE_SUCCESS_ENABLED: (channel) => `${e.warn} | Ahora los comandos estarán desactivados ${channel} !`,

			/* SETPREFIX COMMAND */

			// Utils
			SETPREFIX_DESCRIPTION: "Cambia mi prefijo en este servidor",
			SETPREFIX_USAGE: "setprefix [prefix]",
			SETPREFIX_EXAMPLES: "$setprefix !",
			// Errors
			SETPREFIX_ERR_PREFIX: `${e.error} | Porfavor pon un prefijo valido!`,
			SETPREFIX_ERR_CARACT: `${e.error} | El prefijo no puede ser mas grande que 5 caracteres!`,
			// Content
			SETPREFIX_SUCCESS: (prefix) => `${e.success} | Mi prefijo fue cambiado! Escribe \`${prefix}help\` para ver todos mis comandos!`,

			/* AUTOROLE COMMAND */

			// Utils
			AUTOROLE_DESCRIPTION: "Desactiva y activa roles cuando una persona entre a tu servidor!",
			AUTOROLE_USAGE: "autorole [on/off] (role)",
			AUTOROLE_EXAMPLES: "$autorole on Members\n$autorole off",
			// Errors
			AUTOROLE_ERR_STATUS: `${e.error} | Porfavor indica \`on\` or \`off\` y el nombre del rol!`,
			// Content
			AUTOROLE_ENABLED: (prefix) => `${e.success} | Autrole activado correctamente! Para tener más información sobre la configuración de su servidor, escriba \`${prefix}configuration\` !`,
			AUTOROLE_DISABLED: (prefix) => `${e.warn} | Autrole correctamente desactivado! Para tener más información sobre la configuración de su servidor, escriba \`${prefix}configuration\` !`,

			/* WELCOME COMMAND */

			// Utils
			WELCOME_DESCRIPTION: `Envia un mensaje de bienvenida al canal que tú quieras!`,
			WELCOME_USAGE: "welcome",
			WELCOME_EXAMPLES: "$welcome",
			// Content
			WELCOME_TEST_SUCCESS: `${e.success} | Prueba realizada!`,
			WELCOME_DISABLED: (prefix) => `${e.success} | Los mensajes de bienvenida acaban de deshabilitarse! Escribe \`${prefix}configuration\` para ver la configuración!`,
			WELCOME_FORM_CHANNEL: (author) => `Hola ${author} ! ¿En que canal quieres que envie los mensaje de bienvenida? (menciona el canal)`,
			WELCOME_FORM_MESSAGE: (channel, msg) => `Perfecto! Los mensajes se enviarán en ${channel}. A continuación esribe el mensaje de bienvenida: \n\n\nInformación:\n\n\nMención: {user}\nMiembros: {membercount}\nServidor: {server}\nPor ejemplo, "bienvenido {user} a {server} ! Gracias a ti, somos {membercount} ! o en inglés "Welcome ${msg.author} to ${msg.guild.name} ! Thanks to you, we are ${msg.guild.memberCount} !".`,
			WELCOME_FORM_IMAGE: `Perfecto! Te gustaría una bonita imagen de bienvenida junto al mensaje? Escribe "yes" o "no"!`,
			WELCOME_FORM_SUCCESS: (channel, prefix) => `${e.success} | Mensaje de bienvenida activado en <#${channel}> ! Escribe \`${prefix}welcome test\` para realizar una prueba!`,
			WELCOME_IMG_MSG: (name) => `Welcome ${name} !`,
			WELCOME_IMG_NUMBER: (memberCount) => `- ${memberCount}th member !`,
			WELCOME_IMG_TITLE: "WELCOME",
			WELCOME_DEFAULT_MESSAGE: "Welcome {user} to {server} ! Thanks to you, we are {membercount} !",
			// Errors
			WELCOME_ERR_TIMEOUT: `${e.error} | Tiempo excedido! Porfavor escribe otra vez el comando!`,
			WELCOME_ERR_CARACT: `${e.error} | Tu mensaje no puede exceder las 1500 letras!`,

			/* GIVEAWAY COMMAND */

			// Utils
			GIVEAWAY_DESCRIPTION: "Crea sorteos!",
			GIVEAWAY_USAGE: "giveaway [create/reroll/delete/end] (tiempo) (ganadores) (premio)",
			GIVEAWAY_EXAMPLES: "$giveaway create 10m 2 5$ PayPal !\n$giveaway reroll 597812898022031374",
			// Errors
			GIVEAWAY_ERR_STATUS: `${e.error} | Necesitas especificar \`create\`, \`reroll\` ou \`delete\`!`,
			GIVEAWAY_ERR_CREATE: (prefix) => `${e.error} | Necesitas poner la información en este formato: \n\n\`${prefix}giveaway create [tiempo] [ganadores] [premio]\``,
			GIVEAWAY_ERR_REROLL: `${e.error} | Necesitas poner la ID del mensaje del sorteo que quieras resrotear!`,
			GIVEAWAY_ERR_DELETE: `${e.error} | Necesitas poner la ID del mensaje del sorteo que quieras eliminar!`,
			GIVEAWAY_ERR_END: `${e.error} | Necesitas poner la ID del mensaje del sorteo que quieras finalizar!`,
			GIVEAWAY_ERR_REROLL_MSG_ENDED: (messageID) => `${e.error} | Ningún sorto **terminado** fue encontrado con la ID \`${messageID}\``,
			GIVEAWAY_ERR_MESSAGE_NOT_FOUND: (messageID) => `${e.error} | Ningún sorteo encontrado con la ID \`${messageID}\``,
			GIVEAWAY_ERR_15_DAYS: `${e.error} | La duración máxima de un sorteo es de 15 días.`,
			GIVEAWAY_ERR_MAX: `${e.error} | Solo se pueden hacer una cantidad de 4 sorteos al mismo tiempo en un mismo servidor.`,
			// Content
			GIVEAWAY_CREATED: `${e.success} | Sorteo empezado!`,
			GIVEAWAY_REROLLED: `${e.success} | Nuevo sorteo hecho!`,
			GIVEAWAY_DELETED: `${e.success} | Sorteo eliminado!`,
			GIVEAWAY_ENDED: `${e.success} | Sorteo en modo parada (-15 segundos)!`,
			// Messages
			GIVEAWAY_CREATE_MESSAGES: {
				giveaway: "🎉🎉 **SORTEO** 🎉🎉",
				giveawayEnded: "🎉🎉 **SORTEO TERMINADO** 🎉🎉",
				timeRemaining: "Tiempo para que termine: **{duration}** !",
				inviteToParticipate: "Reacciona con 🎉 para participar!",
				winMessage: "Felicidades, {winners} ! Ganaron **{prize}** !",
				embedFooter: "Sorteos",
				noWinner: "Sorteo cancelado, ningúna participación valida.",
				winners: "ganador(es)",
				endedAt: "Termina en",
				units: { seconds: "segundos", minutes: "minutos", hours: "horas", days: "días" }
			},
			GIVEAWAY_REROLL_MESSAGES: {
				congrat: ":tada: Nuevo ganador(es) : {winners}! Felicidades!",
				error: "No hay entradas válidas, no se pueden elegir ganadores!"
			},

			/* GOODBYE COMMAND */

			// Utils
			GOODBYE_DESCRIPTION: "Envia un mensaje de salida al canal que tú quieras!",
			GOODBYE_USAGE: "goodbye",
			GOODBYE_EXAMPLES: "$goodbye",
			// Content
			GOODBYE_DISABLED: (prefix) => `${e.success} | Los mensajes de salida han sido desactivados! Escribe \`${prefix}configuration\` para ver la configuración!`,
			GOODBYE_TEST_SUCCESS: `${e.success} | Test effectué !`,
			GOODBYE_FORM_CHANNEL: (author) => `Hola ${author} ! ¿En que canal quieres que envie los mensajes de salida? (menciona el canal)`,
			GOODBYE_FORM_MESSAGE: (channel, msg) => `Perfecto! Los mensajes se enviarán en ${channel}. A continuación pon el mensaje de salida: \n\n\nInformación:\\n\n\nMención: {user}\nMiembros: {membercount}\nServidor: {server}\nPor ejemplo, "Adiós {user} ! Es trise, sin ti somos {membercount} en {server} !" en inglés "Goodbye ${msg.author.username}#${msg.author.discriminator} ! It's sad, without you we're only ${msg.guild.memberCount} on ${msg.guild.name} !".`,
			GOODBYE_FORM_IMAGE: `Perfecto! Te gustaría una bonita imagen de salida junto al mensaje? Escribe "yes" o "no"!`,
			GOODBYE_FORM_SUCCESS: (channel, prefix) => `${e.success} | Mensajes de salida activados en <#${channel}> ! Escribe \`${prefix}goodbye test\` para realizar una prueba!`,
			GOODBYE_IMG_MSG: (name) => `Leaving from ${name}`,
			GOODBYE_IMG_NUMBER: (memberCount) => `- ${memberCount}th member !`,
			GOODBYE_IMG_TITLE: "GOODBYE",
			GOODBYE_DEFAULT_MESSAGE: "Goodbye {user} ! It's sad, without you we're only {membercount} on {server} !",
			// Errors
			GOODBYE_ERR_TIMEOUT: `${e.error} | Tiempo excedido! Porfavor escribe otra vez el comando!`,
			GOODBYE_ERR_CARACT: `${e.error} | Tu mensaje no puede exceder las 1500 letras!`,

			/* SLOWMODE COMMAND */

			// Utils
			SLOWMODE_DESCRIPTION: "Define cooldown en el canal",
			SLOWMODE_USAGE: "slowmode [#canal] (tiempo)",
			SLOWMODE_EXAMPELS: "$slowmode #general 10m\n$slowmode #general",
			// Errors
			SLOWMODE_PLEASE_WAIT: (time, channel) => `${e.error} | El canal ${channel} está ahora en modo slowmode! Porfavor espera ${time} para poder enviar mensajes!`,
			// Content
			SLOWMODE_DISABLED: (channel) => `${e.success} | El modo slowmode ha sido desactivado en <#${channel}> !`,
			SLOWMODE_ENABLED: (channel, time) => `${e.success} | El modo slowmode fue activado en <#${channel}> por un tiempo de ${time} !`,

			/* ADDCOMMAND COMMAND */

			// Utils
			ADDCOMMAND_DESCRIPTION: "Agrega un comando customizado a tu servidor",
			ADDCOMMAND_USAGE: "addcommand [nombre] [respuesta del comando]",
			ADDCOMMAND_EXAMPLES: "$addcommand hey hi!",
			// Errors
			ADDCOMMAND_ERR_NAME: `${e.error} | Porfavor, pon un nombre y una respuesta al comando!`,
			ADDCOMMAND_ERR_EXISTS: (name) => `${e.error} | El comando ${name} ya existe!`,
			ADDCOMMAND_ERR_ANSWER: `${e.error} | Porfavor pon una respuesta al comando!`,
			// Content
			ADDCOMMAND_SUCCESS: (cmd) => `${e.success} | El comando ${cmd} fue agregado al servidor!`,

			/* DELCOMMAND COMMAND */

			// Utils
			DELCOMMAND_DESCRIPTION: "Elimina un comando customizado de tu servidor!",
			DELCOMMAND_USAGE: "delcommand [nombre del comando]",
			DELCOMMAND_EXAMPLES: "$delcommand hey",
			// Errors
			DELCOMMAND_ERR_NAME: `${e.error} | Porfavor escrib el nombre del comando que desearías elimninar!`,
			DELCOMMAND_ERR_EXISTS: (cmd) => `${e.error} |El comando ${cmd} no existe!`,
			// Content
			DELCOMMAND_SUCCESS: (cmd) => `${e.success} | El comando ${cmd} ha sido eliminado del servidor!`,

			/* RELOAD COMMAND */

			// Utils
			RELOAD_DESCRIPTION: "Reload a bot command!",
			RELOAD_USAGE: "reload [name-of-the-command]",
			RELOAD_EXAMPLES: "$reload ping",
			// Errors
			RELOAD_ERR_CMD: `${e.error} | Please enter the name of the command you want to reload!`,
			RELOAD_ERR_NOT_FOUND: (cmd) => `${e.error} | No command found for \`${cmd}\` !`,
			// Content
			RELOAD_SUCCESS: (cmd) => `${e.success} | The command ${cmd} has been reloaded!`,

			/* PROFILE COMMAND */

			// Utils
			PROFILE_DESCRIPTION: "Muestra el perfil del usuario mencionado (o el autor del mensaje)",
			PROFILE_USAGE: "profile (@user#0000)",
			PROFILE_EXAMPLES: "$profile\n$profile @Jaime#5311",
			// Content
			NO_BIO: "Sin biografia",
			DISPLAY_REP: (points) => `**${points}** punto(s)`,
			DISPLAY_MONEY: (money) => `**${money}** crédito(s)`,
			NO_PARTNER: "Single",
			NO_BIRTHDATE: "Not available.",
			// Headings
			PROFILE_TITLE: (username) => `Profile of ${username}`,
			PROFILE_HEADINGS:{
				MONEY:"💰 Dinero Local",
				GLOBAL_MONEY:"🌍 Total de Dinero",
				BANK: "💳 Banco",
				REP: "🎩 Reputación",
				REGISTERED_AT: "📅 Registración",
				LEVEL:"📊 Nivel",
				EXP: "🔮 Experiencia",
				BIRTHDATE: "🎂 Cumpleaños",
				MARRIED: "❤️ Casado/a",
				INVITER: "🤵 Invitador",
				PSEUDO: "📝 Seudo",
				ACHIEVEMENTS: "🔥 Logros",
				BIO: "🔖 Biografía"
			},
			PROFILE_ACHIEVEMENTS: (prefix) => `Obten más información con \`${prefix}achievements\`!`,

			/* WORK COMMAND */

			// Utils
			WORK_DESCRIPTION: "Trabaja y consigue dinero!",
			WORK_USAGE: "work",
			WORK_EXAMPLES: "$work",
			// Content
			WORK_CLAIMED_HEADINGS: [
				"Salario",
				"Racha"
			],
			WORK_CLAIMED_SALARY: (amount) => `${amount} créditos agregados a tu cuenta!`,
			WORK_AWARD: ":tada: Has ganado 200 créditos!",
			WORK_FOOTER: "Completa la palabra AWARD para conseguir 200 créditos!",
			// Errors
			WORK_ERR_COOLDOWN: (delay) => `${e.error} | Necesitas esperar ${delay} para trabajar otra vez!`,

			/* REP COMMAND */

			// Utils
			REP_DESCRIPTION: "Dale un punto de reputación a un usuario!",
			REP_USAGE: "rep [@user#0000]",
			REP_EXAMPLES: "$rep @Jaime#5311",
			// Errors
			REP_ERR_COOLDOWN: (delay) => `${e.error} | Necesitas esperarar ${delay} para poder dar otro punto de reputación!`,
			REP_ERR_YOURSELF: `${e.error} | No te puedes dar un punto de reputación a ti mismo!`,
			// Content
			REP_SUCCESS: (tag) => `${e.success} | Le diste un punto de reputación a **${tag}** !`,

			/* SETBIO COMMAND */

			// Utils
			SETBIO_DESCRIPTION: "Cambia la biografia que aparecerá en tu perfil!",
			SETBIO_USAGE: "setbio [description]",
			SETBIO_EXAMPLES: "$setbio Developer for 5 years in Swift",
			// Errors
			SETBIO_ERR_NO_BIO : `${e.error} | Porfavor pon una biorafia valida!`,
			SETBIO_ERR_CARACT: `${e.error} | Tu biografía no debe superar los 100 caracteres.!`,
			// Content
			SETBIO_SUCCESS: `${e.success} | Tu biografia ha sido modificada!`,

			/* MONEY COMMAND */

			// Utils
			MONEY_DESCRIPTION: "Muestra tus créditos",
			MONEY_USAGE: "money (@miembro)",
			MONEY_EXAMPLES: "$money\n$money @user#0000",
			// Content
			CREDITS_TITLE: (username) => `Créditos de ${username}`,

			/* LEADERBOARD COMMAND */

			// Utils
			LEADERBOARD_DESCRIPTION: "Muestra a los usuarios que tienen más créditos, niveles o puntos de reputación.!",
			LEADERBOARD_USAGE: "leaderboard [rep/levels/credits]",
			LEADERBOARD_EXAMPLES: "$leaderboard credits\n$leaderboard levels",
			// Errors
			LEADERBOARD_ERR_TYPE: `${e.error} | Por favor, introduzca un tipo de tabla de clasificación! (\`credits\`, \`level\` ou \`rep\`)`,
			LEADERBOARD_WARN_PHONE: `:confused: Hemos detectado que estas usando un celular.... La tabla de clasificación puede no mostrarse bien en pantallas pequeñas. Intenta cambiar al paisaje (o ve a nuestro dashboard)!`,

			/* ROB COMMAND */

			// Utils
			ROB_DESCRIPTION: "Intenta robarle dinero a un usuario!",
			ROB_USAGE: "rob [@miembro] [cantidad]",
			ROB_EXAMPLES: "$rob @Jaime#5311 100",
			// Errors
			ROB_ERR_YOURSELF: `${e.error} | No te puedes robar a ti mismo!`,
			ROB_ERR_AMOUNT: (member) => `${e.error} | Porfavor pon cuanto dinero le quieres robar a **${member.user.tag}** !`,
			ROB_ERR_AMOUNT_MEMBER: (member, money) => `${e.error} | **${member.user.username}** no tiene **${money}** créditos !`,
			ROB_ERR_NO_MONEY: (needed) => `${e.error} | Tienes que tener más de **${needed}** créditos para hacer ese robo!`,
			ROB_ERR_CLDWN: (member) => `:spy: **${member.user.username}** está en guardia ... Espere un momento e intente nuevamente!`,
			// Content
			ROB_WON: (robbed, member) => [
				`:tada: | ¡Felicidades! La policía no fue lo suficientemente rápida como para evitar que robaras **${robbed}** créditos a **${member.user.username}** !`,
				`:confused: | **${member.user.username}** ? Malas noticias. Te acaban de robar **${robbed}** créditos!`,
			],
			ROB_LOSE: (lose, member, won) => [
				`:oncoming_police_car: | La policía te atrapó en el acto, imposible de negar, tu multa es de **${lose}** créditos. **${won}** los créditos compensatorios se pagarán a **${member.user.username}**.`,
				`:police_car: | Malas noticias.... **${member.user.username}** llamó a la policía a tiempo. Tu multa es de **${lose}** créditos y **${won}** los créditos compensatorios se pagarán a **${member.user.username}**.`
			],

			/* DEPOSIT COMMAND */

			// Utils
			DEPOSIT_DESCRIPTION: "Deposita dinero al banco",
			DEPOSIT_USAGE: "deposit [cantidad]",
			DEPOSIT_EXAMPLES: "$deposit 400",
			// Errors
			DEPOSIT_ERR_AMOUNT: `${e.error} | Porfavor pon una cantidad de dinero para depositar en el banco!`,
			DEPOSIT_ERR_NO_MONEY: `${e.error} | No tienes créditos!`,
			DEPOSIT_ERR_AMOUNT_TOO_HIGH: (money) => `${e.error} | No tienes \`${money}\` créditos!`,
			// Content
			DEPOSIT_SUCCESS: (money) => `${e.success} | **${money}** créditos fueron depositados en el banco!`,

			/* PAY COMMAND */

			// Utils
			PAY_DESCRIPTION: "Paga dinero a un usuario!",
			PAY_USAGE: "pay [@usuario#0000] [cantidad]",
			PAY_EXAMPLES: "$pay @Jaime#5311 400",
			// Errors
			PAY_ERR_YOURSELF: `${e.error} | No te puedes pagar a ti mismo!`,
			PAY_ERR_INVALID_AMOUNT: (username) => `${e.error} | Debe ingresar un monto a pagar **${username}** !`,
			PAY_ERR_AMOUNT_TOO_HIGH: (amount, username) => `${e.error} | No tienes suficientes créditos para pagar ${amount} credits to ${username} !`,
			// Content
			PAY_SUCCESS: (amount, username) => `${e.success} | Pagaste ${amount} créditos a ${username} !`,

			/* WITHDRAW COMMAND */

			// Utils
			WITHDRAW_DESCRIPTION: "Retira dinero del banco!",
			WITHDRAW_USAGE: "withdraw [cantidad]",
			WITHDRAW_EXAMPLES: "$withdraw 400",
			// Errors
			WITHDRAW_ERR_AMOUNT: `${e.error} | Especifica una cantidad de dinero para retirar del banco!`,
			WITHDRAW_ERR_NO_MONEY: `${e.error} | No tienes créditos en el banco!`,
			WITHDRAW_ERR_AMOUNT_TOO_HIGH: (money) => `${e.error} | No tienes \`${money}\` créditos en el banco!`,
			// Content
			WITHDRAW_SUCCESS: (money) => `${e.success} | **${money}** créditos retirados!`,

			/* BIRTHDATE COMMAND */

			// Utils
			BIRTHDATE_DESCRIPTION: "Pon la fecha de tu cumpleaños (aparecerá en tu perfil)",
			BIRTHDATE_USAGE: "birthdate (fecha)",
			BIRTHDATE_EXAMPLES: "$birthdate 01/12/2000",
			// Errors
			BIRTHDATE_ERR_DATE: `${e.error} | Pon una fecha válida! Por ejemplo,  01/12/2000`,
			BIRTHDATE_ERR_DATE_FORMAT: `${e.error} | Has ingresado una fecha no válida. Recordatorio: el formato de fecha debe ser: Día / Mes / Año. Por ejemplo, 01/12/2000 para el 1 de diciembre de 2000.`,
			BIRTHDATE_ERR_INVALID_DATE_FORMAT: `${e.error} | Ingresó una fecha no válida (o la fecha indicada no existe). Recordatorio: el formato de fecha debe ser: Día / Mes / Año. Por ejemplo, 01/12/2000 para el 1 de diciembre de 2000.`,
			BIRTHDATE_ERR_TOO_HIGH: `${e.error} | No puedes no haber nacido todavía!`,
			BIRTHDATE_ERR_TOO_LOW: `${e.error} | Más de 80 años de edad? :eyes:`,
			// Content
			BIRTHDATE_SUCCESS: (date) => `${e.success} | Tu cumpleaños se ha establecido en el ${date} !`,


			/* WEDDING COMMAND */

			// Utils
			WEDDING_DESCRIPTION: "Cásate con la persona que elijas!",
			WEDDING_USAGE: "wedding [@usuario#0000]",
			WEDDING_EXAMPLES: "$wedding @Jaime#5311",
			// Errors
			WEDDING_ERR_AUTHOR_MARRIED: (prefix) => `${e.error} | ¡Tu ya estas casado! Primero usa \`${prefix}divorce\` para divorciarte`,
			WEDDING_ERR_MEMBER_MARRIED: (username) => `${e.error} | El lugar ya está ocupado! **${username}** está casado/a!`,
			WEDDING_ERR_AUTHOR_PENDING_REQUESTER: (username) => `${e.error} | Ya tienes una solicitud actual para **${username}** !`,
			WEDDING_ERR_AUTHOR_PENDING_RECEIVER: (username) => `${e.error} | **${username}** ya te ha enviado una solicitud! Rechace o acéptelo (o espere hasta que caduque en unos minutos).`,
			WEDDING_ERR_MEMBER_PENDING_REQUESTER: (username1, username2) => `${e.error} | **${username2}** ya ha enviado una solicitud a **${username1}** !`,
			WEDDING_ERR_MEMBER_PENDING_RECEIVER: (username1, username2) => `${e.error} | **ya ha enviado una solicitud a **${username2}** !Espera hasta que **${username2}** acepte o denege la solicitud **${username1}** o expira!`,
			WEDDING_ERR_TIMEOUT: (member) => `${e.error} | ${member} no respondió ... Espere hasta que él / ella esté conectado e intente nuevamente!`,
			WEDDING_ERR_DENIED: (author, member) => `${e.error} | ${author}, tengo algunas malas noticias... ${member} rechazó su propuesta.`,
			WEDDING_ERR_YOURSELF: `${e.error} | No te puedes casar contigo mismo!`,
			// Content
			WEDDING_REQUEST: (member, author) => `${e.warn} | ${member}, ¿Estás de acuerdo en casarte? ${author}? Responde con "yes" o "no"!`,
			WEDDING_SUCCESS: (author, member) => `${e.success} | ${author}, Tengo buenas noticias... ${member} ha aceptado tu petición!`,

			/* DIVORCE COMMAND */

			// Utils
			DIVORCE_DESCRIPTION: "Divorciáte de de la persona con las que estas casado/a!",
			DIVORCE_USAGE: "divorce",
			DIVORCE_EXAMPLES: "divorce",
			// Errors
			DIVORCE_ERR_NOT_WEDDED: `${e.error} | No estás casado/a!`,
			// Content
			DIVORCE_SUCCESS: (username) => `${e.success} | Ye has divorciado de **${username}** !`,

			/* SLOTS COMMAND */

			// Utils
			SLOTS_DESCRIPTION: "Un equivalente al casino!",
			SLOTS_USAGE: "slots [dinero]",
			SLOTS_EXAMPLES: "$slots\n$slots 10",
			// Content
			SLOTS_DEFEAT: (amount, username) => `**${username}** usó ${amount} crédito(s) y perdió todo.`,
			SLOTS_VICTORY: (text, amount, won, username) => `${text}**${username}** usó ${amount} crédito(s)y gano ${won} crédito(s)!`,
			// Errors
			SLOTS_ERR_TOO_HIGH: (money) => `${e.error} | No tienes ${money} crédito(s).`,

			/* STATS COMMAND */

			// Utils
			STATS_DESCRIPTION: "Obten las estadísticas sobre mi!",
			STATS_USAGE: "stats",
			STATS_EXAMPLES: "$stats",
			// Content
			STATS: (serv, users) => `\`Servidores : ${serv}\`\n\`Usuarios : ${users}\``,
			STATS_DESC: `${c.botname} is a discord bot developed by ${c.owner.name} !`,
			STATS_ONLINE: (time) => `Desde hace ${time}`,
			STATS_VC: (nb) => `Música en progreso en \`${nb}\` servidores`,
			STATS_CREDITS: "Gracias a `Jaime`, por desarrollarme!\n__**Donadores**__:\n- `Jaime#5311` **DIOS**",
			STATS_LINKS: (url, id) => `[Donar](${c.others.donate}) ● [Invitame](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=775290071) ● [Servidor](https://discord.gg/qSZrFGk) ● [Github](${c.others.github})`,
			// Headings
			STATS_HEADINGS:[
				`Estadísticas`,
				`${e.stats} • __Estadísticas__`,
				`${e.version} • __Versión__`,
				`${e.ram} • __RAM__`,
				`${e.status.online} • __En Línea__`,
				`${e.voice} • __Música__`,
				":heart: • __Reconocimientos y créditos__",
				`${e.link} • __Enlaces__`,
			],


			/* FIRE COMMAND */

			// Utils
			FIRE_DESCRIPTION: "Genera una imágen de \"fire\"",
			FIRE_USAGE: "fire (@miembro)",
			FIRE_EXAMPLES: "$fire\n$fire @Jaime#5311",

			/* JAIL COMMAND */

			// Utils
			JAIL_DESCRIPTION: "Genera una imágen de \"jail\"",
			JAIL_USAGE: "jail (@member)",
			JAIL_EXAMPLES: "$jail\n$jail @Jaime#5311",

			/* MISSION COMMAND */

			// Utils
			MISSION_DESCRIPTION: "Genera una imágen de \"mission\"",
			MISSION_USAGE: "mission (@member)",
			MISSION_EXAMPLES: "$mission\n$mission @Jaime#5311",

			/* RIP COMMAND */

			// Utils
			RIP_DESCRIPTION: "Genera una imágen de \"rip\"",
			RIP_USAGE: "rip (@member)",
			RIP_EXAMPLES: "$rip\n$rip @Jaime#5311",

			/* SCARY COMMAND */

			// Utils
			SCARY_DESCRIPTION: "Genera una imágen de \"scary\"",
			SCARY_USAGE: "scary (@member)",
			SCARY_EXAMPLES: "$scary\n$scary @Jaime#5311",

			/* TOBECONTINUED COMMAND */

			// Utils
			TOBECONTINUED_DESCRIPTION: "Genera una imágen de \"tobecontinued\"",
			TOBECONTINUED_USAGE: "tobecontinued (@member)",
			TOBECONTINUED_EXAMPLES: "$tobecontinued\n$tobecontinued @Jaime#5311",

			/* TRIGGERED COMMAND */

			// Utils
			TRIGGERED_DESCRIPTION: "Genera una imágen de \"triggered\"",
			TRIGGERED_USAGE: "triggered (@member)",
			TRIGGERED_EXAMPLES: "$triggered\n$triggered @Jaime#5311",

			/* WANTED COMMAND */

			// Utils
			WANTED_DESCRIPTION: "Genera una imágen de \"wanted\"",
			WANTED_USAGE: "wanted (@member)",
			WANTED_EXAMPLES: "$wanted\n$wanted @Jaime#5311",

			/* WASTED COMMAND */

			// Utils
			WASTED_DESCRIPTION: "Genera una imágen de \"wasted\"",
			WASTED_USAGE: "wasted (@member)",
			WASTED_EXAMPLES: "$wasted\n$wasted @Jaime#5311",

			/* CAPTCHA COMMAND */

			// Utils
			CAPTCHA_DESCRIPTION: "Genera una imágen de \"triggered\"",
			CAPTCHA_USAGE: "captcha (@member)",
			CAPTCHA_EXAMPLES: "$captcha\n$captcha @Jaime#5311",

			/* PHCOMMENT COMMAND */

			// Utils
			PHCOMMENT_DESCRIPTION: "Genera una imágen de \"phcomment\"",
			PHCOMMENT_USAGE: "phcomment (@member) (text)",
			PHCOMMENT_EXAMPLES: "$phcomment\n$phcomment @Jaime#5311",
			// Errors
			PHCOMMENT_ERR_TEXT: `${e.error} | You must enter the text of the comment!`,

			/* AVATAR COMMAND */

			// Utils
			AVATAR_DESCRIPTION: "Obten el avatar del usuario mencionado",
			AVATAR_USAGE: "avatar (@member)",
			AVATAR_EXAMPLES: "$avatar\n$avatar @Jaime#5311",

			/* LOVE COMMAND */

			// Utils
			LOVE_DESCRIPTION: "Genera una imágen de \"love\"",
			LOVE_USAGE: "love [@user1] (@user2)",
			LOVE_EXAMPLES: "$love @Jaime#5311\n$love @Jaime#5311 @Clyde#0000",

			/* CLYDE COMMAND */

			// Utils
			CLYDE_DESCRIPTION: "Genera una imágen de \"clyde\"",
			CLYDE_USAGE: "clyde [text]",
			CLYDE_EXAMPLES: "$clyde Discord will close on November 11, 2019. Goodbye.",
			// Errors
			CLYDE_ERR_TEXT: `${e.error} | Please enter a text!`,

			/* TRANSLATE COMMAND  */

			// Utils
			TRANSLATE_DESCRIPTION: "Estoy traduciendo tu texto!",
			TRANSLATE_USAGE: "translate [language] [message]",
			TRANSLATE_EXAMPLES: "$translate fr How are you ?",
			// Content
			TRANSLATE_LANGS: `${e.success} | La lista de todos los lenguajes fue enviada a tus mensajes privados!`,
			// Errors
			TRANSLATE_ERR_LANG: (prefix) => `${e.error} | Porfavor pon un lenguaje! Para ver todos los lenguajes, escribe \`${prefix}translate langs-list\` !`,
			TRANSLATE_ERR_NOT_FOUND: (prefix, lang) => `${e.error} | El lenguaje \`${lang}\` no exsiste! Para ver todos los lenguajes, escribe \`${prefix}translate langs-list\` !`,
			TRANSLATE_ERR_MSG: `${e.error} | Porfavor, ingresa un texto para ser traducido!`,

			/* BAN COMMAND */

			// Utils
			BAN_DESCRIPTION: "Banea al miembro mencionado!",
			BAN_USAGE: "ban [@user] (razón)",
			BAN_EXAMPLES: "$ban @Jaime#5311 Spam",
			// Errors
			BAN_ERR_BANNED: (user) => `${e.error} | **${user.username}** ya está baneado!`,
			BAN_ERR_PERMISSIONS: `${e.error} | Un error ha ocurrido... mira si tengo los permisos requeridos e intentalo otra vez!`,
			BAN_SUCCESS_DM: (user, msg, reason) => `${e.error} | Hola <@${user.id}>,\nFuiste baneado del servidor **${msg.guild.name}** por **${msg.author.tag}** por la razón de **${reason}** !`,
			BAN_SUCCESS_CHANNEL: (user, msg, reason) => `${e.success} | **${user.username}** ha sido baneado de **${msg.guild.name}** por **${msg.author.tag}** por la razón **${reason}** !`,
			BAN_TITLE_LOGS: (caseNumber) => `Ban | Caso #${caseNumber}`,

			/* KICK COMMAND */

			// Utils
			KICK_DESCRIPTION: "Expulsa al miembro mencionado!",
			KICK_USAGE: "kick [@user] (reason)",
			KICK_EXAMPLES: "$kick @Jaime#5311 Spam",
			// Errors
			KICK_ERR_PERMISSIONS: `${e.error} | Un error ha ocurrido... mira si tengo todos los permisos requeridos e intentalo otra vez!`,
			KICK_SUCCESS_DM: (user, msg, reason) => `${e.error} | Hola <@${user.id}>,\nFuiste expulsado del servidor  **${msg.guild.name}** por **${msg.author.tag}** por la razón de **${reason}** !`,
			KICK_SUCCESS_CHANNEL: (user, msg, reason) => `${e.success} | **${user.username}** ha sido expulsado de **${msg.guild.name}** por **${msg.author.tag}** por la razón **${reason}** !`,
			KICK_TITLE_LOGS: (caseNumber) => `Kick | Caso #${caseNumber}`,

			/* CHECKINVITES COMMAND */

			// Utils
			CHECKINVITES_DESCRIPTION: "Compruebe si los miembros no tienen un anuncio para su servidor Discord en su presencia!",
			CHECKINVITES_USAGE: "checkinvites",
			CHECKINVITES_EXAMPLES: "$checkinvites",
			// Content
			CHECKINVITES_NOT_FOUND: `${e.success} | Ningún miembro anuncia en su juego!`,

			/* CLEAR COMMAND */

			// Utils
			CLEAR_DESCRIPTION: "Borra mensajes muy rápidamente!",
			CLEAR_USAGE: "clear[number-of-messages] (@member)",
			CLEAR_EXAMPLES: "$clear 10\n$clear 10 @Jaime#5311",
			// Errors
			CLEAR_ERR_AMOUNT: `${e.error} | Debe especificar una cantidad de mensajes para eliminar!`,
			CLEAR_ERR_TIMEOUT: `${e.error} | ¡Se acabó el tiempo! Por favor, vuelva a escribir el comando!`,
			// Content
			CLEAR_CLONE: `${e.warn} | ¡Todos los mensajes del canal serán eliminados! Para confirmar escribe \`-confirm\``,
			CLEAR_DELETED: `${e.success} | Salón reinicializado!`,
			CLEAR_SUCCESS: (amount) => `${e.success} | **${amount}** mensajes eliminados!`,
			CLEAR_SUCCESS_USER: (amount, user) => `${e.success} | **${amount}** mensajes de **${user.tag}** eliminados !`,

			/* MUTE COMMAND */

			// Utils
			MUTE_DESCRIPTION: "Evita que el miembro envíe mensajes y se conecte por voz durante un período de tiempo!",
			MUTE_USAGE: "mute [@member] [time]",
			MUTE_EXAMPLES: "$mute @Jaime#5311 Spam",
			// Content
			MUTE_SUCCESS: (member, time, reason) => `${e.success} | **${member.user.tag}** ahora está silenciado por **${time}** por la razón de **${reason}** !`,
			MUTE_SUCCESS_DM: (message, time, reason) => `${e.error} | Ahora estás silenciado en **${message.guild.name}** por **${time}** por la razón de **${reason}** !`,
			MUTE_TITLE_LOGS: (caseNumber) => `Mute | Caso #${caseNumber}`,

			/* UNMUTE COMMAND */

			// Utils
			UNMUTE_DESCRIPTION: "Dejar de silenciar al miembro mencionado!",
			UNMUTE_USAGE: "unmute [@member]",
			UNMUTE_EXAMPLES: "$unmute @Jaime#5311",
			// Errors
			UNMUTE_ERR_NOT_MUTED: `${e.error} | Este miembro no está silenciado en este servidor!`,
			// Content
			UNMUTE_SUCCESS: (userID, caseNumber) => `<@${userID}> acaba de ser desmuteado! (caso del mute: #${caseNumber})`,
			UNMUTE_SUCCESS_USER: (user) => `${e.success} | ${user.tag} ha sido desmuteado!`,

			/* SANCTIONS COMMAND */

			// Utils
			SANCTIONS_DESCRIPTION: "Muestra la lista de infracciones cometidas por un miembro!",
			SANCTIONS_USAGE: "sanctions [@member]",
			SANCTIONS_EXAMPLES: "$sanctions @Jaime#5311",
			// Errors
			SANCTIONS_ERR_NOTHING: "Este miembro no ha cometido ninguna infracción..",
			PRINT_SANCTION: (sData) => `Moderador: <@${sData.moderator}>\nRazón: ${sData.reason}`,

			/* DELETEMOD COMMAND */

			// Utils
			DELETEMOD_DESCRIPTION: "Activa o desactiva la eliminación automática de los comandos de moderación.!",
			DELETEMOD_USAGE: "deletemod [on/off]",
			DELETEMOD_EXAMPLES: "$deletemod on",
			// Errors
			DELETEMOD_ERR_STATUS: `${e.error} | Tienes que especificar \`on\` or \`off\` !`,
			// Content
			DELETEMOD_SUCCESS_ENABLED: `${e.success} | Los comandos de moderación se eliminarán automáticamente.!`,
			DELETEMOD_SUCCESS_DISABLED: `${e.success} | Los comandos de moderación ya no se eliminarán automáticamente.!`,

			/* WARN COMMAND */

			// Utils
			WARN_DESCRIPTION: "Advertir a un miembro en mensajes privados",
			WARN_USAGE: "warn [@member] [reason]",
			WARN_EXAMPLES: "$warn @Jaime#5311 Spam",
			// Errors
			WARN_ERR_REASON: `${e.error} | Porfavor pon una razón!`,
			// Content
			WARN_AUTOBAN: (member, number) => `${e.success} | **${member.user.tag}** ha sido baneado porque tiene más de **${number}** advertencias !`,
			WARN_AUTOKICK: (member, number) => `${e.success} | **${member.user.tag}** ha sido expulsado porque tiene más de **${number}** advertencias !`,
			WARN_SUCCESS_DM: (msg, reason) => `${e.warn} | Has sido advertido en **${msg.guild.name}** por **${msg.author.tag}** por la razón de **${reason}** !`,
			WARN_SUCCESS: (member, reason) => `${e.success} | **${member.user.tag}** ha sido advertido por mensajes privados para **${reason}** !`,
			WARN_TITLE_LOGS: (caseNumber) => `Warn | Caso #${caseNumber}`,

			/* CLEARSANCTIONS COMMAND */

			// Utils
			CLEARSANCTIONS_DESCRIPTION: "Elimina todas las sanciones de un usuario!",
			CLEARSANCTIONS_USAGE: "clear-sanctions [@member]",
			CLEARSANCTIONS_EXAMPLES: "$clear-sanctions @Jaime#5311",
			// Content
			CLEARSANCTIONS_SUCCESS: `${e.success} | Sanciones eliminadas!`,

			/* SETWARNS COMMAND */

			// Utils
			SETWARNS_DESCRIPTION: "Definir las sanciones que los miembros recibirán después de un cierto número de advertencias.!",
			SETWARNS_USAGE: "setwarns [kick/ban] [number/reset]",
			SETWARNS_EXAMPLES: "$setwarns kick 10\n$setwarns ban 10\n$setwarns ban reset",
			// Errors
			SETWARNS_ERR_SANCTION: `${e.error} | Indique un tipo de sanción válido! (\`kick\`, \`ban\`)`,
			// Content
			SETWARNS_SUCCESS_KICK: (prefix, number) => `${e.success} | ¡Configuración guardada! Cuando un miembro ha alcanzado ${number} advertencias, va a ser expulsado. Escribe \`${prefix}configuration\` para ver la configuración!`,
			SETWARNS_SUCCESS_BAN: (prefix, number) => `${e.success} | ¡Configuración guardada! Cuando un miembro ha alcanzado ${number} advertencias, va a ser baneado. Escribe \`${prefix}configuration\` para ver la configuración!`,
			SETWARNS_SUCCESS_RESET_KICK: (prefix) => `${e.success} | ¡Configuración guardada! La sanción de kick ya no es automática. Escribe \`${prefix}configuration\` para ver la nueva configuración!`,
			SETWARNS_SUCCESS_RESET_BAN: (prefix) => `${e.success} | ¡Configuración guardada! La sanción de ban ya no es automática! Escribe \`${prefix}configuration\` para ver la configuración!`,

			/* POLL COMMAND */

			// Utils
			POLL_DESCRIPTION: "Realiza una encuesta en el canal actual!",
			POLL_USAGE: "poll [question]",
			POLL_EXAMPLES: "$poll WaterLight es el mejor bot de discord?",
			// Errors
			POLL_ERR_QUESTION: `${e.error} | Tienes que poner una pregunta!`,
			POLL_ERR_TIMEOUT: `${e.error} | ¡Tiempo excedido! Porfavor escribe otra vez el comando!`,
			// Content
			POLL_FORM_MENTION: "Te gustaría agregar una mención al mensaje? Escribe \"yes\" o \"no\"!",
			POLL_FORM_MENTION_HE: "Escribe una de las siguientes: `every` (para mencionar a @ everyone) o `here` (para mencionar a @ here)!",
			POLL_REACT: `Reaccion a ${e.success} o ${e.error}!`,
			POLL_HEADING: "📊 Encuesta:",

			/* ANNOUNCEMENT COMMAND */

			// Utils
			ANNOUNCEMENT_DESCRIPTION: "Envia un mensaje de anuncio en el canal actual!",
			ANNOUNCEMENT_USAGE: "announcement [text]",
			ANNOUNCEMENT_EXAMPLES: "$announcement A new #spam channel!",
			// Errors
			ANNOUNCEMENT_ERR_TEXT: `${e.error} | Tienes que poner el mensaje de anuncio!`,
			ANNOUNCEMENT_ERR_TEXT_LENGTH: `${e.error} |Ingrese un texto de menos de 1030 caracteres.!`,
			ANNOUNCEMENT_ERR_TIMEOUT: `${e.error} | ¡Se acabó el tiempo! Por favor, vuelva a escribir el comando!`,
			// Content
			ANNOUNCEMENT_FORM_MENTION: "Te gustaría agregar una mención al mensaje? Escribe \"yes\" o \"no\"!",
			ANNOUNCEMENT_FORM_MENTION_HE: "Escriba una de las siguientes respuestas: `every` (para mencionar a @ everyone) o `here` (para mencionar a @ here)!",
			ANNOUNCEMENT_HEADING: "📢 Anuncio :",

			/* MODOGS EMBEDS */
			MODLOGS_HEADINGS: {
				USER: "Usuario",
				MODERATOR: "Moderador",
				REASON: "Razón",
				TIME: "Tiempo",
				EXPIRATION: "Expiración"
			},

			/* SETMODLOGS COMMAND */

			// Utils
			SETMODLOGS_DESCRIPTION: "Define el canal de logs!",
			SETMODLOGS_USAGE: "setmodlogs (#channel)",
			SETMODLOGS_EXAMPLES: "$setmodlogs #modlogs\n$setmodlogs",
			// Content
			SETMODLOGS_SUCCESS: (id) => `${e.success} | Logs de moderación serán enviados a <#${id}> !`,

			/* SOMEONE COMMAND */

			// Utils
			SOMEONE_DESCRIPTION: "Elige un miembro aleatorio en el servidor!",
			SOMEONE_USAGE: "someone",
			SOMEONE_EXAMPLES: "$someone\n@someone",
			// Headings
			SOMEONE_HEADINGS: [
				"Pseudo",
				"Discriminador",
				"ID"
			],

			/* SETSUGGESTS COMMAND */

			// Utils
			SETSUGGESTS_DESCRIPTION: "Define el canal de sugerencias!",
			SETSUGGESTS_USAGE: "setsuggests (#channel)",
			SETSUGGESTS_EXAMPLES: "$setsuggests #general\n$setsuggests",
			// Content
			SETSUGGESTS_SUCCESS: (channel) => `${e.success} | El canal de sugerencias ahora es ${channel} !`,

			/* ADDEMOTE COMMAND */

			// Utils
			ADDEMOTE_DESCRIPTION: "Agrega un emoji al servidor!",
			ADDEMOTE_USAGE: "addemote [URL] [name]",
			ADDEMOTE_EXAMPLES: "$addemote https://an-image-of.com/butterfly.png butterfly",
			// Errors
			ADDEMOTE_ERR_NAME: `${e.error} | Porfavor indica el nombre del emoji!`,
			ADDEMOTE_ERR_URL: `${e.error} | Porfavor indica el URL del emoji!`,
			ADDEMOTE_ERROR: `${e.error} | La URL de la imagen no es válida o no tienes más espacio en tu Discord!`,
			// Content
			ADDEMOTE_SUCCESS: (emote) => `${e.success} | Emoji ${emote.name} agregado al servidor! Hilo: \`${emote.toString()}\``,

			/* AUTOMOD COMMAND */

			// Utils
			AUTOMOD_DESCRIPTION: "Activa o desactiva la eliminación automática de invitaciones de discord",
			AUTOMOD_USAGE: "automod [on/off] (#channel)",
			AUTOMOD_EXAMPLES: "$automod on\n$automod off #general\n$automod off",
			// Errors
			AUTOMOD_ERR_STATUS: `${e.error} | Pon una status válida! (\`on\` ou \`off\`) !`,
			// Content
			AUTOMOD_SUCCESS_ENABLED: (prefix) => `${e.success} | ¡Las invitaciones de Discord se eliminarán automáticamente! Si desea ignorar un canal, simplemente escriba \`${prefix}automod off #channel\` ! Esto deshabilitará la moderación automática en el canal mencionado!`,
			AUTOMOD_SUCCESS_DISABLED_CHANNEL: (channel) => `${e.success} | La automoderación ya no se realizará en el canal. ${channel} !`,
			AUTOMOD_SUCCESS_DISABLED: `${e.success} | ¡Todo bien! La moderación automática ya no es efectiva en este servidor!`,
			AUTOMOD_MSG: (msg) => `${msg.author} | Su mensaje contenía una invitación de Discord, por lo que se ha eliminado. Si no fue intencional, puede editar su mensaje nuevamente, se le envió como un mensaje privado!`,

			/* SETLANG COMMAND */

			// Utils
			SETLANG_DESCRIPTION: "Cambia el lenguage del servidor!",
			SETLANG_USAGE: "setlang [french/english/spanish]",
			SETLANG_EXAMPLES: "$setlang french\n$setlang english\n$setlang spanish",
			// Errors
			SETLANG_ERR_LANG: `${e.error} | Porfavor pon un lenguaje valido (\`french\`, \`english\` o \`spanish\`) !`,
			// Content
			SETLANG_LANGS:[
				":flag_fr: | La langue de ce serveur est maintenant le Français !",
				":flag_gb: | The language of this server is now English!",
				":flag_es: | El lenguaje de este servidor ahora es español!"
			],

			/* FORTNITE COMMAND */

			// Utils
			FORTNITE_DESCRIPTION: "Obten stats de Fortnite!",
			FORTNITE_USAGE: "fortnite [psn/xbl/pc] [pseudo]",
			FORTNITE_EXAMPLES: "$fortnite pc Ninja",
			// Errors
			FORTNITE_ERR_PLATFORM: `${e.error} | Pon una platátaforma válida: \`psn\`, \`pc\` or \`xbl\` !`,
			FORTNITE_ERR_USERNAME: `${e.error} | Nombre de epic games inválido!`,
			FORTNITE_ERR_NOT_FOUND: (platform, username) => `${e.error} | El jugador \`${username}\` no fue encontrado en la platáforma \`${platform}\`!`,
			// Content
			FORTNITE_TITLE: (username, link) => `[${username}](${link})'s Fortnite Stats`,
			FORTNITE_STATS_RIGHT: (kd, percent) => `${kd} K/D - ${percent} WIN%`,
			FORTNITE_AVERAGE_KILLS: "KILLS/MATCH",
			FORTNITE_AVERAGE_KILL: "KILL/MATCH",
			FORTNITE_W_PERCENT: "V%",
			FORTNITE_KD: "K/D",
			FORTNITE_WINS : "WINS",
			FORTNITE_WIN : "WIN",
			FORTNITE_KILLS : "KILLS",
			FORTNITE_KILL : "KILL",
			FORTNITE_WINS_PERCENT : "WIN%",
			FORTNITE_MATCHES : "MATCHES",
			FORTNITE_MATCH : "MATCH",

			/* FORTNITESHOP COMMAND */

			// Utils
			FORTNITESHOP_DESCRIPTION: "Muestra la tienda de artículos fortnite.!",
			FORTNITESHOP_USAGE: "fortniteshop",
			FORTNITESHOP_EXAMPLES: "$fortniteshop",
			// Content
			FORTNITESHOP_HEADER: "TIENDA DE ARTÍCULOS DE FORTNITE",
			FORTNITESHOP_DAILY: "DIARIO",
			FORTNITESHOP_FEATURED: "DESTACADOS",
			FORTNITESHOP_TITLE: (date) => `Tienda de Fortnite de ${date}`,

			/* SETFORTNITESHOP COMMAND */

			// Utils
			SETFORTNITESHOP_DESCRIPTION: "Define el canal diario de la tienda Fortnite!",
			SETFORTNITESHOP_USAGE: "setfortniteshop (#channel)",
			SETFORTNITESHOP_EXAMPLES: "$setfortniteshop #shop\n$setfortniteshop",
			// Content
			SETFORTNITESHOP_DISABLED: `${e.success} | Tienda diaria de Fortnite deshabilitada!`,
			SETFORTNITESHOP_ENABLED: (id) => `${e.success} | Canal de la tienda Fortnite definido en <#${id}> !`,

			/* CALC COMMAND */

			// Utils
			CALC_DESCRIPTION: "Una calculadora capaz de resolver operaciones complejas y convertir unidades!",
			CALC_USAGE: "calc [calculation]",
			CALC_EXAMPLES: "$calc 10*5+sin(3)\n$calc 10cm to m",
			// Errors
			CALC_EMPTY: `${e.error} | EIngrese un cálculo!`,
			CALC_ERROR: `${e.error} | Ingrese un cálculo válido!`,
			// Content
			CALC_TITLE: "Calculadora",
			CALC_OPERATION: "Operación",
			CALC_RESULT: "Resultado",

			/* PURGE COMMAND */

			// Utils
			PURGE_DESCRIPTION: "Expulsa miembros inactivos!",
			PURGE_USAGE: "purge [days]",
			PURGE_EXAMPLES: "$purge 10",
			// Errors
			PURGE_ERR_DAYS: `${e.error} | Porfavor pon una cantidad de días!`,
			PURGE_ERR_TIMEOUT: `${e.error} | ¡Se acabó el tiempo! Por favor, vuelva a escribir el comando!`,
			// Content
			PURGE_CONFIRMATION: (members) => `${e.warn} | ${members} ¡los miembros serán expulsados! Para confirmar, escriba \`confirm\`!`,
			PURGE_SUCCESS: (members) => `${e.success} | ${members} miembros expulsados !`,

			/* DASHBOARD */

			FIRST_LOGIN: (username) => `${username} conectado por primera vez al dashboard! :tada:`,
			REGISTERED_FROM: (date) => `Miembro desde ${(date ? date : "")}`,
			HELLO: (username) => `Hola, ${username}`,
			SEARCH_SERVERS: "Buscando servidores....",
			SERVERS_LIST: "Lista de servidores",
			SELECTOR: "Selector",
			SERVERS_MANAGEMENT: "GESTIÓN DE SERVIDOR",
			ERR_NOT_FOUND: "Oops! Página no encontrada.",
			ERR_NOT_FOUND_CONTENT: "No encontramos la página que estabas buscando. Mientras tanto, puede volver al dashboard o intentar usar el formulario de búsqueda.",
			ERR_SOMETING_WENT_WRONG: "Oops! Algo salió mal.",
			ERR_SOMETING_WENT_WRONG_CONTENT: "Intentaremos remediar esto de inmediato. Mientras tanto, puede volver al dashboard o intentar usar el formulario de búsqueda.",
			ERR_NO_SERVER_FOUND: "No se encontró servidor",
			ERR_NO_SERVER_FOUND_CONTENT: "No hay servidor para mostrar. Asegúrese de haber iniciado sesión con la cuenta correcta e intente nuevamente.",
			SERVER_CONF: "Configuración",
			CONFIG_HEADINGS: {
				BASIC: "📝 Configuración básica",
				WELCOME: "👋 Mensaje de bienvenida",
				GOODBYE: "😢 Mensajes de salida",
				CHANNELS: "🌀 Canales especiales",
				AUTOROLE: "🎖️ Autorole"
			},
			CONFIG_FIELDS: {
				PREFIX: "Prefix",
				LANG: "Lenguaje",
				CHANNEL: "Canal",
				MESSAGE: "Mensaje",
				ROLE: "Rol",
				WITHIMAGE_WELCOME: "Incluye una gran imagen de bienvenida",
				WITHIMAGE_GOODBYE: "Incluye una gran imagen de salida",
				SUGGESTIONS: "Sugerencias",
				MODLOGS: "Logs de moderación",
				FORTNITESHOP: "Tienda de Fortnite"
			},
			ENABLE_MESSAGES: "Habilitar mensajes",
			DISABLE_MESSAGES: "Deshabilitar mensajes",
			ENABLE_AUTOROLE: "Habilitar autoroles",
			DISABLE_AUTOROLE: "Deshabilitar autoroles",
			SWITCH_LANG: "Cambiar a Francés",
			FIRST_LEAD_MONEY: "1º del ranking \"Credits\"",
			FIRST_LEAD_LEVEL: "1º del ranking \"Level\"",
			FIRST_LEAD_REP: "1º del ranking \"Reputation\"",
			VIEW_PUB_PROFILE: "Mira mi perfil público",
			SETTINGS_HEADINGS: [
				"🇬🇧 Language",
				"salir"
			]

        }
    }

    /**
	 * The method to get language strings
	 * @param {string} term The string or function to look up
	 * @param {...*} args Any arguments to pass to the lookup
	 * @returns {string|Function}
	 */
	get(term, ...args) {
		//if (!this.enabled && this !== this.store.default) return this.store.default.get(term, ...args);
		const value = this.language[term];
		/* eslint-disable new-cap */
		switch (typeof value) {
			case 'function': return value(...args);
			default: return value;
		}
	}

	getLang(){
		return lang;
	}

	printDate(pdate, isLongDate){
        let monthNames = [
            "Enero", "Febrero", "Marzo",
            "Abril", "Mayo", "Junio", "Julio",
            "Agosto", "Septiembre", "Octubre",
            "Noviembre", "Diciembre"
          ];

        let day = pdate.getDate();
        let monthIndex = pdate.getMonth();
        let year = pdate.getFullYear();
        let hour = pdate.getHours() < 10 ? "0" + pdate.getHours() : pdate.getHours();
        let minute = pdate.getMinutes() < 10 ? "0" + pdate.getMinutes() : pdate.getMinutes();

        let thedate = (isLongDate) ? day + " " + monthNames[monthIndex] + " " + year + " at " + hour + "h" + minute
        : day + " " + monthNames[monthIndex] + " " + year
        return thedate;
	}

	/**
	 * Parse ms and returns a string
	 * @param {number} milliseconds The amount of milliseconds
	 * @returns The parsed milliseconds
	 */
	convertMs(milliseconds){
		let roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;
		let days = roundTowardsZero(milliseconds / 86400000),
		hours = roundTowardsZero(milliseconds / 3600000) % 24,
		minutes = roundTowardsZero(milliseconds / 60000) % 60,
		seconds = roundTowardsZero(milliseconds / 1000) % 60;
		if(seconds === 0){
			seconds++;
		}
		let isDays = days > 0,
		isHours = hours > 0,
		isMinutes = minutes > 0;
		let pattern =
		(!isDays ? "" : (isMinutes || isHours) ? "{days} días, " : "{days} días y ")+
		(!isHours ? "" : (isMinutes) ? "{hours} horas, " : "{hours} horas y ")+
		(!isMinutes ? "" : "{minutes} minutos y ")+
		("{seconds} segundos");
		let sentence = pattern
			.replace("{duration}", pattern)
			.replace("{days}", days)
			.replace("{hours}", hours)
			.replace("{minutes}", minutes)
			.replace("{seconds}", seconds);
		return sentence;
	}

}