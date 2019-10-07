let min = 1
let max = 100
let guessnum = findMiddlePoint(min, max);
let guessing = false;
let guessCount = 0

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



  //go back and add toLowerCase and no
  //go back and add toLowerCase and yes 
  if (guess === 'n') {

    guessing = true;
    while (guessing === true) {
      let highLow = await ask('Is it higher (H), or lower (L)?');
      if (highLow === 'H') {
        min = guessnum + 1
        guessnum = findMiddlePoint(min, max);
        guess = await ask("is it " + guessnum + "?\n");
        guessCount += 1

        if (guess === 'y') {
          guessing = false
        }
      } else {
        max = guessnum - 1
        guessnum = findMiddlePoint(min, max);
        guess = await ask("is it " + guessnum + "?\n");
        guessCount += 1
        if (guess === 'y') {
          guessing = false
        }
      }
    }
  }

  console.log('Your number was ' + guessnum + '!\nI guessed it in ' + guessCount + ' tries.')

  process.exit();
}


//To-Do
//fix bug if niether y or n is entered
//fix bug for allowing capitalization




//  switch (guess) {
//    case "N": 
//      console.log('derp');
//      break;
//    case "Y":
//      console.log('yay');
//      break;
//  }

