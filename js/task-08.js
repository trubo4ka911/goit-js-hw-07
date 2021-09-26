'use strict';

const controls = document.getElementById('controls');
const boxes = document.getElementById('boxes');
const buttonRenderEl = document.querySelector("button[data-action='render']");
const buttonDestroyEl = document.querySelector("button[data-action='destroy']");
const inputEl = document.querySelector('input');
const maxValue = Number(inputEl.getAttribute('max'));

function rgbColor() {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	const rgb = `rgb(${red} , ${green}, ${blue})`;
	console.log(rgb);
	return rgb;
}

function createBoxes() {
	const currentValue = Number(inputEl.value);
	const fragment = document.createDocumentFragment();
	const initialSize = 30;
	const hasChild = boxes.hasChildNodes(); 
	console.log(hasChild);

	if (hasChild) {
		boxes.innerHTML = "";
	}
	
	for (let i = 0; i<currentValue; i += 1) {
		const box = document.createElement('div');	
		const currentSize = (initialSize+(i*10));  
		console.log(currentSize);
		box.style.width = currentSize+"px";
		box.style.height = currentSize+"px";
		box.style.background = rgbColor();

		fragment.append(box);
	}
	boxes.append(fragment);
	inputEl.value = "";
	
	console.log(typeof currentValue)
}

buttonRenderEl.addEventListener("click", createBoxes);

function destroyBoxes() {
	boxes.innerHTML = "";
};
buttonDestroyEl.addEventListener("click", destroyBoxes)