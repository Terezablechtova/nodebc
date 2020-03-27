const biggerNumber = function(firstNumber, secondNumber){
if(firstNumber>secondNumber){
    console.log('Number '+firstNumber+' is bigger than '+ secondNumber);
}else if(firstNumber<secondNumber){
    console.log('Number '+firstNumber+' is smaller than '+secondNumber);
}else if(secondNumber == firstNumber){
    console.log('Both numbers are '+firstNumber)
}else{
    console.log('Error!!!');
}
}
biggerNumber(3,5);
biggerNumber(5,3);
biggerNumber(2,2);
biggerNumber(roy,camile);

