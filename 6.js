const arr = [5,5];
let check = true; 

for(let i = 0; i< arr.length; i++) {
    if (arr[i] !== arr[0]) {
        check = false;
        break;
  }
}

console.log(check);