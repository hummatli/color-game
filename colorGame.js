var colors = generateRandomColors(6)

var squares = document.querySelectorAll(".square")
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.getElementById("message")
var h1 = document.querySelector("h1")
var resetBtn = document.querySelector("#reset")

var pickedColor = pickColor()



resetBtn.addEventListener("click", function() {
	colors = generateRandomColors(6)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor

	for(var i =0; i < squares.length; i++) {
		//add initial colors to squares
		squares[i].style.backgroundColor = colors[i]
	}
	// h1.style.backgroundColor = "#232323"
	h1.style.backgroundColor = document.body.style.backgroundColor
})


colorDisplay.textContent = pickedColor

for(var i =0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i]

	//add click listener to square
	squares[i].addEventListener("click", function() {
		//grab color selected square
		var clickedColor = this.style.backgroundColor
		
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!"
			resetBtn.textContent = "Paly Again?"
			changeColors(clickedColor)
		} else {
			this.style.backgroundColor = "#232323"
			messageDisplay.textContent = "Try Again"
		}
	})
}


function changeColors(color) {

	h1.style.backgroundColor = color
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color
	}
}

function pickColor() {
	
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

function generateRandomColors(num) {
	//make an array
	var arr = []

	//add num random colors to array
	for(var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	
	//return array
	return arr
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256)
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256)
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256)

	return "rgb(" + r + ", " + g + ", " + b + ")"
}




