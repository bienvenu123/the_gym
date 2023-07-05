//counter
let count = 0
let countt = document.getElementById("count-el")
let countpa = document.getElementById("counteel")
console.log(counteel)

function increment() {

    count = count + 1
    console.log(count)
    countt.innerText = count;
}

function save() {
    let county = count + "-"
    let reset = 0
    countpa.textContent += county;
    console.log(count)
    countt.textContent = reset;
    count = 0
}
//error  message
function errorbtn() {
    document.getElementById("error").textContent = "invalid";
}
let mame = "bienvenu"
let welcome = document.getElementById("welcome").textContent = mame;

//initialization
let firstname = "uwayezu"
let lastname = "bienvenu"
let fullname = firstname + " " + lastname
console.log(fullname)

//for static calculator
let num1 = 8
let num2 = 7
document.getElementById("num1-el") = num1
document.getElementById("num2-el") = num2

function sum() {
    let add = num1 + num2
    document.getElementById("sum-el").textContent = add;
}

function sub() {
    let subst = num1 - num2
    document.getElementById("sum-el").textContent = subst;
}

function div() {
    let divi = num1 / num2
    document.getElementById("sum-el").textContent = divi;
}


function mult() {
    let multi = num1 * num2
    document.getElementById("sum-el").textContent = multi;
}