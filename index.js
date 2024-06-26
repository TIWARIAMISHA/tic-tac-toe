console.log("Welcome to tic tac toe");
let Audiomusic = new Audio("music.mp3");
let Audioting = new Audio("ting.mp3");
let gameoverAudio = new Audio("gameover.mp3");
let turn = "X";
let gameover = false;
//let reset = document.getElementsByClassName(".btn");
//Function to Change Turn

const ChangeTurn = () =>
    {
        return turn == "X"? "0":"X";
    }

//Function to Check Win


const checkwin = ()=>{
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "") ){
            document.querySelector('.Info').innerText = boxText[e[0]].innerText + " Won"
            isgameover = true;
            document.querySelector('.Imgbox').getElementsByClassName("img")[0].style.width = "200px";
            Audiomusic.play();
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}



     
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = ChangeTurn();
            Audioting.play();
            checkwin();
            if (!isgameover){
                document.getElementsByClassName("Info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    Audiomusic.pause();
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})










