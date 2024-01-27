function convertToMorse() {
    var textInput = document.getElementById("textInput").value;
    var morseCodeData = {
      'A': '.-', 'B': '-...',
      'C': '-.-.', 'D': '-..', 'E': '.',
      'F': '..-.', 'G': '--.', 'H': '....',
      'I': '..', 'J': '.---', 'K': '-.-',
      'L': '.-..', 'M': '--', 'N': '-.',
      'O': '---', 'P': '.--.', 'Q': '--.-',
      'R': '.-.', 'S': '...', 'T': '-',
      'U': '..-', 'V': '...-', 'W': '.--',
      'X': '-..-', 'Y': '-.--', 'Z': '--..',
      '1': '.----', '2': '..---', '3': '...--',
      '4': '....-', '5': '.....', '6': '-....',
      '7': '--...', '8': '---..', '9': '----.',
      '0': '-----', ', ': '--..--', '.': '.-.-.-',
      '?': '..--..', '/': '-..-.', '-': '-....-',
      '(': '-.--.', ')': '-.--.-'
    };
    var data = "";
  
    for (var i = 0; i < textInput.length; i++) {
      var char = textInput[i].toUpperCase();
      if (char in morseCodeData) {
        data += morseCodeData[char] + " ";
      }
    }
  
    document.getElementById("output").innerHTML = "Secret Code: " + data;
  }
  // Add this to the existing script.js file

document.addEventListener("DOMContentLoaded", function () {
  createBatmanSymbols();
});

function createBatmanSymbols() {
  const numberOfSymbols = 30; // Adjust the number of symbols
  const container = document.body;

  const batmanContainer = document.createElement("div");
  batmanContainer.classList.add("batman-container");

  for (let i = 0; i < numberOfSymbols; i++) {
    createBatmanSymbol(batmanContainer);
  }

  container.appendChild(batmanContainer);
}

function createBatmanSymbol(container) {
  const symbol = document.createElement("img");
  symbol.src = "batman.png"; // Replace with the actual path to your Batman symbol
  symbol.alt = "Batman Symbol";
  symbol.classList.add("batman-symbol");

  // Randomly position each symbol on the screen
  symbol.style.left = `${Math.random() * 100}vw`;

  container.appendChild(symbol);
}
