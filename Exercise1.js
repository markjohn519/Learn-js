let list = ['Mark', 'King', 'Java', -10, 10, 500, 0, -0, 0n, undefined, '', null];

const Test =  () => {
  for(let i=0; i < list.length; i++){
    if(list[i] == false || list[i] == null || list[i] == undefined || list[i] == 0 ||  list[i] == -0 ||  list[i] === 0n ||  list[i] == NaN ||  list[i] == ""){
      console.log(`Falsy ${i}`);
    }else{
      console.log(`Truthy ${i}`);
    }
  }
}

Test();

// 2nd Option
console.log("");

let list2 = ['Mark', 'King', 'Java', -10, 10, 500, 0, -0, 0n, undefined, '', null];

let Test2 =  () => {
  for(let i=0; i < list2.length; i++){
    if(Boolean(list2[i])){
      console.log(`Truthy ${i}`) 
    }else{
      console.log(`Falsy ${i}`)     
    }
  }
}

Test2();
