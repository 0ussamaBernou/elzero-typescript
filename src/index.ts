console.log(Math.round(10.16));

let age: number = 40;
if (age < 30) {
  console.log("nice");
} else console.log(age);

/* Type annotations */

let theName: string = "osama";
let theAge: number = 20;
let hire: boolean = false;

function add(num1: number, num2: number) {
  return num1 + num2;
}
console.log(add(10, 5));
console.log(typeof add(10, 5));

