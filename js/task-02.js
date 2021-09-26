'use strict';

const ingredients = [
    'Картошка',    
	'Грибы',    
	'Чеснок',    
	'Помидоры',    
	'Зелень',    
	'Приправы',
];
const ulList = document.getElementById('ingredients');
const fragment = document.createDocumentFragment();

for (let element of ingredients) {
    const li = document.createElement('li');
    li.textContent = element;
    fragment.append(li);
}

ulList.append(fragment);