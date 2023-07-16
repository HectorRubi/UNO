import { Card } from "./card.js";

export class Hand {
  private cardList: Card[];

  selectCard() {}
  playCard(index: number) {}
  isEmpty(): boolean {
    return this.cardList.length === 0;
  }
}