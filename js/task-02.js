'use strict';

const ingredients = [
    'Картошка',    
	'Грибы',    
	'Чеснок',    
	'Помидоры',    
	'Зелень',    
	'Приправы',
];
const ulList = document.getElementById('ingredients')

for (let element of ingredients) {
    const li = document.createElement('li');
    li.textContent = element;
    ulList.appendChild(li);

	console.log(li, element)
}





// const food = [];
//  ingredients.map(el => {
//   const li = document.createElement('li');
//    li.textContent = el;
//    ulList.appendChild(li);
//    return food.push(el)
// });
// document.querySelectorAll('li')

