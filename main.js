//Exercise one
console.log("Hello World!"); //Hello World!


//Exercise two
const myName = "Topacio";
console.log(myName); //Topacio


//Exercise three
const rectangle = {
  length: 7,
  width: 4,
}
const area = rectangle.length * rectangle.width;
console.log(area); //28


//Exercise four and five
for (let num = 1; num <= 10; num++) {
  if (num % 2 == 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
} //1 is odd, 2 is even, 3 is odd.... 10 is even


//Exercise six
const userName = prompt(
  "What is your name?");
console.log(`Hello ${userName}!`); //Hello (name)!


//Exercise seven
const number = parseInt(prompt("Please enter a number"));

if (number < 0) {
  console.log("Please enter a positive integar");
} else if (number === 0) {
  console.log(`1 is the factorial of ${number}`);
} else {
  let fact = 1;
  for(let i = 1; i <= number; i++) {
  fact *= i;
} console.log(`${fact} is the factorial of ${number}.`);
} // "(factorial number) is the factorial of (number)"


//Exercise eight
const leapYear = prompt("Please put in a year:");

if (leapYear % 400 == 0) {
  console.log(`${leapYear} is a leap year.`);
 } else if (leapYear % 100 == 0) {
  console.log(`${leapYear} is not a leap year`);
} else if (leapYear % 4 == 0) {
   console.log(`${leapYear} is a leap year`); 
  } else {
    console.log(`${leapYear} is not a leap year`);
  } //"(year) is a leap year, (year) is not a leap year


  //Exercise nine
  let x = 1;
  let sumAll = 0;

  while (x <= 100) {
    sumAll += x;
    x++;
  }
  console.log(`The sum of all numbers from 1 to 100 is ${sumAll}`);


  //Exercise ten
  const num1 = parseInt(prompt("Enter a number: "));
  const num2 = parseInt(prompt("Enter another number: "));

 /* This was my first solution to the exercise

  const addition = num1 + num2;
  const subtraction = num1 - num2;
  const multiplication = num1 * num2;
  const division = num1 / num2;

  console.log(`In addition ${num1} and ${num2} is ${addition}\nIn subtraction ${num1} and ${num2} is ${subtraction}\nIn multiplication ${num1} and ${num2} is ${multiplication}\nIn division ${num1} and ${num2} is ${division}`);
  */
  // I then wondered if an object data type would also work and it did 
  const result = {
    add : num1 + num2,
    subt : num1 - num2,
    mult : num1 * num2,
    div : num1 / num2
  };

  console.log(`In addition ${num1} and ${num2} is ${result.add}\nIn subtraction ${num1} and ${num2} is ${result.subt}\nIn multiplication ${num1} and ${num2} is ${result.mult}\nIn division ${num1} and ${num2} is ${result.div}`);


  //Exercise eleven
  const strings = "Hello"; //typeof string
  const numbers = 7; //typeof number
  const booleans = 4 > 2 ; //typeof boolean
  const nullValue = null;
  let undefineds; //typeof undefined
  const colors = {
    shirt: "purple",
    cat: "black",
    bird: "white"
  }; /* {shirt: 'purple', cat: 'black', bird: 'white'} typeof object */
  const arr = ["cats", "dogs", "birds"]; /*
  ['cats', 'dogs', 'birds'] typeof array*/
 let noDefaultValueDeclaration;


 //Exercise twelve
/*Create a LIST of OBJECTS, each object having a name and price property*/
const foodList = [
  {
  name: "Potatoes",
  price: 4.99
  },
  {
  name: "Eggs",
  price: 1.99
  },
  {
  name: "Cake",
  price: 3.50
  },
  {
  name: "Burger",
  price: 5.99
  }
];

/*LOOP over that LIST, dynamically create a new list item <li></li> with the food name inside, and append that item to an existing HTML <ul></ul> element*/
const foodListElement = document.getElementById("list-foods");

for(let i = 0; i < foodList.length; i++) {
  const foods = foodList[i];
  const listElement = document.createElement("li");
  listElement.innerText = `${foods.name} - $${foods.price.toFixed(2)}`;
  foodListElement.appendChild(listElement);
}


//Exercise thirteen
function arrayOfMultiples(num, length) {
  const multiples = [];

  for(let i = 1; i <= length; i++) {
    multiples.push(num*i);
  }
  return multiples;
  }
 
console.log(arrayOfMultiples(4, 3));
console.log(arrayOfMultiples(7, 7));


//Exercise fourteen
const randomNum = parseInt(Math.random() * 21)-10;

  if(randomNum > 0) {
    console.log(`The number ${randomNum} is positive`);
  } else if (randomNum < 0) {
    console.log(`The number ${randomNum} is negative`);
  } else {
    console.log(`The number ${randomNum} is zero`);
  }
//works as it should, I tested it to make sure the number 0 would also print


//Exercise fifteen
const multiplicationNum = 4;

for(let i = 1; i <= 10; i++) {
  const result = multiplicationNum * i;

  console.log(`The multiplication table for ${multiplicationNum} is ${multiplicationNum} * ${i} = ${result}`);
}
//"The multiplication table for 4 is 4 * 1 = 4" and so on until it reaches 10


//Exercise sixteen
function isPrime(num) {
  if(num <= 1) {
    return false;
  } else {
    for(let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    } return true;
  } 
}
console.log(isPrime(7)); //true