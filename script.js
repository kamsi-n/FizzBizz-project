let btn = document.querySelector('.enter'); 

function formula() {
    let userInput = parseInt(document.querySelector('.userInput').value);
    let result = document.querySelector('.result');
    let count = 0;
    let output = "";
  
    for (let i = 2; i <= userInput; i++) {
      count++;
      if (i % 3 === 0 && i % 5 === 0) {
        output += "FizzBuzz ";
      } else if (i % 3 === 0) {
        output += "Fizz ";
      } else if (i % 5 === 0) {
        output += "Buzz ";
      } else {
        output += i + " ";
      }
    }
  
    result.innerHTML = `${result.innerHTML} ${output}`;
  }
  

btn.addEventListener('click', formula);






  