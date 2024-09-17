// Declaration

var plusBtns = Array.from(document.querySelectorAll(".fa-plus-circle"));
var minusBtns = Array.from(document.querySelectorAll(".fa-minus-circle"));
var favs = Array.from(document.querySelectorAll(".fa-heart"));
var deleteBtns = Array.from(document.querySelectorAll(".fa-trash-alt"));
var cards = Array.from(document.querySelectorAll(".card"));

// Favourites
for (let fav of favs)
	fav.addEventListener("click", function () {
		if (fav.style.color == "black") {
			fav.style.color = "red";
		} else {
			fav.style.color = "black";
		}
	});

// Add button
for (let plus of plusBtns) {
	plus.addEventListener("click", function () {
		plus.nextElementSibling.innerHTML++;
		total();
	});
}

// Minus button
for (let minus of minusBtns) {
	minus.addEventListener("click", function () {
		// minus.previousElementSibling.innerHTML > 0
		// 	? minus.previousElementSibling.innerHTML--
		// 	: null;
		// total();
		if (minus.previousElementSibling.innerHTML > 0) {
			minus.previousElementSibling.innerHTML--;
		} else {
			null;
		}
		total();
	});
}

// delete button
for (let i in deleteBtns) {
	deleteBtns[i].addEventListener("click", function () {
		cards[i].remove();
		total();
	});
}

// 	Total price
function total() {
	let qte = Array.from(document.querySelectorAll(".qute"));
	let price = Array.from(document.querySelectorAll(".unitt-price"));
	let s = 0;
	for (let i = 0; i < price.length; i++) {
		s = s + price[i].innerHTML * qte[i].innerHTML;
	}
	document.getElementById("total-price").innerHTML = s;
}