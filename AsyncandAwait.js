function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function sumAsync(x, y) {
  return new Promise((resolve, reject) => {
      sleep(500).then(() => {
          resolve(x + y);
      });
  });
}

// let's use the function now
sumAsync(5, 7).then((result) => {
  console.log("The result of the addition is:", result);
  
});
//================================================================================================
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sumAsync(x, y) {
  // this code waits here for 500 milliseconds
  await sleep(500);
  // done waiting. let's calculate and return the value
  return x+y;
}

// sumAsync is an async function, which means it returns a Promise.
sumAsync(5, 7).then((result) => {
  console.log("The result of the addition is:", result);
});
//================================================================================================

function sleep(ms) {
  return new Promise((relolve) => setTimeout(relolve, ms));
}

async function newName(name1,name2){
    await sleep(500)
    if(name1==name2){
      if(name1== String && name2 == String)
      return("Good both name are the same.");
      else
      return("Only String are allowed");
    }
    else
    return("Name should be the same.");
}

newName("Mark", "Mark").then((result) => {
  try {
    console.log("Checking name1 and name2");
    console.log(result);
  } catch (error) {
    console.log(error+"Error Test");
  }
  
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function uppercaseString(s) {
  // your code goes here
  await sleep(500);
  return s.toUpperCase();
}


uppercaseString("edward").then((result) => {
  (console.log(result));
});
// or
uppercaseString("edward").then(console.log); 
//================================================================================================
