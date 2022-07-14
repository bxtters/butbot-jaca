const { MessageEmbed } = require('discord.js');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
    name: 'gracz',	
    description: 'Statystyki graczy z serwera (redstone-mc.pl).',
	category: "redstone",
    async execute(message, args, params, client) {
        if (!args[0] || !args[1]) {
			return message.reply('```Poprawne użycie: .gracz [wersja] [nick]\n\nWersje: 1.18, 1.17, 1.17e```');
		}
		else if (args[0] === '1.18') {
			const highscores = await fetch('https://redstone-mc.pl/normal118/highscores.json').then(res => res.json());
			let btravel = "0";
			let playedtime = "0";
			let playerkills = "0";
			let deaths = "0";
			let stone = "0";
			let diams = "0";
			let damage = "0";
			let trade = "0";
			let enderperly = "0";
			let zlotejapka = "0";
			let witchery = "0";
			let redstone = "0";
			let zelazo = "0";
			let zloto = "0";
			let zabitemoby = "0";
			let obsydian = "0";
			let trojzab = "0";

			for (i = 0; i < highscores.scores["Blocks traveled"].scores.length; i++) {
				if (highscores.scores["Blocks traveled"].scores[i].playerName === args[1]) {
					btravel = highscores.scores["Blocks traveled"].scores[i].score + ` \`[TOP ${highscores.scores["Blocks traveled"].scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_PlayedMinutes.scores.length; i++) {
				if (highscores.scores.ts_PlayedMinutes.scores[i].playerName === args[1]) {
					playedtime = highscores.scores.ts_PlayedMinutes.scores[i].score + ` \`[TOP ${highscores.scores.ts_PlayedMinutes.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_UseEnderPearl.scores.length; i++) {
				if (highscores.scores.ts_UseEnderPearl.scores[i].playerName === args[1]) {
					enderperly = highscores.scores.ts_UseEnderPearl.scores[i].score + ` \`[TOP ${highscores.scores.ts_UseEnderPearl.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_PlayerKills.scores.length; i++) {
				if (highscores.scores.ts_PlayerKills.scores[i].playerName === args[1]) {
					playerkills = highscores.scores.ts_PlayerKills.scores[i].score + ` \`[TOP ${highscores.scores.ts_PlayerKills.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_Deaths.scores.length; i++) {
				if (highscores.scores.ts_Deaths.scores[i].playerName === args[1]) {
					deaths = highscores.scores.ts_Deaths.scores[i].score + ` \`[TOP ${highscores.scores.ts_Deaths.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores["Stone mined"].scores.length; i++) {
				if (highscores.scores["Stone mined"].scores[i].playerName === args[1]) {
					stone = highscores.scores["Stone mined"].scores[i].score + ` \`[TOP ${highscores.scores["Stone mined"].scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MineDiamond.scores.length; i++) {
				if (highscores.scores.ts_MineDiamond.scores[i].playerName === args[1]) {
					diams = highscores.scores.ts_MineDiamond.scores[i].score + ` \`[TOP ${highscores.scores.ts_MineDiamond.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_VillagerTrade.scores.length; i++) {
				if (highscores.scores.ts_VillagerTrade.scores[i].playerName === args[1]) {
					trade = highscores.scores.ts_VillagerTrade.scores[i].score + ` \`[TOP ${highscores.scores.ts_VillagerTrade.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_DamageTaken.scores.length; i++) {
				if (highscores.scores.ts_DamageTaken.scores[i].playerName === args[1]) {
					damage = highscores.scores.ts_DamageTaken.scores[i].score + ` \`[TOP ${highscores.scores.ts_DamageTaken.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_UseGoldApple.scores.length; i++) {
				if (highscores.scores.ts_UseGoldApple.scores[i].playerName === args[1]) {
					zlotejapka = highscores.scores.ts_UseGoldApple.scores[i].score + ` \`[TOP ${highscores.scores.ts_UseGoldApple.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_KillWither.scores.length; i++) {
				if (highscores.scores.ts_KillWither.scores[i].playerName === args[1]) {
					witchery = highscores.scores.ts_KillWither.scores[i].score + ` \`[TOP ${highscores.scores.ts_KillWither.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_PlayerKills.scores.length; i++) {
				if (highscores.scores.ts_PlayerKills.scores[i].playerName === args[1]) {
					playerkills = highscores.scores.ts_PlayerKills.scores[i].score + ` \`[TOP ${highscores.scores.ts_PlayerKills.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MineRedstone.scores.length; i++) {
				if (highscores.scores.ts_MineRedstone.scores[i].playerName === args[1]) {
					redstone = highscores.scores.ts_MineRedstone.scores[i].score + ` \`[TOP ${highscores.scores.ts_MineRedstone.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MineIron.scores.length; i++) {
				if (highscores.scores.ts_MineIron.scores[i].playerName === args[1]) {
					zelazo = highscores.scores.ts_MineIron.scores[i].score + ` \`[TOP ${highscores.scores.ts_MineIron.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MineGold.scores.length; i++) {
				if (highscores.scores.ts_MineGold.scores[i].playerName === args[1]) {
					zloto = highscores.scores.ts_MineGold.scores[i].score + ` \`[TOP ${highscores.scores.ts_MineGold.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MobKills.scores.length; i++) {
				if (highscores.scores.ts_MobKills.scores[i].playerName === args[1]) {
					zabitemoby = highscores.scores.ts_MobKills.scores[i].score + ` \`[TOP ${highscores.scores.ts_MobKills.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MineObsidian.scores.length; i++) {
				if (highscores.scores.ts_MineObsidian.scores[i].playerName === args[1]) {
					obsydian = highscores.scores.ts_MineObsidian.scores[i].score + ` \`[TOP ${highscores.scores.ts_MineObsidian.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_UseTrident.scores.length; i++) {
				if (highscores.scores.ts_UseTrident.scores[i].playerName === args[1]) {
					trojzab = highscores.scores.ts_UseTrident.scores[i].score + ` \`[TOP ${highscores.scores.ts_UseTrident.scores[i].index}]\``;
					break;
				}
			}
			const mysql = await fetch(`http://redstone-mc.pl/panel.php?given_name=${args[1]}`).then(res => res.text());
			const mysqlsplit = mysql.split(`</p>`);
			let lacznyczas = "Brak";
			let ranga = "Brak";
			let ostatnielogowanie118 = "Brak";
			let iloscdzialek118 = "Brak";
			let ilosckasy118 = "Brak";

			for (i = 0; i < mysqlsplit.length; i++) {
				if (mysqlsplit[i].includes('Łączny czas gry')) {
					lacznyczas = mysqlsplit[i].replace('<br>', ' ').replace(/<\/?[^>]+(>|$)/g, "").replace('(Wyświetl graczy online)Łączny czas gry ', '');
					break;
				}
			}
				for (i = 0; i < mysqlsplit.length; i++) {
					if (mysqlsplit[i].includes('Ostatnie logowanie')) {
						ostatnielogowanie118 = mysqlsplit[i].replace('<br>', ' ').replace(/<\/?[^>]+(>|$)/g, "").replace('Ostatnie logowanie ', '');
						break;
					}
				}
				for (i = 0; i < mysqlsplit.length; i++) {
					if (mysqlsplit[i].includes('Posiadanych działek')) {
						iloscdzialek118 = mysqlsplit[i].replace('<br>', ' ').replace(/<\/?[^>]+(>|$)/g, "").replace('Posiadanych działek ', '');
						break;
					}
				}
				for (i = 0; i < mysqlsplit.length; i++) {
					if (mysqlsplit[i].includes('Łączny majątek na wszystkich trybach')) {
						ilosckasy118 = mysqlsplit[i].replace('<br>', ' ').replace(/<\/?[^>]+(>|$)/g, "").replace('(Wyświetl TOP10)Łączny majątek na wszystkich trybach ', '');
						break;
					}
			}													
			for (i = 0; i < mysqlsplit.length; i++) {
				if (mysqlsplit[i].includes('Tryb SURVIVAL 1.18:')) {
					ranga = mysqlsplit[i + 2].replace('<br>', ' ').replace(/<\/?[^>]+(>|$)/g, "").replace('Ranga ', '');
					break;
				}
			}

			const embed = new MessageEmbed();
			embed.setTitle(`📱 Statystyki gracza z 1.18: ${args[1]}`);
			embed.setDescription(`***• ---------- GLOBALNE ---------- •***\n *•Ostatnie logowanie:* ***${ostatnielogowanie118}*** \n *•Łączny czas gry:* ***${lacznyczas}***\n *•Ranga:* ***${ranga}***\n  *•Łączny majątek na wszystkich trybach:* ***${ilosckasy118}***\n ***• ---------- OGÓLNE ---------- •***\n *•Zabitych graczy:* ***${playerkills}***\n *•Śmierci:* ***${deaths}***\n *•Przebyta droga:* ***${btravel}***\n*•Czas gry od śmierci:* ***${playedtime}***\n ***• ------------ PVP ------------ •***\n  *•Otrzymane obrażenia:* ***${damage}***\n *•Zjedzonych złotych jabłek:* ***${zlotejapka}***\n *•Rzuconych enderpereł:* ***${enderperly}***\n•Rzuceń trójzębem: ***${trojzab}***\n • ***---------- KOPANIE ---------- •***\n  *•Wykopanego kamienia:* ***${stone}***\n*•Wykopanych diamentów:* ***${diams}*** **[nie nalicza z kamienia deepslate]**\n *•Wykopanego redstona:* ***${redstone}***\n*•Wykopanego żelaza:* ***${zelazo}***\n*•Wykopanego złota:* ***${zloto}***\n*•Wykopanego obsydianu:* ***${obsydian}***\n ***• ----------- INNE ----------- •***\n *•Wymiany z villagerami:* ***${trade}***\n *•Zabitych witherów:* ***${witchery}***\n*•Zabitych mobów:* ***${zabitemoby}***\n`);
			embed.setColor('RANDOM');
			embed.setTimestamp(Date.now());
			embed.setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`); //https://minotar.net/armor/body/user/100.png
			message.reply({ embeds: [embed] });
		}
        else if (args[0] === '1.19') {
			const highscores = await fetch('https://redstone-mc.pl/normal119/highscores.json').then(res => res.json());
			let btravel = "0";
			let playedtime = "0";
			let playerkills = "0";
			let deaths = "0";
			let stone = "0";
			let diams = "0";
			let damage = "0";
			let trade = "0";
			let enderperly = "0";
			let zlotejapka = "0";
			let witchery = "0";
			let redstone = "0";
			let zelazo = "0";
			let zloto = "0";
			let zabitemoby = "0";
			let obsydian = "0";
			let trojzab = "0";

			for (i = 0; i < highscores.scores["Blocks traveled"].scores.length; i++) {
				if (highscores.scores["Blocks traveled"].scores[i].playerName === args[1]) {
					btravel = highscores.scores["Blocks traveled"].scores[i].score + ` \`[TOP ${highscores.scores["Blocks traveled"].scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_PlayedMinutes.scores.length; i++) {
				if (highscores.scores.ts_PlayedMinutes.scores[i].playerName === args[1]) {
					playedtime = highscores.scores.ts_PlayedMinutes.scores[i].score + ` \`[TOP ${highscores.scores.ts_PlayedMinutes.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_UseEnderPearl.scores.length; i++) {
				if (highscores.scores.ts_UseEnderPearl.scores[i].playerName === args[1]) {
					enderperly = highscores.scores.ts_UseEnderPearl.scores[i].score + ` \`[TOP ${highscores.scores.ts_UseEnderPearl.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_PlayerKills.scores.length; i++) {
				if (highscores.scores.ts_PlayerKills.scores[i].playerName === args[1]) {
					playerkills = highscores.scores.ts_PlayerKills.scores[i].score + ` \`[TOP ${highscores.scores.ts_PlayerKills.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_Deaths.scores.length; i++) {
				if (highscores.scores.ts_Deaths.scores[i].playerName === args[1]) {
					deaths = highscores.scores.ts_Deaths.scores[i].score + ` \`[TOP ${highscores.scores.ts_Deaths.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores["Stone mined"].scores.length; i++) {
				if (highscores.scores["Stone mined"].scores[i].playerName === args[1]) {
					stone = highscores.scores["Stone mined"].scores[i].score + ` \`[TOP ${highscores.scores["Stone mined"].scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MineDiamond.scores.length; i++) {
				if (highscores.scores.ts_MineDiamond.scores[i].playerName === args[1]) {
					diams = highscores.scores.ts_MineDiamond.scores[i].score + ` \`[TOP ${highscores.scores.ts_MineDiamond.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_VillagerTrade.scores.length; i++) {
				if (highscores.scores.ts_VillagerTrade.scores[i].playerName === args[1]) {
					trade = highscores.scores.ts_VillagerTrade.scores[i].score + ` \`[TOP ${highscores.scores.ts_VillagerTrade.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_DamageTaken.scores.length; i++) {
				if (highscores.scores.ts_DamageTaken.scores[i].playerName === args[1]) {
					damage = highscores.scores.ts_DamageTaken.scores[i].score + ` \`[TOP ${highscores.scores.ts_DamageTaken.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_UseGoldApple.scores.length; i++) {
				if (highscores.scores.ts_UseGoldApple.scores[i].playerName === args[1]) {
					zlotejapka = highscores.scores.ts_UseGoldApple.scores[i].score + ` \`[TOP ${highscores.scores.ts_UseGoldApple.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_KillWither.scores.length; i++) {
				if (highscores.scores.ts_KillWither.scores[i].playerName === args[1]) {
					witchery = highscores.scores.ts_KillWither.scores[i].score + ` \`[TOP ${highscores.scores.ts_KillWither.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_PlayerKills.scores.length; i++) {
				if (highscores.scores.ts_PlayerKills.scores[i].playerName === args[1]) {
					playerkills = highscores.scores.ts_PlayerKills.scores[i].score + ` \`[TOP ${highscores.scores.ts_PlayerKills.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MineRedstone.scores.length; i++) {
				if (highscores.scores.ts_MineRedstone.scores[i].playerName === args[1]) {
					redstone = highscores.scores.ts_MineRedstone.scores[i].score + ` \`[TOP ${highscores.scores.ts_MineRedstone.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MineIron.scores.length; i++) {
				if (highscores.scores.ts_MineIron.scores[i].playerName === args[1]) {
					zelazo = highscores.scores.ts_MineIron.scores[i].score + ` \`[TOP ${highscores.scores.ts_MineIron.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MineGold.scores.length; i++) {
				if (highscores.scores.ts_MineGold.scores[i].playerName === args[1]) {
					zloto = highscores.scores.ts_MineGold.scores[i].score + ` \`[TOP ${highscores.scores.ts_MineGold.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MobKills.scores.length; i++) {
				if (highscores.scores.ts_MobKills.scores[i].playerName === args[1]) {
					zabitemoby = highscores.scores.ts_MobKills.scores[i].score + ` \`[TOP ${highscores.scores.ts_MobKills.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MineObsidian.scores.length; i++) {
				if (highscores.scores.ts_MineObsidian.scores[i].playerName === args[1]) {
					obsydian = highscores.scores.ts_MineObsidian.scores[i].score + ` \`[TOP ${highscores.scores.ts_MineObsidian.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_UseTrident.scores.length; i++) {
				if (highscores.scores.ts_UseTrident.scores[i].playerName === args[1]) {
					trojzab = highscores.scores.ts_UseTrident.scores[i].score + ` \`[TOP ${highscores.scores.ts_UseTrident.scores[i].index}]\``;
					break;
				}
			}
			const mysql = await fetch(`http://redstone-mc.pl/panel.php?given_name=${args[1]}`).then(res => res.text());
			const mysqlsplit = mysql.split(`</p>`);
			let lacznyczas = "Brak";
			let ranga = "Brak";
			let ostatnielogowanie118 = "Brak";
			let iloscdzialek118 = "Brak";
			let ilosckasy118 = "Brak";

			for (i = 0; i < mysqlsplit.length; i++) {
				if (mysqlsplit[i].includes('Łączny czas gry')) {
					lacznyczas = mysqlsplit[i].replace('<br>', ' ').replace(/<\/?[^>]+(>|$)/g, "").replace('(Wyświetl graczy online)Łączny czas gry ', '');
					break;
				}
			}
				for (i = 0; i < mysqlsplit.length; i++) {
					if (mysqlsplit[i].includes('Ostatnie logowanie')) {
						ostatnielogowanie118 = mysqlsplit[i].replace('<br>', ' ').replace(/<\/?[^>]+(>|$)/g, "").replace('Ostatnie logowanie ', '');
						break;
					}
				}
				for (i = 0; i < mysqlsplit.length; i++) {
					if (mysqlsplit[i].includes('Posiadanych działek')) {
						iloscdzialek118 = mysqlsplit[i].replace('<br>', ' ').replace(/<\/?[^>]+(>|$)/g, "").replace('Posiadanych działek ', '');
						break;
					}
				}
				for (i = 0; i < mysqlsplit.length; i++) {
					if (mysqlsplit[i].includes('Łączny majątek na wszystkich trybach')) {
						ilosckasy118 = mysqlsplit[i].replace('<br>', ' ').replace(/<\/?[^>]+(>|$)/g, "").replace('(Wyświetl TOP10)Łączny majątek na wszystkich trybach ', '');
						break;
					}
			}													
			for (i = 0; i < mysqlsplit.length; i++) {
				if (mysqlsplit[i].includes('Tryb SURVIVAL 1.19:')) {
					ranga = mysqlsplit[i + 2].replace('<br>', ' ').replace(/<\/?[^>]+(>|$)/g, "").replace('Ranga ', '');
					break;
				}
			}

			const embed = new MessageEmbed();
			embed.setTitle(`📱 Statystyki gracza z 1.19: ${args[1]}`);
			embed.setDescription(`***• ---------- GLOBALNE ---------- •***\n *•Ostatnie logowanie:* ***${ostatnielogowanie118}*** \n *•Łączny czas gry:* ***${lacznyczas}***\n *•Ranga:* ***${ranga}***\n  *•Łączny majątek na wszystkich trybach:* ***${ilosckasy118}***\n ***• ---------- OGÓLNE ---------- •***\n *•Zabitych graczy:* ***${playerkills}***\n *•Śmierci:* ***${deaths}***\n *•Przebyta droga:* ***${btravel}***\n*•Czas gry od śmierci:* ***${playedtime}***\n ***• ------------ PVP ------------ •***\n  *•Otrzymane obrażenia:* ***${damage}***\n *•Zjedzonych złotych jabłek:* ***${zlotejapka}***\n *•Rzuconych enderpereł:* ***${enderperly}***\n•Rzuceń trójzębem: ***${trojzab}***\n • ***---------- KOPANIE ---------- •***\n  *•Wykopanego kamienia:* ***${stone}***\n*•Wykopanych diamentów:* ***${diams}*** **[nie nalicza z kamienia deepslate]**\n *•Wykopanego redstona:* ***${redstone}***\n*•Wykopanego żelaza:* ***${zelazo}***\n*•Wykopanego złota:* ***${zloto}***\n*•Wykopanego obsydianu:* ***${obsydian}***\n ***• ----------- INNE ----------- •***\n *•Wymiany z villagerami:* ***${trade}***\n *•Zabitych witherów:* ***${witchery}***\n*•Zabitych mobów:* ***${zabitemoby}***\n`);
			embed.setColor('RANDOM');
			embed.setTimestamp(Date.now());
			embed.setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`); //https://minotar.net/armor/body/user/100.png
			message.reply({ embeds: [embed] });
		}
		else if (args[0] === '1.17') {
			const highscores = await fetch('https://redstone-mc.pl/normal117/highscores.json').then(res => res.json());
			let btravel = "0";
			let playedtime = "0";
			let playerkills = "0";
			let deaths = "0";
			let stone = "0";
			let diams = "0";
			let damage = "0";
			let trade = "0";
			let enderperly = "0";
			let zlotejapka = "0";
			let witchery = "0";
			let redstone = "0";
			let zelazo = "0";
			let zloto = "0";
			let zabitemoby = "0";
			let obsydian = "0";
			let trojzab = "0";

			for (i = 0; i < highscores.scores["Blocks traveled"].scores.length; i++) {
				if (highscores.scores["Blocks traveled"].scores[i].playerName === args[1]) {
					btravel = highscores.scores["Blocks traveled"].scores[i].score + ` \`[TOP ${highscores.scores["Blocks traveled"].scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_PlayedMinutes.scores.length; i++) {
				if (highscores.scores.ts_PlayedMinutes.scores[i].playerName === args[1]) {
					playedtime = highscores.scores.ts_PlayedMinutes.scores[i].score + ` \`[TOP ${highscores.scores.ts_PlayedMinutes.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_UseEnderPearl.scores.length; i++) {
				if (highscores.scores.ts_UseEnderPearl.scores[i].playerName === args[1]) {
					enderperly = highscores.scores.ts_UseEnderPearl.scores[i].score + ` \`[TOP ${highscores.scores.ts_UseEnderPearl.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_PlayerKills.scores.length; i++) {
				if (highscores.scores.ts_PlayerKills.scores[i].playerName === args[1]) {
					playerkills = highscores.scores.ts_PlayerKills.scores[i].score + ` \`[TOP ${highscores.scores.ts_PlayerKills.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_Deaths.scores.length; i++) {
				if (highscores.scores.ts_Deaths.scores[i].playerName === args[1]) {
					deaths = highscores.scores.ts_Deaths.scores[i].score + ` \`[TOP ${highscores.scores.ts_Deaths.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores["Stone mined"].scores.length; i++) {
				if (highscores.scores["Stone mined"].scores[i].playerName === args[1]) {
					stone = highscores.scores["Stone mined"].scores[i].score + ` \`[TOP ${highscores.scores["Stone mined"].scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MineDiamond.scores.length; i++) {
				if (highscores.scores.ts_MineDiamond.scores[i].playerName === args[1]) {
					diams = highscores.scores.ts_MineDiamond.scores[i].score + ` \`[TOP ${highscores.scores.ts_MineDiamond.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_VillagerTrade.scores.length; i++) {
				if (highscores.scores.ts_VillagerTrade.scores[i].playerName === args[1]) {
					trade = highscores.scores.ts_VillagerTrade.scores[i].score + ` \`[TOP ${highscores.scores.ts_VillagerTrade.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_DamageTaken.scores.length; i++) {
				if (highscores.scores.ts_DamageTaken.scores[i].playerName === args[1]) {
					damage = highscores.scores.ts_DamageTaken.scores[i].score + ` \`[TOP ${highscores.scores.ts_DamageTaken.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_UseGoldApple.scores.length; i++) {
				if (highscores.scores.ts_UseGoldApple.scores[i].playerName === args[1]) {
					zlotejapka = highscores.scores.ts_UseGoldApple.scores[i].score + ` \`[TOP ${highscores.scores.ts_UseGoldApple.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_KillWither.scores.length; i++) {
				if (highscores.scores.ts_KillWither.scores[i].playerName === args[1]) {
					witchery = highscores.scores.ts_KillWither.scores[i].score + ` \`[TOP ${highscores.scores.ts_KillWither.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_PlayerKills.scores.length; i++) {
				if (highscores.scores.ts_PlayerKills.scores[i].playerName === args[1]) {
					playerkills = highscores.scores.ts_PlayerKills.scores[i].score + ` \`[TOP ${highscores.scores.ts_PlayerKills.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MineRedstone.scores.length; i++) {
				if (highscores.scores.ts_MineRedstone.scores[i].playerName === args[1]) {
					redstone = highscores.scores.ts_MineRedstone.scores[i].score + ` \`[TOP ${highscores.scores.ts_MineRedstone.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MineIron.scores.length; i++) {
				if (highscores.scores.ts_MineIron.scores[i].playerName === args[1]) {
					zelazo = highscores.scores.ts_MineIron.scores[i].score + ` \`[TOP ${highscores.scores.ts_MineIron.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MineGold.scores.length; i++) {
				if (highscores.scores.ts_MineGold.scores[i].playerName === args[1]) {
					zloto = highscores.scores.ts_MineGold.scores[i].score + ` \`[TOP ${highscores.scores.ts_MineGold.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MobKills.scores.length; i++) {
				if (highscores.scores.ts_MobKills.scores[i].playerName === args[1]) {
					zabitemoby = highscores.scores.ts_MobKills.scores[i].score + ` \`[TOP ${highscores.scores.ts_MobKills.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MineObsidian.scores.length; i++) {
				if (highscores.scores.ts_MineObsidian.scores[i].playerName === args[1]) {
					obsydian = highscores.scores.ts_MineObsidian.scores[i].score + ` \`[TOP ${highscores.scores.ts_MineObsidian.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_UseTrident.scores.length; i++) {
				if (highscores.scores.ts_UseTrident.scores[i].playerName === args[1]) {
					trojzab = highscores.scores.ts_UseTrident.scores[i].score + ` \`[TOP ${highscores.scores.ts_UseTrident.scores[i].index}]\``;
					break;
				}
			}
			const mysql = await fetch(`http://redstone-mc.pl/panel.php?given_name=${args[1]}`).then(res => res.text());
			const mysqlsplit = mysql.split(`</p>`);
			let lacznyczas = "Brak";
			let ranga = "Brak";
			let ostatnielogowanie117 = "Brak";
			let iloscdzialek117 = "Brak";
			let ilosckasy117 = "Brak";

			for (i = 0; i < mysqlsplit.length; i++) {
				if (mysqlsplit[i].includes('Łączny czas gry')) {
					lacznyczas = mysqlsplit[i].replace('<br>', ' ').replace(/<\/?[^>]+(>|$)/g, "").replace('(Wyświetl graczy online)Łączny czas gry ', '');
					break;
				}
			}
			for (i = 0; i < mysqlsplit.length; i++) {
				if (mysqlsplit[i].includes('Ostatnie logowanie')) {
					ostatnielogowanie117 = mysqlsplit[i].replace('<br>', ' ').replace(/<\/?[^>]+(>|$)/g, "").replace('Ostatnie logowanie ', '');
					break;
				}
			}
			for (i = 0; i < mysqlsplit.length; i++) {
				if (mysqlsplit[i].includes('Łączny majątek na wszystkich trybach')) {
					ilosckasy117 = mysqlsplit[i].replace('<br>', ' ').replace(/<\/?[^>]+(>|$)/g, "").replace('(Wyświetl TOP10)Łączny majątek na wszystkich trybach ', '');
					break;
				}
			}
			for (i = 0; i < mysqlsplit.length; i++) {
				if (mysqlsplit[i].includes('Posiadanych działek')) {
					iloscdzialek117 = mysqlsplit[i].replace('<br>', ' ').replace(/<\/?[^>]+(>|$)/g, "").replace('Posiadanych działek ', '');
					break;
				}
			}
			for (i = 0; i < mysqlsplit.length; i++) {
				if (mysqlsplit[i].includes('Tryb SURVIVAL 1.17:')) {
					ranga = mysqlsplit[i + 2].replace('<br>', ' ').replace(/<\/?[^>]+(>|$)/g, "").replace('Ranga ', '');
					break;
				}	
			}

			const embed = new MessageEmbed();
			embed.setTitle(`📱 Statystyki gracza z 1.17: ${args[1]}`);
			embed.setDescription(`***• ---------- GLOBALNE ---------- •***\n *•Ostatnie logowanie:* ***${ostatnielogowanie117}*** \n *•Łączny czas gry:* ***${lacznyczas}***\n *•Ranga:* ***${ranga}***\n *•Łączny majątek na wszystkich trybach:* ***${ilosckasy117}***\n  ***• ---------- OGÓLNE ---------- •***\n *•Zabitych graczy:* ***${playerkills}***\n *•Śmierci:* ***${deaths}***\n *•Przebyta droga:* ***${btravel}***\n*•Czas gry od śmierci:* ***${playedtime}***\n ***• ------------ PVP ------------ •***\n *•Otrzymane obrażenia:* ***${damage}***\n *•Zjedzonych złotych jabłek:* ***${zlotejapka}***\n *•Rzuconych enderpereł:* ***${enderperly}***\n•Rzuceń trójzębem: ***${trojzab}***\n • ***---------- KOPANIE ---------- •***\n  *•Wykopanego kamienia:* ***${stone}***\n*•Wykopanych diamentów:* ***${diams}***\n *•Wykopanego redstona:* ***${redstone}***\n*•Wykopanego żelaza:* ***${zelazo}***\n*•Wykopanego złota:* ***${zloto}***\n*•Wykopanego obsydianu:* ***${obsydian}***\n ***• ----------- INNE ----------- •***\n *•Wymiany z villagerami:* ***${trade}***\n *•Zabitych witherów:* ***${witchery}***\n*•Zabitych mobów:* ***${zabitemoby}***\n`);
			embed.setColor('RANDOM');
			embed.setTimestamp(Date.now());
			embed.setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`);
			message.reply({ embeds: [embed] });
		}
		else if (args[0] === '1.17e') {
			const highscores = await fetch('https://redstone-mc.pl/easy117/highscores.json').then(res => res.json());
			let btravel = "0";
			let playedtime = "0";
			let playerkills = "0";
			let deaths = "0";
			let stone = "0";
			let diams = "0";
			let damage = "0";
			let trade = "0";
			let enderperly = "0";
			let zlotejapka = "0";
			let witchery = "0";
			let redstone = "0";
			let zelazo = "0";
			let zloto = "0";
			let zabitemoby = "0";
			let obsydian = "0";
			let trojzab = "0";

			for (i = 0; i < highscores.scores["Blocks traveled"].scores.length; i++) {
				if (highscores.scores["Blocks traveled"].scores[i].playerName === args[1]) {
					btravel = highscores.scores["Blocks traveled"].scores[i].score + ` \`[TOP ${highscores.scores["Blocks traveled"].scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_PlayedMinutes.scores.length; i++) {
				if (highscores.scores.ts_PlayedMinutes.scores[i].playerName === args[1]) {
					playedtime = highscores.scores.ts_PlayedMinutes.scores[i].score + ` \`[TOP ${highscores.scores.ts_PlayedMinutes.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_UseEnderPearl.scores.length; i++) {
				if (highscores.scores.ts_UseEnderPearl.scores[i].playerName === args[1]) {
					enderperly = highscores.scores.ts_UseEnderPearl.scores[i].score + ` \`[TOP ${highscores.scores.ts_UseEnderPearl.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_PlayerKills.scores.length; i++) {
				if (highscores.scores.ts_PlayerKills.scores[i].playerName === args[1]) {
					playerkills = highscores.scores.ts_PlayerKills.scores[i].score + ` \`[TOP ${highscores.scores.ts_PlayerKills.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_Deaths.scores.length; i++) {
				if (highscores.scores.ts_Deaths.scores[i].playerName === args[1]) {
					deaths = highscores.scores.ts_Deaths.scores[i].score + ` \`[TOP ${highscores.scores.ts_Deaths.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores["Stone mined"].scores.length; i++) {
				if (highscores.scores["Stone mined"].scores[i].playerName === args[1]) {
					stone = highscores.scores["Stone mined"].scores[i].score + ` \`[TOP ${highscores.scores["Stone mined"].scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MineDiamond.scores.length; i++) {
				if (highscores.scores.ts_MineDiamond.scores[i].playerName === args[1]) {
					diams = highscores.scores.ts_MineDiamond.scores[i].score + ` \`[TOP ${highscores.scores.ts_MineDiamond.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_VillagerTrade.scores.length; i++) {
				if (highscores.scores.ts_VillagerTrade.scores[i].playerName === args[1]) {
					trade = highscores.scores.ts_VillagerTrade.scores[i].score + ` \`[TOP ${highscores.scores.ts_VillagerTrade.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_DamageTaken.scores.length; i++) {
				if (highscores.scores.ts_DamageTaken.scores[i].playerName === args[1]) {
					damage = highscores.scores.ts_DamageTaken.scores[i].score + ` \`[TOP ${highscores.scores.ts_DamageTaken.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_UseGoldApple.scores.length; i++) {
				if (highscores.scores.ts_UseGoldApple.scores[i].playerName === args[1]) {
					zlotejapka = highscores.scores.ts_UseGoldApple.scores[i].score + ` \`[TOP ${highscores.scores.ts_UseGoldApple.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_KillWither.scores.length; i++) {
				if (highscores.scores.ts_KillWither.scores[i].playerName === args[1]) {
					witchery = highscores.scores.ts_KillWither.scores[i].score + ` \`[TOP ${highscores.scores.ts_KillWither.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_PlayerKills.scores.length; i++) {
				if (highscores.scores.ts_PlayerKills.scores[i].playerName === args[1]) {
					playerkills = highscores.scores.ts_PlayerKills.scores[i].score + ` \`[TOP ${highscores.scores.ts_PlayerKills.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MineRedstone.scores.length; i++) {
				if (highscores.scores.ts_MineRedstone.scores[i].playerName === args[1]) {
					redstone = highscores.scores.ts_MineRedstone.scores[i].score + ` \`[TOP ${highscores.scores.ts_MineRedstone.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MineIron.scores.length; i++) {
				if (highscores.scores.ts_MineIron.scores[i].playerName === args[1]) {
					zelazo = highscores.scores.ts_MineIron.scores[i].score + ` \`[TOP ${highscores.scores.ts_MineIron.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MineGold.scores.length; i++) {
				if (highscores.scores.ts_MineGold.scores[i].playerName === args[1]) {
					zloto = highscores.scores.ts_MineGold.scores[i].score + ` \`[TOP ${highscores.scores.ts_MineGold.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MobKills.scores.length; i++) {
				if (highscores.scores.ts_MobKills.scores[i].playerName === args[1]) {
					zabitemoby = highscores.scores.ts_MobKills.scores[i].score + ` \`[TOP ${highscores.scores.ts_MobKills.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_MineObsidian.scores.length; i++) {
				if (highscores.scores.ts_MineObsidian.scores[i].playerName === args[1]) {
					obsydian = highscores.scores.ts_MineObsidian.scores[i].score + ` \`[TOP ${highscores.scores.ts_MineObsidian.scores[i].index}]\``;
					break;
				}
			}
			for (i = 0; i < highscores.scores.ts_UseTrident.scores.length; i++) {
				if (highscores.scores.ts_UseTrident.scores[i].playerName === args[1]) {
					trojzab = highscores.scores.ts_UseTrident.scores[i].score + ` \`[TOP ${highscores.scores.ts_UseTrident.scores[i].index}]\``;
					break;
				}
			}
			const mysql = await fetch(`http://redstone-mc.pl/panel.php?given_name=${args[1]}`).then(res => res.text());
			const mysqlsplit = mysql.split(`</p>`);
			let lacznyczas = "Brak";
			let ranga = "Brak";
			let ilosckasy117e = "Brak";
			let iloscdzialek117e = "Brak";
			let ostatnielogowanie117e = "Brak";

			for (i = 0; i < mysqlsplit.length; i++) {
				if (mysqlsplit[i].includes('Łączny czas gry')) {
					lacznyczas = mysqlsplit[i].replace('<br>', ' ').replace(/<\/?[^>]+(>|$)/g, "").replace('(Wyświetl graczy online)Łączny czas gry ', '');
					break;
				}
			}
			for (i = 0; i < mysqlsplit.length; i++) {
				if (mysqlsplit[i].includes('Ostatnie logowanie')) {
					ostatnielogowanie117e = mysqlsplit[i].replace('<br>', ' ').replace(/<\/?[^>]+(>|$)/g, "").replace('Ostatnie logowanie ', '');
					break;
				}
			}
			for (i = 0; i < mysqlsplit.length; i++) {
				if (mysqlsplit[i].includes('Łączny majątek na wszystkich trybach')) {
					ilosckasy117e = mysqlsplit[i].replace('<br>', ' ').replace(/<\/?[^>]+(>|$)/g, "").replace('(Wyświetl TOP10)Łączny majątek na wszystkich trybach ', '');
					break;
				}
			}
			for (i = 0; i < mysqlsplit.length; i++) {
				if (mysqlsplit[i].includes('Posiadanych działek')) {
					iloscdzialek117e = mysqlsplit[i].replace('<br>', ' ').replace(/<\/?[^>]+(>|$)/g, "").replace('Posiadanych działek ', '');
					break;
				}
			}
			for (i = 0; i < mysqlsplit.length; i++) {
				if (mysqlsplit[i].includes('Tryb EASY SURVIVAL 1.17:')) {
					ranga = mysqlsplit[i + 2].replace('<br>', ' ').replace(/<\/?[^>]+(>|$)/g, "").replace('Ranga ', '');
					break;
				}
			}

			const embed = new MessageEmbed();
			embed.setTitle(`📱 Statystyki gracza z Easy 1.17: ${args[1]}`);
			embed.setDescription(`***• ---------- GLOBALNE ---------- •***\n *•Ostatnie logowanie:* ***${ostatnielogowanie117e}*** \n *•Łączny czas gry:* ***${lacznyczas}***\n *•Ranga:* ***${ranga}***\n *•Łączny majątek na wszystkich trybach:* ***${ilosckasy117e}***\n ***• ---------- OGÓLNE ---------- •***\n *•Zabitych graczy:* ***${playerkills}***\n *•Śmierci:* ***${deaths}***\n *•Przebyta droga:* ***${btravel}***\n*•Czas gry od śmierci:* ***${playedtime}***\n ***• ------------ PVP ------------ •***\n *•Otrzymane obrażenia:* ***${damage}***\n *•Zjedzonych złotych jabłek:* ***${zlotejapka}***\n *•Rzuconych enderpereł:* ***${enderperly}***\n•Rzuceń trójzębem: ***${trojzab}***\n • ***---------- KOPANIE ---------- •***\n  *•Wykopanego kamienia:* ***${stone}***\n*•Wykopanych diamentów:* ***${diams}***\n *•Wykopanego redstona:* ***${redstone}***\n*•Wykopanego żelaza:* ***${zelazo}***\n*•Wykopanego złota:* ***${zloto}***\n*•Wykopanego obsydianu:* ***${obsydian}***\n ***• ----------- INNE ----------- •***\n *•Wymiany z villagerami:* ***${trade}***\n *•Zabitych witherów:* ***${witchery}***\n*•Zabitych mobów:* ***${zabitemoby}***\n`);
			embed.setColor('RANDOM');
			embed.setTimestamp(Date.now());
			embed.setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`);
			message.channel.send({ embeds: [embed] });
		}
        
    },
};