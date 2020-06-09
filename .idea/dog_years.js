//My currect age in years
const myAge = 34;
// The first two years of a dog’s life count as 10.5 dog years each.
let earlyYears = 2;
earlyYears *= 10.5
//Age without two first years
let laterYears = myAge - 2;
//Each year following equates to 4 dog years.
laterYears *= 4;
//Convert into dogs years
const myAgeInDogYears = earlyYears + laterYears
//My name
const myName = 'My Name'.toLowerCase();
console.log (`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
