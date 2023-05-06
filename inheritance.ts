class Car {   
public Color:string
 constructor(color:string) {   
    this.Color = color  
 }   
}   
class Audi extends Car {   
    Price: number  
    constructor(color: string, price: number) {  
        super(color);
        this.Price = price;
    }  
    display():void {  
        console.log("Color of Audi car: " + this.Color);  
        console.log("Price of Audi car: " + this.Price);  
    }  
}  
let obj = new Audi('Black', 85000 );  
obj.display();  

// class studentData{
//     stdname:string
//     stdAge:number
//     constructor(name:string){
//         this.stdname=name
//         this.stdAge=11
//     }
//     results(){
//     return "fail"
//     }
// }

// class student extends studentData{
//     school:string

//     constructor(school:string,newname:string,){
//         super(newname)
//         this.school=school
//     }
//     showDetails(){
//         console.log(this.stdAge+'years old'+this.stdname+'studying in'+this.school)
//     }
// }
// var std=new student('abcs','ojkl');
// std.showDetails();