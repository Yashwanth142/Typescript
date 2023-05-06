function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
var emp = {
    empID: 23,
    empname: "Vickey",
    display: function () {
        console.log(this.empID, this.empname);
    }
};
console.log(emp.empname);
emp.display();
