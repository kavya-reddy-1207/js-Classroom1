//  ////example 1
// let age=14;
// if(age>=18) {
//     console.log("you can vote");
// }
// else if(age<18) {
//     console.log("you cannot vote");
// }

// //example 2
// let marks=75;
// if(marks>=80) {
//     console.log("A+");
// }
// else if(marks>=60) {
//     console.log("A");
// }
// else if(marks>=33) {
//     console.log("B");
// }
// else if(marks<33) {
//     console.log("F")
// }

// //practice qs
// let size="s";
// if(size==="XL") {
//     console.log("price is Rs. 250");
// }
// else if(size==="L") {
//     console.log("price is Rs. 200");
// }
// else if(size==="M") {
//     console.log("price is Rs. 100");
// }
// else {
//     console.log("price is Rs. 50");
// }

//nested statement
// let marks=45;

// if(marks>=33) {
//     console.log("pass");
//     if(marks>=80) {
//         console.log("Grade: 0");
//         }
//     else{
//         console.log("Grade: A+");
//     }
// }
// else {
//     console.log("better luck next time");
// }

//logical && operator
// let marks=90;

// if(marks>=33 && marks>=80) {
//     console.log("pass");
//     console.log("A+");
// }

// //logical || or operator
// let marks=75;
//  if(marks>=33 || marks>=80) {
//     console.log("pass");
//     console.log("A+");
//  }

// //! NOT operator
// let marks=75;

// if(!(marks<33)) {
//    console.log("pass");
// }

// //mixed statements
// let marks=75;

// if((marks>33 && marks<=80) || !false) {
//    console.log("pass");
// }

// let month="january";
// if(month=="january"){
//     console.log("winter");
//     if(month=="april"){
//         console.log("hot")
//     }
//     else{
//     console.log("is a cool month");
// }
// }else{
//     console.log("wrong month");
// }

// //practce qs 1
// let str="apple";

// if((str[0]==='a') && (str.length>3)) {
//     console.log("Good string");
// }
// else {
//     console.log("Not a Good string");
// }

//2
// let num=12;

// if((num % 3 === 0) && ((num+1==15) || (num-1==11))) {
//     console.log("safe");
// }
// else {
//     console.log("unsafe");
// }

// //truthy &falsy
// if("") {
//     console.log("true");
// }
// else {
//     console.log("false");
// }

//
// let num=0;

// if(num) {
//     console.log("num is not equal to 0");
// }
// else{
//     console.log("num is equal to 0");
// }

// let num=1;

// if(num) {
//     console.log("num is not equal to 1");
// }
// else{
//     console.log("num is equal to 1");
// }


// //switch statements
// let color="red";
//  switch(color) {
//     case "red":
//         console.log("stop");
//         break; //if we reomve break it will execute the next condition also
//     case "yellow":
//         console.log("slow down");
//         break;
//     case "green":
//         console.log("go");
//         break;
//     default:
//         console.log("light is broken");
//  }


// //practice qs
// let day=5;

// switch(day) {
//     case "monday":
//         console.log("monday");
//         break;
//     case "tuesday":
//         console.log("tuesday");
//         break;
//    case "wednesdau": 
//        console.log("wednesday");
//             break; 
//     case "monday":
//        console.log("thrusday");
//            break;  
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
//     default:
//         console.log("not a weekend days");
// }

// //alert message
// //alert("something is wrong!");//we can create different types of alerts
// //alert("danger");
// //alert("this is a simple alert!");

// console.log("this is an simple log");
// console.error("this is an error msg");
// console.warn("this is a warning msg");

// //prompts
// //prompt("please enter your name:");
// let firstName=prompt("enetr your name:");
// console.log(firstName);

// ///concatinating two variables using prompt
// let firstName=prompt("enetr your name");
// let lastName=prompt("enter your last name");
// console.log("welcome",firstName,lastName,"!");

// ///creating string to print an alert msg
// let firstName=prompt("enetr your name");
//  let lastName=prompt("enter your last name");
//  let msg="welcome "+firstName+lastName+"!";
//  alert(msg);


// //assignments
// //1st question

// let num=20;

// if(num%10==0) {
//     console.log("good");
// }
// else {
//     console.log("bad");
// }


// //2nd question
// let name=prompt("enter your name");
// let age=prompt("enter your age");
// alert(`${name} is ${age} years old`);


// //3 question
// let quater=1;

// switch(quater){
//     case 1:
//         console.log("January,February,March");
//         break;
//     case 2:
//         console.log("April,May,June");
//         break;
//     case 3:
//         console.log("July,August,September");
//         break;
//     case 4:
//         console.log("October,November,December");
//         break;
//     default:console.log("NOTAQUARTER!");
// }


// //4th question
// let string="apples";
// if((string[0]==='a' || string[0]==='A') && (string.length>5)) {
//     console.log("Golden string");
// }
// else {
//     console.log("is not a good string");
// }

// //5th
// let a=5;
// let b=18;
// let c=13;

// if(a>b) {
// if(a>c) {
//     console.log(a,"is largest");
// }
// else {
//     console.log(c,"is largest");
// }
// }

//     if(b>c) {
//         console.log(b,"is largest");
//     }
// else {
//     console.log(c,"is largest");
// }


// //6th
// let num1=32;
// let num2=47852;

// if((num1%10)==(num2%10)) {
//     console.log("numbers have the same last digit which is",num1%10);
// }
// else {
//     console.log("numbers don't have the same last digit");
// }