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