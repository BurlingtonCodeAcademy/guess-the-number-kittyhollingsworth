const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

function findMiddlePoint (min,max){
    let middle = Math.floor((min + max) / 2)
    return middle;
}
async function higherOrLower () {
  let highLow = await ask('Is it higher (H), or lower (L)?');
  console.log("pew")
  
  if(highLow === 'H'){
    console.log('high')
  } else {
    console.log('low')
  }
  console.log('test')
}

start();

async function start() {
  console.log("Let's play a game where you (human) make up a number between 1 and 100 and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  
  let min = 1
  let max = 100
  let guessnum = findMiddlePoint(min, max);
  let guess = await ask("is it " + guessnum + "?\n");

//go back and add toLowerCase and no
//go back and add toLowerCase and yes 
 
  if (guessnum === 'n') {
    higherOrLower();
  } else {
    console.log('Your number was ' + guessnum)
  }

  process.exit();
}





//  switch (guess) {
//    case "N": 
//      console.log('derp');
//      break;
//    case "Y":
//      console.log('yay');
//      break;
//  }



// Now try and complete the program.


// function takes and finds half way point between two numbers and defines new guess

// takes new guess and asks if it is correct

// if yes your number is 66
// if no, is your number higher or lower

//higher takes gue
