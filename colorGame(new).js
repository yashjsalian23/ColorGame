var numSquares=6;
var colors= generateRandomColor(numSquares);
function randomColor()
{
 		
 	var r=Math.floor(Math.random()*256);
 	var g=Math.floor(Math.random()*256);
 	var b=Math.floor(Math.random()*256);
 	return "rgb(" +r+", "+g+", "+b+")";
}
function generateRandomColor(num)
{
 	var arr=[];
 	for(var j=0;j<num;j++)
 		arr.push(randomColor());
 	return arr;
}
var squares=document.querySelectorAll(".square"); //square array
var pickedColor= pickColor();
function pickColor()
{
 	var random=Math.floor(Math.random()* colors.length);
 	return colors[random];
}
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");


for(var i=0; i<squares.length; i++)
{
 	squares[i].style.backgroundColor=colors[i];
 	squares[i].addEventListener("click", function(){
 		var clickedColor=this.style.backgroundColor;//imp
 		if(clickedColor===pickedColor)
 		{
 			messageDisplay.textContent="Correct";
 			changeColor(clickedColor);
 			h1.style.backgroundColor=pickedColor;
 			reset.textContent="Play Again?";

 		}
 		else{
 			this.style.backgroundColor="#232323";
 			messageDisplay.textContent="Try again";
 		}

 	});
 	function changeColor()
 	{
 		for(var i=0; i<squares.length;i++)
 		{
 			squares[i].style.backgroundColor=pickedColor;
 		}
 	}
 }

 var reset=document.getElementById("reset");
 reset.addEventListener("click",function(){
 	colors= generateRandomColor(numSquares);
 	pickedColor= pickColor();
 	colorDisplay.textContent=pickedColor;
 	for(var i=0;i<squares.length;i++)
 		squares[i].style.backgroundColor=colors[i];
 	h1.style.backgroundColor="steelblue";
 	messageDisplay.textContent="";
 	reset.textContent="New Colors";
 	
 });

 var easyBtn=document.getElementById("easyBtn");
 var hardBtn=document.getElementById("hardBtn");

 easyBtn.addEventListener("click",function(){
 	easyBtn.classList.add("selected");
 	hardBtn.classList.remove("selected");
 	numSquares=3;
 	colors=generateRandomColor(numSquares);
 	pickedColor=pickColor();
 	colorDisplay.textContent=pickedColor;
 	for(var i=0;i<squares.length;i++)
 	{
 		if(colors[i])
 		{
 			squares[i].style.backgroundColor=colors[i];
 		}
 		else
 			squares[i].style.display="none";
 	}
 });

 hardBtn.addEventListener("click", function(){
 	easyBtn.classList.remove("selected");
 	hardBtn.classList.add("selected");
 	numSquares=6;
 	colors=generateRandomColor(numSquares);
 	pickedColor=pickColor();
 	colorDisplay.textContent=pickedColor;
 	for(var i=0;i<squares.length;i++)
 	{
 		
 		
 	squares[i].style.backgroundColor=colors[i];
 		
 		
 	squares[i].style.display="block";
 	}
 });




 	
