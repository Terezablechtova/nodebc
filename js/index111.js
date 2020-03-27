const even = function(number){
    if(number%2==0){
        console.log(`${number} is even number`);
        return true;
    }else{
        console.log(`${number} is odd number`)
        return false;
    }
}
even(2);
even(3);
