import { Hand } from './hand.js'
import { Card } from './card.js'

export class Player {
  private name: string
  private hand: Hand

  takeCard(card: Card) {}
  playCard(index: number) {}
}
