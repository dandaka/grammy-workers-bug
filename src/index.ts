import { Bot, webhookCallback, InlineKeyboard } from 'grammy/web';

const bot = new Bot(SECRET_TELEGRAM_API_TOKEN);

const inlineKeyboard = new InlineKeyboard().url('About', 'click-payload');

bot.command('start', async ctx => {
	// await ctx.reply('A test bot.');
	await ctx.reply('A test bot.', { reply_markup: inlineKeyboard });
});

bot.callbackQuery('click-payload', async ctx => {
	await ctx.answerCallbackQuery({
		text: 'Some words about me.',
	});
});

addEventListener('fetch', webhookCallback(bot, 'cloudflare'));
