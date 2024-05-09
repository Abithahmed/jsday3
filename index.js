//a.Print odd numbers in array

const printOddNumbers =(arr) => {
    arr.forEach(num => {
        if (num %2 !== 0){
            console.log(num);
        }
    })
  }
  printOddNumbers([1,2,3,4,5,6,7,8,9]);
  
  //b.convert all the strings to title caps in a string array:
  
  const convertToTitleCaps = (arr) => {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  };
  console.log(convertToTitleCaps(["hello", "dubai"]));
  
  //c.Sum of all numbers in an array
  
  var arr = [1, 2, 3, 4, 5];
  
  var sum = (function() {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
  })();
  
  console.log(sum);
  
  //d.Return all the prime numbers in an array
  
  const arr = [1, 2, 3, 4, 5,6,7,8,9];
  
  const getPrimeNumbers = (arr) => {
    return arr.filter(num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    });
  };
  
  console.log(getPrimeNumbers(arr));
  
  //e.Return all the palindromes in an array
  
  const arr = ["radar", "hello", "level"];
  
  const getPalindromes = (arr) => {
    return arr.filter(str => str === str.split('').reverse().join(''));
  };
  
  console.log(getPalindromes(arr));
  
  //f.Return median of two sorted arrays of the same size
  
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];
  
  ((arr1, arr2) => {
    const mergedArr = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = Math.floor(mergedArr.length / 2);
    if (mergedArr.length % 2 === 0) {
        console.log((mergedArr[mid - 1] + mergedArr[mid]) / 2);
    } else {
        console.log(mergedArr[mid]);
    }
  })(arr1, arr2);
  
  //g.Remove duplicates from an array
  
  const arr = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];
  const removeDups = arr => [...new Set(arr)];
  const result = removeDups(arr);
  console.log(result);
  
  //h.Rotate an array by k times
  
  const rotateArray = (arr, k) => {
    for (let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
  }
  
  const arr = [1, 2, 3, 4, 5];
  const k = 2;
  console.log(rotateArray(arr.slice(), k));
  
  