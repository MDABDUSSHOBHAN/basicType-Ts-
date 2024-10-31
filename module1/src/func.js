// Normal funciton 
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 5));
var addArrow = function (num1, num2) {
    return (num1 + num2);
};
console.log(addArrow(2, 56));
//  object ---> function() ----> Method()
// callBack Function in ts
var array = [1, 3, 4, 5];
array.map(function (number) {
    console.log(number * number);
});
