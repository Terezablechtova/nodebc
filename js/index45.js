let playerName = 'Patrik Laine is lame';
let teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
let message = 'Winnipeg is the best Canadian city, Go Winnipeg';
let result1 = playerName.slice(0,16);
let result2 = teams.slice(46,50);
let result3 = message.slice(12,20);
let result4 = message.slice(34,-8);
let player = 'player'
let exclamationMark = '!!'
let result = `${result1.slice(0,13).toUpperCase()+result1.slice(13)}${result3} ${result2.charAt(0).toUpperCase()+result2.slice(1)} ${player}${result4}${result2.charAt(0).toUpperCase()+result2.slice(1)}${exclamationMark}`
console.log(result);

