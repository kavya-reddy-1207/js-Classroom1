// function hello(){
//     console.log("hello");
// }
// hello();

// function kavya(){
//     console.log("rkv");
//     console.log("iiit");
//     console.log("rgukt");
// }
// kavya();
// kavya();
// kavya();

// function printpoem(){
//     console.log("twinkle twinkle little star");
//     console.log("how i wonder what you are");
//     console.log("up bow the world so high");
//     console.log("like a diamond in the sky");
// }
// printpoem();

// function rollDice(){
//     let rand=Math.floor(Math.random()*6)+1;
//     console.log(rand);
// }
// rollDice();


// function printname(name){
//     console.log(name);
// }
// printname("kavya");

// function printInfo(name,age){
//     console.log(`${name}'s age is ${age}`);
// }
// printInfo("kavya",21);

// function sum(a,b){
//     console.log(a+b);
// }
// sum(1,4);
// sum(2,12);
// sum(4,6);

// //sum of the numnbers
// function calAvg(a,b,c){
//     let avg=(a+b+c)/3;
//     console.log(avg);
// }
// calAvg(2,4,6);

// function printTable(n){
//     for(let i=n; i<=n*10; i=i+n){
//         console.log(i);
//     }
// }
// printTable(2);


// function isadult(age){
//     if(age>=18){
//         return "adult";
//     }else{
//         return "not an adult";
//     }
// }



// function getsum(n) {

//     let sum=0;

//     for(let i=1; i<=n; i++){
//         sum=sum+i;
//     }

//     return sum;
// }

// let str=["hi","hello","bye","!"];

// function concat(str){
     
//     let result="";

//     for(let i=0; i<str.length; i++){
//         result+=str[i];
//     }
    
//     return result;
// }


// let sum=54;
// function calsum(a,b){
//     let sum=a+b;

// console.log(sum);
// }

// calsum(2,3);
// console.log(sum);

// for(let i=1; i<=5; i++){
//     console.log(i);
// }


// let age=25;
// if(age>=20){
//    // console.log("adult");
//    let str="adult";
//    console.log(str);
// }


// function outerfunc(){
//     let x=5;
//     let y=6;
//     function innerfunc(){
//         console.log(x);
//     }

//   innerfunc();
// }

// function outerfunc(){
//     let x=5;
//     let y=6;
//     function innerfunc(){
//         let a=10;
//         console.log(x);
//     }
//     console.log(a);
//   innerfunc();
// }

//practice qs
// let greet="hello";//global scope

// function changegreet(){
//     let greet="namaste";
//     console.log(greet);

//     function innergreet(){
//         console.log(greet);
//     }
// }

// console.log(greet);
// changegreet()

// let greet="hello";//global scope

// function changegreet(){
//     let greet="namaste";//function scope
//     console.log(greet);

//     function innergreet(){
//         console.log(greet);//lexical scope
//     }
//     innergreet();
// }

// console.log(greet);
// changegreet()



// let hello=function(){
//     console.log("hello");
// }
// hello=function(){
//     console.log("namaste");
// }
// // hello();


//higher order function
// function multipleGreet(func,count){
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }
// let greet=function(){
//     console.log("hello");
// }

// // multipleGreet(greet,2);
// multipleGreet(function(){console.log("namaste")},1000);

//higher order function(returns)
// let odd = function(n){
//     console.log(!(n%2==0)); //if n=5
// }
// let even = function(n){
//     console.log(n%2==0) //if n=10
// }


// function oddOrEvenFactory(request){
//     if(request=="odd"){
//         let odd=function(n){
//             console.log(!(n%2==0));
//         }
//     return odd;
//     }
// else if(request=="even"){
//     let even=function(n){
//         console.log(n%2==0);
//     }
//     return even;
// }
// else{
//     console.log("wrong request");
// }
// }
// let request="odd";

//methods
// const calculator={
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// };


// //shorthand for methods
// const calculator={
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     }
// };

// //prart 7 //1)
// let arr=[8,9,10,1,2,3,4,5,6,7];
// let num=5;
// //array elements larger than num
// function getElements(arr,num){
//     for(i=0; i<arr.length; i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//         }
//     }
// }
// getElements(arr,num);


// //2)
// let str="abcdabcdefgggh";
// let ans="";

// function getUnique(str){
//     for(let i=0; i<str.length; i++){
//         let currchar=str[i];
//         if(ans.indexOf(currchar)==-1){
//          ans+=currchar;
//         }
//     }
//     return ans;
// }
// getUnique(str);

// //3)
// let country=["australia","germany","united states of america"];

// function longestName(country){
// let ansIdx=0;
// for(let i=0; i<country.length; i++){
// let anslen=country[ansIdx].length;
// let currlen=country[i].length;
// if(currlen>anslen){
//     ansIdx=i;
// }
// }
// return country[ansIdx];
// }
// longestName(country);

//4)
// let str="apnacollege";

// function countVowel(str){
//     let count=0;
//     for(let i=0; i<str.length; i++){
//         if(
//             str.charAt(i)=="a"||
//             str.charAt(i)=="e"||
//             str.charAt(i)=="i"||
//             str.charAt(i)=="o"||
//             str.charAt(i)=="u"
//         ){
//     count++;
// }
// }
// return count;
// }
// countVowel(str);


// //5)
// let start=100;
// let end=200;
 
// function generateRandom(start,end){
//     let diff=end-start;
//     return Math.floor(Math.random()*diff)+start;
    
// }


// function isadult(){
//     let age=18;
//     if(age>=18){
//         console.log("adult");
//     }
//     else{
//         console.log("not adult");
//     }
// }
// isadult();
 

// const student={
//     name:"kavya",
//     age:21,
//     eng:93,
//     math:92,
//     phy:99,
//     getAvg(){
//         let avg=(this.eng+this.math+this.phy)/3;
//         //console.log(avg);
//         console.log(`${this.name} got avg marks=${avg}`);
//     }
// }



// const stu={
//     name:"kavya",
//     age:21,
//     college:"rgukt rkv",
//     eng:21,
//     math:30,
//     getAvg(){
//        let avg=(this.eng+this.math)/2;
//  console.log(`i'm ${this.name} i am ${this.age} old .studying in ${this.college} got an avg marks=${avg}`);
//     }
// }
//stu.getAvg();




console.log("hello");
console.log("hiii");
//////let a=5;
try{
    console.log(a);
}
catch(err){
    console.log("caught an error..a is not defined");
    console.log(err);
}
console.log("oyee");
console.log("kavya")


