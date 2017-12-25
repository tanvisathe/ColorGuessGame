 var numSquares;
 var colors =generateRandomColors(6);
 var squares =  document.querySelectorAll(".square");
 var pickedColor = pickColor();
 var ColorDisplay = document.getElementById("colorDisplay");
 var h1 = document.querySelector("h1");
 var resetButton = document.querySelector("#reset");
 var easyBtn = document.getElementById("easyBtn");
 var hardBtn = document.getElementById("hardBtn");
 
  easyBtn.addEventListener("click", function(){
     hardBtn.classList.remove("selected");
     easyBtn.classList.add("selected");
     numSquares = 3;
     colors = generateRandomColors(numSquares);
     pickedColor = pickColor();
     ColorDisplay.textContent = pickedColor;
    for(var i=0; i< squares.length; i++){
        if(colors[i]){
        squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
            }
    }    
 });

    hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    ColorDisplay.textContent = pickedColor;
   for(var i=0; i< squares.length; i++){
       if(colors[i]){
       squares[i].style.backgroundColor = colors[i];
       squares[i].style.display = "block";
       }
       
   }
});

 

 resetButton.addEventListener("click", function(){
     // generate new colors
     colors =generateRandomColors(numSquares);
     //pick a new random color
     pickedColor = pickColor();
     //change colorDisplay to match picked color
     ColorDisplay.textContent = pickedColor;
     // change colors of squares
     for(var i=0; i<squares.length;i++){
        //change color of squares to match the pickedcolor
        squares[i].style.backgroundColor = colors[i];
       }
       h1.style.backgroundColor = "#232323";    

 });

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
        console.log(clickedColor, pickedColor);
        if(clickedColor === pickedColor){
           messageDisplay.textContent = "Correct!";
           changeColors(clickedColor);
           // h1 background changes to corerct guessed color
           h1.style.backgroundColor = clickedColor;
           resetButton.textContent="Play Again?";
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
    arr.push(randomColor());
}
//return that array
return arr;
}

function randomColor(){
    // pick a red from 0 - 255
    var  r = Math.floor(Math.random() * 256);
    // pick a green from 0 - 255
    var  g = Math.floor(Math.random() * 256);
    // pick a blue from 0 - 255
    var  b = Math.floor(Math.random() * 256);
   
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

