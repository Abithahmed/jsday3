//Do the below programs in arrow functions.

//A)Print odd numbers in an array

const printOddNumbers = (array) => {
    array.forEach(number => {
      if (number % 2 !== 0) {
        console.log(number);
      }
    });
  };
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  printOddNumbers(numbers);

//B)Convert all the strings to title caps in a string array in arrow function

  const stringArray = ['hai', 'my name', 'ABITH'];

const toTitleCaps = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

const titleCapsArray = stringArray.map(toTitleCaps);

console.log(titleCapsArray); 

//C
0Sum of all numbers in an array in arrow function

const numberArray = [1, 2, 3, 4, 5];

const sumArray = (arr) => {
  return arr.reduce((acc, val) => acc + val, 0);
};

const sum = sumArray(numberArray);

console.log(sum); 

//D)Return all the prime numbers in an array in arrow function

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const filterPrimes = (arr) => {
  return arr.filter(isPrime);
};

const primes = filterPrimes(numberArray);

console.log(primes); 

//E)Return all the palindromes in an array in arrow function

const wordArray = ['racecar', 'hello', 'level', 'world', 'madam'];

const isPalindrome = (word) => {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
};

const filterPalindromes = (arr) => {
  return arr.filter(isPalindrome);
};

const palindromes = filterPalindromes(wordArray);

console.log(palindromes); 
