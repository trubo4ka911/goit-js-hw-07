const ingredients = [
    'Картошка',    
	'Грибы',    
	'Чеснок',    
	'Помидоры',    
	'Зелень',    
	'Приправы',
];
const ulList = document.getElementById('ingredients')

const food = [];
 ingredients.map(el => {
  const li = document.createElement('li');
   li.textContent = el;
   ulList.appendChild(li);
   return food.push(el)
});
document.querySelectorAll('li')