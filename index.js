var randomNumber1=Math.floor(Math.random()*6)+1;

var ImageSrc1 ="images/dice" +randomNumber1+ ".png" ;

document.querySelectorAll("img")[0].setAttribute("src",ImageSrc1);

var randomNumber2=Math.floor(Math.random()*6)+1;

var ImageSrc2 ="images/dice" +randomNumber2+ ".png";

document.querySelectorAll("img")[1].setAttribute("src", ImageSrc2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 WINS!";
}

else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 WINS!";
}

else{
    document.querySelector("h1").innerHTML="Its a DRAW!";
}