let turn = 'X';
const btnsound = new Audio('./Audio/beep-sound-8333.mp3');
const gameWinSound = new Audio('./Audio/success-fanfare-trumpets-6185.mp3');
const gameRestart = new Audio('./Audio/game-start-6104.mp3');
const box = document.getElementsByClassName('btn');
let countX = 0;
let count0 = 0;
const checkturn = ()=>{
    return turn == "X" ? '0' : 'X' ;
}
function gameOver(){
   
    for(elmt of box){
        elmt.innerHTML ='';
    }
}
const checkWin = () =>{
    let winCondition =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
    ]
   winCondition.map(el =>{
    if(box[el[0]].innerHTML !== '' && box[el[0]].innerHTML == box[el[1]].innerHTML && box[el[0]].innerHTML == box[el[2]].innerHTML && box[el[1]].innerHTML == box[el[2]].innerHTML){
        document.querySelector('#resultUpdate').innerHTML = `Player ${box[el[0]].innerHTML} has won`;
        document.querySelector('#resultUpdate').style.display = 'block';
        gameWinSound.play();
        if(box[el[0]].innerHTML == 'X'){
            countX = countX +1;
            document.querySelector('#playerX').innerHTML = `Player X = ${countX}`;
            document.querySelector('#player0').innerHTML = `Player 0 = ${count0}`;
        }else if(box[el[0]].innerHTML == '0'){
            count0 = count0+1 ;
            document.querySelector('#playerX').innerHTML = `Player X = ${countX}`;
            document.querySelector('#player0').innerHTML = `Player 0 = ${count0}`;
        }
        gameOver();
    };
   })
//    if(!gameOver()){
//     document.querySelector('#resultUpdate').innerHTML = `Game is drawn`;
//    }
}


Array.from(box).forEach(elmt =>{
    let boxtext = elmt;
    elmt.addEventListener('click',()=>{
        if(boxtext.innerHTML == ''){
           boxtext.innerHTML = turn;
           turn = checkturn();
           btnsound.play();
           checkWin();
        }
    })
})

document.querySelector('#rest-btn').addEventListener('click',()=>{
    gameRestart.play();
    document.querySelector('#resultUpdate').style.display = 'none';
    gameOver();
})
