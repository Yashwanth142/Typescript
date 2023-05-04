var string1 = "hey hi"; //globally scoped(var variable is declared outside a function.)
function vartst() {
    var h1 = "hello"; //function scoped(var is declared within a function.)
    { //block scope
        var hi = "Hi";
        console.log(hi); //output- Hi
    }
}
//vartst()
console.log(string1); //output-hey hi
//console.log(h1);   //error-Cannot find name 'h1'.
//let
var string2 = "hello"; //globally scoped
function lettst() {
    var h2 = "hello";
    console.log(h2); //output-hello
    { //block scoped
        var hi = "Hi";
        console.log(hi); //output-Hi
    }
}
console.log(string2); //output-hello
//const
var string3 = "hello"; //globally scoped
function consttst() {
    var h3 = "hello";
    console.log(h3); //hello
    { //block scoped
        var hi = "Hi";
        console.log(hi); //output-Hi
    }
}
console.log(string3);
function multiply(a, b) {
    if (b === void 0) { b = 10; }
    return a * b;
}
console.log(multiply(2));
