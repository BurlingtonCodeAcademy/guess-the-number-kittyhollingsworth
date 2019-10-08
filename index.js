let min = 1
let max = 100
let guessnum = findMiddlePoint(min, max);
let guessing = false;
let guessCount = 1

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

function findMiddlePoint(min, max) {
  let middle = Math.floor((min + max) / 2)
  return middle;
}


start();

async function start() {

  console.log("Let's play a game where you (human) make up a number between 1 and 100 and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);

  let guess = await ask("is it " + guessnum + "?\n");




  if (guess.toLowerCase() === 'n' || guess.toLowerCase() === 'no') {

    guessing = true;
    while (guessing === true) {
      let highLow = await ask('Is it higher (H), or lower (L)?');
      if (highLow.toUpperCase() === 'H') {
        min = guessnum + 1
        guessnum = findMiddlePoint(min, max);
        guess = await ask("is it " + guessnum + "?\n");
        guessCount += 1

        if (guess.toLowerCase() === 'y' || guess.toLowerCase() === 'yes') {
          guessing = false
        }
      } else if (highLow.toUpperCase() === 'L'){
        max = guessnum - 1
        guessnum = findMiddlePoint(min, max);
        guess = await ask("is it " + guessnum + "?\n");
        guessCount += 1
        if (guess.toLowerCase() === 'y' || guess.toLowerCase() === 'yes') {
          guessing = false
        }
      } else {
        console.log("You did not answer my question! I will let it slide this time, try again.")
      }
    }
  }

  console.log('Your number was ' + guessnum + '!\nI guessed it in ' + guessCount + ' tries.')

  process.exit();
}


//To-Do
//fix bug if niether y or n is entered
//can either get it to work for 50 and have double success messages or


//Look into switches for later
//  switch (guess) {
//    case "N": 
//      console.log('derp');
//      break;
//    case "Y":
//      console.log('yay');
//      break;
//  }

