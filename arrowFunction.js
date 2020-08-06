const add = function(num1, num2){
    return num1 + num2;
}

const double = num => num *2;

console.log(double(12));

const blankFunction = () => 25;

console.log(blankFunction());

const longFunction = (x , y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
console.log(longFunction(3, 2));