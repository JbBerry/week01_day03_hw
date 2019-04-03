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
