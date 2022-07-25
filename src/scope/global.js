// variables

var a; // declaramos
var b = "b"; //declaramos y asignamos
b = "bb"; //reasignamos
var a = "aa"; // redeclaramos


//global scope
var fruit = "apple"; // global

function bestFruit() {
    console.log(fruit);
}

bestFruit()