alert("Hey, Please choose names Player1, Player2 among yourselves")
//for first dice setting up
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);
//for 2nd one
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomDiceImage2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player1 Wins!";
}
else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="🎌Match Draws!";
}
else{
    document.querySelector("h1").innerHTML="🏴Player2 Wins!"; 
}



