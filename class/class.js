class Point {
  constructor(x, y){
    this.x = x
    this.y = y
  }
  // get area() {
  //   return this.calcArea()
  // }
  // calcArea() {
  //   return this.height * this.width
  // }
  static distance(a,b){
    const dx = a.x - b.x
    const dy = a.y - b.y
    return Math.hypot(dx,dy)
  }
}

// const square = new Rectangle(2)
// const poster = new Rectangle()
// const square = new Rectangle(5,5)

const p1 = new Point(7,2)
const p2 = new Point(3,8)

// console.log(square)
// console.log(poster)
console.log(Point.distance(p1,p2))