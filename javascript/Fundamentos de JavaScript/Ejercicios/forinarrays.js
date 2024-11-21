let array = [12, 23434, 776, 51, 65, 5, 10];
  for(let i = 0; i < array.length; i++){
    console.log(array[i]);
  }

let myArray = [12, 23434, 776, 51, 65, 5, 10]
  for(let index in myArray){
    console.log(myArray[index]);
  }

let y = [14, 3, 3245, 234, 52, 345, 3, 45, 23, 77];

y.splice(3, 2, 'tercero');
console.log(y);

let a = [14, 3, 3245, 234, 52, 345, 3, 45, 23, 77];

let newArray = a.slice(2, 9)
console.log(a)
console.log(newArray)