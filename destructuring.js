// let numbers = ['2', '3', '7'];
// let [two, three] = numbers;
// //let [two: positionZero, three: positionOne] = numbers;   //other way
// console.log(two,three);

const person = {
  head: {
      eyes: 'x',
      mouth: {
          teeth: 'x',
          tongue: 'x'
      }
  },
  body: {
      shoulders: 'x',
      chest: 'x',
      arms: 'x',
      hands: 'x',
      legs: 'x'
  }   
};

const numbers = ['2', '3', '4' , '7'] ;

// TODO: Destructure here.
let {legs : myLegs } = person.body;
let [fisrt,second,thirdPosition] = numbers;

console.log(myLegs);
console.log(thirdPosition);