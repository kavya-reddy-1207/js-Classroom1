// let btns=document.querySelectorAll("button");
   
// for(btn of btns){
//     btn. onclick= sayHello;
//     btn.onmouseenter=function(){
//         console.log("you entered a button");
//     }
//     console.dir(btn);
// }
// function sayHello(){
//     alert("hello");
// };




// let btns=document.querySelectorAll("button");

// for(btn of btns){
//     btn.addEventListener("click",sayHello);
//      btn.addEventListener("click",sayName);
// }

// function sayHello(){
//     alert("hello");
//     console.log("hello");
// }

// function sayName(){
//     alert("apna college");
//     console.log("apna college");
// }


// let btns=document.querySelectorAll("button");

// for(btn of btns){
//     btn.addEventListener("dblclick",function(){
//         console.log("button was clicked by me");
//     });
// }


// let btn=document.querySelector("button");

// btn.addEventListener("click", function(){
//     let h3 = document.querySelector("h3");
//     // let randomColor = getRandomcolor(); 
//     // h3.innerText = randomColor;   //in html inner text of h3 it will print rgb values


//     let div=document.querySelector("div");
//    div.style.backgroundColor = randomColor;

//     console.log("color updated");
// });



// function getRandomcolor(){
//     let red=Math.floor (Math.random()* 255);
//     let green=Math.floor (Math.random()* 255);
//     let blue=Math.floor (Math.random()* 255);

// let color=`rgb(${red}, ${green}, ${blue})`;
//         return color;

//     };


// let p=document.querySelector("p");

// p.addEventListener("click",function(){
//     console.log("parah was clicked");
// })

// let box=document.querySelector(".box");

// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside div");
// })


// let btn=document.querySelector("button");
// let p=document.querySelector("p")
// let h1=document.querySelector("h1")
// let h3=document.querySelector("h3")

// btn.addEventListener("click",function(){
//     //console.log(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });


// p.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// h3.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// h1.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });



// let btn=document.querySelector("button");
// let p=document.querySelector("p")
// let h1=document.querySelector("h1")
// let h3=document.querySelector("h3")


// function  changeColor(){
//      console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// };

// btn.addEventListener("click",changeColor);

// p.addEventListener("click",changeColor);
   
// h3.addEventListener("click",changeColor);


// h1.addEventListener("click",changeColor);
    


// let btn=document.querySelector("button");

// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked")
// });



// let btn=document.querySelector("button");

// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button clicked")
// });


// let inp=document.querySelector("input");

// inp.addEventListener("keydown",function(){
//     console.log("key was pressed");
// })

// let inp=document.querySelector("input");

// inp.addEventListener("keyup",function(){
//     console.log("key was released");
// })

// let inp=document.querySelector("input");

// inp.addEventListener("keydown",function(event){
//     console.log(event);
//     console.log("key was pressed");
// })

// let inp=document.querySelector("input");

// inp.addEventListener("keydown",function(event){
//     console.log("code = ",event.code);
//     console.log("key = ",event.key);
//     console.log("key was pressed");
// })

// let inp=document.querySelector("input");

// inp.addEventListener("keydown",function(event){
//     console.log("code = ",event.code);   //arrowup(U), arrowdown(D), arrowright(R), arrowleft(L)
//     if(event.code == "KeyU"){
//         console.log("arrow pressed up");
//     }
//     else if(event.code ==" KeyD"){ //type d on input 
//         console.log("arrow pressed down");
//     }
//     else if(event.code == "KeyR"){  //type r on input 
//         console.log("arrow pressed right");
//     }
//     else if(event.code == "KeyL"){   //type l on input 
//         console.log("arrow pressed left");
//     }
// });


// let form=document.querySelector("form");

// form.addEventListener("submit",function(){
//     // console.log("form submitted");
//           alert("form submitted");
// })

// let form=document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//           alert("form submitted");
// });


// let form=document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();

//    let inp=document.querySelector("input");
//    console.dir(inp);
//    console.log(inp.value); 
// });


// let form=document.querySelector("form");

//  form.addEventListener("submit", function (event) {
//     event.preventDefault();


//     let user=document.querySelector("#user");
//     let pass=document.querySelector("#pass");

//     console.log(user.value);
//     console.log(pass.value);

//    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });


// let form=document.querySelector("form");

//  form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.dir(form);

//     let user=this.elements[0];
//     let pass=this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });


// let form=document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
// });

// let user=document.querySelector("#user");

// user.addEventListener("change", function (){
//     console.log("change event");
//     console.log("final value=", this.value);
// });


// user.addEventListener("input", function (){
//     console.log("input changed");
//     console.log("final value=", this.value);
// });




// let inp = document.querySelector("#text");
// let p = document.querySelector("p");

// inp.addEventListener("input", function(){
//     console.log(inp.value);
//     p.innerText = inp.value;
// });


// let btn = document.querySelector("button");

// btn.addEventListener("mouseout",function(){
//         //console.log(this);
//         console.dir(this.innerText);
//         // this.style.backgroundColor = "blue";
//     });
    

//     let h1 = document.querySelector("h1");

// h1.addEventListener("mouseout",function(){
//         //console.log(this);
//         console.dir(this.innerText);
//         this.style.backgroundColor = "blue";
//     });
    

//     let btn = document.querySelector("button");
//     let h1 = document.querySelector("h1");


// function  changeColor(){
//     console.dir(this.innerText);
//       this.style.backgroundColor = "blue";
// };

// btn.addEventListener("mouseout" , changeColor);
// h1.addEventListener("mouseout" , changeColor);


// const log = document.getElementById("log");
// const input = document.querySelector("input");

// input.addEventListener("keypress", logKey);

// function logKey(e) {
//   log.textContent += ` ${e.code}`;
// }


const usern= document.getElementById("username");
const passn= document.getElementById("password");
const btn= document.getElementById("submit-btn");
const errormsg= document.getElementById("error-msg");


usern.addEventListener("keypress", function (event) {
    if(event.key == "Enter") {
        passn.focus();
    }
})