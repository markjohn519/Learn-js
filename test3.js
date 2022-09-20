function upperCaseAsync(s) {
  // write your code here
  return new Promise((resolve, reject) => {
      setTimeout(() =>{
          if (s == null){
              reject("Emtry String");
          }else {
              resolve(s.toUpperCase());
          }
    }, 500);
  })
}
upperCaseAsync("steve").then(console.log);
upperCaseAsync(null).catch((x) => {
  console.log("No string received!");
});




console.log(2);
console.log(3); 