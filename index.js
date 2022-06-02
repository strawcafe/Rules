const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ],
});

var EmbedComportement = new Discord.MessageEmbed()
.setColor('#303136')
.setTitle('<a:DiscordLogo:974533427783139348> Comportement')
.setThumbnail('https://media.discordapp.net/attachments/966739100298281090/974879145630777435/jdix97ie3px71.png')
.setDescription(`<:symyes:974881085483794463> ****1. Respect et entraide.****
Tout propos émis doit l’être dans le plus grand respect de l’autre en ayant à l’esprit de préserver la fragilité émotionnelle de tout un chacun. L’entraide est la règle.

<:symyes:974881085483794463> ****2. Régulation et animation du groupe.****
Administrateurs et modérateurs dialoguent et maintiennent la paix dans la communauté. Les animateurs rendent le groupe plus vivant et plus déterminé. Certains animateurs apportent un conseil précieux, leurs compétences et leur engagement est digne du respect de la communauté.

<:symyes:974881085483794463> ****3. Une parole libre et respectueuse.****
Sur les différents espaces de discussion, la parole est libre, mais nous interdisons les propos racistes, sexistes, les incitations à la haine ou à la violence. Pas de drague lourde ni de harcèlement sexuel ou moral. Pas de mots grossiers, d’insultes, de moqueries, d’injures ou d’insinuations.

<:symyes:974881085483794463> ****4. Des débats utiles entre membres transparents.****
Pas de règlement de compte sur le serveur. Il est proscrit d’identifier un membre pour lui dire quelque chose de désagréable et d’utiliser une identité masquée en double d’une identité publique. Aucune remarque à propos de l’orthographe ou la façon d’écrire des membres. Toute expression est respectable.

<:symno:974881149908299796> ****5. Vente, recrutement, contenus émotionnellement sensibles ou dégradants.****
Publicité commerciale, recrutement, vente, diffusion d’images ou de films pornographiques ou d’horreur dans les discussions sont interdits.

<:symyes:974881085483794463> ****6. Des contributions argumentées.****
Tout lien vers un site, un groupe ou une page externe doit être commenté par l’auteur pour justifier une ouverture de débat sur le sujet évoqué par le lien. On vérifiera avant de poster que le sujet proposé ne relève pas de la rumeur. Les liens vers les “pièges à clics” sont proscrits.

<:symno:974881149908299796> ****7. Débat politique ou religieux.****
Tout prosélytisme politique ou religieux est interdit : chacun a ses opinions, on ne peut risquer d’offenser les autres par ce type de sujet. Les messages de voeux associés à une fête traditionnelle peuvent être émis dans un post ouvert pour la circonstance. Ils s’adressent à l’ensemble du groupe.

<:symyes:974881085483794463> ****8. Mesures prises en cas de violation des règles.****
Le non respect d’une ou plusieurs de ces règles entraine un “ban” immédiat et temporaire du compte du membre par la modération ou les administrateurs. A l’issue de cette procédure, le membre est réintégré ou exclu.`)
.setImage('')
var EmbedRules = new Discord.MessageEmbed()
.setColor('#303136')
.setTitle('<a:DiscordLogo:974533427783139348> Règlement du serveur')
.setDescription(`<:symyes:974881085483794463> Veuillez respecter le règlement du serveur`)
.setImage('')
var EmbedTextuel = new Discord.MessageEmbed()
.setColor('#303136')
.setThumbnail('https://i.imgur.com/AFj7uQj.png')
.setTitle('<a:DiscordLogo:974533427783139348> Réglement Textuel')
.setDescription(`<:symyes:974881085483794463> ****1. Soyez convivial, patient et accueillant.****
Participez à la sécurité de l'environnement et aidez-nous à veiller à ce que tout le monde respecte les présentes Règles.

<:symyes:974881085483794463> ****2. Soyez respectueux.****
Nous ne serons pas toujours tous d'accord, mais le désaccord ne justifie pas l'incivilité et les mauvaises manières. Nous sommes tous susceptibles d'éprouver de la frustration de temps à autre, mais nous ne pouvons pas laisser cette frustration se transformer en attaque personnelle. Il est important de garder à l'esprit qu'une communauté dans laquelle les personnes se sentent mal à l'aise ou menacées n'est pas productive.

<:symyes:974881085483794463> ****3. Faites attention aux mots que vous employez.****
Soyez gentil(le) envers les autres. N'insultez pas ou ne dénigrez pas les autres membres. Le harcèlement et autres comportements d'exclusion ne sont pas acceptables.

<:symyes:974881085483794463> ****4. Essayez de comprendre les raisons de notre désaccord.****
Les désaccords, qu'ils soient sociaux ou techniques, se produisent tout le temps. Nous devons résoudre les désaccords et les opinions divergentes de manière constructive. Gardez à l'esprit que nous sommes tous différents. La force de notre communauté émane de sa diversité, des gens d'horizons divers. Différentes personnes ont des points de vue divers sur les problèmes. Notre incapacité à comprendre pourquoi une personne a tel point de vue ne signifie pas qu'elle a tort. N'oubliez pas que l'erreur est humaine et que rejeter les fautes les uns sur les autres ne mène nulle part. Concentrons-nous sur la collaboration pour résoudre les problèmes et apprendre de nos erreurs.`)
var EmbedSecurité = new Discord.MessageEmbed()
.setColor('#303136')
.setTitle('<a:DiscordLogo:974533427783139348> Securité')
.setThumbnail('https://media.discordapp.net/attachments/966739100298281090/974879145395892224/i1epxqhd3px71.png')
.setDescription(`<:symno:974881149908299796> ****1. Harcèlement et cyberintimidation.****
Nous ne tolérons pas ces actes. Ils correspondent par exemple à des commentaires ou à des actions visant à :
> Traquer, agresser, intimider, blesser, attaquer, abuser ou humilier quelqu'un (ou une chose à laquelle une personne peut s'intéresser). Cela comprend l'utilisation ou l'encouragement à l'utilisation de vulgarités (jurons).

> Révéler les données personnelles d'une personne.

> Sexualiser quelqu'un ou quelque chose, ce qui comprend le harcèlement et la violence sexuels sous quelque forme que ce soit.

> Harceler ou isoler une personne (ou une chose à laquelle une personne peut s'intéresser) dans le but de la ridiculiser, d'abuser d'elle, de perpétrer une attaque malveillante contre elle, ou de réaliser toute chose de même nature.

> Encourager les autres personnes à faire ce qui est listé ci-dessus.

<:symno:974881149908299796> ****2. Menaces et automutilation.****
Dans l'environnement numérique, il est difficile de faire la différence entre ce qui tient de l'humour et ce qui est sérieux. Nous prenons donc toutes les menaces au sérieux et n'autorisons aucune menace sur ce serveur.

<:symno:974881149908299796> ****3. Chercher des rendez-vous amoureux ou des partenaires.****
En tant que communauté sociale, Straw s'efforce de fournir un environnement sécurisé pour rencontrer des amis en ligne, jouer, discuter et collaborer sur des projets créatifs. Cependant, cette communauté n'est pas faite pour chercher des rencontres amoureuses.

<:symno:974881149908299796> ****4. Discrimination.****
Nous chérissons explicitement la diversité d'âge, de sexe, d'identité ou d'expression du genre, de culture, d'ethnicité, de langue, d'origine nationale, d'opinions politiques, de profession, de race, de religion, d'orientation sexuelle, de statut socio-économique et de capacité technique. Nous ne tolérerons aucune discrimination basée sur toute caractéristique protégée ci-dessus, notamment les membres handicapés.`);

client.on("ready", () => {
    console.log("Le bot est en ligne!");

    });

    client.on("messageCreate", message => {

        if(message.author.bot) return;

        var row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageSelectMenu()
            .setCustomId("select")
            .setPlaceholder("Lire le règlement du serveur")
            .addOptions([
                {
                    label: "Important",
                  emoji: "<:alert:974884617360404582>",
                    description: "Comporte-toi bien avec les autres Les problèmes ne peuvent pas résoudre les problèmes",
                    value: "Comportement"
                },
                {
                    label: "Comportement",
                  emoji: "<:check:974884550608048138>",
                    description: "Sois respectueux des autres et ils te respecteront.",
                    value: "Respect"
                },
              {
                    label: "Securité",
                emoji: "<:cadena:974884488859492412>",
                    description: "Nous prenons votre sécurité très au sérieux, pensez à prendre soin de vous.",
                    value: "Securité"
                }
            ])
        );
        
            if(message.content.startsWith(".regle")) {
                console.log("Commande detecter");
                message.channel.send({embeds: [EmbedRules], components: [row]});
            }

        
    });

    client.on("interactionCreate", interaction => {
            if(interaction.isSelectMenu()){
            if(interaction.customId === "select"){
                console.log("Selection made");
            
                if(interaction.values == "Comportement"){
                    interaction.reply({embeds: [EmbedComportement], ephemeral: true});
                
            };
              if(interaction.values == "Respect"){
                    interaction.reply({embeds: [EmbedTextuel], ephemeral: true});
                
            };
              if(interaction.values == "Securité"){
                    interaction.reply({embeds: [EmbedSecurité], ephemeral: true});
                
            }
        }
        }
    });
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Salut toi tu as était sage ?'));

app.listen(port, () => console.log(`Le règlement est en ligne sur le port ${port}`));

    client.login(process.env.TOKEN);