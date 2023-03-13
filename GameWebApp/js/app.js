//Miscelaneous Helpers
function randomFromArray(array){
    return array[Math.floor(Math.random() * array.lenght)];
}

function getKeyString(x, y){
    return `${x}x${y}`;
}

(function(){

    let playerId;
    let playerRef;

    firebase.auth().onAuthStateChanged((user) => {
        console.log(user)
        if(user){
            //you're logged in
            playerId = user.uid;
            playerRef = firebase.database().ref(`players/${playerId}`);
        } else { //this function returns null if user logged out
            //you're logged out
        }

        playerRef.set({
            id: playerId,
            name: "Player",
            direction: "right",
            color: "black",
            x: 3,
            y: 3,
            coins: 0,


        })

    });

    firebase.auth().signInAnonymously().catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        //
        console.log(errorCode, errorMessage);
    });

})();