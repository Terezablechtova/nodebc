
let sec = 1;
const greet = function() {
          alert('hi you have been here for: ' +sec + ' s');
          sec++;
}
setInterval(greet, 1000);