//Array
var arr1:string[]=['hello','hi','greets']
var arr2:Array<string>=['hello','hi','greets']

const names: string[] = [];
names.push("name1");
names.push("name2");
console.log(names)

//multi type array
var arr3:(string|number)[]=["hello",1,2,3,"hi"]
var arr4:Array<string|number>=['hi',1,2]

//access the array elements

console.log(arr1[1])

//for loop

for(let i in arr3){
    console.log(arr3[i])
}

for(let j=0 ;j<arr2.length;j++)
{
    console.log(arr2[j])
}


//Tuples
var empDetails1=[2,'jkl']
var empDetails2:[number,string,number]=[3,'asd',10]
console.log(empDetails1+'/n'+empDetails2)

//add elements in tuple
empDetails1.push('name')

//remove elements in tuple
empDetails2.pop()

//readonly tuple

const tup:readonly[string,number][] = [["hello",2],['hi',3]];
//arr.push('hi')

