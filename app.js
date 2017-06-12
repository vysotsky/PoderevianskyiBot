'use strict'

const TelegramNodeBot = require('telegram-node-bot')
const telegram = new TelegramNodeBot.Telegram(System.getenv('TELEGRAM_TOKEN'))
const source = require('./quotes.json')

class QuotesController extends TelegramNodeBot.TelegramBaseController {
    /**
     * @param {Scope} $
     */
    quoteCommandHandler($) {
      var quotes = source.quotes
      var randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
      $.sendMessage(randomQuote.text)
    }

    get routes() {
      return {
        'quoteCommand': 'quoteCommandHandler'
      }
    }
}

telegram.router.when(new TelegramNodeBot.TextCommand('quote', 'quoteCommand'), new QuotesController())
