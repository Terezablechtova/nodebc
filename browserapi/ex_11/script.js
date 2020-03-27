let username = prompt('Input your username');
prompt('Input you password');

alert('Welcome '+username);


let question = function(){
    confirm('Do you still want to be logged?');

    if(true){
        alert(username + ' your session has been restored');
    }else{
        alert(username+ 'Your session has expired');
    }
}

setTimeout(question, 2000);




