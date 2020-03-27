const sort = function(number1,number2,number3){
    if(number2<number1){
        number2=number1;
    }else if (number3<number2) {
        number3=number2;
    } else if (number2>number3){
        number2=number3;
    }else if(number3<number1){
        number3=number1;
    }else if(number1>number2){
        number1=number2;
    }else if(number1>number3){
        number1=number3;
    }
        else{
            console.log(number1, number2, number3);
        }
    }
    
sort(10,8,25);