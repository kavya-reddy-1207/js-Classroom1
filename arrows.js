// const sum=(a,b)=>{
//     console.log(a+b);
// }
// sum(2,3);

 
// const cube=(n)=>{
//     return n*n*n;
// }


// const hello=()=>{
//     console.log("hello world");
// }

// const pow=(a,b)=>{
//     return a**b;
// }

// const cube=n=> {
//     return n*n*n;
// }

//const mul=(a,b)=> (a*b);

//const sum=(a,b) => (a + b);

// const cube=n=>(n*n*n);//we can also right n*n*n without paranthesis

//steTimeout function

// console.log("Hi there!");

// setTimeout(()=>{
//     console.log("Apna college");
// },4000);

// console.log("welcome to");


// setInterval(()=>{
//     console.log("apna college");
// },2000);

// let id=setInterval(()=>{
//     console.log("apna college");
// },2000);
// console.log(id);

// let id2=setInterval(()=>{
//     console.log("hello world");
// },2000);
// console.log(id2);



// const student={
//     name:"kavya",
//     marks:95,
//     prop:this,
//      getName: function(){
//         console.log(this);
//         return this.name;
//      },
//      getMarks:()=>{
//         console.log(this);
//         return this.marks;
//      },
//      getInfo1: function(){
//         setTimeout(()=>{
//             console.log(this);
//         },2000);
//      },

//      getInfo2: function(){
//         setTimeout(function(){
//             console.log(this);
//         },2000);
//      }
// };


// //practice qs
//1)// const sqr=(n)=>{
//     return n*n;
// }

// const sqrt=(n)=>(
//     n*n
// );
// console.log(sqrt(4));

//2)

// let id=setInterval(()=>{
//     console.log("hello world!");
// },2000);

// setTimeout(()=>{
// clearInterval(id);
// console.log("clear interval ran");
// },10000);


//practice questions part -7

// const arrayAverage=(arr)=>{
//     let total=0;
//     for(let number of arr){
//         total+=number;
//     }
//     return total/arr.length;
// };

// let arr=[1,2,3,4,5,6];
// console.log(arrayAverage(arr));


// //2)
// let num=4;

// const isEven=(num)=>(
//     num%2==0
// );


// const object={
//     message:'hello,world!',

//     logmessage(){
//         console.log(this.message);
//     }
// }
// setTimeout(object.logmessage,1000);


// //4)
// let length = 4;
// function callback() {
// console.log(this.length);
// }

// const object={
// length: 5,
// method(callback) {
// callback();
// },
// };
// object.method(callback, 1, 2);

