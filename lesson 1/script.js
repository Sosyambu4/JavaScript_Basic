// Zadanie 1.

 console.log(123 == '123');
console.log(123 === '123');

// Zadanie 2.

console.log(0 == false);
console.log(0 === false);


// Zadanie 3.

let userName = 'Wladyslaw';
let age = '25';
let city = 'Gdansk';

console.log(`Our user's name is: ${userName} and is ${age} years old and lives in ${city} `); */
// Zadanie 4.


 function sum(number1,number2) {
   return number1 + number2;
}
let ten = sum(5,5);
let four = sum(2,2);
let myAddedNumbers = sum(ten,four);

console.log(myAddedNumbers);


// Zadanie 5.
 console.log(`Username: ${userName} have length:${userName.length}`);

// Zadanie 6.
let firstUser = 'Docep';
let seconderUser = 'Baben';

if (firstUser === seconderUser) {
console.log("O! The names are the same!");
} else {
    console.log("Unfortunately the names are different :(");
}

// Zadanie 7.
let ageUser = 2;

if (ageUser >= 18) {
    console.log("User is adult");
} else {
    console.log("User is underage");
}

const checkMyAge = ageUser >= 18 ? console.log("User is adult") : console.log("User is underage"); 

/* Zadanie 8 */
 let a = 5;
let b = 4;


function getBiggerNumber(a, b){
    if (a > b) {
        return a;
    } else if (b > a) {
        return  b;
    }
} 
const result = a > b ? console.log(a) : console.log(b); 
// Zadanie 9.

 function ItemsInCart(items) {
    let count = items === 1 ? "item" : 'items';
    return `You have ${items} ${count} in your cart.`;
}

console.log(ItemsInCart(1));
console.log(ItemsInCart(6));

let countofItems = 5;

console.log(`You have ${countofItems} item${countofItems === 1 ? '': 's' } in your card`); 


// Zadanie 10.

 const input = prompt("podaj swoj wiek");
console.log(input);

if (input > 125 || input < 0 ) {
    console.log(`You provided incorrect age.`);
} else if ( input > 35) {
    console.log(`You could be a president!`);
} else if ( input > 18) {
    console.log(`At least you can have a beer.`);
} else {
    console.log(`You cannot be a president and can't even drink beer :(`);
} 
// Zadanie 11.
const isRaining = true;
const hasJacket = true;
const longTrip = false;
const isSummer = false;

function shouldTakeUmbrella(isRaining,hasJacket,longTrip,isSummer) {
    if ((isRaining && !isSummer) || (longTrip)) {
    return true;
} 
    if(isRaining && !hasJacket) {
        return true;
    }
    return false;
}
shouldTakeUmbrella(true,false,false,false); 

// Zadanie 12.
 function isEqual(firstNum, secondNum) {
    if (firstNum === secondNum) {
        return true;
    } else {
        return false;}
}
console.log(isEqual(2,2));
console.log(isEqual(2100,2));
console.log(isEqual(3,2));
console.log(isEqual(2,'2')); 


// Zadanie 13.
 function canRideRollerCoaster(age, height){
    if (age >= 18 && height >= 175) {
        console.log("Can ride!");
        return true;
    } else {
        console.log("Sorry kiddo, no can do.");
        return false;

    }

} 

/* const RollerCoaster = (age, height) => {
switch(age) {
    case age > 18 && height > 175:
        console.log("Can ride!");
        return true;
        break;
    case age < 18 && height < 175:
        console.log("Sorry kiddo, no can do.");
        return false;
        break
    default: {
        return false;
        console.log("Sorry kiddo, no can do.");
        break;}
}
}  */
console.log(RollerCoaster(19, 180)); // false
canRideRollerCoaster(19, 150); // false
canRideRollerCoaster(13, 150); // false
canRideRollerCoaster(19, 190); // true 
 
// Zadanie 14.

const alphabeticalOrder = (name) => name.toLowerCase().split('').sort().join('');

console.log(alphabeticalOrder('Wladyslaw'));
console.log(alphabeticalOrder('Je??li ma wi??cej ni?? 18 lat'));

// Zadanie 15.

const reverseText = (string) => console.log(string.split('').reverse().join(''));
reverseText("javascript");

// Zadanie 16.

const getInitials = (name) => {
let words = name.split(' ');
return `${words[0][0]}.${words[1][0]}`;
}

console.log(getInitials('Harry John Teddy'));