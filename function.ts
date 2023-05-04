var string1:string = "hey hi";  //globally scoped(var variable is declared outside a function.)
    
    function vartst():void {
        var h1:string= "hello"; //function scoped(var is declared within a function.)
        {//block scope
            var hi:string="Hi";
            console.log(hi);//output- Hi
        }

    }
    //vartst()

    console.log(string1); //output-hey hi
    //console.log(h1);   //error-Cannot find name 'h1'.
    
//let
let string2:string= "hello";//globally scoped

    function lettst():void
    {//function scoped
        let h2:string="hello";
        console.log(h2);//output-hello
        {//block scoped
            let hi:string="Hi";
            console.log(hi);//output-Hi
        }
    }

    console.log(string2); //output-hello

//const
const string3:string ="hello";//globally scoped

    function consttst():void{//function scoped
        const h3:string="hello";
        console.log(h3);//hello

        {//block scoped
            const hi:string="Hi";
            console.log(hi);//output-Hi
        }
    }
    console.log(string3)

function multiply(a: number, b: number=10) { //default parameter is 10
    return a * b;
}
console.log(multiply(2))