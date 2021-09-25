'use strict';

const controls = document.getElementById('controls');
const boxes = document.getElementById('boxes');
const buttonRenderEl = document.querySelector("button[data-action='render']");
const buttonDestroyEl = document.querySelector("button[data-action='destroy']");
const inputEl = document.querySelector('input');
const maxValue = Number.parseInt(inputEl.getAttribute('max'));
	
const createBoxes = function (amount) {
		if (boxes.children.length > 0) {
			destroyBoxes();
		}
		const tempMainDiv = [];
		for (let i = 0; i < amount; i += 1) {
			const tempDiv = document.createElement('div');
			
			const red = Math.floor(Math.random() * 256);
			const green = Math.floor(Math.random() * 256);
			const blue = Math.floor(Math.random() * 256);
			
			tempDiv.style.width = tempDiv.style.height = `${30 + 10 * i}px`;
			tempDiv.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
			const tempP = document.createElement("p");
			tempP.textContent = i + 1;
			tempDiv.append(tempP);
			tempMainDiv.push(tempDiv);
		}
		boxes.append(...tempMainDiv);
	};
	
	const destroyBoxes = function () {
		const tempMainDiv = document.createElement('div');
		tempMainDiv.id = boxes;
		boxes.replaceWith(tempMainDiv);
	};

	buttonRenderEl.addEventListener("click", () => {
		let obj = Number.parseInt(inputEl.value);

		if (obj > maxValue || obj < -maxValue) {
			inputEl.value = maxValue;
			createBoxes(maxValue);
			return;
		}

		createBoxes(Math.abs(obj));
	});
	buttonDestroyEl.addEventListener("click", destroyBoxes);
