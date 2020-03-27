function getUserID(){
    return 20;
}
function isUserValid(){
    if(getUserID > 30){
        return true;
    }else{
        return false;
    }
}
if(getUserID()>30){
console.log('User valid');
}
else{
    console.log('User not valid');
}