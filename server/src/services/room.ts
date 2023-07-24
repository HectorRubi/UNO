import { sequelize } from './../libs/sequelize'

import { Player } from './player.js'
import { Deck } from './deck.js'
import { Card } from './card.js'

export class Room {
  private playerList: Player[]
  private mainDeck: Deck
  private playDeck: Deck

  async create() {
    const [data] = await sequelize.query('SELECT * FROM tbl_room')
    return data
  }

  join(link: string, player: Player) {
    return { link, player }
  }
  giveCardToPlayer(player: Player) {
    // Set last card from mainDeck into the player hand
    return player
  }
  playCard(card: Card) {
    // Set the card into the playDeck
    return card
  }
}
