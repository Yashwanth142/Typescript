//Array
var arr1 = ['hello', 'hi', 'greets'];
var arr2 = ['hello', 'hi', 'greets'];
var names = [];
names.push("name1");
names.push("name2");
console.log(names);
//multi type array
var arr3 = ["hello", 1, 2, 3, "hi"];
var arr4 = ['hi', 1, 2];
//access the array elements
console.log(arr1[1]);
//for loop
for (var i in arr3) {
    console.log(arr3[i]);
}
for (var j = 0; j < arr2.length; j++) {
    console.log(arr2[j]);
}
//Tuples
var empDetails1 = [2, 'jkl'];
var empDetails2 = [3, 'asd', 10];
console.log(empDetails1 + '/n' + empDetails2);
//add elements in tuple
empDetails1.push('name');
//remove elements in tuple
empDetails2.pop();
//readonly tuple
var tup = [["hello", 2], ['hi', 3]];
//arr.push('hi')
