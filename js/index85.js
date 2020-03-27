let f = 0;
let f1 = -1;
let f2 = 1;
var i = 1;
do{
    f = f1 + f2; //1: -1+1=0
    f1 = f2; //1: f1 = 1
    f2 = f; //1f2=0
    i++; //1: i=1; 2: i=2
    console.log(f) ;
}while (i<=10)