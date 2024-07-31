let myBtn = document.querySelector('#btn');
let myDrinks = document.getElementsByName('drinks');

let selectedList = document.getElementById('selected');
let noneSelectedList = document.getElementById('none-selected');

myBtn.addEventListener('click', () => {
    selectedList.innerHTML = "被勾選的飲料";
    noneSelectedList.innerHTML = "沒被勾選的飲料";

    for (let i = 0; i < myDrinks.length; i++) {
        if (myDrinks[i].checked) {
            selectedList.innerHTML += `<li>${myDrinks[i].value}</li>`;
        }
        else {
            noneSelectedList.innerHTML += `<li>${myDrinks[i].value}</li>`;
        }
    }
});