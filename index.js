"use strict";

const modal_button = document.querySelector("#modal-button");
const percentage = document.querySelector("#percentage");
modal_button.addEventListener("click", () => {
	const bar = document.getElementById("js-progressbar");
	const animate = setInterval(function () {
		bar.value += 10;
		percentage.textContent = `${bar.value}%`;
		if (bar.value >= bar.max) {
			clearInterval(animate);
		}
	}, 1000);
});
