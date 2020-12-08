// my function to check if a number is odd or even
function isOdd(number){
  // modulo division to check if the num modulo 2 has any remainder of 1 or not (confirming it is odd)
  return number % 2 === 1;
}

// call function to test
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));