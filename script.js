'use strict';

let database = firebase.database();

let startBtn = document.querySelector("#start");

let user = null;

let count = 0;

// let playerChoice=document.querySelectorAll()


let bool = true;

let username = document.querySelector("#username");

let waiting1 = document.querySelector(".waiting1");

let waiting2 = document.querySelector(".waiting2");

let player1 = document.querySelector(".player1");

let player2 = document.querySelector(".player2");

let local = null;

startBtn.addEventListener("click", function (e) {

    if (waiting1.innerHTML) {
        
        let user = database.ref("room1").push({
            name: username.value
        })
    
        localStorage.setItem("userKey", user.key);
    
        database.ref(`room1/${localStorage.getItem("userKey")}`).on("value", function (snapshot) {
            player1.innerHTML = snapshot.val().name;
        })

        waiting1.innerHTML = "";
    } 
    else {
        
        let user = database.ref("room1").push({
            name: username.value
        })
    
        localStorage.setItem("userKey", user.key);
    
        database.ref(`room1/${localStorage.getItem("userKey")}`).on("value", function (snapshot) {
            player2.innerHTML = snapshot.val().name;
        })

        waiting2.innerHTML = "";
    }

})
 
window.onload = (e) => {
    if (!player1.innerHTML) {
        waiting1.innerHTML = "";
        database.ref(`room1/${localStorage.getItem("userKey")}`).on("value", function (snapshot) {
            player1.innerHTML = snapshot.val().name;
        })
    } else {
        player1.innerHTML = "";
        waiting1.innerHTML = "Waiting for Player1"
    }

    if (!player2.innerHTML) {
        waiting2.innerHTML = "";
        database.ref(`room1/${localStorage.getItem("userKey")}`).on("value", function (snapshot) {
            player2.innerHTML = snapshot.val().name;
        })
    }

}

if (!player1.innerHTML) {
    let rockBtn = document.querySelector("#rock1");

    let scissorsBtn = document.querySelector("#scissors1");

    let paperBtn = document.querySelector("#paper1");

    rockBtn.addEventListener("click", function (e) {
        database.ref(`room1/${localStorage.getItem("userKey")}/choices`).set({
            choice: 'rock'
        })
        document.querySelector(".left-player-choice").innerHTML = "Rock";

        console.log('Rock1');
    })
    scissorsBtn.addEventListener("click", function (e) {
        database.ref(`room1/${localStorage.getItem("userKey")}/choices`).set({
            choice: 'scissors'
        })
        document.querySelector(".left-player-choice").innerHTML = "Scissors";
        console.log('Scissors1');
    })
    paperBtn.addEventListener("click", function (e) {
        database.ref(`room1/${localStorage.getItem("userKey")}/choices`).set({
            choice: 'paper'
        })
        document.querySelector(".left-player-choice").innerHTML = "Paper";
        console.log('Paper1');
    })

}

if (!player2.innerHTML) {
    let rockBtn = document.querySelector("#rock2");

    let scissorsBtn = document.querySelector("#scissors2");

    let paperBtn = document.querySelector("#paper2");

    rockBtn.addEventListener("click", function (e) {
        database.ref(`room1/${localStorage.getItem("userKey")}/choices`).set({
            choice: 'rock'
        })
        document.querySelector(".right-player-choice").innerHTML = "Rock";

        console.log('Rock2');
    })
    scissorsBtn.addEventListener("click", function (e) {
        database.ref(`room1/${localStorage.getItem("userKey")}/choices`).set({
            choice: 'scissors'
        })
        document.querySelector(".left-player-choice").innerHTML = "Scissors";
        console.log('Scissors2');
    })
    paperBtn.addEventListener("click", function (e) {
        database.ref(`room1/${localStorage.getItem("userKey")}/choices`).set({
            choice: 'paper'
        })
        document.querySelector(".left-player-choice").innerHTML = "Paper";
        console.log('Paper2');
    })

}
















