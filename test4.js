const find = (name) => { 
  const list = ['EJ', 'Leila', 'Finn', 'Arron', 'Ardy']
  return new Promise((resolve, reject) => {
    for(let i=0; i < list.length; i++){
      if(list[i] === name){
        resolve();
        return;
      }
    }
    reject("Not in the list");
  })
}
const p = find('Mark'); 
p.then(() => {
  console.log("This was resolved");
})

p.catch((error) =>{
  console.log("This promise rejected")
})