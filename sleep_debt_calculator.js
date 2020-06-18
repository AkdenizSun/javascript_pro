const getSleepHours = day => {
    switch( day.toLowerCase() ){
        case 'monday':
            return 8;
        case 'tuesday':
            return 7;
        case 'wednesday':
            return 6;
        case 'thursday':
            return 5;
        case 'friday':
            return 4;
        case 'saturday':
            return 11;
        case 'sunday':
            return 9;
    }

}

/*const getActualSleepHours = () => getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');*/
const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

/*const getIdealSleepHours = () => {
  let idealHours = 9;
  return idealHours * 7;
}*/
const getIdealSleepHours = idealHours => idealHours * 7;


const calculateSleepDebt =() => {
    let actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(9);
    if ( actualSleepHours === idealSleepHours ){
        console.log ("The user got the perfect amount of sleep.");
    } else if ( actualSleepHours > idealSleepHours ){
        console.log(`The user got more sleep than needed for ${actualSleepHours - idealSleepHours} hours.`);
    } else if ( actualSleepHours < idealSleepHours ) {
        console.log(`The user should get some rest. ${idealSleepHours -actualSleepHours} hours`);
    };
}



console.log(getSleepHours('monday'));
console.log(getSleepHours('thursday'));
console.log(getSleepHours('sunday'));
console.log (getActualSleepHours());
console.log (getIdealSleepHours(7));
calculateSleepDebt();