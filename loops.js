// for(i=1; i<=5; i++){
//     console.log(i);
// }

// for(let i=5; i>=1; i--){
//     console.log(i);
// }

// for(let i=10; i>=1; i=i-3){
//          console.log(i);
//     }


//odd numbers    
// for(let i=1; i<=15; i=i+2){
//     console.log(i);
// }
// console.log("backward");

// for(let i=15; i>=1; i=i-2){
//     console.log(i);
// }

// //even numbers
// for(let i=2; i<=1000; i=i+2){
//     console.log(i);
// }
// console.log("backward");

// for(let i=10; i>=2; i=i-2){
//     console.log(i);
// }

// //print the multiplication table
// for(let i=5; i<=50; i=i+5){
//     console.log(i);
// }

// let n=prompt("write your number");
// n=parseInt(n);
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

//nested loops
// for(let i=1; i<=4; i++){
// console.log(`outer loop ${i}`);
//  for(let j=1; j<=4; j++){
//  console.log(j);
//  }
// }

// //while loops
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
    
// }

// //backward code
// let i=5;
// while(i>=1){
//     console.log(i);
//     i--;
// }

// const favmovie="avatar";

// let guess=prompt("guess my favorite movie");

// while((guess!=favmovie)&&(guess!="quit")) {
//     guess=prompt("wrong guess.please try again.");
// }

// if(guess==favmovie){
//     console.log("congratulations");
// }else{
//     console.log("you quit");
// }


// //rewriting code with break keyword
// const favmovie="avatar";

// let guess=prompt("guess my favorite movie");
// while(guess!=favmovie) {
//     if(guess=="quit"){
//         console.log("you quit");
//         break;
//     }
//     guess=prompt("wrong guess.please try again.");
// }

// if(guess==favmovie){
//     console.log("congratulations");
// }

// //break keyword
// let i=1;
// while(i<=5){
//     if(i==3){
//         break;
//     }
//     console.log(i);
//     i++;
// }
// console.log("we used to break at 3");


// let fruits=["mango","apple","banana","litchi","orange"];

// for(let i=1; i<fruits.length; i=i+2){
//     console.log(i,fruits[i]);
// }

// let fruits=["mango","apple","banana","litchi","orange"];

// for(let i=0; i<fruits.length; i=i+2){
//     console.log(i,fruits[i]);
// }

// let fruits=["mango","apple","banana","litchi","orange"];
// fruits.push("pineapple");

// for(let i=0; i<fruits.length; i++){
//     console.log(i,fruits[i]);
// }

// let fruits=["mango","apple","banana","litchi","orange"];
// fruits.push("pineapple");

// for(let i=fruits.length-1; i>=0; i--){
//     console.log(i,fruits[i]);
// }

////loops with nested arrays
// let heroes=[["ironman","spiderman","thor"],["superman","wonder women","flash"]];

// for(let i=0; i<heroes.length; i++){
//     console.log(i,heroes[i],heroes[i].length);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(`j=${j},${heroes[i][j]}`);
//     }
// }

// let student=[["aman",95],["shradha",97],["karan",94.4]];

// for(let i=0; i<student.length; i++){
//     //console.log(`info of student #${i}`);//console.log(`info of student #${i=i+1}`);
//     for(let j=0; j<student[i].length; j++){
//         console.log(student[i][j]);
//     }
// }

// let student=[["manju",1212],["kavya",0712],["klm",143]];

// for(let i=0; i<student.length; i++){
//     console.log(`info of the student #${i+1}`);
//     ////console.log(i,student[i],student[i].length);
//     for(let j=0; j<student[i].length; j++){
//         console.log(student[i][j]);
//     }
// }


////for off loop
// let fruits=["mango","apple","banana","litchi","orange"];

// for(fruit of fruits){
//     console.log(fruit);
// }

// for(kavya of "apnacollege"){
//     console.log(kavya);
// }



// // practice question 1

// let arr=[1,2,3,4,5,6,2,3];
// let num=2;

// for(let i=0; i<arr.length; i++){
//     if(arr[i]==num){
//         console.log(arr.splice(i,1));
//     }
// }
// console.log(arr);

// //2
// let number=287152;
// let count=0;
// let copy=number;
// while(count>0){
//     count++;

//     copy=math.floor(copy/10);
// }
// console.log(count);

// //5
// let arr=[2,5,10,4,2,7,1,9];
// let largest=0;
// for(let i=0; i<=arr.length; i++){
//     if(largest<arr[i]){
//         largest=arr[i];
//     }
//     console.log(largest);
// }

//3

// let number = 287152;
// let sum = 0;
// let copy = number;
// while(copy > 0) {
// digit = copy % 10;
// sum+= digit;
// copy = Math.floor(copy/10);
// }
// console.log(sum);


let todo=[];
let req=prompt("please enter your request");

while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    if(req=="list"){
        console.log("-------");
        for(let i=0; i<todo.length; i++){
           console.log(i,todo[i]); 
        }
        console.log("--------");
    }
    else if(req=="add"){
        let task=prompt("please enter your task");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
        let idx=prompt("please enter the task index")
        todo.splice(idx,1);
        console.log("task deleted");
    }
    req=prompt("please enter your task");
}else {
    console.log("wromg request");
}
