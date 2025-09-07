var userRandomNumber;
var computerRandomNumber;
var userPicture = document.querySelector(".userimg");
var computerPicture = document.querySelector(".computerimg");
var tossBtn = document.querySelector(".toss-btn").addEventListener("click", (e) => {
  main();
  document.querySelector(".score-board,.winner").classList.add("make-huge");

}
)
var winner = document.querySelector(".score-board .winner")

var userScores = 0
var loopno = 0
var drow = 0
var computerScores = 0

var name = prompt("Enter your name for personalized contents: ")
var names = document.querySelectorAll(".name")
for (let i = 0; i<= names.length; i++){
  names[i].innerHTML = `${name}`

}

function main(){
  // TODO1:  generate random numbers
  userRandomNumber = Math.floor((Math.random() * 6) + 1);
  computerRandomNumber = Math.floor((Math.random() * 6) + 1);

  // TODO2: show user respective picture of their random number
  showDicePicture(userRandomNumber,"user");
  showDicePicture(computerRandomNumber,"computer");

  // TODO3: display winner in the score board
  findWinner(userRandomNumber,computerRandomNumber)

  // TODO4: store the current score 
    // A: increment scores and loop number
    loopno++;

    document.querySelector(".user-scores").innerHTML = `${userScores} win, ${loopno -(userScores + drow)} loose and ${drow} drows.` 

    document.querySelector(".computer-scores").innerHTML = `${computerScores} win, ${loopno -(computerScores + drow)} loose and ${drow} drows.`

  // TODO5: display the scores inform of (x-winning,y-loose,z-drow)
  // checked

}

function showDicePicture(number,player){
  if (number === 1){
    if (player==="user"){
      userPicture.setAttribute("src"," dice1.png");
    } else {
      computerPicture.setAttribute("src"," dice1.png")
    }
  } else if (number === 2){
    if (player==="user"){
      userPicture.setAttribute("src"," dice2.png");
    } else {
      computerPicture.setAttribute("src"," dice2.png")
    }
  }  else if (number === 3){
    if (player==="user"){
      userPicture.setAttribute("src"," dice3.png");
    } else {
      computerPicture.setAttribute("src"," dice3.png")
    }
  }  else if (number === 4){
    if (player==="user"){
      userPicture.setAttribute("src"," dice4.png");
    } else {
      computerPicture.setAttribute("src"," dice4.png")
    }
  }  else if (number === 5){
    if (player==="user"){
      userPicture.setAttribute("src"," dice5.png");
    } else {
      computerPicture.setAttribute("src"," dice5.png")
    }
  }  else if (number === 6){
    if (player==="user"){
      userPicture.setAttribute("src"," dice6.png");
    } else {
      computerPicture.setAttribute("src"," dice6.png")
    }
  }

}

function findWinner(usernumber,computernumber){
  if (usernumber > computernumber){
    winner.innerHTML="<h3>========= CONGRATULATIONS =======</h3><P>.............You win........... </P>"
    userScores++; 
    
  } else if (usernumber < computernumber){
    winner.innerHTML="<h3>========= OOPS!!!!! =======</h3><P>.............You loose........... </P>"
    computerScores++; 
  } else {
    winner.innerHTML="<h3>========= DRAW =======</h3><P>.............You both Draw........... </P>"
    drow++
  }
}


