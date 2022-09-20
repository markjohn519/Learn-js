let list2 = ['Mark', 'King', 'Java', -10, 10, 500, 0, -0, 0n, undefined, '', null];

let Test2 =  (arr) => {
  let newArr = []
  // for(let i=0; i < arr.length; i++){
  //   newArr.push(!!arr[i])
  // }

  arr.forEach(Element => {
    newArr.push(!!Element)
  })

  return newArr;


}

console.log(Test2(list2));