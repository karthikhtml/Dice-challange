// document.querySelector("h1").innerHTML="Javascipt";
// random selector for img1 (for dice1)
var randomNumber1=Math.floor(Math.random()*6)+1;// this would randomly reflects number from 1 to 6
var randomDiceNumber="dice"+randomNumber1+".png";// output: random output between dice1.png to dice6.png
var randomDiceSector="images/"+randomDiceNumber;// output: ramdom path of images/dice1.png to images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src",randomDiceSector);// output: it would randomly changes dice numbers in img1

// same random codes for img 2 (for dice2)
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceSector2="images/dice"+randomNumber2+".png";//output will be random of images/dice1.png to images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src",randomDiceSector2);

//code for change h1 element
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩play 1 wins!";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 wins! 🚩";
} else{
    document.querySelector("h1").innerHTML="draw!";
}    


