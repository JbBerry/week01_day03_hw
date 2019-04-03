/*
Scope: Who Dunnit
Learning Objectives
Understand function scope
Know the difference in between the let and const keywords
*/

/*
Brief
Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.
*/


// ===== Episode 1 =========================
/*
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};
const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}
const verdict = declareMurderer();
console.log(verdict);
*/

// expected output: `The murderer is Miss Scarlet.`
// Const is block scope and cannot be reassigned.
// Const scenario, Const declareMurderer and Const verdict have not been declared inside any {   }.



// ===== Episode 2 =========================
/*
const murderer = 'Professor Plum';
const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}
const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}
changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
*/
// expected output: an error.
// changeMurderer() would provide an error as it is trying to reassign the Const murderer.
// Const is block scope and cannot be reassigned.
// Const murderer would remain 'Professor Plum'


// ===== Episode 3 =========================
/*
let murderer = 'Professor Plum';
const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}
const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);
const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
*/
// expected output: `First Verdict: Mrs Peacock`
//                  `Second Verdict: Professor Plum`
// firstVerdict is defined by the function declareMurderer which has the block scope access to "let murderer = 'Mrs. Peacock'"
// the contents of declareMurderer() is out-of-scope for secondVerdict so secondVerdict has not been reassigned since "let murderer = 'Professor Plum'"


// ===== Episode 4 =========================
/*
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);
*/
// expected output: `The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.`
//                  `Suspect three is Mrs.Peacock`
// Let has block scope and can be reassigned
// suspectThree is reassigned in declareAllSuspects so the return has suspectThree === Colonel Mustard.
// the final line does not have scope to the reassignment in declareAllSuspects so suspectThree is still Mrs. Peacock.

// ===== Episode 5 =========================
/*
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};
const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}
const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}
changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
*/
// expected output: `The weapon is the Revolver.`
// Const scenario is constant but objects are mutable and the key:value pairs can be changed.
// changeWeapon() changes the value, then the const verdict is set (and cannot be reassigned).

// ===== Episode 6 =========================
/*
let murderer = 'Colonel Mustard';
const changeMurderer = function() {
  murderer = 'Mr. Green';
  const plotTwist = function() {
    murderer = 'Mrs. White';
  }
  plotTwist();
}
const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}
changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
*/
// excpected output: `The murderer is Mrs White.`
// murderer starts as Colonel Mustard. When changeMurderer is called it first reassigns the value to "Mr. Green".
// changeMurderer() then calls plotTwist() and then reassigns the value to "Mrs. White"
// when const verdict is set, it === "Mrs. White"

// ===== Episode 7 =========================
/*
let murderer = 'Professor Plum';
const changeMurderer = function() {
  murderer = 'Mr. Green';
  const plotTwist = function() {
    let murderer = 'Colonel Mustard';
    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }
    unexpectedOutcome();
  }
  plotTwist();
}
const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}
changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
*/
// expected result: Mr. Green
// murder starts as "Professor Plum". changeMurderer() is called and reassigns the value to "Mr. Green". unexpectedOutcome() and plotTwist() are then called and reasigns the values within the block to "Colonel Mustard" and then globaly to "Miss Scarlet".
// "murderer = 'Mr. Green'" in changeMurderer is loosly defined and so has a global scope.
//when verdict = declareMurderer() is called it is then set as "Mr.Green" due to the global scope of line 139 polluting line 153.

// ===== Episode 8 =========================
/*
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};
const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';
  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }
    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }
    unexpectedOutcome('Colonel Mustard');
  }
  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}
changeScenario();
const verdict = declareWeapon();
console.log(verdict);
*/
// expected result: 'The weapon is Candle Stick'
// although the object 'scenario' is const, its contents are mutable
// changeScenario() reassigns scenario.room to "Dining Room" and then calls plotTwist() this reasigns scenario.murderer to "Colonel Mustard".
// unexpectedOutcome() reasigns scenario.weapon to "Lead Pipe".
// declareWeapon returns 'The weapon is Candle Stick'

// ===== Episode 9 =========================
/*
let murderer = 'Professor Plum';
if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}
const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}
const verdict = declareMurderer();
console.log(verdict);
*/
// expected result: `The murderer is Professor Plum.'
// the if ... let statement will reassign murderer to "Mrs. Peacock" but it has block scope.
// when declareMurderer() is called it will remain "Professor Plum"

// ===== Extensions =========================

let theDeceased = undefined;
const scenario ={
  murderer: "Professor Plum",
  room: "Library",
  weapon: "Rope"
}

const reasoning = function(location){
  let weapon = 'Lead Pipe'
  switch (location) {
    case 'Dining Room':
      weapon = 'Candlestick';
      break;
    case 'Kitchen':
       weapon = 'Dagger';
      break;
    case 'Library':
      const weapon = 'Spanner';
      break;
    }
    return weapon;
    theDeceased = 'Mr Boddy';
  }

const surprisingConclusion = function(killer, what, where, theDeceased='Dr. Black') {
    return `${killer} killed ${theDeceased} with the ${what} in the ${where}.`
  }

const investigation = function(){
  if (scenario.murderer != 'Colonel Mustard'){
       const killer = 'Mrs Peacock';
    }
    scenario.murderer = killer;
    scenario.weapon = reasoning(scenario.room);
  }

killer = 'Mr Green';
investigation ();
const verdict = surprisingConclusion(scenario.murderer, scenario.room, scenario.weapon, theDeceased);
console.log(verdict);
