function add(num1 , num2){
    num2 = num2 || 0;
    return num1 + num2;
}

const result = add(10);
console.log(result);


function add2(num3 = 0, num4 = 0){
    return num3 + num4;
}

const result2 = add2();
console.log(result2);