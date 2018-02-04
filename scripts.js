// const row = document.createElement('div');
//row.classList.add('row');

const div = document.querySelector('#grid-container');
const colorChoices = document.getElementById("color_choices");
const buttonClear = document.querySelector('#clear');
const buttonDisco = document.querySelector('#disco');

let setGrid = () => {
	let length = prompt("Enter a value from 1 to 50", 16);

	while (length > 50 || length < 1) {
		length = prompt("Please enter only a value from 1 to 50", 16);
	}

	let children = document.querySelectorAll(".row");

	children.forEach((child) => div.removeChild(child));

	for (let r = 0; r != length; r++) {
		let row = document.createElement("div");
		row.classList.add("row");

		for (let c = 0; c < length; c++) {
			let col = document.createElement("div");
			col.classList.add("square");
			// col.setAttribute("style", "width: " + 640 / length + "px; height: " + 640 / length + "px;");
			row.appendChild(col);
		}

		div.appendChild(row);
	}
}

setGrid();

let squares = document.querySelectorAll(".square");

let rgb = () => Math.floor(Math.random() * 255);
let hsl = (min, max) => Math.floor(Math.random() * (max - min) + min);

let color = (e) => {
	let colorChoice, x = rgb();
	let currentChoice = colorChoices.options[colorChoices.selectedIndex].value;

	if (currentChoice == 'gray-shade') {
		colorChoice = 'rgb(' + x + ',' + x + ',' + x + ')';
	} else if (currentChoice == 'red-shade') {
		colorChoice = 'hsl(' + hsl(0, 30) + ', ' + hsl(60, 100) + '%, ' + hsl(50, 90) + '%)';
	} else if (currentChoice == 'green-shade') {
		colorChoice = 'hsl(' + hsl(90, 180) + ', ' + hsl(60, 100) + '%, ' + hsl(50, 90) + '%)';
	} else if (currentChoice == 'blue-shade') {
		colorChoice = 'hsl(' + hsl(180, 270) + ', ' + hsl(60, 100) + '%, ' + hsl(50, 90) + '%)';
	} else if (currentChoice == 'purple-shade') {
		colorChoice = 'hsl(' + hsl(270, 300) + ', ' + hsl(60, 100) + '%, ' + hsl(50, 90) + '%)';
	} else if (currentChoice == 'gray') {
		colorChoice = '#BDBDBD';
	} else if (currentChoice == 'black') {
		colorChoice = '#000';
	} else if (currentChoice == 'blue') {
		colorChoice = '#1E88E5';
	} else if (currentChoice == 'green') {
		colorChoice = '#00E676';
	} else if (currentChoice == 'purple') {
		colorChoice = '#E040FB';
	} else if (currentChoice == 'red') {
		colorChoice = '#F44336';
	} else if (currentChoice == 'random') {
		colorChoice = 'rgb(' + rgb() + ',' + rgb() + ',' + rgb() + ')';
	}

	e.target.style.backgroundColor = colorChoice;
};

squares.forEach((e) => e.addEventListener('mouseover', color));

let clear = (e) => squares.forEach((e) => e.style.backgroundColor = 'hsl(0, 0%, 100%)');
let disco = (e) => squares.forEach((e) => e.style.backgroundColor = 'rgb(' + rgb() + ',' + rgb() + ',' + rgb() + ')');

buttonDisco.addEventListener('click', disco);
buttonClear.addEventListener('click', clear);