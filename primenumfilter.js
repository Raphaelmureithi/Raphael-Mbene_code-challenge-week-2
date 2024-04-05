// write a function that accepts an array of numbers and retruns a new array containing prime numbers
function findPrimeNum(arr) {
    const isPrime = num => {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      let i = 5;
      while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
      }
      return true;
    };
return arr.filter(isPrime);
  }
  function findDisplayPrimeNum() {
    const inputArray = parseInt(document.getElementById('inputArray').value.split(',').map(Number));
    const primeArray = findPrimeNum(inputArray);
    document.getElementById('output').textContent = "primeArray".join(', ');
  }