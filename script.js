const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

var numSquares = prompt("Digite um numero", 1000);

console.log(typeof numSquares)

if(!numSquares){
	numSquares = 1000
}

for(let i=0; i<numSquares; i++) {
 	$('#container').append(`<div class="square"></div>`)
	
}

$('.square').on('mouseover', function()  {
	setColorToEl(this);
});

$('.square').on('mouseout', function()  {
	removeColorFromEl(this);
});

function setColorToEl(element) {
	const color = getRandomColor();
	$(element).css('background-color',color)
	$(element).css('boxShadow',`0 0 2px ${color}, 0 0 10px ${color}`);
}

function removeColorFromEl(element) {
	console.log(element)
	$(element).css('background-color','#1d1d1d');
	$(element).css('boxShadow',`0 0 2px #000`);
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}