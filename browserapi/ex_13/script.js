let userSec = prompt('How many seconds would you like to stay on this site?');

const countDown = function() {
    alert('hi you have ' +userSec + ' s left');
    userSec--;
    if(userSec== 0){
        alert('Your session has expired, come again soon!');
        clearInterval();
    }
}
setInterval(countDown, 1000);
