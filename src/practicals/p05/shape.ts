import { Drawable } from './drawable'

export abstract class Shape implements Drawable {
  protected color: string

  constructor(color: string) {
    this.color = color
  }

  getColor(): string {
    return this.color
  }

  abstract draw(): void
  abstract getArea(): number
}