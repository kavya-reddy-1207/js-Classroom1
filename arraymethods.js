//let arr=[1,2,3,4,5];

// let print=function(el){
//     console.log(el);
// };

// arr.forEach(print);

//or


// arr.forEach(function(el){
//     console.log(el);            //normal function
// });

// arr.forEach((el)=> {
//     console.log(el);           //arrow function
// });


// let arr=[
//     {
//         name:"manjula",
//         marks:94,
//     },
//     {
//         name:"kavya",
//         marks:95, 
//     },
//     {
//         name:"greeshma",
//         marks:99,
//     }];
   
//     arr.forEach((student)=>{
//         //console.log(student);
//         console.log(student.name);
//     });



//let arr=[1,2,3,4];
// let double=(function(el){
//     console.log(el*2);
// });

// arr.forEach(double);






//map function:-

// let arr=[1,2,3,4];
// let double=arr.map(function(el){
//     // return el*2;
//     return el*el;
// });

// let arr=[1,2,3,4];
// let double=arr.map((el)=> {
//     return el*2;
// });


// let students=[
//     {
//         name:"kavya",
//         marks:95,
//     },
//     {
//         name:"manjula",
//         marks:94,
//     },
//     {
//         name:"klm",
//         marks:99,
//     },
// ];

// let cgpa=students.map((el)=>{
//     return el.marks/10;
// })


// let nums=[1,2,4,6,7,9,9,5,8,11,1,3];

// let ans=nums.filter((el)=>{
//     return el%2==0; //return even-true, odd-false
// //     //return el%2!=0;   // even-false, odd-true
// //     return el<5;
//  });


// let nums=[1,3,5];
//  let ans=nums.every((el)=> el%2==0);
 

// let nums=[1,3,5];
//  let ans=nums.every((el)=> {
//     return el%2!=0;
// });
 

// let arr=[1,2,3,4];
// let ans=arr.some((el)=> el%2==0);  //implict function

// let nums=[1,2,3,4];
//  let ans=nums.every(function(el){   //same code in normal function
//     return  el%2==0;
//  });
 
// let arr=[1,2,3,4];
// let ans=arr.some((el)=>{
//     return el%2==0;            //sa,e code in arrow functuon method
// })

// let arr=[1,2,3];
// let ans=arr.reduce((acc,el)=>{
//     return acc-el;
// });

// let nums=[1,2,3,4];
// let finalval=nums.reduce((res,el)=>{
//     console.log(res);
//     return  res+el;
// });
// console.log(finalval);


// let arr=[1,3,4,5,7,8,6,9];
// let max=-1;

// for(let i=0; i<arr.length; i++){
//     if(max<arr[i]){
//         max=arr[i];
//     }
// };
// console.log(max);


// let arr=[1,2,3,5,6,9,8];
// let max=arr.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }
//     else{
//         return max;
//     }
// });
// console.log(max);

// let nums=[1,2,3,5];
// let result=nums.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }
//     else{
//         return max;
//     }
// });
// console.log(result);

// let arr=[10,20,30,40];

// let ans=arr.every((el)=> (el%10==0));

// console.log(ans);

// let arr=[10,20,30,40];

// let ans=arr.every((el)=> {
//    return el%10==0;
// });

// console.log(ans);

// let arr=[10,20,30,40];
  

// function Getval(arr){
// let ans=arr.reduce((min,el)=>{
//     if(min<el){
//         return min;
//     }
//     else{
//         return el;
//     }
// });
//      return ans;
// 

//default parameters

// function sum(a,b=2){
//     return a+b;
// }
//    sum(2);

// function sum(a=2,b){
//     return a+b;
// }
// sum(3);   //    NaN


// function sum(a=3,b=1){
//     return a+b;
// }


// const data={
//     email:"ironman@gmail.com",
//     password:"abcd",
// };
// const datacopy={...data, id:123, country:"india"};


// let arr=[1,2,3,4,5];

// let obj1= {...arr};

// let obj2={..."hello"};

//rest method

// function sum(...args){
//     for(let i=0; i<args.length; i++){
//         console.log("you gave us:",args[i]);
//     }
// }; //sum(1,2);


// function min(...args){
//     return args.reduce((min,el)=>{
//         if(min>el){
//             return min;
//         }
//         else{
//             return min;
//         }
//     });
// }

// function min(msg,...args){
//     console.log(msg);
//     return args.reduce((min,el)=>{
//         if(min>el){
//             return min;
//         }
//         else{
//             return min;
//         }
//     });
// }



// //let names=["amma","nanna","babi","ammu"];
// // let winner=names[0];
// // let runnerup=names[1];
// // console.log(winner,runnerup);

// //let [winner, runnerup, secondrunnerup]=names;

// let names=["amma","nanna","babi","ammu","klm","all","forever"];
// let [winner,runnerup,...secondrunnerup]=names;


// const student={
//     name:"kavya",
//     age:21,
//     subjects:["telugu","hindi","english","math","science","social studies"],
//     password:123,
//     username:"kav@123",
// };

// let {username, password}=student;


// const student={
//     name:"kavya",
//     age:21,
//     subjects:["telugu","hindi","english","math","science","social studies"],
//     password:123,
//     username:"kav@123",
// };

// let {username:user, password:pass}=student;


// const student={
//     name:"kavya",
//     age:21,
//     subjects:["telugu","hindi","english","math","science","social studies"],
//     password:123,
//     username:"kav@123",
//     city:"pune",
// };

// let {username:user, password:pass, city:place="mumbai"}=student;



//part 8
// // let sqr=((n)=>{
// //     return n*n;
// // });

// // let sum=((n)=>{
// //     return n+n;
// // });
// // console.log(sum(2,2));


// let avg=((a,b,c)=>{
//     return a,b,c/3;
// });
// console.log(avg(2,4,6));

// //1)
// let nums=[1,2,3,4,5];

// const square=nums.map((el)=>el*el);
// console.log(square);


//2)
// let arr=[1,2,3,4,5];
// let newarr=arr.map((el)=> el+5);
// console.log(newarr);

// let numbers = [2, 4, 6, 8, -2, -4];
// console.log(numbers.map((number) => number + 5));

//3)
// let arr=["hello","kavya","how are you"];

// let newarr=arr.map((el)=> el.toUpperCase());
// console.log(newarr);

//4)
// const doubleAndReturnArgs = (arr,...args)=>[
//     ...arr,
//     ...args.map((el)=> el*2),
// ];

// // console.log(doubleAndReturnArgs([1,2,3],4,4));
// console.log(doubleAndReturnArgs([2],10,4));

//5)


// const mergeObjects=(obj1,obj2)=> ({...obj1,...obj2});
// console.log(mergeObjects({a:1, b:2} , {c:3, d:4 }));

// const obj1={
//     a:1,
//     b:2
// };
// const obj2={
//     c:3,
//     d:4
// };

// const mergeObjects={...obj1,...obj2};
// console.log(mergeObjects);



