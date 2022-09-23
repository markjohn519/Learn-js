// let num = 'size'
// let config = {
//   [num]:12,
//   ['mobile' + num.charAt(0).toUpperCase()+num.slice(1)]:4
// }
// console.log(config.mobileSize)

let person = {
  name: 'Mark',
  age: 15,
  sex: 'Male'
}
let game = {
  name: 'Bob',
  age: 20,
  xp: 2
}
// let work = {
//   name: 'King',
//   age: 2,
//   xp: 2
// }

let newGame = Object.assign({},person,game)
newGame.name ='King'

console.log(newGame)