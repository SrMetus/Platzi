const ticToc = () => {
  let result = "";
  for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
      result += "TicToc ";
    } else if(i % 3 === 0){
      result += "Tic ";
    } else if(i % 5 === 0){
      result += "Toc ";
    } else {
      result += i + " ";
    }
  }
  return result
}
console.log(ticToc());