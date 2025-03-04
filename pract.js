//creating a js that prompts the user to enter their ages

let age=prompt("please enter you ages:");
//convert the input to number
//age=number(age);

if(age>=0 && age<=12) {
    alert("classification:child");
}
else if(age>=13 && age<=19) {
    alert("classification:teen");
}
else if(age>=20 && age<=64) {
    alert("classification:adult");
}
else if(age>=65) {
    alert("classification:senior");
}
else {
    alert("invalid age entered.please enter a valid age.")
}