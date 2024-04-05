// Write a function that accepts strings as input and swaps the case of each character
function swapCase(str) {
    let swappedStr = '';
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === char.toUpperCase()) {
        swappedStr += char.toLowerCase();
      } else {
        swappedStr += char.toUpperCase();
      }
    }
    return swappedStr;
  }
  //function to display swapped string
  function swapCaseAndDisplay() {
    const inputString = document.getElementById('inputString').value;
    const swappedString = swapCase(inputString);
    document.getElementById('output').textContent = swappedString;
  }


