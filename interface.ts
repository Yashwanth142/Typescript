interface LabeledValue {
    label: string;
}
   
function printLabel(labeledObj: LabeledValue) {
   console.log(labeledObj.label);
}
   
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);


interface Iemp{
    empID:number
    empname:string

    display:()=>void;
}

var emp : Iemp={
    empID:23,
    empname:"Vickey",

    display():void{
        console.log(this.empID,this.empname)
    }
}
console.log(emp.empname)
emp.display()

class A implements Iemp{
    empID: 23;
    empname: 'ji';

    display():void{
        console.log(this.empID,this.empname)
    }
}
let obj1= new A();
console.log(obj1.empID)