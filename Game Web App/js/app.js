//Miscelaneous Helpers
function randomFromArray(array){
    return array[Math.floor(Math.random() * array.lenght)];
}

function getKeyString(x, y){
    return '${x}x${y}';
}

(function(){

    firebase.auth().onAuthStateChanged((user) => {
        console.log(user)
        if(user){
            //you're logged in
        } else { //this function returns null if user logged out
            //you're logged out
        }
    });

    firebase.auth().signInAnonymously().catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        //
        console.log(errorCode, errorMessage);
    });

})();