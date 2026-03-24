import { Shape } from './shape'

export class Circle extends Shape {
  private radius: number

  constructor(color: string, radius: number) {
    super(color)
    this.radius = radius
  }

  draw(): void {
    console.log(`Drawing a ${this.color} circle with radius ${this.radius}`)
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius
  }
}