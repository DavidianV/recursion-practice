/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/


function sumToN(n) {
  // Your code here
  // if (n === 0) return n++;
  // n--;
  // console.log(n + ' Line 20');
  // let sum = sumToN(n) + n;

  // console.log(n + ' Line 22');

  // return sum;
  if (n < 0) return null;
  if (n > 0) {
    console.log(n + ' Line 27')
    return n + sumToN(n - 1);

  }
  console.log(n + ' Line 31');
  return n;

}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}