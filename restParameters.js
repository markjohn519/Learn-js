// function containsAll(arr) {
//   for (let k = 1; k < arguments.length; k++){
//     let num = arguments[k];
//     if (arr.indexOf(num) === -1){
//       return false
//     }
//   }
//   return true
// }
// let x = [2,4,6,7]
// console.log(containsAll(x,2,4,7))
// console.log(containsAll(x,6,4,9))

//ES6 Readable Syntax
// function containsAll(arr, ...nums) {
//   for(let num of nums){
//     if (arr.indexOf(num) === -1){
//       return false
//     }
//   }
//   return true
// }

// // (...) are called the Spread operator
// let x = [2,4,6,7]
// console.log(containsAll(x,2))
// console.log(containsAll(x,4))

// function magic(...nums){
//   let sum = 0
//   nums.filter(n => n % 2 == 0).map(el => sum += el)
//   return sum
// }
// console.log(magin(1,2,3,4,5,6))

// Spread Operator before ES6
// function myFunction(w,x,y,z){
//   console.log(w+x+y+z)
// }
// var args = [1,2,3];
// myFunction.apply(null, args.concat(4))

// Spread Operator on ES6
// const myFunction = (w,x,y,z) => {
//   console.log(w+x+y+z)
// }
// let args = [1,2,3];
// myFunction(...args, 4)

//Array Literals
// var arr = ['One','Two','Five'];
// arr.splice(2,0,'Three')
// arr.splice(3,0, "Four")
// console.log(arr)

//wit ES6 Spread 
// let newArr = ['Three','' ,'Six'];
// let arr = ['one','two', ...newArr, 'Four','Five']
// console.log(arr)

// const obj1 = {foo:'bar', x:42}
// const obj2 = {foo:'baz', y:5}
// const cloneObj = {...obj1}
// const mergedObj = {...obj1, ...obj2}
// console.log(mergedObj)

const obj1 = {foo:'bar', x:42}
const obj2 = {foo:'baz', y:5}
const merge = (...objects) => ({...objects})

let mergedObj = merge(obj1,obj2)
console.log(mergedObj)
let mergedObj2 = merge({},obj1,obj2)
console.log(mergedObj2)