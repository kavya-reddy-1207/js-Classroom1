// let div= document.querySelector("div");
// let ul= document.querySelector("ul");
// let li= document.querySelector("li");

// div.addEventListener("click", function (){
//     console.log("div was clicked");
// })

// // ul.addEventListener("click", function (){
// //     console.log("ul was clicked");
// // })

// // li.addEventListener("click", function (){
// //     console.log("li was clicked");
// // })


// ul.addEventListener("click", function (event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// })

// li.addEventListener("click", function (event){
//     event.stopPropagation();
//     console.log("li was clicked");
// })



// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function(){
//     let item = document.createElement("li");
//     item.innerText = inp.value;

//     let delbtn = document.createElement("button");
//     delbtn.innerText = "delete";
//     delbtn.classList.add("delete");
//     item.appendChild(delbtn);
//     ul.appendChild(item);
//     inp.value ="";

// });


// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         //console.log("element deleted");
//         // let par = delbtn.parentElement;
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
  let item = document.createElement("li");
  item.innerText =inp.value;
  ul.appendChild(item);
    inp.value = "";


    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
});

// let delbtn = document.querySelectorAll(".delete");
// for(delbtns of delbtn){
// delbtns.addEventListener("click", function(){
//    let par= this.parentElement;
//    par.remove();
// })
// }

ul.addEventListener("click", function(event){
    /////console.log(event.target.nodeName);
    if(event.target.nodeName == "BUTTON"){
        let listItem =event.target.parentElement;
        console.log(listItem);
        console.log("deleted");
        listItem.remove();
       // listItem.remove();
    }
    
});



