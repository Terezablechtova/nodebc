const getHexaColor = function(color){
   
    let message = null;
    switch(color){
        case 'white':
            message = '#FFFFFF';
            break;
        case 'black':
            message = '#000000';
            break;
        case 'blue':
            message = '#0b24fb';
            break;
        case 'green':
            message = '#0e7e12';
            break;
        case 'yellow':
            message = '#fffd38';
            break;
        case 'pink':
            message = '#fec1cc';
            break;
    }
    console.log(message);
    }
    getHexaColor('pink');
    getHexaColor('blue');
    getHexaColor('black');


