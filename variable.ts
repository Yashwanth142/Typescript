//number

var n1:number=10;
var n2:number=0x754;
var n3:number=0o31347;
var n4:number=0b101011;
//n4='lkj'

console.log(n1,n2,n3,n4)

//String

var name1:string='string';

console.log(name1);

//boolean

var a:boolean=true;
var b:boolean=false;

console.log(a,b)

//void a function which doesn't return anything

function hello():void{
    console.log('hello')
}
hello()

//Null

var num:number=null;
num=98
console.log(num)

//undefined

var undnum:number=undefined;
undnum=20;

console.log(undnum)

//Any

var any:any='string'
any=321
any=true
console.log(any)

//var variables can be re-declared and updated.

var x:string='hello'
var x:string='hi';
x='say hello'

//let variables can not be re-declared and but can be updated.
let y:number=10
//let y:number=20
y=10

//const variables can not be re-declared and updated.
const z:number=1
//const z:number=5
//z=10