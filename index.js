/*
    //JS study
Variable use 'const' (number, string, boolean, float are possible)
         use 'let' only when need to change variable
*/

function sayHello(whoIs){
    console.log("Hello!",whoIs);
    console.log(`Hello! ${whoIs}`);
    console.log('Hello!' + ' ' + whoIs);
    /* Camel case
    laysOfWeek: start with lower case, use upper case in middle of variable
    */
    //array
    const daysOfWeek = ["Mon","Tus","Wen",'Thu','Fri','Sat',"Sun"];
    console.log(daysOfWeek[1]);
    
    //Object
    const nnInfo = {
        name: "Max", age: 8, gender:"who",
        favMovies: ["Armageddon", "Inception"]
    }
    nnInfo.gender = "male"
    console.log(nnInfo.gender);
    console.log(nnInfo);

    return 'Bye!~'
}

const greetWhoIs = sayHello("Max");
console.log(greetWhoIs);
console.log("-------------------------------------------")
//this part (document) works in browser only.
//server dosen't have document object.
// so ignore referenceError(document is not defined)
const title = document.getElementById("title");
//const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
document.title = "YH's Web Study";
console.dir(document);

function handleResize(){
    console.log("resized!!!")
}
window.addEventListener("resize",handleResize());//immediately called
window.addEventListener("resize",handleResize);//whenever resized, called

function handleClick(){
    title.style.color = 'blue';
}

title.addEventListener("click", handleClick);
console.log("done")