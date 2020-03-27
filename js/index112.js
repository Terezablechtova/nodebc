const showNumbers = function(start, end){
    if(start>end && start && !isNaN(start) && !isNaN(end)){
        for(i=start; i>end; i--){
            console.log(i);
        }
    }
    else if(end>start && !isNaN(start) && !isNaN(end)){
        for(i=start; i<end; i++){
            console.log(i);
        }
    }
    else if(end==start && !isNaN(start) && !isNaN(end)){
        console.log('The numbers are the same');
    }
    else{
        console.log('Invalid parameter');
    }
}
showNumbers(0,100);
showNumbers(1000,0);
showNumbers(100,100);
showNumbers("100",300);