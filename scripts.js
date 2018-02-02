// const row = document.createElement('div');
//row.classList.add('row');

const div = document.querySelector('#grid-container');
let squares = document.querySelectorAll(".square");

let rows = 3, columns = 3, rowSelect;

let setGrid = () => {
	let length = prompt("Enter a value from 1 to 100", 16);
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