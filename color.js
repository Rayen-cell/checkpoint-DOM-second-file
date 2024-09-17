// document.addEventListener("DOMContentLoaded", function () {
// 	const colorBox = document.getElementById("color-box");
// 	const changeColorBtn = document.getElementById("change-color-btn");

// 	function getRandomColor() {
// 		const letters = "0123456789ABCDEF";
// 		let color = "#";
// 		for (let i = 0; i < 6; i++) {
// 			color += letters[Math.floor(Math.random() * 16)];
// 		}
// 		return color;
// 	}

// 	changeColorBtn.addEventListener("click", function () {
// 		colorBox.style.backgroundColor = getRandomColor();
// 	});
// });

// document.getElementById("change-color-btn").onclick = function () {
// 	document.getElementById("color-box").style.backgroundColor =
// 		"#" + Math.random().toString(16).substr(-6);
// };

// 2
// color array
let colors = ["black", "orange", "red", "brown", "violet"];

// get the button
let button = document.getElementById("change-color-btn");

// add event listener
button.addEventListener("click", function () {
	// choose the color from the color array
	var randomColor = colors[Math.floor(Math.random() * colors.length)];
	let container = document.getElementById("color-box");
	container.style.background = randomColor;
});