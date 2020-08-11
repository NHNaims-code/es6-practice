function add (a, b){
    var result = a + b;
}

add(a, b);
console.log(result); //var not work outside of a function.....

for(let i = 0; i < 100; i++){
    if(i){
        var result = 'outside a loop block';
    }
}

console.log(result);