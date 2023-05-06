var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(color) {
        this.Color = color;
    }
    return Car;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(color, price) {
        var _this = _super.call(this, color) || this;
        _this.Price = price;
        return _this;
    }
    Audi.prototype.display = function () {
        console.log("Color of Audi car: " + this.Color);
        console.log("Price of Audi car: " + this.Price);
    };
    return Audi;
}(Car));
var obj = new Audi('Black', 85000);
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
