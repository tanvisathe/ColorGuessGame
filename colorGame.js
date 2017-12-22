var colors =generateRandomColors(6);

var squares =  document.querySelectorAll(".square");
 var pickedColor = pickColor();
 var ColorDisplay = document.getElementById("colorDisplay");
 ColorDisplay.textContent = pickedColor;
 var messageDisplay = document.getElementById("message");
for(var i=0; i<squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click",function(){
        //grab color of picked square
        var clickedColor= this.style.backgroundColor;
        //compare color to pickedcolor
        if(clickedColor === pickedColor){
           messageDisplay.textContent = "Correct!";
           changeColors(clickedColor);
        }
        else{
            this.style.backgroundColor= "#232323";
            messageDisplay.textContent= "Try Again";
        }
    });   
}

function changeColors(color){
    //loop through all squares
    for(var i=0; i<squares.length;i++){
        //change color of squares to match the pickedcolor
        squares[i].style.backgroundColor = color;
    }
    
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
//make an array
var arr = [];
//repeat num times
for(var i =0; i< num; i++){
    //get random color and push into array
}
//return that array
return arr;
}

function randomColor(){
    // pick a red from 0 - 255
    Math.floor(Math.random() * 256);
    // pick a green from 0 - 255
    // pick a blue from 0 - 255
}
