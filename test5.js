const seconds = (n) => {
  return new Promise((resolve) =>{
    setTimeout(() =>{
      resolve()
      console.log(`${n} seconds have elapsed`)
    }, n * 1000)
  })
}

seconds(5).then(() => {
  console.log("done")
})