import { CardColors, CardNumbers, CardPowers } from '../utils/types.js'
import { COMODIN } from '../utils/constants.js'

export class Card {
  private color: CardColors
  private value: CardNumbers
  private power: CardPowers

  isComodin(): boolean {
    return this.color === COMODIN
  }

  hasPower(): boolean {
    return this.power !== null
  }

  hasNumber(): boolean {
    return this.value !== null
  }
}
