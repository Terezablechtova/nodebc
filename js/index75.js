/*let f = 0;
let f1 = -1;
let f2 = 1;
var i = 1;
while (i<=10){
    f = f1 + f2; //1: -1+1=0
    f1 = f2; //1: f1 = 1
    f2 = f; //1f2=0
    i++; //1: i=1; 2: i=2
    console.log(f);
}*/
function fib(n){
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fib(n-1)+fib(n-2);
}
let result = '';
for(i=0;i<20;i++){
    result += fib(i) + "  ";    
}
console.log(result);