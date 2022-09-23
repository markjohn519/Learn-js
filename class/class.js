class Rectangle {
  constructor(width, height){
    this.width = width
    this.height = height
  }
  get area() {
    return this.calcArea()
  }
  calcArea() {
    return this.height * this.width
  }
}

// const square = new Rectangle(2)
// const poster = new Rectangle()
const square = new Rectangle(5,5)


// console.log(square)
// console.log(poster)
console.log(square.area)