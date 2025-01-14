const { Analytics } = require('../modules/analytics.js');
const { Public } = require('../modules/public.js');
const { Stickers } = require('../modules/stickers.js');
const { Timeout } = require('../modules/timeout.js');
const { Perkenalan } = require('../modules/perkenalan.js');
const { Info } = require('../modules/info.js');
const { pointSystem } = require('../modules/point-system.js');

module.exports = {
    name: 'messageCreate',
    once: false,
    execute(msg) {
        const client = msg.client;
        const prisma = client.prisma;
        if (msg.webhookId || msg.author.bot) return;

        Analytics(msg, client, prisma); // Always load this first

        Public(msg, client); // Public Scope Command

        Stickers(msg, client);

        Timeout(msg, client);

        Perkenalan(msg, client, prisma);

        Info(msg, client, prisma);

        pointSystem(msg, client, prisma);
    },
};
