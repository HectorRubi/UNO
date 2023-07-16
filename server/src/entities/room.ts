import { Player } from "./player.js";
import { Deck } from "./deck.js";
import { Card } from "./card.js";

export class Room {
  private playerList: Player[]
  private mainDeck: Deck;
  private playDeck: Deck;

  create() {}
  join(link: string, player: Player) {}
  giveCardToPlayer(player: Player) {
    // Set last card from mainDeck into the player hand
  }
  playCard(card: Card) {
    // Set the card into the playDeck
  }
}
