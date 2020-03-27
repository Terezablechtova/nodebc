

/*const getShapePerimeter = function(base,height){
    let result1 = base*4;
    let result2 = 2*base+2*height;
    if(base==height && result1 >100){
        console.log(result1+' is the shape perimeter');
        console.log('The perimeter is too big')
    }else if(base != height){
        console.log(result2+' is the shape perimeter');
    }else if(result1 || result2 > 100){
        console.log('The perimeter is too big');
    }else{
        console.log('The perimeter is fine');
    }
}*/

const getShapePerimeter = function(base,height){
    let result1 = base*4;
    let result2 = 2*base+2*height;
    if(base==height && result1 >100){
        console.log(result1+' is the shape perimeter');
        console.log('The perimeter is too big');
    }else if(base==height && result1 <100){
        console.log(result1+' is the shape perimeter');
        console.log('The perimeter is fine');
    }else if(base != height && result2 >100){
        console.log(result2+' is the shape perimeter');
        console.log('The perimeter is too big')
    }else{
        console.log(result2+' is the shape perimeter');
        console.log('The perimeter is fine');
    }
}

getShapePerimeter(2,3);
getShapePerimeter(2,2);
getShapePerimeter(100,200);