'use strict';

const navEl = document.querySelector('#categories');

console.log(`В списке ${navEl.childElementCount} категории.`)

const items = document.querySelectorAll('.item');
items.forEach(element => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Категория: ${title}\nКоличество элементов: ${itemsLength}`);
});


// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4