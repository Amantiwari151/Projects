console.log("Welcome to my Tic Tac Toe")
let music = new Audio("gameplay.mp3")
let audioTurn = new Audio("turn.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;
// function to change the turn 
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}
// function to cheack for a win 
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    win.forEach(e =>{
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[2]].innerText === boxtext[e[1]].innerText && boxtext[e[0]].innerText !==""){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + "\tWinner !!"
            isgameover = true
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px"
            music.pause()
            gameover.play()
            // document.querySelector(".container").innerHTML = "You Won"
        }
    })
}
// main logic
// music.play(); 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if(boxtext.innerText === ''){
            music.play();
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})
// let boxes = document.getElementsByClassName("box");
// Array.from(boxes).forEach(element => {
//     let boxtext = element.querySelector('.boxtext');
//     element.addEventListener('click', () => {
//         if (boxtext.innerText === '') {
//             boxtext.innerText = turn;
//             turn = changeTurn();
//             audioTurn.play();
//             checkWin();
//             document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
//         }
//     })
// })
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(e =>{
        e.innerText = ""
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px"
        audioTurn.play()
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    });
});