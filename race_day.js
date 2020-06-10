let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const runnerAge = 17;
if ( runnerAge > 18 && registeredEarly) {
    raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
    console.log(`Your race number is ${raceNumber} and you will race at 9:30 am.`);
} else if ((runnerAge > 18 && ! registeredEarly)) {
    console.log(`Your race number is ${raceNumber} and you will race at 11:00am. `);
} else if ( runnerAge < 18) {
    console.log(`Your race number is ${raceNumber} and you will race at 12:30am. `);
}